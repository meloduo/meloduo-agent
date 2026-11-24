---
name: genre-trap
description: Trap numbers: half-time grid, hats with rolls, 808 with glide, palette, preset candidates, dry drums.
---

# Trap

Genre numbers are orientation; the reference wins. Swing values: craft-groove-swing.

## When

Hip-hop trap and its pop and R&B offshoots: a half-time beat, fast hats with rolls, a long tuned 808 in a minor key.

## Tempo and drums

| Genre | Tempo, centre (range) | Kick | Snare / clap | Hats and other |
|---|---|---|---|---|
| Trap, half-time | 140 (130–160) | follows the 808 bass | 8 | eighths and sixteenths with a velocity ramp, rolls with `unit` 1/32 |

- Some trap runs faster, up to about 200 BPM. The snare on step 8 makes 140 feel like 70.
- One-bar orientation: kick 0 and 10, snare or clap 8, hats on every eighth (0, 2, 4 … 14) with 16th and 1/32 trills.
- A two-bar kick variant: bar 1 steps 0 and 14, bar 2 step 2.
- Rolls go before the snare or at the end of a 4-bar phrase, not in every bar. Velocity rises from about 50–60 % to full (craft-drum-programming).
- Sparse ghost snares between the backbeats; a clap with a short `tail`, about 280 ms.

## Swing and groove

Trap is straight: hats 0–16, kick and snare 0 (craft-groove-swing). The groove comes from hat accents, rolls and triplet fills, not from swing.

## Harmony

- Natural or harmonic minor, phrygian.
- One or two chords, or a single melody over the 808; the harmony moves slowly.
- The 808 plays the root and stays in the key of the melody (role-808).

## Melody defaults

| Genre | Scale | Notes per bar | Range | Register | Phrase form |
|---|---|---|---|---|---|
| Trap, hip-hop loop | natural or harmonic minor, minor pentatonic | 3–6, triplet fills | 5–12 | 60–84 (bells 72–91) | a 2–4 bar loop, variation every 4th |

## Form

- Hip-hop form: Intro 8, Hook 8–16, Verse 16, Hook, Verse 16, Hook, Outro (stage-form).
- A short format can open on the hook (the Cold start form).
- Change the hats or drop the 808 for a bar at phrase ends so the loop breathes (craft-pattern-variation).

## Palette

| Genre | Defining timbre | Roles usually present | Roles usually absent |
|---|---|---|---|
| Trap | 808 with glide, sparse bell or flute | 808, melody (bell, flute, pluck, choir), dark pad, hat rolls | mid bass, dense chords |

## Sound candidates

| Genre | Role | Candidates | Edit for character |
|---|---|---|---|
| Trap | 808 | `voice` "808": Trap, Long trap, Drill slide; Distorted or Rage for dirt | `presence` 0.5–0.8, `glide` on overlapping notes |
| | melody | Bell/Hip-hop Trap bell; Pluck/Hip-hop Trap pluck; Lead/Hip-hop Trap flute; Bell Music box; Pad Choir pad; Strings Pizzicato; Lead/Phonk Phonk cowbell | lower cutoff, dark reverb |
| | drums | Trap kit; Trap/Roll hats | 1/32 rolls |

## Roles

| Role | Key numbers | Guide |
|---|---|---|
| 808 | long `decay`, `glide` about 80–150 ms on slides, mono | role-808, tool-808 |
| kick | short and clicky, leaves the sub to the 808 | role-kick, craft-kick-bass |
| hats | well under the kick, rolls at phrase ends | role-hats-cymbals |
| melody | one carrier, dark and sparse | role-lead, role-pluck-arp |
| pad | dark, quiet, optional | role-pad |

## FX signature

| Genre | Signature | How |
|---|---|---|
| Trap | 808 saturation, dry drums | 808 `drive` and `presence` (`set_808`); 1/4 throws at phrase ends; a "radio" filter (Low cut and High cut) on the music bus in the intro |

- Mono low end. The kick and the 808 share the sub: a `duck` on the 808 from the kick, or kick and 808 hits that alternate (craft-kick-bass).
- Drums stay dry; the melody gets a dark reverb and throws.
- Master at −14 LUFS; a loud master only when the user asks (targets: craft-loudness-lufs).

## Reference core

- the half-time snare on step 8;
- fast hats with rolls and velocity ramps;
- a long tuned 808 with slides;
- a dark minor melody on a bell, flute or pluck;
- a sparse arrangement.

## Beginner mistakes

- The 808 is out of key with the melody.
- The kick and the 808 fight in the sub.
- Rolls everywhere, without phrase logic.
- Too many melodic layers.
- A pure-sine 808 that disappears on phones: raise `presence` (role-808).

## Engine limits for this genre

- No rap or ad-libs: the user's vocal audio, or a beat with room for a vocal (role-vocal-substitute).
- No reverse or tape stop: an 808 dive (role-808) or a drop-out of the drums for the transition (craft-transitions).

## Related

`role-808`, `craft-drum-programming`, `stage-track-card`, `craft-groove-swing`
