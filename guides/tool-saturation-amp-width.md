---
name: tool-saturation-amp-width
description: Saturation, guitar amp and stereo width as character: shapes, drive, cabinets, a parallel crush split.
---

# Saturation, amp and width

## What exists

- `sat`: the type is the parameter `shape` (Soft, Tube, Hard), so "sat Tube" in the guides means `add_effect` `{type: "sat", params: {shape: "Tube"}}`; `drive` 0–30 dB, `tone` in Hz, `mix` 0–1, `out` in dB. The preset "Warm tube" is `shape` Tube with `drive` 8 and `mix` 0.7.
- `amp`: the guitar amp with five models, `gain`, `bass`, `mid`, `treble`, `presence`, `depth`, `sag`, `master`, cabinets with a mic, and `out`; `drive` pedals and a `gate` come before it (tool-guitar-rig).
- `width`: widens a stereo source only, with `bassMono` to keep the lows mono (craft-stereo-width).
- Numbers of all three can be automated; their choices cannot.

## Recipes

1. **A parallel crush split** (no multiband saturation in Meloduo): the channel plays its low end clean; a send of −12…−6 dB goes to a "Crush" bus with eq Low cut 120–150 Hz → sat Hard, `drive` 12–20. The mids grow, the sub stays clean. Good for an 808 or a mid bass. Check: the stem's `mid` share grows and `lowSidePct` does not.
2. **Analog glue:** sat Tube with `mix` about 0.3 on the music bus (synthwave, lo-fi).
3. **Lo-fi top:** sat Tube on keys and drums, eq High cut 6–10 kHz on the music bus.
4. **Order:** EQ cuts before saturation, width last in a chain.

## Related

`tool-guitar`, `tool-guitar-rig`, `craft-stereo-width`, `role-808`, `tool-buses-sends`
