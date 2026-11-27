---
name: genre-trance
description: Trance and big-room EDM: supersaw and offbeat bass palette, preset candidates; drop melody numbers sit in genre-house.
---

# Trance and EDM

Genre numbers are orientation; the reference wins. Swing values: craft-groove-swing.

## When

The user names trance, uplifting, progressive or psytrance-leaning EDM, or a big supersaw drop with a long breakdown.

## Tempo and feel

- Usually 136–140 BPM; 138 is the classic centre. Progressive sits lower (128–134).
- Straight, driving 16ths; the energy comes from the long arc of build and release.

## Drums (Meloduo steps 0–15)

| Part | Steps | Notes |
|---|---|---|
| Kick | 0, 4, 8, 12 | short, tight decay |
| Clap / snare | 4, 12 | short; a fill at the end of a phrase |
| Open hat | 2, 6, 10, 14 | the offbeat drive |
| Closed hat, ride | 16ths or offbeats | quieter than the open hat |
| Offbeat bass | 2, 6, 10, 14 (or rolling 1, 2, 3 · 5, 6, 7 …) | between the kicks, usually not on them |

Snare builds double their rate every 1–2 bars: quarters, eighths, 16ths, then 32nds into the drop.

## Swing and groove

`swing` 0. Groove comes from the offbeat bass and the sidechain pump.

## Harmony

- Natural minor most of the time; uplifting trance likes i–VI–III–VII and VI–VII–i movements.
- The breakdown often states the chords alone on a pad, then the lead melody on top.
- A key change of 3 or 5 semitones for the last section is a classic lift.

## Form

- Work in 16-bar blocks; a new element every 8 bars.
- Intro 16–32 bars (DJ-friendly), first drop or main section, breakdown usually 32 bars (16–64), build 8–16 bars, final drop 32 bars, outro 16–32 bars.
- A single low-pass sweep over the last 16 bars of a build often does more than stacked risers.

## Palette

| Genre | Defining timbre | Roles usually present | Roles usually absent |
|---|---|---|---|
| Trance, EDM | supersaw, offbeat bass | sub and offbeat bass, arp or gated pad, lead, pluck, pad, risers | live keys, guitar |

## Sound candidates

| Genre | Role | Candidates | Edit for character |
|---|---|---|---|
| Trance, EDM | bass | Bass Fat saw bass, Sub bass, Pluck bass (offbeat) | — |
| | lead, pluck, arp | Lead/Trance Supersaw lead, Hybrid supersaw, Trance lead; Pluck/Trance Supersaw pluck; Arp/Trance Trance arp, Trance gate; Lead/Hardstyle Euphoric lead | `uniA` 7 / `uniB` 1, Width |
| | pad | Pad Supersaw pad, Sweep pad; Strings String pad | gate lfo2 → amp |

## Roles

| Role | Key numbers | Guide |
|---|---|---|
| Offbeat bass | short notes between the kicks, a sine sub layer; duck from the kick with a fast attack, `release` about 80–120 ms | `role-mid-bass` |
| Supersaw lead | `uniA` 7, `uniB` 1; long Hall and a 1/8D or 1/4 delay | `role-lead` |
| Gated pad | a 1/16 gate on the chords (Arp/Trance Trance gate, or lfo2 → amp) | `role-pad` |
| Arp | 1/16, `arpOct` 2–3, under the lead | `tool-arp` |
| Risers | FX Riser, Noise sweep, Downlifter over 8–16 bars | `role-riser-impact` |

## FX and mix signature

- Sidechain pump on bass, pads and leads from the kick (tool-sidechain-duck).
- A long, big reverb in the breakdown; a short slap delay on the kick is an old trick.
- Pads: the 200 Hz–1 kHz body carries warmth; cut the low end so the bass stays clean.
- Master at −14 LUFS; a loud master only when the user asks (targets: craft-loudness-lufs).

## Reference core

1. Four-on-the-floor kick with the bass between the kicks.
2. A supersaw lead with a strong, singable melody.
3. A long breakdown with chords on a pad and the melody exposed.
4. A build that rises over 8–16 bars into the drop.
5. Steady sidechain pump.

## Beginner mistakes

- A bass that hits with the kick instead of between the kicks.
- A breakdown too short to reset the energy.
- Supersaw unison on every oscillator, so the low end turns to mud.
- Several risers stacked instead of one clear sweep.

## Engine limits

No tempo map: the whole track stays at one BPM. Chorus, flanger and phaser exist (tool-modulation-fx), but supersaws already have width: use "Subtle widen" or none. A flanger or phaser sweep suits risers and the build. More limits: `craft-engine-limits`.

## Related

`tool-arp`, `genre-house`, `stage-track-card`, `craft-groove-swing`
