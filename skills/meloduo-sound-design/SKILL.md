---
name: meloduo-sound-design
description: Design the sounds of a Meloduo track instead of trusting presets (the 808, bass, guitars, leads, pads, drums and genre transition FX) by making variants, rendering stems and comparing them against role recipes. Use from meloduo-produce (stages 3, 5 and 8), or when the user says a sound in Meloduo is flat, thin, generic, "just a sub", or asks to make or fix a sound, a riser, an impact or a transition.
---

# Sound design in Meloduo

A preset is only a draft: it sounds decent but faceless, and tracks built on presets sound alike. You cannot hear the audio, so make every main sound the way you make a hook: several variants → render stems → compare with the role recipe → pick one.

Numbers in the recipes are guidelines. Genre, reference and the role in the mix matter more than a recipe. Role recipes and transition FX: [recipes.md](recipes.md).

## Measuring sound without ears

`render_preview` with stems gives for each channel:
- `bands`: energy shares: sub 20–60 Hz, bass 60–250, lowMid 250–500, mid 500–2000, highMid 2–6 kHz, high 6 kHz+;
- `lufs`, `peakDb`, `crestDb` (the gap between peak and average: large for a percussive sound, small for a squashed or sustained one);
- `spectrum: true`: 29 third-octave bands, to see a bump or a hole.

What these numbers show:
- "just a sub": almost all energy in sub, nothing in mid and above; on a phone the sound is gone;
- "flat guitar": little highMid and mid against the recipe, low crest, two doubles with the same spectrum;
- "thin" sound: little bass and lowMid where the role needs body;
- "harsh": a bump in highMid;
- "muddy": more lowMid than the neighbours in the same role.

What the numbers do not show: the attack character, movement over time, "beauty". There, rely on the recipe and on what you changed in the parameters yourself.

## Method

1. **Role.** What the sound does in the track and which register it lives in (recipes.md). Who its neighbours in the band are.
2. **Read the preset.** Look at the filter and envelopes: a low preset `cutoff` cuts the harmonics you add with drive; an arp preset may have `arp` off. `get_project_state` with `channelId` gives the parameters and the chain; `get_synth`, `get_effect` with `type` (amp, sat), `get_drum`, `get_808` give the ranges; a `set_guitar` error names the valid guitar knobs. Compare the preset with the role recipe: what is missing.
3. **Variants.** Make 2–3 variants of the main sound on copies of the channel (`add_channel` with the same preset, then edits) or one after another on one channel. Variants differ by a decision, not a detail: another saturation, another filter, another cabinet, another envelope.
4. **Render.** A window where the sound plays with its neighbours (`fromBar`/`toBar`), with stems and `spectrum: true`. The six `bands` often cannot tell variants of one synth apart: look at the third-octave bands where the variants diverge.
5. **Compare** the variants against the role signs in recipes.md and pick one. More mids or drive is not always better: take the variant that has the role signs without excess, and the simpler one when they tie. Delete the extra channels (`delete_channel`). Tell the user your pick and the reason in one line.
6. **Check in the mix.** A sound that is good alone can fight its neighbours: `clash`, masking, excess low end. Fix the sound itself before reaching for EQ.

Which sounds to make this way:
- always the one that carries the hook, and the track's signature sound;
- the bass or 808, and the guitars if there are any;
- the rest when the stem looks faceless or the genre expects a characteristic timbre.

## Transition sounds

The same riser and impact in every track is a preset stamp. A transition is sound design too:
1. Take 2–3 genre techniques from recipes.md (section "Transitions by genre") and synthesize them from what the project has: synth noise, a distorted guitar note, a kick with a long reverb, a bass pitch dive.
2. A track usually has more than one kind of transition. The same sound on every boundary turns into noise.
3. FX presets (Riser, Impact boom) are the fallback. If you take a preset, change it: pitch, length, filter, reverb.

## Check yourself

1. Can you say how the main sound differs from the preset, and why?
2. Are the role signs from recipes.md visible in the stem?
3. Is the bass or 808 audible on a phone: is there energy above 100 Hz?
4. Do the guitars and doubles differ in timbre as well as panning?
5. Are the transitions in the track different, and do they fit the genre?

## Limits

- Drum and sampler parameters cannot be automated; synth pitch moves only through the matrix (`mods` → pitch) and Legato notes, not through a lane.
- There is no chorus, gate, bitcrusher, tape or reverse. Substitutes: recipes.md.
- The 808 is a separate instrument (`voice` "808", `set_808`, `get_808`), not the synth: recipe in recipes.md, section 1.
