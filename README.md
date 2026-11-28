# meloduo-agent

Connect any AI agent to Meloduo, a browser DAW. The agent edits the project open in your tab; you see every edit, and one button undoes the agent's whole turn.

- `mcp/`: the MCP bridge. Works with any MCP client. Tested with Claude Code and Cline; setup for Cursor, VS Code and Codex is in `mcp/README.md`.
- `skills/`: four agent skills in the `SKILL.md` format: `meloduo` (where to start, routes a request), `meloduo-produce` (an idea to a mastered track in ten stages), `meloduo-sound-design` (design the sounds instead of trusting presets) and `meloduo-mix` (mix and master).
- `guides/`: more than 100 short producer guides the skills load one topic at a time: stages, sound roles, genres, studio tools and craft.

## Getting started

You need Node.js 20 or newer, a desktop browser and an MCP client. Tested clients: Claude Code and Cline. Other MCP clients may work but are untested. An MCP client is an AI app that can use tools: Claude Code runs in a terminal, Cline is a VS Code extension.

1. Add the bridge to your client.
   - Claude Code, in a terminal:
     ```
     claude mcp add meloduo -- npx -y @meloduo/mcp
     ```
   - Cline: open Cline's MCP Servers panel and choose Configure MCP Servers. Add this to `cline_mcp_settings.json` and save:
     ```json
     { "mcpServers": { "meloduo": { "command": "npx", "args": ["-y", "@meloduo/mcp"] } } }
     ```
   - On native Windows, use `cmd /c npx` instead of `npx` if the client cannot start the server: `claude mcp add meloduo -- cmd /c npx -y @meloduo/mcp`, or in Cline `"command": "cmd", "args": ["/c", "npx", "-y", "@meloduo/mcp"]`.
2. Start a new chat or session in your client (in Claude Code, quit and run `claude` again). The client then starts the bridge. The first start downloads the package and can take a minute.
3. Open [meloduo.github.io/app](https://meloduo.github.io/app/) in your browser and click **Connect agent** in the agent panel on the right (on the start screen, the same button). The panel label changes from "Bridge offline" (the tab cannot reach the bridge) to "No agent connected" (the bridge runs, no client session is attached) to "Connected". The tab retries by itself, so this can take a few seconds.
4. Click once anywhere in the tab. The browser blocks sound until you do.
5. Check it. Ask your agent: "What is in my project?" It must name your tempo and channels. Then ask: "Write a four-bar drum loop." The notes appear in your project, and each edit comes with its reason.

To undo the agent's whole turn, click **Undo turn** on its card in the agent panel. Ctrl+Z undoes one call.

Other clients take the same command as a stdio server (untested): setup for Cursor, VS Code and Codex is in `mcp/README.md` and at https://meloduo.github.io/#setup.

### Troubleshooting

- The panel says "Bridge offline": the bridge is not running. Start a new client session, and check that the client lists the `meloduo` server (Claude Code: `claude mcp list`). The log is `meloduo-bridge.log` in the system temp folder.
- "No agent connected": the bridge runs, but your client has not attached. Start a new client session and check the `meloduo` server is listed.
- Port 8787 is busy: another program holds it. Set `MELODUO_PORT` for the server (Claude Code: `claude mcp add meloduo -e MELODUO_PORT=8788 -- npx -y @meloduo/mcp`; Cline: add `"env": { "MELODUO_PORT": "8788" }` to the server), set the same port in the app's Settings, and start a new client session.
- The agent says "No Meloduo tab is open": open the app in a tab and click **Connect agent**.
- Two Meloduo tabs are open: the agent works on the latest one. Close the extra tabs, or ask the agent to call `list_tabs` and `use_tab`.
- You run the app from a dev server or another address (not meloduo.github.io): the bridge refuses unknown origins. Set `MELODUO_ORIGINS=http://localhost:5173` (your origin) the same way (Claude Code: `-e MELODUO_ORIGINS=http://localhost:5173`; Cline: `env`). Then stop the running bridge, because it reads the setting only at start: `npx @meloduo/mcp stop` (with a custom port: `MELODUO_PORT=8788 npx @meloduo/mcp stop` in bash, `$env:MELODUO_PORT=8788; npx @meloduo/mcp stop` in PowerShell). Start a new client session.
- No sound: click once in the tab.
- A call stops with "Tab did not answer in time": keep the tab open and visible, then ask the agent to retry with a shorter bar range.
- The tool list looks old after an app update: reload the tab.
- Stop a stuck bridge with `npx @meloduo/mcp stop` (same port variable as above), then start a new client session.

## Commands and settings

- `npx @meloduo/mcp stop` stops the shared bridge.
- `MELODUO_PORT` sets the port. `MELODUO_ORIGINS` (comma-separated) lets more app origins connect as tabs, for example a dev server on another port. The log is `meloduo-bridge.log` in the system temp folder.

## Skills

Clone or download the repository and copy the four folders in `skills/` into your client's skills folder. The skills load guides with the bridge tool `get_guide`; without it they read `../../guides/<id>.md` or fetch the guide from GitHub. A client without skills can load `skills/meloduo/SKILL.md` as instructions.

## Develop the bridge

In `mcp/`: `pnpm install`, then point your client at the source with `{ "command": "node", "args": ["<path>/mcp/node_modules/tsx/dist/cli.mjs", "<path>/mcp/src/index.ts"] }`. From source the daemon restarts itself when a `.ts` file changes.

- `pnpm smoke` checks the bridge end to end with a fake tab, on port 8788. `MELODUO_SMOKE_ENTRY=<path>/dist/index.js pnpm smoke` checks a built package.
- `pnpm build` writes `dist/`; `npm publish` runs the type check and the build first.
- After `npm publish`, run the "Publish to MCP Registry" workflow on GitHub. It takes the version from `mcp/package.json`.

## How it works

Every MCP session starts a thin stdio proxy (`src/index.ts`). The proxies share one daemon per machine (`src/daemon.ts`), which holds the WebSocket port and the open tabs. The bridge holds no project state and no tool code: each tab sends its tools as JSON Schema, checks the arguments and runs the calls. So the tool list always matches the app version you have open.

## License

MIT, see [LICENSE](LICENSE). It covers the bridge, the skills and the guides in this repository, not the Meloduo app.
