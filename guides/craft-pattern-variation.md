---
name: craft-pattern-variation
description: Vary repeated patterns: A and A-end, cloned variants swapped into clips, doubles and thinning.
---

# Pattern variations

## Pattern variations

- A repeated part gets "A" and "A-end": `clone_pattern`, then edit the last bar of the phrase (a fill, a dropout, an extra hit).
- The bass can develop over the phrase: "A" and "A-end", not one bar on repeat.
- Trap: the kick does not repeat exactly for 4 bars in a row; hat rolls at phrase ends; a new hat pattern in the second drop.
- Edit one copy of a repeated riff: a changed last note turns two lines into a question and an answer.
- `remove_notes` removes notes by channel and steps (hats under a break).
- `copy_notes` with `patternIds` makes a double in all patterns at once.
- `scale_velocity` 0.8 on the first chorus works only together with a new pattern, not instead of one.

## Meloduo recipe: variants that land in the arrangement

1. `clone_pattern` → edit the copy (a fill, a dropout, an extra hit, new hats) → `edit_clips` `{id, patternId}` on the clips that should change. The original keeps playing elsewhere.
2. A long stretch with no change sounds like a loop: something should change at least every 8 bars and clearly every 16.
3. Reuse before you add: one pattern per part and section type, its variants made by `clone_pattern`, and repeats placed as clips (`place_patterns`). A 3-minute track usually needs 8–15 patterns, not 25+; a new pattern for every 4 bars is hard for the user to edit.
4. Details: tool-patterns-clips.

## Related

`tool-patterns-clips`, `tool-note-editing`, `craft-drum-programming`
