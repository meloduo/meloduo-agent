---
name: craft-groove-swing
description: Make a groove feel human: swing by genre in Meloduo units, velocity layers, ghost notes, tick shifts, humanize.
---

# Groove and swing

Swing (`set_channel` `swing`, 0–100) delays every second 16th. Meloduo `swing` = (MPC swing % − 50) × 4: MPC 54 % → 16, 58 % → 32, 62 % → 48, 66 % → 64, 75 % → 100. Orientation by genre: the table below. Give the channels of one groove the same value; the kick often stays at 0.

## How swing works in Meloduo

- `swing` lives on the channel strip: `set_channel` with `swing` 0–100. `set_mix` has no swing field: set it channel by channel.
- It delays notes that start exactly on an odd 16th (steps 1, 3, 5 …) by up to half a 16th; the notes themselves stay. A note you shifted with `+Nt` is no longer on the grid, so swing leaves it alone.
- Swing works on 16ths only. A swung-eighth feel on kick and snare is a manual shift: move the off-beat eighths late with `+Nt` in a `line` (tool-notation-lines).
- Usually: hats and percussion first, the kick straight (0), the bass with the same value as the drums of its groove, or they drift apart.

## Orientation by genre

Values are Meloduo `swing` units, converted from MPC percentages. Start inside the range, then trust the reference.

| Genre | MPC % | Meloduo `swing` | Channels |
|---|---|---|---|
| Trap, drill | 50–54 | 0–16 | hats; kick and snare 0 |
| Techno | 50–56 | 0–24 | hats, ride |
| House, deep house | 54–61 | 16–44 | hats, shaker, percussion, bass |
| UK garage | 60–66 | 40–64 | hats, bass, snare |
| Boom bap | hats about 74 | hats 60–96 | hats; kick and snare 0–28 |
| Lo-fi | 55–62 | 20–48 | hats, shaker, keys |
| Afrobeats, amapiano | 55–60 | 20–40 | shaker, percussion, log drum, all the same |
| Funk | 54–58 | 16–32 | hats, bass |
| Drum and bass | 50–60 | 0–40 | hats, ghost snares |
| Synthwave, pop-punk, metal | 50 | 0 | — |

## Velocity layers and ghost notes

Producers shape a groove mostly with a repeating accent pattern and systematic timing, not with random jitter.

1. Write drum velocity into the `grid` itself: `X` is 127, `x` the line velocity (default 100), `g` a ghost at 45, digits 1–9 are 14…127 (5 ≈ 71, 7 ≈ 99, 9 = 127).
2. Hats in 16ths: strong positions about 90–115, weak ones 60–95, the same accent shape every beat, for example `"9575 9575 9575 9575"`.
3. Ghost snares: `g` (or 2–4) around a backbeat of 90–120, for example on steps 7, 9 and 15 in boom bap or drum and bass.
4. On an Acoustic drum, velocity changes the tone as well as the level: a soft ghost is darker, a hard hit brighter. A soft acoustic snare helps lo-fi and funk.
5. `humanize_notes` after the checks: on drums `velocityPct` 5–10 with `timingMs` 0 (random timing on kick and snare blurs the groove); on keys and live parts `timingMs` 5–10 and `velocityPct` 8–12. Notes of one chord move together.
6. A laid-back snare is a systematic shift, not jitter: `+Nt` in a `line` (24 ticks per 16th; one tick = 60000 / BPM / 96 ms, about 7 ms at 85 BPM). A drum ignores pitch, so any note works: `". . . . C4+2t . . . . . . . C4+2t . . ."`. `+Nt` does not work inside `grid`.

Check: the snare velocities in the notes spread by more than 8, and the ghosts sit 40 or more below the backbeat.

## Related

`craft-drum-programming`, `tool-note-editing`, `tool-notation-lines`, `role-hats-cymbals`
