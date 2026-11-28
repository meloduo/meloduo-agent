---
name: tool-guitar-rig
description: The guitar chain: gate, drive, amp models and cabinets, genre amp presets, rigs with a ready chain, order and high-gain rules.
---

# Guitar rig: gate, drive, amp

`add_effect`, `set_effect` and `get_effect {type}` take `gate`, `drive` and `amp`. `get_effect` lists params, presets and notes.

## Order and rules

1. Chain: gate, comp, drive, amp, chorus / flanger / phaser (tool-modulation-fx), delay, reverb.
2. One cab per chain: never stack two amps.
3. The amp takes a mono input; a stereo input is down-mixed. Put it before chorus, delay and reverb.
4. Double tracking is two guitar channels panned apart, not `width`.
5. Latency: amp and drive 20 samples, gate 0 to 10 ms (`lookahead`). All are compensated.

## Gate

- Params: `threshold`, `range`, `attack`, `hold`, `release`, `hysteresis`, `lookahead`.
- Presets: Soft, Tight, Drum tidy, Hum cut.
- Start high gain at threshold −45, `hold` 10–30 ms, `release` 40–120 ms. `range` 80 is a mute; 10–20 keeps the room alive.
- `lookahead` 0 adds no latency. A few ms keep the pick attack.
- Put the gate first: a gate after the amp chops the tails.
- Check: `render_preview` `dynamics` has a gate row with `maxDb` (deepest cut) and `closedPct`. Raise the threshold until `closedPct` matches the pauses.

## Drive

- `mode`: Boost (clean gain, tone tilt), Overdrive (lows stay tight), Dist (rock, punk, grunge), Fuzz (Muff type: scooped mid, shoegaze).
- Params: `drive`, `tone`, `level`, `mix`. Loudness holds while `drive` moves; `level` is the volume knob.
- Presets: Clean boost, Blues push, Tighten, Grit, Wall fuzz.
- Orientation: Overdrive before the amp, `drive` 0–3, `level` +6 tightens palm mutes; `drive` 8–15 is a blues push. Fuzz with `mix` 0.5 keeps the pick attack.

## Amp

- `model`: Classic (default, the old amp), Clean US (clean to `gain` 25), Chime UK (early breakup, jangle at `gain` 8–14), Crunch UK (crunch from 12, rock 22, hard rock 30+), Lead US (tight, `gain` 30–40).
- New knobs: `presence` −6…9 dB, `depth` 0…9 dB, `sag` 0…1 (0 is stiff), `master` −12…12 dB (grit and feel, level is made up).
- Classic ignores `presence`, `depth`, `sag` and `master`.
- In models 1–4 `bass`, `mid`, `treble` are pots: −12 is 0, 0 is noon, +12 is 10.
- `cab` 0 Off, 1–4 filter cabs (1x12, 2x12, 4x12, 8x10 for bass), 5–9 IR cabs: 1x12 Open US, 2x12 Blue UK, 2x12 Jazz, 4x12 Vintage, 4x12 Modern.
- `mic` (Dynamic, Ribbon, Condenser) and `micPos` (0…1) act on cabs 5–9 in every model.
- Automatable: numbers only. `model`, `cab`, `mic`, `micPos` are not.
- Amp presets. Old, unchanged: Clean, Funk clean, Crunch, Lead, Chug, Bass grit, Lo-fi box. Genre: Glass clean, Jangle, Edge, Blues edge, Chime edge, Funk glass, Stack crunch, Punk, Grunge, Modern metal, Bass clean 8x10 (the amp of the Post-punk bass rig).
- High gain: gate first, then drive in Overdrive mode (low `drive`, `level` up) before the amp, then Modern metal or Lead US. Keep `gain` below 34 on Classic (aliasing).

## Rigs

`add_channel` guitar with a rig `preset` adds the voice and its chain (`effectIds`, `chain`). The reverb goes to the reverb bus as a send; with no reverb bus the tool makes one (`busCreated`), never a reverb plugin on the channel. `params` in the result lists the amp `gain` and `out` and the rig's other levels by effectId. `set_guitar` with a rig adds the chain only to a channel with no plugins (`chainAdded`); otherwise a `hint` lists the missing items.

| Rig | Chain (preset names) |
|---|---|
| Post-punk bass | voice Post-punk bass, comp Bass leveler, amp Clean US (cab 8x10), chorus Post-punk bass; no drive, delay or reverb |
| Post-punk chorus | comp Smooth lead, amp Glass clean, chorus Post-punk clean guitar, delay Guitar eighth, reverb Plate / Vocal plate |
| Cure jangle | comp Smooth lead, amp Jangle, flanger Subtle comb, delay Quarter echo, reverb Classic / Hall |
| Shoegaze wall | drive Wall fuzz, amp Edge, chorus Shoegaze wash, delay Quarter echo, reverb Classic / Cathedral |
| Blues | drive Blues push, amp Blues edge, delay Slapback, reverb Room / Wood room |
| Indie | amp Chime edge, chorus Subtle widen, reverb Classic / Small room |
| Funk | comp Funk squeeze, amp Funk glass, phaser Funk |
| Classic rock | drive Clean boost, amp Stack crunch, delay Slapback, reverb Classic / Plate |
| Punk | gate Soft, amp Punk, reverb Classic / Small room |
| Grunge | drive Grit, amp Grunge, reverb Classic / Small room |
| Metal | gate Tight, drive Tighten, amp Modern metal |
| Ambient | comp Smooth lead, amp Glass clean, chorus Subtle widen, delay Dub, reverb Hall / Big pad |

Every rig sets an amp `out` that levels the whole rig (about +2…+12 dB): it is level makeup after the drive. `render_preview` warns about the peak of a chain with an amp only when the channel peak after the fader or the mix peak is at −1 dB or above, so a rig with a fine mix gets no `chainPeak` warning. If it does warn, keep the amp `out`: lower the channel fader (`set_channel` `volumeDb`), or end the chain with `add_effect` `limit`. If a `hint` lists `add_effect` calls, keep their params. A through-zero flanger delays the dry sound 5 ms; the mix compensates it.

A guitar preset that is not a rig sets only the voice (no amp, chain or reverb send): `Jangle 12` is one, and the result carries a `hint` that names the rig Cure jangle for its chain. A rig is a start: render, then adjust `gain`, `mid` and the cab by the stem.

## Related

`tool-guitar`, `role-rhythm-guitar`, `role-lead-guitar`, `tool-modulation-fx`, `tool-saturation-amp-width`
