---
name: tool-match-eq
description: Match one channel's tone to another with match_eq, sketch an EQ curve, compare with a reference the user imported.
---

# match_eq and curves

`match_eq` fits a channel's EQ (`effectId`) to the tone of another channel (`referenceChannelId`): a guitar to the reference guitar, a double to the main part.
- `fromBar`/`toBar` where both play; `bands` 6–8; `amount` 50–70.
- It replaces every band of that EQ: keep cuts and notches in a second EQ.
- `learnedSeconds` under 5: take more bars.
- `fitErrorDb` over 1: `smoothing` "1" or a lower `amount`.
- It does not work on a bus or the master: give a curve instead.

A curve: `curve: [{freq, gain}]` in `add_effect`/`set_effect` eq when you need a shape (a "smile", a tilt, "3 dB darker above 5 kHz"). The EQ fits up to `maxBands` bands (8) and keeps the loudness. `fitErrorDb` up to 1 is good. You cannot pass `curve` and `bands` in one call.

## Compare with a reference track

The user can import a reference track; you cannot. Compare only after equal loudness.
1. Reference on its own sampler channel, `muted` in the mix; one section long (tool-sampler).
2. Render the same section with stems; unmute the reference only for that render, then mute it again. Compare the band shares (`bands`, `spectrum`) of the reference and the mix: shares do not depend on level, raw levels do.
3. Where a band differs by more than about 3 dB: a `curve` on the master or a bus with half of the difference, within ±2 dB.
4. A guitar to the reference guitar, a double to its main part: `match_eq` `amount` 50–70.
5. The numbers do not show attack, movement or groove: say that the comparison is by spectrum only.

## Related

`tool-eq`, `tool-sampler`, `craft-artist-core`
