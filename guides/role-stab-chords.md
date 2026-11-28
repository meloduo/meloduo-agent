---
name: role-stab-chords
description: Chord stabs and one-note chord synths for house, garage and rave: oscillator intervals and a short decay.
---

# Stab chords

| Role | What makes the sound your own | Sign |
|---|---|---|
| Stab | a chord in one note (osc B/C on intervals), short decay | attack click, mids |

## When

House, UK garage, rave, techno and deep house parts that hit a short chord on the offbeat, or a riff of chords that all move in parallel. A held chord bed belongs to role-pad.

## Practices

- **A chord in one note.** Tune osc B and osc C to fixed intervals over osc A, then play one note per stab: every note sounds the same chord shape, moved in parallel. That is the classic organ and rave sound. Common shapes: +7 and +10 (minor seventh without the third), +3 and +7 (minor), +4 and +7 (major), +7 and +12 (open fifth).
- **Short decay.** The stab is mostly attack: decay about 150–300 ms, sustain low, a short release. A long tail blurs the offbeat.
- **Offbeat rhythm.** Usually on the "and" of the beat (steps 2, 6, 10, 14) or a syncopated figure such as 3, 6, 10, 13; leave space where the vocal or hook sits.
- **Sidechain pump.** Duck the stab from the kick so it breathes with the groove.
- **Swing.** In house and garage the stab shares the swing of the hats.
- **Register.** Keep the stab in the mids (roughly C3 to C5); it should not hold the low end.

## Meloduo recipe

1. `add_channel` synth with a preset: Organ/House House organ (organ stab), Brass Brass stab (brighter, longer), Bass/Acid Techno stab bass (dark, resonant), Keys Electric piano (soft garage keys). There is no dedicated rave stab preset: start from Brass stab or Lead Saw lead and shorten the envelope.
2. Chord in one note: `set_synth` with `semi2` (osc B pitch, −24…24) and `semi3` (osc C pitch), `mixB` about 0.5 (it crossfades osc A and B; at 0 or 1 one of them is silent), `level3` above 0 so osc C is heard. Example: `semi2` 7, `semi3` 10.
3. Envelope: `attack` 1, `decay` 150–300, `sustain` 0–0.2, `release` 60–120.
4. Notes: a `line` of single notes on the offbeats. A real voiced chord (letter chords in `line`, Poly mode) is the other option when the harmony must follow the key.
5. `add_effect` duck with the kick as `source`, `depth` 4–8 dB, `release` about an eighth (60000 / BPM / 2 ms).
6. `set_channel` `swing` with the same value as the hats (craft-groove-swing).

## Candidates

Vary the interval shape (+7/+10 against +3/+7), the preset (organ against brass) and the decay. The deciding numbers: the stab stem `crestDb` stays high (short, punchy), the `mid` share carries most of its energy, and the stab sits 2–6 dB under the lead. Method: craft-candidates.

## Check

`render_preview` with stems: stab `bands` mostly in `mid` and `lowMid`, little `sub`; `voicesStolen` under 5 %; no `clash` with the bass.

## Pitfalls

- A one-note chord moves in parallel and leaves the key: a stab line on many notes can clash with the bass and the lead. Keep to 1–3 root notes, or use voiced chords.
- A long release turns the stab into a pad.
- `check_melody` judges a stab as a melody: many repeats and no rests are normal here; say so in `why`.

## Engine limits

For the wide 90s organ use a chorus (BBD I) or a phaser (Funk) at `mix` 0.3–0.5, plus the `width` plugin (tool-modulation-fx).

## Related

`tool-synth`, `tool-sidechain-duck`, `craft-harmony-voicing`
