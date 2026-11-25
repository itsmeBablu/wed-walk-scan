/**
 * Centralized brand configuration for dWalkScan.
 * Maintain exact brand capitalization (`dWalkScan`) across the entire web app.
 */
export const BRAND_CONFIG = {
  name: 'dWalkScan',
  dPrefix: 'd',
  nameBody: 'WalkScan',
  bundleExtension: '.housescan',
  bundleExtensions: ['.roomscan', '.housescan', '.technicalroom'] as const,
  copyrightYear: 2026,
  appRepoUrl: 'https://github.com/itsmeBablu/bau-scan',
  releasesUrl: 'https://github.com/itsmeBablu/bau-scan/releases',
  iosWorkflowUrl: 'https://github.com/itsmeBablu/bau-scan/actions/workflows/ios-unsigned.yml',
  licenseUrl: 'https://github.com/itsmeBablu/bau-scan/blob/main/LICENSE',
  websiteRepoUrl: 'https://github.com/itsmeBablu/wed-walk-scan',
  storageKeys: {
    theme: 'dwalkscan-theme',
    language: 'dwalkscan-lang',
  },
} as const;
