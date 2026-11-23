# meloduo-agent

Connect any AI agent to Meloduo, a browser DAW. The agent edits the project open in your tab; you see every edit, and one button undoes the agent's whole turn.

- `mcp/`: the MCP bridge. Works with any MCP client (Claude Code, Cursor, VS Code, Codex CLI, Gemini CLI and others).
- `skills/`: agent skills in the `SKILL.md` format: `meloduo-produce` (an idea to a mastered track) and `meloduo-sound-design` (design the sounds instead of trusting presets).

## Run the bridge

Node 20 or newer and pnpm.

```sh
cd mcp
pnpm install
```

Add it to your MCP client as a stdio server:

```json
{ "command": "node", "args": ["<path>/mcp/node_modules/tsx/dist/cli.mjs", "<path>/mcp/src/index.ts"] }
```

Open Meloduo in the browser. The tab connects to the bridge on `127.0.0.1:8787` and sends it the tool list.

- `pnpm stop` stops the shared bridge.
- `pnpm smoke` checks the bridge end to end with a fake tab, on port 8788.
- `MELODUO_PORT` sets the port. The log is `meloduo-bridge.log` in the system temp folder.

## How it works

Every MCP session starts a thin stdio proxy (`src/index.ts`). The proxies share one daemon per machine (`src/daemon.ts`), which holds the WebSocket port and the open tabs. The bridge holds no project state and no tool code: each tab sends its tools as JSON Schema, checks the arguments and runs the calls. So the tool list always matches the app version you have open.
