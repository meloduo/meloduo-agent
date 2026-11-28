---
name: tool-sampler
description: Use the user's imported audio: sampler channels, slices by start and end, audio clips, vocal chops, loops.
---

# Sampler and audio clips

## What exists

- The user imports audio (File > Import audio, or drag and drop) or records it (Options > Record from the microphone, then Record in Song mode: it lands as an audio clip). You cannot import or record, but you can place and cut what they gave. Ask early: "Do you have a vocal, a loop or a one-shot? Import it and I will place it."
- `get_project_state` lists `samples` (`id`, `name`, `seconds`, `channels`) and audio clips.
- `place_audio`: `sampleId`, `trackId`, `bar`, `bars` (default: the whole file at the project tempo), `offset` (seconds into the file), `gainDb`, `fadeInBars`, `fadeOutBars`, `crossfade`, `reverse`, `channelId` (a sampler channel; without it the tool uses or makes one).
- `set_sampler`: `sampleId`, `root` (the MIDI note at which the file plays as recorded), `tune`, `start` and `end` (0–1 of the file), `mode` One-shot or Gate, `loop`, `attack`, `release`, `gain`.
- `edit_clips` moves, resizes, mutes and re-gains audio clips (`bar`, `bars`, `muted`, `offset`, `gainDb`, fades, `crossfade`, `reverse`); `bar` and `bars` take fractional bars. `split` `[{id, bar}]` cuts an audio clip; the right half goes on in the file, the fade in stays left and the fade out right.
- Fades are in bars (in 4/4, 0.0625 = one step and 0.25 = one beat) and cut to the clip length. A clip that starts or ends inside the file's sound needs a short one.
- Crossfade: two audio clips on one track, the second starting exactly where the first ends; set `crossfade: true` and `fadeInBars` (its length) on the second. The first plays on into its file, so it needs file left after its end: the reply's `warnings` say when it does not. Overlapping clips are rejected.
- `reverse: true` plays the same piece of the file backwards; `offset` then counts from the end of the file. A clip longer than the sound left in the file is cut to the sound when you reverse it.
- There is no time stretch: a file plays at its own tempo. Set the project tempo to the file's tempo before you build around it, and say so.
- A sampler channel cannot be automated except volume and pan; `set_main_pitch` does not move it.

## Recipes

1. **The user's vocal in time:** `place_audio` with `bar` and `offset` so the first word lands on the downbeat; leave room around it in the arrangement (role-vocal-substitute).
2. **Vocal chops:** `add_channel` sampler, `set_sampler` `start`/`end` around one syllable, `mode` Gate, `release` 30–80 ms; notes in eighths in a build. A note other than `root` changes pitch and speed together, like a classic sampler.
3. **A loop (boom bap, lo-fi):** `start`/`end` on 1–2 bars, `loop` On, or `place_audio` with `bars`. Producers usually take the low end and some top out of a sample: eq Low cut about 150 Hz, High cut 8–10 kHz, `duck` from the kick.
4. **A reference track for comparison:** on its own sampler channel, `muted`, one section long (tool-match-eq).
5. **A wavetable from a sample:** tool-wavetable.
6. **Reverse cymbal into a drop:** `place_audio` with `reverse`, at `bar` = drop − file `seconds` / (stepsPerBar × 15 / bpm), so it ends on the drop.

## Related

`role-vocal-substitute`, `tool-match-eq`, `craft-engine-limits`
