---
name: craft-space-depth
description: Wet or dry: one space per track, front and back, and measuring how wet the mix really is.
---

# Space and depth

Space is one reverb character per track:
- dry room (decay 0.6–1 s): rock, trap, funk;
- hall (1.8–3 s): pop, house, trance;
- dark long tail (3–5 s, high `lowcut`): synthwave, ambient, techno rumble;
- echo instead of reverb (delay 1/8D or dub 300–700 ms): dub techno, lo-fi.

## Wet or dry

Without ears the mix almost always comes out drier than it should: cautious sends feel safe. You can measure the dryness.

1. Render a window of the main section.
2. Temporarily mute the reverb and echo buses (`set_bus` with `muted: true`) and render the same window. Volume −60 dB does not work if the bus has a volume lane: the lane overrides it.
3. **Always** unmute the buses afterwards.
4. Compare the LUFS and band shares of the two renders.

When the low end (kick, 808, sub) carries more than half the energy, the LUFS difference of the whole mix barely shows: compare the stems of the wet parts (pad, hook, texture) with and without the buses, or the shares of mid and above.

The LUFS difference mostly catches echo and hall. A short room barely changes loudness: judge it by the send levels and by the drums' `crestDb` (slightly lower with the room).

Guidelines (estimates, not measurements):
- under 0.2 LU: space is barely heard, the mix is dry;
- 0.3–1 LU: the usual level for pop-punk, rock, trap, pop;
- 1–2 LU or more: a wet mix: synthwave, ambient, lo-fi, dream pop.

By genre:
- pop-punk, rock: a dense room on the drums is audible, guitars with a short slap or room, the lead with echo;
- trap: dry drums, melody and bells in a long reverb and echo;
- synthwave, ambient: a big hall on the snare, pads and lead;
- house, EDM: a room on the drums, hall and echo on plucks and lead, the breakdown wetter than the drop.

4. Depth: `space` in `render_preview`. The main atmosphere is usually at `wetLu` −23…−17, a ballad or ambient −16…−12. The `dry` field means no space is heard; trap and drill can stay dry.

## Related

`tool-reverb`, `tool-buses-sends`, `tool-delay`
