---
name: craft-mix-diagnosis
description: Read render warnings as symptoms and fix the cause: clash, drum peaks, chainPeak.
---

# Mix diagnosis

## `clash` conflicts

At stages 3–5 notes resolve a conflict. Here a cut does.

Each `clash` warning has a `clashes` row with a ready `cut`: the `channelId` of the channel with the smaller share in the band, `freq`, `gainDb` −3, `q` 1.4 and the `effectId` of its EQ if it has one.
- With `effectId`: `set_effect` with `bands: [{type:"Bell", freq, gain: gainDb, q}]`.
- Without `effectId`: `add_effect` eq on `channelId`.
- On an EQ where you ran `match_eq`, put the cut in a new EQ: the next `match_eq` erases the bands.

A static Bell or shelf of −2 dB or deeper over the band clears the warning.

Stage guidelines: no `clash`, `bassHeavy`, `subHeavy` or `thinMids`; average compressor reduction under 8 dB (`dynamics`); `change` moves the right way after each edit. Silence a deliberate genre exception (a dark genre, a heavy sub) with `skipWarnings` and name it in `why`.

## Drum peaks and `chainPeak`

Do not treat a peaky kick or snare with `comp` alone: with `lookahead` 0 (the default) the attack lets the hit through, and makeup raises the peak. `lookahead` 1–3 ms helps, but not on a channel that is a sidechain `source` (the key is not delayed to match). Cut peaks with a `limit` on the channel or with the source knob (`click` of an acoustic kick, `gain` in `set_drum`). The `render_preview` advice about the limiter names the knob.

`chainPeak`: the chain raises the peak by 1.5 dB or more and the output reached −1 dBFS. If only an EQ with cuts can raise the peak, that is the phase shift of the cut: keep the cut and lower the channel if it clips. Otherwise switch the plugins off one by one, or reduce the EQ boost, the drive, the makeup. Silence a deliberate boost with `skipWarnings`.

## Related

`tool-render-preview`, `tool-eq`, `craft-frequency-slots`, `tool-compressor`
