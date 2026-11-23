# meloduo-agent

Connect any AI agent to Meloduo, a browser DAW. The agent edits the project open in your tab; you see every edit, and one button undoes the agent's whole turn.

- `mcp/`: the MCP bridge. Works with any MCP client (Claude Code, Cursor, VS Code, Codex CLI, Gemini CLI and others).
- `skills/`: agent skills in the `SKILL.md` format: `meloduo-produce` (an idea to a mastered track) and `meloduo-sound-design` (design the sounds instead of trusting presets).

## Connect your client

You need Node.js 20 or newer. Add the bridge to your MCP client as a stdio server:

```json
{ "command": "npx", "args": ["-y", "@meloduo/mcp"] }
```

Claude Code: `claude mcp add meloduo -- npx -y @meloduo/mcp`. Other clients: https://meloduo.github.io/#setup.

Open Meloduo at https://meloduo.github.io/app/ (or your local dev server). The tab connects to the bridge on `127.0.0.1:8787` and sends it the tool list.

- `npx @meloduo/mcp stop` stops the shared bridge.
- `MELODUO_PORT` sets the port. `MELODUO_ORIGINS` (comma-separated) lets more app origins connect as tabs, for example a dev server on another port. The log is `meloduo-bridge.log` in the system temp folder.

## Skills

Copy `skills/meloduo-produce` and `skills/meloduo-sound-design` into your client's skills folder. A client without skills can load `SKILL.md` as instructions.

## Develop the bridge

In `mcp/`: `pnpm install`, then point your client at the source with `{ "command": "node", "args": ["<path>/mcp/node_modules/tsx/dist/cli.mjs", "<path>/mcp/src/index.ts"] }`. From source the daemon restarts itself when a `.ts` file changes.

- `pnpm smoke` checks the bridge end to end with a fake tab, on port 8788. `MELODUO_SMOKE_ENTRY=<path>/dist/index.js pnpm smoke` checks a built package.
- `pnpm build` writes `dist/`; `npm publish` runs the type check and the build first.

## How it works

Every MCP session starts a thin stdio proxy (`src/index.ts`). The proxies share one daemon per machine (`src/daemon.ts`), which holds the WebSocket port and the open tabs. The bridge holds no project state and no tool code: each tab sends its tools as JSON Schema, checks the arguments and runs the calls. So the tool list always matches the app version you have open.

## License

MIT, see [LICENSE](LICENSE). It covers the bridge and the skills in this repository, not the Meloduo app.
