---
name: stage-form
description: Stage 6 of a track: plan the form and layer table, place clips by subtraction and check the energy curve.
---

# Stage 6. Form and layer plan

Layer table, change grid and forms are below; contrast: craft-section-contrast.

1. Before placing clips, sketch the layer plan: the sections and which tracks play in each (template below). Show it to the user briefly.
2. `add_markers`, `place_patterns` in one call, then remove what the plan does not need.
3. Energy rises toward the main sections and drops in the breakdown. The last chorus or drop is usually stronger than the first, through a new layer rather than volume.
4. Listeners expect change at phrase boundaries: something small every few bars, a clear change at a section boundary.
5. Neighbouring sections differ in more than one way: set of parts, register, density, low end, filter, drum pattern.
6. One-off details (a part, a sound, a line that plays only once) make the track feel alive.

**Always**: render the song with `render_preview` and get no "holds several parts" warning.

Check yourself: is there a stretch where nothing changes for a long time? Does `loudnessBySection` rise toward the main sections, with no "Flat sections" warning?

## Layer table

Write it before placing clips. Rows are sections with bars, columns are tracks, a cell holds a pattern, "—" or "A-end". A sample of the form (do not copy the line-up):

| Section (bars) | Kick | Snare | Hats | Perc | Fill | Bass | Chords | Pad | Arp | Hook | Counter | FX | Total |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Intro 0–8 | — | — | Hats A | — | — | — | Chords A | Pad A | — | — | — | Riser | 4 |
| Verse 8–24 | Kick A | Snare A | Hats A | — | Fill A | Bass A | Chords A | — | Arp A | — | — | — | 7 |
| Build 24–32 | Kick A | Roll | Hats B | Perc A | — | — | Chords A | — | Arp A | Hook frag | — | Riser | 8 |
| Drop 32–48 | Kick A | Snare A | Hats B | Perc A | Fill A | Bass B | Stabs | Pad A | — | Hook A | Counter | Impact | 12 |

What a good table usually shows:
- density rises from the intro to the main sections;
- the breakdown is clearly sparser;
- the last drop or chorus is denser than the first;
- a long section develops inside: its halves differ (a countermelody, a clap or swells come in).

## The 4/8/16 change grid

Music breathes in 4- and 8-bar phrases. Listeners expect events at their boundaries.

| Every | What changes | Examples |
|---|---|---|
| 4 bars | something small | a double clap, a reverse hat, a part drops out for one bar, a one-shot, filter movement |
| 8 bars | one track enters, leaves or changes pattern | new hats, the pad comes in, bass "A-end" |
| 16 bars and section boundaries | 2–4 tracks and a transition | the build → drop stack, the kick drops out |

The strongest transition goes on the biggest boundary. A long stretch with no change sounds like a loop.

## Forms

| Template | Sections in bars | Total | Genres |
|---|---|---|---|
| Streaming | Intro 4–8, Verse 16, Build 4–8, Drop 16, Verse 8–16, Build 8, Drop 16, Breakdown 8, Build 8, Final Drop 16, Outro 4–8 | 96–112, 3–3.5 min | EDM, pop EDM, synthwave |
| Club | Intro 32, Groove 16, Build 8–16, Drop 32, Breakdown 16–32, Build 16, Drop 2 32, Outro 32 | 160–192, 5–6 min | house, techno, trance |
| Hip-hop | Intro 4–8, Hook 8, Verse 16, Hook 8, Verse 16, Hook 8, Bridge 8, Hook 8, Outro 4–8 | 70–80 | trap, boom bap |
| Song | Intro 4, Verse 8, Pre 4, Chorus 8, Verse 8, Pre 4, Chorus 8, Bridge 8, Chorus 8 ×2, Outro 4 | 72–80 | pop, pop-punk, rock |
| Metal | Intro (riff) 4–8, Verse 16, Pre 4–8, Chorus 8, Riff 4–8, Verse 8–16, Chorus 8, Breakdown 8–16 (half time, the heaviest moment), Bridge or Solo 8, Chorus 8–16, Outro 4 | 80–100 | metal, nu-metal, metalcore |
| Loop track | A 16, A' 16, B 8, A'' 16, silence or outro 8 | 64 | lo-fi, ambient |
| Cold start | Drop 8 (no intro), Verse 16, Build 8, Drop 16, Breakdown 8, Drop 16, Outro 4 | 76 | pop, trap, short formats |
| Two parts | Part A (Intro, Groove, Drop) 48, part B in another mode or at half tempo 32, return to A 16 | 96 | synthwave, ambient, experimental |

For a short request ("sketch a track"), any template with 8-bar sections, about 64 bars. Length: seconds = bars × 240 / BPM in 4/4 (in another signature, bars × stepsPerBar × 15 / BPM).

## Questions: is the arrangement too thin?

From `get_project_state` and the layer table:
1. Are there enough parts for the genre and the reference, or does the track sound like "drums, bass, chords, lead"?
2. Can the drums be thinned out per section?
3. Does the main section have anything beyond the core: a pad, movement, an answer to the hook?
4. Is there a stretch where nothing changes for a long time?
5. How does the verse differ from the chorus?
6. Does the breakdown drop?
7. Is the last drop stronger than the first?
8. Are there one-off details?
9. Do repeated parts have a variant ending?
10. How does the second drop differ from the first?

## Related

`craft-section-contrast`, `tool-patterns-clips`, `craft-pattern-variation`, `craft-ear-candy`
