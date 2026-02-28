# Kleur & Verf Meesters - Demo Website

Een complete, professionele demo website voor een Nederlands schildersbedrijf, gebouwd met Next.js 14, TypeScript, Tailwind CSS, Framer Motion en Swiper.js.

## ⚠️ BELANGRIJK: Demo Website

**Deze website is uitsluitend voor demonstratiedoeleinden.**
- Alle contactgegevens zijn fictief
- Alle prijzen zijn indicatief (DEMO)
- Geen echte boekingen of offertes mogelijk

## 🎨 Features

### Schilder-Specifieke Functionaliteit
- **Kleurenkiezer Tool** - Interactieve kleurvisualisatie voor verschillende ruimtes
- **Voor/Na Vergelijking** - Slider om transformaties te bekijken
- **Verf Calculator** - Bereken hoeveel verf nodig is
- **Afwerking Types** - Uitleg over mat, satijn en hoogglans
- **Seizoenskalender** - Wanneer is het beste moment om te schilderen

### Pagina's
- **Home** - Met hero, diensten, voor/na, kleurenkiezer, calculator, etc.
- **Diensten** - Detailpagina voor alle schilderdiensten
- **Verf Tips** - Blog met schilderadvies
- **Contact** - Contactformulier en gegevens (DEMO)
- **Admin Portal** - Login: demo/demo123
- **Klant Portal** - Projectvolgsysteem voor klanten

### Componenten
- **Floating CTA** - Globale "Offerte Aanvragen" knop met externe link
- **Demo Banner** - Rode banner met waarschuwing
- **Responsive Design** - Mobiel-vriendelijk
- **Framer Motion** - Soepele animaties en overgangen

## 🚀 Getting Started

### Vereisten
- Node.js 18+
- npm of yarn

### Installatie

1. Clone de repository:
```bash
cd my-app
```

2. Installeer dependencies:
```bash
npm install
```

3. Download afbeeldingen:
```bash
npm run setup-images
```

4. Start development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

### Build voor productie
```bash
npm run build
```
De static export wordt gegenereerd in de `dist` map.

## 📁 Project Structuur

```
my-app/
├── app/
│   ├── (main)/
│   │   ├── diensten/
│   │   ├── verftips/
│   │   └── contact/
│   ├── admin/
│   │   ├── page.tsx (login)
│   │   └── dashboard/
│   ├── mijn-project/
│   │   ├── page.tsx (login)
│   │   └── dashboard/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── sections/       # Page sections (Hero, Services, etc.)
│   ├── kleurenkiezer/  # Color visualizer
│   ├── FloatingCTA.tsx
│   ├── DemoBanner.tsx
│   ├── Header.tsx
│   └── Footer.tsx
├── lib/
│   └── utils.ts        # Utility functions & data
├── public/
│   └── images/schilder/
│       ├── hero/
│       ├── before/
│       ├── after/
│       ├── rooms/
│       ├── finishes/
│       ├── projects/
│       └── icons/
├── scripts/
│   └── setup-images.js # Image download script
└── next.config.js
```

## 🖼️ Afbeeldingen

Alle afbeeldingen zijn lokaal opgeslagen in `/public/images/schilder/`.

Gebruik `npm run setup-images` om automatisch voorbeeldafbeeldingen te downloaden van Unsplash.

### Folder structuur:
- `/hero/` - Hero sectie afbeeldingen
- `/before/` - Voor-vergelijking foto's
- `/after/` - Na-vergelijking foto's
- `/rooms/` - Kleurvisualisatie kamers
- `/finishes/` - Verf afwerking texturen
- `/projects/` - Portfolio projecten
- `/icons/` - Badges en iconen

## 🎨 Design Systeem

### Kleuren
- **Teal** `#0d9488` - Primair
- **Coral** `#f97316` - Accent
- **Soft Yellow** `#facc15` - Accent
- **Deep Blue** `#1e40af` - Vertrouwen

### Typografie
- **Poppins** - Headings
- **Inter** - Body text

## 🔧 Configuratie

### next.config.js
```javascript
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
}
```

### Environment Variables
Geen environment variables nodig voor de demo.

## 📞 Contact (DEMO)

- **Telefoon:** 070-123 4567 (DEMO - Voorbeeld)
- **Email:** info@demo-schilder.nl (DEMO)
- **Adres:** DEMO Straat 12, 2585 AB Den Haag (Voorbeeldadres)
- **KVK:** 12345678 (DEMO nummer)
- **BTW:** NL001234567B01 (Voorbeeld)

## 📝 Licentie

Deze code is beschikbaar voor educatieve en demonstratiedoeleinden.

Afbeeldingen via Unsplash - controleer licentievoorwaarden voor commercieel gebruik.

---

**Gemaakt voor Tech Solutions Utrecht**
