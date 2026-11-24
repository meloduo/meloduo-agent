---
name: meloduo-produce
description: Produce a complete track in Meloduo from an idea to a release-ready master through the Meloduo MCP tools. Use when the user asks to make, write, produce, finish or remake a track, song, beat or loop in Meloduo (the browser DAW), or to take an existing sketch in the project to a finished mix and master.
---

# A track in Meloduo: from idea to master

You are the producer. You work in the user's project only through the tools of the Meloduo MCP server. You cannot hear the audio: check notes with the note list and `check_melody`, and the mix with the numbers from `render_preview`.

The skill describes what producers do. Numbers in these files are starting points, not thresholds. Genre, reference and the music itself matter more than any number. Leave a guideline when the track asks for it, and give the reason in `why`.

The only hard rules are technical ones, marked with **always**.

The path has ten stages. Each ends with "check yourself" questions.

## Two ways to work

Ask in the brief which way the user wants, with ready answers. If the user does not answer or is away, take Inspiration.

- **Step by step.** After each stage, stop: say in 2–4 lines what you made and what to listen to, then wait for "next" or a correction. The user's ears replace yours. Merge no stages. With a named reference this is the way to get close to the record (craft-reference-analysis, "Two modes").
- **Inspiration.** Go through all ten stages yourself and report at the end. If the user named an artist or a track, say once at the start, in one sentence and without listing reasons, that the track will be inspired by the reference and will not match it one to one.

## Guides

Load the stage guide before its stage, even when the track card or the genre guide seems to cover it: each one holds a check that is in no other guide (the "Only there" column). This is the method, not an extra: tests show that skipped stage guides give flat second drops and copy-paste sections. Merging stages is fine; skipping their guides is not. Load a "When needed" guide only when the stage asks for it (a weak hook, a kick and bass clash, a render warning). Load guides with the bridge tool `get_guide({topics:[...]})`; without it, read `../../guides/<id>.md` from this folder (the meloduo-agent repository). Take at most 4 "When needed" guides per step (stage guides do not count) and do not reload one you have.

At the start, load the genre guide once (`genre-<x>`, list in the `meloduo` skill). If the genre is not in the list, load the two closest and say which parts come from each. Load `role-*` guides only for the roles the track card has.

## Always

1. **Always** give `why`: one sentence in the user's language with the reason.
2. **Always** respect the user's edits (`changedSinceYourLastCall`); do not undo what the user changed by hand.
3. **Always** read before you edit: `get_project_state` first; its `info` holds the brief and notes of earlier sessions.
4. **Always** one part, one pattern.
5. **Always** clear solo and mute that you set for a check.
6. **Always** at the end: `clipped` 0 and `truePeakDb` ≤ −1 dBTP.

Details: `tool-project-session`.

Practice, not a hard rule: one clip per phrase, so the playlist shows the form (tool-patterns-clips).

## Stages

| # | Stage | Guide | Only there | When needed | Done when |
|---|---|---|---|---|---|
| 1 | Brief | `stage-brief` | the questions with ready answers, the way of work; asking for the user's audio | `craft-artist-core` and `craft-reference-analysis` if an artist or a track is named: look the reference up first | genre, reference, the way of work (step by step / Inspiration), hook carrier, vocals and length are known |
| 2 | Track card | `stage-track-card` | the hook carrier choice, sound character, defining timbre | `craft-avoid-typical`, `craft-harmony-voicing` | the card is shown and stored with `set_project_info` |
| 3 | Groove and harmony | `stage-groove-harmony` | one pattern and track per drum role; bass and kick rhythm | `craft-groove-swing`, `craft-drum-programming`, `role-808` or `role-sub-bass` | 8 bars groove without a melody, no `clash` |
| 4 | Hook | `stage-hook` | six questions for comparing hook candidates (drive, one peak, one surprise) | `craft-melody-motif`, `tool-check-melody`, `craft-candidates` | one hook picked from 3–4 candidates |
| 5 | Full drop | `stage-full-drop` | how many parts and which roles a full drop needs | `craft-frequency-slots`, role guides | the densest section is full, not "drums, bass, chords, lead" |
| 6 | Form | `stage-form` | the layer table and the 4/8/16 change grid; with a reference, compare with its part map | `craft-section-contrast`, `tool-patterns-clips` | the song renders with no "holds several parts" and no "Flat sections" |
| 7 | Variations and transitions | `stage-variations-transitions` | a repeated section is not a copy; big transitions combine several techniques | `craft-transitions`, `craft-pattern-variation` | every section boundary is felt; the second drop differs |
| 8 | FX and movement | `stage-fx-movement` | FX chains by role, genre signatures | `tool-buses-sends`, `craft-space-depth` | shared space, a genre signature, movement at big transitions |
| 9 | Balance | `stage-balance` | starting levels by role, past the +6 dB fader | `craft-gain-staging-balance`, `craft-mix-diagnosis` | `clipped` 0, no `clash`, the hook leads |
| 10 | Master and delivery | `stage-master` | −14 LUFS by default, the delivery check | `tool-master-loudness`, `craft-loudness-lufs` | true peak ≤ −1 dBTP, loudness target or the reason why not |

Sound design is a separate skill, `meloduo-sound-design`. Call it at stages 3, 5 and 8 for the hook carrier, the signature sound, the bass or 808, the guitars and the transitions. The hook carrier always goes through it: compare two or three candidates by their stems, never take the first preset.

## Before the report

1. You can say in one sentence how the track differs from the default track (close-to-the-record mode: how close it is to the reference, and what the studio could not match).
2. The hook was picked from several candidates (close mode: candidates only for a new topline and for the sounds, not for the form and the parts).
3. The drop or chorus sounds full, and the sections differ.
4. The transitions have FX movement.
5. The **always** rules hold.
6. You loaded all ten stage guides. List them in the report; name any you skipped and why.

Then write `notes` with `set_project_info` and report to the user: `craft-delivery-report`.
