---
name: genre-future-bass
description: Future bass numbers: 140–160 half-time grid, pumping supersaw chords, chopped-lead hook, drop with a wide chord wall.
---

# Future bass

Genre numbers are orientation; the reference wins. Swing values: craft-groove-swing.

## When

Use it for future bass (bright, emotional, wide chord drops), kawaii future bass (high, sweet leads) and the pop offshoots of it. The hook is a chord progression played as a wide, pumping supersaw wall, with a bright lead or a chopped top line over it.

## Tempo and drums

| Genre | Tempo, centre (range) | Kick | Snare / clap | Hats and other |
|---|---|---|---|---|
| Future bass, half-time | 150 (140–160) | 0 and 10, or 0 only | 8 (clap layered with a snare) | sparse hats, 1/16 or 1/16t fills |

- The snare on step 8 makes 150 feel like 75. Trap-style kit and hats, but fewer rolls than trap.
- Kick 0, plus a ghost on 10 or 14. Snare fills before a drop: 1/16 or 1/16t on steps 12–15.
- The drum bus is dry and tight; the width comes from the chords, not from the drums.

## Swing and groove

- Straight (`swing` 0) or a light 8–16 on the hats; the groove is the chord rhythm and the pumping (craft-groove-swing).
- Drop chords often play a syncopated rhythm (for example steps 0, 3, 6, 10, 12) instead of whole notes.

## Harmony

- Major or minor with 7ths and 9ths; four chords over 4 or 8 bars (vi IV I V, I V vi IV and their relatives). Open voicings, the top note carries the tune (craft-harmony-voicing).
- Emotional, uplifting feel: major-key lifts in the drop, minor in the verse or breakdown.
- Write the lead as a short motif that answers the chords (craft-melody-motif, craft-call-response).

## Form

- Streaming: Intro 8, Verse 8–16 (soft chords, vocal-like lead), Build 8, Drop 16 (8 + 8), Breakdown 8, Build 8, Drop 2 16, Outro 8.
- The drop is the widest and brightest part; the verse and breakdown are narrow and soft. Contrast comes from width, brightness and density (craft-section-contrast).

## Roles

| Role | Preset candidates | Key numbers | Role guide |
|---|---|---|---|
| chords | Pad/Future bass Future chords, Pad Supersaw pad, Lead/Trance Supersaw lead | 5–7 unison voices, `uniWidth` 0.9–1; the drop wall plays 2–3 octaves | "Supersaw chord wall" above, role-pad |
| lead | Lead/Future bass Future lead, Kawaii lead | `Motion`, `Width` macros; a sweet top line, Legato glide 50 ms | role-lead |
| pluck, arp | Pluck/Future bass Future pluck | short, bright, on 1/8 or 1/16 | role-pluck-arp |
| bass | Bass Sub bass, Clean sub; Bass/Dubstep Wobble bass for a mid layer | mono sine below 100 Hz, one note per chord root; mid bass Low cut about 120 Hz | role-sub-bass, role-mid-bass |
| drums | Trap kit, a layered clap and snare | snare on 8, kick short | role-snare-clap |
| transitions | FX Riser, Downlifter, Impact boom | riser 8 bars, impact on the drop downbeat | role-riser-impact |

## Supersaw chord wall

The hook carrier of the drop. Not a short stab (role-stab-chords is for house): a held or syncopated wall of chords.

- **Voicing.** Four-note chords with 7th or 9th, open: root and fifth low (around C3), third, seventh and a ninth above, the top note on the tune (craft-harmony-voicing). Nothing under about C2 (MIDI 36): the sub owns that.
- **Octave doubling.** Double the chord notes an octave up on a second channel (same preset, `Brightness` higher, a little quieter), or play the top voices in two octaves. The wall is 2–3 octaves wide, with the gaps filled by the chord notes, not by clusters in 200–500 Hz.
- **Unison and width.** 5–7 unison voices, `uniWidth` 0.9–1, detune moderate; use the `width` plugin on the chord bus for a 130–150 % image. Low cut 110–130 Hz on the chords (the lowest chord note is about C3, 131 Hz) so the lows stay mono (craft-low-end-mono).
- **Rhythm.** Whole notes in the verse; in the drop a syncopated figure such as steps 0, 3, 6, 10, 12 with a short release, or held chords with the pump doing the rhythm.
- **Sidechain pump.** `duck` from the kick on the chord channels (or on a chord bus), `depth` 6–10 dB (deeper, 10–12 dB, for an exaggerated pop), `attack` 0.1–5 ms, `release` an 1/8 note (200 ms at 150 BPM) so the level is back before the next hit. A shorter release (1/16) is a tight pump; a longer one a lazy swell. The sub: not ducked or 2–4 dB only.
- **Wobble or swell.** Volume or filter movement in time: lfo2 → `cutoff` at 1/8 or 1/4 with a depth 0.2–0.4 (tool-synth-modulation), or `set_automation` on `cutoff` or the `Brightness` macro: closed in the verse, opening over the build, fully open on the drop (tool-automation). A tremolo-style volume LFO (lfo2 → amp, 1/8, depth 0.3–0.5) is the gate version of the pump when the kick has no notes.
- **Check.** Render the chord stems: `clash` with the sub or kick is absent, the chord `mid` band is not under the lead, and the drop is wider than the verse (`stereo` widths).

## FX and mix signature

- Pumping: `duck` on the chords (and the lead) from the kick, `depth` 6–10 dB, `release` an 1/8 note (60000 / BPM / 2 ms, 200 ms at 150 BPM); the sub is ducked less or not at all. It works only where the kick has notes (tool-sidechain-duck).
- Width: chords wide (`width` plugin, `uniWidth` 1); the sub and kick stay mono (craft-low-end-mono, tool-saturation-amp-width).
- Brightness grows into the drop: automate the chord `cutoff` or the `Brightness` macro up over the build and open it fully on the drop (tool-automation).
- Reverb on a send bus, Plate or Hall 1.5–2.5 s, a light send on the lead and chords; a dry kick, bass and snare (tool-reverb).
- A short 1/8 or dotted delay on the lead (tool-delay).
- Master at −14 LUFS; a louder master only when the user asks (targets: craft-loudness-lufs).

## Reference core

1. Half time at 150: kick on 0, snare on 8.
2. A four-chord progression with open voicings and a clear top note.
3. A wide, pumping chord wall in the drop, narrow and soft before it.
4. A bright lead or chopped top line as the hook, with a clean mono sub under the chords.

## Beginner mistakes

- The chords do not duck from the kick: the drop loses its pump and the kick disappears.
- A wide sub: it breaks in mono. Keep the sub and kick mono.
- The verse is as wide and bright as the drop: no contrast.
- Chords stacked in one octave without a clear top note: mud in the 200–500 Hz range (craft-frequency-slots).
- A drop without a build or an impact.

## Engine limits for this genre

- No vocal chops and no resampling: play a chopped lead as short staccato notes (1/16 or 1/8) with a fast amp envelope, or use a Formant or Vowel preset for a vocal feel (craft-engine-limits).
- No OTT or multiband: use `sat` and a parallel `eq` for brightness, and the master limiter (craft-engine-limits).
- Pitch moves only through the `mods` matrix: a pitch dive is a modulation row or a Legato note.

## Related

`role-pad`, `role-sub-bass`, `role-lead`, `tool-sidechain-duck`, `craft-harmony-voicing`, `craft-section-contrast`
