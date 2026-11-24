---
name: tool-patterns-clips
description: Patterns and playlist clips: one part per pattern, split, clone, swap a clip's pattern, play from the middle, markers.
---

# Patterns and clips

## Rules

- One part, one pattern: `add_pattern` with `patterns` creates them all in one call. A "whole section" pattern cannot be thinned out with clips; `split_pattern` with `groups` repairs it.
- `place_patterns` places many clips in one call (`clips`: patternId, trackId, bar, bars, fromBar). `place_pattern` places one.
- `set_pattern_length` 1–64 bars.
- **One clip, one phrase.** A clip's `bars` can loop a short pattern for a long stretch, but do not do it: a 1-bar kick stretched over 31 bars reads as one block for the whole track, and the user cannot see or edit the phrases. Make the pattern a full phrase (usually 4 bars, 8 for long melodic lines) and place one clip per phrase, so the playlist shows the form: as a guideline, clip `bars` equals the pattern length, usually 4–8. The same `place_patterns` call takes all the clips.

## Swap and reuse clips

1. **A bigger second chorus:** `clone_pattern` the hats or chords (the copy keeps the notes, not the clips), edit the copy, then `edit_clips` `{id, patternId}` only on the clips of the second chorus. The cheapest way to make a repeat differ.
2. **A tag or stop bar:** a clone with `set_pattern_length` 1–2, placed with `place_pattern` at the boundary.
3. **Play from the middle:** `fromBar` on a clip plays a long pattern from that bar, for example the second half of a long snare roll for a short build.
4. `edit_clips` also moves (`bar`), resizes (`bars`) and removes clips (`remove`); on audio clips it sets `offset`, `gainDb` and `channelId` (tool-sampler).
5. **Markers:** `add_markers` in one call before placing clips, every section boundary. `color` 1–6 (1 blue, 2 yellow, 3 orange, 4 green, 5 purple, 6 teal): verses one colour, choruses another. `loudnessBySection` in `render_preview` uses the markers.

## Check

`loudnessBySection` of the second drop is at least that of the first; no "holds several parts" warning.

## Related

`craft-pattern-variation`, `stage-form`, `tool-project-session`
