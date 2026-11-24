---
name: role-percussion
description: Add percussion layers (shaker, tambourine, conga, clave, cowbell, rim) with Euclidean patterns and panning.
---

# Percussion

## Practices

- Percussion layers (shaker, tambourine, conga, bongo, clave, cowbell, rim) carry the groove beyond kick and hats. Two or more layers in a full section are common in house, afro and Latin styles.
- Each layer gets its own rhythm: a Euclidean pattern, an offbeat or a 16th shaker, not the hat pattern again.
- Pan them apart, usually ±0.3–0.6; hats stay closer to the centre.
- Swing goes on percussion first (craft-groove-swing).

## Meloduo recipe

1. `add_channel` drum with a voice from `get_drum` (conga, shaker, clave, cowbell, rim), or `add_kit` Latin for a set.
2. Rhythm: `grid` `"E(3,8)"`, `"E(5,8)"`, `"E(5,16,2)"`; a shaker in 16ths with accents `"9575 9575 9575 9575"`.
3. `set_channel` `pan` and `swing`; a fader 6–12 dB under the hats is a usual start.
4. A drum ignores note pitch. A melodic cowbell (phonk) or tuned percussion is a synth part: the Lead/Phonk Phonk cowbell preset or a Bell preset.

## Check

The percussion stems have almost no low end and do not mask the hook: compare `highMid` and `high` with the hook stem.

## Related

`craft-drum-programming`, `tool-notation-lines`, `craft-groove-swing`
