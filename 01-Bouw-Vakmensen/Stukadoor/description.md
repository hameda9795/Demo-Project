# Perfect Stucwerk - Demo Website

## Project Overview

Een complete, luxe Next.js 14 website voor een Nederlandse stukadoor (plastering company) genaamd "Perfect Stucwerk", gevestigd in de Amsterdam/Utrecht regio.

## Key Features

### 🔥 Core Functionaliteiten
1. **Hero Section** - Split-screen before/after met scroll-morphing animatie
2. **Structuur Visualizer** - 4 stucwerk types (Glad, Spachtelputz, Granol, Sierpleister)
3. **Before/After Slider** - Interactieve vergelijking ruw vs. gestuct
4. **M² Calculator** - Real-time prijsberekening met smooth animaties
5. **Afwerking Gradaties** - Q1 t/m Q4 systeem uitgelegd
6. **Project Gallery** - Seamless grid met lightbox en before/after toggle
7. **Werkwijze Timeline** - Scroll-getriggerde proces weergave
8. **Renovlies vs. Stucwerk** - Keuzehulp met beslisboom

### 🎛️ Admin Panel (/admin)
- Login: demo/demo123
- Project pipeline dashboard
- Materiaal voorraad tracking
- Droogkalender

### 👤 Klantenportaal (/mijn-stucwerk)
- Login: klant@demo.nl/demo2024
- Project voortgang tracking
- Foto updates per dag
- Digitale facturen & garantiebewijs

### 📝 Kennisbank (/stucwerk-kennis)
- Artikelen over stucwerk
- Downloadbare handleidingen
- Onderhoudstips

## Technical Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Export:** Static (output: 'export')

## Design System

### Colors
- Warm Sand: #d6d3d1
- Cement Gray: #9ca3af
- Off-white: #fafaf9
- Clay/Terra: #c2410c
- Deep Stone: #44403c

### Typography
- Headings: Plus Jakarta Sans
- Body: Inter

## Important Notes

⚠️ **DEMO WEBSITE** - Alle gegevens zijn fictief:
- Phone: 020-123 4567 (DEMO - Voorbeeld)
- Email: info@demo-stukadoor.nl (DEMO)
- Address: DEMO Straat 78, 1012 AB Amsterdam
- KVK: 12345678 (DEMO nummer)
- BTW: NL001234567B01 (Voorbeeld)

## Floating CTA

Globale drijvende knop op alle pagina's:
- Position: bottom-right (desktop) / bottom-center (mobile)
- Link: https://techsolutionsutrecht.nl/contact
- Design: Warm sand gradient met troffel icoon
- Animation: Pulse effect

## Image Structure

All images are local in `/public/images/stukadoor/`:
- hero/ - Hero section images
- before/ - Before renovation photos
- after/ - After renovation photos
- textures/ - Texture close-ups
- projects/ - Project showcase
- process/ - Work process photos

Use `npm run setup-images` to download sample images from Unsplash.
