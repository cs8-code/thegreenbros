# TheGreenBros - Landing Page

Eine professionelle, moderne Landing Page für TheGreenBros, ein deutsches Gartenpflege- und Landschaftsbauunternehmen mit Fokus auf gewerbliche Großkunden.

## Projekt-Übersicht

**Zielgruppe:** Gewerbliche Kunden (B2B)  
**Hauptkunden:** ALDI Süd, Kivberg GmbH, Essener Gartenbau  
**Sprache:** Vollständig auf Deutsch

## Funktionen

### Frontend-Bereiche
1. **Hero Section** - Eindrucksvoller Eingangsbereich mit Gartenbild und Hauptslogan
2. **Referenzkunden** - Präsentation der drei Großkunden
3. **Über uns** - Unternehmensphilosophie mit Fokus auf gewerbliche Kunden
4. **Leistungen** - 6 Hauptservices:
   - Laubentsorgung
   - Baumpflege und Baumfällung
   - Grünschnitt und Grünpflegeanlagen
   - Pflasterarbeiten
   - Freischneiden
   - Winterdienst
5. **Galerie** - Vorher-/Nachher-Bilder von abgeschlossenen Projekten
6. **Kundenbewertungen** - Testimonials von gewerblichen Kunden
7. **Kontaktformular** - Voll funktionsfähiges Formular zur Anfrage
8. **Footer** - Kontaktinformationen, Öffnungszeiten, Social Media Links

### Features
- ✅ Vollständig responsive (Mobile-first Design)
- ✅ Smooth Scroll Navigation
- ✅ Sticky CTA Button beim Scrollen
- ✅ WhatsApp-Direktlink
- ✅ Google Maps Integration
- ✅ Funktionsfähiges Kontaktformular mit Backend-Anbindung
- ✅ Lightbox für Galerie-Bilder
- ✅ Fade-in Animationen
- ✅ SEO-optimiert mit deutschen Keywords

## Technologie-Stack

**Frontend:**
- React mit TypeScript
- Tailwind CSS für Styling
- Shadcn UI Komponenten
- Lucide React Icons
- Wouter für Routing

**Backend:**
- Express.js
- In-Memory Storage (MemStorage)
- Zod für Validierung

## API Endpunkte

### POST /api/contact
Sendet eine neue Kontaktanfrage.

**Request Body:**
```json
{
  "name": "Firmenname",
  "email": "email@firma.de",
  "phone": "+49 123 456789",
  "message": "Ihre Nachricht"
}
```

**Response:**
```json
{
  "success": true,
  "inquiry": {
    "id": "uuid",
    "name": "Firmenname",
    "email": "email@firma.de",
    "phone": "+49 123 456789",
    "message": "Ihre Nachricht",
    "createdAt": "2025-01-01T00:00:00.000Z"
  }
}
```

### GET /api/contact-inquiries
Ruft alle gespeicherten Kontaktanfragen ab (nach Datum sortiert, neueste zuerst).

## Entwicklung

```bash
npm run dev
```

Die Anwendung läuft auf Port 5000.

## Projektstruktur

```
client/
  ├── src/
  │   ├── components/      # React Komponenten
  │   │   ├── HeroSection.tsx
  │   │   ├── ClientsSection.tsx
  │   │   ├── AboutSection.tsx
  │   │   ├── ServicesSection.tsx
  │   │   ├── GallerySection.tsx
  │   │   ├── TestimonialsSection.tsx
  │   │   ├── ContactSection.tsx
  │   │   ├── Navigation.tsx
  │   │   ├── Footer.tsx
  │   │   └── StickyCtaButton.tsx
  │   ├── pages/
  │   │   └── Home.tsx
  │   └── index.css        # Tailwind & Custom Styles
server/
  ├── routes.ts            # API Endpunkte
  └── storage.ts           # Datenspeicherung
shared/
  └── schema.ts            # Zod Schemas & Types
attached_assets/
  └── generated_images/    # KI-generierte Gartenbilder
```

## Design-Richtlinien

- **Farbschema:** Natürliche Grüntöne mit weißen und erdigen Akzenten
- **Typografie:** Inter und DM Sans für moderne, saubere Lesbarkeit
- **Layout:** Minimalistisch mit viel Weißraum
- **Bilder:** Hochwertige Gartenfotos, die Professionalität vermitteln

## Zukünftige Erweiterungen

- E-Mail-Integration für automatische Benachrichtigungen (SendGrid/Resend)
- Datenbank-Persistierung (PostgreSQL) statt In-Memory Storage
- Admin-Dashboard zur Verwaltung von Anfragen
- Mehrsprachigkeit (Deutsch/Englisch)
- Blog-Sektion für Gartentipps
- Online-Terminbuchung

## SEO Keywords

Gartenpflege, Gartenbau, Landschaftsbau, Rasenpflege, Gartenservice, Gartengestaltung, TheGreenBros, Baumpflege, Terrassenbau, Heckenpflege, Laubentsorgung, Winterdienst, Pflasterarbeiten, gewerbliche Grünflächenpflege

## Kontakt

Für Fragen zum Projekt oder zur TheGreenBros Landing Page, nutzen Sie bitte das Kontaktformular auf der Website.
