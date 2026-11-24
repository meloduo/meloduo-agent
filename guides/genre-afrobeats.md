---
name: genre-afrobeats
description: Afrobeats and amapiano numbers: swung percussion grids, clave figure, log drum as a synth pluck, warm chords; use for Afro pop, afrobeats or amapiano tracks.
---

# Afrobeats and amapiano

Genre numbers are orientation; the reference wins. Swing values: craft-groove-swing.

## When

Use it for afrobeats, Afro pop, afro-fusion and amapiano. Afrobeats: a simple kit, dense swung percussion and a plucky bass. Amapiano: a four-on-the-floor kick, a 16th shaker and the log drum as the main bass.

## Tempo and drums

| Genre | Tempo, centre (range) | Kick | Snare / rim | Hats and other |
|---|---|---|---|---|
| Afrobeats | 105 (95–115) | 0, 7, 10 (varies) | rim 4, 12, or 3, 6, 11, 14 | shaker in sixteenths; clave or perc 0, 2, 6, 12 |
| Amapiano | 112 (108–115) | 0, 4, 8, 12 | clap or rim sparse, often 12 | open hat 2, 6, 10, 14; shaker on all 16 steps |

- Some afrobeats goes up to about 130; slower songs sit near 100.
- The kit stays simple. The complexity lives in the percussion: congas, shaker, clave, tambourine, each in its own pattern.
- Amapiano patterns usually repeat every 4 bars; the 4th bar changes a little.

## Swing and groove

- `swing` 20–40 (the afrobeats and amapiano row in craft-groove-swing) on shaker, percussion and log drum: all the same value. The kick stays at 0.
- Straight hats are the most common giveaway of a wrong groove.
- Shaker accents: strong on the beat, weak in between (`"9575 9575 9575 9575"`); conga and rim at 70–100.

## Harmony

- Afrobeats: major keys or dorian, 2–4 chord loops (I–vi–IV–V, ii–V, i–iv). Bright, warm voicings.
- Amapiano: jazzy 7th and 9th chords (for example im9–IV7–VIImaj9–vm7) or two minor triads with shared notes, one chord per bar (craft-harmony-voicing).
- Keys play short, syncopated chords; a long pad sits quietly under them.

## Form

- Afrobeats: Intro 4–8, Verse 8–16, Hook 8, Verse, Hook, Bridge 8, Hook 8, Outro 4. Usually 2:30–3:15.
- Amapiano: longer, DJ-friendly. Intro 16 with percussion, the log drum enters after 8–16 bars, sections of 16, breakdowns with keys only. 5–7 minutes is common.
- Change the percussion layers every 8 bars rather than the chords.

## Roles

| Role | Preset candidates | Key numbers | Role guide |
|---|---|---|---|
| log drum (amapiano) | Bass Pluck bass or Sub bass, layered with Keys Marimba or Pluck Kalimba | short notes, amp `sustain` 0, `decay` 200–500 ms; a pitch zap from env2 | role-mid-bass |
| bass (afrobeats) | Bass Pluck bass, Square bass | short, plucky notes on the roots, no long slides | role-mid-bass |
| chords | Keys Electric piano, Soft keys, Wurly; Organ Jazz organ | syncopated stabs | role-keys |
| guitar | guitar Clean neck, Nylon classical | a highlife line in sixteenths, high register | role-lead-guitar |
| lead | Pluck Kalimba, Classic pluck; Lead Whistle lead | short hook phrases with rests | role-lead |
| percussion | Latin kit (congas, bongo, clave, shaker, tambourine) | swung, wide | role-percussion |

## Log drum recipe

The log drum is a synth pluck, not a long 808.
1. A sine-based bass with `sustain` 0 and `decay` 200–500 ms.
2. A pitch zap at the start: env2 → pitch with a short `e2Decay` (tool-synth-modulation).
3. A second channel with Keys Marimba or Pluck Kalimba on the same notes gives the wooden top.
4. Write it in the gaps of the kick, syncopated: for example steps 3, 6, 10, 14. It answers the kick, it does not cover it.
5. Give it the same `swing` as the percussion.

## FX and mix signature

- Warm, not hyper-loud. Kick and bass punchy rather than long.
- Percussion wide: congas and shaker panned apart, a short Room.
- A Plate or Hall on keys and guitar, delay 1/8D on plucks.
- A light `duck` on the log drum from the kick (2–4 dB) if they overlap.

## Reference core

1. A swung, layered percussion groove (shaker, conga, clave) over a simple kit.
2. A plucky bass or log drum with short notes; a sliding 808 usually does not fit.
3. Warm major or jazzy 7th chords in short, syncopated stabs.
4. Amapiano: four-on-the-floor kick, 16th shaker, off-beat open hat, log drum.

## Beginner mistakes

- A trap 808 with slides instead of a plucky bass.
- Straight, unswung hats and shaker.
- A busy kick that leaves no space for the percussion.
- A log drum that masks the kick, or a different swing on the log drum and the percussion.

## Engine limits for this genre

- No vocals: a pluck or whistle lead carries the topline (role-vocal-substitute).
- No talking drum voice: a high conga with a short `decay`, or a synth pluck with a pitch drop.

## Related

`craft-groove-swing`, `role-percussion`, `role-mid-bass`, `stage-track-card`
