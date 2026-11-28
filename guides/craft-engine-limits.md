---
name: craft-engine-limits
description: What Meloduo cannot do and the honest substitutes: vocals, audio import by the agent, tape, gates outside the synth, time stretch.
---

# Engine limits and substitutes

Available: eq, comp, duck, limit, sat (Soft, Tube, Hard), gate, drive (Boost, Overdrive, Dist, Fuzz) and amp for guitar (tool-guitar-rig), width, reverb, delay, chorus, flanger, phaser (tool-modulation-fx), the user's web plugins.

Not in Meloduo: bitcrusher, tape. An LFO filter and tremolo exist only inside the synth (lfo → cutoff, lfo → amp); a guitar, sampler or drum channel has no LFO. Substitutes:
- trance gate: lfo2 → amp in the synth;
- gated reverb: the reverb's own `gate` (see the Gate bus below);
- autopan: a `pan` lane with points on every beat;
- lo-fi: sat Tube, EQ High cut 6–10 kHz, `warp` Quantize in the synth.

- Drum and sampler parameters cannot be automated; synth pitch moves only through the matrix (`mods` → pitch) and Legato notes, not through a lane.
- There is no bitcrusher, tape or reverse. Gated reverb exists: the reverb's own `gate`. Substitutes: the table below.
- The 808 is a separate instrument (`voice` "808", `set_808`, `get_808`), not the synth: guides role-808 and tool-808.

| Missing | Substitute |
|---|---|
| gate on a channel | not missing: the `gate` plugin (tool-guitar-rig); a trance gate is lfo2 → amp on the synth |
| gated reverb | not missing: reverb `gate` On, `gateThreshold` −40…−30 dB, `gateRelease` 150–300 ms on a Plate or Hall bus, snare sent at −10…−6 dB |
| bitcrusher | `warp` Quantize on the synth; sat Hard and High cut |
| tape, wow | LFO → pitch, fast and light; sat Tube; High cut 6–10 kHz |
| reverse | a synth with a long attack, cut off on the beat; a volume lane rising with a sharp reset |
| melodic 808 | role-808 |

## Other gaps and honest workarounds

- No generated vocals, and you cannot record: the only voice is the user's own audio, imported or recorded from their microphone (Options > Record from the microphone, in Song mode) (role-vocal-substitute).
- No time stretch or pitch shift of audio: the project tempo must match the file; a sampler note other than `root` changes pitch and speed together.
- No multiband compressor, multiband saturation or clipper: a parallel crush bus (tool-saturation-amp-width), dynamic EQ bands, sat Hard and the limiter.
- Swing works on 16ths only, with no groove templates: shift off-beat eighths with `+Nt` (craft-groove-swing).
- One time signature per project; it does not change by section. The project has one key, and a pattern may have its own (`set_scale` with `patternIds`): a section in another key needs its own patterns. The tempo can change in the song (the lane `master` `tempo`, tool-automation). The signature is 2/4…12/4 or 2/8…12/8 (`set_tempo` `timeSignature`, before the notes): a passing odd bar is written as a grouping across bar lines. A key change moves no note: transpose the patterns of that section. LFO and effect divisions named in bars ("1 bar" … "8 bars") count 4 quarters per bar in every signature.
- No reverse audio: a synth with a long attack cut on the beat, or a rising volume lane.
- No automation of sends, `duck`, drums, guitar, sampler or `arp*`: plugins on the channel, a Throw bus, a second channel (tool-automation).
- `render_preview` metrics are no shorter than a bar: duck depth on each hit, attack shape and riser movement are checked by parameters, not by sound. Say so in the report.
- The user's own web plugins (WAM): if a channel chain has one, read it with `get_web_plugin` and set it with `set_web_plugin`. Do not ask the user to install one just for the track.

## Related

`role-vocal-substitute`, `tool-sampler`, `tool-automation`, `tool-modulation-fx`
