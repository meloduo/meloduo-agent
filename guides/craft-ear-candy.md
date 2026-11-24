---
name: craft-ear-candy
description: One-off details and small events that make a track feel alive.
---

# Ear candy

One or two parts that play only once make the track feel alive:
- a breakdown melody (the second hook candidate);
- a single noise sweep;
- a synth for one bar before the final drop;
- a bell line in the outro.

Small events:
- a single tom hit or rim at the end of a phrase;
- a reverse hat (an open hat on the beat before the bar);
- a delay throw on the last note of the hook (tool-delay);
- a downlifter after the drop;
- a bar without kick in the middle of a verse.

## Meloduo recipe

1. One-off parts get their own pattern and track, placed once (`place_pattern`), so the layer table shows them.
2. A delay throw: the Throw bus with a volume lane opened for one note (tool-delay).
3. A reverse-like swell: a synth note with a long attack cut on the beat, or a rising volume lane with a sharp reset; there is no reverse audio.
4. A long tail on the last note of a phrase: a Hall bus volume lane raised for that note and back after it (tool-automation).
5. A bar without kick, or one tom hit: `clone_pattern` of the drums and `edit_clips` on that one bar (tool-patterns-clips).
6. Textures and one-shots: role-texture.

## Check

Something new every 4–8 bars, and no detail repeats so often that it becomes part of the loop. Ear candy stays 15–25 dB under the lead.

## Related

`tool-delay`, `craft-transitions`, `stage-form`
