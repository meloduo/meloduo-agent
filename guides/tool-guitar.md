---
name: tool-guitar
description: The guitar instrument: presets, parts and how to write them, chords, doubles, humanize and feel, amp, ranges.
---

# Guitar

`add_channel` guitar with `preset`, edits with `set_guitar`.

| Part | Preset | How to write the notes |
|---|---|---|
| Acoustic strumming | Steel strum, Jangle 12, Uke strum | open chords (G 43 47 50 55 59 67, C 48 52 55 60 64, D 50 57 62 66, Em 40 47 52 55 59 64), strum D-DU-UDU in eighths, upstrokes 15–25 quieter; another pattern via `strum` on the chord notes |
| Fingerpicking | Steel fingerpick, Nylon classical | bass on the beats, top strings between them, length 1–2 beats |
| Bossa, jazz | Nylon bossa, Clean neck | bass on the beats, a 3–4 note chord on the syncopations |
| Funk | Clean funk | a chord on every sixteenth, velocity 110 / 50 / 70 / 50, length 1 step |
| Rock rhythm, chug | Crunch rhythm, Palm-mute chug | 2–3 note power chords (40 47 52); `add_channel` sets the amp itself; a rig preset (Punk, Grunge, Metal...) adds the whole chain |
| Bass | Finger bass, Pick bass, Muted bass, Post-punk bass | one note at a time, 28–55 (Post-punk bass 40–57), root on strong beats |
| Banjo, mandolin | Bluegrass banjo, Mandolin | a roll in eighths; mandolin tremolo in sixteenths |

- A guitar chord is notes on one step: the voice spreads them over the strings itself.
- Fix `add_notes` range and fingering warnings right away: revoice the chord or shift `position`.
- A double on another channel diverges by itself; different `position`, `feel` or `pickPos` spread it wider.
- `humanize` is a random chord shift of up to ±15 ms; `feel` is −20…20 ms (below 0 rushes).
- Amp: `gain` crunch 20, lead 30, above 34 aliasing. A 4x12 cabinet gives more low end, 1x12 is brighter, 8x10 is for bass. A bass without an amp is a clean DI; for dirt use amp Bass grit. Amp models, gate, drive and rig presets: `tool-guitar-rig`.
- Ranges: guitar 40–84, bass 28–64, banjo 50–89, ukulele 60–84, mandolin 55–96.

## More knobs

`pluck` (Finger, Pick, Thumb), `hardness`, `pickPos`, `pickup` (Neck, Middle, Bridge), `stiffness`, `course` (12-string detune, 0–20 ct), `mute`, `body`, `bodySize`, `noise`, `strum` (0–80 ms), `strumDir` (Down, Up, Alternate), `position` (0–12), `humanize`, `feel`. Guitar parameters cannot be automated; `set_main_pitch` moves the guitar.

## Related

`tool-guitar-rig`, `role-rhythm-guitar`, `role-lead-guitar`, `role-bass-guitar`, `tool-saturation-amp-width`
