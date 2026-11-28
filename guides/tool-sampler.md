---
name: tool-sampler
description: Use the user's imported audio: sampler channels, slices by start and end, audio clips, vocal chops, loops.
---

# Sampler and audio clips

## What exists

- The user imports audio (File > Import audio, or drag and drop) or records it (Options > Record from the microphone, then Record in Song mode: it lands as an audio clip). You cannot import or record, but you can place and cut what they gave. Ask early: "Do you have a vocal, a loop or a one-shot? Import it and I will place it."
- `get_project_state` lists `samples` (`id`, `name`, `seconds`, `channels`) and audio clips.
- `place_audio`: `sampleId`, `trackId`, `bar`, `bars` (default: the whole file at the project tempo), `offset` (seconds into the file), `gainDb`, `fadeInBars`, `fadeOutBars`, `crossfade`, `reverse`, `channelId` (a sampler channel; without it the tool uses or makes one).
- `set_sampler`: `sampleId`, `root` (the MIDI note at which the file plays as recorded), `tune`, `start` and `end` (0–1 of the file), `mode` One-shot or Gate, `loop`, `attack`, `release`, `gain`, `stretch`, `bpm`, `pitch`.
- `edit_clips` moves, resizes, mutes and re-gains audio clips (`bar`, `bars`, `muted`, `offset`, `gainDb`, fades, `crossfade`, `reverse`); `bar` and `bars` take fractional bars. `split` `[{id, bar}]` cuts an audio clip; the right half goes on in the file, the fade in stays left and the fade out right.
- Fades are in bars (in 4/4, 0.0625 = one step and 0.25 = one beat) and cut to the clip length. A clip that starts or ends inside the file's sound needs a short one.
- Crossfade: two audio clips on one track, the second starting exactly where the first ends; set `crossfade: true` and `fadeInBars` (its length) on the second. The first plays on into its file, so it needs file left after its end: the reply's `warnings` say when it does not. Overlapping clips are rejected.
- `reverse: true` plays the same piece of the file backwards; `offset` then counts from the end of the file. A clip longer than the sound left in the file is cut to the sound when you reverse it.
- Without warp a file plays at its own speed. Warp makes it follow the song tempo and any tempo changes: `stretch` keeps the pitch, `resample` moves it like a tape.
  - Audio clips: `place_audio` and `edit_clips` take `warp`, `sourceBpm` and `pitch` (semitones, length kept, not with `resample`). Without `sourceBpm` the file counts as a loop of whole bars nearest the song tempo; the reply gives the guess. Check it: if the loop sounds half or double speed, double or halve `sourceBpm`. A clip keeps its length in bars when warp changes.
  - Sampler: `set_sampler` `stretch` (Off, Stretch, Resample), `bpm` (the file's tempo) and `pitch`. The root note keeps time; other notes play faster when higher.
  - Stretch sounds best between 0.75 and 1.5 times the file's speed; the reply warns outside it. You cannot hear it: tell the user which sounds you stretched.
- A sampler channel cannot be automated except volume and pan; `set_main_pitch` does not move it.

## Recipes

1. **The user's vocal in time:** `place_audio` with `bar` and `offset` so the first word lands on the downbeat; leave room around it in the arrangement (role-vocal-substitute).
2. **Slicing a break or a vocal:** `slice_sample` `by` "transients" (raise `sensitivity` for soft hits) or "beats", with `toPattern` true. Root plays slice 1, each next pitch the next one; the rows give `beat` (how far from the grid), `peakDb` and `bright` (low and loud reads as a kick, bright as a hat or snare). Reorder, repeat and mute slices by editing those notes. For a seamless loop at another tempo set the sampler `stretch` "Stretch" and the file's `bpm` with `set_sampler` before `toPattern`: the notes are placed by that tempo. If you set it afterwards, use the reply's `fileBpm`.
3. **Vocal chops by hand:** `add_channel` sampler, `set_sampler` `start`/`end` around one syllable, `mode` Gate, `release` 30–80 ms; notes in eighths in a build. A note other than `root` changes pitch and speed together, like a classic sampler.
4. **A loop (boom bap, lo-fi):** `place_audio` with `warp` "stretch" (or `resample` for the pitched-down lo-fi sound); or on the sampler `start`/`end` on 1–2 bars, `loop` On, `stretch`, `bpm`. Producers usually take the low end and some top out of a sample: eq Low cut about 150 Hz, High cut 8–10 kHz, `duck` from the kick.
5. **A reference track for comparison:** on its own sampler channel, `muted`, one section long (tool-match-eq).
6. **A wavetable from a sample:** tool-wavetable.
7. **Reverse cymbal into a drop:** `place_audio` with `reverse`, at `bar` = drop − file `seconds` / (stepsPerBar × 15 / bpm), so it ends on the drop.

## Related

`role-vocal-substitute`, `tool-match-eq`, `craft-engine-limits`
