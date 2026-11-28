import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

// The package ships the guides in dist/guides; from source they sit in the repository root.
const DIRS = ['./guides/', '../../guides/'].map((p) => fileURLToPath(new URL(p, import.meta.url)));
const dir = () => DIRS.find((d) => existsSync(d));
const VERSION: string = (() => {
  try {
    return JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8')).version;
  } catch {
    return 'unknown';
  }
})();

const MAX_TOPICS = 4;
const MAX_BYTES = 24_000;
// Words agents use for a topic that is not the start of a guide id.
export const ALIASES: Record<string, string> = {
  'gated-reverb': 'tool-reverb', 'gated-snare': 'role-snare-clap', sidechain: 'tool-sidechain-duck', ducking: 'tool-sidechain-duck',
  pumping: 'tool-sidechain-duck', swing: 'craft-groove-swing', groove: 'craft-groove-swing', humanize: 'tool-note-editing',
  lufs: 'craft-loudness-lufs', loudness: 'craft-loudness-lufs', mastering: 'tool-master-loudness', master: 'stage-master', 'stage-10': 'stage-master', stage10: 'stage-master', finish: 'stage-master', finishing: 'stage-master', delivery: 'stage-master', 'master-chain': 'stage-master', 'true-peak': 'stage-master',
  vocals: 'role-vocal-substitute', vocal: 'role-vocal-substitute', sample: 'tool-sampler', samples: 'tool-sampler',
  notation: 'tool-notation-lines', euclid: 'tool-notation-lines', triplets: 'tool-notation-lines', limits: 'craft-engine-limits',
  gate: 'tool-guitar-rig', drive: 'tool-guitar-rig', amp: 'tool-guitar-rig', rig: 'tool-guitar-rig', chorus: 'tool-modulation-fx', flanger: 'tool-modulation-fx', phaser: 'tool-modulation-fx', 'post-punk': 'genre-post-punk', darkwave: 'genre-post-punk', coldwave: 'genre-post-punk', mud: 'craft-frequency-slots', 'kick-and-bass': 'craft-kick-bass', wet: 'craft-space-depth',
  width: 'craft-stereo-width', mono: 'craft-low-end-mono', hook: 'stage-hook', melody: 'craft-melody-motif', chords: 'craft-harmony-voicing',
  drill: 'genre-trap', kawaii: 'genre-future-bass', rock: 'genre-rock', 'hard-rock': 'genre-rock', 'classic-rock': 'genre-rock', punk: 'genre-pop-punk', 'lo-fi': 'genre-lofi', 'drum-and-bass': 'genre-dnb', garage: 'genre-uk-garage',
  'euro-disco': 'genre-eurodisco', italo: 'genre-eurodisco', 'italo-disco': 'genre-eurodisco', 'euro-pop': 'genre-eurodisco',
};

type Guide = { id: string; axis: string; description: string; text: string };

function load(): Map<string, Guide> {
  const d = dir();
  const out = new Map<string, Guide>();
  if (!d) return out;
  for (const f of readdirSync(d).filter((f) => f.endsWith('.md')).sort()) {
    const id = f.slice(0, -3);
    const text = readFileSync(d + f, 'utf8').replace(/\r\n/g, '\n');
    out.set(id, { id, axis: id.split('-')[0], description: /^description: (.*)$/m.exec(text)?.[1] ?? '', text });
  }
  return out;
}

