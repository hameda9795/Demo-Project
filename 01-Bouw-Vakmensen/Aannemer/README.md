# Bouwbedrijf Van den Berg

Een award-waardige demo website voor een Nederlands bouwbedrijf, gebouwd met Next.js 14.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Charts**: Recharts
- **Icons**: Lucide React

## Features

### Design
- Asymmetrisch broken-grid design
- Verticale zijnavigatie (desktop) / bottom navigation (mobile)
- Industrieel kleurenpalet: Concrete gray, Safety orange, Deep navy
- Diagonale clip-paths op afbeeldingen
- Organische blob-shapes op accent elementen
- Custom cursor met blend-mode difference

### Pagina's
- **Home**: Hero met diagonale tekst, project gallery, services, before/after slider, quote calculator, team sectie
- **Projecten**: Masonry grid met filters
- **Diensten**: Horizontale scroll sectie met parallax
- **Over Ons**: Team met 3D tilt effect
- **Blog**: Grid layout met featured posts
- **Contact**: Contactformulier
- **Offerte**: Multi-step calculator wizard

### Admin Panel (/admin)
- Login met demo credentials (demo / demo123)
- Dashboard met statistieken en omzet grafiek
- Projecten beheer
- Offertes overzicht
- Instellingen

### Client Portal (/portal)
- Klant login
- Project status timeline
- Documenten upload/download
- Chat interface

### Demo Features
- Device toggle (mobile/tablet/desktop) - top-right
- Cookie consent banner
- localStorage voor demo state persistence

## Installatie

```bash
# Dependencies installeren
npm install

# Development server starten
npm run dev

# Build voor productie
npm run build
```

## Demo Credentials

**Admin Panel:**
- Gebruikersnaam: `demo`
- Wachtwoord: `demo123`

## Project Structuur

```
src/
├── app/              # Next.js App Router pagina's
├── components/
│   ├── atoms/        # Kleinste componenten
│   ├── molecules/    # Samengestelde componenten
│   ├── organisms/    # Sectie componenten
│   ├── layouts/      # Layout componenten
│   └── admin/        # Admin specifieke componenten
├── data/             # Statische data
├── hooks/            # Custom React hooks
├── lib/              # Utilities
└── types/            # TypeScript interfaces
```

## Kleurenschema

- **Safety Orange**: `#f97316` - CTAs en accenten
- **Concrete Gray**: `#6b7280` - Secundaire tekst
- **Deep Navy**: `#0f172a` - Achtergronden
- **Off-white**: `#fafaf9` - Content achtergrond
- **Charcoal**: `#1a1a1a` - Side navigation

## Licentie

Demo omgeving - Geen echte data
