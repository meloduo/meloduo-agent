---
name: tool-drums
description: Drum channels and kits: kits, Acoustic and Electronic engines, deep voice parameters, choke, velocity timbre.
---

# Drums

- `add_kit`: 808, 909, House, Techno, Trap, Hardstyle, Hardcore, DnB, Acoustic Rock, Acoustic Jazz, Latin. It replaces the untouched starter Kick, Snare and Hat. Live genres use Acoustic, electronic genres a genre kit.
- After the kit, change two voices: kick `decay`, a snare from another folder, add conga, shaker, clave or cowbell. Then two house tracks do not share one kit.
- `get_drum` with no arguments lists kits and sounds; with a voice it gives parameters and presets. A preset is `Folder / Name` (`Rock / Dry Punch`).
- Kick, tom, snare and rim come as Acoustic (`engine` 0; the snare has folders Rock, Metal, Jazz, Funk, Pop, Vintage, Piccolo and knobs wires, tension, rimshot) and Electronic (`engine` 1, folders Classic, House, Techno, Trap, Hardstyle, Hardcore, DnB).
- Electronic kick: `hold` and `decay` set the tail length, `drive` and `shape` (Soft, Hard, Fold) the distortion, `mid` a lift at 800 Hz before it. Distorted techno and hardstyle kicks are 10–13 LU louder: start the balance from their fader.

- Drum parameters cannot be automated.

- After `add_kit`, change a couple of voices so the kit is your own: kick `decay` and `tune` (Acoustic) or `pitch` (Electronic), a snare from another folder, kick `click`, snare `wires` and `tension`.

- Signs: kick has a bass share and a click in highMid; snare mid and highMid; hats almost no low end.

## Deep knobs

Each voice has its own knobs per engine; `get_drum` with the voice lists them with ranges. Recipes per role: role-kick, role-snare-clap, role-hats-cymbals, role-percussion.

- Velocity on an Acoustic voice changes the timbre (a harder hit is brighter), not only the level.
- A drum ignores note pitch: a tuned kick is a knob (`pitch` or `tune`), not a note.
- Toms (Acoustic) take `stick` Stick, Mallet or Rods: Mallet toms are a cinematic drum.
- The note pitch does not tune a drum. A high-to-low tom fill needs two or three tom channels tuned apart (high, mid, floor).

## Related

`role-kick`, `role-snare-clap`, `role-hats-cymbals`, `craft-drum-programming`
