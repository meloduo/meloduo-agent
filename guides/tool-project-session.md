---
name: tool-project-session
description: Read the project, pick the tab, keep the brief and session notes, handle stale edits and undo.
---

# Project and session

1. **Always** give `why`: one sentence in the user's language with the reason, not a retelling of the arguments.
2. **Always** respect the user's edits. Read a result with `changedSinceYourLastCall` and take it into account. Compare a rejected edit with the changes and retry it. Do not undo what the user changed by hand: `undo` refuses when the last edit is the user's, so ask the user to undo it.
3. **Always** read before you edit: `get_project_state` at the start and whenever something is unclear. Its `info` holds the brief and notes of earlier sessions: continue from them instead of asking again. Several tabs: `list_tabs`, then `use_tab` with `projectId`. Take ids from results.
4. The grid is 1/16; steps and bars count from 0. Read the note line syntax once with `get_notation`.
5. **Always** one part, one pattern. A "whole section" pattern cannot be thinned out with clips; if that happened, use `split_pattern` with `groups`.
6. Render windows (`fromBar`/`toBar`) and the full song rarely; pass `stems: false` when you do not need stems. One mix edit, one render: look at `change`.
7. **Always** clear solo and mute that you set for a check, also clip `muted`.
8. You cannot import audio (the user does: File > Import audio), export a file, listen, or automate sends, `duck`, drums or the sampler. Audio the user imported you can place and cut: `place_audio`, `set_sampler`, `edit_clips`. Do not pretend you can do more.

## Related

`tool-patterns-clips`, `tool-render-preview`, `craft-delivery-report`, `craft-engine-limits`
