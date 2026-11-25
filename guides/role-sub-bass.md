---
name: role-sub-bass
description: Sub bass that owns the low end: a sine plus a quiet top, mono, in a low register.
---

# Sub bass

| Type | Base | What makes the sound your own | Sign in the stem |
|---|---|---|---|
| Sub bass | sine | sub plus a top: a quiet saw through `mixB` or `drive` | some bass and a little lowMid |

## Practices

- **Range.** Fundamentals between about 35 and 80 Hz: MIDI 26–39 (D1–D#2). Under 35 Hz small speakers and phones lose the note; keep long notes at E1 (MIDI 28) and up.
- **Mono and pure.** One voice, no unison, no `width`, no stereo effects. Keep reverb and chorus off the sub.
- **One note at a time.** Play the chord root, one note per chord or per rhythm hit. Overlapping notes beat and blur.
- **Length against the kick.** One part owns the sub at any moment (craft-kick-bass). If the kick is long, play the sub in the gaps. If the sub holds whole bars, the kick is short and clicky.
- **Duck from the kick.** `duck` `depth` 2–4 dB to separate, 6–10 dB for a pump; `attack` 5–10 ms (a sine clicks if it is cut faster).
- **Phones need a top.** A pure sine is inaudible on a phone or laptop speaker. Add a little saturation (a `sat` or `drive` effect, or a quiet second oscillator an octave up at `mixB` 0.1–0.3) so the stem shows some bass and lowMid, not only sub.
- **Do not boost the sub by fader alone.** If `render_preview` warns `bassHeavy`, shorten the notes or lower the level before you add EQ.

## Meloduo recipe

1. `add_channel` synth with a preset from Bass: **Sub bass** (sine plus a square with a short filter envelope, a bit of top) or **Clean sub** (a plain sine with a `sub` layer, the cleanest). Future bass, house and trap pop sit well on Clean sub; use Sub bass when the part needs to be heard on small speakers. For a long, sliding trap bass use the 808 (role-808).
2. `get_synth` shows the macros; `Grit` adds the harmonics. Set `unison` to 1 voice. Envelope: `attack` 2–5 ms, `sustain` 0.9, `release` 80–150 ms so notes do not click.
3. Notes: roots on the chord changes, a rhythm that locks with the kick (craft-bassline-writing).
4. Add `duck` from the kick (above), then render the kick and sub together and read `clash`.
5. Mid layer: a second channel with role-mid-bass, high-passed at 100–150 Hz, so the sub stays alone below.

## Check

The bass stem holds most of its energy in the sub and bass bands; `stereo.lowSidePct` under 5 %; no `clash` between kick and sub; the part is still audible in a render of the mono sum (absolute `monoLossDb` under 3 dB).

## Related

`craft-low-end-mono`, `craft-kick-bass`, `role-mid-bass`, `role-808`, `craft-bassline-writing`, `tool-synth`
