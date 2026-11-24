---
name: craft-loudness-lufs
description: Loudness for streaming and clubs: the default target, loud targets on request, what gives way when targets conflict.
---

# Loudness

## Loudness

The target is −14 LUFS for every genre. Streaming normalizes tracks to −14 anyway, and Meloduo has no normalization: a master at −8 is deafening. Ambient and lo-fi can stay at −16…−14.

Use a loud target only when the user asks in words for a loud or club master. A genre or a reference is not such a request: a pop-punk or rap track still goes to −14 unless the user says "louder", "club" or names a number. Pass a loud target to `render_preview` as `targetLufs`; limiter `gain` of 3–8 dB is normal for it. This table is the only place for loud targets; genre guides point here.

| Genre | Loud target on request, LUFS |
|---|---|
| pop, hyperpop | −9…−7 |
| hip-hop, boom bap, R&B | −10…−8 |
| trap, drill, phonk | −9…−7 |
| pop-punk, rock, metal | −10…−8 |
| house, techno, trance, UK garage, DnB, dubstep | −9…−7 |
| synthwave, Euro-disco, afrobeats, reggaeton | −10…−8 |
| ambient, cinematic, lo-fi | stay at −16…−14 |

Never louder than −7 without the user naming that number.

## When targets conflict

Give way from the bottom up (higher items matter more):
1. `truePeakDb` ≤ −1 dBTP and `clipped` 0;
2. the shape: the breakdown 2+ LU quieter than the drop before it, intro and verse 3+ LU (`loudnessBySection`, "Flat sections");
3. average master limiter reduction up to 4 dB;
4. the loudness target.

A master 1–2 LU below the target is a normal result if the shape would flatten otherwise. Do not push `gain` further by hand: tell the user how much was missing and why.

## Shape over time

- `render_preview` `mix.loudnessByBar` gives loudness per bar (the first 128 bars).
- PLR = `truePeakDb` − `lufs`. Many released masters sit around 8–9 dB; under 6–7 dB the master is usually over-limited.
- The loudest bar is usually 2–4 LU above the integrated loudness.
- A build gets louder bar by bar and jumps on the first bar of the drop.
- A genre loudness target is an option to offer in the track card; −14 LUFS stays the default.

## Related

`tool-master-loudness`, `stage-master`, `tool-render-preview`
