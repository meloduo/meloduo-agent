# Sound and transition recipes

Check parameters and ranges with `get_synth`, `get_effect`, `get_drum`: a misspelled name returns the list of valid ones.

Contents:
1. 808
2. Bass
3. Guitars
4. Lead and hook
5. Pad, keys, pluck
6. Drums
7. Transitions by genre
8. Substitutes for what is missing

## 1. 808

Role: the bass and the continuation of the kick at once. The main mistake is "just a sub": a sine without harmonics is inaudible on a phone or laptop.

The instrument is the Meloduo 808: `add_channel` with `voice` "808" and `preset`, then `set_808`; `get_808` gives parameters, presets and notes. The voice is mono: from a chord only the lowest note sounds.

Presets: TR-808 (clean, short), Trap (start here), Long trap, Drill slide, Distorted, Rage, Boom bap, Phonk, Sub, Punchy.

Main knobs:
- `punch` and `punchTime`: a pitch drop from above at the start of the note; more than 3 semitones clicks on short notes;
- `decay`: the tail while the note is held; `release` 30–150 ms; under 20 ms clicks at the cut-off;
- `attack` 1–5 ms: zero clicks, 30 ms or more kills the hit;
- the 808 sounds only while the note is held, then fades over `release`: a one-step note is a short click even with `decay` 7 s; hold notes until the next one (`:N` in `line`, `length` in `notes`);
- `glide`: a slide happens only with an overlap of 20 ms or more (shorter retriggers): in `line` start the next note half a step early, `"F1:4 Ab1:4-12t"`, or in `notes` give the first note a `length` past the start of the next; punch and attack do not repeat on a slide; `-Nt` shifts the whole note including its end, so in a chain of slides each next one needs 12t more: `"F1:4 Ab1:4-12t C2:4-24t"`;
- `glide` is the slide time, one per channel; a long overlap does not slow the slide; a `glide` curve (`set_automation`) works: the value is read at the start of each note;
- `drive` and `driveMode` give dirt, not mids: with Soft, Tube and Hard the harmonics stay below 250 Hz (above that under 3 % even at `drive` 1); only Fold adds mids (`drive` 0.5 gives about 25 % above 250 Hz without `presence`), but it is harsh, for rage and drill; `tone` cuts the top of the body after the drive and leaves the `presence` layer alone;
- `presence`: mids for the phone: a built-in upper layer, a square an octave above the note at 250 Hz–2 kHz; on F1, `presence` 0.5 gives about 13 % of the energy above 250 Hz, 1 about 40 %; use 0.5–0.8;
- `click`: the attack click; `lowCut`: cuts the rumble below 25–40 Hz.

`render_preview` warns `thin808` when less than 7 % is above 250 Hz: raise `presence`. Trap, Long trap and Drill slide pass as they are; Sub and TR-808 do not, by design.

The 808 rhythm follows the genre. In an atmospheric, slow beat each hit stands apart: rests between notes, a slide as an accent rather than on every note. Notes butted together or overlapping merge into one long drone. In dense trap the 808 plays more often, but still with its own pattern rather than as a pedal.

Simpler is often better: one oscillator with soft saturation hits harder than a stack of layers, filter envelopes and drive.

808 clacks and clicks, check in this order:
1. `release` and `attack` are too short;
2. a `duck` from the kick with `attack` 0–1 ms cuts the start of the note: set 5–10 ms and a depth of 2–4 dB;
3. `punch` stronger than 2–3 semitones on short notes;
4. `driveMode` Hard or Fold with a high `drive`.
The numbers barely show a click: look at the parameters.

Signs in the stem:
- a noticeable share in bass and lowMid rather than everything in sub; something in mid from saturation;
- `crestDb` not too high (the tail holds its level);
- no `clash` with the kick: the kick is short and clicky, the 808 long, or there is a `duck` from the kick.

Why drive alone does not help: the harmonics of a low note (40–60 Hz) land at 80–250 Hz, which is bass again, not mid. `presence` gives the mids; Soft, Tube or Hard `drive` and a `sat` on the channel do not. Fold gives them too, with a harsh sound.

