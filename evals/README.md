# Routing evals

`routing.json` holds realistic user requests. Each has the expected entry skill (`skill`), `cues` (words of the request a router keys on), and the guide ids (`guides`) a good agent loads.

## Static check

```
cd mcp && pnpm check-evals
```

It checks that every skill and guide exists and that every cue is a substring of its request. Each expected guide must be backtick-quoted in a task-map row (router or entry skill) whose task cell holds a cue, or be named in the router's Genres line. The entry skill must be reachable from a cue. Any gap fails the run. This is a static text-matching proxy. It does not run a model and cannot show how an agent really routes.

## How to run an agent eval

1. Open a project in Meloduo and connect an agent with the `meloduo` MCP server and the skills installed.
2. Start a fresh agent session for each request in `routing.json`. Give only the `request` text.
3. Let the agent work until it has a plan or a first edit. Note every `get_guide` call and the skill it started from.
4. Score the skill: 1 if the agent started from the expected skill, else 0.
5. Score the guides: recall is expected guides loaded divided by expected guides. Precision is expected guides loaded divided by all guides loaded.
6. Record misses. Fix the router or skill text, or the guide description, and run the request again.
7. Compare scores before and after each change to skills or guides. Run a few requests of the same genre more than once, because agents vary.
