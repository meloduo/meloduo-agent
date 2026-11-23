# Hook and melody

Contents:
1. What makes a hook memorable
2. How a hook is born
3. Motif development operations
4. Melody, chords and bass
5. Guidelines after `check_melody`
6. Questions for comparing candidates
7. Mistake → sign → fix
8. Genre defaults
9. Writing in scale degrees, and three examples

## 1. What makes a hook memorable

- A common overall contour (rise, then fall) with unusual local moves.
- Rhythm holds a motif more than pitch does: the rhythm repeats more often than the pitches.
- The motif repeats but develops. A loop without development and drifting away from the motif are the two main mistakes of generators.
- One peak. A rest to breathe. An ending on a stable note.
- Rhythmic energy matches the section and the genre. Keep the pitches simple, not the rhythm: in a fast, energetic genre a simple hook is a repeated note in straight eighths or a gallop. Long notes with a rest in every bar sound limp there.
- Intervals in pop melodies: repeats about 25 %, steps 48 %, leaps 25 %, octaves 2 %.

A hook is a 2-bar motif and its development, not 8 bars of notes in a row.

## 2. How a hook is born

The steps below are the usual path, not a required order.

1. **Rhythmic cell.** Density follows the energy of the genre and the tempo (section 8); usually 3–6 notes per bar, up to 8 even eighths in fast, energetic genres. Put something on a weak position (step 2, 6, 10 or 14) and make one note longer. Build the candidates on different cells:
   - with a pickup (steps 12–14 of the previous bar);
   - with a syncopation;
   - with a repeated note;
   - a long note and a short answer.
2. **Motif M of 1–2 bars.** The cell and a variant of it, with a rest to breathe at the end. "Home" is degree 1 or 5. Strong beats mostly get chord tones. A leap and a repeated pitch give the motif its face. An open ending (degree 2 or 5) calls for a continuation.
3. **An 8-bar phrase** built from M with the operations (section 3). Forms:
   - A A' B A'': pop, synthwave;
   - A B A C: a new ending in the last two bars;
   - A A B B': EDM drop;
   - A A A A': trap loop, variation only in the fourth.
   Most of the phrase comes from M; little is entirely new. Four identical 2-bar units sound like a loop without development.
4. **Peak.** A phrase usually has one peak near the end (bars 5–7 of 8). It is often reached by a leap and left by a step down. A peak heard many times loses its force.
5. **Cadence.** A closed ending is degree 1, 3 or 5 of the last chord on a long note. A loop repeats, so an ending on 5 or 2 pulls into the repeat.
6. **`check_melody`** on every candidate, then a look at the guidelines in section 5.
7. **Comparison** (section 6). The best one is the hook. A strong runner-up becomes a countermelody or the breakdown melody.
8. **Countermelody:**
   - its own place: above the hook, between the hook and the chords, or in the hook's rests; inside the pad register it sinks and fights the harmony;
   - notes in the rests and on the long notes of the hook;
   - clearly fewer notes than the hook;
   - contrary motion where the hook moves;
   - on strong beats, a chord tone the hook does not hold (hook on 5 → countermelody on 3).
9. **Hook across sections:**
   - intro and verse: half the notes or augmentation, another timbre;
   - pre-drop: a fragment sequenced upward;
   - bridge: simpler and slower than the hook: a stretched motif, a repeated note, a new short phrase of 2–4 notes; a complex melody in the bridge distracts and fights the rise;
   - drop: the full phrase and a double (`copy_notes` +12 or −12; an upper double may go above the hook register: keep it quieter and thinner);
   - last drop: A'' with a new peak or a new ending.
   The centre of the chorus melody sits 2–5 semitones above the centre of the verse.
10. **Velocity and life.** Phrase starts and the peak louder, passing notes quieter. Run `humanize_notes` after the checks: shifting a note one tick early can throw off the `check_melody` analysis.

Vocals later: no melody in the verse; in the chorus it is sparser and 3–4 LU quieter.

## 3. Motif development operations

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

## 4. Melody, chords and bass

- On strong beats (steps 0 and 8; in syncopated genres, on the accents), a tone of the chord playing at that moment.
- Between them, neighbouring degrees of the mode: passing and neighbour notes.
- A long note a semitone above a chord tone grinds. Do not hold it.
- The melody centres on 5 or on 1, not both at once. In pop-rock b7 is more common than 7.
- The hook sits above the chords: its lowest note is 3+ semitones above the top chord note wherever they sound together. If it does not fit, lower the chords or drop their top voice. The hook centre is usually 67–79; above 84 the sound gets thinner and more piercing, so go there briefly (the peak, a final key lift) or with an octave layer below. Genre register: section 8.
- Hook and bass do not move in parallel octaves on strong beats.

