---
name: genre-phonk
description: Phonk numbers: drift and Memphis phonk grids, the cowbell melody as a synth part, distorted 808, clipped drums; use for phonk or drift phonk tracks.
---

# Phonk

Genre numbers are orientation; the reference wins. Swing values: craft-groove-swing.

## When

Use it for drift phonk (fast, aggressive, cowbell melody, distorted 808) and Memphis phonk (slower, dusty, trap-style hats over old rap samples). Ask which one the user means if the reference does not say.

## Tempo and drums

| Genre | Tempo, centre (range) | Kick | Snare / clap | Hats and other |
|---|---|---|---|---|
| Drift phonk | 150 (130–160), felt in half time | 0, 7, 10 | 8 (half time), or 4, 12 | hats in eighths or sixteenths with rolls |
| Memphis phonk | 70 (60–80), or the same counted at double time | 0, 10 and variations | 4, 12 | trap-style hats, rolls |

- Tempo claims vary a lot (90–160) because people count half and double time differently. Choose by feel: the snare on 8 at 150 feels like 75.
- Heavy kick; a snappy, distorted snare or clap. A second snare layer on every second hit adds weight.
- Hats with strong velocity variation for a rolling feel; rolls in 1/32 or 1/16t before phrase ends.

## Swing and groove

- Straight: `swing` 0 on kick and snare. Hats can take the trap row of craft-groove-swing (0–16).
- The bounce comes from hat accents and the cowbell rhythm, not from swing.

## Harmony

- Phrygian minor. Typical loops are short: i–bII, i–bII–i–VII, or a single root with a b2 neighbour.
- The cowbell melody is a 1–2 bar riff in eighths or sixteenths, repeated with small changes.
- The 808 follows the root of the cowbell riff.

## Form

- Short tracks: Intro 8 (cowbell or sample alone), Drop 16, Break 8, Drop 16, Outro 4–8. Usually 1:45–2:30.
- The intro often filters the cowbell (Low cut or High cut sweep) before the full drop.

## Roles

| Role | Preset candidates | Key numbers | Role guide |
|---|---|---|---|
| cowbell melody | Lead/Phonk Phonk cowbell (a synth, not a drum) | in key, eighths and sixteenths, register 72–96 | role-lead |
| 808 | 808 Phonk, Distorted, Rage | `drive` high, `presence` up; tuned to the cowbell root | role-808 |
| kick | Trap or 808 kit | short and heavy, clicky | role-kick |
| snare, clap | Trap kit snare and clap layered | distorted, bright | role-snare-clap |
| hats | Trap kit hats | rolls, velocity 60–120 | role-hats-cymbals |
| dark colour | Pad Dark pad; Texture Dark drone; Bell/Hip-hop Trap bell | quiet, under the drop | role-pad |

## The cowbell is a synth

A drum note's pitch is ignored in Meloduo, so a drum cowbell cannot play a melody. Write the melody on a synth channel with the Phonk cowbell preset (Lead/Phonk). Check the name with `get_synth` before use.
1. Tune the riff to the key of the track; an out-of-key cowbell is the most common error.
2. Add grit: the Grit macro, sat Hard on the channel, or `warp` Quantize for a crushed tone.
3. Send it and the 808 to one bus with sat Hard for the lo-fi, overloaded sound (tool-buses-sends).

## FX and mix signature

- Drums loud and overloaded: sat Hard on the drum bus, then the limiter. Keep the kick readable.
- 808 distorted with the sub mono; `duck` from the kick, 3–6 dB (tool-sidechain-duck).
- Memphis: High cut on the music bus at 6–10 kHz and sat Tube for a tape colour.
- Master at −14 LUFS; a loud master only when the user asks (targets: craft-loudness-lufs).

## Reference core

1. The cowbell melody, in key, carrying the hook.
2. A distorted, loud 808 on the cowbell root.
3. Heavy, overdriven drums with rolling hats.
4. Phrygian darkness: the b2 is the colour.

## Beginner mistakes

- A clean, polite mix: phonk is dirty on purpose.
- A cowbell out of key, or 808 and cowbell roots that disagree.
- No mono sub under the distorted 808.
- So much saturation that the kick disappears.

## Engine limits for this genre

- No bitcrusher or clipper: `warp` Quantize on the synth, sat Hard and the limiter (craft-engine-limits).
- No Memphis vocal samples unless the user imports them; then place them with the sampler (role-vocal-substitute). Otherwise a dark synth phrase answers the cowbell.

## Related

`role-808`, `tool-808`, `genre-trap`, `craft-engine-limits`, `stage-track-card`
