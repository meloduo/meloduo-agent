---
name: tool-notation-lines
description: Write and read parts as text lines: grid, degrees, chords, Euclidean rhythms, triplets and tick shifts.
---

# Note lines

Steps count from 0: 16 per bar, 0 is beat one, 4 beat two, 8 beat three, 12 beat four. MIDI: C4 = 60.

- The grid is `grid`: `x... x... x... x...`, accent `X`, ghost `g`, velocity as digits 1–9. Rolls use `unit` 1/32.

## Writing in scale degrees, and three examples

`add_notes` with `lines`: `line` in degrees, `unit` 1/8, `octave` sets where degree 1 is. `.` is a rest, `:2` a length of 2 units, `5'` an octave up, `1,` an octave down. Fill each bar completely: the lengths add up to the bar. Syntax: `get_notation`.

Three examples, three different characters. Do not copy them: they show the form, not the notes.

**Minor, with repeats (A A' B A'', Am–F):**
- A: `"5 5 . 3:2 . 1 . | 5 5 . 6:2 5 . ."`
- A': `"5 5 . 3:2 . 1 . | 5 5 . 4:2 3 . ."`
- B: `"7 7 . 5:2 . 3 . | 1' 1' . 7:2 . . ."` (peak on 1', approached by a leap)
- A'': `"5 5 . 3:2 . 2 . | 1:4 . . . ."` (a long tonic)

**Major, with a pickup (A B A C):**
- A: `". . . . . . 3 4 | 5:3 3 2:2 1 ."`
- B: `". . . . . . 4 5 | 6:3 5 4:2 . ."`
- A: the first two bars again
- C: `". . . . . . 5 6 | 1':2 7 6 5:4"` (the peak, then a close on 5)

**Trap loop (A A A A', unit 1/16):**
- A: `"1 . . 1 . . 3 . . . 4 . 3 . . . | 1:4 . . . . . . 7, . 1 . . ."`
- A': bar 1 the same, bar 2 `"5:4 . . 4 . 3 . 1:4 . ."`

## Syntax reference

`add_notes` `lines` items: `{channelId, grid or line, fromBar, unit, velocity, pitch, octave}`. Several lines on one channel are voices. `get_notation` returns the full reference.

| Where | Symbol | Meaning |
|---|---|---|
| grid | `x` `X` `g` `1`–`9` `.` | hit at the line velocity (default 100), accent 127, ghost 45, velocity n·127/9, rest |
| grid | `E(k,n)`, `E(k,n,r)` | Euclidean rhythm of k hits over n units, rotated r units left; grid only |
| line | `C4`, `C4+E4+G4`, `A2m`, `C3maj/E2`, `1`–`7`, `5'`, `1,` | note, chord, letter chord, slash chord, scale degree, octave up, octave down |
| line | `:N`, `!`, `!N` | length in units, accent 127, velocity N |
| line | `+Nt`, `-Nt` | shift by N ticks without moving the cursor; 24 ticks per 16th; line only |
| line | `{…}x4`, `{…}in2`, `{…}in2x4` | repeat, squeeze into 2 units (triplets), both; up to 4 levels; **not in `grid`**: for a repeated drum bar write a one-bar pattern and place it several times (`place_patterns`), or a drum part as `line` with pitches |
| line | `↓` `↑` | guitar strum direction, guitar channels only |
| both | `|` | bar check |

`unit`: 1/4, 1/8, 1/16 (default), 1/32, 1/8t, 1/16t.

## Recipes

- Euclidean percussion: `grid` `"E(3,8)"`, `"E(5,16,2)"` (craft-drum-programming).
- Triplets: `{C4 D4 E4}in2` with `unit` "1/8"; a triplet hat roll `{x x x}in2` is not valid in `grid`, write it as `{C4 C4 C4}in2` in a `line`.
- Laid-back or pushed notes: `+Nt` / `-Nt` in a `line` (craft-groove-swing).
- Dilla-style hats: `unit` "1/16t".
- Before you edit a part, read it as text: `get_project_state` with `notation: "degrees"` (or "names") gives each part as lines in this format. Copy a line, edit it and send it back with `add_notes` `replace: true`. It is much shorter than the note list.

## Related

`tool-note-editing`, `craft-melody-motif`, `craft-drum-programming`, `tool-check-melody`
