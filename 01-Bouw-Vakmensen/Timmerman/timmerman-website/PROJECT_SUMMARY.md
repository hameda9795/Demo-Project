# Van den Berg Timmerwerken - Project Summary

## ✅ Build Complete

Een complete, award-winning demo website voor een Nederlands timmerbedrijf is succesvol gebouwd.

---

## 📁 Project Structuur

```
timmerman-website/
├── src/
│   ├── app/
│   │   ├── admin/              # Admin panel (dark wood theme)
│   │   ├── portal/             # Klant portal (project tracking)
│   │   ├── werkplaats-nieuws/  # Blog pagina
│   │   ├── globals.css         # "Living Grain" design system
│   │   ├── layout.tsx          # Root layout met fonts
│   │   └── page.tsx            # Homepage
│   ├── components/
│   │   ├── sections/           # Alle homepage secties
│   │   │   ├── Hero.tsx        # Parallax hero met SVG overlay
│   │   │   ├── WoodSelector.tsx
│   │   │   ├── Gallery.tsx     # Masonry met raw-to-refined
│   │   │   ├── JoineryTechniques.tsx
│   │   │   ├── Configurator.tsx
│   │   │   ├── Process.tsx
│   │   │   ├── Sustainability.tsx
│   │   │   └── Contact.tsx
│   │   ├── Header.tsx          # Met DEMO badge & Admin/Klant login
│   │   ├── Footer.tsx          # Met copyright Tech Solutions
│   │   ├── FloatingCTA.tsx     # Wood grain button
│   │   └── CookieBanner.tsx
│   ├── lib/
│   │   └── data.ts             # Alle DEMO data
│   └── types/
│       └── index.ts            # TypeScript interfaces
├── public/images/timmerman/    # Afbeelding structuur
├── dist/                       # Static export (ready for deploy)
├── download-images.js          # Afbeelding download script
└── next.config.js              # Static export config
```

---

## 🎨 "The Living Grain" Design System

### Kleuren
- **Warm Oak**: #8B5A2B - Primaire houtkleur
- **Deep Walnut**: #3E2723 - Donkere accenten
- **Sawdust Cream**: #F5F5DC - Achtergrond
- **Steel Gray**: #4A5568 - Secundaire tekst
- **Varnish Amber**: #D4AF37 - CTAs & highlights

### Typography
- **Playfair Display** - Headings (elegant craft feel)
- **Inter** - Body text (modern readability)

### Animaties
- Carve-in (clip-path reveal)
- Grain growth (SVG stroke animations)
- Ken Burns (subtle zoom)
- Breathing pulse (CTA glow)

---

## 🚀 Pagina's & Features

### 1. Homepage (/)
- **Hero**: Full viewport met parallax, wood grain SVG overlay
- **Wood Selector**: 5 houtsoorten met scratch test animatie
- **Project Gallery**: Masonry layout, raw-to-refined hover effect
- **Joinery Techniques**: SVG animaties (zwaluwstaart, pen-en-gat, fingerjoint)
- **Configurator**: 4-staps meubel builder met live pricing
- **Process**: Timeline van inventarisatie tot oplevering
- **Sustainability**: CO2 calculator (hout vs kunststof/staal/aluminium)
- **Contact**: Formulier met DEMO waarschuwing

### 2. Admin Panel (/admin)
- Login: demo / demo123
- Dashboard met statistieken
- Voorraad visualisatie (wood stock progress bars)
- Offerte generator (modal met berekening)
- Dark wood aesthetic (#3E2723 background)

### 3. Klant Portal (/portal)
- Project tracking met timeline
- Huidige fase highlighting
- Workshop foto updates
- Leverings countdown
- Chat interface (demo)

### 4. Blog (/werkplaats-nieuws)
- Categorie filtering
- Featured article layout
- Downloadbare PDF resources

---

## ⚠️ DEMO Waarschuwingen

Alle pagina's bevatten duidelijke DEMO markeringen:

### Contact Info (data.ts)
```
Phone:  "030-1234567 (DEMO - Voorbeeld)"
Email:  "info@demo-timmerman.nl (DEMO)"
Adres:  "DEMO Houtstraat 45, 1234 AB Utrecht"
KVK:    "12345678 (DEMO nummer)"
BTW:    "NL001234567B01 (Voorbeeld)"
```

### Header
- Rode "DEMO WEBSITE" badge naast logo

### Footer
- Disclaimer: "DEMO WEBSITE - Geen echte data wordt verwerkt"
- Copyright: "© 2025 Tech Solutions Utrecht"
- HTML Comment: "<!-- © Tech Solutions Utrecht - Unauthorized copying prohibited -->"

---

## 🛠️ Commands

```bash
# Development
npm run dev

# Build (static export)
npm run build

# Afbeeldingen downloaden
node download-images.js

# Lint
npm run lint
```

---

## 📦 Dependencies

- next: 14.2.35
- react: ^18
- react-dom: ^18
- framer-motion: ^11.x
- lucide-react: ^0.x
- swiper: ^11.x
- typescript: ^5
- tailwindcss: ^3.4

---

## 🚀 Deployment

De `dist/` map bevat een static export ready voor deployment:

```bash
# Dist inhoud:
dist/
├── index.html              # Homepage
├── admin/index.html        # Admin panel
├── portal/index.html       # Klant portal
├── werkplaats-nieuws/      # Blog
└── _next/                  # Static assets
```

---

## ✅ Requirements Checklist

| Requirement | Status |
|-------------|--------|
| Geen device toggle | ✅ |
| Lokale afbeeldingen structuur | ✅ |
| Floating CTA button | ✅ |
| DEMO contact info | ✅ |
| DEMO badge in header | ✅ |
| Header met Admin/Klant login | ✅ |
| Copyright footer | ✅ |
| HTML copyright comment | ✅ |
| Next.js 14 App Router | ✅ |
| TypeScript | ✅ |
| Tailwind CSS | ✅ |
| Framer Motion | ✅ |
| Swiper.js | ✅ |
| Lucide React | ✅ |
| Static export ready | ✅ |
| "Living Grain" design | ✅ |
| Hero met parallax | ✅ |
| Wood Selector | ✅ |
| Project Gallery | ✅ |
| Joinery Techniques | ✅ |
| Configurator | ✅ |
| Process Timeline | ✅ |
| Sustainability Calculator | ✅ |
| Admin Panel | ✅ |
| Klant Portal | ✅ |
| Blog | ✅ |
| Cookie banner | ✅ |

---

**Ontwikkeld door**: Tech Solutions Utrecht  
**Datum**: Maart 2026  
**Status**: ✅ Production Ready (Demo)
