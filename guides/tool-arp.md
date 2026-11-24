---
name: tool-arp
description: The synth arpeggiator: modes, rate, octaves, gate, chord mode and moving it over a section.
---

# Arpeggiator

Arpeggiator: `arp` 1; write chords per bar and it slices them into `arpRate` steps. `arpMode` Chord gives a trance gate. Presets in the Arp folder already have the arp on.

## Parameters

`arp` On; `arpMode` Up, Down, Up-down, Down-up, Random, As played, Chord; `arpRate` 1/32, 1/16T, 1/16, 1/8T, 1/8, 1/8D, 1/4T, 1/4; `arpOct` 1–4; `arpGate` 0.05–1 (note length as a share of the step). No `arp*` parameter can be automated.

## Recipes

1. **Trance arp:** Up-down, `arpOct` 2, 1/16, `arpGate` 0.5, chords per bar; a 1/8D delay on a send.
2. **Pluck arp:** `arpGate` 0.25–0.35. **Pad arp:** `arpGate` 0.8–1.
3. **A melodic arp that follows the written order:** As played.
4. **Trance gate on a chord:** `arpMode` Chord.
5. **Synthwave:** a 1/16 arp with a 1/8D echo. **Techno:** a 1/16 bass arp in a low register (E0–E1).
6. **Movement:** automate `cutoff` or a macro (Brightness) over 8 bars; the arp itself cannot move.
7. **A speeding arp in a build:** a second channel with `arpRate` 1/32, switched in by clips for the last bars.

## Related

`role-pluck-arp`, `tool-synth`, `tool-automation`