## 5. Guidelines after `check_melody`

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
| Notes per bar | by genre (section 8) | over 8 in a hook (except arps and riffs) |

## 6. Questions for comparing candidates

Compare the candidates with each other, not with an ideal. You can give 0–2 points per question.

1. **Rhythmic signature.** The rhythm is recognised after one listen and differs from the other candidates.
2. **One peak.** A clear rise to it and a fall after.
3. **One surprise.** A leap, a syncopation or a non-chord tone that resolves.
4. **Singable.** No leaps over an octave, room to breathe.
5. **Contrast with the verse.** A different register, rhythm or density.
6. **Drive.** The hook rhythm carries the section's energy: in a drop or chorus it is no sparser than the drums and harmony. Sing the hook over the kick at tempo: does it push forward or hang?

Show your pick to the user in one line: "hook B: the rhythm sticks, peak in bar 6; A is flatter, C has no breath".

## 7. Mistake → sign → fix

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

## 8. Genre defaults

These are estimates, not measurements, and a starting point. The reference wins over the table.

| Genre | Scale | Notes per bar | Range | Register | Phrase form |
|---|---|---|---|---|---|
| House, EDM drop | natural minor, major pentatonic | 4–8, eighths, offbeat syncopation | 7–12 (+ octave double) | 67–84 | A A B B' or A A' A A'' |
| Trap, hip-hop loop | natural or harmonic minor, minor pentatonic | 3–6, triplet fills | 5–12 | 60–84 (bells 72–91) | a 2–4 bar loop, variation every 4th |
| Synthwave lead | aeolian, dorian | 2–5, quarters and halves | 10–15 | 64–84 | A A' B A' |
| Lo-fi | dorian, sevenths and ninths | 2–5, lazy lag | 5–10 | 60–79 | a sparse 8-bar loop |
| Pop (instead of vocals) | major pentatonic, major | 4–8, "syllables" | 7–12 | 60–79 | A A' B A' |
| Rock riff | minor pentatonic + b7, bluesy b5 as a passing note | 4–8, eighths and sixteenths | 5–12 | riff 40–64, lead 60–84 | a 1–2 bar riff, the last bar changes |
| Pop-punk lead | natural minor, major | 6–8, straight eighths, gallop, repeated note | 5–10 | 60–84 | A A' A B or A A' B A'' |
| Happy hardcore, fast rave | major, natural minor | 6–8, eighths and sixteenths, offbeat stabs | 7–12 | 67–91 | A A' A A'' |

A riff or arp may play without rests: say so in `why` when `check_melody` warns.

## 9. Writing in scale degrees, and three examples

`add_notes` with `lines`: `line` in degrees, `unit` 1/8, `octave` sets where degree 1 is. `.` is a rest, `:2` a length of 2 units, `5'` an octave up, `1,` an octave down. Fill each bar completely: the lengths add up to the bar. Syntax: `get_notation`.

Three examples, three different characters. Do not copy them: they show the form, not the notes.

**Minor, with repeats (A A' B A'', Am–F):**
- A: `"5 5 . 3:2 . 1 . | 5 5 . 6:2 5 . ."`
- A': `"5 5 . 3:2 . 1 . | 5 5 . 4:2 3 . ."`
- B: `"7 7 . 5:2 . 3 . | 1' 1' . 7:2 . . ."` (peak on 1', approached by a leap)
- A'': `"5 5 . 3:2 . 2 . | 1:4 . . . ."` (a long tonic)

**Major, with a pickup (A B A C):**
- A: `". . . . . . 3 4 | 5:3 3 2:2 1 ."`
- B: `". . . . . . 4 5 | 6:3 5 4:2 . ."`
- A: the first two bars again
- C: `". . . . . . 5 6 | 1':2 7 6 5:4"` (the peak, then a close on 5)

**Trap loop (A A A A', unit 1/16):**
- A: `"1 . . 1 . . 3 . . . 4 . 3 . . . | 1:4 . . . . . . 7, . 1 . . ."`
- A': bar 1 the same, bar 2 `"5:4 . . 4 . 3 . 1:4 . ."`
