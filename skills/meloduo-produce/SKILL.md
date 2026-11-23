---
name: meloduo-produce
description: Produce a complete track in Meloduo from an idea to a release-ready master through the Meloduo MCP tools. Use when the user asks to make, write, produce, finish or remake a track, song, beat or loop in Meloduo (the browser DAW), or to take an existing sketch in the project to a finished mix and master.
---

# A track in Meloduo: from idea to master

You are the producer. You work in the user's project only through the tools of the Meloduo MCP server. You cannot hear the audio: check notes with the note list and `check_melody`, and the mix with the numbers from `render_preview`.

The skill describes what producers do. Numbers in these files are starting points, not thresholds. Genre, reference and the music itself matter more than any number. Leave a guideline when the track asks for it, and give the reason in `why`.

The only hard rules are technical ones, marked with **always**.

The path has ten stages. Each ends with "check yourself" questions.

## Files

Open a file before the stage that points to it.

| File | Contents | Stages |
|---|---|---|
| [palette.md](palette.md) | choice menus, genres, modes, progressions, palettes and role candidates, the typical AI choice | 2, 3, 5 |
| [melody.md](melody.md) | how a hook is born, motif development, common mistakes, genre defaults | 4 |
| [arrangement.md](arrangement.md) | density, roles, layer plan, contrast, transitions, forms | 5, 6, 7 |
| [sound.md](sound.md) | synth, guitars, drums | 3, 5 |
| [fx.md](fx.md) | buses, chains, movement across sections, genre signatures | 8 |
| [mixing.md](mixing.md) | balance, EQ, compression, `clash`, stereo | 9 |
| [master.md](master.md) | master chain, loudness, `render_preview` thresholds | 10 |

Sound design is a separate skill, `meloduo-sound-design`. Call it at stages 3, 5 and 8.

## Working with the project

1. **Always** give `why`: one sentence in the user's language with the reason, not a retelling of the arguments.
2. **Always** respect the user's edits. Read a result with `changedSinceYourLastCall` and take it into account. Compare a rejected edit with the changes and retry it. Do not undo what the user changed by hand.
3. **Always** read before you edit: `get_project_state` at the start and whenever something is unclear. Several tabs: `list_tabs`, then `use_tab` with `projectId`. Take ids from results.
4. The grid is 1/16; steps and bars count from 0. Read the note line syntax once with `get_notation`.
5. **Always** one part, one pattern. A "whole section" pattern cannot be thinned out with clips; if that happened, use `split_pattern` with `groups`.
6. Render windows (`fromBar`/`toBar`) and the full song rarely; pass `stems: false` when you do not need stems. One mix edit, one render: look at `change`.
7. **Always** clear solo and mute that you set for a check.
8. You cannot import audio, export a file, listen, or automate sends, `duck`, drums or the sampler. Do not pretend you can do more.

## Stage 1. Brief

1. Read the project. If the user has material, ask whether to build on it or next to it.
2. Ask the key questions once, in one message, at most four: genre and reference; what carries the hook; whether there will be vocals; length. Skip what the user already said. Give each question 2–3 ready answers, yours first.
3. If the user left the decisions to you, do not ask again.

If the user names an artist or a track, work out what its sound is made of (tempo, harmony, instruments, form, how the hook is delivered, mix character). Take the techniques, not the notes. Split the analysis into two lists:
- **core**: 3–5 things without which the track is not recognisable (for a metal band that is the tuning, the distortion, the riff and the drums, not scratches and percussion);
- **details**: recognisable but optional techniques.

Build the core first and do not change it for novelty. Details are optional.

Before you start, tell the user plainly what part of the core Meloduo cannot give: vocals (scream, rap, singing), live samples, a sound the engine does not have. Do not quietly replace the core with a toy substitute (vocals with a synth voice): suggest what could take that place, and ask if the user is around. When vocals are the core of the genre, it is usually better to leave room for them than to imitate them.

## Stage 2. Track card

Without an explicit choice a model takes the most typical answer every time, and the tracks come out the same. The card makes the choice explicit.

