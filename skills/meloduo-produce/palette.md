# Palette and track card menus

Steps count from 0: 16 per bar, 0 is beat one, 4 beat two, 8 beat three, 12 beat four. MIDI: C4 = 60.

Contents:
1. The typical AI choice
2. How to use the menus
3. Genres: tempo and drums
4. Modes
5. Progressions
6. What carries the hook
7. Sound character and space
8. Genre palettes
9. Role candidates

## 1. The typical AI choice

This is what a model picks by default. Any item is fine when the genre or the reference asks for it; without a reason, consider something else:
- A minor or C major; minor by default;
- I–V–vi–IV or vi–IV–I–V; one chord per bar in every section;
- a tempo in the middle of the genre range (120, 124, 128, 140);
- four parts: drums, bass, chords, lead;
- a 64-bar form of 8-bar sections;
- a falling 3-2-1 hook in eighths;
- the first preset in the folder: Sub bass, Warm pad, Bright lead, Saw lead;
- a synth lead as the hook carrier in any genre;
- one reverb on everything, no delay and no saturation.

## 2. How to use the menus

1. For each axis take 4–5 rows that fit the genre and the reference.
2. Give each a "how typical" score (they sum to 1). Rows from section 1 get the highest scores.
3. On some axes, deliberately move away from the most typical row. If you have a shell, `date +%s` modulo the number of rows gives an honest pick from the tail. Reference and genre come first: do not leave them for variety.
4. Untypical does not mean foreign to the genre. House in 4/4 stays house. Untypical is an F# tonic instead of A, dorian instead of minor, 121 BPM instead of 124.

Axes: tempo, mode and tonic, progression, form (arrangement.md), hook carrier, hook timbre, sound character, space.

## 3. Genres: tempo and drums

| Genre | Tempo, centre (range) | Kick | Snare / clap | Hats and other |
|---|---|---|---|---|
| House | 124 (118–130) | 0, 4, 8, 12 | clap 4, 12 | closed 2, 6, 10, 14; open every other |
| Techno | 130 (125–145) | 0, 4, 8, 12 | rim or tom 4, 12, optional | every sixteenth quiet, accents 2, 6, 10, 14 |
| Drum and bass | 174 (160–180) | 0, 9 | 4, 12; ghosts 2, 6, 10, 14 | closed every sixteenth |
| Dubstep, half-time | 140 | 0 | 8 | sparse |
| Trap, half-time | 140 (130–160) | follows the 808 bass | 8 | eighths and sixteenths with a velocity ramp, rolls with `unit` 1/32 |
| Boom bap | 90 (85–95) | 0, 7 or 8 | 4, 12 | eighths |
| Reggaeton (dembow) | 95 (90–100) | 0, 4, 8, 12 | 3, 6, 11, 14 (or 3, 6, 9, 11, 14) | shaker in sixteenths, a fill every 4 bars |
| Lo-fi hip-hop | 80 (70–90) | 0, 10 | 4, 12 | eighths, soft, swing 50–67 |
| Synthwave | 110 (95–135) | 0, 4, 8, 12 or 0, 8 | 4, 12 | eighths |
| Pop-punk, rock | 160 (140–190) or 100–130 | 0, 8 and syncopations | 4, 12 | eighths on hat or ride |
| Metal, nu-metal | groove 90–110, thrash 160–200 | double kick in sixteenths in unison with the chug; in a blast every eighth or sixteenth | 4, 12; in a blast every eighth against the kick; breakdown on 8 (half time) | crash, china or ride in quarters; hat closed in the verse |

The lo-fi, synthwave, rock and metal rows are estimates, not from sources. For pop, UK garage, afro house and cumbia take the nearest genre and say so.

A tempo inside the range is also a choice: slower feels heavier and dreamier, faster more energetic.

## 4. Modes (`set_scale`)

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

## 5. Progressions

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

## 6. What carries the hook

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

## 7. Sound character and space

Character is one value for the whole track. It holds the track together and sets it apart from other tracks.

| Character | Synth | Effects |
|---|---|---|
| analog warmth | `fModel` Ladder, `oscPhase` Free, light detune | sat Tube at `mix` 30–50 %, master EQ `character` Warm |
| digital clarity | FM, wavetable, SVF, no drive | clean reverb, pingpong delay |
| lo-fi | `warp` Quantize, Crush macro, dark filter | sat Tube, EQ High cut 6–10 kHz on the music bus |
| aggression | `driveMode` Fold or Hard, `fModel` Diode | sat Hard, Crush bus |

