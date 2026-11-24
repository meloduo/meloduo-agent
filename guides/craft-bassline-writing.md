---
name: craft-bassline-writing
description: Write a bassline - roots and movement, locked to the kick or between its hits, octaves, approach notes, slides - and keep it in a register that works on any speaker.
---

# Bassline writing

## When

Stage 3 (groove and harmony), or when the user asks for a new or better bassline. The sound of the bass is a separate topic: role-sub-bass, role-mid-bass, role-808, role-bass-guitar.

## Practices

- Most basslines play the chord root most of the time, often around 60–80 % of the notes, and move on the other notes.
- The rhythm agrees with the kick: either locked to it (the same hits) or between its hits. Both at once fight.
- Common patterns:

| Pattern | What it is | Genres |
|---|---|---|
| kick lock | bass on the kick hits, held | trap, hip-hop, pop |
| offbeat | short notes between quarter kicks (steps 2, 6, 10, 14) | trance, house, garage |
| rolling 16ths | a busy 16th line with octave jumps | techno, synthwave (8ths), DnB rollers |
| 808 pattern | long notes with slides, own rhythm against the kick | trap, drill |
| riff unison | the bass doubles the guitar riff | rock, metal |
| walking or melodic | roots on strong beats, steps between | funk, lo-fi, R&B |

- Approach notes: a note a step or a fifth before the next root, on the last 16th of the bar, leads into the change.
- One to three syncopations per bar give life; more blurs the low end.
- Register: the lowest note usually no lower than MIDI 28 (E1). With a high key (A#–B) the root goes an octave lower, into 28–43.
- One note at a time: the bass is mono in pitch as well as in stereo.

## Meloduo recipe

1. Write the line in its own pattern with `add_notes` `lines`, `unit` "1/8" or "1/16": `{"line":"C2:3 . C2 Eb2 . G2 | F2:2 . F2 Ab2 G2 F2 Eb2","unit":"1/8"}`. Degrees follow the key: `{"line":"1:2 . 1 5, . 1","octave":2}`.
2. Lock or interlock with the kick: read the kick steps from the drum pattern and place bass notes on them, or between them.
3. Approach notes on the last 16th before a chord change.
4. Slides (808, acid, G-funk): overlapping notes in Legato or the 808 glide (role-808, tool-synth).
5. A variant "A-end" for the last bar of the phrase (craft-pattern-variation).
6. Swing: the bass gets the same `swing` as the drums of its groove (craft-groove-swing).

## Check

- Render kick and bass alone: no `clash` (craft-kick-bass).
- `check_melody` with `role` "second" is not needed; but the bass and the hook should not move in parallel octaves on strong beats.
- The bass stem has some energy above 100 Hz so it reads on a phone (`bands` bass and lowMid, not only sub).

## Pitfalls

- A bass on every 16th under a busy kick → mud → pick lock or interlock.
- Roots only in whole notes → no groove → add rhythm and approach notes.
- Too low → inaudible on phones → raise the octave or add a top (role-sub-bass).

## Related

`craft-kick-bass`, `role-sub-bass`, `role-808`, `stage-groove-harmony`, `tool-notation-lines`
