---
name: craft-harmony-voicing
description: Chords that fit the mood: modes, progressions, borrowed chords, harmonic rhythm and chord colour.
---

# Harmony

## Modes (`set_scale`)

| Mood | Mode | Where it is heard |
|---|---|---|
| bright, happy | `major`, `major_pentatonic` | pop, funk, country, pop-punk |
| dreamy, floating | `lydian` (raised 4th) | film, ambient, synthwave |
| drive, rock | `mixolydian` (major VII) | rock, pop-punk, organ house |
| warm, sad with hope | `dorian` (major 6th) | house, funk, lo-fi, synthwave, neo-soul |
| sad, serious | `minor` | trance, DnB, pop ballad |
| dark, tense | `phrygian` (flat II) | techno, trap, dark, metal |
| drama, "eastern" | `harmonic_minor` (leading tone) | trance, hardstyle, film |
| bluesy, dirty | `blues`, `minor_pentatonic` | rock, hip-hop, G-funk |

Any of the 12 tonics works. With a high tonic (A#–B) the bass root goes an octave lower, into 28–43.

## Progressions

Roman numerals: upper case is major, lower case minor, b is a semitone below the major degree. Examples from C or A.

| Character | Progression | Genres |
|---|---|---|
| pop anthem | I–V–vi–IV, vi–IV–I–V (C G Am F) | pop, EDM, pop-punk; the typical AI choice |
| minor epic | i–VI–III–VII (Am F C G) | synthwave, trance |
| dark march | i–VII–VI–VII (Am G F G) | rock, trance, film |
| drama with leading tone | i–iv–V–i (Am Dm E Am) | trance, hardstyle |
| dorian sway | i7–IV7 (Am7 D7), two chords over 4 bars | house, funk, lo-fi |
| phrygian growl | i–bII, i–bII–VII–i (Am Bb G Am) | techno, trap, metal |
| mixolydian rock | I–bVII–IV–I (A G D A) | rock, pop-punk, house |
| jazz circle | ii7–V7–Imaj7, IVmaj7–iii7–vi7 | lo-fi, neo-soul, hip-hop |
| bright longing | I–iii–IV–iv (C Em F Fm) | pop, synthwave, indie |
| epic major | I–bVI–bVII–I (C Ab Bb C) | film, rock, hardstyle |
| post-punk swing | I–IV–vi–V, IV–I–V–vi | pop-punk, indie |
| minor plagal | i–iv–i–VI (Am Dm Am F) | lo-fi, trap, R&B |
| pedal | one bass note under changing chords (Am, F/A, G/A) | techno, trance, ambient |
| one chord | i for the whole verse; rhythm and timbre give the movement | techno, house, trap, phonk |

A borrowed chord brings notes outside the mode: the `add_notes` warning is expected, name the chord in `why`.

Harmonic rhythm is a separate choice. In pop-punk and rock it is often the same in every section, and the contrast comes from the guitar rhythm and density. Options:
- verse one chord per 2 bars, chorus one chord per bar;
- the same chords in the chorus, in another rhythm (stabs instead of a pad);
- the pre-chorus lands on a chord the verse did not have;
- at least one section has different harmony (bridge, breakdown).

Chord colour: house uses sevenths and stabs; lo-fi sevenths and ninths; synthwave minor add9.

## Related

`stage-track-card`, `stage-groove-harmony`, `tool-notation-lines`
