import availableScreenshots from 'virtual:dwalkscan-screenshots';

const AVAILABLE_SET = new Set(availableScreenshots);

/**
 * Resolves a path inside `public/` safely across dev mode, preview, root domain,
 * and GitHub Pages repository subpaths using Vite's configured `BASE_URL`.
 */
export function resolvePublicAsset(relativePath: string): string {
  const clean = relativePath.replace(/^\/+/, '');
  const base = import.meta.env.BASE_URL || './';
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  return `${normalizedBase}${clean}`;
}

/**
 * Checks the build/dev-time manifest to verify whether a local screenshot file
 * actually exists under `public/screenshots/` before requesting it.
 */
export function isScreenshotAvailable(relativePath: string): boolean {
  const clean = relativePath.replace(/^\/+/, '');
  return AVAILABLE_SET.has(clean);
}
