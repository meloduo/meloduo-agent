---
name: craft-candidates
description: Make several candidates, compare them on level-matched numbers and pick one: the shared method for hooks, sounds, transitions and masters.
---

# Candidates, comparison, choice

The best hooks, sounds and transitions are picked from several. Without ears, the comparison must be fair.

1. **2–4 candidates** that differ by a decision, not a detail: another rhythm, another saturation, another cabinet, another loudness target.
2. **The same render window** for all of them, with `stems` and, for sounds, `spectrum: true`.
3. **Equal loudness.** Compare at levels within about ±0.5 LU (trim the faders first): the louder one always seems better.
4. **Criteria first.** Write down what decides before you render: the role signs (role guides), the questions of stage-hook, the shape of the master.
5. **Pick and say why** in one line to the user. Delete the patterns and channels you do not use.
6. **Check the winner in the full mix**: a sound that is good alone can fight its neighbours.

A reference track the user imported can be one more "candidate" to compare against (tool-match-eq).

## Related

`stage-hook`, `tool-render-preview`, `tool-check-melody`
