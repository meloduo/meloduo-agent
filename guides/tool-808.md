---
name: tool-808
description: The 808 instrument: presets, every knob, glide by overlap, automation at note start, the thin808 warning.
---

# The 808 instrument

5. The 808 is its own voice: `add_channel` with `voice` "808" and `preset`, edits with `set_808`, parameters with `get_808`; recipe: role-808.

The instrument is the Meloduo 808: `add_channel` with `voice` "808" and `preset`, then `set_808`; `get_808` gives parameters, presets and notes. The voice is mono: from a chord only the lowest note sounds.

Presets: Classic (clean, short), Trap (start here), Long trap, Drill slide, Distorted, Rage, Boom bap, Phonk, Sub, Punchy.

Main knobs:
- `punch` and `punchTime`: a pitch drop from above at the start of the note; more than 3 semitones clicks on short notes;
- `decay`: the tail while the note is held; `release` 30–150 ms; under 20 ms clicks at the cut-off;
- `attack` 1–5 ms: zero clicks, 30 ms or more kills the hit;
- the 808 sounds only while the note is held, then fades over `release`: a one-step note is a short click even with `decay` 7 s; hold notes until the next one (`:N` in `line`, `length` in `notes`);
- `glide`: a slide happens only with an overlap of 20 ms or more (shorter retriggers): in `line` put `~` on the first note (`"F1:4~ Ab1:4"`), or start the next note half a step early, `"F1:4 Ab1:4-12t"`, or in `notes` give the first note a `length` past the start of the next; punch and attack do not repeat on a slide; `-Nt` shifts the whole note including its end, so in a chain of slides each next one needs 12t more: `"F1:4 Ab1:4-12t C2:4-24t"`;
- `glide` is the slide time, one per channel; a long overlap does not slow the slide; a `glide` curve (`set_automation`) works: the value is read at the start of each note;
- `drive` and `driveMode` give dirt, not mids: with Soft, Tube and Hard the harmonics stay below 250 Hz (above that under 3 % even at `drive` 1); only Fold adds mids (`drive` 0.5 gives about 25 % above 250 Hz without `presence`), but it is harsh, for rage and drill; `tone` cuts the top of the body after the drive and leaves the `presence` layer alone;
- `presence`: mids for the phone: a built-in upper layer, a square an octave above the note at 250 Hz–2 kHz; on F1, `presence` 0.5 gives about 13 % of the energy above 250 Hz, 1 about 40 %; use 0.5–0.8;
- `click`: the attack click; `lowCut`: cuts the rumble below 25–40 Hz.

`render_preview` warns `thin808` when less than 7 % is above 250 Hz: raise `presence`. Trap, Long trap and Drill slide pass as they are; Sub and Classic do not, by design.

## Related

`role-808`, `craft-kick-bass`, `tool-automation`
