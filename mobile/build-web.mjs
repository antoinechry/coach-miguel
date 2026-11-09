// Copie l'app web (racine du dépôt) dans www/, que Capacitor embarque dans l'app.
import { cpSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');
const www = join(here, 'www');
rmSync(www, { recursive: true, force: true });
mkdirSync(www, { recursive: true });
for (const f of ['index.html', 'meteo.html', 'langue.html', 'favicon.png', 'apple-touch-icon.png', 'coach-miguel-logo.png', 'coach-miguel-logo.svg'])
  cpSync(join(root, f), join(www, f));
console.log('www/ prêt');
