---
name: genre-pop
description: Pop numbers without vocals: a voice-like lead, piano or guitar, a clean lead with throws.
---

# Pop

Genre numbers are orientation; the reference wins. Swing values: craft-groove-swing.

## When

Modern mainstream pop: short songs, a hook you can sing back, a wide and polished mix. The voice is the core and Meloduo cannot sing: settle the topline with role-vocal-substitute before you start.

## Tempo and drums

- Tempo usually sits in two clusters: about 90–105 and 115–130 BPM. A half-time trap-pop beat runs at 140–160 and feels like 70–80.
- 4/4 and a straight grid.

| Feel | Kick | Snare / clap | Hats |
|---|---|---|---|
| Dance-pop | 0, 4, 8, 12 | clap 4, 12 | eighths or sixteenths |
| Trap-pop, half-time | 0, 10 | clap 8 | sixteenths, rolls before 8 (genre-trap) |

## Swing and groove

Pop is usually straight: `swing` 0. A dance-pop groove can borrow the house values from craft-groove-swing. Shape the hats with a repeating accent pattern; keep the kick and clap steady.

## Harmony

- Four-chord loops dominate: I–V–vi–IV, vi–IV–I–V.
- Diatonic triads and add9 chords; voicings in craft-harmony-voicing.
- Key changes are rare in current pop.

## Melody defaults

| Genre | Scale | Notes per bar | Range | Register | Phrase form |
|---|---|---|---|---|---|
| Pop (instead of vocals) | major pentatonic, major | 4–8, "syllables" | 7–12 | 60–79 | A A' B A' |

## Form

- Reach the first chorus early, around 0:45–1:00. Many hits open with the hook or an intro of a few seconds.
- Orientation in bars: Intro 0–4, Verse 8–16, Pre-chorus 4–8, Chorus 8, Post-chorus 4–8, Verse 2, Pre-chorus, Chorus, Bridge 4–8, final Chorus ×2 (the Song form in stage-form).
- Total length about 3 minutes.
- A fade-out ending (pop before about 2005, Euro-disco, synthwave): repeat the last chorus and lower the master `volume` with `set_automation` (owner master) over the last 8–16 bars, from the current level to about −40 dB. Do it last, after the master stage (craft-transitions, Outro).
- The chorus is clearly bigger than the verse: more parts, more width, a higher register (craft-section-contrast).

## Palette

| Genre | Defining timbre | Roles usually present | Roles usually absent |
|---|---|---|---|
| Pop | "voice-like" lead or vocal, piano or guitar | pop bass, keys or guitar, pad, pluck hook, lead | heavy texture, long arp |

## Sound candidates

| Genre | Role | Candidates | Edit for character |
|---|---|---|---|
| Pop | bass | Bass/Pop Pop synth bass; guitar Finger bass | — |
| | chords | Keys Synth piano, Electric piano; guitar Steel strum, Nylon, Jangle 12; Pad Warm pad | — |
| | hook | Lead/Pop Vocal lead, Pop pluck lead; Pluck/Tropical Tropical pluck; Pluck/Future bass Future pluck; Bell Glass bell | — |

## Roles

| Role | Key numbers | Guide |
|---|---|---|
| hook (lead or vocal substitute) | register 60–79, the loudest melodic part, centre | role-vocal-substitute, role-lead |
| bass | chord roots, locked with the kick; an 808 in trap-pop | role-sub-bass, role-808 |
| chords | keys or guitar, wider in the chorus | role-keys, role-rhythm-guitar |
| pad | enters in the chorus | role-pad |
| pluck hook | answers the lead in its gaps | role-pluck-arp, craft-call-response |

## FX signature

| Genre | Signature | How |
|---|---|---|
| Pop | a clean lead and throws | reverb 1.2–2 s on the lead, 1/4 throws at phrase ends, `width` on chorus pads |

- Pop is usually the widest genre in stereo: wide pads and doubles in the chorus, kick, bass and lead in the centre (craft-stereo-width).
- Keep the lead fairly dry and upfront. A `duck` on the reverb and delay bus, keyed from the lead, lets the throws bloom in the gaps (tool-sidechain-duck).
- Sidechain pumping belongs to dance-pop only.
- Master at −14 LUFS; a loud master only when the user asks (targets: craft-loudness-lufs).

## Reference core

- a hook you can sing back, repeated in every chorus;
- a chorus clearly bigger than the verse;
- a short intro;
- a clean lead in the centre, above everything else;
- a four-chord loop.

## Beginner mistakes

- The intro is too long.
- The chorus is no bigger than the verse.
- The lead is buried under chords and pads.
- Several hooks compete at once.

## Engine limits for this genre

- No singing: the user's vocal audio (tool-sampler) or, with consent, an instrumental topline (role-vocal-substitute).
- Width on leads and pads: a chorus (Juno I, "Subtle widen") and `width`; skip the chorus on a synth with heavy unison (tool-modulation-fx).

## Related

`role-vocal-substitute`, `role-lead`, `stage-track-card`, `craft-groove-swing`
