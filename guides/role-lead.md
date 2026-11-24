---
name: role-lead
description: Hook lead synth: voice mode, face of the sound, character, layers for a thin timbre.
---

# Lead and hook

- Start with the voice mode: `mode` Legato, `oscPhase` Free; `envAmt` 0.2–0.4 on short notes.
- The face of the sound: `warp` (Sync, Bend, FM, Quantize for 8-bit), the filter model, vibrato (LFO → pitch, slow and light, starting after the attack).
- Character: `sat` Soft or Tube with `mix` below 1, an insert delay with a low `mix`.
- 8-bit lead: square, `warp` Quantize, no unison, optional fast vibrato, a short slapback delay.
- Signs: a higher share in mid and highMid than the chords; the hook does not sink into lowMid.
- A thin lead (square, sine, bell, flute, thin FM) needs a layer for body: the same part an octave lower, or a saw 6–10 dB quieter, another timbre. Compare the "with layer" variant against "without".

Variants: clean (little saturation), dirty (sat, drive), moving (LFO on pos or cutoff).

## Related

`tool-synth`, `stage-hook`, `tool-reverb`, `craft-gain-staging-balance`
