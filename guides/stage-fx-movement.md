---
name: stage-fx-movement
description: Stage 8 of a track: shared space on buses, character inserts per role, the genre signature and movement across sections.
---

# Stage 8. FX and movement

Effects give parts character and space. Recipes: tool-buses-sends and the chains below; parameters: `get_effect` with `type`.

1. Shared space on buses: one main atmosphere for the track, a short room for the drums, an echo synced to the tempo. Replace preset reverbs on many channels with shared buses.
2. Main parts get their own character: saturation, an insert delay, width, movement through the mod matrix.
3. Genre signature: what listeners expect from the genre (pumping, 808 saturation, a big reverb, guitar distortion).
4. Synthesize transition sounds for the genre (role-riser-impact) instead of taking the Riser and Impact presets every time.
5. Check how wet the mix is (craft-space-depth). An agent without ears almost always makes the mix drier than it should be.
6. Movement across sections (`set_automation`): a rise into the drop and a reset on it, echo throws at phrase ends, a filter closing in the breakdown, different space in verse and chorus.
7. Do not decorate everything at once: movement stands out when things around it are calm.

Check yourself: does the track sound dry or static? Do the transitions move? Is the mix drowning in reverb?

An effect gives a part character; it does more than fix problems. Plugin parameters, presets and notes come from `get_effect` with `type`: read it before the first plugin of that type.

## Chains by role

No more than four inserts per channel. Correction numbers (EQ, comp): craft-gain-staging-balance.

| Role | Inserts in order | Sends | Character |
|---|---|---|---|
| Kick | eq → comp Punch → sat Soft (techno, hardstyle) | none | the duck source for everything |
| Snare, clap | eq → comp Punch → optional sat Tube | Room | trap: dry, reverb only as a throw |
| Hats, percussion | eq | Echo 1/16 quietly, pingpong on percussion | lo-fi: sat Tube |
| Bass | eq → comp El-Op → duck from the kick → sat on the mids if the bass must read on a phone | none | house: duck release 1/8–1/4 |
| 808 | its own `drive` and `presence` in `set_808`; no `sat` needed on the channel | none | separate it from the kick with notes and duck |
| Pad, chords | eq → comp Smooth or none → width 110–140 % (needs unison) → duck 3–6 dB (EDM) | Hall | lo-fi: sat Tube and High cut 6–10 kHz |
| Lead, hook | eq → comp Vocal or Opto → light sat Soft → delay 1/8D or 1/4 with a low `mix` | Hall, Echo, Throw | trance: 1/8D is already in the presets |
| Pluck, arp | eq → delay 1/8D or 1/16 pingpong, feedback 0.3–0.45 | Hall | EDM: duck 3–6 dB |
| Guitar | amp → eq → comp Classic 2–4 dB | Room, slapback delay 1/8T | rock: a double instead of `width` |
| Drum bus | comp Bus 2–3 dB → sat Tube with a low `mix` | — | parallel compression: comp `mix` 30–50 % |

## Genre signatures

One or two per track.
The signature for each genre is in its genre guide.

## Questions: is there enough FX?

1. Is there a shared space, and do the melodic parts send to it?
2. Is there a tempo-synced echo anywhere in the track?
3. Do the main parts have their own character (saturation, delay, width)?
4. Can you hear the genre signature?
5. Does something move at the big transitions?
6. Does the space differ between verse and chorus?
7. Are the card's FX moments in their places?
8. Is the mix drowning: do reverb tails cover the hits and the hook?

## Related

`tool-buses-sends`, `craft-space-depth`, `craft-transitions`, `tool-automation`, `tool-reverb`
