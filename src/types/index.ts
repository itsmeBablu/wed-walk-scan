export type Language = 'en' | 'de';

export type ThemePreference = 'light' | 'dark' | 'system';

export type ResolvedTheme = 'light' | 'dark';

export type SectionId =
  'overview' | 'features' | 'design-studio' | 'technical-room' | 'exports' | 'downloads';

export type ScreenshotCategory = 'iphone' | 'mac' | 'technical' | 'floorplans';

export interface ScreenshotConfigItem {
  id: string;
  category: ScreenshotCategory;
  /** Relative path beneath `public/`, e.g. `screenshots/mac/design-studio.png` */
  path: string;
  aspectRatio: string;
  device: 'mac' | 'ipad' | 'iphone' | 'frame';
  i18nKey: keyof TranslationSchema['screenshots'];
}

export type EcosystemPlatformId = 'iphone' | 'ipad' | 'mac';

export interface EcosystemPlatform {
  id: EcosystemPlatformId;
  tabLabel: string;
  roleTitle: string;
  deviceTag: string;
  summary: string;
  capabilities: string[];
  note?: string;
  screenshotId: string;
}

export interface NavItemConfig {
  id: SectionId;
  href: `#${SectionId}`;
}

export interface BrandPillar {
  id: string;
  token: string;
  label: string;
  description: string;
}

export interface DimensionStage {
  id: '1d' | '2d' | '3d' | '4d' | '5d';
  code: '1D' | '2D' | '3D' | '4D' | '5D';
  title: string;
  description: string;
  detail: string;
  isVision: boolean;
}

export interface FeatureItem {
  id: string;
  icon: 'scan' | 'layers' | 'ruler' | 'box' | 'cpu' | 'cloud' | 'compass' | 'shield';
  span?: 'wide' | 'tall' | 'standard';
  tag: string;
  title: string;
  description: string;
  metric?: string;
}

export interface WorkflowStage {
  id: string;
  stepNumber: string;
  label: string;
  title: string;
  description: string;
  badge: string;
  screenshotId: string;
  deviceType: 'iphone' | 'mac' | 'frame';
  highlights: string[];
}

export interface StudioCapability {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  specs: string[];
  screenshotId: string;
}

export interface TechnicalTab {
  id: string;
  label: string;
  title: string;
  description: string;
  screenshotId: string;
  metrics: Array<{ label: string; value: string }>;
}

export type ExportExplorerCategory =
  | 'all'
  | 'floor-plans'
  | 'models-3d'
  | 'bim-cad'
  | 'photos'
  | 'technical-rooms'
  | 'design-studio'
  | 'reports-notes'
  | 'archives';

export interface ExportExplorerFormatItem {
  id: string;
  extension: string;
  name: string;
  category: Exclude<ExportExplorerCategory, 'all'>;
  purpose: string;
  workflows: string[];
  professionalUse: string;
  compatibleTools: string[];
  caveat?: string;
}

export interface ZipTreeNode {
  name: string;
  kind: 'folder' | 'file';
  badge?: string;
  children?: readonly ZipTreeNode[];
}

export interface DeliverablesContent {
  showcase: {
    eyebrow: string;
    headline: string;
    subtitle: string;
  };
  explorer: {
    eyebrow: string;
    title: string;
    subtitle: string;
    categoryLabels: Record<ExportExplorerCategory, string>;
    workflowsLabel: string;
    useCaseLabel: string;
    compatibleLabel: string;
    formats: ExportExplorerFormatItem[];
  };
  floorPlans: {
    eyebrow: string;
    headline: string;
    subtitle: string;
    formats: Array<{ ext: string; title: string; detail: string }>;
    capabilities: string[];
  };
  models3d: {
    eyebrow: string;
    headline: string;
    subtitle: string;
    formats: Array<{ ext: string; title: string; detail: string }>;
    distinctionTitle: string;
    sources: Array<{ badge: string; title: string; detail: string }>;
  };
  bim: {
    eyebrow: string;
    headline: string;
    subtitle: string;
    capabilities: string[];
    toolsLabel: string;
    disclaimer: string;
  };
  spatialPhotos: {
    eyebrow: string;
    headline: string;
    subtitle: string;
    coordinateNotice: string;
    captureFeatures: string[];
    exportFeatures: string[];
    stages: Array<{ step: string; title: string; detail: string }>;
    sampleMarkerLabel: string;
    sampleRoomLabel: string;
    sampleCoords: string;
    samplePose: string;
    sampleArchivePath: string;
  };
  notesAndChecks: {
    eyebrow: string;
    headline: string;
    subtitle: string;
    auditNotice: string;
    cards: Array<{
      id: string;
      badge: string;
      title: string;
      description: string;
      statusTag?: string;
      meta: string;
    }>;
    pinStatuses: Array<{ status: 'Open' | 'In Progress' | 'Resolved'; label: string }>;
    verificationTitle: string;
    verificationItems: Array<{ label: string; observed: string; reference: string; delta: string }>;
  };
  technicalDeliverables: {
    eyebrow: string;
    headline: string;
    subtitle: string;
    equipmentTypes: string[];
    outputs: Array<{ ext: string; title: string; detail: string }>;
    evidenceChain: Array<{ step: string; detail: string }>;
    verificationWarning: string;
  };
  quantities: {
    eyebrow: string;
    headline: string;
    subtitle: string;
    metrics: string[];
    wasteLabel: string;
    sampleRoomName: string;
    floorBaseLabel: string;
    wallNetLabel: string;
    perimeterLabel: string;
    volumeRangeLabel: string;
    openingsLabel: string;
    visionConnection: string;
  };
  studioExports: {
    eyebrow: string;
    headline: string;
    subtitle: string;
    isolationNote: string;
    formats: string[];
    beforeLabel: string;
    afterLabel: string;
    sliderHint: string;
  };
  archives: {
    eyebrow: string;
    headline: string;
    subtitle: string;
    packageNote: string;
    tabs: Array<{ id: 'project' | 'organised' | 'photos'; label: string; description: string }>;
    highlights: string[];
  };
  pdfReports: {
    eyebrow: string;
    headline: string;
    subtitle: string;
    pages: Array<{ id: string; title: string; summary: string; screenshotId: string }>;
    contents: string[];
    sampleNote: string;
  };
  privacy: {
    eyebrow: string;
    title: string;
    subtitle: string;
    pillars: Array<{ title: string; detail: string }>;
    disclaimer: string;
  };
}

