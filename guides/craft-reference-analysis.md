---
name: craft-reference-analysis
description: Take a reference track apart - look it up, pick a mode (in the style of, or close to the record), build a part map and timbre targets, check closeness without hearing - and copy techniques, not the melody.
---

# Reference analysis

## When

The user names a track or an artist as the model, or imports a reference file. The core-first rule for artists is in craft-artist-core; this guide is how to take the reference apart.

## Two modes

The way of work decides the mode (meloduo-produce, "Two ways to work"):
- **In the style of** (Inspiration): a new song. Keep the core; change at least two of melody, chords, rhythm and sound so the result is new.
- **Close to the record** (Step by step: the user checks each stage by ear): keep the form, the chord progression, the bass figure, the drum pattern, the part map and the timbres. A chord progression and a groove are free to use. The vocal melody, the lyrics and a recognisable instrumental riff or hook are melodies too and not yours to copy note for note: keep their rhythm, register and role, write new pitches, or leave the topline to the user (they play it in or import a vocal), and say so. A sound-alike is for the user's own use; releasing a cover needs a cover licence.

Tests show the record is recognised by its parts and sounds far more than by its chords: in close mode the part map and the timbre targets matter most.

## Look it up

When a track is named and you have web search or fetch, find before the track card:
1. tempo (BPM) and key;
2. the chord progression of verse and chorus;
3. the form with section lengths;
4. the hook: what carries it, its rhythm and range;
5. the instruments and signature sounds (which drum machine, which synth, the bass pattern) and the era;
6. the parts: which instruments play in each section and their rhythm (tabs, MIDI transcriptions, tutorials and "how to make" videos, gear interviews).

Good sources: chord and tab sites, BPM and key databases, interviews, gear write-ups, Wikipedia. Mark each fact as found (with the source) or unconfirmed. The reference's tempo, key, form and chord colour are the default, not the average of the genre. Without web access, say so, give what you remember as unconfirmed, and ask the user for the 2–3 facts that matter most.

## Part map

A table in the track card: rows are the parts (kick, snare, hats, bass, chords, stabs, riff, arp, counter-melody, hook voices, FX), columns are the sections. Each cell: plays or not, the rhythm as a `grid` line or a short description ("octave 8ths", "stab on the and of 4"), the register. Build from the found facts and the genre guide; mark guesses.

At stage 6 compare the arrangement with the map: every part on the map exists and enters where the map says. The small parts (a bell answer, a stab, a counter-melody, a tom fill) are often what makes the record recognisable.

## Timbre targets

For each part with a known source instrument, write the target before choosing a sound: the instrument and era (FM bass, 80s drum-machine snare, a string machine, a gated snare), the envelope (short pluck or held), the brightness (dark, warm, bright, harsh), the width (mono, wide), and two or three measurable signs on its stem: band shares, `crestDb`, `lowSidePct`, level against the kick in LU. Pick the sound by these signs (meloduo-sound-design), not by the preset name. Name a target the engine cannot reach.

## Check closeness without hearing

1. **With a reference file the user imported:** place it on its own muted sampler channel (tool-sampler), set the project tempo to its tempo if you build around it, and compare band shares, loudness by section and width with your render (tool-match-eq).
2. **Without a file, with the user around:** after the first full chorus (stage 5) render 8 bars and ask one question: "Which part is furthest from the reference: drums, bass, hook, chords or space?" Fix that part, one part per round.
3. **Without a file and without the user:** check the part map and the timbre targets one by one and report what is unconfirmed.

## Meloduo recipe

1. **Reference card** in `set_project_info` (as part of the brief): the mode, the found facts with sources, tempo (and half/double-time feel), key and mode, form in bars, groove, chord loop and harmonic rhythm, mix character (dry or wet, bright or dark), the core 3–5 items (craft-artist-core), the part map and the timbre targets.
2. **Markers** in the reference's form before any clips: `add_markers`, one per section (tool-patterns-clips).
3. **Say what you kept and changed** in the report: "same form, chords, bass figure and drums; new topline".

## Check

- The card names the mode, the core, the part map and the timbre targets.
- In-the-style mode: two of melody, chords, rhythm and sound differ. Close mode: every part on the map is built, and the topline is the user's or new.

## Pitfalls

- Copying the melody → not yours to copy → keep the rhythm and range, change the pitches, or leave the topline to the user.
- An average track of the genre with the right tempo and key → still "not it" → build the part map and the timbre targets.
- Copying the details (scratches, ear candy) and missing the core (tuning, distortion, groove) → nobody recognises it → core first.
- Comparing a quiet mix with a loud reference → the reference always wins → compare band shares, not levels.

## Related

`craft-artist-core`, `tool-match-eq`, `tool-sampler`, `stage-track-card`, `stage-brief`
