---
name: tool-compressor
description: The compressor: styles by role, upward and parallel compression, sidechain filter, lookahead, character.
---

# Compressor

Compression: 2–6 dB of gain reduction, attack 10–30 ms on drums and bass. Style (`params.style`, by name):
- drums and snare: Punch or Classic;
- drum and mix bus: Bus;
- lead: Vocal or Opto;
- bass: El-Op;
- pads: Smooth;
- master: Mastering or Vari-Mu;
- pumping: Pumping with the kick as `source`, `release` 30000 / BPM … 60000 / BPM ms;
- Clean: transparent, the default.

Upward and TTM raise the quiet parts along with the tails: use them only on purpose, `range` 6–12. Parallel compression: `mix` 30–50 %. Presets: `get_effect` type comp.

## Parameters worth knowing

- 14 styles: Clean, Classic, Opto, Vocal, Mastering, Bus, Punch, Pumping, Versatile, Smooth, Vari-Mu, El-Op, Upward, TTM.
- `scLowCut` (20–2000 Hz) and `scHighCut` filter what the detector hears; `detector` Peak or RMS; `autoRelease`; `hold`; `knee`; `link` and `linkMode` L/R or M/S.
- `lookahead` 0–20 ms; `character` Off, Tube, Diode, Bright with `drive` 0–100 %; `mix` 0–200 %; `oversample`.
- `source` (a channel) keys the compressor from another channel's sound.
- Choices and `lookahead` cannot be automated; `threshold`, `ratio`, `attack`, `release`, `mix`, `makeup`, `drive`, `scLowCut` and the rest can.

## Recipes

1. **Bus glue** (drums, music): style Bus, ratio about 2, attack about 30 ms, `autoRelease` On, `scLowCut` 100–150 Hz so the kick and bass do not pump the bus, 1–3 dB of reduction.
2. **Parallel compression:** a second comp with ratio 4–8, attack 10–30 ms, release 40–80 ms, threshold low enough for a deep average reduction (10–20 dB in `dynamics`), `mix` 15–30 %. The `compressor` warning is expected here: `skipWarnings: ["compressor"]` and say why.
3. **Colour without a sat plugin:** `character` Tube, `drive` 20–40 % on the drum bus.
4. **Bass:** El-Op or Opto, ratio about 4, attack about 20 ms, `autoRelease` On, 3–6 dB.
5. **Peaky hits:** `lookahead` 1–3 ms lets the compressor catch the attack, but not on a channel that is a sidechain `source` elsewhere (the key is not delayed to match).
6. **Pumping by section:** comp Pumping with the kick as `source`, then a `threshold` lane: lower is deeper.

## Related

`tool-sidechain-duck`, `craft-mix-diagnosis`, `stage-balance`
