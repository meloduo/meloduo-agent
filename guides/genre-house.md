---
name: genre-house
description: House and deep house numbers: tempo, four-on-the-floor grid, palette, preset candidates, pumping signature.
---

# House

Genre numbers are orientation; the reference wins. Swing values: craft-groove-swing.

## When

Four-on-the-floor dance music: deep house (warm 7th chords, a soft legato bass) and tech house (a rhythmic, groovy bass, few chords).

## Tempo and drums

| Genre | Tempo, centre (range) | Kick | Snare / clap | Hats and other |
|---|---|---|---|---|
| House | 124 (118–130) | 0, 4, 8, 12 | clap 4, 12 | closed 2, 6, 10, 14; open every other |

- Deep house usually 120–126 BPM, tech house 124–128.
- Many grooves put the open hat on every off-beat (2, 6, 10, 14) and run closed hats in swung 16ths under it.
- Shaker or percussion on syncopated 16ths, for example 3, 7, 11, 15.
- The kick plays on every beat except in the breakdown.

## Swing and groove

- The house row in craft-groove-swing: 16–44 on hats, shaker, percussion and bass; the kick stays at 0.
- Shakers often swing towards the top of the range.
- Accent the hats in a repeating shape; Euclidean percussion (`E(3,8)`, `E(5,16,2)`) adds movement (craft-drum-programming).

## Harmony

- Mostly minor keys. Deep house: 7th and 9th chords in a 2-bar loop, for example i–VII.
- Tech house: one chord or none; the bass carries the groove.
- Deep house bass: sustained, legato, on the chord roots. Tech house bass: short notes on the off-beats, often avoiding steps 0, 4, 8, 12.

## Melody defaults

| Genre | Scale | Notes per bar | Range | Register | Phrase form |
|---|---|---|---|---|---|
| House, EDM drop | natural minor, major pentatonic | 4–8, eighths, offbeat syncopation | 7–12 (+ octave double) | 67–84 | A A B B' or A A' A A'' |

## Form

- Club form: Intro 32 (the first 16 bars drums only, for DJs), Groove 16, Build 16, Drop 16–32, Breakdown 16–32, Drop 2, Outro 32 (stage-form). A club mix runs 6–7 minutes.
- A streaming edit shortens the intro and outro to 8.
- Layers enter every 8 bars: for example the organ at bar 8, the first lead at bar 16.

## Palette

| Genre | Defining timbre | Roles usually present | Roles usually absent |
|---|---|---|---|
| House, deep house | organ or chord stab, pluck bass, 909 | bass (one), stab or keys, percussion (shaker, conga, rim), pad, vocal chop | supersaw lead, long arp |

## Sound candidates

| Genre | Role | Candidates | Edit for character |
|---|---|---|---|
| House | bass | Bass/House Organ bass, Deep house bass, Garage bass; Pluck bass | Position macro, Snap |
| | stab, keys | Organ/House House organ, Combo organ; Keys Electric piano, Wurly; Brass stab; Pluck/House House pluck | chord stack: osc B/C at +7/+10 |
| | pad, voice | Pad Choir pad, Vowel pad, Breathing pad | vowel position |
| | drums | House or 909 kit; conga, shaker, rim, clave, cowbell | kick `decay`, snare from Classic |

## Roles

| Role | Key numbers | Guide |
|---|---|---|
| kick | the loudest part, on every beat | role-kick |
| bass | one bass, ducked from the kick | role-mid-bass, craft-kick-bass |
| stab or keys | short chords, off-beat | role-stab-chords |
| percussion | swung, Euclidean | role-percussion |
| pad | breakdown and drop | role-pad |

## FX signature

| Genre | Signature | How |
|---|---|---|
| House, EDM | pumping | duck on the bass 6–10 dB and a Pump bus 4–8 dB; a Low cut sweep on the music bus in every build; delay 1/8D on plucks; a long reverb in the breakdown |

- Clean low end (deep house): the numbers are in `craft-kick-bass` (one owner of the sub, bass 1.5–4 dB under the kick, `duck` depth by goal: 2–4 dB to separate the bass, 4–6 dB for a deep house bass, 6–10 dB for pumping), `craft-frequency-slots` (mud 200–500 Hz) and the mix table in `craft-gain-staging-balance` (chords and pads high-passed at 150–200 Hz, hats 200–400 Hz, percussion 150–300 Hz, snare and clap 80–100 Hz). Orientation: kick fundamental 50–60 Hz, bass 40–120 Hz on the chord root and tuned to the kick; the kick is short (decay under about 250 ms) and the bass sits in the gaps or is ducked from the kick (depths above); the music bus ducks 4–8 dB from the kick; low side below 100–150 Hz in mono (craft-low-end-mono).
- Route every non-drum part to one bus and duck it from the kick (tool-buses-sends).
- Master at −14 LUFS; a loud master only when the user asks (targets: craft-loudness-lufs).

## Reference core

- a kick on every beat;
- a clap on 4 and 12;
- an off-beat open hat;
- swung hats and percussion;
- pumping chords and bass.

## Beginner mistakes

- No swing: stiff tops.
- The kick and the bass fight.
- A busy intro that DJs cannot mix.
- One loop for 3 minutes or more without change.

## Engine limits for this genre

- Vocal chops need the user's audio (tool-sampler); without it, use Pad Vowel pad or Choir pad.
- Organ and keys: a phaser (Funk, Classic 4-stage) or a chorus (BBD I) at `mix` 0.3–0.5; a flanger sweep on the drum bus in a build (tool-modulation-fx).

## Related

`craft-kick-bass`, `craft-frequency-slots`, `craft-low-end-mono`, `tool-sidechain-duck`, `role-stab-chords`, `stage-track-card`, `craft-groove-swing`
