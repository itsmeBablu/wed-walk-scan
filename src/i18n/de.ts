import { deliverablesDe } from '@/i18n/deliverables.de';
import type { TranslationSchema } from '@/types';

export const de: TranslationSchema = {
  meta: {
    siteTitle: 'dWalkScan — Gehen. Scannen. Transformieren.',
    siteDescription:
      'Entdecken Sie dWalkScan, eine native App für iPhone, iPad und Mac für LiDAR-Gebäudeaufmaß, digitale Grundrisse, 3D-Planung, Umbauplanung und BIM-orientierte Baudokumentation.',
  },
  nav: {
    brand: 'dWalkScan',
    items: {
      overview: 'Überblick',
      features: 'Funktionen',
      'design-studio': 'Design Studio',
      'technical-room': 'Technikraum',
      exports: 'Exporte',
      downloads: 'Downloads',
    },
    downloadCta: 'Laden',
    menuOpen: 'Navigationsmenü öffnen',
    menuClose: 'Navigationsmenü schließen',
    skipToContent: 'Zum Hauptinhalt springen',
  },
  controls: {
    languageLabel: 'Sprache',
    themeLabel: 'Erscheinungsbild',
    themes: {
      light: 'Hell',
      dark: 'Dunkel',
      system: 'Auto',
    },
    learnMore: 'Mehr erfahren',
    close: 'Schließen',
  },
  hero: {
    eyebrow: 'Entwickelt für iPhone, iPad und Mac.',
    headlineLines: ['Gehen.', 'Scannen.', 'Transformieren.'],
    leadStatement: 'Von realen Räumen zu multidimensionalen Gebäudeinformationen.',
    supportingHeadline: 'Entwickelt für iPhone, iPad und Mac.',
    description:
      'Verwandeln Sie reale Räume in digitale Grundrisse, bearbeitbare 3D-Modelle und professionelle Baudokumentation.',
    primaryCta: 'dWalkScan entdecken',
    secondaryCta: 'Funktionen ansehen',
    platformPill:
      'Inspiriert von 5D-BIM. Mit LiDAR-Technologie. Entwickelt für iPhone, iPad und Mac.',
    macLabel: 'MacBook — Design Studio',
    ipadLabel: 'iPad — Grundrisse & Prüfung',
    iphoneLabel: 'iPhone — LiDAR-Erfassung',
  },
  ecosystem: {
    eyebrow: 'Apple-Ökosystem',
    headline: 'Überall erfassen. Überall gestalten.',
    subtitle:
      'Entwickelt für iPhone, iPad und Mac. Ein gemeinsamer Swift-Kern und einheitliche Projektpakete halten Scans, Grundrisse, Fotos und Entwürfe auf jedem Gerät synchron.',
    selectorLabel: 'Apple-Gerät auswählen',
    platforms: [
      {
        id: 'iphone',
        tabLabel: 'iPhone — Erfassen',
        roleTitle: 'iPhone — Erfassen',
        deviceTag: 'iOS 18+ · Mobile LiDAR-App',
        summary:
          'Begehen Sie einzelne Räume, ganze Häuser oder Technikräume und erfassen Sie kalibrierte LiDAR-Geometrie direkt vor Ort.',
        capabilities: [
          'LiDAR-Gebäudeaufmaß',
          'Raum- und Mehrgeschoss-Aufnahmen',
          'Technikraum-Dokumentation',
          'Räumliche Begehungsfotografie',
          'Vor-Ort-Beobachtungen & Messungen',
        ],
        screenshotId: 'hero-iphone',
      },
      {
        id: 'ipad',
        tabLabel: 'iPad — Entdecken',
        roleTitle: 'iPad — Entdecken',
        deviceTag: 'iPadOS 18+ · Hoch- & Querformat',
        summary:
          'Prüfen Sie bemaßte Grundrisse, betrachten Sie 3D-Gebäudemodelle und dokumentieren Sie Befunde auf dem großen Display.',
        capabilities: [
          'Großformatige Grundriss-Inspektion',
          '3D-Gebäudevisualisierung',
          'Dokumentation direkt vor Ort',
          'Begehungsfoto-Galerien',
          'Projektprüfungen & Freigaben',
          'LiDAR-Scanning auf kompatiblen iPad Pro Modellen, sofern unterstützt',
        ],
        note: 'Das Scannen erfordert ein iPhone Pro oder iPad Pro mit LiDAR; iPads ohne LiDAR behalten volle Ansichts-, Foto-, Prüf- und Exportfunktionen.',
        screenshotId: 'hero-ipad',
      },
      {
        id: 'mac',
        tabLabel: 'Mac — Transformieren',
        roleTitle: 'Mac — Transformieren',
        deviceTag: 'macOS 15+ · Desktop-Studio',
        summary:
          'Verfeinern Sie Geometrie im Design Studio, erstellen Sie Ingenieur-Dokumentationen und liefern Sie komplette CAD-/IFC-Pakete.',
        capabilities: [
          'Professionelles Design Studio',
          'Interaktive 3D-Bearbeitung',
          'Umbauplanung',
          'Ingenieurdokumentation',
          'BIM-orientierte IFC- & CAD-Exporte',
          'Mengenermittlung',
          'Komplette Projektpakete',
        ],
        note: 'macOS ist auf Visualisierung, Design Studio, Mengen, Drucken und Exporte spezialisiert (LiDAR-Aufnahme erfolgt über iOS/iPadOS).',
        screenshotId: 'hero-mac',
      },
    ],
  },
  brandStory: {
    eyebrow: 'Warum dWalkScan',
    title: 'Mehr als ein Scan. Eine neue Dimension.',
    subtitle:
      'Das kleingeschriebene „d“ steht für Dimensionen – inspiriert vom 5D-Building-Information-Modelling-Ansatz, von der präzisen LiDAR-Erfassung vor Ort bis zur strukturierten Gebäudeplanung.',
    pillars: [
      {
        id: 'dimensions',
        token: 'd',
        label: 'Dimensionen',
        description: 'Inspiriert von multidimensionalen BIM-Arbeitsabläufen.',
      },
      {
        id: 'walk',
        token: 'Walk',
        label: 'Erfassen',
        description: 'Reale Räume natürlich begehen und räumlich aufnehmen.',
      },
      {
        id: 'scan',
        token: 'Scan',
        label: 'Digitalisieren',
        description: 'Erfasste Geometrie in digitale Gebäudeinformationen überführen.',
      },
      {
        id: 'transform',
        token: 'Transform',
        label: 'Gestalten',
        description: 'Gebäudedaten bearbeiten, visualisieren, planen und exportieren.',
      },
    ],
    dimensionsEyebrow: 'Fünf Dimensionen',
    dimensionsTitle: 'Strukturiert entlang der fünf Dimensionen digitaler Gebäudeintelligenz.',
    dimensionsSubtitle:
      'dWalkScan liefert heute präzise 1D-Maße, 2D-Grundrisse und bearbeitbare 3D-Geometrie – architektonisch ausgerichtet auf die umfassendere 4D- und 5D-BIM-Methodik.',
    visionNote:
      'Hinweis: 4D-Zeitplanung und 5D-Kostenplanung verdeutlichen die übergeordnete BIM-Vision hinter dWalkScan und stellen keine integrierten Termin- oder Kostenrechnungsmodule dar.',
    availableTag: 'In dWalkScan',
    visionTag: 'BIM-Vision',
    dimensions: [
      {
        id: '1d',
        code: '1D',
        title: 'Länge',
        description: 'Lineare Maße.',
        detail:
          'Kalibrierte Wandabstände, Deckenhöhen und per Laser geprüfte Referenzmaße direkt aus dem Rundgang.',
        isVision: false,
      },
      {
        id: '2d',
        code: '2D',
        title: 'Fläche',
        description: 'Grundrisse und Raumaufteilungen.',
        detail:
          'Orthogonale Architekturgrundrisse, Wandstärken, Türschläge und berechnete Netto-Raumflächen.',
        isVision: false,
      },
      {
        id: '3d',
        code: '3D',
        title: 'Geometrie',
        description: 'Digitale Gebäudemodelle und Visualisierung.',
        detail:
          'Bearbeitbare parametrische Wände, Öffnungen, Schnitte und flüssige Metal-3D-Ansichten für die Umbauplanung.',
        isVision: false,
      },
      {
        id: '4d',
        code: '4D',
        title: 'Zeit',
        description: 'Bau- und Umbauplanung.',
        detail:
          'Übergeordnete BIM-Perspektive zur Verknüpfung sauberer Bestandsmodelle mit Bauabschnitten in spezialisierter Planungssoftware.',
        isVision: true,
      },
      {
        id: '5d',
        code: '5D',
        title: 'Kosten',
        description: 'Mengenermittlung und Kostenplanung.',
        detail:
          'Übergeordnete BIM-Perspektive, die Flächen- und Bauteilauszüge für die nachgelagerte Kalkulation nutzbar macht.',
        isVision: true,
      },
    ],
  },
  overview: {
    eyebrow: 'Durchgängige Architektur-Pipeline',
    title: 'Vom Raumrundgang bis zur abnahmefähigen Baudokumentation.',
    subtitle:
      'Jedes vor Ort erfasste Aufmaß synchronisiert nahtlos in Ihren Mac-Arbeitsbereich – inklusive Geometrie, Wandstärken und Ebenenstruktur.',
    stages: [
      {
        id: 'scan',
        stepNumber: '01',
        label: 'iPhone-Scan',
        title: 'Komplette Innenräume in Minuten erfassen.',
        description:
          'Gehen Sie einfach mit dem iPhone LiDAR durch Ihre Räume. dWalkScan erkennt Wände, Öffnungen, Deckenhöhen und Stützen in Echtzeit.',
        badge: 'iOS Vor-Ort-App',
        screenshotId: 'workflow-iphone-scan',
        deviceType: 'iphone',
        highlights: [
          'Durchgehender Rundgang inklusive mehrgeschossiger StoryDetector-Gliederung',
          'Automatische Tür-, Fenster-, BRH-Brüstungshöhen- & Heizkörpererkennung',
          'Vollständig offline auf der Baustelle nutzbar',
        ],
      },
      {
        id: 'floorplan',
        stepNumber: '02',
        label: 'Digitaler Grundriss',
        title: 'Saubere 2D-Grundrisse, automatisch bemaßt.',
        description:
          'Wandeln Sie räumliche Punktwolken und RoomPlan-Flächen in orthogonale, maßstabsgetreue Architekturpläne um.',
        badge: 'Sofort-2D-Plan',
        screenshotId: 'workflow-floor-plan',
        deviceType: 'frame',
        highlights: [
          'DIN-Öffnungsmaße (Breite oben, Höhe unten, schräge Endstriche /)',
          'Brüstungshöhen (BRH) & Raumstempel im Innenpunkt mit gelbem Rahmen',
          'Wählbare Einheiten in mm, m oder kombiniert in Punktnotation (.)',
        ],
      },
      {
        id: 'studio',
        stepNumber: '03',
        label: 'Mac Design Studio',
        title: '3D-Geometrie präzise am großen Display verfeinern.',
        description:
          'Öffnen Sie das Projekt auf macOS, passen Sie Zwischenwände an, platzieren Sie Ausbauelemente und prüfen Sie Lichtverhältnisse und Abstände.',
        badge: 'macOS Arbeitsbereich',
        screenshotId: 'workflow-design-studio',
        deviceType: 'mac',
        highlights: [
          'Hardwarebeschleunigter Metal-Viewport',
          'Nicht-destruktive parametrische Wandbearbeitung',
          'Synchronisierte 2D-Plan- und 3D-Ansichten',
        ],
      },
      {
        id: 'technical',
        stepNumber: '04',
        label: 'Technische Dokumentation',
        title: 'Technikräume, Schächte und Toleranzen dokumentieren.',
        description:
          'Kommentieren Sie Technikräume, prüfen Sie Wartungsabstände, hinterlegen Sie Laser-Kontrollmaße und erstellen Sie strukturierte Raumlisten.',
        badge: 'Ingenieur-Spezifikation',
        screenshotId: 'workflow-technical-doc',
        deviceType: 'frame',
        highlights: [
          'Schnelle Ansichten- und Schnittgenerierung',
          'Strukturierte Raum- und Flächenverzeichnisse',
          'Räumlich verortete Baustellen-Fotonotizen',
        ],
      },
      {
        id: 'export',
        stepNumber: '05',
        label: 'Professioneller Export',
        title: 'Branchenstandards direkt an alle Projektpartner liefern.',
        description:
          'Exportieren Sie saubere IFC-, DXF-, USDZ-, OBJ- und maßstabsgetreue PDF-Pakete ohne manuelle Nacharbeit direkt in CAD und BIM-fähige Systeme.',
        badge: 'CAD- & IFC-bereit',
        screenshotId: 'workflow-export',
        deviceType: 'mac',
        highlights: [
          'Maßstabsgetreue 1:50 & 1:100 Architektur-PDFs',
          'Erhaltene IFC-Klassen für nachgelagerte BIM-Tools',
          'Projektarchive mit einem Klick teilen',
        ],
      },
    ],
  },
  features: {
    eyebrow: 'Für Präzision entwickelt',
    title: 'Konstruiert wie ein natives Profi-Werkzeug.',
    subtitle:
      'Speziell entwickelt für Architektinnen, Bauingenieure, Innenarchitektur und Umbauplanung im Apple-Ökosystem.',
    items: [
      {
        id: 'lidar',
        icon: 'scan',
        span: 'wide',
        tag: 'Aufmaß vor Ort',
        title: 'Geführte LiDAR- & Photogrammetrie-Erfassung',
        description:
          'Eine Live-Abdeckungsanzeige markiert bereits gescannte und fehlende Bereiche beim Gehen – keine vergessenen Ecken mehr.',
        metric: 'Bis zu 60 fps Raumnetz',
      },
      {
        id: 'dimensions',
        icon: 'ruler',
        span: 'standard',
        tag: 'Messtechnik',
        title: 'Toleranzprüfung & Laser-Kalibrierung',
        description:
          'Fixieren Sie Referenzwände mit dem Laser-Entfernungsmesser, um den gesamten Etagenscan präzise abzugleichen.',
        metric: 'mm / m Einheitenpräzision',
      },
      {
        id: 'layers',
        icon: 'layers',
        span: 'standard',
        tag: 'Gebäudestruktur',
        title: 'Mehrgeschossige Ausrichtung',
        description:
          'Stapeln Sie Keller-, Erd- und Obergeschosse exakt über gemeinsame Bezugsachsen und Treppenhäuser.',
      },
      {
        id: 'parametric',
        icon: 'box',
        span: 'standard',
        tag: '3D-Modellierung',
        title: 'Parametrische Bauteile bearbeiten',
        description:
          'Ändern Sie Wandhöhen, Dachschrägen, Laibungen und Türen direkt im Modell ohne erneuten Scan.',
      },
      {
        id: 'metal',
        icon: 'cpu',
        span: 'wide',
        tag: 'Apple Silicon',
        title: 'Metal-Rendering mit Unified Memory',
        description:
          'Navigieren Sie komplexe Mehrraumgebäude, Umgebungsverdeckung und Live-Schnitte flüssig mit ProMotion-Bildraten.',
        metric: 'Natives Swift & Metal',
      },
      {
        id: 'sync',
        icon: 'cloud',
        span: 'standard',
        tag: 'Continuity',
        title: 'Privates iCloud & AirDrop Handoff',
        description:
          'Starten Sie das Aufmaß auf der Baustelle per iPhone und arbeiten Sie Sekunden später nahtlos am Mac weiter.',
      },
      {
        id: 'sections',
        icon: 'compass',
        span: 'standard',
        tag: 'Raumanalyse',
        title: 'Sofortige Ansichten & Schnittebenen',
        description:
          'Schneiden Sie durch Decken, Stürze und Installationsschächte, um lichte Höhen und Trassen zu kontrollieren.',
      },
      {
        id: 'privacy',
        icon: 'shield',
        span: 'standard',
        tag: 'Local-First',
        title: 'Kein erzwungener Cloud-Upload',
        description:
          'Die gesamte räumliche Berechnung läuft lokal auf Ihren Apple-Geräten – sensible Bestandsdaten bleiben bei Ihnen.',
      },
    ],
  },
  designStudio: {
    eyebrow: 'Mac Design Studio',
    title: 'Präzise Planbearbeitung trifft flüssige 3D-Raumgestaltung.',
    subtitle:
      'Mehr als reine Punktwolken: dWalkScan Design Studio verwandelt mobile Aufmaße in saubere, bearbeitbare Architekturgeometrie.',
    windowTitle: 'Villa_West_OG_02.housescan — Design Studio',
    capabilities: [
      {
        id: 'geometry',
        title: '5-cm-Rasterfang, Wandausrichtung & Geometrie',
        subtitle: 'Rasterfang & Pfeiltasten-Feinjustierung',
        description:
          'Verschieben, drehen und justieren Sie Wände, Öffnungen und Objekte mit 5-cm-Rasterfang, Pfeiltasten-Schritten, Wandfang und Kollisionsprüfung.',
        specs: [
          '5 cm (0,05 m) Rasterfang',
          'Verknüpfte 2D- & 3D-Inspektoren',
          'Lückenloser Verlauf',
        ],
        screenshotId: 'studio-geometry',
      },
      {
        id: 'materials',
        title: 'Büro-, Wohn- & Küchenkollektionen',
        subtitle: 'Ausbau, Materialien & automatische 32"-Monitor-Regel',
        description:
          'Möblieren Sie Räume aus Büro-, Wohn-, Küchen- und Badbibliotheken – inklusive automatischer 32"-Regel zur Trennung von Monitoren und Fernsehern.',
        specs: [
          'Automatische <= 32"-Monitor-Erkennung',
          'Schreibtische, Konferenztische & Whiteboards',
          'Materialien, Öffnungswinkel & Oberflächen',
        ],
        screenshotId: 'studio-materials',
      },
      {
        id: 'sections',
        title: 'Cutaway-Wände & Lichtraumprüfung',
        subtitle: 'Konstruktions- & Raumprüfung',
        description:
          'Blenden Sie vordere Wände per Cutaway-Modus aus, wechseln Sie zwischen einzelnen Geschossen und prüfen Sie Abstände und Raumwirkung in 3D.',
        specs: [
          'Vorderwand-Cutaway-Ansicht',
          'Geschoss-Umschaltung',
          'Abstands- & Überlappungstest',
        ],
        screenshotId: 'studio-sections',
      },
    ],
  },
  technicalRoom: {
    eyebrow: 'Technikraum & Grundrisse',
    title: 'Gebaut für Technikräume, enge Schächte und exakte Pläne.',
    subtitle:
      'Wechseln Sie mühelos zwischen bemaßten Grundrissen, detaillierten TGA-Technikraum-Scans und strukturierten Flächen- und Raumverzeichnissen.',
    tabs: [
      {
        id: 'floorplans',
        label: '2D-Grundrisse',
        title: 'Maßstabsgetreue Architekturgrundrisse.',
        description:
          'Erstellen Sie gestochen scharfe 2D-Grundrisse mit DIN-Öffnungsbemaßung (Breite oben, Höhe unten, schräge Endstriche /), Fenster-Brüstungshöhen (BRH) und Flächenstempeln.',
        screenshotId: 'technical-plan',
        metrics: [
          { label: 'Öffnungsbemaßung', value: 'DIN / BRH-Brüstung' },
          { label: 'Raumstempel', value: 'm² im Innenpunkt' },
          { label: 'Wählbare Einheiten', value: 'mm / m / Dual (.)' },
        ],
      },
      {
        id: 'mep',
        label: 'Technikraum',
        title: 'Anlagenabstände & Leitungsführung im Blick.',
        description:
          'Erfassen Sie Heizungszentralen, Elektroschränke und Lüftungsverteiler komplett in 3D, um Bedienflächen und Wanddurchbrüche im Büro zu planen.',
        screenshotId: 'technical-room-analysis',
        metrics: [
          { label: 'Abstandsprüfung', value: '3D-Hüllkörper' },
          { label: 'Installationszonen', value: 'Markierte Ebenen' },
          { label: 'Vor-Ort-Fotos', value: 'Räumlich verankert' },
        ],
      },
      {
        id: 'schedule',
        label: 'Raumbücher',
        title: 'Strukturierte Flächen-, Umfangs- & Volumenlisten.',
        description:
          'Jede modellierte Wand-, Decken- und Bodenfläche berechnet automatisch Netto-Grundfläche, Wandfläche und Raumvolumen für die Umbauplanung.',
        screenshotId: 'technical-schedule',
        metrics: [
          { label: 'Flächenauszug', value: 'Live-Berechnung' },
          { label: 'Öffnungsliste', value: 'Türen & Fenster' },
          { label: 'Tabellen-Export', value: 'CSV / JSON / PDF' },
        ],
      },
    ],
  },
  exports: {
    eyebrow: 'Offene Schnittstellen',
    title: 'Alle Standardformate für Ihr Planungsteam.',
    subtitle:
      'Behalten Sie Ihre gewohnte CAD-, BIM- und Visualisierungssoftware. dWalkScan liefert saubere Daten ohne Medienbruch.',
    selectorLabel: 'Exportformat prüfen',
    compatibleWith: 'Empfohlene Zielprogramme',
    formats: [
      {
        id: 'ifc',
        code: 'IFC 4',
        name: 'BIM Industry Foundation Classes',
        category: 'BIM-orientierter Export',
        description:
          'Strukturiertes semantisches Gebäudemodell mit Geschossen, Räumen, Wänden, Decken, Türen und Fenstern für weiterführende BIM-Software.',
        applications: ['Archicad', 'Revit', 'Vectorworks', 'Allplan', 'Solibri'],
      },
      {
        id: 'dxf',
        code: 'DXF / DWG',
        name: 'CAD-Vektorzeichnungen mit Ebenenstruktur',
        category: '2D- / 3D-CAD',
        description:
          'Saubere Polylinien getrennt auf Architekturebenen für Wände, Öffnungen, Bemaßungen und Raumtexte im exakten Millimeter-Maßstab.',
        applications: ['AutoCAD', 'BricsCAD', 'QCAD', 'Vectorworks', 'Rhino'],
      },
      {
        id: 'usdz',
        code: 'USDZ',
        name: 'Universal Scene Description (AR & 3D)',
        category: 'Apple & Spatial Review',
        description:
          'Natives Apple Quick Look 3D-Format inklusive Materialien und realem Maßstab für direkte Begehungen auf iPhone, iPad und Mac.',
        applications: ['Apple Quick Look', 'Reality Composer', 'Blender', 'Maya'],
      },
      {
        id: 'pdf',
        code: 'PDF Plan',
        name: 'Maßstabsgetreue Vektor-Baudokumentation',
        category: 'Dokumentation',
        description:
          'Druckfertige mehrseitige Vektor-PDFs mit Plankopf, Maßstabsleiste, Raumbuch und hochauflösenden Plandarstellungen.',
        applications: ['Vorschau', 'Acrobat', 'Bluebeam Revu', 'Bauherrn-Übergabe'],
      },
      {
        id: 'obj',
        code: 'OBJ / PLY',
        name: 'Texturiertes Mesh & Punktwolke',
        category: '3D-Visualisierung',
        description:
          'Dichtes Dreiecksnetz oder registrierte Punktwolke mit metrischen Weltkoordinaten für Visualisierung und Bestandsanalyse.',
        applications: ['Blender', 'Cinema 4D', 'CloudCompare', 'MeshLab'],
      },
    ],
  },
  deliverables: deliverablesDe,
  downloads: {
    eyebrow: 'dWalkScan laden',
    title: 'Entwickelt für iPhone, iPad und Mac.',
    subtitle:
      'Open-Source-Swift-Anwendung unter MIT-Lizenz: Erfassen Sie vor Ort mit dem iPhone, prüfen Sie Pläne auf dem iPad und vollenden Sie Modelle und Exporte am Mac.',
    specsTooltip:
      'Erfordert macOS 15+ oder iOS / iPadOS 18+ (LiDAR-Scanner für Aufmaß auf iPhone Pro / iPad Pro erforderlich)',
    viewReleaseNotes: 'Systemvoraussetzungen & Bauanleitung',
    sourceRepoLabel: 'GitHub-Repo ansehen (bau-scan)',
    modalNote:
      'dWalkScan steht unter der MIT-Lizenz unter github.com/itsmeBablu/bau-scan bereit. macOS bietet signierte DMG-Releases mit Sparkle-Updates; iOS/iPadOS lässt sich per Xcode oder Sideloadly (GitHub Action) installieren.',
    options: [
      {
        id: 'mac',
        platform: 'macOS',
        osRequirement: 'macOS 15 Sequoia oder neuer',
        architecture: 'Apple Silicon & Intel Universal',
        version: 'v1.0.0 DMG',
        size: '~3,3 MB',
        title: 'dWalkScan für Mac',
        subtitle:
          'Professionelles Design Studio, interaktive 3D-Bearbeitung, Umbauplanung, Mengenermittlung und komplette Projektpakete.',
        ctaLabel: 'macOS DMG laden',
        href: 'https://github.com/itsmeBablu/bau-scan/releases',
        actionLabel: 'GitHub Releases öffnen',
        releaseNotesTitle: 'dWalkScan für Mac — Anforderungen & Releases',
        releaseNotes: [
          'Notarisiertes macOS-DMG mit integriertem Sparkle-Auto-Updater (appcast.xml)',
          'Gemeinsamer Swift-Kern mit nativen Menüs, Drag-and-Drop, Pfeil-Feinjustierung & Druck (⌘P)',
          'Design Studio mit 5-cm-Rasterfang, Cutaway-Ansicht und Umbauphasen',
          'IFC 4, etagengetrenntes DXF/SVG, USDZ/OBJ/STL/PLY, PDF-Berichte und Projekt-ZIPs',
        ],
        requirements: [
          'macOS 15.0 oder neuer (Apple Silicon & Intel)',
          'Visualisierung, Bearbeitung, Mengen, Druck und Exporte (LiDAR-Aufmaß über iOS/iPadOS)',
          'Optionales iCloud Drive für automatische Synchronisation im Ordner dWalkScan',
        ],
      },
      {
        id: 'ipad',
        platform: 'iPadOS',
        osRequirement: 'iPadOS 18.0 oder neuer',
        architecture: 'iPad (Hoch-/Querformat · LiDAR auf iPad Pro)',
        version: 'iOS/iPadOS 18+',
        size: 'Xcode / IPA',
        title: 'dWalkScan für iPad',
        subtitle:
          'Großformatige Grundriss-Inspektion, 3D-/AR-Visualisierung, Foto-Galerien und LiDAR-Scan auf kompatiblen iPad Pro Modellen.',
        ctaLabel: 'Xcode & Unsigned IPA',
        href: 'https://github.com/itsmeBablu/bau-scan/actions/workflows/ios-unsigned.yml',
        actionLabel: 'Unsigned IPA Action starten',
        releaseNotesTitle: 'dWalkScan für iPad — Anforderungen & Build-Anleitung',
        releaseNotes: [
          'Unterstützung aller Hoch- und Querformat-Ausrichtungen auf dem iPad',
          'Großformatige 2D-Grundrisse mit DIN/BRH-Maßen, Aufgaben-Pins & Fotogalerien',
          'LiDAR-Raumerfassung auf kompatiblen iPad Pro Modellen via RoomCaptureSession',
          'Direkt über XcodeGen + Xcode (⌘R) oder als unsignierte IPA via GitHub Actions nutzbar',
        ],
        requirements: [
          'iPadOS 18.0 oder neuer (universelle iOS-/iPadOS-App, TARGETED_DEVICE_FAMILY 1,2)',
          'LiDAR-Scan erfordert ein kompatibles iPad Pro',
          'Vollständig offline mit lokaler Speicherung oder optional iCloud Drive nutzbar',
        ],
      },
      {
        id: 'ios',
        platform: 'iOS',
        osRequirement: 'iOS 18.0 oder neuer',
        architecture: 'iPhone Pro (LiDAR · arm64)',
        version: 'iOS 18.0+',
        size: 'Xcode / IPA',
        title: 'dWalkScan für iPhone',
        subtitle:
          'Schnelles Offline-LiDAR-Aufmaß für Räume und Häuser, Technikraum-Dokumentation, Heizkörper- & BRH-Erfassung und Vor-Ort-Fotos.',
        ctaLabel: 'Xcode oder Sideloadly',
        href: 'https://github.com/itsmeBablu/bau-scan/actions/workflows/ios-unsigned.yml',
        actionLabel: 'GitHub Action für IPA öffnen',
        releaseNotesTitle: 'dWalkScan für iPhone — Xcode- & Windows-Sideloadly-Anleitung',
        releaseNotes: [
          'Durchgehender LiDAR-Rundgang für Räume, Häuser (StoryDetector) & Technikräume',
          'JPEG-Begehungsfotos im Scan inklusive 3D-Kamerapose und Raumnummerierung',
          'Windows-tauglich: GitHub Action „Build unsigned iPhone IPA“ starten und mit Sideloadly installieren',
          'Oder unter macOS klonen, xcodegen generate ausführen und in Xcode (⌘R) starten',
        ],
        requirements: [
          'iPhone 12 Pro oder neuer mit Apple LiDAR-Scanner',
          'iOS 18.0 oder neuer',
          'Vollständig offline auf der Baustelle einsetzbar',
        ],
      },
    ],
  },
  faq: {
    eyebrow: 'Fragen & Antworten',
    title: 'Technische Klarheit vor dem ersten Scan.',
    subtitle: 'Wichtige Antworten für Architekturbüros, Ingenieurbüros und Umbauplaner.',
    items: [
      {
        id: 'accuracy',
        question: 'Wie genau sind dWalkScan-Messungen im Vergleich zum Laser-Distometer?',
        answer:
          'Bei gleichmäßigem LiDAR-Durchgang liegen Raumabmessungen typischerweise innerhalb von 1–2 % relativer Toleranz. Für verbindliche Maßketten lassen sich physische Laser-Kontrollmessungen (ProjectDistanceCheck) direkt im Projekt dokumentieren.',
      },
      {
        id: 'ipad-support',
        question: 'Welche Funktionen unterstützt das iPad im Vergleich zu iPhone und Mac?',
        answer:
          'Das iPhone Pro dient als handlicher LiDAR-Feldscanner. Kompatible iPad Pro Modelle unterstützen ebenfalls das LiDAR-Aufmaß, während alle unterstützten iPads (iPadOS 18+) ideal für großformatige Grundriss-Inspektion, 3D-Ansichten, Fotogalerien und Projektprüfungen im Hoch- und Querformat sind. Der Mac (macOS 15+) konzentriert sich auf Design Studio, Mengen, Drucken und Exporte ohne eigenen Scan.',
      },
      {
        id: 'offline',
        question: 'Funktioniert der Scan auch im Keller oder Rohbau ohne Mobilfunknetz?',
        answer:
          'Ja. Die gesamte LiDAR-Erfassung, Geometrie-Berechnung und erste 2D-Grundrissvorschau läuft zu 100 % lokal auf Ihrem iPhone oder iPad – ohne Cloud-Wartezeiten.',
      },
      {
        id: 'handoff',
        question: 'Wie gelangen gescannte Projekte zwischen iPhone, iPad und Mac?',
        answer:
          'Projekte nutzen dieselben .roomscan-, .housescan- und .technicalroom-Pakete und synchronisieren über iCloud Drive oder offline per AirDrop und Dateien.',
      },
      {
        id: 'formats',
        question: 'Welche CAD- und BIM-Programme öffnen die Exporte direkt?',
        answer:
          'dWalkScan exportiert offenes IFC 4 (mit IFC2x3-Fallback), geschichtetes DXF, SVG, USDZ, OBJ, STL, PLY, CSV und Vektor-PDF für Abläufe mit Revit, AutoCAD, Archicad, Blender, SketchUp, FreeCAD und Excel. Weiterführende Terminplanung (4D) und Kalkulation (5D) erfolgen in spezialisierter Fachsoftware.',
      },
    ],
  },
  footer: {
    tagline:
      'Gehen. Scannen. Transformieren. Natives Open-Source-LiDAR-Gebäudeaufmaß (MIT), 3D Design Studio und BIM-orientierte Baudokumentation für Apple-Plattformen.',
    productColumn: 'Produkt',
    ecosystemColumn: 'Apple-Ökosystem',
    preferencesColumn: 'Einstellungen',
    nativeBadge: 'Exklusiv entwickelt für iPhone, iPad & Mac',
    copyright: '© 2026 dWalkScan. MIT-Lizenz.',
    privacy: 'Datenschutz',
    terms: 'Verteilung',
    support: 'FAQ',
    sourceCode: 'GitHub (bau-scan)',
    releases: 'Releases',
    license: 'MIT-Lizenz',
  },
  screenshotFallback: {
    badge: 'Screenshot-Platzhalter',
    dropHint: 'Datei ablegen unter:',
    ratioLabel: 'Format',
  },
  screenshots: {
    heroMac: {
      title: 'MacBook — Design Studio',
      subtitle: '3D-Raum-Viewport, Ebenenbaum & Inspektor unter macOS',
      alt: 'dWalkScan Design Studio Fenster auf MacBook mit bearbeitbarem 3D-Gebäudemodell',
      placeholderNote: 'MacBook Design-Studio-Ansicht',
    },
    heroIpad: {
      title: 'iPad — Grundrisse & Raum-Explorer',
      subtitle: 'Großformatige Grundrissprüfung, Fotogalerien und Projektübersicht',
      alt: 'dWalkScan iPad-App mit bemaßten Grundrissen und Projektansicht',
      placeholderNote: 'iPad Grundriss-Vorschau',
    },
    heroIphone: {
      title: 'iPhone — Live-LiDAR-Erfassung',
      subtitle: 'Echtzeit-Wandnetz und Abdeckungskontrolle auf dem iPhone',
      alt: 'dWalkScan iPhone-App bei der LiDAR-Raumerfassung vor Ort',
      placeholderNote: 'Live-Scan-Oberfläche auf dem iPhone',
    },
    workflowIphoneScan: {
      title: '01 · Geführter LiDAR-Rundgang',
      subtitle: 'Wand-, Tür- und Fenstererkennung in Echtzeit vor Ort',
      alt: 'dWalkScan iPhone-Scan-Oberfläche mit erkannten Raumkonturen',
      placeholderNote: 'Schritt 1 iPhone-Scan-Screenshot',
    },
    workflowFloorPlan: {
      title: '02 · Automatischer 2D-Grundriss',
      subtitle: 'Orthogonale Wände, Bemaßung und Netto-Raumflächen',
      alt: 'Generierter 2D-Architekturgrundriss aus dWalkScan mit Maßen und Quadratmeterangaben',
      placeholderNote: 'Schritt 2 Grundriss-Screenshot',
    },
    workflowDesignStudio: {
      title: '03 · Mac 3D Design Studio',
      subtitle: 'Parametrische Bearbeitung, Materialien und Geschoss-Ausrichtung',
      alt: 'dWalkScan Design Studio auf dem Mac mit editierbarer 3D-Geometrie',
      placeholderNote: 'Schritt 3 Mac-Design-Studio-Screenshot',
    },
    workflowTechnicalDoc: {
      title: '04 · Technische Raumdokumentation',
      subtitle: 'Abstandsflächen, Schnitte und räumlich verknüpfte Fotonotizen',
      alt: 'Technische Raumdokumentation aus dWalkScan mit Maßen und Markierungen',
      placeholderNote: 'Schritt 4 Technikraum-Screenshot',
    },
    workflowExport: {
      title: '05 · Multi-Format CAD- & IFC-Export',
      subtitle: 'Maßstabsprüfung, Ebenenmapping und IFC-/DXF-/PDF-Ausgabe',
      alt: 'dWalkScan Export-Dialog mit IFC-, DXF- und PDF-Einstellungen',
      placeholderNote: 'Schritt 5 Export-Dialog-Screenshot',
    },
    studioGeometry: {
      title: 'Parametrischer Wand- & Öffnungs-Editor',
      subtitle: 'Winkelfang, Wandstärken und synchrone 2D-/3D-Ansicht',
      alt: 'dWalkScan Design Studio bei der parametrischen Wandbearbeitung',
      placeholderNote: 'Design Studio Geometrie-Arbeitsbereich',
    },
    studioMaterials: {
      title: 'Tageslicht- & Material-Inspektor',
      subtitle: 'Physikalische Oberflächen und Echtzeit-Metal-Beleuchtung',
      alt: 'dWalkScan Design Studio Material- und Sonnenlicht-Vorschau',
      placeholderNote: 'Design Studio Materialien & Licht',
    },
    studioSections: {
      title: 'Interaktive Schnittebenen',
      subtitle: 'Echtzeit-X/Y/Z-Schnittbox zur Prüfung lichter Höhen',
      alt: 'dWalkScan Design Studio mit aktivem 3D-Gebäudeschnitt',
      placeholderNote: 'Design Studio Schnittansicht',
    },
    technicalPlan: {
      title: 'Bemaßter Architekturgrundriss',
      subtitle: 'DIN-Flächenauswertung, Türschläge und Bezugsraster',
      alt: 'Maßstabsgetreuer 2D-Grundriss aus dWalkScan mit Maßketten und Flächenangaben',
      placeholderNote: 'Maßstabsgetreuer 2D-Grundriss',
    },
    technicalRoomAnalysis: {
      title: 'Technikraum- & TGA-Abstandsanalyse',
      subtitle: 'Heizung, Elektroverteilung und Leitungsabstände in 3D',
      alt: 'dWalkScan 3D-Scan eines Technikraums mit Abstandsprüfung',
      placeholderNote: 'Technikraum-Vorschau',
    },
    technicalSchedule: {
      title: 'Automatisches Raum- & Flächenbuch',
      subtitle: 'Netto-Grundfläche, Umfang, Wandfläche und Öffnungen je Raum',
      alt: 'dWalkScan Raumbuch-Tabelle mit Netto-Flächen und Wandmaßen',
      placeholderNote: 'Raumbuch-Vorschau',
    },
    exportsPreview: {
      title: 'Strukturierte CAD-/IFC-Exportvorschau',
      subtitle: 'Ebenenzuordnung und Koordinatenprüfung vor der Ausgabe',
      alt: 'dWalkScan Exportvorschau mit strukturierten CAD-Ebenen',
      placeholderNote: 'Exportvorschau-Screenshot',
    },
    exportFloorplanMulti: {
      title: 'Mehrgeschossiger bemaßter Architekturgrundriss',
      subtitle: 'Etagengetrennte DXF-, SVG- und A4-PDF-Pläne mit Flächenangaben',
      alt: 'Bemaßter mehrgeschossiger dWalkScan-Architekturgrundriss',
      placeholderNote: 'Mehrgeschoss-Grundriss-Ausgabe',
    },
    export3dMesh: {
      title: 'Rekonstruiertes 3D-Gebäude- & Scan-Modell',
      subtitle: 'Parametrische RoomPlan-Hülle, Roh-Scan-Netz und Studio-Modell',
      alt: 'dWalkScan 3D-Modell-Exportvorschau',
      placeholderNote: '3D-Modell-Export-Screenshot',
    },
    exportStudioBefore: {
      title: 'Original-LiDAR-Scan-Bestand',
      subtitle: 'Unveränderte vor Ort erfasste Raumgeometrie',
      alt: 'Ursprünglicher dWalkScan-LiDAR-Scan vor der Studio-Bearbeitung',
      placeholderNote: 'Originalscan vor Vergleich',
    },
    exportStudioAfter: {
      title: 'Bearbeitetes Design-Studio-Layout',
      subtitle: 'Separat gespeicherte Einrichtung, Oberflächen und Umbauphasen',
      alt: 'Bearbeitetes dWalkScan Design-Studio-Modell nach der Umbauplanung',
      placeholderNote: 'Design-Studio-Vergleich nach Bearbeitung',
    },
    exportSpatialPhoto: {
      title: '3D-verortetes Begehungsfoto & Kamerapose',
      subtitle: 'JPEG-Aufnahme im Scan verknüpft mit lokalen XYZ-Raumkoordinaten',
      alt: 'dWalkScan Begehungsfoto verankert an 3D-Raumkoordinaten',
      placeholderNote: 'Räumliches Begehungsfoto-Screenshot',
    },
    exportReportCover: {
      title: 'PDF-Bericht — Deckblatt & Notizen',
      subtitle: 'Projektübersicht, Aufnahmedatum und Validierungshinweise',
      alt: 'dWalkScan PDF-Bericht Deckblatt-Vorschau',
      placeholderNote: 'PDF-Bericht Deckblatt',
    },
    exportReportPlan: {
      title: 'PDF-Bericht — Grundrisse & Aufgaben-Pins',
      subtitle: 'Maßstabspläne mit markierten Aufgaben-Pins und Legenden',
      alt: 'dWalkScan PDF-Bericht Grundriss- und Aufgaben-Pin-Seite',
      placeholderNote: 'PDF-Bericht Grundriss-Seite',
    },
    exportReportPhotos: {
      title: 'PDF-Bericht — Begehungsfotos',
      subtitle: 'Nach Räumen nummerierte Fotoseiten für die Kundenübergabe',
      alt: 'dWalkScan PDF-Bericht Fotodokumentationsseite',
      placeholderNote: 'PDF-Bericht Foto-Seite',
    },
    exportReportQuantities: {
      title: 'PDF-Bericht — Mengen & Flächen',
      subtitle: 'Netto-Wandflächen, Bodenflächen, Umfänge und Verschnittberechnungen',
      alt: 'dWalkScan PDF-Bericht Mengenverzeichnis-Seite',
      placeholderNote: 'PDF-Bericht Mengenseite',
    },
  },
};
