---
name: genre-dubstep
description: Dubstep numbers: 140 half-time grid; the bass carries the hook (wobble, growl).
---

# Dubstep

Genre numbers are orientation; the reference wins. Swing values: craft-groove-swing.

## When

Use it for UK dubstep (deep, sparse, sub-heavy), brostep (bright, distorted, talking mid bass) and riddim (repetitive staccato bass). In every style the bass is the hook.

## Tempo and drums

| Genre | Tempo, centre (range) | Kick | Snare / clap | Hats and other |
|---|---|---|---|---|
| Dubstep, half-time | 140 | 0 | 8 | sparse |

- The range is 135–145; riddim sits at 140–150. The drums feel like 70 BPM: one snare per bar on step 8.
- Extra kicks for drive: 3, 10 and 14 (pick one or two, not all). Triplet kick fills (`unit` 1/16t) before a phrase end.
- Hats and percussion run in normal time (eighths or sixteenths), often with a gap around step 8 so the snare stands alone.
- UK style: organic percussion (tambourine, shaker, conga) with a Low cut at 100 Hz.

## Swing and groove

- Usually straight: `swing` 0. The groove comes from accents and gaps, not from a shuffle.
- Accent the hats and leave the bass rhythm to carry the groove: the bass phrase is the real rhythm part.

## Harmony

- Minor, phrygian; riffs on the root with a b2 or a fifth. Chords mostly in intros and breakdowns (pad, choir).
- One root for 2–4 bars in the drop; the movement is in the bass timbre.
- Write the drop bass as call and response over 1–2 bars: a phrase, then a different answer (craft-call-response).

## Form

- Streaming: Intro 8–16, Build 8, Drop 16 (8 + 8), Breakdown 8–16, Build 8, Drop 2 16, Outro 8.
- Riddim: about 80 bars: Intro 8, synth build 8, drum build 8, a false drop of 4, Drop 8 + 8, Build 8, false drop 4, Drop 8 + 8, Outro 8.
- DJ version: an intro and outro of 16–32 bars with drums only.
- The drop is louder and denser than the intro; the false drop is a short tease that cuts out.

## Roles

| Role | Preset candidates | Key numbers | Role guide |
|---|---|---|---|
| sub | Bass Sub bass, Clean sub | mono sine below 100 Hz, one note under each bass phrase | role-sub-bass |
| mid bass | Bass/Dubstep Wobble bass, Growl bass, Talking bass, Riddim bass, Formant wobble, Laser bass | Low cut 100–150 Hz; `lfoSync` 1/4, 1/8, 1/16 changed every bar or two | role-mid-bass |
| lead, screech | Lead/Dubstep Screech lead, Formant lead | short calls between bass phrases | role-lead |
| pad, intro | Pad Dark pad, Choir pad, Cinematic pad | intros and breakdowns only | role-pad |
| drums | DnB or Trap kit, a big layered snare | snare on 8, `click` on the kick | role-snare-clap |
| transitions | FX Riser, Impact boom, Downlifter, Laser zap, Siren | build 8 bars, impact on the drop | role-riser-impact |

## FX and mix signature

- Wobble: an LFO on cutoff synced to the tempo; automate `lfoSync` per beat or bar so each bass hit differs (tool-synth-modulation). Growl: `table` Growl with an LFO on `pos`.
- The sub and the kick stay mono; the mid bass can be wide above 200 Hz (`width` with `bassMono`).
- Drum bus: comp at `threshold` about −12 dB, `ratio` 3; a parallel drum bus at `ratio` about 10 for punch.
- `duck` on the bass channels from the kick and snare, 4–8 dB, so the drums punch through the drop.
- Grit: sat Hard on a parallel crush bus rather than on the sub (tool-saturation-amp-width).
- Master at −14 LUFS; a loud master only when the user asks (targets: craft-loudness-lufs).

## Reference core

1. Half time at 140: kick on 0, snare on 8.
2. The bass is the hook: wobble, growl or talking bass, different on every hit.
3. A clean mono sub under a separate, high-passed mid bass.
4. A drop of 16 bars after a clear build, with impact.

## Beginner mistakes

- Sub and mid bass both fill the low end: phase trouble and mud.
- The drop has no drum punch over the bass.
- Every bass hit is the same: change `lfoSync`, `pos` or the filter per hit.
- Pushing the master limiter instead of controlling the buses.

## Engine limits for this genre

- No resampling and no OTT. Riddim chops: write staccato notes (8 per bar) with a fast amp envelope instead of a chopped audio loop.
- No multiband or clipper: sat Hard on a parallel bus plus the limiter (craft-engine-limits).
- Synth pitch moves only through the `mods` matrix, not a lane: a pitch dive is a modulation row or a Legato note.

## Related

`tool-synth-modulation`, `role-mid-bass`, `stage-track-card`, `craft-groove-swing`
