---
name: tool-sidechain-duck
description: Sidechain and ducking: the duck plugin, compressor pumping, dynamic EQ ducking, depth by genre.
---

# Sidechain and ducking

Ducking the bass from the kick: `add_effect` type duck on the bass, the kick channel as `source`; `depth` 2–4 dB to separate, 6–10 to pump; `attack` 0–5 ms for a bass with an attack, 5–10 ms for an 808 and sines (faster cuts the start of the note and it clicks); `release` 60000 / BPM / 4 … / 2 ms.

Narrow low-end ducking: an `eq` on the bass with a dynamic band keyed from the kick, `bands: [{type:"Low shelf", freq:90, dynamic:true, sidechain:"external", range:-4}]` and the kick channel as `source`. Keep the kick EQ at Zero latency and without Spectral: the key is taken after its chain without alignment. `render_preview` counts such a band (range −2 dB or deeper in the conflicting band) as a duck and does not report `clash`.

## Depth by genre

`duck` follows the source channel's notes, not its sound: `depth` 0–40 dB, `attack` 0.1–50 ms, `release` 20–1000 ms. Its parameters cannot be automated; for pumping that changes by section use comp Pumping with a `threshold` lane.

| Use | `depth` | `release` |
|---|---|---|
| natural separation, kick and bass | 2–4 dB | a 16th to an eighth |
| house and EDM pumping | 6–12 dB | 1/8–1/4 |
| synthwave bass | 12–20 dB | about an eighth |
| dubstep sub under the kick | 4–6 dB | short |
| techno rumble bus | 12–20 dB | about an eighth |

Release in ms: 60000 / BPM / 4 for a 16th, / 2 for an eighth.

Techno rumble: kick → a "Rumble" bus with reverb Hall 1–2 s, eq High cut about 200 Hz, `duck` from the kick 12–20 dB (craft-kick-bass).

## Related

`craft-kick-bass`, `tool-compressor`, `tool-eq`
