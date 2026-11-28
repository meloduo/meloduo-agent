---
name: craft-melody-motif
description: Write and develop a melodic motif: what makes a hook memorable, how it is born, development operations, melody against chords, mistakes.
---

# Melody and motif

## What makes a hook memorable

- A common overall contour (rise, then fall) with unusual local moves.
- Rhythm holds a motif more than pitch does: the rhythm repeats more often than the pitches.
- The motif repeats but develops. A loop without development and drifting away from the motif are the two main mistakes of generators.
- One peak. A rest to breathe. An ending on a stable note.
- Rhythmic energy matches the section and the genre. Keep the pitches simple, not the rhythm: in a fast, energetic genre a simple hook is a repeated note in straight eighths or a gallop. Long notes with a rest in every bar sound limp there.
- Intervals in pop melodies: repeats about 25 %, steps 48 %, leaps 25 %, octaves 2 %.

A hook is a 2-bar motif and its development, not 8 bars of notes in a row.

## How a hook is born

The steps below are the usual path, not a required order.

1. **Rhythmic cell.** Density follows the energy of the genre and the tempo (genre guides); usually 3–6 notes per bar, up to 8 even eighths in fast, energetic genres. Put something on a weak position (step 2, 6, 10 or 14) and make one note longer. Build the candidates on different cells:
   - with a pickup (steps 12–14 of the previous bar);
   - with a syncopation;
   - with a repeated note;
   - a long note and a short answer.
2. **Motif M of 1–2 bars.** The cell and a variant of it, with a rest to breathe at the end. "Home" is degree 1 or 5. Strong beats mostly get chord tones. A leap and a repeated pitch give the motif its face. An open ending (degree 2 or 5) calls for a continuation.
3. **An 8-bar phrase** built from M with the operations (below). Forms:
   - A A' B A'': pop, synthwave;
   - A B A C: a new ending in the last two bars;
   - A A B B': EDM drop;
   - A A A A': trap loop, variation only in the fourth.
   Most of the phrase comes from M; little is entirely new. Four identical 2-bar units sound like a loop without development.
4. **Peak.** A phrase usually has one peak near the end (bars 5–7 of 8). It is often reached by a leap and left by a step down. A peak heard many times loses its force.
5. **Cadence.** A closed ending is degree 1, 3 or 5 of the last chord on a long note. A loop repeats, so an ending on 5 or 2 pulls into the repeat.
6. **`check_melody`** on every candidate, then a look at the guidelines in tool-check-melody.
7. **Comparison** (stage-hook). The best one is the hook. A strong runner-up becomes a countermelody or the breakdown melody.
10. **Velocity and life.** Phrase starts and the peak louder, passing notes quieter. Run `humanize_notes` after the checks: shifting a note one tick early can throw off the `check_melody` analysis.

Countermelody and the hook across sections: craft-call-response.

## Motif development operations

M is a list of notes (step, length, degree).

| Operation | How | Where |
|---|---|---|
| Repeat with a new ending | the first 60–75 % of notes stay, the last 1–3 are new; A ends on 2 or 5, A' on 1 or 3 | bars 3–4 |
| Tonal sequence | the same rhythm, every degree +1, −1 or +2 in the mode | over a new chord; check the strong beats |
| Rhythmic shift | the whole motif moved +2, +4 or −2 steps | syncopation that keeps the motif's face |
| Fragmentation | only the first 2–4 notes of M twice, then all of M | bars 5–6, build-up |
| Augmentation | lengths and steps ×2 | intro, breakdown |
| Diminution | lengths ×0.5 | drop energy |
| Inversion | intervals mirrored from the first note, in the mode | B phrase or countermelody, rarely |
| Call and response | a question in the hook (bars 1–2, open ending), the answer in another instrument or register in its rests | bars 3–4 |

Transpose by scale degrees, not semitones, so the notes stay in the mode. An octave double: `copy_notes` with `semitones` 12. A second voice a third above: degrees two higher (`1→3`, `5→7`); check it with `check_melody` and `role: "second"`.

## Melody, chords and bass

- On strong beats (steps 0 and 8 in 4/4; the bar line and, in even meters, the middle of the bar; in syncopated genres, on the accents), a tone of the chord playing at that moment.
- Between them, neighbouring degrees of the mode: passing and neighbour notes.
- A long note a semitone above a chord tone grinds. Do not hold it.
- The melody centres on 5 or on 1, not both at once. In pop-rock b7 is more common than 7.
- The hook sits above the chords: its lowest note is 3+ semitones above the top chord note wherever they sound together. If it does not fit, lower the chords or drop their top voice. The hook centre is usually 67–79; above 84 the sound gets thinner and more piercing, so go there briefly (the peak, a final key lift) or with an octave layer below. Genre register: the genre guides.
- Hook and bass do not move in parallel octaves on strong beats.

## Mistake → sign → fix

| Mistake | Sign | Fix |
|---|---|---|
| Random wandering | the rhythm does not repeat after 2 bars; more than 4 turns per bar | write M, derive the rest with the operations |
| Stepwise noodling | steps > 70 %, repeats < 10 %, 5+ steps in one direction | repeated notes; a leap of a fourth or fifth every 2 bars |
| Too many notes | > 8 notes per bar, all the same length | remove every other note; end the phrase on ≥ 1/4 |
| No breath | no rest ≥ 1/8 in 2 bars | end every 2 bars with a rest of 1/8–1/2; at a fast tempo (160+) a rest every 4 bars is enough |
| No drive | long notes and half a bar of silence in every bar of an energetic section | diminution; a note repeated in eighths; a gallop; a push on the weak beat before a strong one |
| Locked to the grid | every note on steps 0, 4, 8, 12 | 20–40 % of notes on 2, 6, 10, 14, 3, 11; one pickup per 2 bars |
| Flat contour | the peak 3+ times or in bar 1 | one peak in the last third, approached by a leap |
| Loop without development | 8 bars = the same 2 bars ×4 | a new ending in bars 7–8 |
| Unfinished ending | the last long note is not 1, 3 or 5 of the chord | degree 1 (closed) or 3, 5 |
| One rhythm for everything | hook, countermelody and verse share one rhythm | countermelody in the hook's rests, verse at half density |

## Genre defaults

These are estimates, not measurements, and a starting point. The reference wins over the table.
Each genre guide holds its row; one more:

| Genre | Scale | Notes per bar | Range | Register | Phrase form |
|---|---|---|---|---|---|
| Happy hardcore, fast rave | major, natural minor | 6–8, eighths and sixteenths, offbeat stabs | 7–12 | 67–91 | A A' A A'' |

## Related

`stage-hook`, `tool-check-melody`, `craft-call-response`, `tool-notation-lines`
