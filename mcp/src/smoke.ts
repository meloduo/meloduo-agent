import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';
import { ToolListChangedNotificationSchema } from '@modelcontextprotocol/sdk/types.js';
import assert from 'node:assert/strict';
import { rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { WebSocket } from 'ws';

const PORT = '8788'; // not 8787: a live bridge may run there
rmSync(join(tmpdir(), `meloduo-tools-${PORT}.json`), { force: true });
const env = { ...(process.env as Record<string, string>), MELODUO_PORT: PORT, MELODUO_NO_WATCH: '1' };
const connectClient = async (name: string) => {
  const c = new Client({ name, version: '0.0.0' });
  await c.connect(new StdioClientTransport({ command: process.execPath, args: process.env.MELODUO_SMOKE_ENTRY ? [process.env.MELODUO_SMOKE_ENTRY] : ['--import', 'tsx', 'src/index.ts'], env }));
  return c;
};
const client = await connectClient('smoke');
let listChanged = 0;
client.setNotificationHandler(ToolListChangedNotificationSchema, async () => void listChanged++);
const names = async (c: Client) => (await c.listTools()).tools.map((t) => t.name).sort();
assert.deepEqual(await names(client), ['list_tabs', 'use_tab'], 'no tab and no cache: only the bridge tools');

// A fake tab: the bridge knows nothing about the tools, the tab sends them and checks the arguments.
const TOOLS = [
  { name: 'get_project_state', description: 'Read the project.', inputSchema: { type: 'object', properties: {} } },
  { name: 'set_tempo', description: 'Set the tempo.', inputSchema: { type: 'object', properties: { bpm: { type: 'number' }, why: { type: 'string' } }, required: ['bpm'] } },
];
type Fake = { bpm: number };
let seenClient: unknown;
const seenCalls: { tool: string; sid: string; client: { name: string } }[] = [];

async function openTab(state: Fake, project: { id: string; name: string }, onClient = (c: unknown) => void (seenClient = c), log = true) {
  const ws = await new Promise<WebSocket>((resolve, reject) => {
    const try_ = (n: number) => {
      const s = new WebSocket(`ws://127.0.0.1:${PORT}`);
      s.on('open', () => resolve(s));
      s.on('error', () => (n > 0 ? setTimeout(() => try_(n - 1), 200) : reject(new Error('bridge ws not up'))));
    };
    try_(50);
  });
  ws.send(JSON.stringify({ type: 'tools', tools: TOOLS }));
  ws.send(JSON.stringify({ type: 'tab', project, readOnly: false }));
  ws.on('message', (raw) => {
    const msg = JSON.parse(raw.toString());
    if (msg.type === 'client') return void onClient(msg.client);
    if (msg.type) return;
    const { id, tool, args } = msg;
    if (log) seenCalls.push(msg);
    ws.send('not json');
    if (tool === 'get_project_state') return ws.send(JSON.stringify({ id, result: { bpm: state.bpm } }));
    if (tool === 'set_tempo' && typeof args?.bpm === 'number') return (state.bpm = args.bpm), ws.send(JSON.stringify({ id, result: { ok: true } }));
    ws.send(JSON.stringify({ id, error: `Invalid arguments for tool ${tool}` }));
  });
  return ws;
}
const until = async (ok: () => boolean) => {
  for (let i = 0; i < 40 && !ok(); i++) await new Promise((r) => setTimeout(r, 100));
};
const text = (r: any) => r.content[0].text as string;
const json = async (c: Client, name: string, args = {}) => {
  const r = await c.callTool({ name, arguments: args });
  assert.ok(!r.isError, text(r));
  return JSON.parse(text(r));
};

const a: Fake = { bpm: 120 };
let ws = await openTab(a, { id: 'pa', name: 'Song A' });
await until(() => listChanged > 0);
assert.ok(listChanged > 0, 'the tab brings its tools: list_changed');
assert.deepEqual(await names(client), ['get_project_state', 'list_tabs', 'set_tempo', 'use_tab']);
assert.match(client.getInstructions() ?? '', /^Meloduo is a browser DAW/);

await until(() => seenClient !== undefined && seenClient !== null);
assert.deepEqual(seenClient, { name: 'smoke', version: '0.0.0' });
assert.deepEqual(await json(client, 'set_tempo', { bpm: 90, why: 'smoke' }), { ok: true });
assert.equal(a.bpm, 90);
const bad = await client.callTool({ name: 'set_tempo', arguments: { bpm: 'fast' } });
assert.equal(bad.isError, true);
assert.match(text(bad), /Invalid arguments/, 'the tab rejects bad arguments');

const second = await connectClient('smoke2');
assert.deepEqual(await names(second), await names(client));
assert.ok(!(await second.callTool({ name: 'get_project_state', arguments: {} })).isError);
await until(() => (seenClient as { name?: string } | null)?.name === 'smoke2');
assert.deepEqual(seenClient, { name: 'smoke2', version: '0.0.0' });

// Two projects in two tabs: the default is the latest tab, a session can pick a project.
const b: Fake = { bpm: 120 };
let seenB: unknown;
const tabB = await openTab(b, { id: 'pb', name: 'Song B' }, (c) => void (seenB = c));
await until(() => (seenB as { name?: string } | null)?.name === 'smoke2');
const listed = await json(client, 'list_tabs');
assert.deepEqual(listed.tabs.map((t: { project: string; latest: boolean }) => [t.project, t.latest]), [['Song A', false], ['Song B', true]]);
assert.equal(listed.using, 'latest');
await json(client, 'set_tempo', { bpm: 100, why: 'smoke' });
assert.equal(b.bpm, 100, 'default: the latest tab');
const picked = await json(client, 'use_tab', { projectId: 'pa' });
assert.deepEqual(picked.using, { projectId: 'pa', tab: listed.tabs[0].tab });
await json(client, 'set_tempo', { bpm: 111, why: 'smoke' });
assert.equal(a.bpm, 111, 'picked: tab A');
assert.equal(b.bpm, 100);
await json(second, 'set_tempo', { bpm: 122, why: 'smoke' });
assert.equal(b.bpm, 122, 'another session still goes to the latest tab');
await until(() => (seenClient as { name?: string } | null)?.name === 'smoke');
assert.deepEqual(seenClient, { name: 'smoke', version: '0.0.0' }, 'tab A shows the session that uses it');
const missing = await client.callTool({ name: 'use_tab', arguments: { projectId: 'nope' } });
assert.equal(missing.isError, true);
assert.match(text(missing), /list_tabs/);

const quit = new WebSocket(`ws://127.0.0.1:${PORT}/agent`);
await new Promise((r) => quit.on('open', r));
quit.send(JSON.stringify({ type: 'quit' }));
await new Promise((r) => setTimeout(r, 300));
const third = await connectClient('smoke3');
assert.deepEqual(await names(third), ['get_project_state', 'list_tabs', 'set_tempo', 'use_tab'], 'a new bridge with no tab yet serves the cached list');
await third.close();
ws = await openTab(a, { id: 'pa', name: 'Song A' });
const tabB2 = await openTab(b, { id: 'pb', name: 'Song B' }, (c) => void (seenB = c));
await new Promise((r) => setTimeout(r, 200));
await json(client, 'set_tempo', { bpm: 133, why: 'smoke' });
assert.equal(a.bpm, 133, 'the pick survives the bridge restart');
const firstSid = seenCalls.find((c) => c.client.name === 'smoke')!.sid;
assert.equal(seenCalls.at(-1)!.sid, firstSid, 'the session id survives the bridge restart');
assert.equal(seenCalls.at(-1)!.client.name, 'smoke');
assert.ok(seenCalls.some((c) => c.client.name === 'smoke2' && c.sid !== firstSid), 'another session has another id');
tabB2.close();
tabB.close();
assert.equal((await json(client, 'use_tab')).using, 'latest', 'use_tab without projectId resets the pick');
assert.ok(!(await client.callTool({ name: 'get_project_state', arguments: {} })).isError, 'client after the bridge restart');
assert.ok(!(await second.callTool({ name: 'get_project_state', arguments: {} })).isError, 'second client after the bridge restart');
await second.close();

ws.close();
await new Promise((r) => setTimeout(r, 200));
const offline = await client.callTool({ name: 'get_project_state', arguments: {} });
assert.equal(offline.isError, true);
assert.match(text(offline), /No Meloduo tab is open/);

// Close the session first: a live proxy would restart the bridge after quit.
await client.close();
await new Promise((r) => setTimeout(r, 400));
const stop = new WebSocket(`ws://127.0.0.1:${PORT}/agent`);
await new Promise((r) => stop.on('open', r));
stop.send(JSON.stringify({ type: 'quit' }));
rmSync(join(tmpdir(), `meloduo-tools-${PORT}.json`), { force: true });
console.log('smoke ok');
process.exit(0);
