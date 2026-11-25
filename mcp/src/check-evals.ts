// Validates evals/routing.json and runs a STATIC routing proxy (text matching, not an LLM run).
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

type Item = { id: string; request: string; skill: string; cues: string[]; guides: string[] };
const root = fileURLToPath(new URL('../../', import.meta.url));
const read = (p: string) => readFileSync(root + p, 'utf8').replace(/\r\n/g, '\n');
const items: Item[] = JSON.parse(read('evals/routing.json'));
const router = read('skills/meloduo/SKILL.md');
const genres = /^Genres .*$/m.exec(router)?.[0] ?? '';
const tableRows = (t: string) => t.split('\n').filter((l) => l.startsWith('|'));
const errors: string[] = [];
let total = 0;
let covered = 0;

const ids = items.map((i) => i.id);
if (new Set(ids).size !== ids.length) errors.push('duplicate ids in evals/routing.json');

for (const it of items) {
  const skillFile = `skills/${it.skill}/SKILL.md`;
  if (!existsSync(root + skillFile)) {
    errors.push(`${it.id}: missing skill ${it.skill}`);
    continue;
  }
  const request = it.request.toLowerCase();
  const cues = it.cues.map((c) => c.toLowerCase());
  for (const c of cues) if (!request.includes(c)) errors.push(`${it.id}: cue "${c}" is not in the request`);
  const hit = (l: string) => cues.some((c) => l.toLowerCase().includes(c));
  const skill = read(skillFile);
  // A row counts when its task cell (first cell) holds a cue; guide ids must be backtick-quoted in it.
  const rows = [...tableRows(router), ...tableRows(skill)].filter((l) => hit(l.split('|')[1] ?? ''));
  const genreLine = hit(genres) ? genres : '';
  const description = /^description: (.*)$/m.exec(skill)?.[1] ?? '';
  const routed =
    it.skill === 'meloduo' ||
    router.split('\n').some((l) => l.includes(`\`${it.skill}\``) && hit(l)) ||
    hit(description) ||
    tableRows(skill).some(hit);
  if (!routed) errors.push(`${it.id}: no cue reaches ${it.skill} (router line naming it, its description or its own rows)`);
  for (const g of it.guides) {
    total++;
    if (!existsSync(`${root}guides/${g}.md`)) {
      errors.push(`${it.id}: missing guide ${g}`);
      continue;
    }
    const genre = g.startsWith('genre-') ? g.slice(6) : '';
    const inGenres = genre !== '' && new RegExp(`(?<![-\\w])${genre}(?![-\\w])`).test(genreLine);
    if (inGenres || rows.some((l) => l.includes(`\`${g}\``))) covered++;
    else errors.push(`${it.id}: ${g} is in no task row or Genres line matching ${JSON.stringify(it.cues)} (request: ${it.request})`);
  }
}
console.error(`STATIC routing proxy (text matching, not an LLM run): ${items.length} requests, ${total} expected guides, ${covered} reachable from a row or genre line matching a cue`);
if (errors.length) {
  console.error(`coverage gaps and errors (${errors.length}):\n${errors.join('\n')}`);
  process.exit(1);
}
console.error('evals ok');