1. For the main axes (tempo, mode and tonic, progression, form, hook carrier, timbre, sound character, space), list a few options that fit the genre and the reference. Rate how typical each one is. Menus: palette.md.
2. On some axes, deliberately move away from the most typical option. Genre and reference come first: punk does not get slow for the sake of variety. Leave the axes of the reference core (stage 1) alone and make untypical picks only on secondary axes. The more precise the request ("in the style of an artist", "like track X"), the fewer untypical picks; an open request ("something in this genre") allows more. If you have a shell, `date +%s` modulo the number of options gives an honest pick from the tail.
3. Write the card briefly: tempo, mode, progression per section, form and length (seconds = bars × 240 / BPM), parts (role → sound → how it differs from the preset), signature sound, sound character, space, a couple of FX moments, one memorable detail (a mode change, a hook where nobody expects it, silence before the drop).
4. Show the card to the user in 6–10 lines. Call `set_tempo` and `set_scale`, and name the tracks (`rename`, `add_track`).

Check yourself: does the card show how this track differs from the "default track" (palette.md, section 1)? Is it close to the reference? Is every core item in the card, as a main part rather than a detail? Would a fan of the artist recognise the track from the card?

## Stage 3. Groove and harmony

Every part gets its own pattern. One `add_pattern` call with `patterns` can create them all.

1. Drums: a genre kit (`add_kit`), then edit a couple of voices so the kit is your own (sound.md). Each drum role (kick, snare, hats, cymbals, toms, percussion) gets its own pattern and its own track. An "all drums" pattern on one track cannot be thinned out per section and makes the arrangement poor. Accents, ghost notes and varied velocity make the groove.
2. Bass in its own register, one note at a time. Bass and kick agree on rhythm: together or between the hits.
3. Chords above the bass, voice leading by the nearest step. The chord rhythm follows the genre; it need not be one whole note per bar.
4. Sound: `add_channel` with `preset` as a draft. Finish the bass or 808, the guitars and everything that carries the track with the `meloduo-sound-design` skill: variants, stems, comparison with the role recipe.
5. `place_patterns`, then render the first 8 bars.

Check yourself: does the groove move without a melody? Are there `clash` or `clipped` warnings? Fix a kick and bass conflict with notes, not with EQ.

## Stage 4. Hook

A strong hook is a short motif and its development, not a stream of notes. The best hooks are picked from several: write a few different candidates (usually 3–4), compare them and take the best. How: melody.md.

1. Give the candidates different rhythmic ideas: pickup, syncopation, a repeated note, a long note with an answer, straight eighths, a gallop. Rhythmic density follows the energy of the genre and the tempo: a simple hook does not have to be sparse.
2. From each idea make a motif of 1–2 bars, and from the motif a phrase, by development techniques (repeat with a new ending, sequence, fragmentation, rhythmic shift).
3. Look for one peak in the phrase, a breath and a clear ending.
4. Write in scale degrees (`add_notes` with `lines`), each candidate separately. Run `check_melody` on each, with the chords and bass as `against`. Empty `warnings` with a non-empty `skipped` is not a pass.
5. Compare the candidates with the questions in melody.md (section 6). Tell the user your pick and the reason in one line. A strong runner-up can become a countermelody. It fits a bridge or breakdown only if it is simpler than the hook (melody.md). Delete the patterns you do not use.
6. Hook timbre: Lead presets in Mono glide on every note, so you usually need `"mode":"Legato"` (sound.md).

Check yourself: is the rhythm memorable after one listen? Does the hook push forward at the track's tempo, or does it hang? Does the motif develop, rather than loop or get lost? Does `check_melody` show the hook fighting the chords?

## Stage 5. Full drop

Open arrangement.md (sections 1–3) before this stage.

It is usually easier to write the densest section first and get the rest by subtraction: you can only subtract from something full. Roles: arrangement.md; sounds: palette.md.

1. See which roles the genre and the reference still lack: a pad or texture, rhythmic movement (arp, pluck, stab, guitar strumming), an answer to the hook, percussion layers, fills, transition FX, doubles.
2. Do not add a role that is foreign to the genre. Add the one that makes the section fuller or more interesting.
3. Make the signature sound and the hook with the `meloduo-sound-design` skill; do not leave them on a preset.
4. Parts share space by register, time and timbre. Two parts in the same register at the same time fight; only a few parts sit in front at once.

Check yourself: does the drop sound full, rather than "drums, bass, chords, lead"? Is there mud (`clash`, many lead parts at once)?

## Stage 6. Form and layer plan

Open arrangement.md (sections 3–5 and 9).

