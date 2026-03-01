# De Gouden Boon ☕

Een complete, mobiel-geoptimaliseerde demo website voor een Amsterdam-style café in Utrecht.

## 🎯 Project Overzicht

**De Gouden Boon** is een high-converting demo website voor een specialty coffee café, gebouwd met Next.js 14 en een mobile-first design filosofie.

### Belangrijke Features

- 📱 **Mobile-First Design** - Ontworpen voor 375px, daarna opschalen
- 🧭 **Sticky Bottom Navigation** - Thumb-reachable op mobiel
- 🎨 **Instagram-Style UI** - Story-achtige kaarten en visuele hierarchie
- 💳 **Digitale Spaarkaart** - Gamified loyalty systeem
- 📊 **Live Drukte Indicator** - Traffic light systeem
- 🛒 **Smart Ordering** - Bottom sheet bestelflow
- 👨‍💼 **Admin Dashboard** - Mobiel geoptimaliseerd management
- 👤 **Klantenportaal** - Persoonlijke ervaring met favorites

## 🚀 Quick Start

### Vereisten

- Node.js 18+ 
- npm of yarn

### Installatie

```bash
# Clone het project
git clone <repository-url>
cd de-gouden-boon

# Installeer dependencies
npm install

# Download afbeeldingen
npm run download-images

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in je browser.

### Afbeeldingen Downloaden

```bash
npm run download-images
```

Dit downloadt demo afbeeldingen van Unsplash naar `/public/images/cafe/`.

⚠️ **Let op:** Deze afbeeldingen zijn alleen voor demo doeleinden. Vervang ze door professionele foto's voor productie.

## 📁 Project Structuur

```
app/
├── (main)/                    # Main website routes
│   ├── home/                  # Homepage
│   ├── menu/                  # Menu pagina
│   ├── order/                 # Bestelpagina
│   ├── locatie/               # Locatie & contact
│   └── koffiekennis/          # Blog sectie
├── admin/                     # Admin dashboard
├── mijn-koffie/               # Klantenportaal
├── layout.tsx                 # Root layout
├── globals.css               # Global styles
└── not-found.tsx             # 404 pagina

components/
├── BottomNav.tsx             # Mobile bottom navigation
├── BottomSheet.tsx           # Mobile modal component
├── SwipeCard.tsx             # Swipeable card component
├── Header.tsx                # Site header
├── Footer.tsx                # Site footer
├── FloatingCTA.tsx           # Floating call-to-action
├── BusynessIndicator.tsx     # Live busyness indicator
└── LoyaltyCard.tsx           # Digital stamp card

lib/
├── utils.ts                  # Utility functions
└── data.ts                   # Demo data

types/
└── index.ts                  # TypeScript types

public/
├── images/cafe/              # Local images only
│   ├── coffee/
│   ├── food/
│   ├── interior/
│   └── barista/
└── manifest.json             # PWA manifest
```

## 🎨 Design Systeem

### Kleuren

- **Amber (#f59e0b)** - Primary CTA, accenten
- **Espresso Brown (#3e2723)** - Tekst, headers
- **Cream (#fff8e1)** - Achtergronden
- **Latte Foam (#d7ccc8)** - Subtiele accenten
- **Mint (#4ecdc4)** - Success states, secondary

### Typografie

- **Font:** Nunito (rounded, friendly)
- **Minimum:** 16px body text (iOS zoom preventie)
- **Headings:** Bold, extra contrast

### Mobile Patterns

- **Thumb Zones:** Belangrijke acties in onderste 50% scherm
- **Touch Targets:** Minimaal 48px × 48px
- **Bottom Sheets:** Modals schuiven van onderen
- **Swipe Gestures:** Links=rechts voor acties

## 🔐 Admin Toegang

**URL:** `/admin`

**Login gegevens:**
- Gebruikersnaam: `demo`
- Wachtwoord: `demo123`

## 👤 Demo Gebruiker

**Klantenportaal:** `/mijn-koffie`

Pre-filled demo data:
- 7/10 spaarstempels
- Gouden lid status
- Voorkeuren opgeslagen

## ⚠️ DEMO DISCLAIMER

**ALLE contactgegevens op deze website zijn FICTIEF:**

- 📞 Telefoon: 030-1234567 (DEMO)
- 📧 Email: hello@demo-goudenboon.nl (DEMO)
- 📍 Adres: DEMO Oudegracht 45, Utrecht
- 🏢 KVK: 12345678 (DEMO)

Deze website is een **demonstratie** ontwikkeld door **Tech Solutions Utrecht**.

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Slider:** Swiper.js
- **Fonts:** Google Fonts (Nunito)

## 📱 PWA

De website is geconfigureerd als Progressive Web App:
- Offline support (basis)
- Add to Home Screen
- Manifest.json
- App-like ervaring

## 📝 Scripts

```bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Production server
npm run lint         # ESLint check
npm run download-images  # Download demo images
```

## 🌐 Deployment

### Static Export

```bash
npm run build
```

Genereert een static export in de `/dist` map.

### Environment Variables

Geen environment variables nodig voor basis functionaliteit.

## 📄 Licentie

© 2025 Tech Solutions Utrecht. Alle intellectuele eigendomsrechten voorbehouden.

Concept, design en ontwikkeling door [Tech Solutions Utrecht](https://techsolutionsutrecht.nl).

---

☕ **De Gouden Boon** - Uw dagelijkse ritueel
