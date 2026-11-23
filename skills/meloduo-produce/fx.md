# FX and movement

An effect gives a part character; it does more than fix problems. Plugin parameters, presets and notes come from `get_effect` with `type`: read it before the first plugin of that type.

Contents:
1. What exists and what does not
2. Bus template
3. Chains by role
4. Genre signatures
5. Lanes across sections
6. Throws
7. Wet or dry
8. Questions: is there enough FX?

## 1. What exists and what does not

Available: eq, comp, duck, limit, sat (Soft, Tube, Hard), amp, width, reverb, delay, the user's web plugins.

Automatable (`set_automation`): volume and pan of channels and buses, EQ bands (`b{n}Freq`, `b{n}Gain`, `b{n}Q`), comp `threshold` and `mix`, sat `drive` and `mix`, delay `time`, `feedback`, `mix`, reverb `decay`, `size`, `predelay` and `mix` (except in Classic mode), width `width`, synth parameters and macros.

Not automatable: sends, all `duck` parameters, reverb `decay` in Classic mode, limiter `ceiling`, choice parameters (`sync`, `shape`, `pingpong`), drums and the sampler. Lanes are linear (frequencies follow an exponential curve) and play only in Song mode.

A bus cannot feed another bus: for "reverb after delay", put both on one bus.

Not in Meloduo: chorus, phaser, flanger, gate, LFO filter, tremolo, bitcrusher, tape. Substitutes:
- chorus: synth unison and `width`, the Width macro;
- phaser: the Notch pad preset;
- trance gate: lfo2 → amp in the synth;
- autopan: a `pan` lane with points on every beat;
- lo-fi: sat Tube, EQ High cut 6–10 kHz, `warp` Quantize in the synth.

## 2. Bus template

`add_bus`, a plugin on the bus, `set_send` from the channels. Kick, sub and bass usually have no sends. Take what you need from this set; it is not a required list.

One main atmosphere per track is the Hall character (or the echo). A short Room for the drums does not fight it: it is barely heard as space.

| Bus | Plugins | Who sends | Send level |
|---|---|---|---|
| Room | reverb mode Room, decay 0.6–1.2 s, predelay 10–20 ms, lowcut 300–500 Hz, mix 1 | drums, percussion, guitars | −16…−10 dB |
| Hall | reverb preset `Medium hall (bus)` or mode Hall, decay 1.8–3 s (synthwave, ambient 3–5 s), predelay 20–40 ms, lowcut 200–400 Hz, mix 1 | pads, lead, plucks, keys | −14…−8 dB |
| Echo | delay 1/8D or 1/4, feedback 0.25–0.4, pingpong, mix 1; eq Low cut 200–300 Hz after the delay | lead, pluck, arp, percussion | −20…−12 dB |
| Music | eq (Low cut 30 Hz and High cut 20 kHz bands for sweeps), sat or width by genre | all music parts except kick and bass, through `set_route` | — |
| Throw | delay 1/4 or 1/2, feedback 0.5–0.6, then reverb 3–6 s; bus volume −60 dB outside the throws | hook, stab | −20…−10 dB; check the throw bar with a render |
| Pump (house, EDM, future bass) | duck from the kick 4–8 dB, release 1/8–1/4 | chords, pads, plucks through `set_route` | — |
| Crush (trap, rock, techno) | sat Hard, high drive, eq Low cut 100 Hz | kick, snare, drums | −12 dB, blend with the bus fader |

Reverb modes: Room and Ambience give a room and air with no tail, Chamber a warm medium one, Hall a long even tail, Plate a bright dense one for snare and vocals, Classic the old convolution (the `Classic /` presets and the old name `Hall` give it). `decayEq` shortens the top of the tail (High shelf 4–6 kHz ×0.4–0.6) and stretches the low end (Low shelf ×1.2–1.5) without losing clarity; `predelaySync` 1/16–1/8 separates the tail from the hit in time. `render_preview` `space` gives the `wetLu` of each reverb against the mix: a Hall bus with sends at −12 dB gives about −22, −10 about −20, −8 about −18, −3 about −13 (ballad, ambient); Chamber is about the same, Plate 1 LU quieter, Room `Dry booth` 9 LU quieter. For drums on a bus use `Room / Drum room (bus)` (0.7 s, mix 1). Above −10 the tail washes out the mix. The `dry` field means no space is heard: unless the genre is dry, add a Hall bus.

Synth presets bring their own reverb and delay (the `chain` in the `add_channel` result). If three or more channels have them, remove those reverbs (`remove_effect`) and send the channels to shared buses. One space sounds more coherent, and a render with stems runs twice as fast.

Tempo-synced times: a quarter = 60000 / BPM ms, an eighth is half that, a sixteenth a quarter. At 128 BPM: 1/4 = 469 ms, 1/8 = 234 ms, 1/16 = 117 ms.

## 3. Chains by role

No more than four inserts per channel. Correction numbers (EQ, comp): mixing.md.

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

## 4. Genre signatures

One or two per track.

