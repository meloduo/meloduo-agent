# Arrangement

The numbers come from track breakdowns and lessons. If the reference disagrees with a table, the reference wins.

Contents:
1. How many parts
2. Roles of a full drop and slot rules
3. Layer table
4. The 4/8/16 change grid
5. Section contrast
6. Pattern variations
7. Transitions
8. Ear candy and one-off parts
9. Forms
10. Questions: is the arrangement too thin?

## 1. How many parts

Two numbers help. "Parts in the whole track" shows thinness. "In front at the same time" shows mud. The table gives orders of magnitude, not a norm.

| Genre | Tracks in the song | In the drop or chorus | Intro | Breakdown |
|---|---|---|---|---|
| Lo-fi, sketch | 8–12 | 6–8 | 2–4 | 2–3 |
| Trap, hip-hop | 10–15 | 7–10 | 2–4 | 2–4 |
| Pop, synthwave, rock | 12–20 | 9–12 | 3–5 | 2–4 |
| House, disco, EDM, trance | 15–25 | 10–14 | 3–6 | 2–4 |

- A disco house breakdown: about 23 different parts in the track, 6 at once in the intro and 11–12 in the groove.
- A pop arrangement: about five elements in front at once, counting the drums as one.
- Subtraction needs a loop of 8–10 tracks, or there is nothing to subtract.

Keep the drum roles (kick, snare or clap, hats, percussion, fills) on separate tracks: one "Drums" track cannot be thinned out per section. Transition FX get their own track; they are not drums.

## 2. Roles of a full drop and slot rules

Roles beyond drums, bass, chords and hook:

| Role | What it gives | How in Meloduo |
|---|---|---|
| pad or texture | glue, width, length | Pad, Strings, Texture; attack from 300 ms |
| arp, pluck or stab | rhythmic movement | Arp (`arp` 1 slices the chords itself), Pluck, Brass stab, Organ |
| countermelody | an answer to the hook | the second hook candidate (melody.md) |
| percussion ×2+ | groove beyond kick and hats | shaker, tambourine, conga, rim, clave, cowbell |
| fills | phrase boundaries | a separate tom or snare pattern |
| FX | transitions | FX Riser, Downlifter, Impact boom, Noise sweep |
| hook double | weight in the last drop | `copy_notes` +12 to another channel |
| swells | a rise inside a section | Brass swell, Slow strings, a shorter Riser |

How parts share space:
- in one register a sustained sound and a short one get along; two sustained sounds fight;
- a full section usually combines short sounds (pluck, stab) and sustained ones (pad, strings);
- an arp and the hook at full volume in the same bars fight: let one answer the other, or put the arp quieter and further back;
- only a few melodic parts sit in front at once (about five, drums counted as one); the rest is percussion, texture and doubles;
- the sub is mono and dry.

## 3. Layer table

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

## 4. The 4/8/16 change grid

Music breathes in 4- and 8-bar phrases. Listeners expect events at their boundaries.

| Every | What changes | Examples |
|---|---|---|
| 4 bars | something small | a double clap, a reverse hat, a part drops out for one bar, a one-shot, filter movement |
| 8 bars | one track enters, leaves or changes pattern | new hats, the pad comes in, bass "A-end" |
| 16 bars and section boundaries | 2–4 tracks and a transition | the build → drop stack, the kick drops out |

The strongest transition goes on the biggest boundary. A long stretch with no change sounds like a loop.

## 5. Section contrast

Verse and chorus differ in more than one way. Pick from:
1. the set of parts;
2. the register of chords or pad (higher in the chorus);
3. rhythmic density (half or double);
4. kick and bass present or not;
5. the filter state (music bus closed or open);
6. the drum pattern (half-time, other hats).

The harmonic arc "bridge → build → chorus":
- the whole arc stays in one key; the bridge may change mode or harmony, but the build already prepares the chorus;
- the last chord of the build leads into the first chord of the chorus: the dominant (V), IV or the chord a tone below;
- modulate at a clear boundary: entering the bridge, where the texture changes completely, or right on the final chorus after a stop bar (a lift by a semitone or a tone). A key change in the middle of a rise sounds like a mistake;
- after a modulation every part is in the new key: bass, chords, hook, arp, 808. Check every melodic part of the new section with `check_melody`.

More techniques:
- breakdown down to 1–2 parts, half-time if you like;
- in the build the kick doubles and goes through a high-pass; the drop opens the low end;
- the second drop gets a new bass, melody or rhythm;
- a repeated chorus gets new chords under the same melody;
- in the pre-chorus the riff gets sparser;
- save some layers for the last chorus.

## 6. Pattern variations

- A repeated part gets "A" and "A-end": `clone_pattern`, then edit the last bar of the phrase (a fill, a dropout, an extra hit).
- The bass can develop over the phrase: "A" and "A-end", not one bar on repeat.
- Trap: the kick does not repeat exactly for 4 bars in a row; hat rolls at phrase ends; a new hat pattern in the second drop.
- Edit one copy of a repeated riff: a changed last note turns two lines into a question and an answer.
- `remove_notes` removes notes by channel and steps (hats under a break).
- `copy_notes` with `patternIds` makes a double in all patterns at once.
- `scale_velocity` 0.8 on the first chorus works only together with a new pattern, not instead of one.

## 7. Transitions

| Boundary | Technique |
|---|---|
| inside a section, 4 bars | one small thing from section 4 |
| inside a section, 8 bars | one element enters or leaves; hats rest in the last bar |
| verse → chorus | a 1–2 bar fill, a crash on beat one |
| build → drop | the stack below |
| drop → breakdown | a low-pass over 1–2 bars, or the kick and bass removed; a hit on beat one; a delay tail across the boundary |
| final → outro | parts leave in reverse order every 8 bars |

The "build → drop" stack:
1. A snare roll in notes: quarters, eighths, sixteenths with rising velocity (`add_notes` with `every`, `times`, `velocity` → `velocityTo`). For a long build, a clip with `fromBar` plays the second half.
2. A riser across the whole build (FX Riser, one note over 4–8 bars).
3. The low end below 100 Hz removed: Low cut on the music bus (fx.md).
4. A gap: the last beat, half a bar or a bar empty, or a reverse rise into the beat.
5. A hit or crash on beat one of the drop (FX Impact boom).

The gap before a big change is 1, 2 or 4 bars at large boundaries and one beat at small ones. Do not put the same transition on every boundary.

## 8. Ear candy and one-off parts

One or two parts that play only once make the track feel alive:
- a breakdown melody (the second hook candidate);
- a single noise sweep;
- a synth for one bar before the final drop;
- a bell line in the outro.

Small events:
- a single tom hit or rim at the end of a phrase;
- a reverse hat (an open hat on the beat before the bar);
- a delay throw on the last note of the hook (fx.md);
- a downlifter after the drop;
- a bar without kick in the middle of a verse.

## 9. Forms

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

For a short request ("sketch a track"), any template with 8-bar sections, about 64 bars. Length: seconds = bars × 240 / BPM.

## 10. Questions: is the arrangement too thin?

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
