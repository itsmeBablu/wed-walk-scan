import { deliverablesEn } from '@/i18n/deliverables.en';
import type { TranslationSchema } from '@/types';

export const en: TranslationSchema = {
  meta: {
    siteTitle: 'dWalkScan — Walk. Scan. Transform.',
    siteDescription:
      'Discover dWalkScan, a native iPhone, iPad and Mac application for LiDAR building scanning, digital floor plans, 3D design, renovation planning and BIM-oriented building documentation.',
  },
  nav: {
    brand: 'dWalkScan',
    items: {
      overview: 'Overview',
      features: 'Features',
      'design-studio': 'Design Studio',
      'technical-room': 'Technical Room',
      exports: 'Exports',
      downloads: 'Downloads',
    },
    downloadCta: 'Download',
    menuOpen: 'Open navigation menu',
    menuClose: 'Close navigation menu',
    skipToContent: 'Skip to main content',
  },
  controls: {
    languageLabel: 'Language',
    themeLabel: 'Appearance',
    themes: {
      light: 'Light',
      dark: 'Dark',
      system: 'Auto',
    },
    learnMore: 'Learn more',
    close: 'Close',
  },
  hero: {
    eyebrow: 'Designed for iPhone, iPad and Mac.',
    headlineLines: ['Walk.', 'Scan.', 'Transform.'],
    leadStatement: 'From physical spaces to multidimensional building intelligence.',
    supportingHeadline: 'Designed for iPhone, iPad and Mac.',
    description:
      'Transform real-world spaces into digital floor plans, editable 3D models and professional building documentation.',
    primaryCta: 'Discover dWalkScan',
    secondaryCta: 'Explore Features',
    platformPill: 'Inspired by 5D BIM. Powered by LiDAR. Designed for iPhone, iPad and Mac.',
    macLabel: 'MacBook — Design Studio',
    ipadLabel: 'iPad — Floor Plans & Review',
    iphoneLabel: 'iPhone — LiDAR Capture',
  },
  ecosystem: {
    eyebrow: 'Apple Ecosystem',
    headline: 'Capture anywhere. Design everywhere.',
    subtitle:
      'Designed for iPhone, iPad and Mac. One shared Swift core and project format keeps scans, floor plans, photos and studio edits in sync across every screen.',
    selectorLabel: 'Select Apple device',
    platforms: [
      {
        id: 'iphone',
        tabLabel: 'iPhone — Capture',
        roleTitle: 'iPhone — Capture',
        deviceTag: 'iOS 18+ · LiDAR Field App',
        summary:
          'Walk through single rooms, multi-storey homes or plant rooms and capture calibrated LiDAR geometry on site.',
        capabilities: [
          'LiDAR building scanning',
          'Room and multi-storey surveys',
          'Technical-room documentation',
          'Spatial survey photography',
          'Site observations and measurements',
        ],
        screenshotId: 'hero-iphone',
      },
      {
        id: 'ipad',
        tabLabel: 'iPad — Explore',
        roleTitle: 'iPad — Explore',
        deviceTag: 'iPadOS 18+ · Portrait & Landscape',
        summary:
          'Inspect scaled floor plans, review 3D models and annotate site conditions on a spacious mobile canvas across all orientations.',
        capabilities: [
          'Large-screen floor-plan inspection',
          'Building visualization',
          'On-site documentation',
          'Survey photo galleries',
          'Project reviews',
          'LiDAR scanning on compatible iPad Pro models, where supported',
        ],
        note: 'Scanning requires a LiDAR-equipped iPhone Pro or iPad Pro; non-LiDAR iPads retain inspection, 3D visualization, photo gallery, review and export workflows.',
        screenshotId: 'hero-ipad',
      },
      {
        id: 'mac',
        tabLabel: 'Mac — Transform',
        roleTitle: 'Mac — Transform',
        deviceTag: 'macOS 15+ · Desktop Companion',
        summary:
          'Refine spatial geometry in Design Studio, assemble technical documentation and deliver complete CAD and BIM-oriented packages.',
        capabilities: [
          'Professional Design Studio',
          'Interactive 3D editing',
          'Renovation planning',
          'Engineering documentation',
          'BIM and CAD exports',
          'Material quantities',
          'Complete project deliverables',
        ],
        note: 'macOS is built for visualization, Design Studio editing, quantities, printing and exports (RoomPlan capture is iOS/iPadOS-only).',
        screenshotId: 'hero-mac',
      },
    ],
  },
  brandStory: {
    eyebrow: 'Why dWalkScan',
    title: 'More than a scan. A new dimension.',
    subtitle:
      'The lowercase “d” stands for Dimensions—inspired by 5D Building Information Modelling, bringing structured spatial clarity from on-site LiDAR capture to architectural planning.',
    pillars: [
      {
        id: 'dimensions',
        token: 'd',
        label: 'Dimensions',
        description: 'Inspired by multidimensional BIM workflows.',
      },
      {
        id: 'walk',
        token: 'Walk',
        label: 'Capture',
        description: 'Naturally explore and capture physical spaces.',
      },
      {
        id: 'scan',
        token: 'Scan',
        label: 'Digitize',
        description: 'Transform captured geometry into digital building information.',
      },
      {
        id: 'transform',
        token: 'Transform',
        label: 'Create',
        description: 'Edit, visualize, plan and export building information.',
      },
    ],
    dimensionsEyebrow: 'Five Dimensions',
    dimensionsTitle: 'Built around the five dimensions of building intelligence.',
    dimensionsSubtitle:
      'dWalkScan delivers precise 1D measurements, 2D floor plans and editable 3D geometry today, designed to align cleanly with the broader 4D and 5D BIM methodology.',
    visionNote:
      'Note: 4D scheduling and 5D cost planning illustrate the broader BIM methodology behind dWalkScan rather than built-in project scheduling or accounting modules.',
    availableTag: 'In dWalkScan',
    visionTag: 'BIM Vision',
    dimensions: [
      {
        id: '1d',
        code: '1D',
        title: 'Length',
        description: 'Linear measurements.',
        detail:
          'Calibrated room spans, ceiling heights and laser-verified reference distances directly from your walk-through.',
        isVision: false,
      },
      {
        id: '2d',
        code: '2D',
        title: 'Area',
        description: 'Floor plans and spatial layouts.',
        detail:
          'Orthogonal architectural floor plans, wall thicknesses, door swings and calculated room surface areas.',
        isVision: false,
      },
      {
        id: '3d',
        code: '3D',
        title: 'Geometry',
        description: 'Digital building models and visualization.',
        detail:
          'Editable parametric walls, openings, cross-sections and native Metal 3D studio perspectives for renovation design.',
        isVision: false,
      },
      {
        id: '4d',
        code: '4D',
        title: 'Time',
        description: 'Construction and renovation scheduling.',
        detail:
          'Broader BIM vision connecting clean as-built models to phased construction and renovation timelines in external tools.',
        isVision: true,
      },
      {
        id: '5d',
        code: '5D',
        title: 'Cost',
        description: 'Material quantities and cost planning.',
        detail:
          'Broader BIM vision extending surface and opening schedules toward quantity takeoffs and downstream cost planning.',
        isVision: true,
      },
    ],
  },
  overview: {
    eyebrow: 'End-to-End Architecture Pipeline',
    title: 'From room walk-through to signed-off building dossier.',
    subtitle:
      'Every measurement captured on site syncs seamlessly into your Mac workspace with preserved geometry, wall thicknesses and layer hierarchy.',
    stages: [
      {
        id: 'scan',
        stepNumber: '01',
        label: 'iPhone Scan',
        title: 'Capture complete interiors in minutes.',
        description:
          'Walk naturally through rooms with iPhone LiDAR. dWalkScan detects walls, openings, ceiling heights and structural columns in real time.',
        badge: 'iOS Field App',
        screenshotId: 'workflow-iphone-scan',
        deviceType: 'iphone',
        highlights: [
          'Continuous walkthrough capture with StoryDetector multi-storey clustering',
          'Automatic door, window, BRH sill height and radiator recognition',
          'Works completely offline on active construction sites',
        ],
      },
      {
        id: 'floorplan',
        stepNumber: '02',
        label: 'Digital Floor Plan',
        title: 'Clean 2D floor plans, dimensioned automatically.',
        description:
          'Convert raw spatial point clouds and RoomPlan surfaces into orthogonal, scale-accurate architectural plans ready for review.',
        badge: 'Instant 2D Plan',
        screenshotId: 'workflow-floor-plan',
        deviceType: 'frame',
        highlights: [
          'DIN opening dimensions (width above, height below, diagonal ticks /)',
          'Window parapet heights (BRH) & yellow interior room area badges',
          'Selectable mm, m or dual units with English dot-decimal notation (.)',
        ],
      },
      {
        id: 'studio',
        stepNumber: '03',
        label: 'Mac Design Studio',
        title: 'Refine 3D geometry on a spacious desktop canvas.',
        description:
          'Open the captured project on macOS to adjust partitions, place architectural fixtures, evaluate daylight and verify structural clearances.',
        badge: 'macOS Workspace',
        screenshotId: 'workflow-design-studio',
        deviceType: 'mac',
        highlights: [
          'Hardware-accelerated Metal viewport',
          'Non-destructive parametric wall editing',
          'Synchronized 2D plan and 3D perspective views',
        ],
      },
      {
        id: 'technical',
        stepNumber: '04',
        label: 'Technical Documentation',
        title: 'Document MEP rooms, shafts and tolerances.',
        description:
          'Annotate technical rooms, verify installation clearances, attach laser check measurements and compile structured room schedules.',
        badge: 'Engineering Specs',
        screenshotId: 'workflow-technical-doc',
        deviceType: 'frame',
        highlights: [
          'Elevation & cross-section slice generators',
          'Structured room & surface area schedules',
          'Photo-pinned field inspection notes',
        ],
      },
      {
        id: 'export',
        stepNumber: '05',
        label: 'Professional Export',
        title: 'Deliver industry formats to every stakeholder.',
        description:
          'Export clean IFC, DXF, USDZ, OBJ and scaled PDF sets directly to CAD, BIM-oriented and client review workflows without manual cleanup.',
        badge: 'CAD & BIM Ready',
        screenshotId: 'workflow-export',
        deviceType: 'mac',
        highlights: [
          'True scale 1:50 & 1:100 architectural PDFs',
          'IFC classes preserved for downstream BIM tools',
          'One-click archive packages for clients',
        ],
      },
    ],
  },
  features: {
    eyebrow: 'Engineered for Precision',
    title: 'Built like a native pro instrument.',
    subtitle:
      'Designed specifically for architects, site engineers, interior planners and renovation teams working inside the Apple ecosystem.',
    items: [
      {
        id: 'lidar',
        icon: 'scan',
        span: 'wide',
        tag: 'Field Capture',
        title: 'Guided LiDAR & Photogrammetry Capture',
        description:
          'Live coverage heatmaps show scanned and missing surfaces while walking, eliminating return site visits.',
        metric: 'Up to 60 fps spatial mesh',
      },
      {
        id: 'dimensions',
        icon: 'ruler',
        span: 'standard',
        tag: 'Metrology',
        title: 'Automated Tolerance & Laser Calibration',
        description:
          'Lock key reference walls against laser distance meter readings to calibrate full-floor accuracy.',
        metric: 'mm / m unit precision',
      },
      {
        id: 'layers',
        icon: 'layers',
        span: 'standard',
        tag: 'Structure',
        title: 'Multi-Story Alignment',
        description:
          'Stack ground, upper and basement levels on shared datum coordinates with stairwell continuity.',
      },
      {
        id: 'parametric',
        icon: 'box',
        span: 'standard',
        tag: '3D Modeling',
        title: 'Editable Parametric Components',
        description:
          'Modify wall heights, roof pitches, window reveals and doors directly without rebuilding meshes.',
      },
      {
        id: 'metal',
        icon: 'cpu',
        span: 'wide',
        tag: 'Apple Silicon',
        title: 'Unified Memory Metal Rendering',
        description:
          'Navigate dense multi-room buildings, real-time ambient occlusion and section planes smoothly at ProMotion frame rates.',
        metric: 'Native Swift & Metal',
      },
      {
        id: 'sync',
        icon: 'cloud',
        span: 'standard',
        tag: 'Continuity',
        title: 'Private iCloud & AirDrop Handoff',
        description:
          'Start scanning on site with iPhone and continue refining the exact project seconds later on Mac.',
      },
      {
        id: 'sections',
        icon: 'compass',
        span: 'standard',
        tag: 'Analysis',
        title: 'Instant Elevation & Section Planes',
        description:
          'Slice cleanly through slabs, ceilings and technical shafts to inspect clearances and sightlines.',
      },
      {
        id: 'privacy',
        icon: 'shield',
        span: 'standard',
        tag: 'Local-First',
        title: 'Zero Forced Cloud Processing',
        description:
          'All spatial reconstruction runs directly on your Apple device—sensitive blueprints stay under your control.',
      },
    ],
  },
  designStudio: {
    eyebrow: 'Mac Design Studio',
    title: 'Precision drafting meets fluid 3D spatial modeling.',
    subtitle:
      'Take raw scans beyond simple point clouds. dWalkScan Design Studio turns architectural captures into clean, editable building geometry.',
    windowTitle: 'Villa_West_Level_02.housescan — Design Studio',
    capabilities: [
      {
        id: 'geometry',
        title: '5 cm Snap, Wall Alignment & Parametric Cleanup',
        subtitle: 'Grid snap & arrow-key nudging',
        description:
          'Move, rotate and elevate walls, openings and objects with 5 cm grid snapping, arrow-key micro-nudging, wall snapping and overlap checks.',
        specs: ['5 cm (0.05 m) grid snapping', 'Linked 2D & 3D inspectors', 'Full undo history'],
        screenshotId: 'studio-geometry',
      },
      {
        id: 'materials',
        title: 'Office, Living & Kitchen Collections',
        subtitle: 'Furnishing, daylight & automatic 32" screen rule',
        description:
          'Furnish rooms from Office, Living and Kitchen & Bath libraries—with automatic 32" display classification separating desktop monitors from televisions.',
        specs: [
          'Automatic <= 32" monitor detection',
          'Desks, conference tables & whiteboards',
          'Materials, door angles & finishes',
        ],
        screenshotId: 'studio-materials',
      },
      {
        id: 'sections',
        title: 'Cutaway Walls & Interactive Clearances',
        subtitle: 'Structural & spatial verification',
        description:
          'Toggle presentation front-wall cutaways to inspect tight rooms, drag live multi-storey level views and verify stairways and MEP clearances.',
        specs: [
          'Front-wall cutaway toggle',
          'Multi-story level switcher',
          'Clearance & overlap inspection',
        ],
        screenshotId: 'studio-sections',
      },
    ],
  },
  technicalRoom: {
    eyebrow: 'Technical Room & Floor Plans',
    title: 'Built for technical rooms, tight shafts and exacting plans.',
    subtitle:
      'Switch effortlessly between dimensioned floor plans, dense MEP equipment room inspections and automated area & surface schedules.',
    tabs: [
      {
        id: 'floorplans',
        label: '2D Floor Plans',
        title: 'Scale-accurate architectural floor plans.',
        description:
          'Generate crisp 2D floor plans featuring DIN opening dimensions (width above, height below, diagonal oblique ticks /), window parapet heights (BRH) and interior room badges.',
        screenshotId: 'technical-plan',
        metrics: [
          { label: 'Opening Ticks', value: 'DIN / BRH Sill Height' },
          { label: 'Area Badges', value: 'm² at Interior Point' },
          { label: 'Selectable Units', value: 'mm / m / Dual (.)' },
        ],
      },
      {
        id: 'mep',
        label: 'Technical Room',
        title: 'Equipment room clearances & conduit mapping.',
        description:
          'Capture boiler rooms, electrical closets and HVAC manifolds in full 3D so planners can verify service corridors and mounting walls remotely.',
        screenshotId: 'technical-room-analysis',
        metrics: [
          { label: 'Clearance Check', value: '3D Envelope' },
          { label: 'Wall Load Zones', value: 'Annotated Layers' },
          { label: 'Field Photos', value: 'Spatial Anchors' },
        ],
      },
      {
        id: 'schedule',
        label: 'Room Schedules',
        title: 'Structured surface, perimeter & volume takeoffs.',
        description:
          'Every modeled wall, ceiling and floor automatically computes net floor area, wall paint surface and room volume for renovation planning.',
        screenshotId: 'technical-schedule',
        metrics: [
          { label: 'Surface Takeoffs', value: 'Live Calculation' },
          { label: 'Opening Schedule', value: 'Doors & Windows' },
          { label: 'Tabular Export', value: 'CSV / JSON / PDF' },
        ],
      },
    ],
  },
  exports: {
    eyebrow: 'Open Interoperability',
    title: 'Every standard format your team relies on.',
    subtitle:
      'Keep your existing CAD, BIM and visualization stack. dWalkScan exports clean, structured deliverables ready for immediate downstream work.',
    selectorLabel: 'Inspect export format',
    compatibleWith: 'Recommended downstream tools',
    formats: [
      {
        id: 'ifc',
        code: 'IFC 4',
        name: 'BIM Industry Foundation Classes',
        category: 'BIM-Oriented Export',
        description:
          'Structured semantic building model preserving stories, spaces, walls, slabs, doors and windows for downstream BIM tools.',
        applications: ['Archicad', 'Revit', 'Vectorworks', 'Allplan', 'Solibri'],
      },
      {
        id: 'dxf',
        code: 'DXF / DWG',
        name: 'Layered 2D & 3D CAD Vector Drawings',
        category: '2D / 3D CAD',
        description:
          'Clean vector polylines separated onto architectural layers for walls, openings, dimensions and room labels at true millimeter scale.',
        applications: ['AutoCAD', 'BricsCAD', 'QCAD', 'Vectorworks', 'Rhino'],
      },
      {
        id: 'usdz',
        code: 'USDZ',
        name: 'Universal Scene Description (AR & 3D)',
        category: 'Apple & Spatial Review',
        description:
          'Native Apple Quick Look and 3D review format with materials and real-world scale for instant client walkthroughs on iPhone, iPad and Mac.',
        applications: ['Apple Quick Look', 'Reality Composer', 'Blender', 'Maya'],
      },
      {
        id: 'pdf',
        code: 'PDF Plan',
        name: 'Scaled Vector Architectural Dossier',
        category: 'Documentation',
        description:
          'Print-ready multi-page vector PDFs with title blocks, scale bars, room schedules and high-resolution orthographic views.',
        applications: ['Preview', 'Acrobat', 'Bluebeam Revu', 'Client Handover'],
      },
      {
        id: 'obj',
        code: 'OBJ / PLY',
        name: 'Textured Mesh & Point Cloud',
        category: '3D Visualization',
        description:
          'High-density triangular mesh or registered point cloud with calibrated metric coordinates for visualization and reverse engineering.',
        applications: ['Blender', 'Cinema 4D', 'CloudCompare', 'MeshLab'],
      },
    ],
  },
  deliverables: deliverablesEn,
  downloads: {
    eyebrow: 'Get dWalkScan',
    title: 'Designed for iPhone, iPad and Mac.',
    subtitle:
      'Open-source MIT Swift application: capture in the field on iPhone, explore plans on iPad and finish models, quantities and CAD/IFC exports on Mac.',
    specsTooltip:
      'Requires macOS 15+ or iOS / iPadOS 18+ (LiDAR scanner required on iPhone Pro or iPad Pro for capture)',
    viewReleaseNotes: 'Requirements, Build & Sideloading',
    sourceRepoLabel: 'View GitHub Repo (bau-scan)',
    modalNote:
      'dWalkScan is open-source under the MIT License at github.com/itsmeBablu/bau-scan. Mac releases include Sparkle auto-updates; iOS/iPadOS builds can run via Xcode or Sideloadly using the unsigned IPA workflow.',
    options: [
      {
        id: 'mac',
        platform: 'macOS',
        osRequirement: 'macOS 15 Sequoia or later',
        architecture: 'Apple Silicon & Intel Universal',
        version: 'v1.0.0 DMG',
        size: '~3.3 MB',
        title: 'dWalkScan for Mac',
        subtitle:
          'Professional Design Studio, interactive 3D editing, renovation planning, material quantities and BIM/CAD deliverables.',
        ctaLabel: 'Download macOS DMG',
        href: 'https://github.com/itsmeBablu/bau-scan/releases',
        actionLabel: 'Open GitHub Releases',
        releaseNotesTitle: 'dWalkScan for Mac — Requirements & Release Info',
        releaseNotes: [
          'Notarized macOS DMG distribution with integrated Sparkle auto-updates (appcast.xml)',
          'Shared Swift core with native macOS menus, drag-and-drop, arrow nudging and printing (⌘P)',
          'Design Studio 3D editing with 5 cm grid snap, cutaway walls and renovation phases',
          'IFC 4, multi-level DXF/SVG, USDZ/OBJ/STL/PLY, PDF reports and organised ZIP exports',
        ],
        requirements: [
          'macOS 15.0 or newer (Apple Silicon & Intel)',
          'Visualization, editing, quantities, printing and export suite (capture requires iOS/iPadOS LiDAR)',
          'Optional iCloud Drive for automatic dWalkScan folder synchronization',
        ],
      },
      {
        id: 'ipad',
        platform: 'iPadOS',
        osRequirement: 'iPadOS 18.0 or later',
        architecture: 'iPad (Portrait & Landscape · LiDAR on iPad Pro)',
        version: 'iOS/iPadOS 18+',
        size: 'Xcode / IPA',
        title: 'dWalkScan for iPad',
        subtitle:
          'Large-screen floor-plan inspection, 3D/AR building visualization, survey photo galleries and LiDAR capture on compatible iPad Pro models.',
        ctaLabel: 'Xcode & Unsigned IPA',
        href: 'https://github.com/itsmeBablu/bau-scan/actions/workflows/ios-unsigned.yml',
        actionLabel: 'Build Unsigned IPA Workflow',
        releaseNotesTitle: 'dWalkScan for iPad — Requirements & Build Guide',
        releaseNotes: [
          'Full portrait and landscape interface support across all iPad orientations',
          'Large-screen 2D floor plans with DIN/BRH dimensions, task pins and photo galleries',
          'RoomPlan LiDAR capture supported automatically on compatible iPad Pro models',
          'Build with XcodeGen + Xcode (⌘R) or download the CI-built unsigned IPA',
        ],
        requirements: [
          'iPadOS 18.0 or newer (universal TARGETED_DEVICE_FAMILY 1,2 app)',
          'LiDAR capture requires compatible iPad Pro hardware (checked via RoomCaptureSession)',
          'Works completely offline with local package storage or optional iCloud Drive',
        ],
      },
      {
        id: 'ios',
        platform: 'iOS',
        osRequirement: 'iOS 18.0 or later',
        architecture: 'iPhone Pro (LiDAR · arm64)',
        version: 'iOS 18.0+',
        size: 'Xcode / IPA',
        title: 'dWalkScan for iPhone',
        subtitle:
          'On-site LiDAR room and multi-storey scanning, Technical Room capture, radiator & BRH survey, spatial photos and field notes.',
        ctaLabel: 'Build or Sideload IPA',
        href: 'https://github.com/itsmeBablu/bau-scan/actions/workflows/ios-unsigned.yml',
        actionLabel: 'Open Unsigned IPA Action',
        releaseNotesTitle: 'dWalkScan for iPhone — Xcode & Windows Sideloadly Guide',
        releaseNotes: [
          'Continuous walkthrough LiDAR capture for rooms, houses (StoryDetector) and Technical Rooms',
          'In-scan JPEG survey photography with 3D camera pose markers and room indexing',
          'Windows friendly: trigger "Build unsigned iPhone IPA" on GitHub Actions and install with Sideloadly',
          'Or clone itsmeBablu/bau-scan on macOS, run xcodegen generate and press Cmd+R in Xcode',
        ],
        requirements: [
          'iPhone 12 Pro or newer with Apple LiDAR Scanner',
          'iOS 18.0 or newer',
          'Works completely offline during active construction-site capture',
        ],
      },
    ],
  },
  faq: {
    eyebrow: 'Questions & Answers',
    title: 'Technical clarity before your first scan.',
    subtitle: 'Everything architects, engineers and renovation planners ask about dWalkScan.',
    items: [
      {
        id: 'accuracy',
        question: 'How accurate are dWalkScan measurements compared to laser distometers?',
        answer:
          'Under normal indoor lighting with steady LiDAR scanning, room dimensions typically stay within 1–2% relative tolerance. For strict tolerance work, dWalkScan lets you log physical laser distance checks (ProjectDistanceCheck) alongside scanned dimensions.',
      },
      {
        id: 'ipad-support',
        question: 'Which features are supported on iPad vs iPhone and Mac?',
        answer:
          'iPhone Pro handles fast handheld LiDAR capture and on-site photo documentation. Compatible LiDAR iPad Pro models also support LiDAR scanning, while all supported iPads (iPadOS 18+) excel at large-screen floor-plan inspection, building visualization, photo galleries and project reviews in portrait or landscape. Mac (macOS 15+) focuses on Design Studio editing, quantities, printing and exports without capture.',
      },
      {
        id: 'offline',
        question: 'Can I scan basements and active construction sites without internet?',
        answer:
          'Yes. All LiDAR capture, spatial meshing and preliminary 2D floor plan generation run 100% locally on your iPhone or iPad without network access or cloud queues.',
      },
      {
        id: 'handoff',
        question: 'How do projects move across iPhone, iPad and Mac?',
        answer:
          'Projects share the same .roomscan, .housescan and .technicalroom bundle formats and transfer via private iCloud Drive sync or directly offline over AirDrop and Files.',
      },
      {
        id: 'formats',
        question: 'Which CAD and BIM applications open dWalkScan exports cleanly?',
        answer:
          'dWalkScan exports open IFC 4 (with IFC2x3 fallback), layered DXF, SVG, USDZ, OBJ, STL, PLY, CSV and vector PDF deliverables usable in workflows with Revit, AutoCAD, Archicad, Blender, SketchUp, FreeCAD and Excel. Downstream scheduling (4D) and costing (5D) stay in specialized tools.',
      },
    ],
  },
  footer: {
    tagline:
      'Walk. Scan. Transform. Open-source MIT LiDAR building scanning, 3D design studio and BIM-oriented documentation for Apple platforms.',
    productColumn: 'Product',
    ecosystemColumn: 'Apple Ecosystem',
    preferencesColumn: 'Preferences',
    nativeBadge: 'Crafted exclusively for iPhone, iPad & Mac',
    copyright: '© 2026 dWalkScan. MIT License.',
    privacy: 'Data Privacy',
    terms: 'Distribution',
    support: 'FAQ',
    sourceCode: 'GitHub (bau-scan)',
    releases: 'Releases',
    license: 'MIT License',
  },
  screenshotFallback: {
    badge: 'Screenshot Slot',
    dropHint: 'Place asset at:',
    ratioLabel: 'Aspect',
  },
  screenshots: {
    heroMac: {
      title: 'MacBook — Design Studio',
      subtitle: '3D spatial viewport, live layer tree & inspector on macOS',
      alt: 'dWalkScan Design Studio workspace window on MacBook displaying an architectural 3D floor model',
      placeholderNote: 'MacBook Design Studio hero slot',
    },
    heroIpad: {
      title: 'iPad — Floor Plans & Spatial Explorer',
      subtitle: 'Large-screen floor-plan inspection, photo galleries and project review',
      alt: 'dWalkScan iPad app displaying dimensioned multi-room floor plans and survey context',
      placeholderNote: 'iPad floor-plan showcase slot',
    },
    heroIphone: {
      title: 'iPhone — Live LiDAR Capture',
      subtitle: 'Real-time wall mesh & coverage feedback on iPhone',
      alt: 'dWalkScan iPhone app capturing room geometry with LiDAR overlay',
      placeholderNote: 'Live iOS capture HUD preview',
    },
    workflowIphoneScan: {
      title: '01 · Guided LiDAR Walkthrough',
      subtitle: 'Real-time wall, window & door recognition on site',
      alt: 'dWalkScan iPhone scan capture interface showing room boundary detection',
      placeholderNote: 'Step 1 iPhone scan screenshot',
    },
    workflowFloorPlan: {
      title: '02 · Automated 2D Floor Plan',
      subtitle: 'Orthogonal walls, dimensions and calculated net room areas',
      alt: 'dWalkScan generated 2D architectural floor plan with dimensions and room areas',
      placeholderNote: 'Step 2 digital floor plan screenshot',
    },
    workflowDesignStudio: {
      title: '03 · Mac 3D Design Studio',
      subtitle: 'Parametric editing, material finishes and multi-floor alignment',
      alt: 'dWalkScan Design Studio on Mac with editable 3D architectural geometry',
      placeholderNote: 'Step 3 Mac Design Studio screenshot',
    },
    workflowTechnicalDoc: {
      title: '04 · Technical Room Documentation',
      subtitle: 'Clearance zones, section cuts and photo-pinned MEP notes',
      alt: 'dWalkScan technical room documentation sheet with clearances and annotations',
      placeholderNote: 'Step 4 technical room screenshot',
    },
    workflowExport: {
      title: '05 · Multi-Format CAD & IFC Export',
      subtitle: 'Pre-flight scale, layer mapping and IFC / DXF / PDF output',
      alt: 'dWalkScan export sheet showing IFC, DXF and scaled PDF options',
      placeholderNote: 'Step 5 export panel screenshot',
    },
    studioGeometry: {
      title: 'Parametric Wall & Opening Editor',
      subtitle: 'Snap angles, wall thicknesses and synchronized 2D/3D viewports',
      alt: 'dWalkScan Design Studio showing parametric wall and opening editing controls',
      placeholderNote: 'Design Studio geometry workspace',
    },
    studioMaterials: {
      title: 'Daylight & Material Inspector',
      subtitle: 'Physically-based surfaces and real-time Metal illumination',
      alt: 'dWalkScan Design Studio material assignment and lighting preview',
      placeholderNote: 'Design Studio materials & lighting view',
    },
    studioSections: {
      title: 'Interactive Section Planes',
      subtitle: 'Real-time X/Y/Z clipping boxes for vertical clearance review',
      alt: 'dWalkScan Design Studio displaying interactive 3D building cross-section cut',
      placeholderNote: 'Design Studio section-cut view',
    },
    technicalPlan: {
      title: 'Dimensioned Architectural Floor Plan',
      subtitle: 'DIN / ISO area calculations, swing arcs and reference grid',
      alt: 'dWalkScan scaled 2D floor plan with dimension chains and square meter totals',
      placeholderNote: 'Scaled 2D floor plan output',
    },
    technicalRoomAnalysis: {
      title: 'Technical Room & MEP Clearance View',
      subtitle: 'Boiler, electrical cabinet and piping clearances in 3D',
      alt: 'dWalkScan 3D scan of a technical utility room with clearance annotations',
      placeholderNote: 'Technical room scan preview',
    },
    technicalSchedule: {
      title: 'Automated Room & Surface Schedule',
      subtitle: 'Net area, perimeter, wall surface and opening counts per room',
      alt: 'dWalkScan room schedule table summarizing net floor areas and wall surfaces',
      placeholderNote: 'Room & quantity schedule preview',
    },
    exportsPreview: {
      title: 'Structured CAD / IFC Export Preview',
      subtitle: 'Layer mapping & coordinate system verification before export',
      alt: 'dWalkScan export preview displaying layered CAD geometry',
      placeholderNote: 'Export preview screenshot',
    },
    exportFloorplanMulti: {
      title: 'Multi-Storey Dimensioned Architectural Plan',
      subtitle: 'Separated per-floor DXF, SVG and A4 PDF plans with room area labels',
      alt: 'dWalkScan dimensioned multi-storey architectural floor plan',
      placeholderNote: 'Multi-storey floor plan deliverable',
    },
    export3dMesh: {
      title: '3D Reconstructed Building & Scan Mesh',
      subtitle: 'Parametric RoomPlan shells, raw scan meshes and edited Studio models',
      alt: 'dWalkScan 3D architectural model export preview',
      placeholderNote: '3D model export screenshot',
    },
    exportStudioBefore: {
      title: 'Original LiDAR Scan Evidence',
      subtitle: 'Untouched baseline room geometry captured on site',
      alt: 'Original dWalkScan LiDAR room scan before Design Studio edits',
      placeholderNote: 'Original scan before comparison',
    },
    exportStudioAfter: {
      title: 'Edited Design Studio Layout',
      subtitle: 'Updated furniture, finishes and phase classifications saved separately',
      alt: 'dWalkScan Design Studio edited building model after renovation planning',
      placeholderNote: 'Edited Design Studio comparison',
    },
    exportSpatialPhoto: {
      title: '3D-Pinned Survey Photograph & Pose',
      subtitle: 'In-scan JPEG paired with local room XYZ coordinates and viewing direction',
      alt: 'dWalkScan survey photograph anchored to 3D room coordinates',
      placeholderNote: 'Spatial survey photo screenshot',
    },
    exportReportCover: {
      title: 'PDF Report — Survey Cover & Notes',
      subtitle: 'Project summary, survey dates and validation notices',
      alt: 'dWalkScan PDF report cover page preview',
      placeholderNote: 'PDF report cover page',
    },
    exportReportPlan: {
      title: 'PDF Report — Plans & Task Pins',
      subtitle: 'Scaled floor plans with plotted pin markers and issue legends',
      alt: 'dWalkScan PDF report floor plan and task pin legend page',
      placeholderNote: 'PDF report floor plan page',
    },
    exportReportPhotos: {
      title: 'PDF Report — Survey Photo Pages',
      subtitle: 'Room-numbered photographs formatted for client handoff',
      alt: 'dWalkScan PDF report survey photograph documentation page',
      placeholderNote: 'PDF report photo page',
    },
    exportReportQuantities: {
      title: 'PDF Report — Renovation Quantities',
      subtitle: 'Net wall areas, floor areas, perimeters and waste calculations',
      alt: 'dWalkScan PDF report renovation quantity schedule page',
      placeholderNote: 'PDF report quantity page',
    },
  },
};