| Genre | Signature | How |
|---|---|---|
| House, EDM | pumping | duck on the bass 6–10 dB and a Pump bus 4–8 dB; a Low cut sweep on the music bus in every build; delay 1/8D on plucks; a long reverb in the breakdown |
| Trap | 808 saturation, dry drums | 808 `drive` and `presence` (`set_808`); 1/4 throws at phrase ends; a "radio" filter (Low cut and High cut) on the music bus in the intro |
| Synthwave | big reverb, width | Hall 3–5 s on pads and lead, a big snare reverb, `width` 130–150 % on pads with unison, delay 1/8D on arps |
| Lo-fi | warmth and a dark top | sat Tube on keys and drums; High cut 6–10 kHz and Low cut 100–150 Hz on the music bus; a short dark reverb; wow LFO on synths |
| Dub techno | dub delay | delay `sync` Off, `time` 300–700 ms, feedback 0.6–0.8 with a lane up and down; reverb after the delay on the same bus |
| Pop | a clean lead and throws | reverb 1.2–2 s on the lead, 1/4 throws at phrase ends, `width` on chorus pads |
| Rock | dense drums | comp Classic on drums, Room 0.6–1 s, sat on the drum bus, a Crush bus |
| Techno | rumble | kick → a bus with a dark long reverb (Hall 3–5 s, eq High cut 200–400 Hz), duck from the kick on that bus |

## 5. Lanes across sections

`set_automation` with an owner (channel, bus, master), a parameter and points. Bars count from 0. A sharp reset is two points close together: D − 0.01 and D. An EQ lane can drive only an enabled band: set it first (`bands: [{type:"Low cut", freq:30}]` or `[{type:"High cut", freq:20000}]`).

**Build** (usually two or three moves together, all reset on beat one of the drop):
- Low cut on the music bus 30 → 300–600 Hz over 4–8 bars (on the master no higher than 200–400 Hz);
- Hall bus volume +6…+9 dB toward the end of the build;
- Echo feedback 0.3 → 0.6–0.7 over the last 2 bars;
- master or music bus volume −2…−4 dB;
- sat `drive` +6…+10 dB on the lead or a bus;
- music bus `width` 100 → 60–80 %;
- synth macro m1 (Brightness) from 0 to 1.

**Drop:**
- `width` 120–140 % on pads;
- impact: Room bus volume up for one beat.

**Breakdown:**
- High cut on the music bus 20 kHz → 800–2000 Hz over 1–2 bars, opening over the last 4–8 bars;
- Hall +3…+6 dB.

**Verse and chorus:** at least one FX parameter differs (reverb level, width, drive, delay on or off).

**Outro:** close the High cut or raise the reverb, then fade the music bus and the drum bus over 2–4 bars. Do not fade with a master or channel lane: a volume lane overrides the fader, `trimDb` and `match_loudness`.

**Pumping by section:** you cannot automate `duck` depth. Use comp Pumping with the kick as `source` and drive its `threshold`: a lower threshold pumps deeper.

## 6. Throws

A throw is an echo of one note or a phrase ending. Sends cannot be automated, so the Throw bus does it.

1. The hook sends to Throw all the time. Set the send level by rendering the throw bar: the throw is audible but no louder than the phrase. A long tail with feedback builds up level: −20…−10 dB is often enough.
2. The Throw bus volume sits at −60 dB.
3. Before the last note of the phrase: −60 → 0 dB over 1/16, hold to the end of the note, back to −60 one beat after it.
4. The delay and reverb tail carries across the section boundary.

A throw on the end of a hook phrase is a cheap, audible move for a chorus or drop.

## 7. Wet or dry

Without ears the mix almost always comes out drier than it should: cautious sends feel safe. You can measure the dryness.

1. Render a window of the main section.
2. Temporarily mute the reverb and echo buses (`set_bus` with `muted: true`) and render the same window. Volume −60 dB does not work if the bus has a volume lane: the lane overrides it.
3. **Always** unmute the buses afterwards.
4. Compare the LUFS and band shares of the two renders.

When the low end (kick, 808, sub) carries more than half the energy, the LUFS difference of the whole mix barely shows: compare the stems of the wet parts (pad, hook, texture) with and without the buses, or the shares of mid and above.

The LUFS difference mostly catches echo and hall. A short room barely changes loudness: judge it by the send levels and by the drums' `crestDb` (slightly lower with the room).

Guidelines (estimates, not measurements):
- under 0.2 LU: space is barely heard, the mix is dry;
- 0.3–1 LU: the usual level for pop-punk, rock, trap, pop;
- 1–2 LU or more: a wet mix: synthwave, ambient, lo-fi, dream pop.

By genre:
- pop-punk, rock: a dense room on the drums is audible, guitars with a short slap or room, the lead with echo;
- trap: dry drums, melody and bells in a long reverb and echo;
- synthwave, ambient: a big hall on the snare, pads and lead;
- house, EDM: a room on the drums, hall and echo on plucks and lead, the breakdown wetter than the drop.

## 8. Questions: is there enough FX?

1. Is there a shared space, and do the melodic parts send to it?
2. Is there a tempo-synced echo anywhere in the track?
3. Do the main parts have their own character (saturation, delay, width)?
4. Can you hear the genre signature?
5. Does something move at the big transitions?
6. Does the space differ between verse and chorus?
7. Are the card's FX moments in their places?
8. Is the mix drowning: do reverb tails cover the hits and the hook?
