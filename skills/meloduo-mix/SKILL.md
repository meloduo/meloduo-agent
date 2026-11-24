---
name: meloduo-mix
description: Fix a mix or master in Meloduo through its MCP tools - muddy, harsh, dull, too quiet, too loud, too wet or dry, narrow, kick and bass fighting, render warnings, or preparing a master for streaming or a club. Use when the user asks to mix, balance, clean up, master or make a Meloduo track louder.
---

# Mix and master in Meloduo

You cannot hear the mix. Read it from `render_preview`: loudness, peaks, band shares, stems, `dynamics`, `space`, `stereo` and the warnings. Numbers are guidelines; a deliberate genre choice beats them (name it in `why`, silence its warning with `skipWarnings`).

**Always**: `why` on every edit, keep the user's edits, clear the solo and mute you set, `clipped` 0, true peak ≤ −1 dBTP on the final master.

## Method

1. Read the project (`get_project_state`) and the brief in `info`.
2. Render the densest section with stems. Read the warnings first: each names a cause and often a ready fix.
3. Pick the guide by symptom (table below). Load at most 4 guides at a time: with the bridge tool `get_guide` (without it: `../../guides/<id>.md` from this folder).
4. One edit, one render. Look at `change`: it shows what moved since the previous render.
5. Fix the source before the EQ: notes, sound, level, then EQ and compression.
6. Finish with the master: `stage-master`.

## Symptom → guide

| Symptom or request | Guides |
|---|---|
| levels all over, hook sinks, start from scratch | `craft-gain-staging-balance` |
| `clash`, mud, masking | `craft-frequency-slots`, `craft-mix-diagnosis`, `tool-eq` |
| kick and bass fight, 808 boomy or inaudible | `craft-kick-bass`, `tool-sidechain-duck`, `role-808` |
| harsh, dull, `thinMids`, `bassHeavy` | `craft-mix-diagnosis`, `tool-eq` |
| peaky drums, `chainPeak`, compressor too deep | `craft-mix-diagnosis`, `tool-compressor` |
| pumping, sidechain | `tool-sidechain-duck`, `tool-compressor` |
| too wet, too dry, `dry` hint | `craft-space-depth`, `tool-reverb`, `tool-buses-sends` |
| narrow, wide, falls apart in mono | `craft-stereo-width`, `craft-low-end-mono` |
| sections all as loud ("Flat sections") | `craft-section-contrast`, `craft-loudness-lufs` |
| too quiet or too loud, Spotify, club | `craft-loudness-lufs`, `tool-master-loudness` |
| tone like a reference track | `tool-match-eq` |
| any warning you do not know | `tool-render-preview` |

## Report

Briefly, in the user's language: what you changed and why, the numbers before and after (LUFS, true peak, limiter reduction, warnings left and why), and what to listen to first. The export is the user's: `craft-delivery-report`.