const bytes = (s: string) => Buffer.byteLength(s, 'utf8');
const body = (g: Guide) => g.text.replace(/^---\n[\s\S]*?\n---\n+/, '');
const related = (g: Guide) => [...(/## Related\n+([^\n]*)/.exec(g.text)?.[1] ?? '').matchAll(/`([a-z0-9-]+)`/g)].map((m) => m[1]);
const sections = (g: Guide) => body(g).split(/\n(?=## )/);

function resolve(topic: string, all: Map<string, Guide>): string | undefined {
  const q = topic.trim().toLowerCase().replace(/[\s_]+/g, '-');
  if (all.has(q)) return q;
  if (ALIASES[q] && all.has(ALIASES[q])) return ALIASES[q];
  const ends = [...all.keys()].filter((id) => id.endsWith('-' + q));
  return ends.length === 1 ? ends[0] : undefined;
}

function suggest(topic: string, all: Map<string, Guide>): string[] {
  const words = topic.toLowerCase().split(/[^a-z0-9]+/).filter((w) => w.length > 1);
  const score = (g: Guide) => words.reduce((s, w) => s + (g.id.includes(w) ? 3 : 0) + (g.description.toLowerCase().includes(w) ? 1 : 0), 0);
  return [...all.values()].map((g) => [g.id, score(g)] as const).filter(([, s]) => s > 0).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([id]) => id);
}

export function getGuide(args: unknown): { result?: unknown; error?: string } {
  const a = (args ?? {}) as { topics?: unknown; section?: unknown; detail?: unknown };
  const all = load();
  if (!all.size) return { error: 'The guides folder is missing from this bridge install. Read the guides at https://github.com/meloduo/meloduo-agent/tree/main/guides instead.' };
  if (a.topics === undefined || (Array.isArray(a.topics) && !a.topics.length))
    return { result: { libraryVersion: VERSION, stages: 'A whole track goes stage-brief, stage-track-card, stage-groove-harmony, stage-hook, stage-full-drop, stage-form, stage-variations-transitions, stage-fx-movement, stage-balance, stage-master (stage 10, the last: master chain, loudness, delivery).', guides: [...all.values()].map((g) => ({ id: g.id, axis: g.axis, description: g.description, bytes: bytes(g.text) })) } };
  if (!Array.isArray(a.topics) || !a.topics.every((t) => typeof t === 'string')) return { error: 'topics must be a list of guide ids. Call get_guide with no arguments for the index.' };
  if (a.topics.length > MAX_TOPICS) return { error: `At most ${MAX_TOPICS} topics per call. Split the call.` };
  if (a.section !== undefined && typeof a.section !== 'string') return { error: 'section must be a heading text, for example "Check".' };
  if (a.detail !== undefined && a.detail !== 'full' && a.detail !== 'summary') return { error: 'detail is "full" or "summary".' };
  const guides: object[] = [];
  const missing: { id: string; suggest: string[] }[] = [];
  const truncated: string[] = [];
  let used = 0;
  for (const topic of new Set(a.topics as string[])) {
    const id = resolve(topic, all);
    if (!id) {
      missing.push({ id: topic, suggest: suggest(topic, all) });
      continue;
    }
    const g = all.get(id)!;
    const title = /^# (.*)$/m.exec(g.text)?.[1] ?? id;
    let text = body(g);
    if (a.section) {
      const want = (a.section as string).toLowerCase();
      const s = sections(g).find((s) => s.startsWith('## ') && s.slice(3).split('\n')[0].toLowerCase().includes(want));
      if (!s) {
        missing.push({ id: `${id}#${a.section}`, suggest: sections(g).filter((s) => s.startsWith('## ')).map((s) => s.slice(3).split('\n')[0]) });
        continue;
      }
      text = s;
    } else if (a.detail === 'summary') {
      text = [g.description, 'Sections: ' + sections(g).filter((s) => s.startsWith('## ')).map((s) => s.slice(3).split('\n')[0]).join(', ')].join('\n\n');
    }
    if (used + bytes(text) > MAX_BYTES) {
      const cut = Buffer.from(text).subarray(0, Math.max(0, MAX_BYTES - used)).toString('utf8');
      text = cut.slice(0, Math.max(0, cut.lastIndexOf('\n')));
      truncated.push(id);
    }
    used += bytes(text);
    guides.push({ id, ...(id !== topic ? { asked: topic } : {}), title, text, bytes: bytes(text), related: related(g) });
  }
  return { result: { libraryVersion: VERSION, guides, ...(missing.length ? { missing } : {}), ...(truncated.length ? { truncated } : {}) } };
}

export const GUIDE_TOOL = {
  name: 'get_guide',
  description:
    'Producer guides for working in Meloduo: stages of a track, sound roles, genres, studio tools and craft. Read-only. Without arguments: the index (id, description). With topics (1–4 ids, or words such as "gated reverb"): the guide texts and related ids; an unknown id comes back in missing with suggestions. section returns one heading only ("Check"); detail "summary" returns the description and headings. Load the genre guide once per track and at most 4 guides per step.',
  inputSchema: {
    type: 'object',
    properties: {
      topics: { type: 'array', items: { type: 'string' }, maxItems: MAX_TOPICS, description: 'Guide ids such as "role-808" or "genre-house"; empty or missing returns the index.' },
      section: { type: 'string', description: 'Return only the section whose heading contains this text.' },
      detail: { type: 'string', enum: ['full', 'summary'], description: 'summary: description and section headings only.' },
    },
  },
};
