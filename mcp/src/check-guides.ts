// Checks guides/ and skills/ (frontmatter, sizes, links, aliases) and every public .md for private text.
import { readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { ALIASES } from './guides.js';

const root = fileURLToPath(new URL('../../', import.meta.url));
const MAX_GUIDE = 8192;
const ID = /\b(?:stage|role|genre|tool|craft)-[a-z0-9]+(?:-[a-z0-9]+)*\b/g;
const PRIVATE = /mini-daw|reports\/|PLAN\.md|C:\\Users|\/Users\/|Acer|IShmelS|MELODUO_BRIEF|docs\/archive|docs\/superpowers|[\u0400-\u04FF]/;

const errors: string[] = [];
const guides = new Map<string, string>();
const read = (p: string) => readFileSync(p, 'utf8').replace(/\r\n/g, '\n');
for (const f of readdirSync(root + 'guides').filter((f) => f.endsWith('.md'))) guides.set(f.slice(0, -3), read(root + 'guides/' + f));
const skills = new Map<string, string>();
for (const d of readdirSync(root + 'skills')) skills.set(d, read(`${root}skills/${d}/SKILL.md`));

function check(file: string, name: string, text: string) {
  const fm = /^---\nname: (.+)\ndescription: (.+)\n---\n/.exec(text.replace(/\r\n/g, '\n'));
  if (!fm) errors.push(`${file}: frontmatter must be name and description, one line each`);
  else if (fm[1] !== name) errors.push(`${file}: name "${fm[1]}" differs from the file name`);
  for (const id of new Set(text.match(ID) ?? [])) if (!guides.has(id)) errors.push(`${file}: links to missing guide ${id}`);
  const bad = PRIVATE.exec(text);
  if (bad) errors.push(`${file}: private or non-English text "${bad[0]}"`);
}
for (const [id, text] of guides) {
  check(`guides/${id}.md`, id, text);
  if (Buffer.byteLength(text) > MAX_GUIDE) errors.push(`guides/${id}.md: ${Buffer.byteLength(text)} bytes, split it (max ${MAX_GUIDE})`);
  if (!/\n## Related\n+`/.test(text)) errors.push(`guides/${id}.md: no Related section`);
}
for (const [id, text] of skills) check(`skills/${id}/SKILL.md`, id, text);
for (const [alias, id] of Object.entries(ALIASES)) if (!guides.has(id)) errors.push(`mcp/src/guides.ts: alias "${alias}" points to missing guide ${id}`);
for (const f of ['README.md', 'AGENTS.md', 'mcp/README.md']) {
  const bad = PRIVATE.exec(read(root + f));
  if (bad) errors.push(`${f}: private or non-English text "${bad[0]}"`);
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.error(`guides ok: ${guides.size} guides, ${skills.size} skills`);
