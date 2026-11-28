---
name: genre-dnb
description: Drum and bass numbers: 174 BPM two-step grid with ghost snares, sub plus reese palette, preset candidates.
---

# Drum and bass

Genre numbers are orientation; the reference wins. Swing values: craft-groove-swing.

## When

Use it for drum and bass, liquid, neuro and jump-up: a fast two-step break over a slow, heavy bass. Liquid leans on pads, keys and chords; neuro on a near-atonal mid bass.

## Tempo and drums

| Genre | Tempo, centre (range) | Kick | Snare / clap | Hats and other |
|---|---|---|---|---|
| Drum and bass | 174 (160–180) | 0, 9 | 4, 12; ghosts 2, 6, 10, 14 | closed every sixteenth |

- Most tracks sit at 170–176. The bass and pads often feel like half time (87 BPM) while the drums run at full speed.
- A common two-step variant puts the second kick on step 10 instead of 9. Ghost snares also work on 7, 9 and 15.
- The snare is the loudest drum, about as loud as the kick or louder. Layer it: a body, a snap and a clap, on separate channels if one preset is too thin.
- Hats stay clean and clicky. A ride over the hats adds drive in the drop.
- End every 8-bar phrase with a snare roll or a chopped-up bar (craft-drum-programming): a stiff loop without breaks sounds like a demo.

## Swing and groove

- `swing` usually 0–40 on hats and ghost snares (the drum and bass row in craft-groove-swing); the kick stays at 0.
- Ghost snares at velocity 35–55 (`g` in the grid) against a backbeat of 110–127. Shift a few ghosts late with `+Nt` for a rolling feel.
- `humanize_notes` with `velocityPct` 5–10 on hats; keep `timingMs` at 0 on kick and snare.

## Harmony

- Minor keys: aeolian, dorian. Liquid uses 7th and 9th chords and long pads (craft-harmony-voicing); neuro often stays on one root with riffs.
- Harmonic rhythm is slow: one chord per bar or per two bars, even at 174 BPM.
- The bass line follows the chord roots in long notes; the movement comes from the filter, not from many notes.

## Form

- DJ form: Intro 32 (drums and atmosphere, easy to mix), Drop 32, Breakdown 16–32, Build 8, Drop 2 32, Outro 32.
- Streaming form: Intro 8–16, Drop 32, Breakdown 16, Drop 32, Outro 8. Seconds = bars × 240 / BPM in 4/4, so 32 bars at 174 is about 44 s.
- The second drop differs from the first: a new bass edit, a new break chop or a counter line (stage-form).

## Palette

| Genre | Defining timbre | Roles usually present | Roles usually absent |
|---|---|---|---|
| DnB | break and reese or sub | sub, reese or neuro, pad, keys, lead, ride and shaker | anything on a straight kick |

## Sound candidates

| Genre | Role | Candidates | Edit for character |
|---|---|---|---|
| DnB | sub, bass | Bass/DnB Reese bass, Sub reese, Neuro bass, Hoover | Detune macro, slow LFO |
| | liquid | Pad Warm pad; Strings Slow strings; Keys Electric piano; Lead/DnB Liquid lead | — |
| | drums | DnB kit (Roller, Shuffle, Tight) | ghosts |

Role guides: role-sub-bass (a mono sine sub), role-mid-bass (reese and neuro recipes), role-snare-clap, role-hats-cymbals, role-pad.

## FX and mix signature

- Split the bass: a mono sine sub below 100 Hz on one channel, the reese or neuro layer on another with a Low cut at 100–150 Hz (craft-low-end-mono).
- A Low cut on the kick around 40–50 Hz leaves the deepest sub to the bass.
- Saturation on the drum bus (sat Tube or Hard, low `mix`) glues the break; keep the hats out of it.
- `duck` on the sub and the reese from the kick and snare, 3–6 dB, so the drums cut through.
- Liquid: Hall or Plate on pads and keys, delay 1/8D on the lead; neuro stays drier.
- Master at −14 LUFS; a loud master only when the user asks (targets: craft-loudness-lufs).

## Reference core

1. The two-step break at 170–176 with ghost snares and a loud snare.
2. A sub that holds the low end and a moving mid bass (reese, neuro or rolling sub).
3. Phrases of 8 bars, each closed by a roll or a chop.
4. Long intro and outro in a club version.

## Beginner mistakes

- Drums quieter than the bass: the snare usually needs to punch through the reese.
- A reese with too much low end fights the sub: high-pass it.
- No ghosts and no fills: the beat sounds stiff.
- An intro of 4 bars in a club track: a DJ needs 16–32.

## Engine limits for this genre

- There is no break sample library and no slicer; an imported break can be warped to the tempo (tool-sampler). Build the break from the DnB kit, or chop the user's own imported break with the sampler at the project tempo (tool-sampler).
- No multiband or OTT: use a parallel crush bus for neuro grit (tool-saturation-amp-width).

## Related

`role-mid-bass`, `craft-drum-programming`, `stage-track-card`, `craft-groove-swing`
