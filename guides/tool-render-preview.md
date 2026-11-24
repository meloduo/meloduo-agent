---
name: tool-render-preview
description: Read render_preview: stems, bands, spectrum, what numbers show and miss, and the threshold table.
---

# render_preview

## Measuring sound without ears

`render_preview` with stems gives for each channel:
- `bands`: energy shares: sub 20–60 Hz, bass 60–250, lowMid 250–500, mid 500–2000, highMid 2–6 kHz, high 6 kHz+;
- `lufs`, `peakDb`, `crestDb` (the gap between peak and average: large for a percussive sound, small for a squashed or sustained one);
- `spectrum: true`: 29 third-octave bands, to see a bump or a hole.

What these numbers show:
- "just a sub": almost all energy in sub, nothing in mid and above; on a phone the sound is gone;
- "flat guitar": little highMid and mid against the recipe, low crest, two doubles with the same spectrum;
- "thin" sound: little bass and lowMid where the role needs body;
- "harsh": a bump in highMid;
- "muddy": more lowMid than the neighbours in the same role.

What the numbers do not show: the attack character, movement over time, "beauty". There, rely on the recipe and on what you changed in the parameters yourself.

## `render_preview` thresholds

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

## Related

`craft-mix-diagnosis`, `craft-candidates`, `craft-loudness-lufs`
