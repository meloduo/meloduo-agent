---
name: stage-balance
description: Stage 9 of a track: static balance, EQ, compression, clash and stereo, one edit and one render at a time.
---

# Stage 9. Balance and correction

One edit, one render. Look at the `change` field: it shows what moved since the previous render.

Follow craft-gain-staging-balance, then craft-mix-diagnosis: static balance → EQ and compression → `clash` → stereo. One edit, one render.

**Always**: `clipped` 0.

Guidelines: mix peak −6…−3 dBFS; the hook is the most audible melodic part and does not sink into the backing (over a dense wall, build density with layers, craft-gain-staging-balance); no `clash`, `bassHeavy` or `thinMids`; compressors reduce no more than 8 dB; stereo correlation above +0.3. Silence a deliberate genre exception with `skipWarnings` and name it in `why`.

## Starting levels

Presets do not arrive balanced: guitars and plucks can land 6–10 LU under the drums. Before the first EQ, read `stems` once and set rough levels in one `set_mix` call. The numbers are loudness differences in LU against the kick stem, read from `render_preview` `stems`, not fader dB: a stem's LU also depends on its preset, velocity and notes per bar, so the same fader gives different results. Set the faders, render, read the LU, adjust, render again. In tests, with faders set by eye, hats landed 17–20 LU under the kick; when a stem is far off, move it by the measured gap, not by a fixed dB. Orientation against the kick: snare 0…+2 LU, bass and 808 −2…0, rhythm guitars or chords −3…−1 each, the hook carrier −2…0, pads −10…−6, closed hats and shakers −12…−8, FX −12…−8. Check the mix `high` band: under about 4 % the mix is usually dull, and the hats are the first suspect. The reference and the genre win.

A fader stops at +6 dB. If a part needs more, do not chase it with plugin outputs: lower everything else with `allTrimDb` and lift that part with its own `trimDb` in the same call (`set_mix`). The master loudness comes back at the master stage. Do not raise quiet drums through the voice `gain` to get past the fader cap: use `allTrimDb` and `trimDb`.

**Always** render after the last level change and report those numbers, never levels "by calculation".

## Related

`craft-gain-staging-balance`, `craft-mix-diagnosis`, `tool-eq`, `tool-compressor`, `craft-stereo-width`
