---
name: craft-kick-bass
description: Solve the kick and bass conflict: one owner of the sub, lengths, tuning, ducking, notes before EQ.
---

# Kick and bass

## Practices

- One part owns the sub at any moment: the kick or the bass, not both at full length.
- Lengths: a long 808 wants a short, clicky kick; a short bass allows a longer kick.
- Tune the kick to the key (role-kick) so it agrees with the bass.
- Fix the conflict with notes first (bass between the kick hits or locked with them), then length, then ducking, then EQ.

## Meloduo recipe

1. Render only the kick and the bass (solo both, a window of the busiest section), then clear the solo.
2. Shorten whichever does not own the sub: kick `decay`, or the bass notes.
3. Tune: kick `pitch` or `tune` to the root or fifth.
4. Duck: `duck` on the bass from the kick, `depth` 2–4 dB to separate, 6–12 dB to pump; `attack` 5–10 ms on an 808 or sine (faster clicks) (tool-sidechain-duck).
5. A narrow dip instead: a dynamic Low shelf on the bass keyed from the kick (tool-eq).

## Check

No `clash` between kick and bass; the bass peak sits 1.5–4 dB under the kick peak (craft-gain-staging-balance); for an 808, no `thin808`.

## Related

`role-kick`, `role-808`, `tool-sidechain-duck`, `craft-low-end-mono`
