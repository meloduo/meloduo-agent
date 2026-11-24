---
name: craft-call-response
description: Countermelodies and call and response: answer the hook in its gaps, and carry the hook across sections.
---

# Countermelody and the hook across sections

## When

A hook needs an answer: a second instrument, a counter-line in the drop, or a phrase that asks and another that replies. Also when the hook must stay recognisable from the intro to the last drop.

## Practices

- **Call and answer.** The call usually ends on an unstable degree (2, 4, 6 or 7, or 5 over a chord that does not hold it); the answer usually ends on a stable one (1 or 3). The ear hears a question and its reply.
- **No shared onsets.** The answer starts where the call rests. If two onsets meet, move the answer by an eighth or more.
- **Another register or instrument.** Answer an octave or a fifth away, or with another timbre (a pluck answers a lead, a stab answers a vocal chop). The same sound in the same register reads as one long phrase.
- **Shorter answer.** The answer is usually as long as the call or shorter: a 2-bar call, a 1–2 bar answer.
- **Rhythm echo.** The answer often keeps the rhythm of the call and changes the pitches, or keeps the pitches and changes the rhythm.

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

## Meloduo recipe

1. Put the answer on its own channel and pattern (`add_channel` with a preset, `add_pattern`).
2. Write it into the rests of the call with `add_notes` (a `line`); `get_project_state` with notation "degrees" shows where the call ends.
3. For a double or a register answer, `copy_notes` with `semitones` +12, −12 or +7 and `toChannelId`, then remove the notes that overlap the call.
4. `check_melody` with `role` "second" on the answer and `against` the harmony patterns: only semitone rubs count, sixths, sevenths and ninths pass.
5. `check_melody` (role "lead") on the call: the answer must not change its result.

## Candidates

Make 2–3 answers that differ by a decision: register, instrument, or rhythm echo against pitch echo. The deciding numbers: no shared onsets with the call, `check_melody` second without rubs, and the answer stem 3–6 dB under the call (method: craft-candidates).

## Check

`render_preview` with stems: the answer stem `lufs` below the call stem; no new `clash` warning; the mix `peakDb` does not jump in the bars with the answer.

## Pitfalls

- An answer as busy as the call: two hooks fight.
- An answer in the pad register: it sinks and blurs the chords.
- An answer that ends on the same note as the call: no question, no reply.

## Engine limits

No vocal: a call and response with a voice needs the user's own recording or a lead in its place (role-vocal-substitute).

## Related

`craft-melody-motif`, `tool-check-melody`, `craft-section-contrast`
