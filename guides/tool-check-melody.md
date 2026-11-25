---
name: tool-check-melody
description: Check a melody against its harmony with check_melody and read the result.
---

# check_melody

## Guidelines after `check_melody`

`check_melody` catches errors: chord tones, rests, range, motif, ending, register. The guidelines below are for a "voice-like" melody (lead, topline). A stab, riff, arp or bass follows its own rules: many repeats or none is normal there.

| What | Guideline | Sign of a problem |
|---|---|---|
| Repeated pitch | 20–30 % of intervals | under 10 %: wandering |
| Steps (1–2 semitones) | 40–55 % | over 70 % |
| Leaps (3–7 semitones) | 20–30 % | no leaps |
| Octave or more | ≤ 5 % | — |
| Moves in one direction in a row | ≤ 4 steps | 5 or more |
| Notes off steps 0, 4, 8, 12 | 20–40 % | 0 %: locked to the grid |
| Rhythm of A and A' | ≥ 70 % match | less: the motif is not recognised |
| Pitches of A and A' | 30–70 % match | 100 %: a loop without development |
| Peak | one, bars 5–7 | 3+ times or in bar 1 |
| Range | 7–12 semitones | over 12 or under 5 |
| Notes per bar | by genre (genre guides) | over 8 in a hook (except arps and riffs) |

Over power chords (root and fifth only) the tool already counts the implied diatonic triad (the third of the key) as chord tones. Only notes outside the key, or a scale with other than 7 notes, still warn: treat those warnings as real.

A riff or arp may play without rests: say so in `why` when `check_melody` warns.

## Related

`craft-melody-motif`, `stage-hook`, `tool-notation-lines`
