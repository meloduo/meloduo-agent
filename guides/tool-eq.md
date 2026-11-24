---
name: tool-eq
description: The EQ: bands and presets, phase modes, dynamic bands, de-essing, mid/side and tilt.
---

# EQ

`add_effect` type eq. Presets: Low cut 120 Hz, Cut the mud, Kick punch, Bass tight. Your own bands: `bands: [{type:"Low cut", freq:100, slope:24}, {type:"Bell", freq:300, gain:-3, q:1.4}]`, up to 24 bands, cuts up to 96 dB/oct.

Phase (`phase` in `params`):
- the default is Zero latency; keep it;
- Linear Medium (`phase: "Linear"`, `linearLatency: "Medium"`): a steep cut or a narrow notch in the bass, two parallel bass channels;
- `High`: on the master only;
- Natural: steep high cuts and shelves in the mids and top; it does not help the bass;
- Brickwall (`slope: "Brickwall"`): only the master's edges (20 Hz, 20 kHz), and only with Linear Medium or High.

The engine aligns channel latency itself, except for the sidechain key.

A harsh top only when it is loud: a dynamic band instead of a static cut, `bands: [{type:"Bell", freq:6500, q:3, dynamic:true, threshold:-30, range:-6}]` (a de-esser; `spectral:true` for grainy harshness).

Dynamic band threshold: about `detector.p95Db − 3` from its `dynamics` row. If the band moves gain in 90 %+ of samples (`activePct`) and keeps it near its deepest (`meanDb` ≥ 0.75 of `maxDb`), it works like a static band: `dynamicStatic` suggests a higher threshold or a static band.

## Mid/side and tilt

- Each band takes `place`: Stereo (default), Left, Right, Mid or Side.
- Band types include `Tilt shelf` and `Flat tilt` (dB per octave, at most ±4.5).

1. **Mono low end without touching the centre:** on the music bus or the master `{type:"Low cut", freq:120, place:"Side"}`, or the preset `Master / Side low cut`. Gentler than `width` `bassMono` (craft-low-end-mono).
2. **Air at the sides:** `{type:"High shelf", freq:10000, gain:1.5, place:"Side"}` on a pad bus.
3. **Master tilt:** one `Tilt shelf` band of ±0.5–1.5 dB instead of three shelves; mastering EQ moves are usually small and wide.
4. **Drum moves without drum automation:** an EQ on the drum channel can be automated (tool-automation).

## Related

`craft-frequency-slots`, `craft-low-end-mono`, `tool-match-eq`, `craft-mix-diagnosis`
