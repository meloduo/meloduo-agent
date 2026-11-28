---
name: genre-techno
description: Techno numbers: tempo, kick-led grid, rumble, palette, preset candidates, dub delay signature.
---

# Techno

Genre numbers are orientation; the reference wins. Swing values: craft-groove-swing.

## When

Kick-led, hypnotic club music: peak-time, raw or deep techno, dub techno, and the faster, harder hardgroove.

## Tempo and drums

| Genre | Tempo, centre (range) | Kick | Snare / clap | Hats and other |
|---|---|---|---|---|
| Techno | 130 (125–145) | 0, 4, 8, 12 | rim or tom 4, 12, optional | every sixteenth quiet, accents 2, 6, 10, 14 |

- Raw and deep techno often run at 130–140 BPM, peak-time around 128–135; hardgroove is faster.
- The kick plays on every beat everywhere except the breakdown.
- An open hat on 2, 6, 10, 14; a ride in eighths with velocity dips.
- The clap on 4 and 12 is often absent; syncopated snares or rims instead.
- Percussion in a 3-step cycle against the 4/4: grid `"x..x..x..x..x..x"`; `E(3,8)` gives a related off-kilter pulse (craft-drum-programming).

## Swing and groove

- The techno row in craft-groove-swing: 0–24 on hats and ride; the kick at 0.
- Movement comes from accents, polyrhythm and slow filter automation rather than swing.
- A delay with `sync` 1/8D (3/16) on the ride or a percussion part adds a rolling feel (tool-delay).

## Harmony

- Often atonal: a single-note sequence, one chord stab, or none.
- The bass sits very low, around E0–E1, often a 1/16 sequence ducked from the kick.
- A rumble can replace the bass. Pick one low-end shape: rumble or bass, not both in the sub.

## Form

- DJ form: Intro, Breakdown, Drop, Drop variation, Breakdown, Drop, Outro (the Club form in stage-form).
- Sections of 16–32 bars, 8 at least; DJs count in 8-bar phrases. One loop runs through the track, so loudness stays near-level: the contrast is layers entering and leaving. `render_preview` does not report "Flat sections" when two or more parts enter or leave between sections; if it still fires, the parts do not change: thin out a section or add a layer in one.
- An impact every 16 bars, a sweep every 8 (craft-transitions).
- The outro is not a copy of the intro: change a part or a filter.

## Palette

| Genre | Defining timbre | Roles usually present | Roles usually absent |
|---|---|---|---|
| Techno | kick and rumble, acid or saw sequence | kick and rumble, bass sequence, one-chord stab, percussion, texture | progression, melody, pad (except a dark drone) |

## Sound candidates

| Genre | Role | Candidates | Edit for character |
|---|---|---|---|
| Techno | bass, sequence | Bass/Acid Techno stab bass, Diode acid, Square acid; Bass/Electro Rumble bass, FM bass; Lead/Techno Hypnotic sequence | slow Brightness automation over 16–32 bars |
| | stab | Lead/Techno Detroit lead; Brass stab; Keys FM piano (dub chord with delay) | Resonance, 3/16 delay |
| | texture | Texture Metallic texture, Dark drone, Evolving texture; FX Noise sweep, Wind | free-running LFO |
| | drums | Techno kit; Techno/Rumble kick; ride, rim, clap | rumble: kick → a bus with a long dark reverb |

## Roles

| Role | Key numbers | Guide |
|---|---|---|
| kick | the loudest part of the mix | role-kick |
| rumble or bass | mono, ducked from the kick | craft-kick-bass, role-sub-bass |
| sequence | 1/16, slow `cutoff` movement | role-pluck-arp, tool-automation |
| percussion | polyrhythm, quiet 16ths | role-percussion, role-hats-cymbals |
| texture | free-running, quiet | role-pad |

## FX signature

| Genre | Signature | How |
|---|---|---|
| Dub techno | dub delay | delay `sync` Off, `time` 300–700 ms, feedback 0.6–0.8 with a lane up and down; reverb after the delay on the same bus |
| Techno | rumble | kick → a bus with a dark long reverb (Hall 3–5 s, eq High cut 200–400 Hz), duck from the kick on that bus |

- Mono below about 120 Hz (`width` `bassMono`); the stereo width lives in the tops and the FX. Kick, rumble and sequence in mono leave the mix at correlation 1.0: pan hats and percussion apart (±0.2–0.5), put a stereo delay or a wide reverb on the percussion and a wide texture in the breakdown. Aim for correlation 0.5–0.85 in the drop.
- Dark is not dull: a dark techno mix still has hats, rides and noise above 6 kHz at −20…−14 LU below the kick. Do not silence "Dull" without checking the `high` band of the hats stem.
- The intro is DJ-friendly but not dry: kick plus hats or a quiet texture with a short room or delay, so it already sits in a space.
- Save distortion for later sections; early distortion leaves nowhere to go.
- Master at −14 LUFS; a loud master only when the user asks (targets: craft-loudness-lufs).

## Reference core

- a kick on every beat, the loudest part;
- a rumble or a rolling low sequence;
- hypnotic repetition with slow filter movement;
- percussion polyrhythm;
- long, DJ-friendly phrases.

## Beginner mistakes

- Muddy, washy sounds.
- Distortion too early.
- The intro copied as the outro.
- An arrangement too short for DJs.
- Rumble and bass both in the sub.

## Engine limits for this genre

- No reverse kick for the rumble: the reverb bus above does the job.
- No multiband or clipper: comp on the drum bus and the master limiter (craft-engine-limits).
- Drum parameters cannot be automated: move the sequence and the rumble bus instead.

## Related

`tool-reverb`, `tool-sidechain-duck`, `stage-track-card`, `craft-groove-swing`
