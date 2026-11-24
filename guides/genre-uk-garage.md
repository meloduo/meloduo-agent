---
name: genre-uk-garage
description: UK garage and 2-step numbers: tempo, broken kick grid, heavy swing, organ and minor-seventh stabs, subby bass; use when the user asks for UK garage, 2-step or speed garage.
---

# UK garage

Genre numbers are orientation; the reference wins. Swing values: craft-groove-swing.

## When

The user names UK garage, 2-step, speed garage or a "garage" groove. For four-on-the-floor garage house, start from `genre-house` and borrow the swing and stabs from here.

## Tempo and feel

- Around 130 BPM, usually 128–134.
- A skippy, swung 16th feel; the groove matters more than the melody.

## Drums (Meloduo steps 0–15, 2-step)

| Part | Steps | Notes |
|---|---|---|
| Kick | 0, 10 | no kick on beats 2 and 4 (steps 4 and 12); vary bar 2, for example 0, 2, 10 |
| Snare / clap | 4, 12 | clap or snare layered with a rim |
| Closed hat | syncopated 16ths, for example 2, 3, 6, 7, 11, 14 | soft, no hard offbeat accent |
| Open hat | 2, 6, 14 | the offbeat lift |
| Rim, shaker | offbeats and ghost 16ths | shuffle under the hats |

Kit: House or 909, or Acoustic for a softer top. Speed garage keeps a four-on-the-floor kick on 0, 4, 8, 12.

## Swing and groove

- `swing` 40–64 on hats, bass and snare ghosts; some classic beats swing even harder. The kick stays at 0.
- Bass and percussion share one value, or the groove drifts apart.
- Velocity shapes on the hats do as much as swing (craft-groove-swing).

## Harmony

- Mostly minor keys with soulful extensions: minor 7ths, 9ths, sus chords.
- Short, syncopated stabs leave room for the groove; long dense pads flatten it.
- Loops of 2–4 chords, often only 2.

## Form

- Built in 8-bar blocks; elements come in and out every 8 or 16 bars.
- One bar without drums before the drop is a common move.
- DJ-friendly intro and outro of 16–32 bars; a bassless outro is usual.

## Roles

| Role | Preset candidates | Key numbers | Guide |
|---|---|---|---|
| Bass | Bass/House Garage bass, Organ bass; Bass/DnB Reese bass for a darker take | short, subby, repetitive; a sine sub 1–2 octaves below | `role-sub-bass` |
| Stab | Organ/House House organ; Keys Electric piano; Brass Brass stab | minor 7th and 9th chords, short decay, offbeat | `role-stab-chords` |
| Vocal chop | user's imported vocal on the sampler | short chops on the offbeats | `role-vocal-substitute` |
| Drums | House or 909 kit; rim, shaker | 2-step grid above | `craft-drum-programming` |
| Ear candy | FX Laser zap, Riser; Texture Vinyl air | one detail per 8 bars | `role-texture` |

## FX and mix signature

- Bass ducked from the kick (`duck`, `depth` 2–6 dB).
- A short room or plate on the stabs and chops; dry, upfront drums.
- Light drive on the drum bus (`sat` Soft).
- Master at −14 LUFS; a loud master only when the user asks (targets: craft-loudness-lufs).

## Reference core

1. The 2-step kick: 0 and 10, nothing on beats 2 and 4.
2. Heavy swing on hats and bass.
3. Subby, repetitive bass that answers the kick.
4. Short organ or minor-seventh stabs.
5. Chopped vocal fragments as a rhythmic layer.

## Beginner mistakes

- A straight four-on-the-floor kick when the user asked for 2-step.
- No swing, or swing on the kick too.
- Long pads that fill every gap.
- A bass that plays on every kick and loses the bounce.

## Engine limits

No time stretch or vocal processing: the user imports vocals, and you chop them with the sampler (`start`, `end`). Details: `craft-engine-limits`.

## Related

`genre-house`, `craft-groove-swing`, `role-stab-chords`, `craft-drum-programming`, `tool-sampler`
