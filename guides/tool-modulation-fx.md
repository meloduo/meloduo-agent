---
name: tool-modulation-fx
description: The chorus, flanger and phaser mixer effects: parameters, presets by role, low-end rules, levels and automation.
---

# Chorus, flanger and phaser

## Tools

`add_effect`, `set_effect`, `get_effect` and `set_automation` take the types `chorus`, `flanger` and `phaser`. `get_effect {type}` lists the params, presets and notes. All three turn a mono input into a stereo output. The level stays within about 2 dB of the dry sound.

## Chorus

- Params: `mode` Classic, Dimension or Ensemble; `voices` 1–4; `rate`, `depth`, `delay` ms, `feedback` −0.8…0.8, `spread`, `lowcut`, `tone`, `mix`.
- Presets: BBD I, BBD II, Dimension, Post-punk bass, Post-punk clean guitar, Shoegaze wash, 80s synth pad, Ensemble strings, Subtle widen, Vibrato.
- Bass: "Post-punk bass" (Peter Hook style). Keep `lowcut` 120–200 so the lows stay dry and centred. Never chorus a sub-bass or an 808 without `lowcut` (craft-low-end-mono).
- Clean guitar: "Post-punk clean guitar" (Cure, Joy Division jangle), or BBD I or II at `mix` 0.4–0.5.
- Pads and strings: "80s synth pad", "Ensemble strings", "Shoegaze wash".
- A synth with heavy unison already has width: use "Subtle widen" or skip the chorus.
- "Vibrato" has `mix` 1: a pure pitch wobble, no dry sound. Keep it off drums and the kick.

## Flanger

- Params: `rate`, `depth`, `manual` ms, `feedback` −0.95…0.95, `stereo` degrees, `through`, `tone`, `mix`.
- Presets: Classic, Jet, Through-zero, Metallic, Slow sweep, Subtle comb.
- Use on guitars, the drum bus and risers. Automate `mix` or `depth` in transitions (tool-automation). Avoid it on the kick and the sub.
- `through` 1 (through-zero) adds 5 ms latency; the mix compensates it. `manual` does not apply then.

## Phaser

- Params: `stages` 2–12, `rate`, `depth`, `center` Hz, `feedback`, `stereo`, `mix`.
- Presets: Classic 4-stage, Slow 4-stage, 12-stage swirl, Funk, Ambient, Hollow.
- Use on guitar, Rhodes, clav (Funk) and pads (Ambient). Stages / 2 is the number of notches. Full notches sit near `mix` 0.5.

## All three

- Positive `feedback` rings; negative is hollow.
- `sync` (a note length per LFO cycle) overrides `rate`.
- Automatable: `rate`, `depth`, `delay`, `manual`, `feedback`, `spread`, `stereo`, `lowcut`, `tone`, `center`, `mix`. Not automatable: `mode`, `voices`, `stages`, `through`, `sync`.
- A chorus, or a flanger or phaser with `feedback` 0.3 or more, raises the peaks. `render_preview` warns: check the chain peak after adding one.
- Put it after the amp or sat and before the reverb in a channel chain.

## Related

`craft-stereo-width`, `craft-low-end-mono`, `tool-automation`, `tool-synth-modulation`, `role-pad`, `role-lead-guitar`
