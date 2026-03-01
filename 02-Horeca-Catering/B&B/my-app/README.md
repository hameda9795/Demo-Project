# Het Kleine Paradijs - Bed & Breakfast Website

Een warme, intieme demo website voor een fictief Bed & Breakfast in het hart van Nederland.

![Het Kleine Paradijs](https://img.shields.io/badge/B%26B-Het%20Kleine%20Paradijs-strawberry)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-cyan)

## ✨ Kenmerken

- **"The Morning Embrace" design concept** - Warme, cozy esthetiek met ochtendlicht-gradients
- **4 Unieke kamers** - Elk met eigen karakter, persoonlijke touch en polaroid-stijl fotografie
- **Beroemd ontbijt showcase** - Horizontale scroll gallery met dietary badges en stoom-animaties
- **Gastenboek** - Handgeschreven stijl verhalen ipv simpele reviews
- **Lokale ervaringen** - Tips van locals, geen toeristenvalkuilen
- **Admin Dashboard** - Volledig functioneel beheerpaneel (demo: demo/demo123)
- **Gast Portaal** - Persoonlijk dashboard voor gasten (demo: gast/gast123)
- **Blog/Dagboek** - Recepten, uitstapjes en B&B life verhalen

## 🎨 Design Systeem

### Kleuren
- **Honey Gold** `#f4a261` - Warme accentkleur
- **Strawberry Jam** `#e76f51` - Primaire CTA kleur
- **Fresh Sage** `#2a9d8f` - Secundaire accent
- **Creamy Egg** `#fefae0` - Achtergrond
- **Coffee Brown** `#6f4e37` - Tekst
- **Soft Linen** `#faedcd` - Subtiele achtergronden

### Typografie
- **Lora** - Elegante serif voor headings
- **Nunito** - Vriendelijke sans-serif voor body text

## 🚀 Quick Start

### Installatie

```bash
# Ga naar de projectmap
cd my-app

# Installeer dependencies
npm install

# Download plaatshoudende afbeeldingen
npm run download-images

# Start development server
npm run dev
```

### Build voor productie

```bash
npm run build
```

De static export wordt gegenereerd in de `dist` map.

## 📁 Project Structuur

```
my-app/
├── app/
│   ├── admin/           # Admin dashboard pagina
│   ├── portal/          # Gast portaal pagina
│   ├── dagboek/         # Blog pagina
│   ├── components/      # Globale componenten
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── FloatingCTA.tsx
│   │   └── WaveDivider.tsx
│   ├── sections/        # Homepage secties
│   │   ├── HeroSection.tsx
│   │   ├── BreakfastSection.tsx
│   │   ├── RoomsSection.tsx
│   │   ├── HostsSection.tsx
│   │   ├── GuestbookSection.tsx
│   │   └── ExperiencesSection.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── lib/
│   ├── utils.ts         # Utility functies
│   └── data.ts          # Data & content
├── types/
│   └── index.ts         # TypeScript types
├── public/
│   └── images/
│       └── bnb/         # Lokale afbeeldingen
│           ├── breakfast/
│           ├── rooms/
│           ├── garden/
│           ├── hosts/
│           └── details/
├── download-images.js   # Script om afbeeldingen te downloaden
└── package.json
```

## 🔐 Demo Logins

### Admin Dashboard
- **URL:** `/admin`
- **Gebruikersnaam:** `demo`
- **Wachtwoord:** `demo123`

### Gast Portaal
- **URL:** `/portal`
- **Gebruikersnaam:** `gast`
- **Wachtwoord:** `gast123`

## 📸 Afbeeldingen

Alle afbeeldingen zijn lokaal opgeslagen in `/public/images/bnb/`. 

Om de demo-afbeeldingen te downloaden:

```bash
npm run download-images
```

Dit downloadt plaatsvervangende afbeeldingen van Unsplash. Voor productie moeten deze worden vervangen door echte foto's van de B&B.

## 🎯 Belangrijke Features

### Floating CTA
- Altijd zichtbaar op alle pagina's
- Ademhalings-animatie
- Linkt naar extern contactformulier
- Position: bottom-right (desktop), bottom-center (mobile)

### Micro-interacties
- Stoom-animatie op koffie-afbeeldingen
- "Jam spread" hover effect op buttons
- Sunrise gradient animatie in hero
- Zachte pagina-overgangen

### Demo Informatie
Alle contactgegevens zijn duidelijk gemarkeerd als DEMO:
- Telefoon: "030-9876543 (DEMO - Voorbeeld)"
- Email: "welcome@demo-paradijs.nl (DEMO)"
- Adres: "DEMO Dorpsweg 12, 1234 AB Dorpje (Voorbeeldadres)"
- "DEMO WEBSITE" badge in header

## 🛠️ Tech Stack

- **Next.js 14** - App Router, Static Export
- **TypeScript** - Type-veiligheid
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animaties
- **Lucide React** - Icons

## 📄 Licentie

© 2025 Tech Solutions Utrecht. Alle intellectuele eigendomsrechten voorbehouden.  
Concept, design en ontwikkeling door Tech Solutions Utrecht.

---

*Dit is een demo website voor demonstratiedoeleinden.*
