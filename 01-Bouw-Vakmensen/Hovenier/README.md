# Groen & Tuin Architectuur - Hovenier Website Demo

Een complete, organische, natuur-geïnspireerde demo website voor een Nederlands hoveniersbedrijf. Gebouwd met Next.js 14, TypeScript, Tailwind CSS en Framer Motion.

![DEMO WEBSITE](https://img.shields.io/badge/DEMO-Website-red)

## 🌿 Kenmerken

- **Organisch Ontwerp**: Blob-vormen, organische curves, natuurlijke kleurenpalet
- **Seizoensgebonden Hero**: Interactieve seizoenselector met visuele effecten
- **Voor/Na Vergelijking**: Swipe-slider voor tuintransformaties
- **TuinOntwerper Tool**: 3-stappen configuratie voor tuinontwerp met prijsindicatie
- **Seizoenskalender**: Onderhoudstaken per seizoen
- **Eco Calculator**: Bereken hoe groen uw tuin is
- **Masonry Project Gallery**: Pinterest-stijl projectoverzicht
- **Plant Database**: Filterbare plantengids voor Nederlandse tuinen
- **Admin Dashboard**: Login (demo/demo123) met weer, taken, kaart, voorraad
- **Klant Portal**: Persoonlijk dashboard voor klanten met onderhoudsschema
- **Blog**: Categorieën, maandtaak, downloadbare jaarkalender

## 🚀 Quick Start

### 1. Installeer dependencies

```bash
npm install
```

### 2. Download afbeeldingen

```bash
npm run setup-images
```

Dit downloadt alle benodigde afbeeldingen van Unsplash naar `/public/images/hovenier/`.

### 3. Start development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Build voor productie

```bash
npm run build
```

De statische export wordt gegenereerd in de `/dist` map.

## 📁 Project Structuur

```
├── public/
│   └── images/
│       └── hovenier/           # Lokale afbeeldingen
│           ├── hero/           # Hero achtergronden
│           ├── before/         # Voor-transformatie foto's
│           ├── after/          # Na-transformatie foto's
│           ├── projects/       # Project portfolio
│           ├── plants/         # Planten afbeeldingen
│           └── icons/          # Badge iconen
├── src/
│   ├── app/                    # Next.js App Router pagina's
│   │   ├── admin/              # Admin dashboard (/admin)
│   │   ├── mijn-tuin/          # Klant portal (/mijn-tuin)
│   │   ├── tuinblog/           # Blog sectie (/tuinblog)
│   │   ├── contact/            # Contact pagina
│   │   ├── diensten/           # Diensten overzicht
│   │   ├── over-ons/           # Over ons pagina
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home pagina
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── FloatingCTA.tsx     # Floating contact button
│   │   ├── DemoBadge.tsx       # DEMO badges/watermarks
│   │   ├── Navigation.tsx      # Header navigatie
│   │   ├── Footer.tsx          # Footer component
│   │   └── sections/           # Page secties
│   │       ├── Hero.tsx
│   │       ├── BeforeAfter.tsx
│   │       ├── GardenDesigner.tsx
│   │       ├── SeasonalCalendar.tsx
│   │       ├── EcoCalculator.tsx
│   │       ├── ProjectGallery.tsx
│   │       ├── PlantDatabase.tsx
│   │       └── Services.tsx
│   ├── lib/
│   │   └── utils.ts            # Utilities & demo data
│   └── types/
│       └── index.ts            # TypeScript types
├── setup-images.js             # Afbeelding download script
├── next.config.js              # Next.js configuratie
├── tailwind.config.ts          # Tailwind configuratie
└── package.json
```

## 🎨 Design Systeem

### Kleuren
- **Forest Green**: `#166534` - Primaire kleur
- **Earth Brown**: `#78350f` - Accent/tekst
- **Leaf Light**: `#4ade80` - Highlights
- **Sky Blue**: `#0ea5e9` - Water elementen
- **Cream/Beige**: `#fef3c7` - Achtergronden
- **Stone Gray**: `#78716c` - Neutraal

### Typografie
- **Headings**: "DM Serif Display" (elegant, organisch)
- **Body**: "Inter" (modern, leesbaar)

### Vormen
- Organische border-radius: `60% 40% 30% 70% / 60% 30% 70% 40%`
- Geen scherpe rechthoeken - alles met curves

## 🔐 Demo Accounts

### Admin Dashboard
- **URL**: `/admin`
- **Username**: `demo`
- **Password**: `demo123`

### Klant Portal
- **URL**: `/mijn-tuin`
- **Login**: Elk willekeurig emailadres werkt (demo)

## ⚠️ DEMO Website

**Let op**: Dit is een demonstratie website. Alle contactgegevens zijn fictief:
- Telefoon: 020-123 4567 (DEMO)
- Email: info@demo-tuinbedrijf.nl (DEMO)
- Adres: DEMO Straat 45, 5678 AB Amsterdam
- KVK: 12345678 (DEMO)
- BTW: NL001234567B01 (Voorbeeld)

## 📱 Componenten

### FloatingCTA
- Positie: Fixed bottom-right (desktop) / bottom-center (mobile)
- Design: Groene glow, pulserende animatie, Leaf icoon
- Link: Opent `https://techsolutionsutrecht.nl/contact`
- Zichtbaar op alle pagina's behalve /admin

### DemoBadge
- Varianten: header, banner, footer, inline
- Rode/amber "DEMO WEBSITE" badges
- Duidelijke marking van alle fictieve content

## 🌐 Routes

| Route | Beschrijving |
|-------|-------------|
| `/` | Homepage met alle secties |
| `/diensten/` | Diensten overzicht |
| `/tuinblog/` | Blog met tips en inspiratie |
| `/over-ons/` | Over het bedrijf |
| `/contact/` | Contact formulier |
| `/admin/` | Admin dashboard |
| `/mijn-tuin/` | Klant portal |

## 📄 Licentie

Dit is een demo project voor demonstratiedoeleinden.

---

*Gebouwd met ❤️ en veel groen* 🌱
