---
name: craft-transitions
description: Design transitions by size: fills, build into a drop, risers, filter moves, pauses, the harmonic arc, lanes per section.
---

# Transitions

## Transitions

| Boundary | Technique |
|---|---|
| inside a section, 4 bars | one small thing from the 4-bar row of the change grid (stage-form) |
| inside a section, 8 bars | one element enters or leaves; hats rest in the last bar |
| verse → chorus | a 1–2 bar fill, a crash on beat one |
| build → drop | the stack below |
| drop → breakdown | a low-pass over 1–2 bars, or the kick and bass removed; a hit on beat one; a delay tail across the boundary |
| final → outro | parts leave in reverse order every 8 bars |

The "build → drop" stack:
1. A snare roll in notes: quarters, eighths, sixteenths with rising velocity (`add_notes` with `every`, `times`, `velocity` → `velocityTo`). For a long build, a clip with `fromBar` plays the second half.
2. A riser across the whole build (FX Riser, one note over 4–8 bars).
3. The low end below 100 Hz removed: Low cut on the music bus (lanes below).
4. A gap: the last beat, half a bar or a bar empty, or a reverse rise into the beat.
5. A hit or crash on beat one of the drop (FX Impact boom).

The gap before a big change is 1, 2 or 4 bars at large boundaries and one beat at small ones. Do not put the same transition on every boundary.

## The harmonic arc

The harmonic arc "bridge → build → chorus":
- the whole arc stays in one key; the bridge may change mode or harmony, but the build already prepares the chorus;
- the last chord of the build leads into the first chord of the chorus: the dominant (V), IV or the chord a tone below;
- modulate at a clear boundary: entering the bridge, where the texture changes completely, or right on the final chorus after a stop bar (a lift by a semitone or a tone). A key change in the middle of a rise sounds like a mistake;
- after a modulation every part is in the new key: bass, chords, hook, arp, 808. Check every melodic part of the new section with `check_melody`.

## Lanes across sections

**Build** (usually two or three moves together, all reset on beat one of the drop):
- Low cut on the music bus 30 → 300–600 Hz over 4–8 bars (on the master no higher than 200–400 Hz);
- Hall bus volume from −6…−3 dB up to +6 dB (the fader limit) toward the end of the build;
- Echo feedback 0.3 → 0.6–0.7 over the last 2 bars;
- master or music bus volume −2…−4 dB;
- sat `drive` +6…+10 dB on the lead or a bus;
- music bus `width` 100 → 60–80 %;
- the synth's Brightness macro from 0 to 1 (its slot m1–m4 depends on the preset: `get_synth`).

**Drop:**
- `width` 120–140 % on pads;
- impact: Room bus volume up for one beat.

**Breakdown:**
- High cut on the music bus 20 kHz → 800–2000 Hz over 1–2 bars, opening over the last 4–8 bars;
- Hall +3…+6 dB.

**Verse and chorus:** at least one FX parameter differs (reverb level, width, drive, delay on or off).

**Outro:** close the High cut or raise the reverb, then fade out. A short fade (2–4 bars): the music bus and the drum bus. A long fade-out (8–16 bars, pop and Euro-disco endings): a master `volume` lane, because buses cannot feed other buses and a bus fade leaves reverb and delay returns ringing. A volume lane overrides the fader, `trimDb` and `match_loudness`, so add the master lane as the very last edit, after the master stage, with its first point at the master's current level. Never fade with channel lanes.

**Pumping by section:** you cannot automate `duck` depth. Use comp Pumping with the kick as `source` and drive its `threshold`: a lower threshold pumps deeper.

## Related

`role-riser-impact`, `tool-automation`, `craft-section-contrast`, `tool-delay`
