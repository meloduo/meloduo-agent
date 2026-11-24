---
name: craft-sound-layering
description: Layer 2–3 sounds into one role by frequency band (sub, body, click or top) with their own cuts and one owner of the sub; use when a kick, bass, snare or lead needs more weight, punch or presence than one sound gives.
---

# Sound layering

## When

One sound cannot do the whole role: the kick has weight but no click, the bass has sub but vanishes on a phone, the lead is thin in the mids. Two or three layers, each owning one band, make one sound. More layers usually blur it.

## Practices

- **Layer by band.** Give each layer one job: sub (below about 60–100 Hz), body (100 Hz–1 kHz), click or top (2 kHz and up). Pick each layer for its band, not for how it sounds alone.
- **Every layer gets its own cuts.** A Low cut and a High cut on each layer so it plays only its band; the crossover points of neighbouring layers meet or overlap a little.
- **One owner of the sub.** Only one layer plays below about 100 Hz. Two sub layers cancel and reinforce each other at random and the low end wobbles.
- **Same notes, same timing.** Layers of a pitched role play the same notes (copy them); the attacks line up. A body layer may start a few ms later only on purpose.
- **Level by role.** The body usually leads; the sub and the click sit under it. Balance them so the sum reads as one sound.
- **Mono low end.** The sub layer stays mono; width belongs to the top layer.

## Meloduo recipe

1. `add_channel` for each layer with a preset for its band: for a bass, Bass Sub bass or Clean sub (sub), Bass Fat saw bass or a mid bass (body); for a kick, a second drum channel with a high `click` (top).
2. `copy_notes` from the main layer with `toChannelId` so every layer plays the same notes.
3. `add_effect` eq on each layer with `bands`: the sub layer `[{type:"High cut", freq:100}]`; the body `[{type:"Low cut", freq:100}, {type:"High cut", freq:4000}]`; the top `[{type:"Low cut", freq:2000}]`. Move the frequencies to the sound.
4. Route the layers to one bus (`add_bus`, `set_route`) and treat the bus as the role: compression and sidechain there.
5. `width` with `bassMono` on the bus if the body or top layer is wide.

## Candidates

Try 2–3 body or top layers against the same sub. Decide by the band shares of the summed bus against the role recipe (role guides) and by the `crestDb` of the bus: a click layer should keep the crest high. Method: craft-candidates.

## Check

- `render_preview` with stems: each layer stem has most of its energy in its own band (`bands`), little in the others.
- The bus stem matches the role signs: sub and body present, enough `mid` or `highMid` to read on small speakers.
- Phase: Meloduo has no polarity invert. Render the bus with and without the upper layer (mute it with `set_channel` `muted`) and compare the `sub` and `bass` shares. If the low end drops when the layer comes in, its low end cancels the sub: cut it higher.

## Pitfalls

- Two layers both full range: mud and phase trouble.
- Layers that differ in note length: the sound changes shape on every note.
- Too many layers: each new one adds level, not character.
- The sum checked only alone: check it in the full mix too.

## Engine limits

No polarity invert and no sample-level time alignment: fix cancellation with cuts and layer choice. Drum parameters cannot be automated; automate the EQ on the layer instead (tool-automation).

## Related

`craft-frequency-slots`, `craft-kick-bass`, `craft-low-end-mono`, `tool-eq`, `tool-buses-sends`
