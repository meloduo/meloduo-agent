---
name: genre-lofi
description: Lo-fi hip-hop numbers: slow swung soft drums, jazzy keys, warmth and a dark top.
---

# Lo-fi hip-hop

Genre numbers are orientation; the reference wins. Swing values: craft-groove-swing.

## When

Slow, soft, dusty instrumental hip-hop for study and relaxing: a jazzy loop, swung drums, deliberate wear. Usually without vocals.

## Tempo and drums

| Genre | Tempo, centre (range) | Kick | Snare / clap | Hats and other |
|---|---|---|---|---|
| Lo-fi hip-hop | 80 (70–90) | 0, 10 | 4, 12 | eighths, soft, `swing` 20–48 |

The lo-fi tempo and drum row is an estimate, not from sources. Preset candidates: genre-boom-bap.

- Most lo-fi sits at 70–85 BPM; 60–90 is the full range.
- A kick variant: 0, 7, 9. The snare is soft, often a rim or a brush (Acoustic Jazz kit, `stick` Brush).
- A shaker in 16ths with clear swing sits well over eighth hats.
- A lazy snare: 10–30 ms late, that is `+1t` to `+4t` in a `line` at 80 BPM (craft-groove-swing).

## Swing and groove

- The lo-fi row in craft-groove-swing: `swing` 20–48 on hats, shaker and keys, the same value on all of them.
- Some lo-fi is almost straight with fixed velocity for a mechanical feel; both work. Too much swing sounds drunk.
- A soft Acoustic snare is darker; velocity changes its tone.
- Keys: `humanize_notes` with `timingMs` 5–10.

## Harmony

- Dorian and minor keys with 7th and 9th chords.
- Typical loops: ii–V–I, IVmaj7–iii7–vi7, minor 9 chords.
- A 2–4 bar loop; voicings in craft-harmony-voicing.

## Melody defaults

| Genre | Scale | Notes per bar | Range | Register | Phrase form |
|---|---|---|---|---|---|
| Lo-fi | dorian, sevenths and ninths | 2–5, lazy lag | 5–10 | 60–79 | a sparse 8-bar loop |

## Form

- The Loop track form: A 16, A' 16, B 8, A'' 16, outro 8 (stage-form).
- 2–3 minutes in 8-bar blocks. Change one small thing per block: a drum drop-out, a filter, a new melody fragment.

## Palette

| Genre | Defining timbre | Roles usually present | Roles usually absent |
|---|---|---|---|
| Boom bap, lo-fi | dusty keys, soft swung drums | keys, sub or live bass, vinyl, a 2–4 note melody, soft pad | supersaw, bright lead |

## Roles

| Role | Candidates | Key numbers | Guide |
|---|---|---|---|
| keys | Keys/Lo-fi Lo-fi keys, Electric piano; guitar Nylon | the loudest melodic part, warm | role-keys |
| bass | Bass Clean sub; guitar Muted bass | quiet, muted, no hyped sub | role-sub-bass |
| melody | Lead/Lo-fi Lo-fi sine lead; Pluck Kalimba | sparse, behind the beat | role-lead |
| pad | Pad Lo-fi pad | soft, under the keys | role-pad |
| texture | Texture Vinyl air | low, constant | role-percussion |
| drums | Acoustic Jazz kit | soft, swung | role-snare-clap |

## FX signature

| Genre | Signature | How |
|---|---|---|
| Lo-fi | warmth and a dark top | sat Tube on keys and drums; High cut 6–10 kHz and Low cut 100–150 Hz on the music bus; a short dark reverb; wow LFO on synths |

- A narrow, warm mix; little sub.
- Master at −14 LUFS; lo-fi rarely needs more.

## Reference core

- jazzy 7th and 9th chords on soft keys;
- soft, swung drums;
- warmth and a dark top;
- vinyl texture;
- a slow tempo.

## Beginner mistakes

- Too much wear: mud without clarity.
- Swing so heavy it sounds drunk.
- The bass too loud.
- A loop that never changes.

## Engine limits for this genre

- No tape or bitcrusher plugin: sat Tube, `warp` Quantize (the Crush macro), a High cut (craft-engine-limits).
- The agent cannot import a sample: the user imports audio (tool-sampler), or the loop is played on keys.
- No reverse: a filter sweep or a drop-out instead.

## Related

`genre-boom-bap`, `tool-reverb`, `stage-track-card`, `craft-groove-swing`
