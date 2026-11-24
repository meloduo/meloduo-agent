import { readFileSync, watch, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { WebSocketServer, type WebSocket } from 'ws';
import { GUIDE_TOOL, getGuide } from './guides.js';

// Never write to stdout: the proxies read this process's output; log to stderr.
const log = (...a: unknown[]) => console.error('[bridge]', ...a);

const PORT = Number(process.env.MELODUO_PORT ?? 8787);
const CALL_TIMEOUT_MS = 120_000;
const RENDER_TIMEOUT_MS = 600_000;
const timeoutOf = (tool: string) => (tool === 'render_preview' || tool === 'match_loudness' || tool === 'match_eq' ? RENDER_TIMEOUT_MS : CALL_TIMEOUT_MS);
const IDLE_MS = Number(process.env.MELODUO_IDLE_MS ?? 15 * 60_000);

// Proxies (Node) send no Origin and a page always does, so /agent must come without one. Tabs: the published app and MELODUO_ORIGINS (comma-separated, for a dev server).
// No dev port by default: any other Vite project on 5173 would become a tab that answers the agent.
const APP_ORIGINS = ['https://meloduo.github.io'];
const TAB_ORIGINS = new Set([...APP_ORIGINS, ...(process.env.MELODUO_ORIGINS ?? '').split(',').filter(Boolean)]);
const wss = new WebSocketServer({
  host: '127.0.0.1',
  port: PORT,
  verifyClient: ({ origin, req }: { origin?: string; req: { url?: string } }) => (req.url === '/agent' ? !origin : !origin || TAB_ORIGINS.has(origin)),
});

// Without a handler a busy port prints a stack. A second bridge (two sessions started at once) exits quietly.
wss.on('error', (e: NodeJS.ErrnoException) => {
  log(e.code === 'EADDRINUSE' ? `port ${PORT} is busy: a bridge is already running, or another program holds the port (set MELODUO_PORT to use another one)` : e);
  process.exit(e.code === 'EADDRINUSE' ? 0 : 1);
});

type Client = { name: string; version: string };
// pick: the project id a session chose with use_tab; without one it follows the latest open tab.
type Agent = { client: Client | null; pick?: string; sid: string };
const agents = new Map<WebSocket, Agent>();

type ToolDef = { name: string; description?: string; inputSchema: object };
type Tab = { ws: WebSocket; name: string; trusted: boolean; activeAt?: number; reported?: number; project?: { id: string | null; name: string }; readOnly?: boolean; tools?: ToolDef[] };
const tabs: Tab[] = [];
let nextTab = 1;
const openTabs = () => tabs.filter((t) => t.ws.readyState === t.ws.OPEN);
// The tab the user touched last wins (activeAt; a tab without it counts by connection order); when it closes the previous one takes over. Of two tabs with the project, the one that may edit it.
const latest = () => openTabs().reduce<Tab | undefined>((best, t) => (!best || (t.activeAt ?? 0) >= (best.activeAt ?? 0) ? t : best), undefined);
const tabFor = (pick?: string) => {
  if (!pick) return latest();
  const has = openTabs().filter((t) => t.project?.id === pick);
  return has.filter((t) => !t.readOnly).at(-1) ?? has.at(-1);
};
const tellTabs = () => {
  const users = [...agents.values()].reverse();
  for (const tab of openTabs()) tab.ws.send(JSON.stringify({ type: 'client', client: users.find((a) => a.client && tabFor(a.pick) === tab)?.client ?? null }));
};

const tabView = (pick?: string) => {
  const latest = tabFor();
  const used = tabFor(pick);
  return {
    tabs: openTabs().map((t) => ({ tab: t.name, projectId: t.project?.id ?? null, project: t.project?.name ?? null, readOnly: !!t.readOnly, latest: t === latest, yours: t === used })),
    using: pick ? { projectId: pick, tab: used?.name ?? null } : 'latest',
  };
};
const BRIDGE_TOOLS = [
  {
    name: 'list_tabs',
    description:
      'List the open Meloduo tabs: tab, projectId, project (name), readOnly (another tab edits this project), latest (the last opened tab), yours (where your calls go). Without use_tab, calls go to the last opened tab. Call it when the user talks about another project or your edits land in the wrong place.',
    inputSchema: { type: 'object', properties: {} },
  },
  {
    name: 'use_tab',
    description:
      'Pick the project for this session: all later calls go to the tab with this project, also after it reloads. Take projectId from list_tabs. Without projectId the session follows the last opened tab again. Call get_project_state after the pick.',
    inputSchema: { type: 'object', properties: { projectId: { type: 'string', description: 'Project id from list_tabs; empty means the last opened tab.' } } },
  },
  GUIDE_TOOL,
];

type Reply = { id: number; result?: unknown; error?: string };
let nextCall = 1;
let nextSession = 1;
const BOOT = Date.now().toString(36);

function callTab(tool: string, args: unknown, session: number, signal: AbortSignal, { pick, sid, client }: Agent): Promise<unknown> {
  const ws = tabFor(pick)?.ws;
  if (!ws && pick) return Promise.reject(new Error(`No open tab has the project you picked (${pick}). Ask the user to open it, or call list_tabs and use_tab (use_tab with no projectId follows the latest tab).`));
  if (!ws) return Promise.reject(new Error('No Meloduo tab is open. Ask the user to open Meloduo in the browser, then retry.'));
  const id = nextCall++;
  return new Promise((resolve, reject) => {
    // The tab must drop the call, or the render goes on, a retry starts a second one and the tab swells.
    const timer = setTimeout(() => done(() => (ws.send(JSON.stringify({ type: 'cancel', id })), reject(new Error('Tab did not answer in time. The call was cancelled: retry it with fromBar and toBar (a part of the song), stems false and no spectrum to make it faster.')))), timeoutOf(tool));
    const onMessage = (raw: Buffer) => {
      let msg: Reply;
      try {
        msg = JSON.parse(raw.toString()) as Reply;
      } catch {
        log('tab sent invalid JSON, ignored');
        return;
      }
      if (msg.id !== id) return;
      done(() => (msg.error ? reject(new Error(msg.error)) : resolve(msg.result)));
    };
    const onClose = () => done(() => reject(new Error('The DAW tab closed during the call. Open the tab and call get_project_state before retrying.')));
    const onAbort = () => done(() => (ws.send(JSON.stringify({ type: 'cancel', id })), reject(new Error('Cancelled by the client.'))));
    const done = (finish: () => void) => {
      clearTimeout(timer);
      ws.off('message', onMessage);
      ws.off('close', onClose);
      signal.removeEventListener('abort', onAbort);
      finish();
    };
    ws.on('message', onMessage);
    ws.on('close', onClose);
    signal.addEventListener('abort', onAbort);
    ws.send(JSON.stringify({ id, tool, args, session, sid, client }));
  });
}

// The tab owns the tools and sends their JSON Schema. The cache lets a session that starts before the tab see the full list.
const CACHE = join(tmpdir(), `meloduo-tools-${PORT}.json`);
let cached: ToolDef[] = [];
const readCache = () => {
  try {
    const list: unknown = JSON.parse(readFileSync(CACHE, 'utf8'));
    if (validTools(list)) cached = list;
  } catch {}
};
const tabTools = () => openTabs().filter((t) => t.tools && t.trusted).at(-1)?.tools ?? cached;
const toolDefs = () => [...tabTools(), ...BRIDGE_TOOLS];
const tellAgents = () => {
  const msg = JSON.stringify({ type: 'tools', tools: toolDefs() });
  for (const ws of agents.keys()) if (ws.readyState === ws.OPEN) ws.send(msg);
};
// Descriptions reach the agent as text it reads: a cap keeps a tab from planting a long prompt (Claude Code cuts at 2048 anyway).
const isTool = (t: unknown) =>
  !!t &&
  typeof (t as ToolDef).name === 'string' &&
  /^[a-z0-9_]{1,64}$/.test((t as ToolDef).name) &&
  ((t as ToolDef).description === undefined || (typeof (t as ToolDef).description === 'string' && (t as ToolDef).description!.length <= 2048)) &&
  typeof (t as ToolDef).inputSchema === 'object' &&
  (t as ToolDef).inputSchema !== null &&
  JSON.stringify((t as ToolDef).inputSchema).length <= 50_000;
const validTools = (list: unknown): list is ToolDef[] => Array.isArray(list) && list.length <= 200 && list.every(isTool);
readCache();
const takeTools = (tab: Tab, list: unknown) => {
  if (!validTools(list)) return log('tab sent an invalid tool list, ignored');
  const before = JSON.stringify(tabTools());
  tab.tools = list as ToolDef[];
  if (JSON.stringify(tabTools()) === before) return;
  cached = tabTools();
  // Only a built-in app origin or a tab with no Origin may write the cache that outlives the bridge.
  if (tab.trusted)
    try {
      writeFileSync(CACHE, JSON.stringify(cached));
    } catch {}
  tellAgents();
};

let idleTimer: ReturnType<typeof setTimeout> | undefined;
const armIdle = () => {
  clearTimeout(idleTimer);
  if (agents.size === 0) idleTimer = setTimeout(() => (log('no sessions, closing'), process.exit(0)), IDLE_MS);
};

wss.on('connection', (ws, req) => {
  if (req.url !== '/agent') {
    const origin = req.headers.origin;
    const tab: Tab = { ws, name: `tab${nextTab++}`, trusted: !origin || TAB_ORIGINS.has(origin) };
    tabs.push(tab);
    tellTabs();
    log(`tab connected (${tabs.length} open)`);
    // Replies to calls are handled in callTab; this reads the tab's project and tools.
    ws.on('message', (raw) => {
      try {
        const msg = JSON.parse(raw.toString());
        // The daemon stamps the time itself: a number from the tab could claim the future and take every call.
        if (msg.type === 'tab') {
          if (typeof msg.activeAt === 'number' && msg.activeAt !== tab.reported) (tab.reported = msg.activeAt), (tab.activeAt = Date.now());
          (tab.project = msg.project), (tab.readOnly = !!msg.readOnly), tellTabs();
        }
        if (msg.type === 'tools') takeTools(tab, msg.tools);
      } catch {}
    });
    ws.on('close', () => {
      const before = JSON.stringify(tabTools());
      tabs.splice(tabs.indexOf(tab), 1);
      if (JSON.stringify(tabTools()) !== before) tellAgents();
      tellTabs();
      log(`tab disconnected (${tabs.length} open)`);
    });
    return;
  }

  const session = nextSession++;
  // An old proxy sends no sid: fall back to one unique to this daemon's life.
  const me: Agent = { client: null, sid: `${BOOT}-${session}` };
  agents.set(ws, me);
  const running = new Map<number, AbortController>();
  armIdle();
  log(`session connected (${agents.size} open)`);
  ws.on('close', () => {
    for (const ctl of running.values()) ctl.abort();
    agents.delete(ws);
    tellTabs();
    armIdle();
    log(`session disconnected (${agents.size} open)`);
  });
  ws.on('message', async (raw) => {
    let msg: { id?: number; type?: string; tool?: string; args?: unknown; client?: Client | null; pick?: string; sid?: string };
    try {
      msg = JSON.parse(raw.toString());
    } catch {
      return;
    }
    // The proxy repeats the pick in hello, so a daemon restart keeps the session's project.
    if (msg.type === 'hello') return void ((me.client = msg.client ?? null), (me.pick = msg.pick || undefined), (me.sid = msg.sid || me.sid), tellTabs());
    if (msg.type === 'tools') return void ws.send(JSON.stringify({ type: 'tools', tools: toolDefs() }));
    if (msg.type === 'quit') return process.exit(0);
    if (msg.type === 'cancel') return void (msg.id !== undefined && running.get(msg.id)?.abort());
    const { id, tool, args } = msg;
    const reply = (r: object) => ws.readyState === ws.OPEN && ws.send(JSON.stringify({ id, ...r }));
    if (tool === 'list_tabs') return reply({ result: tabView(me.pick) });
    if (tool === 'get_guide') {
      log(`get_guide ${JSON.stringify((args as { topics?: unknown } | undefined)?.topics ?? 'index')}`);
      return reply(getGuide(args));
    }
    if (tool === 'use_tab') {
      const pick = (args as { projectId?: unknown } | undefined)?.projectId;
      if (pick !== undefined && typeof pick !== 'string') return reply({ error: 'projectId must be a string from list_tabs. Call list_tabs and retry.' });
      if (pick && !tabFor(pick)) return reply({ error: `No open tab has project ${pick}. Call list_tabs for the open projects, or ask the user to open it.` });
      me.pick = pick || undefined;
      ws.send(JSON.stringify({ type: 'pick', pick: me.pick ?? null }));
      tellTabs();
      return reply({ result: tabView(me.pick) });
    }
    if (typeof tool !== 'string') return reply({ error: 'A call needs a tool name.' });
    const ctl = new AbortController();
    running.set(id!, ctl);
    try {
      reply({ result: await callTab(tool, args, session, ctl.signal, me) });
    } catch (e) {
      reply({ error: e instanceof Error ? e.message : String(e) });
    } finally {
      running.delete(id!);
    }
  });
});

if (!process.env.MELODUO_NO_WATCH && import.meta.url.endsWith('.ts')) {
  let timer: ReturnType<typeof setTimeout> | undefined;
  watch(fileURLToPath(new URL('.', import.meta.url)), { recursive: true }, (_e, file) => {
    if (!file || !/\.ts$/.test(file) || /\.test\.ts$|smoke\.ts$|check-guides\.ts$/.test(file)) return;
    clearTimeout(timer);
    timer = setTimeout(() => (log(`${file} changed, restarting`), process.exit(0)), 400);
  });
}

armIdle();
log(`ready, ws on 127.0.0.1:${PORT}`);
