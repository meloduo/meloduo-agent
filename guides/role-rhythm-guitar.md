---
name: role-rhythm-guitar
description: Rhythm guitars that are not flat: amp, picking, mute, doubles that differ in timbre, room for vocals.
---

# Rhythm guitar

A flat guitar is a clean sound without mids and identical doubles. The `amp` gives the distortion; a rig preset gives the whole chain (tool-guitar-rig).

1. **Amp.** `gain` by genre: crunch about 20, pop-punk and rock 24–32, aliasing starts above 34. `mid` up for pop-punk and rock, `bass` moderate (leave the low end to the bass), `treble` for brightness. A 4x12 cabinet is denser and lower, 2x12 medium, 1x12 brighter. The amp's `out` sets the level after distortion; the guitar `gain` barely changes it.
2. **The voice itself.** `pickPos` (near the neck warmer, near the bridge brighter and meaner), `pickup`, `hardness` (pick attack), `mute` for a chug.
3. **Double.** Two rhythm guitar channels, panned apart (±0.6–1). Make them differ beyond panning: another `pickPos`, `position`, `feel`, a slightly different `gain` or cabinet. Make the performance differ too, as two takes would: `humanize_notes` on each double with its own `seed` (`timingMs` 5–10, `velocityPct` 8–12), and now and then a different voicing or strum direction. Identical notes in both doubles collapse into mono even with different tones.
4. **Room for vocals.** If there will be vocals: a light 2–3 kHz cut on the guitar bus rather than quiet guitars.
5. **Space.** A short room or slapback echo (1/8 or 1/8T), not a long hall.

Signs in the stem: noticeable mid and highMid; doubles with different spectra; less low end (bass) in the guitars than in the bass.

Variants to compare: 4x12 with high `gain` and raised `mid`; 2x12 with less `gain` and bright `treble`; different `pickPos` on the double.

## Strumming and tuning

1. Pop-punk: `strumDir` Down, `strum` 4–8 ms, `mute` 0.2–0.3 in the verse and 0 in the chorus. `strum` is the spread of a chord in ms (0–80); `↓` `↑` in a `line` set the direction per chord.
2. Drop tuning below E2: `set_main_pitch` −2 for Drop C (more for lower), write the notes 2 semitones higher. The sampler and drums do not move: tell the user that the project key and the sounding key differ.

## Related

`tool-guitar`, `tool-guitar-rig`, `role-lead-guitar`, `craft-stereo-width`, `tool-saturation-amp-width`
