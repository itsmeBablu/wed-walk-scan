import type { ExportExplorerCategory, ZipTreeNode } from '@/types';

export const EXPORT_EXPLORER_CATEGORIES: readonly ExportExplorerCategory[] = [
  'all',
  'floor-plans',
  'models-3d',
  'bim-cad',
  'photos',
  'technical-rooms',
  'design-studio',
  'reports-notes',
  'archives',
];

/**
 * Verified downstream software references checked against dWalkScan export implementations.
 * No official partnerships, certified MVD interoperability, or native `.rvt` exports are claimed.
 */
export const VERIFIED_DOWNSTREAM_TOOLS = [
  { name: 'Autodesk Revit', role: 'IFC 4 / IFC2x3' },
  { name: 'AutoCAD', role: 'DXF R12 / AC1015' },
  { name: 'Archicad', role: 'IFC 4 / DXF / PDF' },
  { name: 'Blender', role: 'OBJ / PLY / STL / USDZ' },
  { name: 'SketchUp', role: 'OBJ / DXF / STL' },
  { name: 'FreeCAD', role: 'IFC / OBJ / DXF' },
  { name: 'Microsoft Excel', role: 'CSV (UTF-8 BOM)' },
] as const;

/**
 * Verified project renovation bundle structure from `ProjectBundleExporter.swift`
 */
export const PROJECT_BUNDLE_TREE: readonly ZipTreeNode[] = [
  {
    name: 'Project-Renovation-Bundle.zip',
    kind: 'folder',
    children: [
      {
        name: 'Scans/<Scan-Name>/',
        kind: 'folder',
        children: [
          { name: 'Original/<uuid>.housescan', kind: 'file', badge: 'RAW' },
          { name: 'Plans/level-0.dxf, level-0.svg, plan.pdf, plan.png', kind: 'file', badge: '2D' },
          {
            name: 'Models/level-0.obj, level-0.stl, level-0.ply, .usdz',
            kind: 'file',
            badge: '3D',
          },
          { name: 'Data/<scan>.json', kind: 'file', badge: 'JSON' },
        ],
      },
      {
        name: 'Designs/<Design-Name>/',
        kind: 'folder',
        children: [
          { name: 'editable-design.json', kind: 'file', badge: 'JSON' },
          { name: 'engineering-register.csv', kind: 'file', badge: 'CSV' },
          { name: 'floor-plans.pdf', kind: 'file', badge: 'PDF' },
          { name: 'Models/level-0.usdz', kind: 'file', badge: 'USDZ' },
          { name: 'Models/level-0.obj-with-materials.zip', kind: 'file', badge: 'ZIP' },
        ],
      },
      {
        name: 'Photos/',
        kind: 'folder',
        children: [
          { name: 'Living-Room.1/Living-Room.1.jpg + camera.json', kind: 'file', badge: 'JPG' },
          {
            name: 'Technical-Room.1/Technical-Room.1.jpg + camera.json',
            kind: 'file',
            badge: 'JPG',
          },
        ],
      },
      {
        name: 'Reports/',
        kind: 'folder',
        children: [{ name: 'project-report.pdf', kind: 'file', badge: 'PDF' }],
      },
      {
        name: 'Quantities/',
        kind: 'folder',
        children: [{ name: 'quantities.csv', kind: 'file', badge: 'CSV' }],
      },
      {
        name: 'Notes/',
        kind: 'folder',
        children: [{ name: 'project-notes.txt', kind: 'file', badge: 'TXT' }],
      },
      { name: 'project-index.json', kind: 'file', badge: 'JSON' },
      { name: 'manifest.json', kind: 'file', badge: 'STATUS' },
      { name: 'README.txt', kind: 'file', badge: 'TXT' },
    ],
  },
];

/**
 * Verified single-scan / house archive layout from `OrganisedExportService.swift`
 */
export const ORGANISED_SCAN_TREE: readonly ZipTreeNode[] = [
  {
    name: 'Building-Survey-Organised.zip',
    kind: 'folder',
    children: [
      {
        name: 'plans/',
        kind: 'folder',
        children: [
          { name: 'level-0.pdf (or plan.pdf)', kind: 'file', badge: 'PDF' },
          { name: 'level-0.svg (or plan.svg)', kind: 'file', badge: 'SVG' },
          { name: 'level-0.dxf (or plan.dxf)', kind: 'file', badge: 'DXF' },
        ],
      },
      {
        name: 'models/',
        kind: 'folder',
        children: [
          { name: 'level-0.obj', kind: 'file', badge: 'OBJ' },
          { name: 'level-0.stl', kind: 'file', badge: 'STL' },
          { name: 'level-0.ply', kind: 'file', badge: 'PLY' },
          { name: 'level-0.usdz', kind: 'file', badge: 'USDZ' },
        ],
      },
      {
        name: 'technical-room/',
        kind: 'folder',
        children: [
          { name: 'technical-room-v1.json', kind: 'file', badge: 'JSON' },
          { name: 'mesh.obj', kind: 'file', badge: 'OBJ' },
          { name: 'survey.dxf', kind: 'file', badge: 'DXF' },
        ],
      },
      {
        name: 'studio/',
        kind: 'folder',
        children: [
          { name: 'design.json', kind: 'file', badge: 'JSON' },
          { name: 'engineering.csv', kind: 'file', badge: 'CSV' },
        ],
      },
      {
        name: 'photos/',
        kind: 'folder',
        children: [
          { name: 'level-0/<Room-Name>/photo-01.jpg', kind: 'file', badge: 'JPG' },
          { name: 'index.csv', kind: 'file', badge: 'CSV' },
        ],
      },
      { name: 'manifest.json', kind: 'file', badge: 'JSON' },
      { name: 'README.txt', kind: 'file', badge: 'TXT' },
    ],
  },
];

/**
 * Verified photo-only ZIP archive layout from `SurveyPhotoArchiveWriter.swift`
 */
export const PHOTOS_ONLY_TREE: readonly ZipTreeNode[] = [
  {
    name: 'Project-Photos.zip',
    kind: 'folder',
    children: [
      {
        name: 'Photos/',
        kind: 'folder',
        children: [
          { name: 'Kitchen.1/Kitchen.1.jpg', kind: 'file', badge: 'JPG' },
          { name: 'Kitchen.1/camera.json', kind: 'file', badge: 'POSE' },
          { name: 'Technical-Room.1/Technical-Room.1.jpg', kind: 'file', badge: 'JPG' },
          { name: 'Technical-Room.1/camera.json', kind: 'file', badge: 'POSE' },
        ],
      },
      { name: 'photo-index.json', kind: 'file', badge: 'INDEX' },
      { name: 'README.txt', kind: 'file', badge: 'TXT' },
    ],
  },
];
