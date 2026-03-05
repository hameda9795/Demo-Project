# VakantieHuizen Pro - B&B Verhuur Demo Website

Een premium Next.js 14 demo website voor een Bed & Breakfast / Vakantiewoning beheer bureau.

## Project Identiteit
- **Bedrijfsnaam:** VakantieHuizen Pro
- **Tagline:** "Uw woning, onze zorg, tevreden gasten"
- **Branche:** Vastgoed-Makelaardij gespecialiseerd in B&B verhuur
- **Taal:** Nederlands (B1 niveau)

## Tech Stack
- Next.js 14 (App Router)
- React 18 + TypeScript
- Tailwind CSS
- Framer Motion (animaties)
- Lucide React (icons)
- shadcn/ui componenten
- date-fns (kalender logica)
- Recharts (grafieken)

## Kleurenpalet (Hospitality Luxury)
- Terracotta: #E07A5F (primair)
- Sage Green: #81B29A (secundair)
- Cream: #F2F0E9 (achtergrond)
- Charcoal: #3D405B (tekst)
- Coral: #F2CC8F (accent)

## Belangrijkste Functies

### 1. Asymmetrische Hero
- Full-width achtergrond met overlappende boekingskaart
- Positioneert rechtsonder op desktop, stacked op mobiel

### 2. Drijvende Navigatie
- Zijbalk op desktop met tooltips
- iOS-stijl bottom navigation op mobiel

### 3. Authenticatie Systeem
- Login pagina met demo credentials (demo / demo123)
- Gastenportaal met countdown timer
- Eigenaarsdashboard met statistieken en grafieken

### 4. Boeking Widget
- Glasmosfisme design met backdrop blur
- Datum selectie en gasten teller
- Prijs berekening inclusief toeslagen

### 5. Vakantiewoningen Overzicht
- Filter systeem (locatie, prijs, voorzieningen)
- Grid layout met property cards
- Wenslijst functionaliteit met animatie

### 6. Property Detail Pagina
- Galerij met lightbox
- Tabs voor beschikbaarheid, reviews en locatie
- Sticky booking widget

### 7. Voor Eigenaren Pagina
- Revenue calculator met slider
- Prijzen tabel
- Testimonials

### 8. Contact Pagina
- Contact formulier
- WhatsApp CTA
- FAQ accordion

### 9. Drijvende CTA
- Altijd zichtbaar op alle pagina's
- Pulsatie animatie
- Link naar techsolutionsutrecht.nl

## Pagina's
1. `/` - Home
2. `/vakantiehuizen` - Overzicht
3. `/vakantiehuizen/[id]` - Detail
4. `/voor-eigenaren` - Voor eigenaren
5. `/blog` - Blog
6. `/contact` - Contact
7. `/login` - Inloggen
8. `/gastenportaal` - Gasten portaal
9. `/eigenaarsdashboard` - Eigenaars dashboard

## Demo Inloggegevens
- Email: demo@techsolutionsutrecht.nl
- Wachtwoord: demo123

## Contact Gegevens
- Email: info@techsolutionsutrecht.nl
- Telefoon: +31 20 555 0199
- Adres: Prinsengracht 456, 1017 KE Amsterdam
- Website: www.techsolutionsutrecht.nl

## Footer Tekst (Vereist)
"Dit is een demo versie en alle intellectuele eigendomsrechten behoren toe aan techsolutionsutrecht"
"© 2024 VakantieHuizen Pro - Gebouwd door www.techsolutionsutrecht.nl"

## Installatie
```bash
npm install
npm run build
```

De statische export wordt gegenereerd in de `dist` map.
