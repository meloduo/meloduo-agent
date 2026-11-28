---
name: genre-post-punk
description: Post-punk and darkwave (Joy Division, The Cure, Molchat Doma): the bass guitar is the lead, a vintage drum machine, one thin chorused guitar, one synth role at a time, a dry cold mix with reverb on the snare and guitar only.
---

# Post-punk and darkwave

Genre numbers are orientation; the reference wins. Look the named band or track up first, tempo included (craft-reference-analysis). A half-tempo guess is the usual miss.

## When

Use it for post-punk, coldwave, darkwave and the revival (Joy Division, The Cure, Molchat Doma, SadSvit). Louder guitar music goes to genre-rock or genre-pop-punk; synth-led 1980s pop to genre-synthwave.

## Reference core

1. A drum machine, steady, no swing, few fills.
2. A bass guitar with a pick, straight 8ths, loud, carries the hook. Or a mono synth bass in 8ths or 16ths.
3. One thin clean guitar riff with chorus. One simple synth line or a cold pad, not both thick.
4. A dry, narrow, dark, cheap mix. Reverb on the snare, the guitar and the vocal slot, not on everything.
5. A minor key, 3–4 chords, the same loop for the whole song; sections differ by which parts play. `render_preview` does not report "Flat sections" when two or more parts enter or leave between sections; if it still fires, the parts do not change: thin out a section or add a layer in one.

## Tempo

| Style | Tempo |
|---|---|
| Classic post-punk (Joy Division, The Cure) | 120–150 |
| Revival, fast songs (Molchat Doma "Sudno") | 150–165 |
| Revival, dance songs | 120–135 |

Look the song up. A fast song at 80 or 100 BPM does not read as the genre.

## Drums

- Kit "Drum machine 80s" (add_kit): the sound of a 1980s PCM machine, not an analog 808 or 909. A techno kit through a comp and drive on the drum bus is the wrong sound.
- Kick on every quarter, or on 0 and 8. Snare on 4 and 12. Closed hat in 8ths or 16ths. Velocity nearly flat, no swing, no humanize.
- Fills: toms, one bar before a section, not more.
- Defaults off: no comp and drive on the drum bus, no flanger on the hats. A High cut at 10–12 kHz on the drum bus gives the old-machine darkness.

## Bass is the lead

- Use the rig "Post-punk bass" (tool-guitar-rig): bass guitar, comp Bass leveler, amp Clean US with the 8x10 cab, chorus Post-punk bass. Second route: synth "Pulse bass" in straight 8ths.
- Straight 8ths, root motion with one or two passing notes, one repeated motif of 4–8 notes. MIDI 40–57, one string position (`position` about 7).
- It is the loudest melodic stem. Check the bass stem in `render_preview`: at least 40% in 60–250 Hz and at least 10% in 500–2000 Hz. Less low end means a wrong pickup or a pedal that cuts lows (role-bass-guitar).
- Never: an Overdrive or other drive pedal on the bass (it removes the lows), a chorus with `mix` over 0.5, a bass under MIDI 36 for the whole song.

## Guitar and synth

- One guitar riff of single notes or two-note shapes, rig Post-punk chorus. A second guitar only in the chorus section.
- One synth role per section: a cold pad or a lead, not both. The lead is a plain saw or pulse line that answers the bass. No phaser on the pad, no supersaw, no arp.

## Space and mix

- Reverb goes to the snare (Ambience / Gated or a plate, tool-reverb) and the guitar. The bass and the kick get none.
- The vocal slot is a cold, dry space (role-vocal-substitute): a short line, little reverb.
- Keep the master dark (high shelf down above 10 kHz) and narrow. The kick stays in the low end under the bass (craft-kick-bass).

## Form

- Intro: drums and bass alone, 8 bars. Verse: add the guitar. Chorus: add a second guitar or the synth.
- The same chords throughout. The outro strips back to bass and drums.

## Beginner mistakes

- A thin bass that reads only in the mids.
- An analog techno kit, or a 909 with drive.
- Everything in a hall.
- A distorted wall of guitars: that is rock.
- Busy drums, many chords, a pad and a lead at once.

## Related

`role-bass-guitar`, `tool-guitar-rig`, `tool-drums`, `tool-reverb`, `tool-modulation-fx`, `role-vocal-substitute`, `craft-kick-bass`, `genre-rock`, `genre-synthwave`
