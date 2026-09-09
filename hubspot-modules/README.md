# HubSpot-Module — Bauleiter Tiefbau (b+p Beratung und Personal)

Neun eigenständige HubSpot-Module, aus der Next.js-Landingpage abgeleitet.
Struktur nach Vorbild `globus-quereinsteiger`: pro Modul eine `.html`-Datei mit
inline `<style>` und (wo nötig) `<script>`. CSS ist mit `bp-…`-Prefix scoped,
damit sich Module nicht gegenseitig überschreiben.

## Reihenfolge

| # | Datei | Inhalt |
| - | - | - |
| 01 | `01-nav.html` | Sticky Header · b+p Logo · Bewerben-Button · lädt Schriften |
| 02 | `02-hero.html` | Full-Bleed Hero-Bild + Headline + Sub + Bewerben-CTA + Trust-Punkte |
| 03 | `03-warum-anders.html` | Vier Wechselgründe-Karten |
| 04 | `04-visual-break.html` | Full-Bleed Baustellen-Break „Deine Baustelle. Deine Truppe. Deine Verantwortung." |
| 05 | `05-aufgaben.html` | Sechs Aufgaben in 3×2 Grid |
| 06 | `06-junior-senior.html` | Zwei Wege-Karten + Bau-Bereiche als Pill-Tags |
| 07 | `07-benefits.html` | Vier Benefit-Karten (Icons) + Dienstwagen-Fußnote |
| 08 | `08-kontakt.html` | Full-Bleed dunkle Section · 3-Schritt-Ablauf · Kontaktdaten · Bewerbungsformular mit CV-Upload |
| 09 | `09-footer.html` | Logo · Impressum/Datenschutz-Links · Copyright |

## Bilder tauschen

Alle `<img src="...">` zeigen aktuell auf Platzhalter-URLs
(`personalberatung.b--p.de/hubfs/bauleiter-tiefbau/…`). Vor dem Livegang:

1. Die drei Assets aus `assets/img/` in den HubSpot File Manager hochladen
   (empfohlener Ordner: `hubfs/bauleiter-tiefbau/`).
2. In den Modulen die drei Referenzen ersetzen:
   - `bp-logo.jpg` → Modul 01 (Nav) und Modul 09 (Footer)
   - `bauleiter-hero.jpg` → Modul 02 (Hero) und Modul 08 (Kontakt, Hintergrund)
   - `bauleiter-team.jpg` → Modul 04 (VisualBreak)

## Kontaktdaten anpassen

Kontaktdaten (Anja Mizouri, `anja.mizouri@b--p.de`, `0681 7619925`) stehen
direkt in Modul 08. Bei Änderungen:

- `<a href="mailto:...">` und `<a href="tel:...">` in Modul 08
- Fehlermeldung des Formulars (Fallback-E-Mail im `alert(...)` im
  `<script>`-Block)

## Formular

Modul 08 enthält ein natives HTML-Formular mit Client-side-Validierung
(Name/Telefon Pflicht, E-Mail und Nachricht optional, Lebenslauf optional,
PDF/DOC/JPG, max. 10 MB).

Das Formular sendet an den Endpoint aus `data-endpoint="/api/bewerbung"`.
Für HubSpot gibt es zwei Wege:

1. **HubSpot-Endpoint eintragen**: `data-endpoint` in Modul 08 auf die
   passende Serverless-Function / Marketing-Form-API setzen.
2. **HubSpot-Form ersetzen**: Formular komplett rausnehmen und ein natives
   HubSpot-Form einfügen. Success-State und Ablauf-Liste können bleiben.

## Farben und Typografie

Zentrale Tokens sind in jedem Modul als CSS-Variablen definiert:

- Page-Hintergrund `#FAF7F1`
- Ink `#1A1A1A`
- Accent Blau `#2F6DB3`
- Gold `#EDA53F` / Gold Dark `#C88526`
- Linien `#E5E1D8`

Schriften (Inter Tight, Weights 400–800) werden **einmal** in Modul 01
geladen und von allen weiteren Modulen genutzt.

## Full-Bleed

Alle Sections nutzen den Full-Bleed-Trick, damit sie unabhängig von der
Drop-Zone-Breite die volle Viewport-Breite belegen:

```css
width:100vw;
margin-left:50%;
transform:translateX(-50%);
max-width:100vw;
```

## Vorschau

`index.html` im Ordner-Root lädt alle Module in der richtigen Reihenfolge
für ein lokales Preview (rein statisch, ohne Framework).
