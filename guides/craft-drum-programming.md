---
name: craft-drum-programming
description: Program drums: one pattern per drum role, fills at phrase ends, rolls, ghost notes, Euclidean percussion.
---

# Drum programming

## Practices

- Each drum role gets its own pattern and track (stage-groove-harmony): kick, snare or clap, hats, cymbals, toms, percussion, fills. Only then can sections thin them out.
- A fill goes in the last bar of a 4- or 8-bar phrase. Make it a variant of the pattern: `clone_pattern`, edit the last bar, then point the clips at phrase ends to the clone with `edit_clips` (tool-patterns-clips).
- Velocity and ghost notes make the groove: craft-groove-swing.

## Meloduo recipe

1. **Grid.** `add_notes` with `lines: [{channelId, grid: "x... x... x... x..."}]`, one symbol per 16th. Accents `X`, ghosts `g`, velocity digits 1–9.
2. **Euclidean percussion** (techno, afro, house tops): `grid` `"E(3,8)"` = `x..x..x.`, `"E(5,8)"` = `x.xx.xx.`, `"E(5,16,2)"` rotates by 2 steps. `E(3,16)` against straight hats gives a polyrhythm. `E()` works in `grid` only.
3. **Snare roll into a drop:** `add_notes` with `every` (steps between hits), `times`, `velocity` and `velocityTo` (a linear ramp): quarters, then eighths, then 16ths in one call each.
4. **Trap hat rolls:** a `line` with `unit` "1/32" for the last beat before a snare, or a triplet group `{C4 C4 C4}in2`; ramp velocity with `!N` per note (`C4!60 C4!80 C4!110`). Usually at ends of 4-bar phrases, not on every phrase, starting around 50–60 % velocity and rising to full.
5. **Dilla-style hats:** a `line` with `unit` "1/16t" on the hats while kick and snare stay on the straight grid.
6. **A different hat pattern for the second drop:** clone the hats pattern, edit it, swap it in with `edit_clips` only in that section.

## Check

Render the drums window with stems: the kick and snare stems keep their peaks, the hats stem is 15–18 LU under the kick before you raise it (role-hats-cymbals).

## Related

`craft-groove-swing`, `tool-notation-lines`, `craft-pattern-variation`, `role-percussion`
