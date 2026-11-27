---
name: meloduo-sound-design
description: Design the sounds of a Meloduo track instead of trusting presets (the 808, bass, guitars, leads, pads, drums and genre transition FX) by making variants, rendering stems and comparing them against role recipes. Use from meloduo-produce (stages 3, 5 and 8), or when the user says a sound in Meloduo is flat, thin, generic, "just a sub", or asks to make or fix a sound, a riser, an impact or a transition.
---

# Sound design in Meloduo

A preset is only a draft: it sounds decent but faceless, and tracks built on presets sound alike. You cannot hear the audio, so make every main sound the way you make a hook: several variants → render stems → compare with the role recipe → pick one.

Numbers in the recipes are guidelines. Genre, reference and the role in the mix matter more than a recipe. With a named reference, start from its timbre targets in the track card (craft-reference-analysis): pick the candidates and compare their stems against those signs, not against the preset name.

Check parameters and ranges with `get_synth`, `get_effect`, `get_drum`: a misspelled name returns the list of valid ones.

## Which guide

Load the role guide and its tool guide with the bridge tool `get_guide` (without it: `../../guides/<id>.md` from this folder). What the stem numbers show: `tool-render-preview`.

| Sound | Role guide | Tool guide |
|---|---|---|
| 808 | `role-808` | `tool-808` |
| sub, synth bass, reese | `role-sub-bass`, `role-mid-bass` | `tool-synth`, `tool-wavetable` |
| bass guitar, guitars | `role-bass-guitar`, `role-rhythm-guitar`, `role-lead-guitar` | `tool-guitar`, `tool-guitar-rig`, `tool-saturation-amp-width` |
| lead, hook | `role-lead` | `tool-synth` |
| pad, keys, pluck, arp, stab | `role-pad`, `role-keys`, `role-pluck-arp`, `role-stab-chords` | `tool-synth-modulation`, `tool-arp` |
| kick, snare, clap, hats, percussion | `role-kick`, `role-snare-clap`, `role-hats-cymbals`, `role-percussion` | `tool-drums` |
| riser, impact, transition | `role-riser-impact` | `tool-automation` |
| texture, drone, ear candy; layering one role from several sounds | `role-texture`, `craft-sound-layering` | `tool-reverb` |
| chorus, flanger, phaser on a bass, guitar, pad or bus | `tool-modulation-fx` | `role-bass-guitar`, `role-pad` |
| something Meloduo lacks (tape, bitcrusher) | `craft-engine-limits` | — |

## Method

1. **Role.** What the sound does in the track and which register it lives in (the role guide). Who its neighbours in the band are.
2. **Read the preset.** Look at the filter and envelopes: a low preset `cutoff` cuts the harmonics you add with drive; an arp preset may have `arp` off. `get_project_state` with `channelId` gives the parameters and the chain; `get_synth`, `get_effect` with `type` (amp, sat), `get_drum`, `get_808` give the ranges; a `set_guitar` error names the valid guitar knobs. Compare the preset with the role recipe: what is missing.
3. **Variants.** Make 2–3 variants of the main sound on copies of the channel (`add_channel` with the same preset, then edits) or one after another on one channel. Variants differ by a decision, not a detail: another saturation, another filter, another cabinet, another envelope.
4. **Render.** A window where the sound plays with its neighbours (`fromBar`/`toBar`), with stems and `spectrum: true`. The six `bands` often cannot tell variants of one synth apart: look at the third-octave bands where the variants diverge.
5. **Compare** the variants against the role signs in the role guide and pick one. More mids or drive is not always better: take the variant that has the role signs without excess, and the simpler one when they tie. Delete the extra channels (`delete_channel`). Tell the user your pick and the reason in one line.
6. **Check in the mix.** A sound that is good alone can fight its neighbours: `clash`, masking, excess low end. Fix the sound itself before reaching for EQ.

The comparison method in general: `craft-candidates`.

Which sounds to make this way:
- always the one that carries the hook, and the track's signature sound;
- the bass or 808, and the guitars if there are any;
- the rest when the stem looks faceless or the genre expects a characteristic timbre.

## Check yourself

1. Can you say how the main sound differs from the preset, and why?
2. Are the role signs from the role guide visible in the stem?
3. Is the bass or 808 audible on a phone: is there energy above 100 Hz?
4. Do the guitars and doubles differ in timbre as well as panning?
5. Are the transitions in the track different, and do they fit the genre?
