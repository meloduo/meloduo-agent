---
name: stage-master
description: Stage 10 of a track: master chain, loudness target, true peak and the delivery report.
---

# Stage 10. Master and delivery

Follow tool-master-loudness and craft-loudness-lufs. The target is −14 LUFS; go louder only when the user asks in words. A loud genre or reference is not such a request.

**Always**: `truePeakDb` ≤ −1 dBTP and `clipped` 0.

Guidelines: −15…−13 LUFS; limiter `gain` 0–2 dB unless the user asked for a loud master; average limiter reduction 1–3 dB. The shape of the track matters more than the last LU of loudness.

## Related

`tool-master-loudness`, `craft-loudness-lufs`, `craft-delivery-report`