Variants to compare: Trap as is; soft (Soft, little `drive`, `presence` 0.4); dirty (Distorted or Rage); with a different `punch` and `glide`.

An 808 dive for a transition: the last note before the drop is long, and the next one an octave lower overlaps it (`-12t`). `glide` sets the dive speed: a long overlap does not slow it. For a dive slower than the other slides, raise the `glide` curve before the drop (`set_automation` on the 808 channel, param `glide`) and add a long overlapping note an octave lower.

## 2. Bass

| Type | Base | What makes the sound your own | Sign in the stem |
|---|---|---|---|
| Sub bass | sine | sub plus a top: a quiet saw through `mixB` or `drive` | some bass and a little lowMid |
| Picked pop-punk bass | guitar Pick bass | amp Bass grit, moderate `gain`; higher `hardness` for attack | the mids read, the low end does not boom |
| Finger bass | guitar Finger bass | `pickup` and `pickPos` for warmth or click | soft highMid |
| Synth bass (synthwave, house) | saw, Ladder | filter envelope 150–250 ms, `drive` | lowMid and mid growl on the attack |
| Reese (DnB) | two detuned saws | slow LFO on cutoff or detune, saturation | wide mid, mono low end |

## 3. Guitars

A flat guitar is a clean sound without mids and identical doubles. The `amp` gives the distortion.

1. **Amp.** `gain` by genre: crunch about 20, pop-punk and rock 24–32, aliasing starts above 34. `mid` up for pop-punk and rock, `bass` moderate (leave the low end to the bass), `treble` for brightness. A 4x12 cabinet is denser and lower, 2x12 medium, 1x12 brighter. The amp's `out` sets the level after distortion; the guitar `gain` barely changes it.
2. **The voice itself.** `pickPos` (near the neck warmer, near the bridge brighter and meaner), `pickup`, `hardness` (pick attack), `mute` for a chug.
3. **Double.** Two rhythm guitar channels, panned apart (±0.6–1). Make them differ beyond panning: another `pickPos`, `position`, `feel`, a slightly different `gain` or cabinet. Identical doubles collapse into mono.
4. **Room for vocals.** If there will be vocals: a light 2–3 kHz cut on the guitar bus rather than quiet guitars.
5. **Space.** A short room or slapback echo (1/8 or 1/8T), not a long hall.

Signs in the stem: noticeable mid and highMid; doubles with different spectra; less low end (bass) in the guitars than in the bass.

Variants to compare: 4x12 with high `gain` and raised `mid`; 2x12 with less `gain` and bright `treble`; different `pickPos` on the double.

Lead guitar: Lead with more `gain` than the rhythm, even more mids, a 1/4 or 1/8D echo on a send.

In metal and heavy rock a tight wall matters more than anything else:
- **Tuning.** Low tuning (Drop C, Drop B) is the core of the genre. The Electric range starts at note 40 (E2) and plays nothing lower. Workaround: `set_main_pitch` down for the whole project, and write the notes higher by the same interval; tell the user that the project key and the sounding key differ.
- **Chug.** `mute` 0.3–0.5: the preset's 0.75 sounds dull and quiet. The chug locks with the kick in rhythm as well as in notes.
- **Tightness.** amp `gain` 30–34, Low cut on the guitars at 80–120 Hz (leave the low end to the bass and kick), do not push `mid`: in metal it is often flat or slightly down, with a brighter top.
- **Wall.** 2–4 rhythm guitars: one pair of doubles wide (±0.8–1), a second pair closer to the centre with another cabinet or `pickPos`. All play the same riff note for note.
- **Drums.** A kick with a strong `click` so the double pedal reads; a dense snare; parallel distortion on the drum bus.
- Signs in the stem: the wall has plenty of mid and highMid and little bass; the kick has its click in highMid.

## 4. Lead and hook

- Start with the voice mode: `mode` Legato, `oscPhase` Free; `envAmt` 0.2–0.4 on short notes.
- The face of the sound: `warp` (Sync, Bend, FM, Quantize for 8-bit), the filter model, vibrato (LFO → pitch, slow and light, starting after the attack).
- Character: `sat` Soft or Tube with `mix` below 100 %, an insert delay with a low `mix`.
- 8-bit lead: square, `warp` Quantize, no unison, optional fast vibrato, a short slapback delay.
- Signs: a higher share in mid and highMid than the chords; the hook does not sink into lowMid.
- A thin lead (square, sine, bell, flute, thin FM) needs a layer for body: the same part an octave lower, or a saw 6–10 dB quieter, another timbre. Compare the "with layer" variant against "without".

