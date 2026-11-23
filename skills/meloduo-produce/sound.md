# Sound: synth, guitars, drums

Contents:
1. How to set a sound
2. Synth voice and hook timbre
3. Signature sound
4. Movement: matrix, LFO, arp, tables
5. Archetypes: macros and movement
6. Guitars
7. Drums

## 1. How to set a sound

1. `add_channel` synth (guitar, drum) with `preset`. It sets the parameters, the matrix, the macro names and the plugin chain in one edit. Presets are matched in loudness.
2. Macros: `set_synth` `macros` by name. 0 is as designed, 1 is all the way toward the name, −1 the opposite way (Brightness −0.5 is darker than the preset). Set them by mood rather than leaving them at 0.
3. Parameter edits come after the macros. All parameters and ranges: `get_synth`.
4. Write a choice parameter by name: `"arpRate":"1/16"`, `"lfoSync":"1/8"`, for delay `"sync":"1/8D"`. A macro can be named in `set_automation` (`"param":"Brightness"`).
5. The 808 is its own voice: `add_channel` with `voice` "808" and `preset`, edits with `set_808`, parameters with `get_808`; recipe: `meloduo-sound-design`, recipes.md, section 1.
6. The user sets up a web instrument (a channel with `instrument`). You write notes to it as usual.

Presets live in folders (Bass, Lead, Pad, Pluck, Keys, Bell, Brass, Strings, Organ, Arp, FX, Texture) with genre subfolders. Candidates by genre: palette.md.

## 2. Synth voice and hook timbre

- `mode`: Poly (chords; `poly` is how many notes at once), Mono, Legato. Chords in Mono and Legato sound as one note: the tools warn.
- `glide` works in Mono and Legato. In Mono every note glides, even after a rest, which sounds like meowing. In Legato only a note that overlaps the next by at least a step glides. Use Legato for a melody. Mono with glide only when the genre wants it (G-funk, acid).
- A filter envelope `envAmt` above 0.5 quacks on short notes. For a hook in eighths and sixteenths use 0.2–0.4.
- Do not put a pitch envelope (env2 → pitch), a formant filter, vowels or Screech on a melody without a genre reason (dubstep, riddim).
- `oscPhase` Reset starts the oscillators at phase 0 on every note, so a detuned lead meows even without an envelope. Free gives each note its own phase. Leads, pads, strings and organs already use Free. For a lead from an old project set `"oscPhase":"Free"` and `detune` no higher than 4.
- `voicesStolen` in `render_preview`: raise `poly` or shorten the release.
- Unison: `unison` applies to all oscillators; `uniA`, `uniB`, `uniC` set it per oscillator (0 means shared). A supersaw on A (`uniA` 7) with B in the centre (`uniB` 1) gives width without a muddy low end. On a bass, give one voice to the oscillator that holds the low end.

## 3. Signature sound

One part of the track, usually the hook carrier. Make 3+ edits away from the preset and name them in `why`. Other parts can stay close to their presets.

Edits to choose from:
- `warp` and `warpAmt` (Bend, Sync, FM, Quantize);
- another wavetable `table`, or `pos` with a slow LFO;
- another filter model `fModel` (Ladder, Diode, SVF, Comb, Formant) or a second filter `f2Model`;
- a row in the `mods` matrix (section 4);
- an arp with an unusual `arpMode` or `arpRate`;
- `driveMode` (Soft, Hard, Fold) and `drive` to match the track character (palette.md).

Apply the track character to every synth: analog warmth, digital clarity, lo-fi or aggression.

## 4. Movement: matrix, LFO, arp, tables

The `mods` matrix in `set_synth`: amount −1…1 is a share of the target's range; the `range` in the result gives the shift in units. "±" means both ways (LFO, key, random). `render_preview` cannot check wobble speed or slides: its metrics are no shorter than a bar.

