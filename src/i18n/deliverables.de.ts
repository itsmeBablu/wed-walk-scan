import type { DeliverablesContent } from '@/types';

export const deliverablesDe: DeliverablesContent = {
  showcase: {
    eyebrow: 'Exporte & Digitale Ergebnisse',
    headline: 'Ihr Raum. Ihre Daten. Ihre Möglichkeiten.',
    subtitle:
      'Von einem einzigen Rundgang bis zur professionellen Baudokumentation. Verwandeln Sie erfasste Räume in Grundrisse, 3D-Modelle, BIM-orientierte IFC-Daten, Beweisfotos und strukturierte Projektpakete.',
  },
  explorer: {
    eyebrow: 'Interaktiver Exportformat-Explorer',
    title: 'Jedes Ausgabeformat im Detail prüfen.',
    subtitle:
      'Filtern Sie verifizierte Exportformate für Einzelräume, Mehrgeschoss-Gebäude, Technikräume, Design Studio und komplette Umbauprojekte.',
    categoryLabels: {
      all: 'Alle',
      'floor-plans': 'Grundrisse',
      'models-3d': '3D-Modelle',
      'bim-cad': 'BIM & CAD',
      photos: 'Fotos',
      'technical-rooms': 'Technikräume',
      'design-studio': 'Design Studio',
      'reports-notes': 'Berichte & Notizen',
      archives: 'Archive',
    },
    workflowsLabel: 'Unterstützte Export-Workflows',
    useCaseLabel: 'Typischer Praxiseinsatz',
    compatibleLabel: 'Mögliche Zielprogramme',
    formats: [
      {
        id: 'pdf-plan',
        extension: '.PDF',
        name: 'Bemaßter Grundriss & Projektbericht',
        category: 'floor-plans',
        purpose:
          'A4-Querformat-Architekturgrundrisse nach DIN/ISO sowie mehrseitige Projekt-PDF-Berichte.',
        workflows: ['Einzelraum', 'Mehrgeschoss-Haus', 'Design Studio', 'Umbauprojekt'],
        professionalUse: 'Ausdrucke für Bauherren, Ortstermin-Protokolle und Planunterlagen.',
        compatibleTools: ['Apple Vorschau', 'Adobe Acrobat', 'Bluebeam Revu'],
      },
      {
        id: 'png-plan',
        extension: '.PNG',
        name: 'Hochauflösendes Grundrissbild',
        category: 'floor-plans',
        purpose: '3x-Pixelauflösung mit Raumnamen, Maßen und Tür-/Fensteröffnungen.',
        workflows: ['Einzelraum', 'Mehrgeschoss-Haus', 'Organisierter Export'],
        professionalUse: 'Präsentationen, Exposes und schneller E-Mail-Versand.',
        compatibleTools: ['Keynote', 'Pages', 'Microsoft Word'],
      },
      {
        id: 'svg-drawing',
        extension: '.SVG',
        name: 'Skalierbare Vektorzeichnung (mm)',
        category: 'floor-plans',
        purpose:
          'Ebenenbasierte Vektorpläne in Millimetern, bei Mehrgeschoss-Gebäuden sauber je Etage getrennt.',
        workflows: ['Einzelraum', 'Etagen-Archiv', 'Design Studio'],
        professionalUse: 'Präzise Vektornachbearbeitung und gestochen scharfe Grafikdokumente.',
        compatibleTools: ['Affinity Designer', 'Adobe Illustrator', 'Inkscape'],
      },
      {
        id: 'dxf-cad',
        extension: '.DXF',
        name: '2D- & 3D-CAD-Zeichnungen (R12 / AC1015)',
        category: 'bim-cad',
        purpose:
          'Etagengetrennte 2D-CAD-Pläne mit erfassten Geschosshöhen sowie 3DFACE-Meshes für Technikräume.',
        workflows: ['Einzelraum', 'Etagen-Archiv', 'Technikraum', 'Design Studio'],
        professionalUse: '2D-CAD-Weiterbearbeitung, Wandprüfung und TGA-Planungsgrundlagen.',
        compatibleTools: ['AutoCAD', 'Archicad', 'FreeCAD', 'SketchUp'],
      },
      {
        id: 'ifc-bim',
        extension: '.IFC',
        name: 'IFC-4- / IFC2x3-Gebäudeinformationsmodell',
        category: 'bim-cad',
        purpose:
          'Semantisches IFC-Modell mit Wänden, Öffnungen, Türen, Fenstern, Decken, Räumen und TGA-Komponenten samt Herkunftsnachweis.',
        workflows: ['Revit-orientierter IFC-Export', 'Haus + registrierte Technikräume'],
        professionalUse: 'BIM-Koordination und Verknüpfung von Bestandsgeometrie in BIM-Software.',
        compatibleTools: ['Autodesk Revit', 'Archicad', 'FreeCAD'],
        caveat:
          'Kein direkter nativer .rvt-Export; MVD-Zertifizierung und Revit-Praxisprüfung stehen noch aus.',
      },
      {
        id: 'usdz-models',
        extension: '.USDZ',
        name: 'Parametrische, Scan- & Design-3D-Modelle',
        category: 'models-3d',
        purpose:
          'Natives Apple-Quick-Look-3D-Format für parametrische Raumhüllen, rohe iPhone-Meshes, Technikräume und Studio-Entwürfe.',
        workflows: ['iPhone-LiDAR-Scan', 'Technikraum', 'Design Studio'],
        professionalUse: 'Sofortige 3D-Ansicht auf iPhone, iPad und Mac ohne Zusatzsoftware.',
        compatibleTools: ['Apple Quick Look', 'Blender', 'Xcode / RealityKit'],
      },
      {
        id: 'obj-mesh',
        extension: '.OBJ',
        name: '3D-Polygonnetz (+ Studio-Material-ZIP)',
        category: 'models-3d',
        purpose:
          'Saubere Grundriss-Meshes, konvertierte Scan-Netze, farbkodierte Technikraum-Netze und Studio-OBJs samt Materialien.',
        workflows: ['Parametrischer Plan', 'Scan-Mesh', 'Technikraum', 'Design Studio'],
        professionalUse: '3D-Architekturmodellierung, Materialstudien und Bestandsvisualisierung.',
        compatibleTools: ['Blender', 'SketchUp', 'FreeCAD', 'MeshLab'],
      },
      {
        id: 'stl-ply',
        extension: '.STL / .PLY',
        name: 'Triangulierte & Polygon-Mesh-Geometrie',
        category: 'models-3d',
        purpose:
          'Geschlossene Plan-Meshes und Scan-Konvertierungen, für Mehrgeschoss-Gebäude nach Etage aufgeteilt.',
        workflows: ['Parametrischer Plan', 'Scan-Mesh', 'Etagen-Archiv'],
        professionalUse: 'Maßstabsmodelle, 3D-Druck und geometrische Netzprüfung.',
        compatibleTools: ['Blender', 'FreeCAD', 'PrusaSlicer', 'CloudCompare'],
      },
      {
        id: 'survey-photos-jpg',
        extension: '.JPG + .JSON',
        name: 'Räumlich verortete Beweisfotos',
        category: 'photos',
        purpose:
          'Hochauflösende JPEG-Aufnahmen mit Raumnummern, Zeitstempeln und 3D-Kameraposition im Scan-Koordinatensystem (kein GPS).',
        workflows: ['Nur-Fotos-ZIP', 'Projekt-ZIP', 'Organisierter Scan-ZIP', 'PDF-Bericht'],
        professionalUse: 'Bestandsdokumentation, Schaltschrank- & Typenschild-Nachweise.',
        compatibleTools: ['macOS Finder', 'Vorschau', 'Microsoft Excel (Index-CSV)'],
      },
      {
        id: 'technical-json',
        extension: '.JSON',
        name: 'Technikraum- & Editierbare Design-Daten',
        category: 'technical-rooms',
        purpose:
          'Maschinenlesbares technical-room-v1.json (Rohre, Kanäle, Anlagen, Kalibrierung) und editable-design.json.',
        workflows: ['Technikraum-Übergabe', 'Design Studio', 'Organisierter Export'],
        professionalUse:
          'Strukturierte TGA-Weiterverarbeitung und verlustfreie Entwurfsspeicherung.',
        compatibleTools: ['Eigene BIM-Pipelines', 'Python / Node Parser'],
      },
      {
        id: 'studio-bundle',
        extension: '.ZIP / .CSV',
        name: 'Design-Studio-Ingenieurdaten',
        category: 'design-studio',
        purpose:
          'Editierbares Design-JSON, Engineering-CSV-Register, phasen-gefilterte PDF/SVG/DXF-Pläne und USDZ/OBJ-Pakete.',
        workflows: ['Design Studio', 'Umbauprojekt-Bundle'],
        professionalUse:
          'Saubere Trennung von Bestand, Rückbau und Planung gegenüber dem Originalscan.',
        compatibleTools: ['Microsoft Excel', 'AutoCAD', 'Blender'],
      },
      {
        id: 'csv-reports-notes',
        extension: '.CSV / .TXT',
        name: 'Mengen, Register & Projektnotizen',
        category: 'reports-notes',
        purpose:
          'UTF-8-BOM-CSV-Tabellen (quantities.csv, engineering-register.csv, index.csv) und project-notes.txt.',
        workflows: ['Umbau-Mengenermittlung', 'Design Studio', 'Projekt-Bundle'],
        professionalUse: 'Flächen- und Materialauszüge inklusive Verschnitt für Kalkulationen.',
        compatibleTools: ['Microsoft Excel', 'Apple Numbers', 'LibreOffice Calc'],
      },
      {
        id: 'zip-archives',
        extension: '.ZIP',
        name: 'Projekt-, Scan- & Foto-Komplettarchive',
        category: 'archives',
        purpose:
          'Selbstbeschreibende ZIP-Pakete mit manifest.json, README.txt und Statusbericht je Ausgabedatei.',
        workflows: ['Projekt-Bundle-ZIP', 'Organisierter Scan-ZIP', 'Nur-Fotos-ZIP', 'Etagen-ZIP'],
        professionalUse: 'Strukturierte Übergabe an Architektur-, TGA- und Umbauteams.',
        compatibleTools: ['macOS Archivprogramm', 'Windows Explorer'],
      },
    ],
  },
  floorPlans: {
    eyebrow: '2D-Architekturzeichnungen',
    headline: 'Vom Rundgang zum Grundriss.',
    subtitle:
      'Erstellen Sie bemaßte Grundrisse für einzelne Räume oder komplette Etagen – in Mehrgeschoss-Exporten sauber getrennt, sodass Geschosse nie übereinanderliegen.',
    formats: [
      {
        ext: 'PDF',
        title: 'Bemaßte Vektorpläne',
        detail: 'Druckfertige A4-Querformat-Pläne für Bauherren und Baudokumentation.',
      },
      {
        ext: 'PNG',
        title: 'Hochauflösende Plangrafiken',
        detail: '3x-Pixelauflösung mit Raumnamen, Maßen und Öffnungssymbolen.',
      },
      {
        ext: 'SVG',
        title: 'Skalierbare Vektorpläne',
        detail: 'Millimetergenaue Vektorzeichnungen strukturiert auf Architekturebenen.',
      },
      {
        ext: 'DXF',
        title: 'CAD-Linienzeichnungen',
        detail: 'R12-Dateien je Geschoss (level-0.dxf, level-1.dxf) mit Scan-Höhenkoten.',
      },
    ],
    capabilities: [
      'Einzelraum-Grundrisse & mehrgeschossige Gebäudepläne',
      'Automatische Etagen-Trennung in DXF- und SVG-Archiven',
      'Wände, Türen, Fenster, Öffnungen und Brüstungshöhen',
      'Raumnamen, Maßketten, Netto-Raumflächen und Anmerkungen',
    ],
  },
  models3d: {
    eyebrow: '3D-Modelle & Mesh-Exporte',
    headline: 'Realität, dreidimensional rekonstruiert.',
    subtitle:
      'Wählen Sie die passende 3D-Ausgabe: Rohe LiDAR-Beweisnetze bleiben konsequent getrennt von rekonstruierten Grundrissmodellen und bearbeiteten Studio-Entwürfen.',
    formats: [
      {
        ext: 'USDZ',
        title: 'Apple 3D & Quick Look',
        detail: 'Verfügbar als parametrische Hülle, rohes iPhone-Mesh oder Studio-Szene.',
      },
      {
        ext: 'OBJ',
        title: 'Polygon-Geometrie',
        detail: 'Plan-Netze, farbkodierte Technikraum-Meshes oder Studio-OBJ mit Materialien.',
      },
      {
        ext: 'STL',
        title: 'Fertigung & Modellbau',
        detail: 'Triangulierte Geschossgeometrie für 3D-Druck und Netzprüfung.',
      },
      {
        ext: 'PLY',
        title: 'Polygon-Mesh-Daten',
        detail: 'Etagen- oder Scan-Netze für spezialisierte 3D-Inspektionsprogramme.',
      },
    ],
    distinctionTitle: 'Drei klar getrennte 3D-Ebenen – niemals still vermischt',
    sources: [
      {
        badge: 'Originalbeweis',
        title: 'Erfasste Scan-Meshes',
        detail:
          'Rohe iPhone-LiDAR-Netze (room-mesh.usdz) und farbkodierte Technikraum-Meshes bleiben unverändert.',
      },
      {
        badge: 'Rekonstruiert',
        title: 'Parametrische Planmodelle',
        detail:
          'Saubere Wände, Decken und Öffnungen deterministisch aus dem geprüften 2D-Plan erzeugt.',
      },
      {
        badge: 'Bearbeitet',
        title: 'Design-Studio-Modelle',
        detail:
          'Phasengefilterte Einrichtung und Umbauvarianten getrennt vom Originalscan exportiert.',
      },
    ],
  },
  bim: {
    eyebrow: 'BIM- & Ingenieurdaten',
    headline: 'Verbinden Sie Realität mit professionellen BIM-Prozessen.',
    subtitle:
      'Exportieren Sie semantische IFC-4-Modelle (inklusive IFC2x3-Fallback) gemeinsam mit strukturierten JSON- und CSV-Registern.',
    capabilities: [
      'IFC-Gebäudemodelle (IFCWALL, IFCSLAB, IFCSPACE, IFCDOOR, IFCWINDOW)',
      'Revit-orientierte IFC-Struktur mit abgebildeten Geschosshöhen',
      'Technikraum-Klassifizierungen (Pset_BoilerTypeCommon, Pumpen, Speicher, Schaltschränke)',
      'Rohrachsen, runde/rechteckige Kanäle & Anschlussstutzen mit Bau_Provenance',
      'Bestand, Rückbau und Neuplanung in Studio-JSON- & CSV-Registern',
      'Prüfkennzeichnung (deviceValidationPending) je Bauteil beibehalten',
    ],
    toolsLabel: 'Mögliche weiterführende Programme',
    disclaimer:
      'dWalkScan exportiert offene IFC-, CAD-, Mesh- und CSV-Dateien – kein proprietäres natives .rvt-Format. Offizielle Autodesk-Partnerschaften, MVD-Zertifizierungen oder verifizierte Revit-Round-Trips bestehen nicht.',
  },
  spatialPhotos: {
    eyebrow: 'Räumliche Begehungsfotografie',
    headline: 'Jedes Foto hat seinen Platz.',
    subtitle:
      'Nehmen Sie während des LiDAR-Rundgangs detailreiche JPEG-Fotos auf und verankern Sie jede Aufnahme exakt mit Raum, Zeitstempel und 3D-Kamerapose im Scan-Koordinatensystem.',
    coordinateNotice:
      'Wichtig: Kamerapositionen (X, Y, Z) und Blickrichtung (Yaw, Pitch, Roll) beziehen sich auf das lokale rechtshändige Y-up-Scan-Koordinatensystem in Metern – es sind keine geografischen GPS-Koordinaten.',
    captureFeatures: [
      'JPEG-Aufnahmen im Scan (Schaltschränke, Typenschilder, Anschlussdetails, Bestand)',
      'Raum- und etagenbezogene Nummerierung beginnend bei #1 je Raum',
      '3D-Kameraposition & Blickrichtung als interaktive Marker im Grundriss und 3D',
      'Zeitstempel (capturedAt ISO-8601) und räumliche Ausrichtungsmetadaten',
    ],
    exportFeatures: [
      'Strukturierte Ordner Photos/<Raum>.<Nr>/ oder photos/level-0/<Raum>/',
      'Kamerametadaten je Bild (camera.json) sowie index.csv / photo-index.json',
      'Eigenständige Nur-Fotos-ZIP-Archive (SurveyPhotoArchiveWriter)',
      'Automatische Einbindung in Projekt-ZIP-Pakete und PDF-Berichte',
    ],
    stages: [
      {
        step: '01',
        title: '3D-Scan-Marker',
        detail: 'Im Scan an exakter lokaler Raumkoordinate inklusive Blickrichtung erfasst.',
      },
      {
        step: '02',
        title: 'Vergrößerte Beweiskarte',
        detail: 'Prüfung mit Raumkontext, Typenschild-Details und Orientierungsmetadaten.',
      },
      {
        step: '03',
        title: 'Strukturiertes Fotoarchiv',
        detail: 'Saubere Ausgabe als nummerierte JPEGs mit camera.json und index.csv.',
      },
    ],
    sampleMarkerLabel: 'Foto #01 · Technikraum',
    sampleRoomLabel: 'Hauptverteilung & Heizungsverteiler',
    sampleCoords: 'Scan-XYZ: (2,14 m; 1,48 m; -1,72 m) · Lokales System (kein GPS)',
    samplePose: 'Yaw: +42,0° · Pitch: -6,4° · Roll: +0,2°',
    sampleArchivePath: 'Photos/Technical-Room.1/Technical-Room.1.jpg + camera.json',
  },
  notesAndChecks: {
    eyebrow: 'Begehungsnotizen & Maßprüfung',
    headline: 'Mehr als Geometrie erfassen.',
    subtitle:
      'Ergänzen Sie Raumscans und Fotos um strukturierte Projektnotizen, Anlagenhinweise, interaktive Aufgaben-Pins im Grundriss sowie dokumentierte Laser-Kontrollmessungen.',
    auditNotice:
      'Hinweis: Alle Dokumentationsfunktionen in dWalkScan sind text-, pin- und fotobasiert (mit regulärer iOS-Tastaturdiktierfunktion in Textfeldern). Native Sprachaufnahmen oder Audio-Anhänge sind im aktuellen Funktionsumfang nicht enthalten.',
    cards: [
      {
        id: 'project-notes',
        badge: 'Projektnotizen',
        title: 'Schriftliche Begehungs- & Raumnotizen',
        description:
          'Persistente Projektnotizen (project-notes.txt) und Technikraum-Hinweise direkt beim Scan gespeichert und im PDF-Bericht ausgegeben.',
        meta: 'Export in Notes/project-notes.txt & PDF',
      },
      {
        id: 'task-pins',
        badge: 'Plan-Aufgaben-Pins',
        title: 'Fotoverknüpfte Mängel & Aufgaben',
        description:
          'Setzen Sie Marker direkt auf 2D-Grundrisse – verknüpft mit Raum, Foto oder Bauteil, inklusive Beschreibung, Zuständigkeit und Status.',
        statusTag: 'Offen · In Arbeit · Erledigt',
        meta: 'Umbauphasen: Bestand · Rückbau · Neuplanung',
      },
      {
        id: 'eng-notes',
        badge: 'Anlagenhinweise',
        title: 'Technik- & Bauteil-Beobachtungen',
        description:
          'Erfassen Sie Hersteller, Modelltypen, Einbauhinweise und Prüfvermerke, ohne ursprüngliche Scan-Daten zu verändern.',
        meta: 'Gesichert in JSON & engineering-register.csv',
      },
    ],
    pinStatuses: [
      { status: 'Open', label: 'Offen' },
      { status: 'In Progress', label: 'In Arbeit' },
      { status: 'Resolved', label: 'Erledigt' },
    ],
    verificationTitle: 'Unabhängige Kontrollmessungen (ProjectDistanceCheck)',
    verificationItems: [
      {
        label: 'Wandspanne A–B (Laserkontrolle)',
        observed: '4,812 m',
        reference: '4,820 m',
        delta: '-0,008 m (-0,17 %)',
      },
      {
        label: 'Lichte Höhe Technikraum',
        observed: '2,545 m',
        reference: '2,540 m',
        delta: '+0,005 m (+0,20 %)',
      },
    ],
  },
  technicalDeliverables: {
    eyebrow: 'TGA- & Technikraum-Dokumentation',
    headline: 'Dokumentieren Sie die Technik hinter dem Gebäude.',
    subtitle:
      'Erfassen Sie Heizungs- und Technikräume mit lückenloser Herkunft – von rohen Oberflächenpunkten über Rohrachsen bis zu Anlagenregistern und optionaler KI-Auswertung.',
    equipmentTypes: [
      'Heizkessel & Wärmepumpen',
      'Puffer- & Trinkwasserspeicher',
      'Umwälzpumpen & Verteiler',
      'Runde & rechteckige Lüftungskanäle',
      'Elektroverteiler & Zähler',
      'Rohrleitungen & Formstücke',
      'Heizkörper & Armaturengruppen',
    ],
    outputs: [
      {
        ext: 'JSON',
        title: 'technical-room-v1.json',
        detail: 'Validiertes Schema mit effektiver Geometrie, Kalibrierung und Herkunft.',
      },
      {
        ext: 'DXF',
        title: 'survey.dxf (3DFACE)',
        detail: 'CAD-Z-up-Scan-Netz unter Beibehaltung der Raumausrichtung.',
      },
      {
        ext: 'OBJ',
        title: 'mesh.obj',
        detail: 'Erfasste LiDAR-Dreiecke mit Vertex-Farben, kein Ersatz durch Hüllboxen.',
      },
      {
        ext: 'USDZ / IFC',
        title: '3D- & BIM-Übergabe',
        detail: 'Texturiertes USDZ sowie IFC-orientierte TGA-Elemente bei Hauszuordnung.',
      },
    ],
    evidenceChain: [
      { step: '1. Erfassungsbeleg', detail: 'Rohe Tiefendaten, Dreiecksnetz & JPEG-Fotos' },
      { step: '2. Erkannte Geometrie', detail: 'Rohre, Kanäle, Anlagen & optionale KI-Prüfung' },
      { step: '3. Manuelle Angaben', detail: 'Laserkalibrierung, DN-Werte & Typendaten' },
      { step: '4. Geprüfte Übergabe', detail: 'JSON, OBJ, DXF, USDZ & IFC mit Herkunftsfeldern' },
    ],
    verificationWarning:
      'Optionale KI-Erkennung (Gemini, standardmäßig deaktiviert) und iPhone-LiDAR-Messungen bleiben als „Gerätevalidierung ausstehend“ markiert und ersetzen keine fachliche Ingenieurprüfung vor Ort.',
  },
  quantities: {
    eyebrow: 'Mengenermittlung für den Umbau',
    headline: 'Machen Sie Geometrie zu nutzbaren Mengen.',
    subtitle:
      'Berechnen Sie öffnungsbereinigte Flächenauszüge direkt aus erfassten Grundrissen und exportieren Sie strukturierte CSV-Mengenlisten für die Kalkulation.',
    metrics: [
      'Raummaße, Wandlängen & Umfänge',
      'Bodenflächen & projizierte Deckenflächen',
      'Brutto- und Netto-Wandflächen (Öffnungen einmalig abgezogen)',
      'Anzahl Türen, Fenster & übriger Öffnungen',
      'Höhenbasierte Raumvolumen-Spanne (Min–Max)',
      'Bodenbelags- & Anstrichflächen inklusive Verschnittzuschlag',
      'Prüfstatus je Messung (deviceValidationPending)',
      'Tabellensicheres quantities.csv-Mengenverzeichnis',
    ],
    wasteLabel: 'Verschnittzuschlag',
    sampleRoomName: 'Beispielraum · 24,6 m² Grundriss',
    floorBaseLabel: 'Bodenbelag (inkl. Verschnitt)',
    wallNetLabel: 'Netto-Anstrichfläche Wand',
    perimeterLabel: 'Sockelleisten-Umfang',
    volumeRangeLabel: 'Volumen-Bereich (Min–Max)',
    openingsLabel: 'Öffnungen (Türen / Fenster)',
    visionConnection:
      'Diese geometrischen Auszüge bilden das 1D–3D-Fundament passend zur übergeordneten 5D-BIM-Vision. Automatisierte Terminplanung (4D) und vollständige Baukostenkalkulation (5D) erfolgen in spezialisierter Fachsoftware.',
  },
  studioExports: {
    eyebrow: 'Design-Studio-Ergebnisse',
    headline: 'Ihre Entwürfe, bereit für den nächsten Schritt.',
    subtitle:
      'Planen Sie Umbauten, Möbel und Ausbauvarianten im Design Studio – und exportieren Sie Ihre Entwürfe, ohne das ursprüngliche Aufmaß zu verändern.',
    isolationNote:
      'Studio-Dokumente werden getrennt (Designs/...) von Originalscans (Scans/.../Original/) gespeichert und exportiert – Bestandsnachweise bleiben unverändert.',
    formats: [
      'Editierbares editable-design.json',
      'Phasengefilterte PDF-Grundrisse (Alle / Bestand / Rückbau / Planung)',
      'Ebenenbasierte SVG- & DXF-CAD-Pläne',
      'Design-Studio-USDZ-Modelle',
      'OBJ-Modelle inklusive Materialien (obj-with-materials.zip)',
      'PNG-Ansichten & engineering-register.csv',
    ],
    beforeLabel: 'Original-Scan-Bestand',
    afterLabel: 'Bearbeitetes Design-Studio-Modell',
    sliderHint: 'Regler ziehen oder Pfeiltasten zum Vergleichen nutzen',
  },
  archives: {
    eyebrow: 'Strukturierte Projektpakete',
    headline: 'Eine ganze Gebäudeaufnahme. Ein geordnetes Paket.',
    subtitle:
      'Bündeln Sie Grundrisse, 3D-Modelle, Technikräume, Design-Studio-Dateien, nummerierte Fotos, Mengen, Notizen und Berichte in einem selbstbeschreibenden ZIP-Archiv.',
    packageNote:
      'Unterschiedliche Exportwege (Projekt-Bundle-ZIP, Organisierter Scan-Export oder Nur-Fotos-ZIP) erzeugen jeweils eigene Ordnerstrukturen. Fehlende Ausgaben werden ehrlich in manifest.json protokolliert.',
    tabs: [
      {
        id: 'project',
        label: 'Projekt-Bundle-ZIP',
        description:
          'Vollständige Umbauprojekt-Übergabe über ProjectBundleExporter inklusive Originalpaketen, Designs, PDF-Bericht, Mengen, Notizen und nummerierten Fotos.',
      },
      {
        id: 'organised',
        label: 'Organisierter Scan-ZIP',
        description:
          'Kategoriebasiertes Archiv (OrganisedExportService) mit wählbaren Ordnern für Pläne, Modelle, Technikraum, Design Studio und Fotos.',
      },
      {
        id: 'photos',
        label: 'Nur-Fotos-ZIP',
        description:
          'Schlankes Beweisarchiv (SurveyPhotoArchiveWriter) mit nummerierten JPEGs, camera.json-Kameraposen und photo-index.json.',
      },
    ],
    highlights: [
      'Auswählbare Exportkategorien & Einzel- oder Gesamtpaket-Ausgabe',
      'Selbstbeschreibendes manifest.json & verständliches README.txt',
      'Windows-sichere Dateinamen & Statusprotokoll (exported / unavailable)',
      'Kamerapose-Metadaten (rawCameraPose, displayCameraPose, Zeitstempel)',
    ],
  },
  pdfReports: {
    eyebrow: 'Fertige Kundenberichte',
    headline: 'Professionelle Dokumentation, sofort teilbar.',
    subtitle:
      'Stellen Sie Titelblatt, maßstabsgetreue Grundrisse, Raumtabellen, Aufgaben-Pins, Beweisfotos und Notizen in einem strukturierten PDF-Bericht zusammen.',
    pages: [
      {
        id: 'cover',
        title: 'Projektübersicht & Begehungsnotizen',
        summary: 'Aufnahmedatum, Hinweise zu unabhängigen Scans, Prüfvermerke & Notizen.',
        screenshotId: 'export-report-cover',
      },
      {
        id: 'floorplan',
        title: 'Bemaßte Grundrisse & Aufgaben-Pins',
        summary: 'Etagenweise 2D-Vektorpläne samt nummerierten Pin-Karten und Legenden.',
        screenshotId: 'export-report-plan',
      },
      {
        id: 'photos',
        title: 'Nummerierte Beweisfotos',
        summary: 'Nach Räumen sortierte Fotos bis zum PDF-Budget von 100 Bildern / 64 MiB.',
        screenshotId: 'export-report-photos',
      },
      {
        id: 'quantities',
        title: 'Raummaße & Mengenauszüge',
        summary: 'Flächen, Umfänge, fehlende Ausgaben & strukturierte Renovierungslisten.',
        screenshotId: 'export-report-quantities',
      },
    ],
    contents: [
      'Projektübersicht & Hinweis zur Scan-Unabhängigkeit',
      'Maßstabsgetreue 2D-Grundrisse je Geschoss',
      'Raumnamen, Flächen & lineare Umfänge',
      'Mengenermittlung & konfigurierter Verschnitt',
      'Nach Räumen nummerierte Begehungsfotos',
      'Schriftliche Projektnotizen & 2D-Pin-Legenden',
      'Hinweise zur Gerätevalidierung (deviceValidationPending)',
    ],
    sampleNote:
      'Beispiel-PDF-Dateien sind in diesem Repository noch nicht hinterlegt. Die Platzhalter verweisen direkt auf public/screenshots/, sobald echte Screenshots ergänzt werden.',
  },
  privacy: {
    eyebrow: 'Datenhoheit & Offenheit',
    title: 'Ihre Bestandsdaten bleiben portabel, lesbar und bei Ihnen.',
    subtitle:
      'dWalkScan speichert Projekte standardmäßig lokal, trennt Originalaufnahmen von Entwürfen und exportiert offene Formate ohne Herstellerbindung.',
    pillars: [
      {
        title: 'Lokale Speicherung & optionales iCloud',
        detail:
          'Scans liegen lokal als .roomscan-, .housescan- und .technicalroom-Pakete auf Ihrem Gerät; iCloud Drive ist optional.',
      },
      {
        title: 'Unveränderte Originalaufnahmen',
        detail:
          'Design-Studio-Entwürfe, Ingenieurnotizen und Pins werden separat gespeichert – Quelldaten werden nie überschrieben.',
      },
      {
        title: 'Gezielte Weitergabe & offene Formate',
        detail:
          'Teilen Sie nur Fotos, einzelne 2D-Pläne oder komplette Archive in JSON, CSV, DXF, SVG, OBJ, USDZ, IFC und PDF.',
      },
      {
        title: 'Explizite Zustimmung für externe KI',
        detail:
          'Die optionale Gemini-Fotoanalyse ist standardmäßig deaktiviert und erfordert vor jeder Übertragung eine ausdrückliche Freigabe.',
      },
    ],
    disclaimer:
      'dWalkScan erhebt keinen Anspruch auf behördliche Zertifizierung, garantierte Baugenauigkeit oder zertifizierten BIM-Roundtrip mit Drittprogrammen.',
  },
};
