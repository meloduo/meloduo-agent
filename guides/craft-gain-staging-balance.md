---
name: craft-gain-staging-balance
description: Static balance: trims first, faders from the key element, hook level over the backing, the mix table.
---

# Static balance

## Static balance

1. While balancing, keep the master chain empty or the limiter bypassed (`set_effect` with `bypass: true`). Leave the master fader at 0 dB: stage 10 needs it, and `match_loudness` raises it by no more than +6 dB.
2. `set_mix` in one call: kick and bass first, then the rest. Move the mix peak as a group: `trimDb` on each channel of the group, `allTrimDb` for every channel with notes (empty ones are left alone). Channel `trimDb` in the same call adds to `allTrimDb`: "everything −7, bass +5" is one call.
3. `render_preview` on the densest section with stems. Stems go through the master fader but not its chain: stem LUFS minus mix LUFS is the part's LU against the mix.

Targets:
- mix peak −6…−3 dBFS (`peakDb`), `clipped` 0;
- bass peak 1.5–4 dB below the kick peak; with `duck` or a dynamic band on the bass the peak misleads, so compare stem LUFS;
- bass and kick around −8…−13 LU against the mix;
- the hook is the loudest melodic part. How much louder depends on the density of the backing: over a sparse backing 1–2 LU above the neighbours is enough; over a wall (distorted guitars, supersaw chords, a dense pad) the hook is usually 3–5 LU louder than each part of the wall. The −3 LU against the mix figure is for a lead vocal: an instrumental lead at that level sticks out;
- if the hook sinks or sounds thin, give it density first and fader second: a double with another timbre, a layer of another instrument 6–10 dB quieter (a synth under a guitar, a guitar or saw under a synth), an octave layer. A single thin lead pushed up with the fader sounds loud but weak. A thin timbre (square, sine, flute, bell, thin FM) usually needs a layer over any backing; the stem shows it clearly: almost no lowMid, everything in mid and above;
- no part with notes is "inaudible".

For a dip, move faders as a group. Kit hats at velocity 40–90 usually sit 15–18 LU below the kick: raise them by 3–5 dB.

## Mix table

| Part | High-pass (`Low cut` band, freq) | Compressor | Pan |
|---|---|---|---|
| Kick | none or 25–30 Hz | 3–4:1, attack 10–30 ms, 3–6 dB | 0 |
| Bass | none: a 30 Hz cut shifts the phase and raised the peak by 6 dB | 3–4:1, attack 10–30 ms, 3–6 dB | 0 |
| Snare, clap | 80–100 Hz | 4:1, attack 10–30 ms, 3–6 dB | 0 |
| Hats, shakers | 200–400 Hz | none | ±0.15–0.3 |
| Percussion | 150–300 Hz | none | ±0.3–0.6 |
| Pads, chords | 150–200 Hz, a 2–4 dB cut at 200–500 Hz | none or 2:1, 1–3 dB | 0, width 110–140 % (needs unison) |
| Lead, arp | 150–250 Hz | 2–3:1, attack 5–20 ms, 2–5 dB | 0; double ±0.6–1 |
| Reverb and delay returns | `lowcut` 200–500 Hz | — | — |
| Master | — | 1.5–2:1, 30 ms, 1–2 dB | — |

## Related

`stage-balance`, `craft-frequency-slots`, `tool-buses-sends`