| Sound | How |
|---|---|
| Wobble (dubstep, DnB) | Wobble bass or Reese bass; `l2Sync` 1/8 or 1/16, lfo2 → cutoff 0.3–0.5. To change speed, `set_automation` on `l2Sync` with two points close together (4.99 and 5) |
| Zap attack on a bass | `e2Decay` 40–120, env2 → pitch 0.1–0.25. Not on a lead |
| Brighter pluck on strong notes | velocity → cutoff 0.2 |
| Living pad | slow lfo3 (`l3Rate` 0.2) → detune 0.2, random → cutoff 0.05 |
| Trance gate | `l2Shape` square, `l2Sync` 1/16, lfo2 → amp −0.5 |
| Pitch drop at the note end | release → pitch −0.03…−0.08, release 300–800 |
| Drone without repeats | one long note; `l2Free` 1, `l2Rate` 0.03–0.1 → cutoff and detune, a second free LFO at another rate |
| Build-up into the drop | m1 → cutoff 0.4 and m1 → resonance 0.2, then `set_automation` m1 from 0 to 1 |
| Growl (dubstep) | Growl bass or `table` Growl; lfo2 → pos 0.4 at 1/8, lfo2 → cutoff 0.2 |
| Sync lead | Sync lead; env2 → warpAmt 0.4 with `e2Decay` 300: a whistle at the note start |
| FM bell, DX piano | FM bell; env2 → warpAmt 0.5: a brighter strike, a cleaner tail |
| Vocal pad | Vowel pad; slow lfo3 → pos 0.3 changes the vowel |
| Lo-fi, 8-bit | `warp` Quantize, `warpAmt` 0.6–0.9 |
| Lo-fi wow | a fast, light LFO → pitch and a second slower, deeper one |
| Acid 303 | Diode acid: resonance 10–16, `envAmt` 3–4, Legato with slides |
| Fat analog bass | Moog bass (Ladder); resonance no higher than 8 |
| Talking bass | Talking bass (Formant); lfo2 → fVowel 0.6–0.8 at 1/8–1/4 |
| Plucked string, metal | Comb pluck (Comb, `keytrack` 1, `cutoff` 261.63); resonance sets the ring length |
| Phaser pad | Notch pad (SVF Notch, a free slow LFO on the filter); `f2Model` HP 150 Hz |
| Two filters | `f2Model`; `fRoute` 0 in series (band), 1 in parallel |
| Fast sweep without steps | any model except Classic |

Arpeggiator: `arp` 1; write chords per bar and it slices them into `arpRate` steps. `arpMode` Chord gives a trance gate. Presets in the Arp folder already have the arp on.

A table from a sample: if the user imported a sound (`samples` in `get_project_state`), `set_synth` `tables` {"A":{"sampleId":"s3"}} turns it into a wavetable. One sustained note works best; the result gives `pitchHz`. env2 or a slow LFO on `pos` "plays" through the timbre.

## 5. Archetypes: macros and movement

Preset candidates: palette.md. This section says what to turn.

| Archetype | Macros | Movement for the genre |
|---|---|---|
| Sub | Grit, Sub | none; release 50–100 ms |
| Reese, DnB | Detune, Brightness | slow lfo2 → detune or cutoff; neuro: lfo2 1/16 Random → pos |
| Acid | Brightness, Resonance, Grit | Legato: a long note slides into the next; velocity → envAmt accents are already in the preset |
| Dubstep | Position or Vowel, Grit | lfo2 at 1/8 or 1/16; speed via `set_automation` on `l2Sync` in time |
| House, garage | Position, Brightness | short notes between the kicks |
| Synthwave | Brightness, Width | bass in eighths; there is no chorus, Width gives the width |
| Funk | Snap, Resonance | Legato slides in Rubber bass |
| Trance | Width, Brightness | delay 1/8D in the chain; open toward the drop with Brightness through m1 |
| Future bass | Motion, Width | duck from the kick on the chords |
| Hip-hop, trap | Brightness, Motion | G-funk: Mono glide 140 and vibrato |
| Lo-fi | Crush, Brightness | Subtle tape saturation in the chain |
| Arp | Snap, Brightness | `arp` 1, chords per bar |
| Ambient | Position, Width | free slow LFOs are already in the preset |
| Pluck | Snap, Brightness | A 0, D about 240 ms |
| Pad | Brightness, Width | A from 500 ms, long R |
| Lead | Brightness, Motion | fast A, full S; Legato; `envAmt` 0.2–0.4 |
| Keys | Brightness, Motion | short presets on chords are quieter in LUFS |
| Bells | Warp | tail up to 3 s |
| Brass, strings | Brightness, Width | Brass swell and Slow strings open by themselves |
| Organ | Position, Motion | Jazz organ vibrato is in the preset |
| Riser, downlifter | Brightness | one note over 4–8 bars |
| Impact | Grit, Brightness | one note on beat one of the drop |

