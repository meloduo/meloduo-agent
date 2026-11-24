---
name: craft-fix-sketch
description: Work on the user's own sketch when the request is vague ("make it better"): diagnose by reading and rendering, keep their parts, offer two or three changes, ask one question, make the smallest useful edits.
---

# Improve the user's sketch

## When

The project already has the user's material and the request is open: "make it better", "finish this", "something is off". Not for a new track (meloduo-produce) and not for a clear mix task (meloduo-mix).

## Practices

- The sketch is the user's idea. Producers who help on someone else's track change the least that makes the biggest difference, and ask before rewriting a part.
- Diagnose before you touch anything: what is there, what the genre expects, what the numbers say.
- Most sketches lack one of a few things: a hook that develops, contrast between sections, a full main section, groove (swing, velocity), or a mix that lets the hook through.
- Offer choices, not a rewrite: two or three concrete changes, each with its reason and its cost.

## Meloduo recipe

1. **Read.** `get_project_state`; the brief and notes in `info` say what the user wanted. Read the main parts as text with `notation: "degrees"` (tool-notation-lines).
2. **Render** the main section with stems (and the whole song once with `stems: false` if there are several sections). Note the warnings.
3. **Diagnose** against the checklist:
   - hook: `check_melody` with the chords as `against` (tool-check-melody); does the motif develop?
   - groove: drum velocities all equal, `swing` 0 in a swung genre (craft-groove-swing);
   - arrangement: one pattern holds several parts ("holds several parts"), sections all as loud ("Flat sections"), a main section that is only "drums, bass, chords, lead" (stage-full-drop, craft-section-contrast);
   - mix: `clash`, `bassHeavy`, `thinMids`, `dry`, `clipped` (craft-mix-diagnosis).
4. **Propose** in the user's language: what you found in one line each, then two or three changes ranked by effect, then one question ("Which of these should I do?" or "Build on your hook or next to it?").
5. **Edit small.** Do the chosen change on new patterns or clones (`clone_pattern`), not over the user's notes; keep the user's parts unless they agreed. If the user said "do what you think", start with the change that has the biggest effect and stop after it to report.
6. **Render again** and report the change in numbers.

## Candidates

When the fix is a new hook or a new drum part, write 2–3 candidates next to the user's version and compare them with it (craft-candidates). The user's own version is one of the candidates.

## Check

The warnings you set out to fix are gone; nothing the user wrote was deleted without consent; `changedSinceYourLastCall` edits are kept.

## Pitfalls

- Rewriting the whole track → the user loses their idea → ask first, change one thing.
- Fixing the mix of a weak arrangement → numbers improve, the track does not → fix parts before levels.
- Changing the genre by accident (another tempo, another kit) → keep tempo, key and kit unless asked.

## Related

`tool-project-session`, `craft-mix-diagnosis`, `craft-section-contrast`, `craft-candidates`
