---
name: craft-frequency-slots
description: Give each part its own slot by register, time and timbre; find and fix masking and mud.
---

# Frequency slots

How parts share space:
- in one register a sustained sound and a short one get along; two sustained sounds fight;
- a full section usually combines short sounds (pluck, stab) and sustained ones (pad, strings);
- an arp and the hook at full volume in the same bars fight: let one answer the other, or put the arp quieter and further back;
- only a few melodic parts sit in front at once (about five, drums counted as one); the rest is percussion, texture and doubles;
- the sub is mono and dry.

A low cut shifts the phase and can raise a part's peak by about 1 dB: after a high-pass, check the stem `peakDb` in `change`.

Zones: mud 200–500 Hz, harshness 2–5 kHz, air above 8–10 kHz. Add brightness with a wide shelf, not a narrow boost.

## Related

`craft-mix-diagnosis`, `tool-eq`, `stage-full-drop`