1. Before placing clips, sketch the layer plan: the sections and which tracks play in each (template in arrangement.md). Show it to the user briefly.
2. `add_markers`, `place_patterns` in one call, then remove what the plan does not need.
3. Energy rises toward the main sections and drops in the breakdown. The last chorus or drop is usually stronger than the first, through a new layer rather than volume.
4. Listeners expect change at phrase boundaries: something small every few bars, a clear change at a section boundary.
5. Neighbouring sections differ in more than one way: set of parts, register, density, low end, filter, drum pattern.
6. One-off details (a part, a sound, a line that plays only once) make the track feel alive.

**Always**: render the song with `render_preview` and get no "holds several parts" warning.

Check yourself: is there a stretch where nothing changes for a long time? Does `loudnessBySection` rise toward the main sections, with no "Flat sections" warning?

## Stage 7. Variations and transitions

1. Give a repeated part a variant phrase ending: `clone_pattern` and edit the last bar (a fill, a dropout, an extra hit).
2. A repeated section is not a copy: a new hat pattern, a bass variant, a countermelody, a second voice.
3. The harmonic arc "bridge → build → chorus" (arrangement.md, section 5): one key for the whole arc, and the last chord of the build leads into the first chord of the chorus. Modulate at a clear boundary, not in the middle of a rise.
4. A big transition (build → drop) combines several techniques: a roll or fill, a rise (riser, filter), the low end removed, a pause, a hit on the first beat. A small boundary needs one. Do not use the same transition everywhere.
5. Groove by genre: swing, `humanize_notes` on live parts, `humanize` and `feel` on guitars.

Check yourself: does the second drop differ from the first? Can you feel every section boundary?

## Stage 8. FX and movement

Effects give parts character and space. Recipes: fx.md; parameters: `get_effect` with `type`.

1. Shared space on buses: one main atmosphere for the track, a short room for the drums, an echo synced to the tempo. Replace preset reverbs on many channels with shared buses.
2. Main parts get their own character: saturation, an insert delay, width, movement through the mod matrix.
3. Genre signature: what listeners expect from the genre (pumping, 808 saturation, a big reverb, guitar distortion).
4. Synthesize transition sounds for the genre (`meloduo-sound-design`, section "Transition sounds") instead of taking the Riser and Impact presets every time.
5. Check how wet the mix is (fx.md, section "Wet or dry"). An agent without ears almost always makes the mix drier than it should be.
6. Movement across sections (`set_automation`): a rise into the drop and a reset on it, echo throws at phrase ends, a filter closing in the breakdown, different space in verse and chorus.
7. Do not decorate everything at once: movement stands out when things around it are calm.

Check yourself: does the track sound dry or static? Do the transitions move? Is the mix drowning in reverb?

## Stage 9. Balance and correction

Follow mixing.md: static balance → EQ and compression → `clash` → stereo. One edit, one render.

**Always**: `clipped` 0.

Guidelines: mix peak −6…−3 dBFS; the hook is the most audible melodic part and does not sink into the backing (over a dense wall, build density with layers, mixing.md); no `clash`, `bassHeavy` or `thinMids`; compressors reduce no more than 8 dB; stereo correlation above +0.3. Silence a deliberate genre exception with `skipWarnings` and name it in `why`.

## Stage 10. Master and delivery

Follow master.md. The target is −14 LUFS; go louder only when the user asks.

**Always**: `truePeakDb` ≤ −1 dBTP and `clipped` 0.

Guidelines: −15…−13 LUFS; limiter `gain` 0–2 dB unless the user asked for a loud master; average limiter reduction 1–3 dB. The shape of the track matters more than the last LU of loudness.

## Before the report

1. You can say in one sentence how the track differs from the default track.
2. The hook was picked from several candidates.
3. The drop or chorus sounds full, and the sections differ.
4. The transitions have FX movement.
5. The **always** rules hold.

## Report to the user

Briefly, in the user's language:
1. What you made: genre, tempo, key, form in bars and minutes.
2. The card in one line: main choices, signature sound, memorable detail.
3. Numbers from the final render: LUFS, true peak, limiter reduction, remaining warnings and why.
4. What to listen to first: the places where you decided by numbers.
5. The user does the export: File > Export (Ctrl+Shift+E), WAV 24-bit, with tail, Level "As mixed". Stems: Files: Stems (ZIP); notes: MIDI.
6. What you could not do because of the limits.
