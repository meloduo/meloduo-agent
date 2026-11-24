---
name: genre-rnb
description: Contemporary R&B numbers: slow half-time or laid-back grooves, extended chords on electric piano, a soft 808, room for the vocal.
---

# R&B

Genre numbers are orientation; the reference wins. Swing values: craft-groove-swing.

## When

Contemporary R&B: intimate, lush chords, a slow groove, the voice on top. The voice is the core and Meloduo cannot sing: settle the topline with role-vocal-substitute before you start.

## Tempo and drums

- Tempo usually 60–100 BPM; sources disagree, so follow the reference.
- Two common feels: half-time trap drums written at about 140 (felt as 70), or a laid-back backbeat at 75–95.

| Feel | Tempo | Kick | Snare / clap | Hats |
|---|---|---|---|---|
| Half-time | 140 (felt 70) | 0, 10, follows the 808 | 8 | sixteenths with triplet flourishes (`{…}in2`) |
| Backbeat | 90 (75–95) | follows the 808 or bass | 4, 12 | eighths or sixteenths, soft |

- Drums are softer than in trap: a rim or a soft clap, fewer rolls.

## Swing and groove

- Light swing. The half-time feel uses the trap values in craft-groove-swing (hats 0–16); a laid-back 808 groove can borrow the lo-fi values (20–48).
- Soft ghost snares (`g`) and accented hats keep it human.
- Keys: `humanize_notes` with `timingMs` 5–10; notes of one chord move together.

## Harmony

- Extended chords: maj7, m9, 11ths, 13ths. A ninth chord is a triad plus the 7th and 9th: Dm9 = D F A C E.
- Typical loops: ii9–V13–Imaj9, vi9–ii9–V, IVmaj7–iii7; minor keys with a dorian colour.
- Dense chords (4–6 notes) with a sparse rhythm: one or two chords per bar.
- Keep the voicing above the 808's range; a low cluster turns into mud (craft-harmony-voicing).

## Form

- Orientation in bars: Intro 4, Verse 16, Pre-chorus 4–8, Hook 8, Verse 16, Hook 8, Bridge 8, Hook or Outro (stage-form).
- The hook adds a part or width; the verse leaves room for the vocal.

## Roles

| Role | Preset candidates | Key numbers | Guide |
|---|---|---|---|
| keys | Keys Electric piano, Wurly, Soft keys | extended voicings, the main harmony | role-keys |
| bass | `voice` "808" Classic, Sub, Long trap; Bass Clean sub | soft, little `drive`, follows the root | role-808, role-sub-bass |
| pad | Pad Warm pad, Lo-fi pad; Strings String pad | quiet, under the hook | role-pad |
| topline | Lead/Pop Vocal lead; Bell Glass bell; Lead/Hip-hop Trap flute | with the user's consent; centre, loudest | role-vocal-substitute, role-lead |
| drums | Trap kit or 808 kit | under the topline | role-snare-clap, role-hats-cymbals |

## FX and mix signature

- The vocal or topline sits in the centre and loudest; long Plate or Hall reverb and delay throws on it (tool-reverb, tool-delay).
- Backing parts and pads wide; drums below the vocal.
- Keys with a short room; the Electric piano's built-in tremolo is part of the sound.
- A soft 808: low `drive`, enough `presence` to be heard on phones (role-808).
- Master at −14 LUFS; a loud master only when the user asks (targets: craft-loudness-lufs).

## Reference core

- extended chords on electric piano or Wurly;
- a vocal-first mix;
- a slow groove, half-time or laid back;
- a soft 808 or sub;
- space around the melody.

## Beginner mistakes

- Dense chords in the low register fight the 808.
- The drums are louder than the vocal.
- Busy keys leave no room for the vocal melody. With a vocal to come, cut chords and pads 2–3 dB at 1–4 kHz (role-vocal-substitute).

## Engine limits for this genre

- No singing and no vocal harmonies: the user's vocal audio (tool-sampler) or, with consent, an instrumental topline.
- No chorus on keys and pads: synth unison, the Width macro and `width` (craft-engine-limits).

## Related

`role-vocal-substitute`, `role-keys`, `genre-trap`, `craft-harmony-voicing`, `role-808`
