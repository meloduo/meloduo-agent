---
name: craft-remix
description: Remix a track already in the project into another genre or mood: keep the hook and a key chord, new groove and tempo, reharmonize, copy notes with transposition; use when the user asks for a remix, a flip or "the same song as house / lo-fi / trap".
---

# Remix

## When

The project holds a track, and the user wants it in another genre, tempo or mood: "make it house", "a lo-fi flip", "a darker version". The goal is a new track that still sounds like the original.

## Practices

- **Ask what to keep.** Before you change anything, ask the user which parts matter: the hook, a chord, the bass line, a sound, a vocal clip. Without an answer, keep the hook and one key chord and change the rest.
- **Keep the hook recognisable.** Keep its rhythm and its first 3–5 notes; the rest may change. A hook that keeps its rhythm survives a new key, a new sound and new chords.
- **New groove first.** A remix lives in its drums and bass. Build the new beat from the target genre guide, then fit the old parts onto it.
- **Tempo change.** Notes are stored in steps, so they follow the new tempo. Audio clips without warp drift against the grid at a new tempo: warp them (`edit_clips` `warp` "stretch", `sourceBpm` = the old tempo).
- **Reharmonize.** Put new chords under the old hook: the hook notes on strong beats should be chord tones or colour tones (7, 9) of the new chords. A minor hook over major chords, or the reverse, changes the mood at once.
- **Change the register or rhythm feel.** Half time, double time, or the hook an octave down often gives the new genre faster than new notes.
- **Keep the form short and clear.** Most remixes use the original's hook sections and drop the rest.

## Meloduo recipe

1. `get_project_state` with notation "degrees": find the hook pattern, the chords and the tempo. Write down what you keep.
2. `set_project_info` with the new genre and a note of what you keep from the original.
3. `set_tempo` to the target genre tempo (genre guides). Warp every audio clip that must stay in time (tool-sampler) and tell the user which ones you stretched.
4. `clone_pattern` the hook and chord patterns: the original stays untouched, and the user can compare.
5. `copy_notes` the hook to a new channel with a new preset: `fromPatternId`, `channelId`, `toChannelId`, `semitones` to move key or octave (±12 for an octave, or the interval to the new key).
6. `transpose_notes` for a whole pattern in a new key; `set_scale` so the piano roll and the warnings follow (with `patternIds` when only some patterns change key).
7. Write the new chords with `add_notes` (letter chords in a `line`), then `check_melody` on the hook `against` the new chord pattern.
8. New drums and bass from the genre guide, `set_channel` `swing` for the new groove.
9. Place the sections with `place_patterns` and markers (`add_markers`).

## Candidates

Make 2–3 versions that differ by one decision: the new chords, the tempo feel (half time against full) or the hook timbre. Decide by `check_melody` (chord tones on strong beats), `loudnessBySection` (the drop above the verse) and the role signs in the stems. Method: craft-candidates.

## Check

- `check_melody` on the hook against the new chords: no semitone rubs on strong beats.
- `render_preview`: no `clash` between the old parts and the new bass; `loudnessBySection` rises toward the hook.
- The hook still has the rhythm of the original (compare the patterns).

## Pitfalls

- Changing everything: the result no longer sounds like a remix.
- A tempo change with audio clips left in place: they drift off the grid.
- Old reverbs and effects carried over that do not fit the new genre.
- The old bass kept under new chords: it fights the reharmonization.

## Engine limits

No slicer and no beat detection. No vocal: a sung hook needs the user's own recording. Details: craft-engine-limits.

## Related

`craft-melody-motif`, `craft-harmony-voicing`, `tool-patterns-clips`, `tool-sampler`, `craft-engine-limits`
