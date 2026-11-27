---
name: genre-ambient
description: Ambient numbers: a living pad or drone, texture, sparse bells, long reverbs.
---

# Ambient

Genre numbers are orientation; the reference wins. Swing values: craft-groove-swing.

## When

Use it for ambient, drone, ambient electronica and calm background music: slow, evolving sound instead of beats and hooks. A cinematic or lo-fi track can borrow its pads and space.

## Tempo and feel

- Often no felt pulse. Set a slow tempo anyway (60–90) so notes, LFOs and delays have a grid.
- Long notes: whole bars and more. A pad note of 4–16 bars is normal.
- If there are drums, they are soft and sparse: a muffled kick, a shaker, a rim, low velocity.

## Swing and groove

- No groove to swing. Movement comes from slow LFOs, filter lanes and parts entering and leaving.
- `humanize_notes` with `timingMs` 10–30 on bells and keys makes them float.

## Harmony

- Lydian, ionian, major or minor pentatonic; dorian for a darker colour.
- Sus2, add9 and maj7 chords; a pedal tone (a held root) under changing chords (craft-harmony-voicing).
- Very slow harmonic rhythm: one chord per 4–16 bars, or a single drone for the whole piece.
- Few notes. Bells and keys play 1–3 notes per bar, with long rests.

## Form

- Sections are defined by layers entering and leaving, 32–64 bars or more each. Pieces often run 4–10 minutes.
- Loops of different lengths (for example 7, 9 and 11 bars) drift against each other and avoid exact repeats.
- The Loop track form in stage-form fits a short piece; a long one is a slow arc: thin, fuller, peak, thin.

## Palette

| Genre | Defining timbre | Roles usually present | Roles usually absent |
|---|---|---|---|
| Ambient | a living pad or drone | pad or drone ×1–2, texture, sparse bell, optional sub | drums (or sparse), lead |

## Sound candidates

| Genre | Role | Candidates | Edit for character |
|---|---|---|---|
| Ambient | pad, drone | Pad/Ambient Ambient drone, Shimmer pad; Pad Cinematic pad, Glass pad, Breathing pad, Dark pad | free slow LFOs |
| | texture | Texture Evolving texture, Shimmer texture, Metallic texture, Vinyl air; FX Wind | — |
| | melody | Bell Glass bell, Crystal bell, Gamelan, Tubular bell; Lead/Ambient Glass lead; Keys Vibraphone | long reverb |

Role guides: role-pad, role-sub-bass (a soft, quiet sub), role-keys.

## FX and mix signature

- Reverb is the main space tool: Hall or Plate, `decay` 6–20 s, `predelay` 20–60 ms, high `mix` on bells and textures (tool-reverb).
- `freeze` on a reverb bus holds a chord as a drone under the next one.
- Delay on bells with high `feedback` (0.5–0.7) and a dark `tone`; stack delay into reverb on slow parts.
- `lowcut` on reverb returns at 200–400 Hz so the low mids stay clean.
- Wide pads: unison and `width`, or a phaser "Ambient" or chorus "Shoegaze wash" at `mix` 0.3–0.5 (tool-modulation-fx); keep the sub mono and soft.
- Slow automation everywhere: cutoff, `pos`, macros over 8–32 bars (tool-automation).
- Light master: −14 LUFS is still the target, reached with gentle limiting. Do not squash the dynamics.

## Reference core

1. A living pad or drone that changes slowly all the time.
2. Long reverbs and delays as part of the instrument.
3. Very few notes and very slow harmony.
4. Layers that enter and leave instead of sections with drums.

## Beginner mistakes

- Too many notes and fast chord changes.
- Reverb mud in the low mids: no Low cut on the returns.
- Static loops with no automation: it sounds frozen, not calm.
- A hard limiter that flattens the swells.

## Engine limits for this genre

- No granular or tape processing: use slow `pos` movement on wavetables, `warp`, and a light pitch LFO for wow.
- No field recordings unless the user imports them; Texture presets and FX Wind stand in.
- No reverse: a long synth attack and a rising volume lane (craft-engine-limits).

## Related

`role-pad`, `tool-reverb`, `stage-track-card`, `craft-groove-swing`
