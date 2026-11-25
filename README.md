# dWalkScan Product Website

Official product marketing and documentation website for **[dWalkScan (`itsmeBablu/bau-scan`)](https://github.com/itsmeBablu/bau-scan)** — _Walk. Scan. Transform._ — an open-source native Swift application for **iPhone, iPad, and Mac** covering LiDAR room and multi-storey building scanning, DIN-dimensioned 2D floor plans, Design Studio 3D editing, Technical Room (`Technik`) MEP documentation, renovation material takeoffs, and CAD/BIM-oriented deliverables.

- **Website Repository:** [github.com/itsmeBablu/wed-walk-scan](https://github.com/itsmeBablu/wed-walk-scan)
- **Native Apple App Repository:** [github.com/itsmeBablu/bau-scan](https://github.com/itsmeBablu/bau-scan)

---

## Native dWalkScan Capabilities Documented on This Site

- **Continuous LiDAR Capture & Multi-Storey Clustering (iPhone Pro & iPad Pro, iOS/iPadOS 18+):** Walk room-to-room or across storeys using Apple RoomPlan with automatic vertical floor clustering (`StoryDetector`), door/window/opening detection, radiator dimension surveying (`HouseRadiator`), and in-scan JPEG photography with local XYZ scan-frame camera poses (`camera.json`).
- **Architectural 2D Floor Plans:** DIN-style opening dimensions (width above the line, height below, diagonal oblique ticks `/`), interior window parapet heights (`BRH:`), interior room area badges at `Polygon2D.interiorPoint` (`#facc15` accent borders), and selectable `mm`, `m`, or dual units with dot-decimal (`.`) notation.
- **Technical Room (`Technik`) MEP Documentation:** Dedicated plant-room workflows for boilers, buffer/DHW tanks, pumps, manifolds, electrical panels, ducts, pipe runs, and radiators, with optional Gemini AI photo analysis (off by default) and `deviceValidationPending` / `accuracyMm` provenance.
- **Mac Companion App & Design Studio (`macOS 15+`):** Shared Swift codebase featuring native macOS menus, drag-and-drop, printing (`⌘P`), Sparkle auto-updates (`appcast.xml`), 5 cm grid snapping, arrow-key micro-nudging, front-wall presentation cutaways, Office / Living / Kitchen & Bath furniture collections, and automatic `<= 32"` desktop monitor classification.
- **Open Deliverables & Local-First Packages:** Self-contained `.roomscan`, `.housescan`, and `.technicalroom` bundles synced locally or via iCloud Drive (`dWalkScan` folder), exporting `PDF` (A4 landscape + multi-page reports), `PNG`, layered `SVG`, `DXF`, `USDZ`, `OBJ` (+ materials ZIP), `STL`, `PLY`, `IFC 4 / IFC2x3`, `quantities.csv`, `technical-room-v1.json`, and self-describing ZIP archives.
- **EN / DE Localization & Brand System:** Full English and German localization paired with Primary Yellow (`#facc15`), Secondary Yellow (`#fef08a` / `#fef3c7`), Dark Charcoal (`#111110` / `#272000`), and iOS 26 / macOS Tahoe-inspired Liquid Glass controls.

---

## Website Technology Stack

- **Vite 8** + **React 19** + **TypeScript 6** (`strict: true`)
- **Tailwind CSS v4** + custom CSS design tokens (`src/styles/tokens.css`)
- **GSAP + ScrollTrigger + `@gsap/react`** for pinned workflows, parallax, and active header navigation
- **Lucide React** icons
- **ESLint** + **Prettier**

---

## Development Commands

```bash
npm install
npm run dev           # Start the local Vite development server
npm run build         # Run strict TypeScript check (tsc -b) and build into dist/
npm run preview       # Preview the production bundle locally
npm run lint          # Run ESLint across the repository
npm run format        # Format source and config files with Prettier
npm run format:check  # Verify Prettier formatting without modifying files
```

---

## Project Structure

```text
public/
├── icons/             # App icon & favicon SVGs
├── images/            # Open Graph cover SVG
└── screenshots/       # Optional replacement screenshots (iphone, ipad, mac, technical, floorplans)
src/
├── animations/        # GSAP configuration, scroll reveal & pinned showcases
├── components/
│   ├── devices/       # MacWindow, IPadFrame & IPhoneFrame components
│   ├── exports/       # BIM workflow, format explorers, takeoffs, reports & photo previews
│   ├── navigation/    # Floating Liquid Glass desktop & mobile navigation
│   └── ui/            # Liquid Glass primitives, segmented controls, cards, buttons & footer
├── data/              # Brand links/constants, navigation, export catalog & screenshot manifest
├── hooks/             # Theme/Language providers, scroll spy, pointer glow & media queries
├── i18n/              # English & German copy (en, de, deliverables.en, deliverables.de)
├── layouts/           # Shared page layout shell
├── sections/          # Hero, Brand Story, Ecosystem, Overview, Studio, Technical Room, Exports, FAQ & Downloads
├── styles/            # Design tokens and Tailwind / Liquid Glass layer styles
├── types/             # Shared TypeScript & virtual module types
└── utils/             # Asset URL resolver & classname helpers
```

---

## Replacing Screenshots

All screenshot slots are registered in `src/data/screenshots.ts`:

1. Place `PNG`, `JPG`, `WebP`, `AVIF`, or `SVG` captures showing the yellow `dWalkScan` interface under:
   - `public/screenshots/iphone/`
   - `public/screenshots/ipad/`
   - `public/screenshots/mac/`
   - `public/screenshots/technical/`
   - `public/screenshots/floorplans/`
2. Match the file names defined in `src/data/screenshots.ts` (or update the `path` entries there).
3. `screenshotManifestPlugin` in `vite.config.ts` exposes `virtual:dwalkscan-screenshots` so real captures appear automatically with zero 404 console errors when slots use placeholders.

---

## Customization, Distribution Links & Static Deployment

- **Repository & Release Links**: Configured centrally in `src/data/brand.ts` (`appRepoUrl`, `releasesUrl`, `iosWorkflowUrl`, `licenseUrl`, `websiteRepoUrl`) and consumed by `DownloadsSection.tsx` and `Footer.tsx`.
- **Copy & Localization**: Edit `src/i18n/en.ts`, `src/i18n/de.ts`, `src/i18n/deliverables.en.ts`, and `src/i18n/deliverables.de.ts` (type-checked via `src/types/index.ts`).
- **GitHub Pages / Static Hosting**: `vite.config.ts` defaults to `base: process.env.VITE_BASE_PATH ?? './'` and resolves public assets through `import.meta.env.BASE_URL` for root domains and repository subpaths (`https://itsmebablu.github.io/wed-walk-scan/`).

---

## License

dWalkScan native app source (`itsmeBablu/bau-scan`) is licensed under the [MIT License](https://github.com/itsmeBablu/bau-scan/blob/main/LICENSE).
