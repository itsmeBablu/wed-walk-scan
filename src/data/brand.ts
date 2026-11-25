/**
 * Centralized brand configuration for dWalkScan.
 * Maintain exact brand capitalization (`dWalkScan`) across the entire web app.
 */
export const BRAND_CONFIG = {
  name: 'dWalkScan',
  dPrefix: 'd',
  nameBody: 'WalkScan',
  bundleExtension: '.dwalkscan',
  copyrightYear: 2026,
  storageKeys: {
    theme: 'dwalkscan-theme',
    language: 'dwalkscan-lang',
  },
} as const;
