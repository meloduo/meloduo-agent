# Balance and correction

One edit, one render. Look at the `change` field: it shows what moved since the previous render.

Contents:
1. Static balance
2. Mix table
3. EQ
4. Compression and ducking
5. `clash` conflicts
6. Tone matching and curves
7. Drum peaks and `chainPeak`
8. Stereo

## 1. Static balance

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

## 2. Mix table

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

A low cut shifts the phase and can raise a part's peak by about 1 dB: after a high-pass, check the stem `peakDb` in `change`.

Zones: mud 200–500 Hz, harshness 2–5 kHz, air above 8–10 kHz. Add brightness with a wide shelf, not a narrow boost.

Vocals later: a 2–3 dB cut at 1–4 kHz on chords and pads.

## 3. EQ

`add_effect` type eq. Presets: Low cut 120 Hz, Cut the mud, Kick punch, Bass tight. Your own bands: `bands: [{type:"Low cut", freq:100, slope:24}, {type:"Bell", freq:300, gain:-3, q:1.4}]`, up to 24 bands, cuts up to 96 dB/oct.

Phase (`phase` in `params`):
- the default is Zero latency; keep it;
- Linear Medium (`phase: "Linear"`, `linearLatency: "Medium"`): a steep cut or a narrow notch in the bass, two parallel bass channels;
- `High`: on the master only;
- Natural: steep high cuts and shelves in the mids and top; it does not help the bass;
- Brickwall (`slope: "Brickwall"`): only the master's edges (20 Hz, 20 kHz), and only with Linear Medium or High.

The engine aligns channel latency itself, except for the sidechain key.

A harsh top only when it is loud: a dynamic band instead of a static cut, `bands: [{type:"Bell", freq:6500, q:3, dynamic:true, threshold:-30, range:-6}]` (a de-esser; `spectral:true` for grainy harshness).

Dynamic band threshold: about `detector.p95Db − 3` from its `dynamics` row. If the band moves gain in 90 %+ of samples (`activePct`) and keeps it near its deepest (`meanDb` ≥ 0.75 of `maxDb`), it works like a static band: `dynamicStatic` suggests a higher threshold or a static band.

## 4. Compression and ducking

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

Ducking the bass from the kick: `add_effect` type duck on the bass, the kick channel as `source`; `depth` 2–4 dB to separate, 6–10 to pump; `attack` 0–5 ms for a bass with an attack, 5–10 ms for an 808 and sines (faster cuts the start of the note and it clicks); `release` 60000 / BPM / 4 … / 2 ms.

Narrow low-end ducking: an `eq` on the bass with a dynamic band keyed from the kick, `bands: [{type:"Low shelf", freq:90, dynamic:true, sidechain:"external", range:-4}]` and the kick channel as `source`. Keep the kick EQ at Zero latency and without Spectral: the key is taken after its chain without alignment. `render_preview` counts such a band (range −2 dB or deeper in the conflicting band) as a duck and does not report `clash`.

## 5. `clash` conflicts

At stages 3–5 notes resolve a conflict. Here a cut does.

Each `clash` warning has a `clashes` row with a ready `cut`: the `channelId` of the channel with the smaller share in the band, `freq`, `gainDb` −3, `q` 1.4 and the `effectId` of its EQ if it has one.
- With `effectId`: `set_effect` with `bands: [{type:"Bell", freq, gain: gainDb, q}]`.
- Without `effectId`: `add_effect` eq on `channelId`.
- On an EQ where you ran `match_eq`, put the cut in a new EQ: the next `match_eq` erases the bands.

A static Bell or shelf of −2 dB or deeper over the band clears the warning.

Stage guidelines: no `clash`, `bassHeavy`, `subHeavy` or `thinMids`; average compressor reduction under 8 dB (`dynamics`); `change` moves the right way after each edit. Silence a deliberate genre exception (a dark genre, a heavy sub) with `skipWarnings` and name it in `why`.

## 6. Tone matching and curves

`match_eq` fits a channel's EQ (`effectId`) to the tone of another channel (`referenceChannelId`): a guitar to the reference guitar, a double to the main part.
- `fromBar`/`toBar` where both play; `bands` 6–8; `amount` 50–70.
- It replaces every band of that EQ: keep cuts and notches in a second EQ.
- `learnedSeconds` under 5: take more bars.
- `fitErrorDb` over 1: `smoothing` "1" or a lower `amount`.
- It does not work on a bus or the master: give a curve instead.

A curve: `curve: [{freq, gain}]` in `add_effect`/`set_effect` eq when you need a shape (a "smile", a tilt, "3 dB darker above 5 kHz"). The EQ fits up to `maxBands` bands (8) and keeps the loudness. `fitErrorDb` up to 1 is good. You cannot pass `curve` and `bands` in one call.

## 7. Drum peaks and `chainPeak`

Do not treat a peaky kick or snare with `comp`: without `lookahead` the attack lets the hit through, and makeup raises the peak. Cut peaks with a `limit` on the channel or with the source knob (`click` of an acoustic kick, `gain` in `set_drum`). The `render_preview` advice about the limiter names the knob.

`chainPeak`: the chain raises the peak by 1.5 dB or more and the output reached −1 dBFS. If only an EQ with cuts can raise the peak, that is the phase shift of the cut: keep the cut and lower the channel if it clips. Otherwise switch the plugins off one by one, or reduce the EQ boost, the drive, the makeup. Silence a deliberate boost with `skipWarnings`.

## 8. Stereo

1. Kick, snare, bass and hook in the centre; hats ±0.15–0.3; percussion ±0.3–0.6; hook double ±0.6–1.
2. `width` on the master or a bus: `bassMono` 100–150 Hz; pads 110–140 %. `width` widens only a stereo source: a synth with `unison` of 2 or more, or a bus with reverb. On a mono channel it does nothing.
3. The arrangement gives the loudness contrast between sections, not the fader.
4. Depth: `space` in `render_preview`. The main atmosphere is usually at `wetLu` −23…−17, a ballad or ambient −16…−12. The `dry` field means no space is heard; trap and drill can stay dry.

Targets: `stereo.correlation` above +0.3; absolute `monoLossDb` under 3 dB; `lowSidePct` under 5 %.
