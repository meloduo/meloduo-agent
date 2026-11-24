---
name: craft-loop-to-song
description: Turn a loop (the user's or your own) into a full song - complete the loop to a full section, lay out the form, subtract per section, add variations and transitions.
---

# From a loop to a song

## When

The project has a loop of 4–8 bars and the user wants a song from it: "turn this into a full track", "arrange my loop". The hook may or may not be there.

## Practices

- Producers usually finish the loop first: the densest section, with all the roles the genre needs, 8–10 tracks or more. You can only subtract from something full.
- Then they copy it across the whole length and take things away per section; adding is slower and leads to flat sections.
- Work big to small: first which parts play in each section, then variations, then transitions and one-off details.
- Keep the user's loop as the heart of the track: it becomes the chorus or the drop, not the intro.

## Meloduo recipe

1. **Read the loop.** `get_project_state`; tempo, key and genre from `info`. If one pattern holds several parts, split it first: `split_pattern` with `groups` (tool-patterns-clips).
2. **Complete the loop** to a full main section: which roles does the genre still lack (stage-full-drop)? Add them as separate patterns. Ask before replacing any part of the user's loop.
3. **Form.** Pick a template by genre and length (stage-form): streaming 3–3.5 min or club 5–6 min. Seconds = bars × 240 / BPM. Show the layer table (sections × tracks) to the user in a few lines.
4. **Lay it out.** `add_markers` for all sections, then `place_patterns` with every clip in one call, the full loop in every section.
5. **Subtract.** `remove_clip` (or `edit_clips` `remove`) per the layer table: intro and breakdown sparse, verse lighter than chorus, the last chorus or drop the fullest (craft-section-contrast).
6. **Vary.** A-end variants of repeated parts, a new hat pattern or bass variant in the repeat (craft-pattern-variation).
7. **Transitions** at each boundary, bigger at bigger boundaries (craft-transitions).
8. **Render** the song with `stems: false`: no "holds several parts", `loudnessBySection` rising toward the main sections, no "Flat sections".

## Candidates

For an open form, sketch two layer tables (for example a cold start against a long intro) and pick by the genre and the user's goal; say why in one line.

## Check

- Each section differs from its neighbours in at least two ways (parts, register, density, low end, filter, drums).
- No stretch of 16 bars without a change.
- The user's loop is intact in the main section.

## Pitfalls

- Too few tracks to subtract from → every section sounds the same → complete the loop first.
- One "drums" pattern → the drums cannot thin out → split it.
- The loop placed only once → a short track → lay out the full form before details.

## Related

`stage-form`, `craft-section-contrast`, `craft-pattern-variation`, `tool-patterns-clips`, `craft-transitions`
