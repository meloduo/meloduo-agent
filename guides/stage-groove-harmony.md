---
name: stage-groove-harmony
description: Stage 3 of a track: drums, bass and chords as separate patterns so the loop grooves without a melody.
---

# Stage 3. Groove and harmony

Every part gets its own pattern. One `add_pattern` call with `patterns` can create them all.

1. Drums: a genre kit (`add_kit`), then edit a couple of voices so the kit is your own (tool-drums). Each drum role (kick, snare, hats, cymbals, toms, percussion) gets its own pattern and its own track. An "all drums" pattern on one track cannot be thinned out per section and makes the arrangement poor. Accents, ghost notes and varied velocity make the groove.
2. Bass in its own register, one note at a time. Bass and kick agree on rhythm: together or between the hits.
3. Chords above the bass, voice leading by the nearest step. The chord rhythm follows the genre; it need not be one whole note per bar.
4. Sound: `add_channel` with `preset` as a draft. Finish the bass or 808, the guitars and everything that carries the track with the `meloduo-sound-design` skill: variants, stems, comparison with the role recipe.
5. `place_patterns`, then render the first 8 bars.

Check yourself: does the groove move without a melody? Are there `clash` or `clipped` warnings? Fix a kick and bass conflict with notes, not with EQ.

## Related

`craft-groove-swing`, `craft-drum-programming`, `craft-kick-bass`, `craft-harmony-voicing`, `tool-notation-lines`
