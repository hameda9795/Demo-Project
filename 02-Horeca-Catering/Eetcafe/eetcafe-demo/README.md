# Eetcafe De Demo

Een Next.js 14 demo website voor een casual dining cafe/bar in Utrecht, Nederland.

## Kenmerken

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Typografie**: Playfair Display (serif) + Inter (sans)
- **Design**: Asymmetrisch, brutalist maar warm, met royale negatieve ruimte

## Kleurenpalet

- Teal: `#0f766e`
- Warm Beige: `#f5f1e8`
- Charcoal: `#1a1a1a`
- Burnt Orange accent: `#c4785a`

## Demo Login

### Admin Panel
- Gebruikersnaam: `demo`
- Wachtwoord: `demo123`
- Features: Tafelreserveringen, Menu editor, Bestellingen

### Klant Portal
- Gebruikersnaam: `klant`
- Wachtwoord: `demo123`
- Features: Mijn reserveringen, Bestelgeschiedenis, Favorieten

## Installatie

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in je browser.

## Structuur

```
eetcafe-demo/
├── app/
│   ├── globals.css      # Global styles + fonts
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Main page component
├── public/
│   └── images/eetcafe/  # Local image placeholders
├── components/          # Reusable components
├── tailwind.config.ts   # Tailwind configuration
└── next.config.js       # Next.js configuration
```

## Afbeeldingen

Plaats lokale afbeeldingen in `/public/images/eetcafe/`:
- `hero-abstract.jpg` - Hero sectie achtergrond
- `texture-paper.jpg` - Papier textuur overlay

## Contact

Deze website is een demonstratie van TechSolutionsUtrecht.
