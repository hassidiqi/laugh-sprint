import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });

const oneLiner = 'My password manager knows 400 secrets, including a forum that died in 2014 — but every morning it asks me for the Wi-Fi password like I am a stranger knocking on its door.';

writeFileSync(join(outputDir, 'entry.txt'), oneLiner + '\n');
