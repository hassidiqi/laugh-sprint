import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), "My phone remembers every password I've ever typed except the Wi-Fi one, which it asks me for each morning like we just met.");
