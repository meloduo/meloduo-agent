---
name: role-vocal-substitute
description: When a track needs a voice the engine cannot sing: use the user's vocal audio, leave room, or carry the topline with an instrument.
---

# Vocals and their substitutes

Vocals later: no melody in the verse; in the chorus it is sparser and 3–4 LU quieter.

Vocals later: a 2–3 dB cut at 1–4 kHz on chords and pads.

## Practices

- In pop, R&B, rap and reggaeton the voice is the core of the track. Meloduo cannot sing or rap, and you cannot record: say so before you start. The user can record their own voice (Options > Record from the microphone, then Record in Song mode).
- The honest options, in order: the user's own vocal audio (tool-sampler); room for a vocal added later (a sparser chorus, a cut at 1–4 kHz on chords and pads); an instrumental topline whose carrier fits the genre (stage-track-card).
- Do not imitate a voice with a synth "vocal" without the user's consent: it replaces the core with a toy.

## Meloduo recipe

1. Ask in the brief: "Is there a vocal or a vocal sample? Import it with File > Import audio and I will place it."
2. With a vocal: `place_audio` (with `warp` and `sourceBpm` when the song tempo differs from the take), then chops if wanted (tool-sampler).
3. Without a vocal and with consent for an instrumental topline: a singable lead, `mode` Legato, glide 30–100 ms, a light vibrato (an LFO → pitch at 5–6 Hz with a delayed start) (role-lead).

## Related

`tool-sampler`, `craft-engine-limits`, `role-lead`
