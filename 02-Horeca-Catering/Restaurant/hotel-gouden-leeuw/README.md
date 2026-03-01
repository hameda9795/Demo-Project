# Hotel De Gouden Leeuw

Een complete, immersive demo website voor een boutique 4-sterren hotel in Utrecht.

## Project Overzicht

**Hotel De Gouden Leeuw** is een Next.js 14 applicatie met een luxe hospitality design genaamd "The Art of Arrival". De website biedt een volledige ervaring met kamers, restaurant, spa faciliteiten, boekingssysteem, admin panel en gastenportaal.

## Belangrijke Notitie

⚠️ **DIT IS EEN DEMO WEBSITE**

Alle inhoud, contactgegevens, prijzen en boekingen zijn fictief en uitsluitend bedoeld voor demonstratiedoeleinden. Er kunnen geen echte reserveringen worden gedaan.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Taal**: TypeScript
- **Styling**: Tailwind CSS
- **Animaties**: Framer Motion
- **Carousels**: Swiper.js
- **Icons**: Lucide React
- **Charts**: Recharts
- **Datum handling**: date-fns

## Design Systeem

### Kleuren
- **Deep Midnight Navy**: `#1e3a5f`
- **Champagne Gold**: `#d4af37`
- **Warm Cream**: `#faf9f6`
- **Velvet Burgundy**: `#722f37`

### Typografie
- **Headings**: Cormorant Garamond (elegant serif)
- **Body**: Montserrat (modern sans-serif)

## Project Structuur

```
hotel-gouden-leeuw/
├── app/                    # Next.js App Router
│   ├── (main)/            # Main layout (publieke pagina's)
│   ├── admin/             # Admin dashboard
│   ├── portal/            # Guest portal
│   ├── utrecht-tips/      # Blog pagina
│   ├── contact/           # Contact pagina
│   ├── layout.tsx         # Root layout met fonts
│   ├── globals.css        # Global styles
│   └── not-found.tsx      # 404 pagina
├── components/
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx
│   │   ├── RoomGrid.tsx
│   │   ├── Concierge.tsx
│   │   ├── RestaurantSpa.tsx
│   │   ├── BookingCalendar.tsx
│   │   ├── GuestJourney.tsx
│   │   └── Reviews.tsx
│   ├── shared/            # Shared components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── FloatingCTA.tsx
│   │   └── CookieConsent.tsx
│   └── ui/                # UI components (indien nodig)
├── lib/
│   ├── utils.ts           # Utility functions
│   └── data.ts            # Demo data
├── types/
│   └── index.ts           # TypeScript types
├── public/
│   └── images/hotel/      # Lokale afbeeldingen
│       ├── exterior/
│       ├── lobby/
│       ├── rooms/
│       ├── restaurant/
│       ├── spa/
│       └── amenities/
├── scripts/
│   └── download-images.js # Afbeelding download script
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Installatie

```bash
# Installeer dependencies
npm install

# Download afbeeldingen
npm run download-images

# Start development server
npm run dev

# Build voor productie
npm run build
```

## Pagina's

| Route | Beschrijving |
|-------|--------------|
| `/` | Homepage met alle secties |
| `/admin/` | Admin dashboard (login: demo/demo123) |
| `/portal/` | Gastenportaal (persoonlijk dashboard) |
| `/utrecht-tips/` | Blog met tips over Utrecht |
| `/contact/` | Contact pagina met formulier |

## Features

### Homepage Secties
1. **Hero** - Boeking widget met datum selectie
2. **RoomGrid** - Archway gallery met kamers
3. **Concierge** - Chat interface en kaart
4. **RestaurantSpa** - Split screen preview
5. **BookingCalendar** - Beschikbaarheidskalender
6. **GuestJourney** - Timeline ervaring
7. **Reviews** - Scrolling testimonials

### Admin Dashboard
- Bezettingsgraad overzicht
- Dagelijkse aankomsten
- Housekeeping status
- Omzet grafieken
- Boekingen tabel
- Restaurant reserveringen

### Gastenportaal
- Digitale sleutel simulatie
- Room service bestellen
- Spa afspraken
- Late checkout aanvragen
- Persoonlijke city guide
- Berichten met receptie

## DEMO Gegevens

Alle contactgegevens zijn fictief:
- Telefoon: 030-1234567 (DEMO)
- Email: info@demo-hotel.nl (DEMO)
- Adres: DEMO Domplein 1, 3512 JC Utrecht
- KvK: 87654321 (DEMO)

## Credits

© 2025 Tech Solutions Utrecht  
Concept, design en ontwikkeling door Tech Solutions Utrecht.

---

**LET OP**: Dit is een demo project voor demonstratiedoeleinden.
