---
name: tool-reverb
description: The reverb: modes, decay EQ, synced predelay, era color, ducking, gate for gated snares, freeze.
---

# Reverb

Reverb modes: Room and Ambience give a room and air with no tail, Chamber a warm medium one, Hall a long even tail, Plate a bright dense one for snare and vocals, Classic the old convolution (the `Classic /` presets and the old name `Hall` give it). `decayEq` shortens the top of the tail (High shelf 4–6 kHz ×0.4–0.6) and stretches the low end (Low shelf ×1.2–1.5) without losing clarity; `predelaySync` 1/16–1/8 separates the tail from the hit in time. `color` 1970s and 1980s give a darker, grainier tail (synthwave Hall: 1980s; lo-fi room: 1970s). `ducking` 6–10 dB pulls the tail down while the input plays: give the lead its own reverb bus with ducking, because on a shared bus the pads keep the input busy and the tail stays down all the time. `render_preview` `space` gives the `wetLu` of each reverb against the mix: a Hall bus with sends at −12 dB gives about −22, −10 about −20, −8 about −18, −3 about −13 (ballad, ambient); Chamber is about the same, Plate 1 LU quieter, Room `Dry booth` 9 LU quieter. For drums on a bus use `Room / Drum room (bus)` (0.7 s, mix 1). Above −10 the tail washes out the mix. The `dry` field means no space is heard: unless the genre is dry, add a Hall bus.

## Parameters worth knowing

- `mode`: Room, Chamber, Hall, Plate, Ambience, Classic. Classic takes only `decay`, `predelay`, `damp`, `lowcut` and `mix`.
- `gate` On with `gateThreshold` (−80…0 dB) and `gateRelease` (10–2000 ms): the tail is cut when the input falls under the threshold.
- `color` 1970s, 1980s or Now: era character of the tail.
- `ducking` 0–24 dB: the tail goes down while the input plays.
- `freeze` On holds the current tail.
- `damp` (the tail's high cut, 1–20 kHz) and `lowcut` (20–500 Hz) on the tail; `postEq` up to 6 EQ bands after the reverb; `decayEq` changes decay time per band.
- `predelaySync`: 1/64 … 1/4, tempo-synced predelay.
- Choices (`mode`, `gate`, `freeze`, `color`, `predelaySync`) and the EQ bands cannot be automated; `decay`, `size`, `ducking`, `gateThreshold`, `gateRelease`, `damp`, `lowcut`, `mix` and the rest can.

## Recipes

1. **Gated snare** (synthwave, 80s pop-rock): a Gate bus, `mode` Plate or Hall, `decay` 2–3 s, `gate` On, `gateThreshold` −40…−30 dB, `gateRelease` 150–300 ms (about an eighth at 110 BPM), `color` 1980s, `mix` 1. Snare send −10…−6 dB. A tighter start: preset `Ambience / Gated`.
2. **Era colour:** synthwave Hall bus `color` 1980s; a lo-fi room `color` 1970s with `damp` around 7–9 kHz.
3. **A lead that stays clear:** its own reverb bus with `ducking` 6–10 dB. On a shared bus the pads keep the input busy and the tail stays down all the time.
4. **Returns:** `lowcut` 200–500 Hz; for a vocal-like lead `damp` 3–6 kHz; a narrow `postEq` Bell about −3 dB at 200 Hz on a snare reverb removes boxiness.
5. **Time to the tempo:** `predelaySync` 1/64 on a lead, 1/16 on a snare; a Hall decay near two beats minus the predelay (about 1 s at 120 BPM) keeps the tail inside the groove.
6. **Movement:** `ducking` 0 → 8 dB in the chorus with the hook; with `gate` On, raise `gateThreshold` through a build so the tail gets shorter toward the drop.
7. **Freeze** cannot be switched by a lane: use it only as a static held pad on its own bus.

## Check

`render_preview` `space` gives `wetLu` per reverb (craft-space-depth). A gated tail should not raise the snare stem's `crestDb` much.

## Related

`tool-buses-sends`, `craft-space-depth`, `role-snare-clap`, `tool-delay`
