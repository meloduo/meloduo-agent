---
name: genre-boom-bap
description: Boom bap numbers: 85-95 BPM swung drums, dusty keys, preset candidates (shared with lo-fi).
---

# Boom bap

Genre numbers are orientation; the reference wins. Swing values: craft-groove-swing.

## When

1990s-style hip-hop: a looped soul or jazz sample, hard swung drums, a sine-like bass. In Meloduo the loop is played on keys, unless the user imports a sample (tool-sampler).

## Tempo and drums

| Genre | Tempo, centre (range) | Kick | Snare / clap | Hats and other |
|---|---|---|---|---|
| Boom bap | 90 (85–95) | 0, 7 or 8 | 4, 12 | eighths |

- Tempos up to about 100 BPM are common too.
- A fuller grid: kick 0, 7, 10; snare 4, 12; hats in eighths with 16th pickups; a ghost snare on 15.
- Two-bar colour: a cowbell on step 0 of bar 2, an open hat on step 12 of bar 2.
- A clap layered on the snare a few ms late: `+1t` in a `line` (tool-notation-lines).
- The kick is loud and punchy: a lift around 60 Hz and a clear dip around 150 Hz (tool-eq).

## Swing and groove

- Use the boom bap row in craft-groove-swing: hats 60–96, kick and snare 0–28.
- Swing moves notes on odd steps: a kick on step 7 swings with its channel. Keep the kick channel low if it must stay tight.
- Velocity variety is essential: accents on the hats, ghost snares with `g`.
- Dilla-style: hats in a `line` with `unit` "1/16t" while kick and snare stay straight (craft-drum-programming).

## Harmony

- The harmony comes from the sample: jazz or soul, minor 7th and 9th chords.
- A 1–2 bar loop; the bass follows the root of the loop.

## Form

- Hip-hop form: Intro 4–8, Verse 16, Hook 8, Verse 16, Hook 8, Outro (stage-form).
- The hook often changes only the drums or adds one part; small drop-outs every 4 bars keep the loop alive.

## Palette

| Genre | Defining timbre | Roles usually present | Roles usually absent |
|---|---|---|---|
| Boom bap, lo-fi | dusty keys, soft swung drums | keys, sub or live bass, vinyl, a 2–4 note melody, soft pad | supersaw, bright lead |

## Sound candidates

| Genre | Role | Candidates | Edit for character |
|---|---|---|---|
| Boom bap, lo-fi | keys | Keys/Lo-fi Lo-fi keys; Keys Electric piano, Wurly, Vibraphone, Soft keys | Crush macro, sat Tube, LFO on pitch (wow) |
| | bass | Bass Clean sub; guitar Finger bass, Muted bass | humanize |
| | melody | Lead/Lo-fi Lo-fi sine lead; Pluck Lo-fi pluck, Kalimba, Harp pluck; guitar Nylon classical, Nylon bossa | — |
| | texture | Texture Vinyl air, Bit crush texture | — |
| | drums | Acoustic Jazz kit (brushes) or a soft 808 | Jazz snare |

- For harder boom bap drums: a punchy kick, a loud snare; the `voice` "808" preset Boom bap gives a short 808 kick.

## Roles

| Role | Key numbers | Guide |
|---|---|---|
| loop (keys) | Low cut and some top cut, ducked a little from the kick | role-keys |
| bass | sine-like, follows the loop root | role-sub-bass |
| kick, snare | loud, upfront, nearly mono | role-kick, role-snare-clap |
| hats | swung, accented | role-hats-cymbals |

## FX signature

- Drums loud and upfront, nearly mono, little reverb.
- A drum bus with comp and sat for glue (tool-buses-sends).
- Keep the loop and the bass clean at 150–300 Hz.
- Master at −14 LUFS; a loud master only when the user asks (targets: craft-loudness-lufs).

## Reference core

- swung hats against a hard, straight kick and snare;
- a loud snare on 4 and 12;
- a dusty jazz or soul loop;
- a sine-like bass under the loop;
- velocity variety in every drum part.

## Beginner mistakes

- No swing: a stiff grid.
- No velocity variety.
- Mud from the loop and the bass at 150–300 Hz.
- Wide, reverby drums.

## Engine limits for this genre

- The agent cannot sample a record: the user imports audio, or the loop is played on keys.
- No time stretch: set the project tempo to the sample's tempo.
- No vinyl or tape plugin: Texture Vinyl air, sat Tube, a High cut (craft-engine-limits).
- No scratches; leave the hook to drums and a variation of the loop.

## Related

`genre-lofi`, `tool-sampler`, `stage-track-card`, `craft-groove-swing`
