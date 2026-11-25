import type { DeliverablesContent } from '@/types';

export const deliverablesEn: DeliverablesContent = {
  showcase: {
    eyebrow: 'Exports & Digital Deliverables',
    headline: 'Your space. Your data. Your possibilities.',
    subtitle:
      'From a single walkthrough to professional building documentation. Transform captured spaces into floor plans, 3D models, BIM-oriented IFC data, survey photographs and organized project deliverables.',
  },
  explorer: {
    eyebrow: 'Interactive Export Format Explorer',
    title: 'Inspect every deliverable format.',
    subtitle:
      'Filter verified export outputs across single rooms, multi-storey houses, Technical Rooms, Design Studio and complete renovation project bundles.',
    categoryLabels: {
      all: 'All',
      'floor-plans': 'Floor Plans',
      'models-3d': '3D Models',
      'bim-cad': 'BIM & CAD',
      photos: 'Photos',
      'technical-rooms': 'Technical Rooms',
      'design-studio': 'Design Studio',
      'reports-notes': 'Reports & Notes',
      archives: 'Archives',
    },
    workflowsLabel: 'Supported export workflows',
    useCaseLabel: 'Typical professional use',
    compatibleLabel: 'Potential downstream tools',
    formats: [
      {
        id: 'pdf-plan',
        extension: '.PDF',
        name: 'Dimensioned Floor Plan & Project Report',
        category: 'floor-plans',
        purpose:
          'A4 landscape architectural floor plans with DIN/ISO annotations, plus multi-page PDF project reports.',
        workflows: ['Single Room', 'Multi-Storey House', 'Design Studio', 'Renovation Project'],
        professionalUse: 'Client printouts, site inspection dossiers and permit attachments.',
        compatibleTools: ['Apple Preview', 'Adobe Acrobat', 'Bluebeam Revu'],
      },
      {
        id: 'png-plan',
        extension: '.PNG',
        name: 'High-Resolution Floor Plan Image',
        category: 'floor-plans',
        purpose: '3x pixel-scale raster floor plans with room labels, dimensions and openings.',
        workflows: ['Single Room', 'Multi-Storey House', 'Organised Export'],
        professionalUse: 'Presentations, project briefs and quick email sharing.',
        compatibleTools: ['Keynote', 'Pages', 'Microsoft Word'],
      },
      {
        id: 'svg-drawing',
        extension: '.SVG',
        name: 'Scalable Vector Drawing (mm)',
        category: 'floor-plans',
        purpose:
          'Layered vector floor plan in millimetres separated per floor level in multi-storey archives.',
        workflows: ['Single Room', 'Per-Level Archive', 'Design Studio'],
        professionalUse: 'Precision vector layout editing and crisp documentation graphics.',
        compatibleTools: ['Affinity Designer', 'Adobe Illustrator', 'Inkscape'],
      },
      {
        id: 'dxf-cad',
        extension: '.DXF',
        name: '2D & 3D CAD Drawings (R12 / AC1015)',
        category: 'bim-cad',
        purpose:
          'Separated per-floor 2D CAD plans with scan floor elevations and Technical Room 3DFACE meshes.',
        workflows: ['Single Room', 'Per-Level Archive', 'Technical Room', 'Design Studio'],
        professionalUse: '2D CAD drafting, wall trace verification and MEP background drawings.',
        compatibleTools: ['AutoCAD', 'Archicad', 'FreeCAD', 'SketchUp'],
      },
      {
        id: 'ifc-bim',
        extension: '.IFC',
        name: 'IFC 4 / IFC2x3 Building Information Model',
        category: 'bim-cad',
        purpose:
          'Semantic IFC model containing walls, openings, doors, windows, floor slabs, spaces and MEP equipment/pipes with provenance.',
        workflows: ['Revit-Oriented IFC Export', 'House + Registered Technical Rooms'],
        professionalUse: 'BIM coordination and linking surveyed geometry into BIM authoring tools.',
        compatibleTools: ['Autodesk Revit', 'Archicad', 'FreeCAD'],
        caveat: 'No direct native .rvt export; MVD certification and Revit round-trip unverified.',
      },
      {
        id: 'usdz-models',
        extension: '.USDZ',
        name: 'Parametric, Raw Scan & Edited 3D Models',
        category: 'models-3d',
        purpose:
          'Native Apple Quick Look 3D format exported for parametric RoomPlan shells, raw iPhone meshes, Technical Rooms and Studio designs.',
        workflows: ['iPhone LiDAR Scan', 'Technical Room', 'Design Studio'],
        professionalUse: 'Instant 3D inspection on iPhone, iPad and Mac without extra software.',
        compatibleTools: ['Apple Quick Look', 'Blender', 'Xcode / RealityKit'],
      },
      {
        id: 'obj-mesh',
        extension: '.OBJ',
        name: '3D Polygon Mesh (+ Studio Materials ZIP)',
        category: 'models-3d',
        purpose:
          'Clean parametric floor meshes, converted raw scan meshes, vertex-colored Technical Room meshes and Studio OBJ-with-materials archives.',
        workflows: ['Parametric Plan', 'Scan Mesh', 'Technical Room', 'Design Studio'],
        professionalUse: '3D architectural modeling, material look-dev and spatial context review.',
        compatibleTools: ['Blender', 'SketchUp', 'FreeCAD', 'MeshLab'],
      },
      {
        id: 'stl-ply',
        extension: '.STL / .PLY',
        name: 'Tessellated & Polygon Mesh Geometry',
        category: 'models-3d',
        purpose:
          'Watertight plan meshes and raw scan conversions split cleanly per floor level for multi-storey buildings.',
        workflows: ['Parametric Plan', 'Scan Mesh', 'Per-Level Archive'],
        professionalUse: 'Scale 3D printing, fabrication checks and mesh processing tools.',
        compatibleTools: ['Blender', 'FreeCAD', 'PrusaSlicer', 'CloudCompare'],
      },
      {
        id: 'survey-photos-jpg',
        extension: '.JPG + .JSON',
        name: 'Geometrically Indexed Survey Photographs',
        category: 'photos',
        purpose:
          'In-scan JPEG photographs paired with room numbers, timestamps and 3D scan-frame camera poses (not GPS).',
        workflows: ['Photos-Only ZIP', 'Project Bundle ZIP', 'Organised Scan ZIP', 'PDF Report'],
        professionalUse:
          'Condition evidence, electrical panel & nameplate records and site audits.',
        compatibleTools: ['macOS Finder', 'Preview', 'Microsoft Excel (index CSV)'],
      },
      {
        id: 'technical-json',
        extension: '.JSON',
        name: 'Technical Room & Editable Design Schemas',
        category: 'technical-rooms',
        purpose:
          'Machine-readable technical-room-v1.json (pipes, ducts, equipment, fittings, calibration) and editable-design.json.',
        workflows: ['Technical Room Handoff', 'Design Studio', 'Organised Export'],
        professionalUse: 'Structured MEP data pipelines and non-destructive design storage.',
        compatibleTools: ['Custom BIM Pipelines', 'Python / Node Parsers'],
      },
      {
        id: 'studio-bundle',
        extension: '.ZIP / .CSV',
        name: 'Design Studio Engineering Deliverables',
        category: 'design-studio',
        purpose:
          'Editable design JSON, engineering CSV register, phase-filtered PDF/SVG/DXF plans and USDZ/OBJ-with-materials models.',
        workflows: ['Design Studio', 'Renovation Project Bundle'],
        professionalUse:
          'Separating Existing, Demolition and Proposed edits from original scan packages.',
        compatibleTools: ['Microsoft Excel', 'AutoCAD', 'Blender'],
      },
      {
        id: 'csv-reports-notes',
        extension: '.CSV / .TXT',
        name: 'Quantities, Engineering Registers & Notes',
        category: 'reports-notes',
        purpose:
          'UTF-8 BOM semicolon-delimited CSVs (quantities.csv, engineering-register.csv, index.csv) and plain-text project-notes.txt.',
        workflows: ['Renovation Quantities', 'Design Studio', 'Project Bundle'],
        professionalUse:
          'Renovation material takeoffs with waste allowances and spreadsheet review.',
        compatibleTools: ['Microsoft Excel', 'Apple Numbers', 'LibreOffice Calc'],
      },
      {
        id: 'zip-archives',
        extension: '.ZIP',
        name: 'Complete Project, Organised Scan & Photo Archives',
        category: 'archives',
        purpose:
          'Self-describing ZIP packages including manifest.json, README.txt and per-item export status reporting.',
        workflows: ['Project Bundle ZIP', 'Organised Scan ZIP', 'Photos-Only ZIP', 'Levels ZIP'],
        professionalUse: 'Structured handoff to architects, MEP engineers and renovation clients.',
        compatibleTools: ['macOS Archive Utility', 'Windows Explorer'],
      },
    ],
  },
  floorPlans: {
    eyebrow: '2D Architectural Drawings',
    headline: 'From walkthrough to floor plan.',
    subtitle:
      'Generate crisp, dimensioned architectural drawings for individual rooms or multi-storey buildings—with every level separated cleanly so floors never stack on the same plane.',
    formats: [
      {
        ext: 'PDF',
        title: 'Dimensioned Vector Plans',
        detail: 'A4 landscape sheets ready to print or attach to client documentation.',
      },
      {
        ext: 'PNG',
        title: 'High-Resolution Images',
        detail: '3x pixel-scale renders with room labels and clear opening geometry.',
      },
      {
        ext: 'SVG',
        title: 'Scalable Vector Drawings',
        detail: 'Precision millimetre-scale vectors organized onto architectural layers.',
      },
      {
        ext: 'DXF',
        title: 'CAD-Ready Linework',
        detail: 'R12 drawings separated per level (level-0.dxf, level-1.dxf) with floor datums.',
      },
    ],
    capabilities: [
      'DIN opening dimension lines (width above, height below, diagonal oblique ticks /)',
      'Clear window parapet / sill heights (BRH:) centered along interior sills',
      'Room area badges at Polygon2D.interiorPoint with #facc15 yellow borders',
      'Selectable mm, m or dual units with English dot-decimal (.) notation & per-floor separation',
    ],
  },
  models3d: {
    eyebrow: '3D Models & Mesh Exports',
    headline: 'Reality, reconstructed in 3D.',
    subtitle:
      'Choose the exact 3D representation your workflow requires—keeping raw LiDAR evidence distinct from clean parametric shells and edited Design Studio spaces.',
    formats: [
      {
        ext: 'USDZ',
        title: 'Apple Spatial & AR',
        detail: 'Available as parametric RoomPlan shells, raw iPhone meshes and Studio scenes.',
      },
      {
        ext: 'OBJ',
        title: 'Polygon Geometry',
        detail: 'Plan meshes, vertex-colored Technical Room scans or Studio .obj + material ZIPs.',
      },
      {
        ext: 'STL',
        title: 'Fabrication & Mesh',
        detail: 'Triangulated level geometry ready for scale printing and CAD mesh inspection.',
      },
      {
        ext: 'PLY',
        title: 'Polygon Mesh Data',
        detail: 'Per-floor or converted scan geometry for mesh inspection tools.',
      },
    ],
    distinctionTitle: 'Three distinct 3D representations—never mixed silently',
    sources: [
      {
        badge: 'Original Evidence',
        title: 'Captured Scan Meshes',
        detail:
          'Raw iPhone LiDAR room-mesh.usdz and vertex-colored Technical Room meshes preserved untouched.',
      },
      {
        badge: 'Reconstructed',
        title: 'Parametric Plan Models',
        detail:
          'Clean architectural walls, slabs and openings built deterministically from the verified 2D floor plan.',
      },
      {
        badge: 'Edited',
        title: 'Design Studio Models',
        detail:
          'Phase-filtered interior layouts and furniture/MEP arrangements exported separately from raw scans.',
      },
    ],
  },
  bim: {
    eyebrow: 'BIM & Engineering Data',
    headline: 'Connect reality with professional BIM workflows.',
    subtitle:
      'Export semantic IFC 4 models (with IFC2x3 concrete fallback) alongside structured JSON and CSV registers for downstream engineering coordination.',
    capabilities: [
      'IFC building information models (IFCWALL, IFCSLAB, IFCSPACE, IFCDOOR, IFCWINDOW)',
      'Revit-oriented IFC structure with mapped storey elevations',
      'Technical Room equipment classifications (Pset_BoilerTypeCommon, pumps, tanks, panels)',
      'Pipe centerlines, rectangular/round ducts and distribution ports with Bau_Provenance',
      'Existing, Demolition and Proposed design records in Studio JSON & CSV registers',
      'Measurement verification flags (deviceValidationPending) preserved per element',
    ],
    toolsLabel: 'Potential downstream applications',
    disclaimer:
      'dWalkScan exports open IFC, CAD, mesh and CSV files rather than proprietary native .rvt files. Official Autodesk certification, MVD certification and direct Revit round-trips remain unverified pending external validation.',
  },
  spatialPhotos: {
    eyebrow: 'Spatial Survey Photography',
    headline: 'Every photograph has a place.',
    subtitle:
      'Capture high-resolution JPEG survey photos during LiDAR walkthroughs and lock each frame to its exact room, timestamp and 3D camera pose inside the scan coordinate system.',
    coordinateNotice:
      'Important: Camera positions (X, Y, Z) and orientation (yaw, pitch, roll) belong to the local right-handed Y-up scan coordinate system in metres—not geographic GPS coordinates.',
    captureFeatures: [
      'In-scan JPEG photography (electrical panels, equipment nameplates, construction details)',
      'Room- and level-associated photo sequences starting at #1 per room',
      '3D camera position & viewing direction markers on 2D plans and 3D scenes',
      'Capture timestamps (capturedAt ISO-8601) and spatial orientation metadata',
    ],
    exportFeatures: [
      'Organized Photos/<Room>.<Number>/ or photos/level-0/<Room>/ folders',
      'Per-photo camera.json pose sidecars plus index.csv / photo-index.json',
      'Standalone Photos-Only ZIP archives (SurveyPhotoArchiveWriter)',
      'Automatic inclusion in complete Project ZIP bundles and PDF reports',
    ],
    stages: [
      {
        step: '01',
        title: '3D Scan Marker',
        detail: 'Captured in-scan at local room coordinates with directional viewing ray.',
      },
      {
        step: '02',
        title: 'Enlarged Evidence Card',
        detail: 'Reviewed alongside room context, nameplate details and orientation metadata.',
      },
      {
        step: '03',
        title: 'Organized Photo Archive',
        detail: 'Exported as numbered JPEGs with camera.json and index.csv in a clean ZIP.',
      },
    ],
    sampleMarkerLabel: 'Photo #01 · Technical Room',
    sampleRoomLabel: 'Main Electrical Panel & Boiler Manifold',
    sampleCoords: 'Scan XYZ: (2.14 m, 1.48 m, -1.72 m) · Local Frame (Non-GPS)',
    samplePose: 'Yaw: +42.0° · Pitch: -6.4° · Roll: +0.2°',
    sampleArchivePath: 'Photos/Technical-Room.1/Technical-Room.1.jpg + camera.json',
  },
  notesAndChecks: {
    eyebrow: 'Site Observations & Verification',
    headline: 'Capture more than geometry.',
    subtitle:
      'Pair scanned geometry and photographs with structured written project notes, equipment observations, interactive 2D plan task pins and laser-checked measurement verifications.',
    auditNotice:
      'Note: All documentation in dWalkScan is text-, pin- and photo-based (with standard iOS system keyboard dictation available in text fields). Native audio recording and voice-note attachments are not part of the current release.',
    cards: [
      {
        id: 'project-notes',
        badge: 'Project Notes',
        title: 'Written Survey & Room Notes',
        description:
          'Persistent project notes (project-notes.txt) and Technical Room field notes stored cleanly alongside scans and included in PDF reports.',
        meta: 'Exported in Notes/project-notes.txt & PDF',
      },
      {
        id: 'task-pins',
        badge: 'Plan Task Pins',
        title: 'Photo-Linked Punch Lists & Issues',
        description:
          'Place pins directly onto 2D floor plans linked to rooms, photos or elements, complete with issue descriptions, assignees and status tracking.',
        statusTag: 'Open · In Progress · Resolved',
        meta: 'Renovation phases: Existing · Demolition · Proposed',
      },
      {
        id: 'eng-notes',
        badge: 'Equipment Notes',
        title: 'Technical Room & Defect Observations',
        description:
          'Document equipment manufacturers, models, pipe clearances and element-level inspection records without mutating raw scan geometry.',
        meta: 'Retained in editable JSON & engineering-register.csv',
      },
    ],
    pinStatuses: [
      { status: 'Open', label: 'Open' },
      { status: 'In Progress', label: 'In Progress' },
      { status: 'Resolved', label: 'Resolved' },
    ],
    verificationTitle: 'Independent Measurement Checks (ProjectDistanceCheck)',
    verificationItems: [
      {
        label: 'Wall Span A–B (Laser Check)',
        observed: '4.812 m',
        reference: '4.820 m',
        delta: '-0.008 m (-0.17%)',
      },
      {
        label: 'Technical Room Clear Height',
        observed: '2.545 m',
        reference: '2.540 m',
        delta: '+0.005 m (+0.20%)',
      },
    ],
  },
  technicalDeliverables: {
    eyebrow: 'MEP & Utility Room Documentation',
    headline: 'Document the systems behind the building.',
    subtitle:
      'Capture mechanical plant rooms with preserved provenance—linking raw LiDAR surface evidence, pipe centerlines, equipment dimensions, survey photos and optional AI-assisted enrichment.',
    equipmentTypes: [
      'Boilers & Heat Pumps',
      'Buffer & DHW Tanks',
      'Circulation Pumps & Manifolds',
      'Round & Rectangular Ducts',
      'Electrical Panels & Meters',
      'Pipe Runs & Fittings',
      'Radiators & Valve Groups',
    ],
    outputs: [
      {
        ext: 'JSON',
        title: 'technical-room-v1.json',
        detail: 'Validated schema with effective geometry, calibration and surface hit provenance.',
      },
      {
        ext: 'DXF',
        title: 'survey.dxf (3DFACE)',
        detail: 'CAD Z-up converted scan mesh preserving room coordinate orientation.',
      },
      {
        ext: 'OBJ',
        title: 'mesh.obj',
        detail: 'Captured LiDAR surface triangles with per-vertex colors, never bounding boxes.',
      },
      {
        ext: 'USDZ / IFC',
        title: '3D & BIM Handoff',
        detail: 'Textured-atlas USDZ plus IFC-oriented MEP entities when registered to a house.',
      },
    ],
    evidenceChain: [
      { step: '1. Capture Evidence', detail: 'Raw depth, mesh triangles & JPEG survey photos' },
      { step: '2. Detected Geometry', detail: 'Pipes, ducts, equipment & optional AI review' },
      { step: '3. Manual Annotations', detail: 'Laser calibration, DN tags & equipment specs' },
      {
        step: '4. Verified Handoff',
        detail: 'JSON, OBJ, DXF, USDZ & IFC with accuracyMm provenance',
      },
    ],
    verificationWarning:
      'AI-assisted recognition (optional Gemini integration, off by default) and iPhone LiDAR captures remain marked device validation pending and never replace professional on-site engineering verification.',
  },
  quantities: {
    eyebrow: 'Renovation Material Takeoffs',
    headline: 'Turn geometry into useful quantities.',
    subtitle:
      'Compute opening-aware surface takeoffs directly from modeled floor plans and export clean semicolon-delimited CSV schedules ready for spreadsheet review.',
    metrics: [
      'Room dimensions, wall lengths & perimeters',
      'Floor areas & projected ceiling areas',
      'Gross wall area & net wall area (unioned openings subtracted once)',
      'Door, window and unhosted opening counts',
      'Height-based room volume min–max ranges',
      'Flooring & paint surface quantities with waste sliders',
      'Measurement verification flags (deviceValidationPending)',
      'Spreadsheet-safe quantities.csv engineering schedules',
    ],
    wasteLabel: 'Material Waste Allowance',
    sampleRoomName: 'Sample Suite · 24.6 m² Floor Plan',
    floorBaseLabel: 'Flooring Surface (incl. waste)',
    wallNetLabel: 'Paintable Net Wall Surface',
    perimeterLabel: 'Baseboard Perimeter',
    volumeRangeLabel: 'Estimated Volume Range',
    openingsLabel: 'Openings (Doors / Windows)',
    visionConnection:
      'These geometric quantities establish the 1D–3D foundation aligned with dWalkScan’s broader 5D BIM vision. Automated construction scheduling (4D) and complete cost estimation (5D) stay in specialized downstream tools.',
  },
  studioExports: {
    eyebrow: 'Design Studio Deliverables',
    headline: 'Your designs, ready for the next step.',
    subtitle:
      'Refine interiors, swap fixtures or classify renovation phases in Design Studio—then export edited plans and 3D scenes without ever modifying original scan evidence.',
    isolationNote:
      'Studio documents are stored and exported separately (Designs/...) from raw scan packages (Scans/.../Original/), guaranteeing immutable field evidence.',
    formats: [
      'Editable editable-design.json',
      'Phase-filtered PDF floor plans (All / Existing / Demolition / Proposed)',
      'Layered SVG & DXF CAD drawings',
      'Design Studio USDZ models',
      'OBJ models with materials (obj-with-materials.zip)',
      'PNG design views & engineering-register.csv',
    ],
    beforeLabel: 'Original Scan Evidence',
    afterLabel: 'Edited Design Studio Model',
    sliderHint: 'Drag slider or use arrow keys to compare',
  },
  archives: {
    eyebrow: 'Structured Deliverable Packages',
    headline: 'An entire building survey. One organized package.',
    subtitle:
      'Package floor plans, 3D models, Technical Rooms, Design Studio files, numbered photos, quantities, notes and reports into one self-describing ZIP archive.',
    packageNote:
      'Different export workflows (Renovation Project Bundle, Organised Scan Export, or Photos-Only ZIP) generate the corresponding structure below. Missing or unavailable outputs are logged honestly in manifest.json rather than fabricated.',
    tabs: [
      {
        id: 'project',
        label: 'Project Bundle ZIP',
        description:
          'Complete renovation project handoff generated by ProjectBundleExporter, retaining original packages, designs, reports, quantities, notes and numbered photos.',
      },
      {
        id: 'organised',
        label: 'Organised Scan ZIP',
        description:
          'Clean category-based archive (OrganisedExportService) with selectable Plans, Models, Technical Room, Design Studio and Photo folders.',
      },
      {
        id: 'photos',
        label: 'Photos-Only ZIP',
        description:
          'Lightweight survey evidence archive (SurveyPhotoArchiveWriter) containing numbered JPEGs, per-photo camera.json poses and photo-index.json.',
      },
    ],
    highlights: [
      'Selectable export categories & single-file or full-bundle modes',
      'Self-describing manifest.json & human-readable README.txt',
      'Windows-safe filename sanitization & per-item status (exported / unavailable)',
      'Camera pose JSON metadata (rawCameraPose, displayCameraPose, timestamps)',
    ],
  },
  pdfReports: {
    eyebrow: 'Client-Ready Reports',
    headline: 'Professional documentation, ready to share.',
    subtitle:
      'Compile cover metadata, scaled architectural plans, room tables, task-pin maps, survey photos and notes into a structured multi-page PDF deliverable.',
    pages: [
      {
        id: 'cover',
        title: 'Project Overview & Survey Notes',
        summary: 'Survey date, multi-scan independence disclaimer, validation notices & notes.',
        screenshotId: 'export-report-cover',
      },
      {
        id: 'floorplan',
        title: 'Scaled Architectural Plans & Task Pins',
        summary: 'Per-level 2D vector floor plans plus numbered task pin maps and issue legends.',
        screenshotId: 'export-report-plan',
      },
      {
        id: 'photos',
        title: 'Numbered Survey Photographs',
        summary: 'Room-indexed site photos up to the 100-photo / 64 MiB PDF display budget.',
        screenshotId: 'export-report-photos',
      },
      {
        id: 'quantities',
        title: 'Room Dimensions & Quantities',
        summary: 'Floor areas, perimeters, unresolved-item logs and renovation schedules.',
        screenshotId: 'export-report-quantities',
      },
    ],
    contents: [
      'Project overview & multi-scan independence notice',
      'Scaled 2D floor plans per storey',
      'Room names, areas & linear perimeters',
      'Renovation quantity schedules & waste parameters',
      'Room-numbered survey photography pages',
      'Project written notes & 2D task-pin legends',
      'Measurement validation warnings (deviceValidationPending)',
    ],
    sampleNote:
      'Sample PDF report files are not bundled in this repository yet. Placeholder slots above map directly to public/screenshots/ once sample captures are supplied.',
  },
  privacy: {
    eyebrow: 'Data Ownership & Interoperability',
    title: 'Your survey evidence stays portable, readable and yours.',
    subtitle:
      'dWalkScan stores projects locally by default, keeps original captures isolated from edits and exports open file formats without vendor lock-in.',
    pillars: [
      {
        title: 'Local-First Storage & Optional iCloud',
        detail:
          'Scans are saved locally in .roomscan, .housescan and .technicalroom packages on device; iCloud Drive sync is optional.',
      },
      {
        title: 'Immutable Original Scan Evidence',
        detail:
          'Design Studio edits, engineering notes and task pins live in separate sidecar records so source scan bytes are never overwritten.',
      },
      {
        title: 'Selective Sharing & Open Schemas',
        detail:
          'Export only photos, just 2D plans or the entire archive in human-readable JSON, CSV, DXF, SVG, OBJ, USDZ, IFC and PDF.',
      },
      {
        title: 'Explicit Consent for External AI',
        detail:
          'Optional Gemini photo analysis remains off by default and requires explicit user consent and per-send confirmation.',
      },
    ],
    disclaimer:
      'dWalkScan makes no claims of regulatory compliance certification, guaranteed structural accuracy or universal third-party BIM round-trip certification.',
  },
};
