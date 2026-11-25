import fs from 'node:fs';
import path from 'node:path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, type Plugin } from 'vite';

const VIRTUAL_SCREENSHOTS_ID = 'virtual:dwalkscan-screenshots';
const RESOLVED_VIRTUAL_SCREENSHOTS_ID = `\0${VIRTUAL_SCREENSHOTS_ID}`;
const IMAGE_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.webp', '.avif', '.svg']);

function collectScreenshotPaths(publicDir: string, currentDir: string): string[] {
  if (!fs.existsSync(currentDir)) {
    return [];
  }

  const entries = fs.readdirSync(currentDir, { withFileTypes: true });
  const results: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(currentDir, entry.name);
    if (entry.isDirectory()) {
      results.push(...collectScreenshotPaths(publicDir, fullPath));
    } else if (entry.isFile() && IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      const relative = path.relative(publicDir, fullPath).split(path.sep).join('/');
      results.push(relative);
    }
  }

  return results.sort();
}

/**
 * Exposes the set of real screenshot files present under `public/screenshots`
 * so the UI never triggers 404 console errors for screenshots added later.
 */
function screenshotManifestPlugin(): Plugin {
  let publicDir = '';
  let screenshotsDir = '';

  return {
    name: 'dwalkscan-screenshot-manifest',
    configResolved(config) {
      publicDir = config.publicDir;
      screenshotsDir = path.join(publicDir, 'screenshots');
    },
    resolveId(id) {
      if (id === VIRTUAL_SCREENSHOTS_ID) {
        return RESOLVED_VIRTUAL_SCREENSHOTS_ID;
      }
      return undefined;
    },
    load(id) {
      if (id === RESOLVED_VIRTUAL_SCREENSHOTS_ID) {
        const files = collectScreenshotPaths(publicDir, screenshotsDir);
        return `export default ${JSON.stringify(files)};`;
      }
      return undefined;
    },
    configureServer(server) {
      if (!fs.existsSync(screenshotsDir)) {
        return;
      }
      const invalidate = (file: string) => {
        if (!file.startsWith(screenshotsDir)) {
          return;
        }
        const mod = server.moduleGraph.getModuleById(RESOLVED_VIRTUAL_SCREENSHOTS_ID);
        if (mod) {
          server.moduleGraph.invalidateModule(mod);
          server.ws.send({ type: 'full-reload' });
        }
      };
      server.watcher.on('add', invalidate);
      server.watcher.on('unlink', invalidate);
    },
  };
}

export default defineConfig({
  base: process.env.VITE_BASE_PATH ?? './',
  plugins: [react(), tailwindcss(), screenshotManifestPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
    },
  },
});
