---
name: tool-automation
description: Automation lanes: owners, what can and cannot be automated, sharp resets, EQ lanes, drum workarounds.
---

# Automation

Automatable (`set_automation`): volume and pan of channels and buses, and every number parameter of a plugin except the ones listed below: EQ bands (`b{n}Freq`, `b{n}Gain`, `b{n}Q`) and `output`, comp `threshold`, `ratio`, `attack`, `release`, `range`, `makeup`, `drive`, `scLowCut`, `mix` and the rest, sat, delay, width and amp numbers, limiter `gain` and `release`, reverb `decay`, `size`, `predelay`, `early`, `diffusion`, `width`, `damp`, `lowcut`, `ducking`, `gateThreshold`, `gateRelease` and `mix`; synth parameters and macros; 808 `glide`, `drive`, `presence` and `tone`.

Not automatable: sends, all `duck` parameters, comp `lookahead`, limiter `ceiling`, reverb `decayEq` and `postEq` bands, reverb `decay` in Classic mode, choice parameters (`style`, `mode`, `sync`, `shape`, `pingpong`, `gate`, `freeze`, `color`, `character`), drums, guitar and the sampler. Lanes are linear (frequencies follow an exponential curve) and play only in Song mode.

`set_automation` with an owner: a channel (volume, pan, synth and 808 parameters), a bus or the master (volume, pan), or an effect id (plugin parameters), a parameter and points. Bars count from 0. A sharp reset is two points close together: D − 0.01 and D. EQ lane names are `b<N><Field>` with N the band number and Field one of Freq, Gain, Q, Thresh, Range (`b1Freq`, `b3Gain`), plus `output` and `scale`; a wrong name returns the full list. To remove a lane, call `set_automation` with the same owner and param and `points: []`; to change one, send all new points (they replace the whole lane). An EQ lane can drive only an enabled band: set it first (`bands: [{type:"Low cut", freq:30}]` or `[{type:"High cut", freq:20000}]`).

## Workaround: drums, guitar and the sampler

Drum, guitar and sampler parameters cannot be automated, but the plugins on their channels can.
- Snare roll that brightens in a build: an `eq` on the snare channel, a Low cut band from 100 to 400 Hz and a High shelf gain from 0 to +4 dB over the build.
- Kick thinned before a drop: a Low cut lane 30 → 150 Hz over the last 2 bars, reset on beat one of the drop.
- Space by section: Hall `ducking`, drum-bus comp `drive`, Echo `tone` (tool-reverb, tool-compressor, tool-delay).

## Related

`craft-transitions`, `stage-fx-movement`, `tool-synth-modulation`
