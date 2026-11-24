# Working on meloduo-agent

- The bridge must never write to stdout: stdout carries the MCP protocol. Log to stderr.
- The bridge does not know the tools. They come from the tab (`{type:'tools'}`); only `list_tabs`, `use_tab` and `get_guide` live in `daemon.ts`. Do not add a dependency on the app.
- Shared rules for agents go to the server `instructions` in `mcp/src/index.ts`, not into tool descriptions.
- After a change run `pnpm typecheck` and `pnpm smoke` in `mcp/`.
- Skills are plain `SKILL.md` folders with no client-specific tools; the knowledge lives in `guides/<id>.md` (one topic each, at most 8 KB, frontmatter `name` and `description`, a `Related` section), served by the bridge tool `get_guide`. When a tool, a parameter or a `render_preview` field changes in the app, update the guides too. Run `pnpm check-guides` in `mcp/` after editing guides or skills.
- Comments are rare: only a reason the code cannot show, one line, in English.
- Publish the bridge from `mcp/` with `npm publish --access public`; `prepublishOnly` runs the type check and the build. Check a built package with `MELODUO_SMOKE_ENTRY=<path>/dist/index.js pnpm smoke`.
