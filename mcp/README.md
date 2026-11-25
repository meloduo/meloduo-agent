# @meloduo/mcp

Connect any MCP client to [Meloduo](https://meloduo.github.io), a browser DAW. Your agent edits the project open in your browser tab: it writes notes, shapes sounds and mixes. You see every edit and the reason for it, and one click undoes the agent's whole turn.

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

Other clients take the same command as a stdio server (untested):

| Client | Setup |
|---|---|
| Cursor | `~/.cursor/mcp.json`: `{ "mcpServers": { "meloduo": { "command": "npx", "args": ["-y", "@meloduo/mcp"] } } }` |
| VS Code | `.vscode/mcp.json`: `{ "servers": { "meloduo": { "type": "stdio", "command": "npx", "args": ["-y", "@meloduo/mcp"] } } }` |
| Codex | `~/.codex/config.toml`: `[mcp_servers.meloduo]`, `command = "npx"`, `args = ["-y", "@meloduo/mcp"]` |

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

The bridge also serves the producer [guides](https://github.com/meloduo/meloduo-agent/tree/main/guides) through its own tool `get_guide` (read-only, works without a tab). For the full producer workflow, add the [skills](https://github.com/meloduo/meloduo-agent/tree/main/skills) to your client.

## Commands and settings

- `npx @meloduo/mcp stop` stops the shared bridge.
- `MELODUO_PORT` sets the port (default 8787). Change it in the app's Settings too.
- `MELODUO_ORIGINS` (comma-separated) lets more app origins connect, for example a dev server on another port.
- The log is `meloduo-bridge.log` in the system temp folder.

## How it works

Each MCP session starts a small stdio proxy. All proxies share one bridge process per machine on `127.0.0.1:8787`. The Meloduo tab connects to it and sends its tool list, so the tools always match the app version you have open. The bridge listens only on your computer, holds no project data and sends nothing anywhere else.

## License

MIT. Source and issues: [github.com/meloduo/meloduo-agent](https://github.com/meloduo/meloduo-agent).