export interface ExportFormat {
  id: string;
  code: string;
  name: string;
  category: string;
  description: string;
  applications: string[];
}

export interface DownloadOption {
  id: 'mac' | 'ipad' | 'ios';
  platform: string;
  osRequirement: string;
  architecture: string;
  version: string;
  size: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  releaseNotesTitle: string;
  releaseNotes: string[];
  requirements: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ScreenshotMeta {
  title: string;
  subtitle: string;
  alt: string;
  placeholderNote: string;
}

export interface TranslationSchema {
  meta: {
    siteTitle: string;
    siteDescription: string;
  };
  nav: {
    brand: string;
    items: Record<SectionId, string>;
    downloadCta: string;
    menuOpen: string;
    menuClose: string;
    skipToContent: string;
  };
  controls: {
    languageLabel: string;
    themeLabel: string;
    themes: Record<ThemePreference, string>;
    learnMore: string;
    close: string;
  };
  hero: {
    eyebrow: string;
    headlineLines: [string, string, string];
    leadStatement: string;
    supportingHeadline: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    platformPill: string;
    macLabel: string;
    ipadLabel: string;
    iphoneLabel: string;
  };
  ecosystem: {
    eyebrow: string;
    headline: string;
    subtitle: string;
    selectorLabel: string;
    platforms: EcosystemPlatform[];
  };
  brandStory: {
    eyebrow: string;
    title: string;
    subtitle: string;
    pillars: BrandPillar[];
    dimensionsEyebrow: string;
    dimensionsTitle: string;
    dimensionsSubtitle: string;
    visionNote: string;
    availableTag: string;
    visionTag: string;
    dimensions: DimensionStage[];
  };
  overview: {
    eyebrow: string;
    title: string;
    subtitle: string;
    stages: WorkflowStage[];
  };
  features: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: FeatureItem[];
  };
  designStudio: {
    eyebrow: string;
    title: string;
    subtitle: string;
    windowTitle: string;
    capabilities: StudioCapability[];
  };
  technicalRoom: {
    eyebrow: string;
    title: string;
    subtitle: string;
    tabs: TechnicalTab[];
  };
  exports: {
    eyebrow: string;
    title: string;
    subtitle: string;
    selectorLabel: string;
    compatibleWith: string;
    formats: ExportFormat[];
  };
  deliverables: DeliverablesContent;
  downloads: {
    eyebrow: string;
    title: string;
    subtitle: string;
    specsTooltip: string;
    viewReleaseNotes: string;
    modalNote: string;
    options: DownloadOption[];
  };
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: FaqItem[];
  };
  footer: {
    tagline: string;
    productColumn: string;
    ecosystemColumn: string;
    preferencesColumn: string;
    nativeBadge: string;
    copyright: string;
    privacy: string;
    terms: string;
    support: string;
  };
  screenshotFallback: {
    badge: string;
    dropHint: string;
    ratioLabel: string;
  };
  screenshots: {
    heroMac: ScreenshotMeta;
    heroIpad: ScreenshotMeta;
    heroIphone: ScreenshotMeta;
    workflowIphoneScan: ScreenshotMeta;
    workflowFloorPlan: ScreenshotMeta;
    workflowDesignStudio: ScreenshotMeta;
    workflowTechnicalDoc: ScreenshotMeta;
    workflowExport: ScreenshotMeta;
    studioGeometry: ScreenshotMeta;
    studioMaterials: ScreenshotMeta;
    studioSections: ScreenshotMeta;
    technicalPlan: ScreenshotMeta;
    technicalRoomAnalysis: ScreenshotMeta;
    technicalSchedule: ScreenshotMeta;
    exportsPreview: ScreenshotMeta;
    exportFloorplanMulti: ScreenshotMeta;
    export3dMesh: ScreenshotMeta;
    exportStudioBefore: ScreenshotMeta;
    exportStudioAfter: ScreenshotMeta;
    exportSpatialPhoto: ScreenshotMeta;
    exportReportCover: ScreenshotMeta;
    exportReportPlan: ScreenshotMeta;
    exportReportPhotos: ScreenshotMeta;
    exportReportQuantities: ScreenshotMeta;
  };
}
