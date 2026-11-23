# Master and delivery

Contents:
1. Master chain
2. Loudness
3. When targets conflict
4. Peaks and the limiter
5. `render_preview` thresholds

## 1. Master chain

1. EQ when needed. To trim the edges, use the presets `Master / Clean ends 20 Hz–20 kHz`, `Master / Clean ends 30 Hz–18 kHz`, `Master / Clean ends 40 Hz–16 kHz`.
2. comp "Mastering / Gentle 1.5:1", aiming at 1–2 dB of reduction. The "Gentle glue" preset on the master reduced 3–4 dB in tests and flattened the difference between sections; if you use it, raise the threshold.
3. limit "Master -1 dB". The preset has `gain` 3: set it to 0–2 and raise loudness with `match_loudness`.
4. Optionally `character: "Gentle"` or `"Warm"` on the master EQ for light saturation. Keep Clean for a clean master. Use Warm for the "analog warmth" character from the card.

## 2. Loudness

The target is −14 LUFS for every genre. Streaming normalizes tracks to −14 anyway, and Meloduo has no normalization: a master at −8 is deafening. Ambient and lo-fi can stay at −16…−14.

Use a loud target only when the user asks for a loud or club master. Pass it to `render_preview` as `targetLufs`; limiter `gain` of 3–8 dB is normal for it:
- hip-hop and R&B −10…−8;
- pop-punk, rock, metal −10…−8;
- EDM and club −9…−7;
- never louder than −8 without a separate request.

`match_loudness`:
1. It moves the master fader; at +6 dB it raises the limiter `gain` itself (`limiterGainDb`). Below the target, it removes `gain` first, then lowers the fader.
2. Run it on the whole song if the last full render without stems (`stems: false`) took under 100 seconds. Otherwise use a window of the last drop with a correction: window target = target + (window LUFS − song LUFS), both numbers from one full render with the finished master chain.
3. If it returns `reached: false` and the fader and limiter are at their limit, raise the channels as a group (`set_mix` `trimDb`) and run it again.
4. It stops by itself when the limiter stops adding loudness or flattens the sections (`stoppedBecause`). The result gives `loudnessBySection`, `limiterPull` and `changed`: check the shape without an extra render.

Final step: `render_preview` of the whole song (`stems: false`). If the loudness is outside the range, move the master by the difference with `set_master` and check again.

## 3. When targets conflict

Give way from the bottom up (higher items matter more):
1. `truePeakDb` ≤ −1 dBTP and `clipped` 0;
2. the shape: the breakdown 2+ LU quieter than the drop before it, intro and verse 3+ LU (`loudnessBySection`, "Flat sections");
3. average master limiter reduction up to 4 dB;
4. the loudness target.

A master 1–2 LU below the target is a normal result if the shape would flatten otherwise. Do not push `gain` further by hand: tell the user how much was missing and why.

## 4. Peaks and the limiter

- `truePeakDb` ≤ −1 dBTP is a hard gate. For a master louder than −14 LUFS the target is −2 dBTP: between −2 and −1, lower the limiter `ceiling` by the difference once. The limiter holds the ceiling on true peak: the output goes above `ceiling` only if another plugin sits after the limiter.
- Master limiter reduction: average (`meanDb`) 1–3 dB (up to 4 dB for a loud master), peak (`maxDb`) up to 8 dB above the limiter `gain`. With `gain` 6, `maxDb` up to 14 is normal.
- If the average is higher, lower the loudness target.
- If the peak is higher with a normal average, those are the peaks of one part: the warning names the stem with the highest peak. Cut them on that stem: `add_effect limit` with `gain` 0 and `ceiling` 4 dB below its `fxPeakDb`, but no higher than 0 dB. If `fxPeakDb` is above +4 dB, make the source quieter first (`set_drum` gain, `scale_velocity`).
- A channel limiter's `ceiling` is measured before the fader: compare it with `fxPeakDb`, not with `peakDb`. A channel limiter cuts 2–4 dB; if it cuts more, raise `ceiling`.
- A compressor on the hats does not help: it squashes the whole part and the peaks remain.

## 5. `render_preview` thresholds

| What | Target | Act when |
|---|---|---|
| mix `peakDb` before the master | −6…−3 dBFS | above −1 or below −10 |
| `clipped` | 0 | any number |
| final `lufs` | −15…−13; a genre target only on request | louder than −13 without a request |
| `truePeakDb` | ≤ −1; −2 when louder than −14 LUFS | above −1 |
| Master limiter, `meanDb` | 1–3 dB (`gain` 0–2); loud master up to 4 dB (`gain` 3–8) | from 5 dB |
| Master limiter, `maxDb` minus `gain` | up to 8 dB | above 8: cut the peaks of the part with the highest peak |
| Channel limiter, `maxDb` | 2–4 dB | above 6: raise `ceiling` |
| Compressor, average reduction | 2–6 dB | from 8 dB |
| `stereo.correlation` | above +0.3 | below 0 for long |
| `monoLossDb` | absolute value under 3 dB | from 4 dB |
| `lowSidePct` | 0–5 % | from 10 % |
| `loudnessBySection` | rising toward the drops, breakdown 2+ LU quieter than the drop before it | flat ("Flat sections") |

The numbers catch breakage, not music. The user's ears decide whether the track is good.
