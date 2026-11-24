---
name: role-kick
description: Design or fix a kick: punch, click, tuning and length against the bass.
---

# Kick

- An acoustic kick with a weak attack: raise `click`; if it booms, lower `decay`.

- Trap: a short clicky kick so it does not fight the 808; hats with rolls.

## Practices

- Bands: punch at 50–100 Hz, click at 1–5 kHz. The tail length depends on who owns the sub: a long 808 wants a short kick, a short bass allows a longer kick.
- A synthesized kick usually falls from 150–300 Hz to 45–60 Hz over 20–80 ms and decays over 150–500 ms.
- Many producers tune the kick to the key: the root or the fifth.

## Meloduo recipe

Knobs differ by engine (`get_drum` with the voice gives the list):
- **Electronic kick:** `pitch` (end pitch, 30–150 Hz), `start` (60–1000 Hz), `sweep` (5–400 ms), `punch`, `hold`, `decay` (30–4000 ms), `click`, `clickTone`, `clickLen`, `mid`, `drive` with `shape`.
- **Acoustic kick:** `tune` (30–120 Hz), `muffle`, `strike`, `beater` (Felt, Wood, Plastic), `click`, `bend`, `shell`, `decay`.

1. **Tune to the key:** `pitch` (Electronic) or `tune` (Acoustic) = the root or fifth in octave 1: C 32.7 Hz, D 36.7, E 41.2, F 43.7, G 49, A 55, B 61.7.
2. **Electronic shape:** `start` 150–300, `sweep` 20–80 ms, `decay` 150–500 ms for trap and house, 600–1500 ms for a boomy 808-style kick.
3. **Metal and double kick:** a strong `click` so fast hits read.
4. Drum parameters cannot be automated; a plugin on the kick channel can (tool-automation).

## Check

The kick stem peaks around 45–100 Hz and has energy in `highMid` (the click). With an 808, render kick and 808 alone: no `clash` (craft-kick-bass).

## Related

`tool-drums`, `craft-kick-bass`, `role-808`, `role-snare-clap`
