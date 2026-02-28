You are an expert Next.js 14 developer and UI/UX designer specializing in electrical services and emergency trade websites. Build a complete, high-energy demo website for a Dutch electrician company ("Elektricien") called "Stroom & Veiligheid Elektro" based in Eindhoven/Rotterdam area.

**CRITICAL REQUIREMENTS:**
- NO device toggle/responsive switcher
- ALL IMAGES LOCAL (public/images/elektricien/) - NO external URLs
- **FLOATING CTA BUTTON (GLOBAL):** Create a floating action button component (`FloatingCTA.tsx`) that appears on ALL pages. Position: bottom-right (desktop) or bottom-center (mobile). Design: Circular with electric blue glow (#2563eb), pulsing animation (box-shadow pulse every 2 seconds), icon (Zap/Lightning bolt from Lucide), text "Direct Contact". On hover: scale up + glow intensifies. On click: links to external URL `https://techsolutionsutrecht.nl/contact` (opens in new tab). This button must be imported in layout.tsx so it appears on every route (/admin, /portal, /blog, etc. except it can be hidden in /admin if logical). Use high z-index (z-50) and backdrop-blur for the button background.
- **DEMO CONTACT INFO:** ALL contact details must be clearly marked as DEMO/SAMPLE:
  - Phone: "020-1234567 (DEMO)"
  - Email: "demo@elektro-voorbeeld.nl (DEMO)"
  - Address: "DEMO Straat 123, 1234 AB Eindhoven (DEMO)"
  - KVK: "12345678 (DEMO)"
  - BTW: "NL001234567B01 (DEMO)"
  - Add visual label "VOORBEELD/DEMO" near logo or in header

**TECH STACK:**
- Next.js 14 (App Router), TypeScript, Tailwind CSS
- Framer Motion (energetic animations - bouncy, electric feel)
- Lucide React (icons: Zap, Plug, Battery, Home, etc.)
- next/image (unoptimized: true)

**DESIGN REQUIREMENTS (ELECTRIC/ENERGY AESTHETIC):**
- Colors: Electric Blue (#2563eb), Warning Yellow (#facc15), Circuit Dark (#0f172a), White (#ffffff), Safety Orange (#f97316 for warnings)
- Typography: "Rajdhani" for headings (tech/engineering feel), "Inter" for body
- Visual Motifs: 
  - Circuit board lines (subtle SVG background patterns)
  - Lightning bolt shapes (clip-path for images)
  - "Electric pulse" dividers (lines with glowing dots)
  - Neon glow effects (box-shadow: 0 0 20px rgba(37,99,235,0.5))
- Shapes: 
  - Hexagons (honeycomb pattern for service icons)
  - Lightning bolt clip-path for hero image
  - Angled 15-degree skews on cards (dynamic energy)

**SPECIFIC FEATURES FOR ELECTRICIAN INDUSTRY:**

1. **Hero Section (High Energy):**
   - Background: Dark circuit pattern with animated "electricity flowing" lines (SVG animation or CSS keyframes)
   - Main image: Electrician with tools (local: `/images/elektricien/hero/electrician-work.jpg`) with clip-path: polygon(10% 0, 100% 0, 90% 100%, 0% 100%) (parallelogram)
   - Headline: "Krachtig aangesloten" with "Krachtig" in Electric Blue with glow animation
   - 24/7 Badge: Pulsing red dot with "24/7 Spoedhulp" text floating near header
   - Stats row: "⚡ < 30 min reactie", "🔌 15+ jaar ervaring", "🏠 5000+ klanten" (all DEMO data)

2. **Emergency Section:**
   - Prominent banner at top (can be closed): "Stroomstoring? Bel direct: 020-1234567 (DEMO)"
   - Electric "spark" animation on border
   - Big red emergency button: "SPOED: Stroom eruit?" linking to tel: (but marked as demo)

3. **Services (Hexagon Grid):**
   - 6 services in honeycomb layout:
     - Noodhulp (Emergency)
     - Meterkast vervangen (Fuse box)
     - Laadpaal installatie (EV charging - very current/trending)
     - Zonnepanelen aansluiten (Solar)
     - Groepenkast uitbreiden 
     - Smart home installatie
   - Each hexagon icon with electric blue glow on hover
   - Connection lines animate between them on scroll (like circuits connecting)

4. **EV Charging Special (Trending Feature):**
   - Dedicated section for "Laadpaal thuis" (Home charging station)
   - Before/After: Standard outlet vs. Wallbox installation
   - "Bereken uw laadvermogen" tool (simple calculator: km per dag -> kW advies)

5. **Safety Check Tool:**
   - Interactive checklist: "Is uw meterkast veilig?"
   - 5 yes/no questions about old fuse boxes, aluminum wiring, etc.
   - Result: Risk level (Green/Orange/Red) with "Plan inspectie" CTA

6. **Portfolio/Realisaties:**
   - Grid of 6 projects: Meterkasten, Laadpalen, Smart homes
   - Hover effect: Blue electric overlay with "Bekijk" text
   - Filter: Noodklussen, Installatie, Renovatie

**ADMIN PANEL (/admin):**
- Login: demo/demo123
- Dashboard theme: Dark mode with electric blue accents (circuit UI)
- Features:
  - Emergency jobs list (red priority)
  - Calendar with appointment types (Installation=blue, Emergency=red, Maintenance=green)
  - Stock/inventory widget (demo: "Kabels: 150m", "Groepen: 12 stuks")
  - Invoice generator demo (PDF preview)

**KLANT PORTAL (/mijn-stroom):**
- Login for demo clients
- "Mijn Installaties" overview with circuit diagram style display
- Energy usage chart (fake data, line graph showing kWh)
- Service history with electrician photos (local images)
- "Storing melden" emergency button

**BLOG (/kennis):**
- Topics: Veiligheid, Energie besparen, Smart Home, Laadpalen
- "Elektrische veiligheid in huis" checklist download

**GLOBAL FLOATING BUTTON SPECS:**
```typescript
// components/FloatingCTA.tsx
- Position: fixed bottom-6 right-6 (desktop), bottom-6 left-1/2 -translate-x-1/2 (mobile)
- Size: 16 (w-16 h-16) desktop, 14 mobile
- Background: bg-blue-600 with shadow-lg shadow-blue-500/50
- Animation: animate-pulse (subtle), plus hover:scale-110 transition
- Icon: <Zap className="w-8 h-8 text-white" fill="currentColor" />
- Text below icon on desktop: "Direct Contact" (small, white)
- onClick: window.open('https://techsolutionsutrecht.nl/contact', '_blank')
- z-index: 50
- Backdrop blur for container: backdrop-blur-sm bg-blue-600/90
IMAGE STRUCTURE (LOCAL):
plain
Copy
/public/images/elektricien/
  /hero/
    - electrician-tools.jpg (professional with safety gear)
    - meterkast-open.jpg (fuse box)
  /services/
    - ev-charging.jpg (Wallbox/car)
    - solar-connection.jpg (panels on roof)
    - smart-home.jpg (modern thermostat)
    - emergency-repair.jpg (night work with flashlight)
  /projects/
    - meterkast-before.jpg (old/dangerous)
    - meterkast-after.jpg (new/modern)
    - laadpaal-driveway.jpg (charging station)
  /icons/
    - safe-installation.png (badge)
DEMO CONTENT MARKING:
Header: Small red badge "DEMO WEBSITE"
Footer: "Alle contactgegevens zijn fictief (DEMO) - Voor dit project contact opnemen:"
Then your real link button to techsolutionsutrecht.nl
MICRO-INTERACTIONS:
Buttons: "Electric shock" effect on hover (subtle shake)
Page transitions: Flash/lightning effect (brief white screen flash)
Forms: Validation errors show "electric spark" animation on border
Scroll: Elements "power up" (fade in with blue glow)
DEPLOYMENT:
Static export
Floating button must persist across route changes (use layout.tsx)
All demo labels clearly visible
Include complete setup with the floating CTA component code and demo watermark component.