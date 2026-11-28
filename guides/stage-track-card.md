---
name: stage-track-card
description: Stage 2 of a track: make the choices explicit in a track card (tempo, mode, progression, form, hook carrier, timbre, character, space) with untypical picks on secondary axes.
---

# Stage 2. Track card

Without an explicit choice a model takes the most typical answer every time, and the tracks come out the same. The card makes the choice explicit.

1. For the main axes (tempo, mode and tonic, progression, form, hook carrier, timbre, sound character, space), list a few options that fit the genre and the reference. Rate how typical each one is. Menus: below, craft-harmony-voicing and the genre guide.
2. On some axes, deliberately move away from the most typical option. Genre and reference come first: punk does not get slow for the sake of variety. Leave the axes of the reference core (stage 1) alone and make untypical picks only on secondary axes. In close-to-the-record mode (craft-reference-analysis) make no untypical picks: the card follows the reference's facts, part map and timbre targets. The more precise the request ("in the style of an artist", "like track X"), the fewer untypical picks; an open request ("something in this genre") allows more. If you have a shell, `date +%s` modulo the number of options gives an honest pick from the tail.
3. Write the card briefly: tempo, mode, progression per section, form and length (seconds = bars × 240 / BPM), parts (role → sound → how it differs from the preset), signature sound, sound character, space, a couple of FX moments, one memorable detail (a mode change, a hook where nobody expects it, silence before the drop).
4. Show the card to the user in 6–10 lines. Call `set_tempo` and `set_scale`, and name the tracks (`rename`, `add_track` with `tracks` for several). Store the card with `set_project_info`: genre, references, and the card as `brief`.

Check yourself: does the card show how this track differs from the "default track" (craft-avoid-typical)? Is it close to the reference? Is every core item in the card, as a main part rather than a detail? Would a fan of the artist recognise the track from the card?

A tempo inside the range is also a choice: slower feels heavier and dreamier, faster more energetic.

## What carries the hook

| Genre | Carrier options | Hook rhythm |
|---|---|---|
| House, garage | chord stab, organ bass, pluck, vocal chop (Vowel pad) | offbeats and syncopation on steps 3, 6, 10, 14 |
| Techno | a sequence of 1–3 notes, filter movement, a stab with delay | sixteenths with accents, no melody |
| Trance | supersaw lead or arp, gated pad | sixteenths in groups of 3+3+2 |
| DnB, liquid | pad and bass line; in liquid, keys or a lead | long notes over a fast break |
| Dubstep, riddim | the bass itself (wobble, growl) | a 2-bar bass phrase |
| Trap, hip-hop | bell, pluck, flute, choir, pizzicato | 3–5 notes per bar, many rests |
| Lo-fi | keys, nylon guitar, kalimba | 2–4 notes, laid back |
| Synthwave | lead, bass arp, brass stab | lead in long notes, bass in eighths |
| Pop-punk, rock | guitar riff, lead guitar, organ double | eighths, power chords |
| Metal, nu-metal | rhythm guitar riff on the low string (in a band with vocals the hook is the voice) | chug syncopations with the kick, rests as "holes", hits on bII and the tritone |
| Funk | bass, Clav | sixteenths with ghosts |
| Pop, future bass | "voice-like" lead, pluck, bell | syllabic eighths with pickups |
| Ambient | texture, pad, bell | one long phrase |

A synth lead is only one of the options. A hook in the bass or in a stab is a common "rule break" for the card.

## Sound character and space

Character is one value for the whole track. It holds the track together and sets it apart from other tracks.

| Character | Synth | Effects |
|---|---|---|
| analog warmth | `fModel` Ladder, `oscPhase` Free, light detune | sat Tube at `mix` 0.3–0.5, master EQ `character` Warm |
| digital clarity | FM, wavetable, SVF, no drive | clean reverb, pingpong delay |
| lo-fi | `warp` Quantize, Crush macro, dark filter | sat Tube, EQ High cut 6–10 kHz on the music bus |
| aggression | `driveMode` Fold or Hard, `fModel` Diode | sat Hard, Crush bus |

Space is the other half of the character: craft-space-depth.

## Defining timbre

The "defining timbre" tells the listener the genre. Pick it first. It is often the bass or the drums rather than the lead.

## Related

`craft-avoid-typical`, `craft-harmony-voicing`, `craft-artist-core`, `craft-space-depth`
