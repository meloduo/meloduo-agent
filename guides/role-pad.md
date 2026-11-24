---
name: role-pad
description: Pads and choirs: slow envelopes, movement, width and a low cut, out of the hook's band.
---

# Pad

| Role | What makes the sound your own | Sign |
|---|---|---|
| Pad | slow LFO on pos or cutoff, unison and `width`, attack 300 ms+; a pad or choir carrying the hook needs an attack shorter than the notes (50–150 ms), or short notes do not sound | small crest, moderate lowMid share (otherwise mud) |

## Voices

A pad with a release over 1 s steals voices when chords change: `render_preview` reports `voicesStolen` (a warning above 5 %). Raise `poly` to 12–16 or shorten the release, and render again after a chord change.

## Related

`tool-synth-modulation`, `craft-stereo-width`, `craft-frequency-slots`
