---
name: craft-low-end-mono
description: Keep the low end mono and solid: side low cut, bass mono, no unison in the lows, mono-loss checks.
---

# Low end in mono

## Practices

Below about 100–150 Hz most mixes keep the sound mono; width lives above that. A wide low end loses level on mono speakers and phones.

## Meloduo recipe

1. No unison or `width` on the sub, the 808 or the bass's low oscillator (tool-synth: give one unison voice to the oscillator that holds the low end).
2. On the music bus or master: an EQ band `{type:"Low cut", freq:100–150, place:"Side"}` or the preset `Master / Side low cut`.
3. Or `width` with `bassMono` 100–150 Hz on a bus or the master.
4. Chorus, flanger and phaser make a mono source stereo: on a bass set the chorus `lowcut` 120–200, and keep them off the sub and the 808 (tool-modulation-fx).
5. Reverb returns: `lowcut` 200–500 Hz so the tails add no low side energy.

## Check

`stereo.lowSidePct` under 5 %, absolute `monoLossDb` under 3 dB, `correlation` above +0.3.

## Related

`craft-stereo-width`, `tool-eq`, `role-sub-bass`
