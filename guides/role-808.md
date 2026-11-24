---
name: role-808
description: Make an 808 heard on phones: tuning, note length, glide, drive, presence and kick separation.
---

# 808

Role: the bass and the continuation of the kick at once. The main mistake is "just a sub": a sine without harmonics is inaudible on a phone or laptop.

Knobs and presets: tool-808.

The 808 rhythm follows the genre. In an atmospheric, slow beat each hit stands apart: rests between notes, a slide as an accent rather than on every note. Notes butted together or overlapping merge into one long drone. In dense trap the 808 plays more often, but still with its own pattern rather than as a pedal.

Simpler is often better: one oscillator with soft saturation hits harder than a stack of layers, filter envelopes and drive.

808 clacks and clicks, check in this order:
1. `release` and `attack` are too short;
2. a `duck` from the kick with `attack` 0–1 ms cuts the start of the note: set 5–10 ms and a depth of 2–4 dB;
3. `punch` stronger than 2–3 semitones on short notes;
4. `driveMode` Hard or Fold with a high `drive`.
The numbers barely show a click: look at the parameters.

Signs in the stem:
- a noticeable share in bass and lowMid rather than everything in sub; something in mid from saturation;
- `crestDb` not too high (the tail holds its level);
- no `clash` with the kick: the kick is short and clicky, the 808 long, or there is a `duck` from the kick.

Why drive alone does not help: the harmonics of a low note (40–60 Hz) land at 80–250 Hz, which is bass again, not mid. `presence` gives the mids; Soft, Tube or Hard `drive` and a `sat` on the channel do not. Fold gives them too, with a harsh sound.

Variants to compare: Trap as is; soft (Soft, little `drive`, `presence` 0.4); dirty (Distorted or Rage); with a different `punch` and `glide`.

An 808 dive for a transition: the last note before the drop is long, and the next one an octave lower overlaps it (`-12t`). `glide` sets the dive speed: a long overlap does not slow it. For a dive slower than the other slides, raise the `glide` curve before the drop (`set_automation` on the 808 channel, param `glide`) and add a long overlapping note an octave lower.

## Related

`tool-808`, `craft-kick-bass`, `tool-sidechain-duck`, `role-kick`
