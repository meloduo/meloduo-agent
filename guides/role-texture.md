---
name: role-texture
description: Textures, drones, noise beds and ear-candy one-shots: quiet, slow-moving layers that make a track feel alive; use when a mix feels empty or static, or a genre wants an atmosphere.
---

# Texture

## When

The track works, but it feels sterile, empty between notes, or static over a long section. Ambient, cinematic, lo-fi, trance breakdowns and UK garage often want a bed or small details under the main parts.

## Practices

- **Quiet.** A texture sits about 15–25 dB under the lead. If you notice it at first listen, it is usually too loud; if you miss it when it is muted, it works.
- **Slow movement.** Change it over 4–16 bars: a filter, a level, a position in the wavetable. Fast movement pulls focus from the hook.
- **One detail per 8 bars.** Ear-candy one-shots (a sweep, a zap, a bell, a vinyl crackle burst) work best when rare: about one per 8-bar phrase, usually at the phrase end.
- **Its own band.** Keep the bed out of the bass: a Low cut around 150–300 Hz. A dark drone may own the low mids only when nothing else does.
- **Static held bed.** A reverb with `freeze` On holds a tail as a still pad: feed it a chord or a noise burst on its own bus.
- **Follow the section.** More texture in intros, breakdowns and outros; less in the drop, where it only adds mud.

## Meloduo recipe

1. `add_channel` synth with a Texture or FX preset: Texture Evolving texture, Dark drone, Shimmer texture, Bit crush texture, Vinyl air, Metallic texture; Pad/Ambient Ambient drone; FX Wind, Noise sweep, Sci-fi bleeps.
2. Long notes (a whole pattern or more) for a bed; single short notes for ear candy.
3. `add_effect` eq with `[{type:"Low cut", freq:200}]`; reverb Hall or Ambience with a high `mix`.
4. Slow automation (`set_automation`) of `cutoff`, `pos` or a macro over 8–16 bars, and of the channel volume between sections.
5. Frozen bed: a bus with reverb `freeze` On (`set_bus`, `add_effect`); send a chord to it. `freeze` cannot be switched by a lane, so the bus volume does the in and out.
6. `set_channel` `volumeDb` so the texture sits 15–25 dB under the lead.

## Candidates

Try 2–3 textures for the same section. Decide by the stem: `lufs` 15–25 below the lead stem, the energy outside the `bass` and `sub` bands, and no rise in mix `lowMid`. Method: craft-candidates.

## Check

`render_preview` with stems: the texture stem quiet and out of the low end; `space.wetLu` for its reverb not pushing the mix too wet; `loudnessBySection` keeps the drop above the breakdown.

## Pitfalls

- A texture as loud as a part: it becomes a second pad and muddies the mix.
- Ear candy every bar: it turns into noise and loses its effect.
- A wide noise bed with low end: `lowSidePct` rises.
- A frozen reverb on an insert: it holds forever and cannot be turned off by automation.

## Engine limits

No reverse, no tape or bitcrush plugin, no audio import by the agent: use the Texture presets, or the user's own imported recordings on the sampler. Details: craft-engine-limits.

## Related

`craft-ear-candy`, `role-pad`, `tool-reverb`, `craft-space-depth`, `tool-automation`