Space is one reverb character per track:
- dry room (decay 0.6–1 s): rock, trap, funk;
- hall (1.8–3 s): pop, house, trance;
- dark long tail (3–5 s, high `lowcut`): synthwave, ambient, techno rumble;
- echo instead of reverb (delay 1/8D or dub 300–700 ms): dub techno, lo-fi.

## 8. Genre palettes

The "defining timbre" tells the listener the genre. Pick it first. It is often the bass or the drums rather than the lead.

| Genre | Defining timbre | Roles usually present | Roles usually absent |
|---|---|---|---|
| House, deep house | organ or chord stab, pluck bass, 909 | bass (one), stab or keys, percussion (shaker, conga, rim), pad, vocal chop | supersaw lead, long arp |
| Techno | kick and rumble, acid or saw sequence | kick and rumble, bass sequence, one-chord stab, percussion, texture | progression, melody, pad (except a dark drone) |
| Trance, EDM | supersaw, offbeat bass | sub and offbeat bass, arp or gated pad, lead, pluck, pad, risers | live keys, guitar |
| Trap | 808 with glide, sparse bell or flute | 808, melody (bell, flute, pluck, choir), dark pad, hat rolls | mid bass, dense chords |
| Boom bap, lo-fi | dusty keys, soft swung drums | keys, sub or live bass, vinyl, a 2–4 note melody, soft pad | supersaw, bright lead |
| Synthwave | poly pad, saw bass in eighths | bass in eighths, Juno pad, lead with vibrato, sixteenth arp, brass stab | sub only, trap hats |
| Pop | "voice-like" lead or vocal, piano or guitar | pop bass, keys or guitar, pad, pluck hook, lead | heavy texture, long arp |
| Pop-punk, rock | distorted power chords, live drums | rhythm guitar ×2, lead guitar, picked bass, live kit | pad (or quiet), arp |
| Metal, nu-metal | a wall of high-gain guitars in low tuning, double kick, a tight clicky kit | rhythm guitar ×2–4 (doubles), bass in unison with the riff, kit with double kick, optional lead or guitar squeal; samples and scratches are details | a pad up front, arp, soft synths as the carrier |
| Ambient | a living pad or drone | pad or drone ×1–2, texture, sparse bell, optional sub | drums (or sparse), lead |
| DnB | break and reese or sub | sub, reese or neuro, pad, keys, lead, ride and shaker | anything on a straight kick |

## 9. Role candidates

Take 2–3 candidates and choose by mood words: dark → Ladder or Diode, lower cutoff, Dark pad; bright → open filter, Glass, FM; vintage → Juno, Ladder, tape; modern → wavetable, Fold, Growl. The full list: `get_synth` (presets), `get_drum`.

