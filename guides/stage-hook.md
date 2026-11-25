---
name: stage-hook
description: Stage 4 of a track: write 3-4 hook candidates, check them against the chords and pick one.
---

# Stage 4. Hook

A strong hook is a short motif and its development, not a stream of notes. The best hooks are picked from several: write a few different candidates (usually 3–4), compare them and take the best. How: craft-melody-motif. In close-to-the-record mode (craft-reference-analysis) the candidates are new toplines in the reference's rhythm and range; the form and the parts follow the reference.

1. Give the candidates different rhythmic ideas: pickup, syncopation, a repeated note, a long note with an answer, straight eighths, a gallop. Rhythmic density follows the energy of the genre and the tempo: a simple hook does not have to be sparse.
2. From each idea make a motif of 1–2 bars, and from the motif a phrase, by development techniques (repeat with a new ending, sequence, fragmentation, rhythmic shift).
3. Look for one peak in the phrase, a breath and a clear ending.
4. Write in scale degrees (`add_notes` with `lines`), each candidate separately. Run `check_melody` on each, with the chords and bass as `against`. Empty `warnings` with a non-empty `skipped` is not a pass.
5. Compare the candidates with the questions below. Tell the user your pick and the reason in one line. A strong runner-up can become a countermelody. It fits a bridge or breakdown only if it is simpler than the hook (craft-call-response). Delete the patterns you do not use.
6. Hook timbre: Lead presets in Mono glide on every note, so you usually need `"mode":"Legato"` (tool-synth).

## Chord stab or chord wall as the hook (house, future bass)

When the chords carry the hook, there is no lead melody and `check_melody` against the chords does not apply (it checks a voice-like line). Candidates differ in other things:

1. Rhythm: 3–4 stab or chord rhythms (offbeat, syncopated 0, 3, 6, 10, 12, held with a pump), each with a clear accent.
2. Voicing: the top note of the chord is the tune. Run `check_melody` on the chord channel (it reads the top voice), with the bass pattern as `against` if useful; or check the voicing by numbers only (no clusters in 200–500 Hz, craft-harmony-voicing).
3. Compare with the six questions below, reading "peak" as the chord change that lifts the top note, and "surprise" as a rhythmic push or one borrowed chord.
4. A short top-line answer or a chop in the gaps can be the second candidate.

Check yourself: is the rhythm memorable after one listen? Does the hook push forward at the track's tempo, or does it hang? Does the motif develop, rather than loop or get lost? Does `check_melody` show the hook fighting the chords? (For a chord hook, read the last question as: do the chords clash with the bass?)

## Questions for comparing candidates

Compare the candidates with each other, not with an ideal. You can give 0–2 points per question.

1. **Rhythmic signature.** The rhythm is recognised after one listen and differs from the other candidates.
2. **One peak.** A clear rise to it and a fall after.
3. **One surprise.** A leap, a syncopation or a non-chord tone that resolves.
4. **Singable.** No leaps over an octave, room to breathe.
5. **Contrast with the verse.** A different register, rhythm or density.
6. **Drive.** The hook rhythm carries the section's energy: in a drop or chorus it is no sparser than the drums and harmony. Sing the hook over the kick at tempo: does it push forward or hang?

Show your pick to the user in one line: "hook B: the rhythm sticks, peak in bar 6; A is flatter, C has no breath".

## Related

`craft-melody-motif`, `tool-check-melody`, `craft-candidates`, `tool-notation-lines`, `role-lead`
