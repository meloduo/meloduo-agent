---
name: tool-delay
description: The delay: tempo-synced times, feedback, tone, and throws at phrase ends.
---

# Delay and throws

Tempo-synced times: a quarter = 60000 / BPM ms, an eighth is half that, a sixteenth a quarter. At 128 BPM: 1/4 = 469 ms, 1/8 = 234 ms, 1/16 = 117 ms.

## Throws

A throw is an echo of one note or a phrase ending. Sends cannot be automated, so the Throw bus does it.

1. The hook sends to Throw all the time. Set the send level by rendering the throw bar: the throw is audible but no louder than the phrase. A long tail with feedback builds up level: −20…−10 dB is often enough.
2. The Throw bus volume sits at −60 dB.
3. Before the last note of the phrase: −60 → 0 dB over 1/16, hold to the end of the note, back to −60 one beat after it.
4. The delay and reverb tail carries across the section boundary.

A throw on the end of a hook phrase is a cheap, audible move for a chorus or drop.

## Parameters and tone

`sync` Off, 1/16, 1/8T, 1/8, 1/8D, 1/4, 1/4D, 1/2; `time` (10–2000 ms, used when `sync` is Off); `feedback` 0–0.95; `tone` 500–20000 Hz (a low-pass on the repeats); `pingpong`; `mix`. `time`, `feedback`, `tone` and `mix` can be automated.

- An Echo bus with `tone` 3–5 kHz keeps the repeats darker than the hook, so they do not fight it.
- Feedback 0.15–0.35 for a groove echo; more for throws and dub.
- In a build, a `tone` lane from about 2 to 6 kHz opens the echo toward the drop.

## Related

`tool-buses-sends`, `tool-automation`, `craft-space-depth`
