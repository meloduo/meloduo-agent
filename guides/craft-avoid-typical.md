---
name: craft-avoid-typical
description: Avoid the default AI track: the typical choices, typicality scores and honest picks from the tail.
---

# Avoid the typical track

## The typical AI choice

This is what a model picks by default. Any item is fine when the genre or the reference asks for it; without a reason, consider something else:
- A minor or C major; minor by default;
- I–V–vi–IV or vi–IV–I–V; one chord per bar in every section;
- a tempo in the middle of the genre range (120, 124, 128, 140);
- four parts: drums, bass, chords, lead;
- a 64-bar form of 8-bar sections;
- a falling 3-2-1 hook in eighths;
- the first preset in the folder: Sub bass, Warm pad, Bright lead, Saw lead;
- a synth lead as the hook carrier in any genre;
- one reverb on everything, no delay and no saturation.

## How to use the menus

1. For each axis take 4–5 rows that fit the genre and the reference.
2. Give each a "how typical" score (they sum to 1). Rows from the list above get the highest scores.
3. On some axes, deliberately move away from the most typical row. If you have a shell, `date +%s` modulo the number of rows gives an honest pick from the tail. Reference and genre come first: do not leave them for variety.
4. Untypical does not mean foreign to the genre. House in 4/4 stays house. Untypical is an F# tonic instead of A, dorian instead of minor, 121 BPM instead of 124.

Axes: tempo, mode and tonic, progression, form (stage-form), hook carrier, hook timbre, sound character, space.

## Related

`stage-track-card`, `craft-artist-core`
