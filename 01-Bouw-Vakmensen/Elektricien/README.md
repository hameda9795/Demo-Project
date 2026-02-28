# Stroom & Veiligheid Elektro - Demo Website

Een complete, high-energy demo website voor een Nederlands elektricien bedrijf gevestigd in de Eindhoven/Rotterdam regio.

## 🚀 Project Overview

Deze Next.js 14 applicatie is een professionele demonstratie van een elektricien website met:

- **24/7 Spoedhulp** - Prominente spoedmeldingen en contactmogelijkheden
- **Hexagon Service Grid** - Visuele weergave van diensten
- **Laadpaal Calculator** - Interactieve tool voor EV charging advies
- **Veiligheid Check** - Interactieve checklist voor meterkast veiligheid
- **Admin Dashboard** - Beheersysteem voor elektriciens
- **Klantenportal** - Persoonlijke omgeving voor klanten

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Charts:** Recharts

## 🎨 Design Features

### Colors
- Electric Blue: `#2563eb`
- Warning Yellow: `#facc15`
- Circuit Dark: `#0f172a`
- Safety Orange: `#f97316`

### Typography
- **Headings:** Rajdhani (tech/engineering feel)
- **Body:** Inter

### Animations
- Electric pulse glow effects
- Circuit pattern backgrounds
- Smooth scroll reveals
- Hover micro-interactions

## 📁 Project Structure

```
app/
├── page.tsx              # Home page with all sections
├── layout.tsx            # Root layout with navigation & footer
├── globals.css           # Global styles & animations
├── admin/
│   └── page.tsx          # Admin dashboard (login: demo/demo123)
├── mijn-stroom/
│   └── page.tsx          # Client portal
└── kennis/
    └── page.tsx          # Knowledge base / blog

components/
├── FloatingCTA.tsx       # Global floating action button
├── DemoWatermark.tsx     # DEMO banner
├── Navigation.tsx        # Site navigation
├── Footer.tsx            # Site footer
└── sections/
    ├── Hero.tsx          # Hero section with animations
    ├── EmergencyBanner.tsx # Emergency call banner
    ├── Services.tsx      # Services hexagon grid
    ├── EVCharging.tsx    # EV charging section + calculator
    ├── SafetyCheck.tsx   # Interactive safety checklist
    └── Portfolio.tsx     # Project portfolio grid

public/images/elektricien/
├── hero/                 # Hero images
├── services/             # Service images
├── projects/             # Project images
└── icons/                # Icon assets
```

## 🔑 Key Features

### Global Floating CTA Button
- Position: Fixed bottom-right (desktop) / bottom-center (mobile)
- Pulsing electric blue glow animation
- Links to: `https://techsolutionsutrecht.nl/contact`
- Hidden on admin pages

### Demo Contact Info (All marked as DEMO)
- Phone: 020-1234567 (DEMO)
- Email: demo@elektro-voorbeeld.nl (DEMO)
- Address: DEMO Straat 123, 1234 AB Eindhoven (DEMO)
- KVK: 12345678 (DEMO)
- BTW: NL001234567B01 (DEMO)

### Pages

#### Home (/)
- Hero with animated electricity lines
- Emergency banner (closable)
- Services hexagon grid
- EV Charging calculator
- Safety check interactive tool
- Portfolio with filters

#### Admin (/admin)
- Login: `demo` / `demo123`
- Emergency jobs list
- Calendar with appointments
- Inventory widget
- Revenue chart
- Invoice generator demo

#### Klant Portal (/mijn-stroom)
- Circuit diagram style installation overview
- Energy usage chart (kWh)
- Service history
- Document downloads
- Emergency button

#### Kennisbank (/kennis)
- Article grid with categories
- Featured article section
- Downloadable checklist

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

### Build Output

Static export configured to `dist/` folder.

## ⚡ Electric Design Elements

- **Circuit patterns:** SVG background animations
- **Hexagon shapes:** Service cards with clip-path
- **Lightning bolts:** Parallelogram clip-path for images
- **Neon glows:** Box-shadow animations
- **Electric pulses:** Animated dividers with glowing dots
- **Spark animations:** Form validation effects

## 📝 Demo Markings

All contact information is clearly marked as DEMO:
- Red banner at top of every page
- Footer disclaimer
- All phone numbers include "(DEMO)"
- All email addresses include "(DEMO)"

## 🔗 External Link

Real contact link for this project:
- `https://techsolutionsutrecht.nl/contact`

---

**Note:** This is a demonstration website. All contact information is fictional.
