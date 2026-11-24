# @meloduo/mcp

Connect any MCP client to [Meloduo](https://meloduo.github.io), a browser DAW. Your agent edits the project open in your browser tab: it writes notes, shapes sounds and mixes. You see every edit and the reason for it, and one click undoes the agent's whole turn.

## Use it

You need Node.js 20 or newer. Add the bridge to your MCP client as a stdio server:

```json
{ "command": "npx", "args": ["-y", "@meloduo/mcp"] }
```

| Client | Setup |
|---|---|
| Claude Code | `claude mcp add meloduo -- npx -y @meloduo/mcp` |
| Cursor | `~/.cursor/mcp.json`: `{ "mcpServers": { "meloduo": { "command": "npx", "args": ["-y", "@meloduo/mcp"] } } }` |
| VS Code | `.vscode/mcp.json`: `{ "servers": { "meloduo": { "type": "stdio", "command": "npx", "args": ["-y", "@meloduo/mcp"] } } }` |
| Codex | `~/.codex/config.toml`: `[mcp_servers.meloduo]`, `command = "npx"`, `args = ["-y", "@meloduo/mcp"]` |

On native Windows some clients need `cmd /c npx` instead of `npx`.

Then:

1. Open [meloduo.github.io/app](https://meloduo.github.io/app/) and click **Connect agent** in the agent panel.
2. Click once in the tab so the browser allows sound.
3. Ask your agent for a track.

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
