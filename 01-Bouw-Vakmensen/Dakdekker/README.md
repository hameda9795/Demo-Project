# Dakwerken Van der Berg - Premium Roofing Website

Een complete, premium demo website voor een Nederlandse dakdekkersbedrijf, gebouwd met Next.js 14, TypeScript, Tailwind CSS en Framer Motion.

## 🚀 Kenmerken

### Design System - "Roof Angle Theme"
- **30-graden rotaties** toegepast op knoppen, kaarten en decoratieve elementen
- **Clip-path vormen** voor dakpan-achtige uitstraling
- **Asymmetrische layouts** geïnspireerd door daklijnen
- **Dynamische kleurschema's**: Roof Slate, Safety Orange, Sky Blue, Cloud White, Storm Gray

### Belangrijkste Secties
1. **Hero Sectie** - 100vh met weer-widget, trust badge en "roof tile" knoppen
2. **Stormschade Alert** - Sluitbare banner met spoednummer
3. **Diensten Grid** - Asymmetrische masonry layout met 6 diensten
4. **Projecten Galerij** - Filterbare galerij met before/after effect
5. **Materiaal Configurator** - Interactieve offerte-tool
6. **Seizoensgebonden Tips** - Automatisch roterende adviezen
7. **Trust Row** - Certificeringen en garanties
8. **Blog (Dakenkennis)** - Kennisbank met categorieën

### Admin Panel (/admin)
- Login: demo / demo123
- Dashboard met statistieken, kaart, afsprakenlijst
- Werkgebied visualisatie
- Foto upload interface

### Klant Portal (/mijn-dak)
- Persoonlijk dakoverzicht met visuele diagram
- Documenten (garanties, facturen, rapporten)
- Fotogalerij van eigen project
- Meldingen functionaliteit

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Taal**: TypeScript
- **Styling**: Tailwind CSS
- **Animaties**: Framer Motion
- **Formulieren**: React Hook Form + Zod
- **Icons**: Lucide React

## 📁 Project Structuur

```
app/
├── admin/              # Admin panel
│   ├── page.tsx        # Login pagina
│   └── dashboard/      # Dashboard
├── mijn-dak/           # Klant portal
│   ├── page.tsx        # Login
│   └── dashboard/      # Dashboard
├── dakenkennis/        # Blog
│   ├── page.tsx        # Overzicht
│   └── [slug]/         # Artikel detail
├── layout.tsx          # Root layout met fonts
├── page.tsx            # Home pagina
└── globals.css         # Global styles

components/             # React components
├── navigation.tsx
├── hero.tsx
├── storm-alert.tsx
├── services.tsx
├── projects.tsx
├── material-configurator.tsx
├── seasonal-tips.tsx
├── trust-row.tsx
├── testimonials.tsx
├── contact.tsx
├── footer.tsx
└── cookie-banner.tsx

lib/
├── utils.ts           # Utility functies
└── ...

types/
└── index.ts           # TypeScript types

public/images/dakdekker/
├── hero/              # Hero afbeeldingen
├── services/          # Service afbeeldingen
├── projects/          # Project afbeeldingen
├── team/              # Team foto's
└── icons/             # Iconen en badges
```

## 🎨 Kleurenpalet

| Naam | Kleur | Gebruik |
|------|-------|---------|
| Roof Slate | #475569 | Primaire tekst, headers |
| Safety Orange | #ea580c | CTA's, accenten, hover states |
| Sky Blue | #0ea5e9 | Trust elementen, links |
| Cloud White | #f8fafc | Achtergronden |
| Storm Gray | #334155 | Footer, donkere secties |
| Emergency Red | #dc2626 | Spoed, waarschuwingen |

## 📸 Afbeeldingen

### Lokale Afbeeldingen Setup

Alle afbeeldingen worden lokaal geserveerd vanuit `/public/images/dakdekker/`:

```
/public/images/dakdekker/
├── hero/
│   ├── sunset-roof.jpg
│   ├── worker-ladder.jpg
│   └── skyline.jpg
├── services/
│   ├── repair-leak.jpg
│   ├── new-tiles.jpg
│   ├── gutter-cleaning.jpg
│   ├── solar-roof.jpg
│   ├── chimney.jpg
│   └── insulation.jpg
├── projects/
│   ├── before-storm.jpg
│   ├── after-renovation.jpg
│   ├── modern-house.jpg
│   ├── traditional-house.jpg
│   ├── commercial-building.jpg
│   └── detail-work.jpg
├── team/
│   ├── foreman.jpg
│   └── worker-1.jpg
└── icons/
    ├── guarantee-badge.png
    └── certification.png
```

### Afbeeldingen Downloaden

Gebruik het meegeleverde script om afbeeldingen te downloaden:

```bash
node download-images.js
```

Of download handmatig van [Unsplash](https://unsplash.com) en plaats in de juiste mappen.

## 🚀 Installatie & Gebruik

### Vereisten
- Node.js 18+
- npm of yarn

### Installatie

```bash
# Installeer dependencies
npm install

# Start development server
npm run dev

# Build voor productie
npm run build

# Download afbeeldingen
npm run download-images
```

### Environment Variables

Maak een `.env.local` bestand aan (indien nodig):

```env
# Voor statische export (geen server nodig)
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## 📱 Responsief Ontwerp

- **Mobile**: < 640px - Single column, sticky call button
- **Tablet**: 640px - 1024px - 2 kolommen
- **Desktop**: > 1024px - Volledige asymmetrische layouts

## 🔒 GDPR/Privacy

- Cookie consent banner met voorkeuren
- Demo melding in footer ("Geen echte data")
- Privacybeleid placeholders

## 🎭 Animaties

- **Scroll-triggered**: Elementen "glijden" in met rotatie (Roof Angle Design)
- **Hover effects**: Knoppen met "tile placement" animatie
- **Ken Burns**: Langzame zoom op hero afbeeldingen
- **Phone ringing**: Pulsatie op telefoon iconen
- **Seizoensgebonden**: Vallende bladeren (herfst), sneeuw (winter)

## 📝 Content (Nederlands)

Alle content is in het Nederlands en gericht op:
- Regio: Utrecht, Hilversum, Amersfoort, Breukelen
- Tone of voice: Deskundig, beschermend, betrouwbaar
- USP's: "Sinds 1998", "Gratis inspectie", "10 jaar garantie"

## 🔧 Customization

### Kleuren aanpassen
Bewerk `tailwind.config.ts`:

```typescript
colors: {
  "roof-slate": "#uw-kleur",
  "safety-orange": "#uw-kleur",
  // etc.
}
```

### Bedrijfsinformatie aanpassen
Bewerk `lib/utils.ts`:

```typescript
export const companyInfo = {
  name: "Uw Bedrijfsnaam",
  phone: "uw-telefoon",
  // etc.
};
```

## 📄 Licentie

Dit is een demo project voor demonstratie doeleinden.

## ⚠️ Demo Omgeving

Deze website is een demonstratie en bevat:
- Geen echte contactgegevens
- Demo login credentials (demo/demo123)
- Placeholder afbeeldingen
- Gesimuleerde data

Voor productiegebruik:
1. Vervang alle placeholder content
2. Update bedrijfsinformatie
3. Voeg echte afbeeldingen toe
4. Configureer formulieren voor echte verzending
5. Test alle functionaliteit grondig

---

**Dakwerken Van der Berg** - "Uw dak, ons vak" 🏠
