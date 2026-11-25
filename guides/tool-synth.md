---
name: tool-synth
description: Synth basics: presets and macros, voice modes, glide, unison per oscillator, the signature sound, preset candidates.
---

# Synth

## How to set a sound

1. `add_channel` synth (guitar, drum) with `preset`. It sets the parameters, the matrix, the macro names and the plugin chain in one edit. `set_synth` with a preset adds the same chain only when the channel has no plugins yet (result `chainAdded`); otherwise your plugins stay and a `hint` lists what the preset lacks. Presets are matched in loudness.
2. Macros: `set_synth` `macros` by name. 0 is as designed, 1 is all the way toward the name, −1 the opposite way (Brightness −0.5 is darker than the preset). Set them by mood rather than leaving them at 0.
3. Parameter edits come after the macros. All parameters and ranges: `get_synth`.
4. Write a choice parameter by name: `"arpRate":"1/16"`, `"lfoSync":"1/8"`, for delay `"sync":"1/8D"`. A macro can be named in `set_automation` (`"param":"Brightness"`).
5. The 808 is its own voice: `add_channel` with `voice` "808" and `preset`, edits with `set_808`, parameters with `get_808`; guides tool-808 and role-808.
6. The user sets up a web instrument (a channel with `instrument`). You write notes to it as usual.

Presets live in folders (Bass, Lead, Pad, Pluck, Keys, Bell, Brass, Strings, Organ, Arp, FX, Texture) with genre subfolders. Candidates by genre: the genre guides.

## Synth voice and hook timbre

- `mode`: Poly (chords; `poly` is how many notes at once), Mono, Legato. Chords in Mono and Legato sound as one note: the tools warn.
- `glide` works in Mono and Legato. In Mono every note glides, even after a rest, which sounds like meowing. In Legato only a note that overlaps the next by at least a step glides. Use Legato for a melody. Mono with glide only when the genre wants it (G-funk, acid).
- A filter envelope `envAmt` above 0.5 quacks on short notes. For a hook in eighths and sixteenths use 0.2–0.4.
- Do not put a pitch envelope (env2 → pitch), a formant filter, vowels or Screech on a melody without a genre reason (dubstep, riddim).
- `oscPhase` Reset starts the oscillators at phase 0 on every note, so a detuned lead meows even without an envelope. Free gives each note its own phase. Leads, pads, strings and organs already use Free. For a lead from an old project set `"oscPhase":"Free"` and `detune` no higher than 4.
- `voicesStolen` in `render_preview`: raise `poly` or shorten the release.
- Unison: `unison` applies to all oscillators; `uniA`, `uniB`, `uniC` set it per oscillator (0 means shared). A supersaw on A (`uniA` 7) with B in the centre (`uniB` 1) gives width without a muddy low end. On a bass, give one voice to the oscillator that holds the low end.

## Signature sound

One part of the track, usually the hook carrier. Make 3+ edits away from the preset and name them in `why`. Other parts can stay close to their presets.

Edits to choose from:
- `warp` and `warpAmt` (Bend, Sync, FM, Quantize);
- another wavetable `table`, or `pos` with a slow LFO;
- another filter model `fModel` (Ladder, Diode, SVF, Comb, Formant) or a second filter `f2Model`;
- a row in the `mods` matrix (tool-synth-modulation);
- an arp with an unusual `arpMode` or `arpRate`;
- `driveMode` (Soft, Hard, Fold) and `drive` to match the track character (stage-track-card).

Apply the track character to every synth: analog warmth, digital clarity, lo-fi or aggression.

## Preset candidates

Take 2–3 candidates and choose by mood words: dark → Ladder or Diode, lower cutoff, Dark pad; bright → open filter, Glass, FM; vintage → Chorus pad, Ladder, tape; modern → wavetable, Fold, Growl. The full list: `get_synth` (presets), `get_drum`.

Check preset names with `get_synth`: the list grows, and a misspelled name returns an error with the valid ones.

## Related

`tool-synth-modulation`, `tool-arp`, `tool-wavetable`, `role-lead`
