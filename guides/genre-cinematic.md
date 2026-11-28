---
name: genre-cinematic
description: Cinematic and hybrid trailer music: ostinato strings, low brass, big toms, long crescendos, cinematic ambient; use when the user asks for film, trailer, game or epic soundtrack music.
---

# Cinematic

Genre numbers are orientation; the reference wins. Swing values: craft-groove-swing.

## When

The user asks for film, trailer, game or epic music, a hybrid orchestral cue or cinematic ambient. Say early that the Strings and Brass presets are synth sounds, not an orchestra: they give the role and the shape, not a real string section.

## Tempo and feel

- Free or 60–140 BPM; phrases follow the picture or the story rather than a dance grid.
- Ostinato in 8ths or 16ths for drive; long notes for weight.
- Cinematic ambient: slow, sparse, very dynamic.

## Drums (Meloduo steps 0–15)

| Part | Pattern | Notes |
|---|---|---|
| Big hits | 0, then 6 and 10 for a driving bar; 0 alone for a slow cue | Acoustic tom with `stick` Mallet, several toms tuned apart |
| Low pulse | kick on 0 and 8 under the toms | Acoustic kick, low `tune`, soft `beater` Felt |
| Accents | crash or impact on bar starts of new sections | crash `bloom` high |

Mallet toms stand in for big drums and timpani. Velocity changes their tone: write a crescendo in the velocities, not only in the fader.

## Swing and groove

`swing` 0. Feel comes from velocity shapes and the ostinato accents.

## Harmony

- Minor with borrowed chords: i–VI–III–VII, i–bVI–bVII.
- Pedal notes in the bass under moving chords; a two-chord ostinato (i–VI) can carry a whole build.
- Lydian colour for wonder, Phrygian or chromatic moves for threat.

## Form

- Build in layers, usually one new layer every 8 bars, toward one climax.
- Trailer shape: swell, hit, silence, a low brass blast; risers and impacts every 4–8 bars.
- Leave one quiet section before the climax.

## Roles

| Role | Preset candidates | Key numbers | Guide |
|---|---|---|---|
| Ostinato | Strings Staccato strings, Pizzicato | 8ths or 16ths, short decay, accents by velocity | `role-pluck-arp` |
| Long strings | Strings Slow strings, String pad; Cello lead | long attack, legato lines | `role-pad` |
| Low brass | Brass Brass swell, Synth brass | low register, swells with `cutoff` automation | `role-lead` |
| Bed | Pad Cinematic pad, Dark pad; Texture Dark drone | quiet, held | `role-texture` |
| Percussion | Acoustic toms Mallet, Acoustic kick | big hits on section starts | `role-percussion` |
| Transitions | FX Riser, Impact boom, Downlifter | every 4–8 bars in a trailer | `role-riser-impact` |

## FX and mix signature

- Hall reverb, `decay` usually 2–4 s, on a bus; `predelay` keeps the attacks clear.
- Seat sections by pan: high strings left of centre, low strings right, brass centre-right, percussion wide.
- Sub layers under the big hits, but cut the low-mid where toms, brass and cellos pile up.
- Loudness: −14 LUFS by default. Many cinematic cues sit quieter; a louder trailer master only when the user asks.

## Reference core

1. A clear ostinato that drives the cue.
2. Long low brass or strings that carry the theme.
3. Big Mallet toms on the structural hits.
4. One crescendo in layers toward a single climax.
5. A moment of silence or near silence before the biggest hit.

## Beginner mistakes

- Everything at full level from the start: no crescendo.
- Short notes with one velocity: the ostinato sounds like a machine.
- All sections in unison on the same line.
- Too much low-mid from toms, low brass and cellos at once (`lowMid` share in the stems).

## Engine limits

No orchestra samples, no choir voice, no tempo map or time signature changes (one signature per project, `set_tempo` `timeSignature`). Use synth presets as stand-ins and say so; the user can import real recordings. Details: `craft-engine-limits`.

## Related

`genre-ambient`, `role-riser-impact`, `craft-section-contrast`, `craft-space-depth`, `role-percussion`
