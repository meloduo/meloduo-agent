---
name: meloduo
description: Start here for any task in Meloduo, the browser DAW driven over MCP (mcp tools of the meloduo server). Routes the request to the right Meloduo skill and the small guides it needs; use when the user mentions Meloduo or its project, tracks, sounds, mix or master.
---

# Meloduo: where to start

Meloduo is a browser DAW. You edit the project open in the user's tab through the `meloduo` MCP tools. You cannot hear the audio: decide by `check_melody` and the numbers of `render_preview`.

## Technical rules (always)

1. `why` with every edit: one sentence in the user's language, the reason.
2. The user's edits win: keep what `changedSinceYourLastCall` shows.
3. Read before you edit: `get_project_state` first; take ids from results.
4. One part, one pattern.
5. `clipped` 0 and true peak ≤ −1 dBTP on the master.
6. Clear every solo and mute you set for a check.

Everything else is practice: guide numbers are starting points. When they disagree: the user's edits → the reference core → the genre guide → role guidelines; say which in `why`.

Say what the engine cannot do before you start (no vocals, no audio import by you): `craft-engine-limits`.

## Entry skills

- A new track, beat or loop; a hook, groove or chorus that does not work; or taking a sketch all the way to a master: `meloduo-produce`.
- One sound is flat, thin, harsh, generic, "just a sub"; risers and impacts: `meloduo-sound-design`.
- Mix or master: muddy, harsh, quiet, loud, wet, kick and bass fighting, Spotify or club: `meloduo-mix`.

## Guides

Knowledge lives in small guides, one topic each. Load them with the bridge tool `get_guide({topics: [...]})`: up to 4 ids or words ("gated reverb"); `section` returns one heading. Without that tool read `../../guides/<id>.md` from this folder or https://raw.githubusercontent.com/meloduo/meloduo-agent/main/guides/<id>.md. At most 4 "When needed" guides per step; the stage guides of `meloduo-produce` do not count. The genre guide once per track (two closest when the genre is not in the list).

Genres (`genre-<x>`): pop, rnb, trap (also drill), boom-bap, lofi, phonk, house, uk-garage, techno, trance, dnb (also drum and bass), dubstep, future-bass (also kawaii future bass), synthwave, eurodisco (also Italo, late-1980s Euro-pop), pop-punk (also punk, emo), rock (classic, hard, blues rock), metal, ambient, afrobeats (also amapiano), reggaeton, hyperpop, cinematic. Another genre: the nearest one, and say so.

## Task map

| Task | Guides |
|---|---|
| "make it better", improve the user's sketch | `craft-fix-sketch`, `craft-mix-diagnosis` |
| remix into another genre | `craft-remix`, `genre-<x>` |
| "like artist X", a reference track, a remake | `craft-artist-core`, `craft-reference-analysis` (mode, part map, timbre targets), `genre-<x>`, `role-vocal-substitute` if the voice is core |
| beat only | `stage-groove-harmony`, `craft-drum-programming`, `genre-<x>` |
| loop into a song | `craft-loop-to-song`, `stage-form`, `craft-section-contrast` |
| chorus not bigger than the verse | `craft-section-contrast`, `stage-form` |
| hook | `stage-hook`, `craft-melody-motif`, `craft-candidates`, `tool-check-melody` |
| countermelody, answer to the hook | `craft-call-response` |
| chords, mood | `craft-harmony-voicing`, `tool-notation-lines` |
| bassline, 808 | `craft-bassline-writing`, `role-808`, `role-sub-bass` or `role-mid-bass`, `craft-kick-bass` |
| kick, snare, hats, percussion | `role-kick`, `role-snare-clap`, `role-hats-cymbals`, `role-percussion` |
| gated snare, reverb tricks | `role-snare-clap`, `tool-reverb` |
| robotic groove, swing | `craft-groove-swing`, `craft-drum-programming` |
| guitar | `role-rhythm-guitar` or `role-lead-guitar`, `tool-guitar` |
| lead, pad, keys, pluck, arp | `role-lead`, `role-pad`, `role-keys`, `role-pluck-arp` |
| static sound, texture, layering | `tool-synth-modulation`, `role-texture`, `craft-sound-layering` |
| vocals, rap, the user's samples | `role-vocal-substitute`, `tool-sampler`, `craft-engine-limits` |
| "does Meloduo have chorus, tape, …", web plugins | `craft-engine-limits`, `tool-web-plugins` |
| transition, fill, build, drop | `stage-full-drop`, `craft-transitions`, `craft-drum-programming`, `role-riser-impact`, `tool-automation` |
| boring, repetitive | `craft-pattern-variation`, `craft-ear-candy` |
| too wet or too dry | `craft-space-depth`, `tool-reverb`, `tool-buses-sends` |
| narrow, falls apart in mono | `craft-stereo-width`, `craft-low-end-mono` |
| a render warning | `tool-render-preview`, `craft-mix-diagnosis` |
| tone like a reference | `tool-match-eq` |
| note syntax, triplets, Euclid | `tool-notation-lines` |
| export, report | `craft-delivery-report` |

No row fits: `get_guide({})` lists every guide with its description.
