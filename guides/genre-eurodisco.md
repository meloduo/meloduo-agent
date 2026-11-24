---
name: genre-eurodisco
description: Euro-disco and Italo of the mid 1980s to early 1990s: four on the floor, octave bass, minor chorus hooks with a high answer, bells and synth brass, key change and fade-out.
---

# Euro-disco and Italo

Genre numbers are orientation; the reference wins. Look the named track up first (craft-reference-analysis): a song of this genre is recognised by its chorus, its part map and its 1980s timbres, so build those from the found facts.

## When

Use it for Euro-disco, Italo-disco and late-1980s Euro-pop (the Bohlen-produced sound, the Italian and German dance-pop of 1984–1992). Synthwave is its modern relative: slower, darker, with long reverbs and no song form. Euro-disco is a pop song with a dance beat.

## Tempo and drums

| Genre | Tempo, centre (range) | Kick | Snare / clap | Hats and other |
|---|---|---|---|---|
| Euro-disco | 120 (112–132) | 0, 4, 8, 12 | snare and clap together on 4, 12 | closed hats in 16ths, open hat on the offbeats 2, 6, 10, 14 |

- A drum machine grid, tight: kick on every beat, snare with a clap layered on 2 and 4.
- Tom fills (high to low) and a snare roll in 16ths in the last bar before a chorus.
- A tambourine or shaker in 8ths or 16ths in the chorus only.

## Swing and groove

- Straight: `swing` 0. The drive is the bass, not the drums.
- The bass carries the groove: 8ths jumping root – octave – root – octave (role-mid-bass), sometimes 16ths. It follows the chord root, never a long sub note.

## Harmony

- Minor keys. Loops: i–VI–III–VII, i–iv–VII–III, i–VI–VII–i; the pre-chorus often climbs through iv–v or VI–VII to a major V before the chorus.
- One chord per bar; the chorus often moves twice as fast as the verse.
- The last chorus or the last two repeat a semitone or a whole tone higher (`transpose_notes` on the chorus patterns' clones; the drums do not move).

## Melody defaults

| Genre | Scale | Notes per bar | Range | Register | Phrase form |
|---|---|---|---|---|---|
| Chorus hook | natural minor, the 7th raised at cadences | 4–8, 8ths with a repeated-note pickup | 8–12 | 62–79 | call (low lead voice) and answer (high voice an octave up) over 4 bars |
| Instrumental riff | the chorus melody or a bell/brass line in its pauses | 6–10 | 8–12 | 72–91 | A A' |

- The signature is call and answer: a low male lead sings a line, a high falsetto choir answers or doubles it an octave up. Without vocals: a warm lead in the low octave and a bright lead or a vowel pad an octave up answering it.
- The instrumental hook between choruses is the chorus melody played by a bell, synth brass or a sharp lead. With a named reference, write your own line in its rhythm and register (craft-reference-analysis, "Two modes").

## Form

- Intro 8 with the instrumental hook, Verse 16, Pre-chorus 4–8, Chorus 8–16, Instrumental hook 8, Verse 16, Pre-chorus, Chorus, Break or Bridge 8, Chorus ×2 (the last a key up), fade-out on the repeating chorus. 3:30–4:30.
- The chorus comes early (by about 1:00) and repeats a lot: it is the song.
- A fade-out ending: repeat the last chorus and lower the master `volume` over 8–16 bars (craft-transitions, Outro).

## Palette

| Genre | Defining timbre | Roles usually present | Roles usually absent |
|---|---|---|---|
| Euro-disco | octave bass in 8ths, bell and synth brass hooks, bright strings | drum machine with clap, octave bass, string pad, bell or marimba riff, brass stabs, low and high hook voices | 808 sub, long ambient pads, trap hats, distorted guitar |

## Sound candidates

| Genre | Role | Candidates | Edit for character |
|---|---|---|---|
| Euro-disco | bass | Pulse bass, Synthwave bass; Ladder bass | short `decay`, 8ths with octave jumps, ducked 4–6 dB |
| | bell, riff | Glass bell, Music box; a marimba-like pluck | bright, a little delay 1/8D |
| | brass | Synthwave brass, Jump brass, Brass lead | short stabs on the offbeats or the "and" of 4 |
| | strings, pad | Analog strings, Chorus pad | moving with the chords, not a drone |
| | hook voices | low: Synthwave lead, Vibrato lead; high: Synthpop square, Vowel pad an octave up | the high voice brighter and wider |
| | drums | 909 kit with a clap; a gated snare | snare and clap layered |

Role guides: role-mid-bass, role-lead, role-pluck-arp, role-stab-chords, role-vocal-substitute.

## FX signature

| Genre | Signature | How |
|---|---|---|
| Euro-disco | bright and wide, short gated snare | gated reverb on the snare and claps (`gate` On, `color` 1980s), a plate or Hall 1.5–2.5 s on the leads and bells, delay 1/8D on the bell |

- Brighter than synthwave: a High shelf on the music bus rather than a High cut; hats and tambourine audible.
- Less reverb than synthwave on the bass and the drums; the mix is dry and punchy under bright tops.

## Reference core

1. Four on the floor with snare and clap, a drum machine, straight.
2. The octave bass in 8ths.
3. A minor chorus hook as call and answer (low voice, high voice an octave up), repeated many times.
4. An instrumental hook on bell, brass or lead between the choruses.
5. A key change for the last chorus and a fade-out.

## Beginner mistakes

- Writing synthwave: slow tempo, long reverbs, a drone pad, no song form.
- A sub or 808 bass instead of the bouncing octave bass.
- One hook voice: without the high answer the chorus loses the genre.
- A dark mix: Euro-disco tops are bright.

## Engine limits for this genre

- No vocals: the low and high hook voices are synth leads or a Vowel pad (role-vocal-substitute). Leave room for a vocal if the user may add one (File > Import audio).
- No chorus plugin: unison and `width` on strings and leads (craft-engine-limits).
- No LinnDrum or early Roland samples: the 909 kit with a gated snare is the nearest.

The tempo, harmony and palette rows are estimates from typical records of the style, not measured from sources.

## Related

`genre-synthwave`, `genre-pop`, `role-mid-bass`, `role-vocal-substitute`, `craft-reference-analysis`