Variants: clean (little saturation), dirty (sat, drive), moving (LFO on pos or cutoff).

## 5. Pad, keys, pluck

| Role | What makes the sound your own | Sign |
|---|---|---|
| Pad | slow LFO on pos or cutoff, unison and `width`, attack 300 ms+; a pad or choir carrying the hook needs an attack shorter than the notes (50–150 ms), or short notes do not sound | small crest, moderate lowMid share (otherwise mud) |
| Keys | velocity → cutoff, wow for lo-fi (a fast, light LFO → pitch), `sat` Tube | a strike on the attack, warm mids |
| Pluck | filter envelope 150–300 ms, a short room or a 1/16 delay | high crest, some highMid |
| Arp | short gate, delay; under the hook 8–12 dB quieter than the hook and out of its register, or playing in bars where the hook rests | does not cover the hook's spectrum |
| Stab | a chord in one note (osc B/C on intervals), short decay | attack click, mids |

## 6. Drums

- After `add_kit`, change a couple of voices so the kit is your own: kick `decay` and `tune`, a snare from another folder, kick `click`, snare `wires` and `tension`.
- An acoustic kick with a weak attack: raise `click`; if it booms, lower `decay`.
- Pop-punk: a Rock snare with `rimshot`, a dense room on the drum bus, a clap on top of the snare in the chorus.
- Trap: a short clicky kick so it does not fight the 808; hats with rolls.
- Signs: kick has a bass share and a click in highMid; snare mid and highMid; hats almost no low end.

## 7. Transitions by genre

Synthesize a transition from what you have. Use 2–3 different techniques per track.

**Pop-punk, rock:**
- guitar feedback: a long lead guitar note, high amp `gain`, a channel volume lane rising over 1–2 bars before the drop;
- a run down the neck: a fast guitar line down in sixteenths in the mode, in the last bar;
- a tom fill in the last bar; a crash on beat one;
- a stop bar: everything rests except one hit or chord;
- a drum rise: snare eighths with rising velocity.

**Trap, hip-hop:**
- an 808 dive (section 1);
- a 1/32 hat roll with rising velocity, the last bar without kick;
- a "tape stop": High cut on the music bus sweeping down over half a bar and the bus volume going down;
- silence for one beat before the drop.

**EDM, synthwave, house:**
- a noise sweep: a synth channel with `noise` 1, everything else quiet, a `cutoff` or m1 lane rising over 4–8 bars, medium resonance, Hall reverb;
- a downlifter: noise or a saw, an env → pitch row downward, a long envelope, after the drop;
- an impact: a kick (or Tom) with a long `decay` and a Hall send on one note, plus a low sub note;
- a rise through a macro: m1 → cutoff and resonance on a pad or lead;
- a gated rise: lfo2 → amp on a pad, with a lane taking `l2Sync` from 1/8 to 1/32.

**Lo-fi:**
- "record switched off": High cut down and volume down over a bar;
- a keys phrase with a long reverb at the end of a phrase;
- a bar without drums.

**Ambient:** a slow rise in texture and reverb volume, no hits.

FX presets (Riser, Downlifter, Noise sweep, Impact boom) are the fallback. If you take a preset, change its pitch, length and space so it is not the same as in the last track.

## 8. Substitutes for what is missing

| Missing | Substitute |
|---|---|
| chorus | synth unison, `width`, the Width macro; a double with another timbre |
| gate, gated reverb | lfo2 → amp on the synth; a short reverb with a high `lowcut` on the snare |
| bitcrusher | `warp` Quantize on the synth; sat Hard and High cut |
| tape, wow | LFO → pitch, fast and light; sat Tube; High cut 6–10 kHz |
| reverse | a synth with a long attack, cut off on the beat; a volume lane rising with a sharp reset |
| melodic 808 | section 1 |
