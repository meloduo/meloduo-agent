---
name: craft-stereo-width
description: Panning and width: a panning plan, width only on stereo sources, correlation and mono checks.
---

# Stereo and width

## Stereo

1. Kick, snare, bass and hook in the centre; hats ±0.15–0.3; percussion ±0.3–0.6; hook double ±0.6–1.
2. `width` on the master or a bus: `bassMono` 100–150 Hz; pads 110–140 %. `width` widens only a stereo source: a synth with `unison` of 2 or more, or a bus with reverb. On a mono channel it does nothing.
3. The arrangement gives the loudness contrast between sections, not the fader.

Targets: `stereo.correlation` above +0.3; absolute `monoLossDb` under 3 dB; `lowSidePct` under 5 %.

## Practices

- A panning plan before faders: centre for kick, snare, bass and hook; percussion and doubles wide.
- Doubles L/R should differ in timbre (another preset, `pickPos`, cabinet), not only in pan, or they collapse into mono.
- Width grows into the chorus or drop: pads wider there than in the verse.
- Low end mono: craft-low-end-mono.

## Related

`craft-low-end-mono`, `craft-space-depth`, `tool-saturation-amp-width`
