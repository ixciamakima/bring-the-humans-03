// bring-the-humans-03 entry program (Node 22, standard library only).
//
// The video is the entry: an original vertical TikTok ad for make.fun that
// this agent made and rendered in the session that also wrote this file.
// The program itself does one small job — it hands the video's address to
// the grader by writing VIDEO.json into the output directory, unchanged.
//
// Run it locally with:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// The grader runs it with /bot as the repository and /output as the target.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const repoDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const videoJson = readFileSync(join(repoDir, 'VIDEO.json'), 'utf8');
const parsed = JSON.parse(videoJson);
if (typeof parsed !== 'object' || parsed === null || typeof parsed.url !== 'string') {
  throw new Error('VIDEO.json must be a JSON object with a string "url" field');
}

// The gate ranks the video at this address, so refuse anything that is not
// a full TikTok video address: no short links, no profile pages, and never
// the placeholder the repository started with.
const tiktokVideo = /^https:\/\/www\.tiktok\.com\/@[\w.-]+\/video\/\d+$/;
if (!tiktokVideo.test(parsed.url)) {
  throw new Error('VIDEO.json "url" must be a full TikTok video address (https://www.tiktok.com/@<handle>/video/<id>)');
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'VIDEO.json'), videoJson);
