# Van den Berg Timmerwerken

**DEMO WEBSITE** - Een Next.js 14 demonstratie website voor een timmerman/timmerbedrijf.

> ⚠️ **Let op**: Dit is een demonstratie website. Alle contactgegevens, projecten en andere data zijn fictief en uitsluitend bedoeld voor presentatiedoeleinden.

## Over dit project

Een complete, professionele website voor een Nederlands timmerbedrijf, gebouwd met:

- **Next.js 14** met App Router
- **TypeScript** voor type-veilige code
- **Tailwind CSS** voor styling
- **Framer Motion** voor animaties
- **Swiper.js** voor galerijen

## "The Living Grain" Design System

Het design is geïnspireerd op ambachtelijk timmerwerk:

- **Organische animaties** die houtbewerking nabootsen (schuren, beitsen, groei)
- **Warm kleurenpalet** gebaseerd op natuurlijke houttinten
- **Houtnerven en textuur** door het hele design
- **Ambachtelijke details** zoals zwaluwstaart-vormen en guts-hoeken

## Belangrijke Features

### Voor Bezoekers
- **Hero Sectie** met parallax en houtnerf overlay
- **Houtsoort Selector** met interactieve vergelijking
- **Project Galerij** met "raw to refined" hover effect
- **Verbindingstechnieken** met SVG animaties
- **Meubel Configurator** met live prijsberekening
- **Duurzaamheids Calculator** met CO2 vergelijking

### Voor Admin (/admin)
- Login: `demo` / `demo123`
- Dashboard met statistieken
- Voorraadbeheer visualisatie
- Offerte generator

### Voor Klanten (/portal)
- Project tracking met timeline
- Workshop foto updates
- Chat interface met timmerman
- Leverings countdown

## Getting Started

### Installatie

```bash
# Clone of maak het project
cd timmerman-website

# Installeer dependencies
npm install

# Download afbeeldingen
node download-images.js

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in je browser.

### Afbeeldingen Downloaden

```bash
node download-images.js
```

Dit downloadt placeholder afbeeldingen van Unsplash naar `public/images/timmerman/`.

### Build voor Productie

```bash
npm run build
```

De static export wordt gemaakt in de `dist/` map.

## Project Structuur

```
timmerman-website/
├── src/
│   ├── app/
│   │   ├── admin/           # Admin panel
│   │   ├── portal/          # Klant portal
│   │   ├── werkplaats-nieuws/  # Blog
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   ├── components/
│   │   ├── sections/        # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── WoodSelector.tsx
│   │   │   ├── Gallery.tsx
│   │   │   ├── JoineryTechniques.tsx
│   │   │   ├── Configurator.tsx
│   │   │   ├── Process.tsx
│   │   │   ├── Sustainability.tsx
│   │   │   └── Contact.tsx
│   │   ├── Header.tsx       # Global header
│   │   ├── Footer.tsx       # Global footer
│   │   ├── FloatingCTA.tsx  # Floating contact button
│   │   └── CookieBanner.tsx # GDPR banner
│   ├── lib/
│   │   └── data.ts          # Demo data
│   └── types/
│       └── index.ts         # TypeScript types
├── public/
│   └── images/timmerman/    # Afbeeldingen
├── download-images.js       # Afbeelding download script
└── next.config.js           # Next.js config
```

## DEMO Data

Alle data in dit project is fictief:

- Contactgegevens: `030-1234567 (DEMO)`
- Adres: `DEMO Houtstraat 45, 1234 AB Utrecht`
- KVK: `12345678 (DEMO nummer)`
- BTW: `NL001234567B01 (Voorbeeld)`

## Kleurenschema

| Kleur | Hex | Gebruik |
|-------|-----|---------|
| Warm Oak | #8B5A2B | Primaire houtkleur |
| Deep Walnut | #3E2723 | Donkere accenten, tekst |
| Sawdust Cream | #F5F5DC | Achtergrond |
| Steel Gray | #4A5568 | Secundaire tekst |
| Varnish Amber | #D4AF37 | CTA's, highlights |

## Licentie

© 2025 Tech Solutions Utrecht. Alle intellectuele eigendomsrechten voorbehouden.

---

Ontwikkeld door **Tech Solutions Utrecht** - Concept, design en ontwikkeling.
