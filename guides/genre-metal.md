---
name: genre-metal
description: Metal and nu-metal numbers: low tuning, a tight wall of high-gain guitars, chug locked to the double kick.
---

# Metal

Genre numbers are orientation; the reference wins. Swing values: craft-groove-swing.

## When

Use it for classic metal, thrash, nu-metal, metalcore and djent: low-tuned high-gain guitars locked to the kick. Djent and nu-metal lean on groove and half time; thrash on speed.

## Tempo and drums

| Genre | Tempo, centre (range) | Kick | Snare / clap | Hats and other |
|---|---|---|---|---|
| Metal, nu-metal | groove 90–110, thrash 160–200 | double kick in sixteenths in unison with the chug; in a blast every eighth or sixteenth | 4, 12; in a blast every eighth against the kick; breakdown on 8 (half time) | crash, china or ride in quarters; hat closed in the verse |

The metal tempo and drum row is an estimate, not from sources.

- Djent usually sits at 110–150 with a half-time snare on 8.
- Gallop: an eighth and two sixteenths per beat, steps 0, 2, 3, 4, 6, 7, 8, 10, 11, 12, 14, 15. Kick and guitar play it together.
- Djent: the chug runs in groups of 5 or 7 sixteenths over a steady 4/4 snare; the kick doubles the guitar rhythm exactly.

## Swing and groove

- Straight: `swing` 0 (craft-groove-swing).
- Machine-gun kicks: vary the double kick velocity a little (`velocityPct` 5–8 in `humanize_notes`), keep `timingMs` at 0.

## Harmony

- Phrygian, aeolian, locrian, harmonic minor. Tritones and chromatic steps on the open low string.
- Riffs on the lowest string with power chords on accents; chords change rarely, the riff carries the harmony.
- Djent often puts a clean pad or maj7 chords above the chugs for contrast.

## Form

- The Metal form in stage-form: Intro riff 4–8, Verse 16, Pre 4–8, Chorus 8, Riff, Verse, Chorus, Breakdown 8–16 (half time, the heaviest moment), Solo 8, Chorus, Outro 4.
- The breakdown drops to half time with the snare on 8 and open chugs.

## Palette

| Genre | Defining timbre | Roles usually present | Roles usually absent |
|---|---|---|---|
| Metal, nu-metal | a wall of high-gain guitars in low tuning, double kick, a tight clicky kit | rhythm guitar ×2–4 (doubles), bass in unison with the riff, kit with double kick, optional lead or guitar squeal; samples and scratches are details | a pad up front, arp, soft synths as the carrier |

## Sound candidates

| Genre | Role | Candidates | Edit for character |
|---|---|---|---|
| Metal, nu-metal | guitars | Palm-mute chug, Crunch rhythm with high gain; Lead for squeals | amp `gain` 30–34, `mid` down or flat, 4x12 cabinet; `mute` 0.3–0.5 (the preset 0.75 is dull); tuning: the wall below |
| | bass | guitar Pick bass with amp Bass grit, in unison with the riff | high attack |
| | drums | Acoustic Rock kit or Metal voices | kick with strong `click`, a dense snare, parallel bus distortion |

Role guides: role-rhythm-guitar, role-lead-guitar, role-bass-guitar, role-kick.

## The wall

In metal and heavy rock a tight wall matters more than anything else:
- **Tuning.** Low tuning (Drop C, Drop B) is the core of the genre. The Electric range starts at note 40 (E2) and plays nothing lower. Workaround: `set_main_pitch` down for the whole project, and write the notes higher by the same interval; tell the user that the project key and the sounding key differ. `set_main_pitch` moves the synth, guitar and 808 but not drums or the sampler: a sampled part then sounds at the written pitch.
- **Chug.** `mute` 0.3–0.5: the preset's 0.75 sounds dull and quiet. The chug locks with the kick in rhythm as well as in notes.
- **Tightness.** amp `gain` 30–34, Low cut on the guitars at 80–120 Hz (leave the low end to the bass and kick), do not push `mid`: in metal it is often flat or slightly down, with a brighter top.
- **Wall.** 2–4 rhythm guitars: one pair of doubles wide (±0.8–1), a second pair closer to the centre with another cabinet or `pickPos`. All play the same riff note for note.
- **Drums.** A kick with a strong `click` so the double pedal reads; a dense snare; parallel distortion on the drum bus.
- Signs in the stem: the wall has plenty of mid and highMid and little bass; the kick has its click in highMid.

## FX and mix signature

- Short reverbs only: a Room on the drums, almost dry guitars.
- The bass in two layers: a clean low channel and a distorted mid channel (amp or sat) playing the same notes.
- Kick click around 3–5 kHz with `click` and an EQ Bell, so it reads against the wall.

## Reference core

1. Low tuning and a tight wall of doubled high-gain guitars.
2. Kick and chug locked note for note.
3. A breakdown in half time.
4. A clicky, dense kit with double kick.

## Beginner mistakes

- Too much gain: fizz and no note definition.
- Guitars full of low end that fight the bass.
- Kick and guitar rhythms that do not match.
- Flat drum velocities that sound like a machine gun.

## Engine limits for this genre

- Tightness: the rig Metal (gate Tight, drive Tighten, amp Modern metal; tool-guitar-rig), and writing: end chug notes short, leave real rests.
- No 7- or 8-string range: use `set_main_pitch` (the wall above).
- No time signature change: write odd groupings in 4/4 (craft-engine-limits).

## Related

`role-rhythm-guitar`, `tool-guitar`, `stage-track-card`, `craft-groove-swing`
