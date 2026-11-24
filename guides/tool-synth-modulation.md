---
name: tool-synth-modulation
description: Synth movement: the mod matrix, LFOs and envelopes, recipes for archetypes (wobble, reese, acid, pads, risers).
---

# Synth modulation

## Movement: matrix, LFO, arp, tables

The `mods` matrix in `set_synth`: amount −1…1 is a share of the target's range; the `range` in the result gives the shift in units. "±" means both ways (LFO, key, random). `render_preview` cannot check wobble speed or slides: its metrics are no shorter than a bar.

| Sound | How |
|---|---|
| Wobble (dubstep, DnB) | Wobble bass or Reese bass; `l2Sync` 1/8 or 1/16, lfo2 → cutoff 0.3–0.5. To change speed, `set_automation` on `l2Sync` with two points close together (4.99 and 5) |
| Zap attack on a bass | `e2Decay` 40–120, env2 → pitch 0.1–0.25. Not on a lead |
| Brighter pluck on strong notes | velocity → cutoff 0.2 |
| Living pad | slow lfo3 (`l3Rate` 0.2) → detune 0.2, random → cutoff 0.05 |
| Trance gate | `l2Shape` square, `l2Sync` 1/16, lfo2 → amp −0.5 |
| Pitch drop at the note end | release → pitch −0.03…−0.08, release 300–800 |
| Drone without repeats | one long note; `l2Free` 1, `l2Rate` 0.03–0.1 → cutoff and detune, a second free LFO at another rate |
| Build-up into the drop | m1 → cutoff 0.4 and m1 → resonance 0.2, then `set_automation` m1 from 0 to 1 |
| Growl (dubstep) | Growl bass or `table` Growl; lfo2 → pos 0.4 at 1/8, lfo2 → cutoff 0.2 |
| Sync lead | Sync lead; env2 → warpAmt 0.4 with `e2Decay` 300: a whistle at the note start |
| FM bell, DX piano | FM bell; env2 → warpAmt 0.5: a brighter strike, a cleaner tail |
| Vocal pad | Vowel pad; slow lfo3 → pos 0.3 changes the vowel |
| Lo-fi, 8-bit | `warp` Quantize, `warpAmt` 0.6–0.9 |
| Lo-fi wow | a fast, light LFO → pitch and a second slower, deeper one |
| Acid 303 | Diode acid: resonance 10–16, `envAmt` 3–4, Legato with slides |
| Fat analog bass | Ladder bass (Ladder); resonance no higher than 8 |
| Talking bass | Talking bass (Formant); lfo2 → fVowel 0.6–0.8 at 1/8–1/4 |
| Plucked string, metal | Comb pluck (Comb, `keytrack` 1, `cutoff` 261.63); resonance sets the ring length |
| Phaser pad | Notch pad (SVF Notch, a free slow LFO on the filter); `f2Model` HP 150 Hz |
| Two filters | `f2Model`; `fRoute` 0 in series (band), 1 in parallel |
| Fast sweep without steps | any model except Classic |

## Archetypes: macros and movement

Preset candidates: the genre guides. This section says what to turn.

| Archetype | Macros | Movement for the genre |
|---|---|---|
| Sub | Grit, Sub | none; release 50–100 ms |
| Reese, DnB | Detune, Brightness | slow lfo2 → detune or cutoff; neuro: lfo2 1/16 Random → pos |
| Acid | Brightness, Resonance, Grit | Legato: a long note slides into the next; velocity → envAmt accents are already in the preset |
| Dubstep | Position or Vowel, Grit | lfo2 at 1/8 or 1/16; speed via `set_automation` on `l2Sync` in time |
| House, garage | Position, Brightness | short notes between the kicks |
| Synthwave | Brightness, Width | bass in eighths; there is no chorus, Width gives the width; Hall bus with `color` 1980s, gated reverb on the snare |
| Funk | Snap, Resonance | Legato slides in Rubber bass |
| Trance | Width, Brightness | delay 1/8D in the chain; open toward the drop with the Brightness macro (its slot m1–m4 from `get_synth`) |
| Future bass | Motion, Width | duck from the kick on the chords |
| Hip-hop, trap | Brightness, Motion | G-funk: Mono glide 140 and vibrato |
| Lo-fi | Crush, Brightness | Subtle tape saturation in the chain |
| Arp | Snap, Brightness | `arp` 1, chords per bar |
| Ambient | Position, Width | free slow LFOs are already in the preset |
| Pluck | Snap, Brightness | A 0, D about 240 ms |
| Pad | Brightness, Width | A from 500 ms, long R |
| Lead | Brightness, Motion | fast A, full S; Legato; `envAmt` 0.2–0.4 |
| Keys | Brightness, Motion | short presets on chords are quieter in LUFS |
| Bells | Warp | tail up to 3 s |
| Brass, strings | Brightness, Width | Brass swell and Slow strings open by themselves |
| Organ | Position, Motion | Jazz organ vibrato is in the preset |
| Riser, downlifter | Brightness | one note over 4–8 bars |
| Impact | Grit, Brightness | one note on beat one of the drop |

## Related

`tool-synth`, `tool-automation`, `tool-arp`, `tool-wavetable`
