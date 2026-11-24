---
name: role-mid-bass
description: Synth bass above the sub: house and synthwave saw bass, reese, growl and neuro bass.
---

# Mid and synth bass

| Type | Base | What makes the sound your own | Sign in the stem |
|---|---|---|---|
| Synth bass (synthwave, house) | saw, Ladder | filter envelope 150–250 ms, `drive` | lowMid and mid growl on the attack |
| Reese (DnB) | two detuned saws | slow LFO on cutoff or detune, saturation | wide mid, mono low end |

## Meloduo recipe

- Keep the sub on its own channel (role-sub-bass) and high-pass the mid bass at 100–150 Hz, so the growl can be wide and dirty while the sub stays mono.
- Reese: two saws detuned 10–30 cents, a slow LFO on cutoff or detune (tool-synth-modulation).
- Growl and wobble: `table` Growl, lfo2 → `pos` at 1/8; `l2Sync` lanes change the speed in time.
- Neuro: `warp` FM from C (tool-wavetable).
- A parallel crush split adds mids without muddying the sub (tool-saturation-amp-width).

## Related

`role-sub-bass`, `tool-synth-modulation`, `tool-wavetable`, `craft-low-end-mono`
