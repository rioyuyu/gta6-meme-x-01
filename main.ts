// gta6-meme-x-01 — entry program (Node 22, standard library only).
//
// The entry itself is a post on X: a GTA 6 launch-week meme, posted from a
// public account, whose text carries make.fun and the entrant's play code.
// This program's only job is to hand the house the post's address: it takes
// POST.json from the repository root and places an identical copy in the
// output directory, where the gate picks it up and reads the post from X.
//
// When run outside the grader, point the two environment variables at local
// folders, e.g.:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const LINK_FILE = 'POST.json';

function envOr(name: string, fallback: string): string {
  const value = process.env[name];
  return value === undefined || value === '' ? fallback : value;
}

const repoRoot = envOr('MAKEFUN_BOT_DIR', '/bot');
const outDir = envOr('MAKEFUN_OUTPUT_DIR', '/output');

const sourcePath = `${repoRoot}/${LINK_FILE}`;
const targetPath = `${outDir}/${LINK_FILE}`;

try {
  const contents = readFileSync(sourcePath);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(targetPath, contents);
} catch (error) {
  const detail = error instanceof Error ? error.message : String(error);
  console.error(`Could not hand ${LINK_FILE} from ${repoRoot} to ${outDir}: ${detail}`);
  process.exitCode = 1;
}
