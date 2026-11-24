---
name: tool-note-editing
description: Edit existing notes: transpose, copy, thin out, scale velocity, humanize.
---

# Note editing

## Tools

| Tool | What it does | Typical use |
|---|---|---|
| `edit_notes` | changes notes by id | fix a clash, lengthen a note, move one hit |
| `transpose_notes` | moves notes by semitones | a key lift for the last chorus |
| `copy_notes` | copies notes, `semitones`, `patternIds` | an octave double (+12) in every section at once |
| `remove_notes` | removes by pattern, channel, step and pitch range | hats out under a break, thinning a verse |
| `scale_velocity` | multiplies velocity, `factor` 0.1–3 | softer verse, harder chorus |
| `humanize_notes` | random timing (`timingMs` 0–50) and velocity (`velocityPct` 0–50), `seed` | live feel on keys and guitars |
| `set_steps` | toggles steps of a drum pattern | quick drum edits |

## Recipes

1. **Humanize by role** (craft-groove-swing): drums `velocityPct` 5–10, `timingMs` 0; keys and live parts `timingMs` 5–10, `velocityPct` 8–12. Run it after `check_melody`: a note shifted one tick early can confuse the analysis.
2. **Velocity as tone.** Through distortion (amp, sat, synth drive) and on Acoustic drums, velocity changes the tone more than the level. Verse: `scale_velocity` 0.8–0.85 on drums and guitar for a softer hit. Chorus: a clone at 1.1–1.2 for a harder attack. Then even out the levels with `set_mix` `trimDb`. Velocity alone does not make a section bigger: pair it with a new pattern (craft-pattern-variation).
3. **Double in every section:** `copy_notes` with `patternIds` and `semitones` 12 or −12 to another channel.

## Related

`tool-notation-lines`, `craft-groove-swing`, `craft-pattern-variation`
