import { test, expect } from 'bun:test';
import { readFileSync } from 'node:fs';
const active = (path) => readFileSync(path, 'utf8').split('\n').filter(line => !line.trimStart().startsWith('//')).join('\n');
test('Usman Idris is absent from active team entries and profile data', () => {
  expect(active('src/components/TeamSection.tsx')).not.toContain('id: "director-administration"');
  expect(active('src/pages/team/TeamMemberDetail.tsx')).not.toContain('"director-administration": {');
});
test('Muddathir Muhammed is absent from active team entries and profile data', () => {
  expect(active('src/components/TeamSection.tsx')).not.toContain('id: "muddathir-muhammed"');
  expect(active('src/pages/team/TeamMemberDetail.tsx')).not.toContain('"muddathir-muhammed": {');
});
