---
name: genre-synthwave
description: Synthwave numbers: 80s drum machine grid, poly pads and eighth-note bass, gated snare, 1980s reverb color.
---

# Synthwave

Genre numbers are orientation; the reference wins. Swing values: craft-groove-swing.

## When

Use it for synthwave, retrowave, outrun and darksynth: 1980s drum machines, polysynth pads, a pulsing bass and big reverbs. Darksynth is faster and distorted; dreamwave is slower and softer. For 1980s Euro-disco and Italo songs use genre-eurodisco.

## Tempo and drums

| Genre | Tempo, centre (range) | Kick | Snare / clap | Hats and other |
|---|---|---|---|---|
| Synthwave | 110 (95–135) | 0, 4, 8, 12 or 0, 8 | 4, 12 | eighths |

- Most tracks sit at 95–118. Darksynth runs about 118–130, slow dreamy tracks 90–100.
- A typical drum machine bar: kick 0 and 8, a pickup kick on 15 in the last bar of a phrase, closed hats on all 16 steps with accents, one open hat near the end of the bar.
- A 1/32 hat flick at the end of every second bar keeps the loop moving (`unit` 1/32 in a line).
- Toms in fills, gated and big, at the end of 8-bar phrases.

## Swing and groove

- Straight: `swing` 0 (craft-groove-swing). The feel is machine-tight.
- The life comes from hat accents (`"9575 9575 9575 9575"`) and from the bass pulse, not from timing.

## Harmony

- Natural minor and dorian. Typical loops: i–VI–III–VII, i–VI–VII, i–iv–VI–V.
- One chord per bar or per two bars. Pads hold the chord; the bass pulses its root in eighths with octave jumps.
- Add9 and sus chords on the pad give the dreamy colour (craft-harmony-voicing).

## Melody defaults

| Genre | Scale | Notes per bar | Range | Register | Phrase form |
|---|---|---|---|---|---|
| Synthwave lead | aeolian, dorian | 2–5, quarters and halves | 10–15 | 64–84 | A A' B A' |

## Form

- Blocks of 4, 8 and 16 bars. Intro 8–16 (pad and arp), Verse 16, lead "chorus" 16, Breakdown 8, chorus 16, Outro 8–16 with a fade.
- A fade-out ending (pop before about 2005, Euro-disco, synthwave): repeat the last chorus and lower the master `volume` with `set_automation` (owner master) over the last 8–16 bars, from the current level to about −40 dB. Do it last, after the master stage (craft-transitions, Outro).
- Use the streaming form of stage-form; a long intro fits a night-drive mood.

## Palette

| Genre | Defining timbre | Roles usually present | Roles usually absent |
|---|---|---|---|
| Synthwave | poly pad, saw bass in eighths | bass in eighths, Chorus pad, lead with vibrato, sixteenth arp, brass stab | sub only, trap hats |

## Sound candidates

| Genre | Role | Candidates | Edit for character |
|---|---|---|---|
| Synthwave | bass | Bass/Synthwave Synthwave bass, Pulse bass; Bass Ladder bass | eighths with octave jumps |
| | pad | Pad Chorus pad, PWM pad, Warm analog pad; Strings Analog strings | slow LFO on pitch and filter |
| | lead | Lead/Synthwave Synthwave lead; Lead/Synthpop Synthpop square, Brass lead; Lead Vibrato lead; Lead/Rock Prog mini lead | `oscPhase` Free, vibrato |
| | arp, brass | Arp Sequence arp, Dotted arp; Brass/Synthwave Synthwave brass, Jump brass | — |
| | drums | 909 or 808 kit; acoustic snare and a long hall | — |

Role guides: role-mid-bass, role-pad, role-lead, role-pluck-arp, role-snare-clap.

## FX signature

| Genre | Signature | How |
|---|---|---|
| Synthwave | big reverb, width | Hall 3–5 s on pads and lead, a big snare reverb, `width` 130–150 % on pads with unison, delay 1/8D on arps |

- Gated snare: a reverb bus with `gate` On, `color` 1980s (craft-engine-limits has the numbers).
- `duck` on the bass and the pads from the kick, deep: 8–15 dB on the bass gives the pulse.
- Low cut on hats and claps at about 100 Hz; a small cut near 3.5 kHz on the hats softens them.
- Saturation on the snare (sat Tube); a light limiter or comp on the drum bus.
- Tape colour: sat Tube, a High cut at 8–10 kHz on the music bus, a light, fast LFO on synth pitch.

## Reference core

1. A straight 1980s drum machine beat with a big gated or long-reverb snare.
2. A saw or pulse bass in eighths on the root, ducked by the kick.
3. Wide, chorused poly pads and a vibrato lead in long notes.
4. Reverb as part of the sound, not an afterthought.

## Beginner mistakes

- Modern drums: trap hats, an 808 sub instead of a drum machine kick.
- No ducking, so the pads mask the kick.
- Clean, static synths: no unison, no slow LFO, no tape colour.
- Reverb tails without a gate wash the mix out.

## Engine limits for this genre

- No chorus plugin: synth unison, `width` and the Width macro stand in (craft-engine-limits).
- No tape plugin: sat Tube, High cut and a light pitch LFO.
- No vocals: a lead or a vocoder-like Vowel pad carries the topline (role-vocal-substitute).

The synthwave tempo and drum row is an estimate, not from sources.

## Related

`tool-reverb`, `role-pad`, `stage-track-card`, `craft-groove-swing`
