---
name: tool-wavetable
description: Wavetables and warp: tables, position, FM and ring from oscillator C, tables made from a sample.
---

# Wavetables and warp

A table from a sample: if the user imported a sound (`samples` in `get_project_state`), `set_synth` `tables` {"A":{"sampleId":"s3"}} turns it into a wavetable. One sustained note works best; the result gives `pitchHz`. env2 or a slow LFO on `pos` "plays" through the timbre.

## Warp modes

`warp` (per oscillator: `warp`, `warp2`, `warp3` with `warpAmt` 0–1): Off, Sync, Bend, Mirror, Quantize, Fold, FM from C, Ring from C. FM from C and Ring from C use oscillator C as the modulator: `semi3` (−24…24) sets the frequency ratio and `level3` 0 keeps C itself silent. On oscillator C they do nothing.

## Recipes

1. **Neuro mid bass:** `warp` FM from C, `semi3` 7 or 12, an lfo2 at 1/16 with Random shape → `warpAmt` about 0.3 (tool-synth-modulation).
2. **Metallic percussion or bell:** Ring from C, `semi3` 5–7, a short amp envelope.
3. **8-bit:** Quantize, `warpAmt` 0.6–0.9.
4. **Moving timbre:** env2 or a slow LFO → `pos`.

## Related

`tool-synth`, `tool-synth-modulation`, `role-mid-bass`, `tool-sampler`
