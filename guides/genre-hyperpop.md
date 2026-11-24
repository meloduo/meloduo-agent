---
name: genre-hyperpop
description: Hyperpop numbers and practices: fast half-time drums, distorted 808, bright sidechained chords, glitch leads, contrast; use when the user asks for hyperpop or a maximal glitch-pop track.
---

# Hyperpop

Genre numbers are orientation; the reference wins. Swing values: craft-groove-swing.

## When

The user names hyperpop, glitch pop, digicore or a maximal, bright, over-the-top pop track. The voice in such a track is only the user's own: Meloduo does not sing. Build the instrumental core and leave room for the vocal the user records elsewhere.

## Tempo and feel

- Often very fast and felt in half time: around 200 BPM is common (a half-time feel near 100). In practice 140–180 is also usual.
- Straight 16ths. Bouncy pop parts and sudden switches to another genre (a guitar section, a trance drop) are idiomatic.

## Drums (Meloduo steps 0–15, two-bar pattern at about 200 BPM)

| Part | Bar 1 | Bar 2 |
|---|---|---|
| Kick | 0, 12 | 12, 14 |
| Snare | 8 | 8 |
| Hats | eighths (0, 2, 4 …) with short rolls in 32nds or triplets | the same, a roll before the bar end |

Kit: Trap or 808. The drums often go through hard saturation; the hats usually stay clean so the top does not turn to noise.

## Swing and groove

`swing` 0. The movement comes from rolls, stutters and sudden stops, not from shuffle.

## Harmony

- Minor or bright major pop progressions; chromatic moves are common (an example shape: i–bIII–ii–i in a minor key).
- The 808 follows the chord roots with octave jumps.
- Short loops of 2–4 chords; the hook carries more than the harmony.

## Form

- Intro of 8–16 bars, often with a filter sweep; the drop at bar 17 is a usual shape.
- A glitch section or a new lead in the second half.
- Switch the genre for one section for contrast, then return.

## Roles

| Role | Preset candidates | Key numbers | Guide |
|---|---|---|---|
| 808 | Distorted, Rage, Trap | `drive` up; roots with octave jumps | `role-808` |
| Chords | Pad Supersaw pad, Future chords; Pluck Future pluck | band-limit to about 300–850 Hz, wide; duck from kick and snare | `role-pad` |
| Lead | Lead/Chiptune 8-bit square, Chip lead; Lead/Future bass Kawaii lead | short glitch repeats written as notes | `role-lead` |
| Ear candy | Texture Bit crush texture; FX Laser zap, Sci-fi bleeps | one detail per phrase | `role-texture` |
| Drums | Trap or 808 kit | snare on 8; sat Hard on the drum bus | `role-snare-clap` |

## FX and mix signature

- The beat and the 808 own the centre. Wide synths stay out of the centre and under them.
- Synths are ducked from the kick and the snare (`duck`, `depth` 4–8 dB).
- Distortion is a tool of contrast: pick 1–2 parts to push hard (`sat` Hard or Soft, high `drive`) and keep the others clean.
- Master at −14 LUFS; a loud master only when the user asks (targets: craft-loudness-lufs).

## Reference core

1. A fast, punchy beat with the snare on the half-time backbeat.
2. A dirty 808 that follows the roots with octave jumps.
3. Bright, sidechained chords in the mids.
4. A glitchy, high lead or chop as the hook carrier.
5. Contrast: one sudden quiet or clean moment before a loud section.

## Beginner mistakes

- Everything distorted: no contrast, the track turns into one grey block.
- A pile-up of harsh energy in 2–5 kHz (check `highMid` in the stems).
- Wide synths crowd the centre and push the beat and the 808 back.
- A toy synth used as a stand-in for the vocal. Leave the vocal to the user.

## Engine limits

No vocal, pitch correction or formant shift; no bitcrush or beat-repeat plugin. Write glitches as notes (short repeats, 32nd rolls) and use chip and bit presets for the crushed sound. Details: `craft-engine-limits`.

## Related

`genre-trap`, `role-808`, `craft-section-contrast`, `craft-engine-limits`, `genre-pop`
