# Van Dijk Loodgieters - Demo Website

Een complete, premium demo website voor een Nederlands loodgietersbedrijf gebaseerd in Rotterdam. Gebouwd met Next.js 14, TypeScript, en Tailwind CSS.

## 🚀 Features

### Frontend
- **Responsive Design** - Optimized for all devices
- **Modern Animations** - Framer Motion for smooth transitions
- **Glass Morphism Navigation** - Transforming navbar on scroll
- **Interactive Components** - Price estimator, before/after slider, gallery lightbox
- **SEO Optimized** - Meta tags, structured data ready

### Sections
- Hero met split-screen design en trust badges
- Diensten cards met hover effects
- Before/After vergelijking slider
- Interactieve werkgebied kaart
- Prijsindicatie tool
- Masonry galerij met filters
- Reviews marquee
- Contact formulier met floating labels

### Admin Panel (`/admin`)
- Login: demo / demo123
- Dashboard met statistieken
- Kalender overzicht
- Activiteiten feed
- Omzet grafiek

### Klant Portal (`/mijn-account`)
- Service status timeline
- Documenten download
- Service historie
- Nieuwe melding maken

### Kenniskbank / Blog (`/kennisbank`)
- Artikelen met categorieën
- Zoek functionaliteit
- Uitgelicht artikel
- Social sharing

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Outfit, Inter)

## 📁 Project Structure

```
├── app/                      # Next.js app router pages
│   ├── admin/               # Admin panel
│   ├── kennisbank/          # Blog/knowledge base
│   ├── mijn-account/        # Customer portal
│   ├── privacy/             # Privacy policy
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── sections/            # Page sections
│   └── ui/                  # Reusable UI components
├── lib/
│   └── utils.ts             # Utility functions
├── types/
│   └── index.ts             # TypeScript types
└── public/                  # Static assets
```

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

### Static Export

Deze site is geconfigureerd voor static export:

```bash
npm run build
# Output in /dist folder
```

## 🎨 Design System

### Kleuren
- **Water Blue**: #3b82f6 (Primary)
- **Deep Navy**: #1e3a8a (Headings)
- **Emergency Orange**: #ea580c (CTAs, spoed)
- **Steel Gray**: #64748b (Body text)

### Typography
- **Headings**: Outfit (Google Fonts)
- **Body**: Inter (Google Fonts)

### Border Radius
- Organic shapes: `60px 20px 60px 20px`
- Cards: rounded-organic

## 📱 Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage met alle secties |
| `/admin/` | Admin dashboard (login: demo/demo123) |
| `/mijn-account/` | Klant portal |
| `/kennisbank/` | Blog en kennisbank |
| `/privacy/` | Privacy policy |

## ⚠️ Demo Disclaimer

Deze website is een demonstratie en bevat:
- Geen echte backend/data
- Mock data voor alle functionaliteiten
- Placeholder afbeeldingen
- Demo login credentials

## 📝 License

Dit is een demo project voor demonstratiedoeleinden.

---

**Van Dijk Loodgieters** - Professionele loodgietersdiensten in Rotterdam (Demo)
