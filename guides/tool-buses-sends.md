---
name: tool-buses-sends
description: Buses, sends and routing: the bus template, preset reverbs on channels, no bus-to-bus.
---

# Buses and sends

A bus cannot feed another bus: for "reverb after delay", put both on one bus.

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
| Gate (synthwave, 80s pop-rock) | reverb mode Plate or Hall, decay 2–3 s, `gate` On, `gateThreshold` −40…−30 dB, `gateRelease` 150–300 ms, `color` 1980s, mix 1 (preset `Ambience / Gated` for a tighter one) | snare, clap | −10…−6 dB |

Synth presets bring their own reverb and delay (the `chain` in the `add_channel` result). If three or more channels have them, remove those reverbs (`remove_effect`) and send the channels to shared buses. One space sounds more coherent, and a render with stems runs twice as fast.

## Related

`tool-reverb`, `tool-delay`, `craft-space-depth`, `craft-gain-staging-balance`
