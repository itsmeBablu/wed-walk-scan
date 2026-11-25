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
          'Zentimetergenaue relative Wandausrichtung',
          'Automatische Tür-, Fenster- und Unterzugserkennung',
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
          'Flächenberechnung nach DIN 277 & WoFlV',
          'Mehrraum-Verknüpfung über ganze Etagen',
          'Editierbare Wandstärken und Fangachsen',
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
    windowTitle: 'Villa_West_OG_02.dwalkscan — Design Studio',
    capabilities: [
      {
        id: 'geometry',
        title: 'Parametrische Geometrie-Bereinigung',
        subtitle: 'Orthogonales Fangen & Wandanschlüsse',
        description:
          'Richten Sie nahezu rechtwinklige Wände automatisch aus, vereinheitlichen Sie Fluchten und korrigieren Sie Öffnungen auf den Millimeter genau.',
        specs: [
          '0,1° Winkelfang-Toleranz',
          'Verknüpfte 2D- & 3D-Inspektoren',
          'Lückenloser Verlauf',
        ],
        screenshotId: 'studio-geometry',
      },
      {
        id: 'materials',
        title: 'Materialien, Tageslicht & Raumwirkung',
        subtitle: 'Physikalische Licht- & Oberflächenstudien',
        description:
          'Weisen Sie Baustoffe und Oberflächen zu, simulieren Sie reale Sonnenstände nach Ausrichtung und präsentieren Sie Entwürfe direkt vor Ort.',
        specs: [
          'PBR-Materialbibliothek',
          'Standortgenauer Sonnenverlauf',
          'Echtzeit-Metal-Schatten',
        ],
        screenshotId: 'studio-materials',
      },
      {
        id: 'sections',
        title: 'Live-Querschnitte & Lichtraumprofile',
        subtitle: 'Konstruktions- & Ausbauprüfung',
        description:
          'Ziehen Sie interaktive Schnittboxen durch mehrgeschossige Modelle zur Kontrolle von Treppenkopfhöhen und Abhängungen.',
        specs: ['Interaktives X/Y/Z-Clipping', 'Lichte Maßketten', 'Ebenen-Voreinstellungen'],
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
          'Erstellen Sie gestochen scharfe Schwarz-Weiß- oder Planansichten inklusive Wandstärken, Türschlagbögen, Raumstempeln und Höhenkoten.',
        screenshotId: 'technical-plan',
        metrics: [
          { label: 'Planmaßstäbe', value: '1:20 · 1:50 · 1:100' },
          { label: 'Flächennorm', value: 'DIN 277 / WoFlV' },
          { label: 'Einheiten', value: 'mm / cm / m' },
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
      'Erfassen Sie vor Ort mit dem iPhone, prüfen und erkunden Sie Grundrisse auf dem iPad und vollenden Sie Modelle, Mengen und CAD-/IFC-Exporte am Mac.',
    specsTooltip:
      'Erfordert macOS 15+ oder iOS / iPadOS 18+ (LiDAR-Scanner für Aufmaß auf iPhone Pro / iPad Pro erforderlich)',
    viewReleaseNotes: 'Systemvoraussetzungen & Hinweise',
    modalNote:
      'App Store- und signierte DMG-Download-Links lassen sich nach Veröffentlichung zentral in src/i18n/ hinterlegen.',
    options: [
      {
        id: 'mac',
        platform: 'macOS',
        osRequirement: 'macOS 15 Sequoia oder neuer',
        architecture: 'Apple Silicon & Intel Universal',
        version: 'Version 1.1',
        size: '84 MB',
        title: 'dWalkScan für Mac',
        subtitle:
          'Professionelles Design Studio, interaktive 3D-Bearbeitung, Umbauplanung, Mengenermittlung und komplette Projektpakete.',
        ctaLabel: 'Für macOS laden',
        releaseNotesTitle: 'dWalkScan für Mac — Anforderungen & Hinweise',
        releaseNotes: [
          'Gemeinsamer Swift-Kern mit nativen macOS-Menüs, Drag-and-Drop und Drucken (⌘P)',
          'Design Studio mit interaktiver 3D-Bearbeitung und Phasenfilter (Bestand / Rückbau / Planung)',
          'IFC 4, etagengetrenntes DXF/SVG, USDZ/OBJ/STL/PLY, PDF-Berichte und Projekt-ZIPs',
          'Nahtlose Synchronisation zwischen Mac, iPad und iPhone per iCloud Drive',
        ],
        requirements: [
          'macOS 15.0 oder neuer',
          'Visualisierung, Bearbeitung, Mengen, Druck und Exporte (LiDAR-Aufmaß über iOS/iPadOS)',
          'Optionales iCloud Drive für geräteübergreifende Synchronisation',
        ],
      },
      {
        id: 'ipad',
        platform: 'iPadOS',
        osRequirement: 'iPadOS 18.0 oder neuer',
        architecture: 'iPad (Hoch-/Querformat · LiDAR auf iPad Pro)',
        version: 'Version 1.1',
        size: '62 MB',
        title: 'dWalkScan für iPad',
        subtitle:
          'Großformatige Grundriss-Inspektion, 3D-Visualisierung, Foto-Galerien, Projektprüfung und LiDAR-Scan auf kompatiblen iPad Pro Modellen.',
        ctaLabel: 'Im App Store laden',
        releaseNotesTitle: 'dWalkScan für iPad — Anforderungen & Hinweise',
        releaseNotes: [
          'Unterstützung aller Hoch- und Querformat-Ausrichtungen auf dem iPad',
          'Großformatige 2D-Grundrisse, Aufgaben-Pins, Fotogalerien und PDF-Vorschau',
          'LiDAR-Raumerfassung auf kompatiblen iPad Pro Modellen via RoomCaptureSession',
          'iPads ohne LiDAR behalten vollständige Inspektions-, Prüf- und Exportfunktionen',
        ],
        requirements: [
          'iPadOS 18.0 oder neuer (universelle iOS-/iPadOS-App)',
          'LiDAR-Scan erfordert ein kompatibles iPad Pro',
          'Vollständig offline mit lokaler Speicherung oder optional iCloud Drive nutzbar',
        ],
      },
      {
        id: 'ios',
        platform: 'iOS',
        osRequirement: 'iOS 18.0 oder neuer',
        architecture: 'iPhone Pro (LiDAR)',
        version: 'Version 1.1',
        size: '62 MB',
        title: 'dWalkScan für iPhone',
        subtitle:
          'Schnelles Offline-LiDAR-Aufmaß für Räume und Häuser, Technikraum-Dokumentation, Begehungsfotos und Vor-Ort-Notizen.',
        ctaLabel: 'Im App Store laden',
        releaseNotesTitle: 'dWalkScan für iPhone — Anforderungen & Hinweise',
        releaseNotes: [
          'Durchgehender LiDAR-Rundgang für Einzelräume, Mehrgeschoss-Häuser und Technikräume',
          'JPEG-Begehungsfotos im Scan inklusive 3D-Kamerapose und Raumnummerierung',
          'Laser-Kontrollmaße, schriftliche Notizen und 2D-Aufgaben-Pins vor Ort',
          'Offline-Speicherung sowie direkter Transfer an iPad und Mac über iCloud Drive oder AirDrop',
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
      'Gehen. Scannen. Transformieren. Natives LiDAR-Gebäudeaufmaß, 3D Design Studio und BIM-orientierte Baudokumentation für Apple-Plattformen.',
    productColumn: 'Produkt',
    ecosystemColumn: 'Apple-Ökosystem',
    preferencesColumn: 'Einstellungen',
    nativeBadge: 'Exklusiv entwickelt für iPhone, iPad & Mac',
    copyright: '© 2026 dWalkScan. Alle Rechte vorbehalten.',
    privacy: 'Datenschutz',
    terms: 'Nutzungsbedingungen',
    support: 'Dokumentation',
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
