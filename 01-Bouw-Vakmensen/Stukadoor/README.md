# Perfect Stucwerk - Next.js 14 Demo Website

Een complete, luxe demo website voor een Nederlandse stukadoor ("Perfect Stucwerk") met focus naadloze afwerking en vloeiende animaties.

## ⚠️ DEMO WEBSITE

**Belangrijk:** Dit is een **demonstratie website**. Alle contactgegevens, prijzen en bedrijfsinformatie zijn fictief en uitsluitend bedoeld als voorbeeld.

- **Telefoon:** 020-123 4567 (DEMO - Voorbeeld)
- **Email:** info@demo-stukadoor.nl (DEMO)
- **Adres:** DEMO Straat 78, 1012 AB Amsterdam (Voorbeeldadres)

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Download sample images
npm run setup-images

# Start development server
npm run dev

# Open http://localhost:3000
```

## 📁 Projectstructuur

```
.
├── app/                    # Next.js 14 App Router
│   ├── page.tsx           # Homepage
│   ├── contact/           # Contactpagina
│   ├── stucwerk-kennis/   # Kennisbank/Blog
│   ├── admin/             # Admin panel (login: demo/demo123)
│   └── mijn-stucwerk/     # Klantenportaal (login: klant@demo.nl/demo2024)
├── components/            # Gedeelde componenten
│   ├── Navigation.tsx     # Navigatie
│   ├── FloatingCTA.tsx    # Drijvende CTA knop
│   ├── DemoBanner.tsx     # DEMO waarschuwing
│   └── Footer.tsx         # Footer
├── sections/              # Homepage secties
│   ├── Hero.tsx           # Hero met before/after morphing
│   ├── StructuurVisualizer.tsx  # 4 stucwerk types
│   ├── BeforeAfterSlider.tsx    # Vergelijking slider
│   ├── PlasterCalculator.tsx    # M² calculator
│   ├── FinishLevels.tsx    # Q1-Q4 uitleg
│   ├── ProjectGallery.tsx  # Project galerij
│   ├── ProcessTimeline.tsx # Werkwijze timeline
│   └── RenovliesComparison.tsx  # Keuzehulp
├── public/images/stukadoor/  # Lokale afbeeldingen
└── scripts/setup-images.js   # Afbeeldingen download script
```

## ✨ Belangrijkste Functies

### 🏠 Homepage
- **Hero Section:** Split-screen before/after met scroll-morphing animatie
- **Structuur Visualizer:** Interactieve showcase van 4 stucwerk types
- **Before/After Slider:** Vergelijk ruw vs. gestuct
- **M² Calculator:** Real-time prijsberekening met animaties
- **Afwerkingsgradaties:** Q1 t/m Q4 uitleg
- **Project Gallery:** Naadloze galerij met lightbox
- **Proces Timeline:** Scroll-getriggerde animatie
- **Renovlies vs. Stucwerk:** Keuzehulp met beslisboom

### 🔧 Admin Panel (/admin)
- Login: `demo` / `demo123`
- Project pipeline dashboard
- Materiaal voorraad beheer
- Droogkalender
- Foto documentatie

### 👤 Klantenportaal (/mijn-stucwerk)
- Login: `klant@demo.nl` / `demo2024`
- Project voortgang met percentage vulling
- Dagelijkse foto updates
- Documenten download
- Garantie certificaat

### 📚 Kennisbank (/stucwerk-kennis)
- Artikelen over stucwerk
- Downloads (PDF handleidingen)
- Categorieën: Onderhoud, Kleur, Technieken

## 🎨 Design Systeem

### Kleuren
- **Warm Sand:** `#d6d3d1` - Primaire achtergrond
- **Cement Gray:** `#9ca3af` - Secondaire tekst
- **Off-white:** `#fafaf9` - Sections
- **Clay/Terra:** `#c2410c` - Accenten
- **Deep Stone:** `#44403c` - Titels

### Typografie
- **Headings:** Plus Jakarta Sans
- **Body:** Inter

### Animaties (Framer Motion)
- Seamless page transitions
- Smooth scroll reveals
- Pulse/spread animaties
- Number counting effects

## 🖼️ Afbeeldingen

Alle afbeeldingen zijn lokaal opgeslagen in `/public/images/stukadoor/`:

```
/images/stukadoor/
├── hero/           # Hero afbeeldingen
├── before/         # Before foto's
├── after/          # After foto's
├── textures/       # Structuur close-ups
├── projects/       # Project foto's
└── process/        # Werkproces foto's
```

Download sample afbeeldingen:
```bash
npm run setup-images
```

## 🔗 Drijvende CTA Knop

Een prominente CTA knop verschijnt op ALLE pagina's:
- **Positie:** Rechtsonder (desktop) / Onder midden (mobiel)
- **Design:** Warm zand gradient met troffel icoon
- **Link:** https://techsolutionsutrecht.nl/contact
- **Animatie:** Pulse effect zoals uitspreidend pleisterwerk

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animaties:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Static Export

## 📦 Scripts

```bash
npm run dev        # Development server
npm run build      # Production build
npm run setup-images  # Download sample afbeeldingen
```

## 🌐 Deployment

De website is geconfigureerd voor static export:

```javascript
// next.config.js
output: 'export'
distDir: 'dist'
```

Build en deploy de `dist/` map naar uw hosting.

## 📝 Contact

Voor vragen over dit project:
- **Website:** https://techsolutionsutrecht.nl/contact

---

**Gemaakt met ❤️ voor Perfect Stucwerk (DEMO)**
