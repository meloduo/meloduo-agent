---
name: tool-web-plugins
description: Read and set the user's own web plugins (WAM effects and instruments) with get_web_plugin and set_web_plugin; the way to a chorus, phaser or another effect Meloduo lacks when the user has added one.
---

# Web plugins (WAM)

## When

The user added a web plugin (an effect of type `wam` in a chain, or a channel with a web instrument), or a track needs an effect Meloduo does not have (chorus, phaser, flanger, tape) and the user already has a plugin for it.

## Practices

- A plugin the user chose is part of their sound: use it for what it is for, and keep its settings unless the track asks for a change.
- Do not ask the user to install a plugin just for one track. Offer the built-in substitute first (craft-engine-limits) and mention the plugin as an option.

## Meloduo recipe

1. Find it: `get_project_state` shows effects of type `wam` in channel, bus and master chains, and channels with a web instrument.
2. Read the knobs: `get_web_plugin` with `effectId` (effect) or `channelId` (instrument). It returns each knob's `id`, `label`, `type` (float, int, boolean, choice), `min`, `max`, `default`, `value`, `units` and `choices`. It needs the network: the plugin loads from its own address.
3. Turn knobs: `set_web_plugin` with `params` as `{knob id: value}` in the plugin's own units, for example `{"effectId":"e7","params":{"/kbverb/feedback":0.3}}`. Other knobs stay. A choice or boolean takes a whole number.
4. A web instrument plays notes like any channel: write them with `add_notes`.
5. You cannot add a web plugin; the user does that.

## Check

Render the part with stems before and after; compare `bands` and `space` the way you would for a built-in effect. Web plugin knobs have no automation lanes: set them once per track, or move the part to a bus whose built-in plugins you can automate.

## Engine limits

Web plugins load over the network and run in the tab; a heavy plugin can raise the frame cost. If one fails to load, say so and use the built-in substitute.

## Related

`craft-engine-limits`, `tool-buses-sends`, `tool-synth`