| Genre | Role | Candidates | Edit for character |
|---|---|---|---|
| House | bass | Bass/House Organ bass, Deep house bass, Garage bass; Pluck bass | Position macro, Snap |
| | stab, keys | Organ/House House organ, Combo organ; Keys Electric piano, Wurly; Brass stab; Pluck/House House pluck | chord stack: osc B/C at +7/+10 |
| | pad, voice | Pad Choir pad, Vowel pad, Breathing pad | vowel position |
| | drums | House or 909 kit; conga, shaker, rim, clave, cowbell | kick `decay`, snare from Classic |
| Techno | bass, sequence | Bass/Acid Techno stab bass, Diode acid, Square acid; Bass/Electro Rumble bass, FM bass; Lead/Techno Hypnotic sequence | slow Brightness automation over 16–32 bars |
| | stab | Lead/Techno Detroit lead; Brass stab; Keys FM piano (dub chord with delay) | Resonance, 3/16 delay |
| | texture | Texture Metallic, Dark drone, Evolving; FX Noise sweep, Wind | free-running LFO |
| | drums | Techno kit; Techno/Rumble kick; ride, rim, clap | rumble: kick → a bus with a long dark reverb |
| Trance, EDM | bass | Bass Fat saw bass, Sub bass, Pluck bass (offbeat) | — |
| | lead, pluck, arp | Lead/Trance Supersaw lead, Hybrid supersaw, Trance lead; Pluck/Trance Supersaw pluck; Arp/Trance Trance arp, Trance gate; Lead/Hardstyle Euphoric lead | `uniA` 7 / `uniB` 1, Width |
| | pad | Pad Supersaw pad, Sweep pad; Strings String pad | gate lfo2 → amp |
| Trap | 808 | `voice` "808": Trap, Long trap, Drill slide; Distorted or Rage for dirt | `presence` 0.5–0.8, `glide` on overlapping notes |
| | melody | Bell/Hip-hop Trap bell; Pluck/Hip-hop Trap pluck; Lead/Hip-hop Trap flute; Bell Music box; Pad Choir pad; Strings Pizzicato; Lead/Phonk Phonk cowbell | lower cutoff, dark reverb |
| | drums | Trap kit; Trap/Roll hats | 1/32 rolls |
| Boom bap, lo-fi | keys | Keys/Lo-fi Lo-fi keys; Keys Electric piano, Wurly, Vibraphone, Soft keys | Crush macro, sat Tube, LFO on pitch (wow) |
| | bass | Bass Clean sub; guitar Finger bass, Muted bass | humanize |
| | melody | Lead/Lo-fi Lo-fi sine lead; Pluck Lo-fi pluck, Kalimba, Harp pluck; guitar Nylon classical, Nylon bossa | — |
| | texture | Texture Vinyl air, Bit crush texture | — |
| | drums | Acoustic Jazz kit (brushes) or a soft 808 | Jazz snare |
| Synthwave | bass | Bass/Synthwave Synthwave bass, Juno bass; Bass Moog bass | eighths with octave jumps |
| | pad | Pad Juno pad, PWM pad, Warm analog pad; Strings Analog strings | slow LFO on pitch and filter |
| | lead | Lead/Synthwave Synthwave lead; Lead/Synthpop Synthpop square, Brass lead; Lead Vibrato lead; Lead/Rock Prog mini lead | `oscPhase` Free, vibrato |
| | arp, brass | Arp Sequence arp, Dotted arp; Brass/Synthwave Synthwave brass, Jump brass | — |
| | drums | 909 or 808 kit; acoustic snare and a long hall | — |
| Pop | bass | Bass/Pop Pop synth bass; guitar Finger bass | — |
| | chords | Keys Synth piano, Electric piano; guitar Steel strum, Nylon, Jangle 12; Pad Warm pad | — |
| | hook | Lead/Pop Vocal lead, Pop pluck lead; Pluck/Tropical Tropical pluck; Pluck/Future bass Future pluck; Bell Glass bell | — |
| Pop-punk, rock | guitars | Crunch rhythm, Palm-mute chug (double with another `position` and `feel`), Lead | amp `gain` 20–30, 4x12 cabinet |
| | bass | guitar Pick bass with amp Bass grit | — |
| | drums | Acoustic Rock kit | crash and ride choice |
| | colour | Organ Drawbar organ; Lead/Rock Synth guitar lead | — |
| Metal, nu-metal | guitars | Palm-mute chug, Crunch rhythm with high gain; Lead for squeals | amp `gain` 30–34, `mid` down or flat, 4x12 cabinet; `mute` 0.3–0.5 (the preset 0.75 is dull); tuning: sound-design recipes.md |
| | bass | guitar Pick bass with amp Bass grit, in unison with the riff | high attack |
| | drums | Acoustic Rock kit or Metal voices | kick with strong `click`, a dense snare, parallel bus distortion |
| Ambient | pad, drone | Pad/Ambient Ambient drone, Shimmer pad; Pad Cinematic pad, Glass pad, Breathing pad, Dark pad | free slow LFOs |
| | texture | Texture Evolving, Shimmer, Metallic, Vinyl air; FX Wind | — |
| | melody | Bell Glass bell, Crystal bell, Gamelan, Tubular bell; Lead/Ambient Glass lead; Keys Vibraphone | long reverb |
| DnB | sub, bass | Bass/DnB Reese bass, Sub reese, Neuro bass, Hoover | Detune macro, slow LFO |
| | liquid | Pad Warm pad; Strings Slow strings; Keys Electric piano; Lead/DnB Liquid lead | — |
| | drums | DnB kit (Roller, Shuffle, Tight) | ghosts |

FX for every genre: FX Riser, Downlifter, Noise sweep, Impact boom.

Check preset names with `get_synth`: the list grows, and a misspelled name returns an error with the valid ones.
