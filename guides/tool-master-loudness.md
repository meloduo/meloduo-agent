---
name: tool-master-loudness
description: The master chain and match_loudness: chain order, windows on long songs, peaks and the limiter.
---

# Master chain and match_loudness

## Master chain

1. EQ when needed. To trim the edges, use the presets `Master / Clean ends 20 Hz–20 kHz`, `Master / Clean ends 30 Hz–18 kHz`, `Master / Clean ends 40 Hz–16 kHz`.
2. comp "Mastering / Gentle 1.5:1", aiming at 1–2 dB of reduction. The "Gentle glue" preset on the master reduced 3–4 dB in tests and flattened the difference between sections; if you use it, raise the threshold.
3. limit "Master -1 dB". The preset has `gain` 3: set it to 0–2 and raise loudness with `match_loudness`.
4. Optionally `character: "Gentle"` or `"Warm"` on the master EQ for light saturation. Keep Clean for a clean master. Use Warm for the "analog warmth" character from the card.

## match_loudness

`match_loudness`:
1. It moves the master fader; at +6 dB it raises the limiter `gain` itself (`limiterGainDb`). `moved` says what it changed, from → to, for example "master fader 0 → 3.2 dB, limiter gain 0 → 2.5 dB"; `masterDb` and `limiterGainDb` are the values after. Below the target, it removes `gain` first, then lowers the fader.
2. Run it on the whole song if the last full render without stems (`stems: false`) took under 100 seconds. Otherwise use a window of the last drop with a correction: window target = target + (window LUFS − song LUFS), both numbers from one full render with the finished master chain.
3. If it returns `reached: false` and the fader and limiter are at their limit, raise the channels as a group (`set_mix` `trimDb`) and run it again.
4. It stops by itself when the limiter stops adding loudness or flattens the sections (`stoppedBecause`). The result gives `loudnessBySection`, `limiterPull` and `changed`: check the shape without an extra render.

Final step: `render_preview` of the whole song (`stems: false`). If the loudness is outside the range, move the master by the difference with `set_master` and check again.

## Peaks and the limiter

- `truePeakDb` ≤ −1 dBTP is a hard gate. For a master louder than −14 LUFS the target is −2 dBTP: between −2 and −1, lower the limiter `ceiling` by the difference once. The limiter holds the ceiling on true peak: the output goes above `ceiling` only if another plugin sits after the limiter.
- Master limiter reduction: average (`meanDb`) 1–3 dB (up to 4 dB for a loud master), peak (`maxDb`) up to 8 dB above the limiter `gain`. With `gain` 6, `maxDb` up to 14 is normal.
- If the average is higher, lower the loudness target.
- If the peak is higher with a normal average, those are the peaks of one part: the warning names the stem with the highest peak. Cut them on that stem: `add_effect limit` with `gain` 0 and `ceiling` 4 dB below its `fxPeakDb`, but no higher than 0 dB. If `fxPeakDb` is above +4 dB, make the source quieter first (`set_drum` gain, `scale_velocity`).
- A channel limiter's `ceiling` is measured before the fader: compare it with `fxPeakDb`, not with `peakDb`. A channel limiter cuts 2–4 dB; if it cuts more, raise `ceiling`.
- A compressor on the hats does not help: it squashes the whole part and the peaks remain.

## Related

`craft-loudness-lufs`, `stage-master`, `tool-render-preview`