## 6. Guitars

`add_channel` guitar with `preset`, edits with `set_guitar`.

| Part | Preset | How to write the notes |
|---|---|---|
| Acoustic strumming | Steel strum, Jangle 12, Uke strum | open chords (G 43 47 50 55 59 67, C 48 52 55 60 64, D 50 57 62 66, Em 40 47 52 55 59 64), strum D-DU-UDU in eighths, upstrokes 15–25 quieter; another pattern via `strum` on the chord notes |
| Fingerpicking | Steel fingerpick, Nylon classical | bass on the beats, top strings between them, length 1–2 beats |
| Bossa, jazz | Nylon bossa, Clean neck | bass on the beats, a 3–4 note chord on the syncopations |
| Funk | Clean funk | a chord on every sixteenth, velocity 110 / 50 / 70 / 50, length 1 step |
| Rock rhythm, chug | Crunch rhythm, Palm-mute chug | 2–3 note power chords (40 47 52); `add_channel` sets the amp itself |
| Bass | Finger bass, Pick bass, Muted bass | one note at a time, 28–55, root on strong beats |
| Banjo, mandolin | Bluegrass banjo, Mandolin | a roll in eighths; mandolin tremolo in sixteenths |

- A guitar chord is notes on one step: the voice spreads them over the strings itself.
- Fix `add_notes` range and fingering warnings right away: revoice the chord or shift `position`.
- A double on another channel diverges by itself; different `position`, `feel` or `pickPos` spread it wider.
- `humanize` is a random chord shift of up to ±15 ms; `feel` is −20…20 ms (below 0 rushes).
- Amp: `gain` crunch 20, lead 30, above 34 aliasing. A 4x12 cabinet gives more low end, 1x12 is brighter, 8x10 is for bass. A bass without an amp is a clean DI; for dirt use amp Bass grit.
- Ranges: guitar 40–84, bass 28–64, banjo 50–89, ukulele 60–84, mandolin 55–96.

## 7. Drums

- `add_kit`: 808, 909, House, Techno, Trap, Hardstyle, Hardcore, DnB, Acoustic Rock, Acoustic Jazz, Latin. It replaces the untouched starter Kick, Snare and Hat. Live genres use Acoustic, electronic genres a genre kit.
- After the kit, change two voices: kick `decay`, a snare from another folder, add conga, shaker, clave or cowbell. Then two house tracks do not share one kit.
- `get_drum` with no arguments lists kits and sounds; with a voice it gives parameters and presets. A preset is `Folder / Name` (`Rock / Dry Punch`).
- Kick, tom, snare and rim come as Acoustic (`engine` 0; the snare has folders Rock, Metal, Jazz, Funk, Pop, Vintage, Piccolo and knobs wires, tension, rimshot) and Electronic (`engine` 1, folders Classic, House, Techno, Trap, Hardstyle, Hardcore, DnB).
- Electronic kick: `hold` and `decay` set the tail length, `drive` and `shape` (Soft, Hard, Fold) the distortion, `mid` a lift at 800 Hz before it. Distorted techno and hardstyle kicks are 10–13 LU louder: start the balance from their fader.
- Hats: openness, Foot pedal, choke 1 (the closed hat cuts the open one). Crash (Crash, Splash, China) and ride (bell, ping, wash) are Acoustic.
- The grid is `grid`: `x... x... x... x...`, accent `X`, ghost `g`, velocity as digits 1–9. Rolls use `unit` 1/32.
- Kit hats at velocity 40–90 sit 15–18 LU below the kick: raise their fader by 3–5 dB.
- Drum parameters cannot be automated.
