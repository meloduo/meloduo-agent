# Working on meloduo-agent

- The bridge must never write to stdout: stdout carries the MCP protocol. Log to stderr.
- The bridge does not know the tools. They come from the tab (`{type:'tools'}`); only `list_tabs` and `use_tab` live in `daemon.ts`. Do not add a dependency on the app.
- Shared rules for agents go to the server `instructions` in `mcp/src/index.ts`, not into tool descriptions.
- After a change run `pnpm typecheck` and `pnpm smoke` in `mcp/`.
- Skills are plain `SKILL.md` folders with no client-specific tools. When a tool, a parameter or a `render_preview` field changes in the app, update the skills too.
- Comments are rare: only a reason the code cannot show, one line, in English.
