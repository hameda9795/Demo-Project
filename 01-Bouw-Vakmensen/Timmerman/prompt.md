You are an expert Next.js 14 developer and UI/UX designer specializing in artisanal craftsmanship websites. Build a complete, award-winning demo website for a Dutch carpenter ("Timmerman") called "Van den Berg Timmerwerken" based in Utrecht/Amersfoort area, specializing in custom furniture (maatwerk), renovations, and restoration.

**CRITICAL REQUIREMENTS (MANDATORY):**
- **NO device toggle/responsive switcher component**
- **ALL IMAGES MUST BE LOCAL ONLY**: Create `/public/images/timmerman/` structure with subfolders `/hero`, `/projects`, `/wood-types`, `/tools`, `/workshop`. Provide `download-images.js` script. Reference ONLY local paths.
- **FLOATING CTA BUTTON (GLOBAL)**: Create `FloatingCTA.tsx` appearing on ALL pages. Position: bottom-right (desktop: fixed bottom-6 right-6), bottom-center (mobile). Design: Circular button with wood grain texture background (CSS gradient mimicking oak grain), warm amber glow (#D4AF37). Icon: Hammer or Hand tool from Lucide. Text: "Direct Contact". On click: opens `https://techsolutionsutrecht.nl/contact` in new tab (noopener,noreferrer). Use z-50, backdrop-blur, shadow-amber-500/30, gentle breathing pulse animation.
- **DEMO CONTACT INFO (SAMPLE)**: ALL contact details MUST be clearly marked as DEMO:
  - Phone: "030-1234567 (DEMO - Voorbeeld)"
  - Email: "info@demo-timmerman.nl (DEMO)"
  - Address: "DEMO Houtstraat 45, 1234 AB Utrecht (Voorbeeldadres)"
  - KVK: "12345678 (DEMO nummer)"
  - BTW: "NL001234567B01 (Voorbeeld)"
  - Add red/amber "DEMO WEBSITE" badge in header near logo
- **HEADER NAVIGATION**: 
  - Left: Logo
  - Center: Home, Diensten (dropdown), Projecten, Over Ons, Blog, Contact
  - Right corner: Two subtle buttons: [🔒 Admin] (links to /admin) and [👤 Klant Login] (links to /portal). Style: text-sm, outline buttons, gray-600 hover:text-amber-700. On mobile: inside hamburger menu as "Admin" and "Mijn Account" links.
- **COPYRIGHT FOOTER**: Must include: "© 2025 Tech Solutions Utrecht. Alle intellectuele eigendomsrechten voorbehouden. Concept, design en ontwikkeling door Tech Solutions Utrecht." Plus HTML comment: <!-- © Tech Solutions Utrecht - Unauthorized copying prohibited -->

**TECH STACK:**
- Next.js 14 (App Router), TypeScript, Tailwind CSS
- Framer Motion (organic, smooth animations - "sanding" feel, wood grain growth)
- Swiper.js for project galleries
- Lucide React (icons: Hammer, TreePine, Ruler, PenTool)
- next/image (unoptimized: true)

**DESIGN REQUIREMENTS ("THE LIVING GRAIN" CONCEPT):**
- **Visual Theme**: Wood grain lines flowing through the design. Use SVG paths that "grow" on scroll connecting sections. Warm, artisanal, precision craftsmanship aesthetic.
- **Colors**: Warm Oak (#8B5A2B), Deep Walnut (#3E2723), Sawdust Cream (#F5F5DC), Steel Tool Gray (#4A5568), Varnish Amber (#D4AF37 for accents/CTAs)
- **Typography**: "Playfair Display" for headings (elegant craft feel), "Inter" for body. Load via next/font/google.
- **Shapes**: 
  - "Chisel-cut" angles: clip-path with sharp 15-degree angles on one side, organic curves on other
  - Wood plank separators: Horizontal bars with wood texture gradient
  - Dovetail joint shapes for icons/containers (trapezoid forms)
- **Textures**: Subtle wood grain background patterns (CSS gradients, NOT images), sawdust particle effects (CSS animation, very subtle)

**SPECIFIC FEATURES FOR TIMMERMAN INDUSTRY:**

1. **Hero Section (Craftsmanship Showcase):**
   - Full viewport height with parallax layers
   - Background: Workshop scene with depth (local: `/images/timmerman/hero/workshop-depth.jpg`)
   - **Wood Grain Overlay**: Semi-transparent SVG wood grain lines flowing from top-left to bottom-right, animating on scroll
   - Headline: "Vakmanschap dat blijft" (Craftsmanship that lasts) with "blijft" in amber color
   - Subhead: "Maatwerk in hout voor uw huis" (Custom woodwork for your home)
   - Two CTAs: "Bekijk projecten" (secondary, outline with wood texture border) and "Offerte aanvragen" (primary, amber fill)
   - Trust badges: "20 jaar ervaring", "Duurzaam hout", "Eigen werkplaats" (all DEMO data)

2. **Wood Type Selector (Interactive):**
   - Section title: "Kies uw houtsoort"
   - Horizontal scroll or grid of wood samples: Eiken (Oak), Walnoot (Walnut), Beuken (Beech), Grenen (Pine), Bamboe (Bamboo)
   - Each card: 
     - Image of wood grain texture (local, high-res macro shots)
     - Name, hardness rating (Janka scale visualization), color description
     - On hover: "Scratch test" animation (revealing deeper color)
     - Price indicator: € to €€€
   - Clicking selects it and updates a "Jouw keuze" sidebar that follows scroll

3. **Project Gallery (Realisaties) - Masonry with "Raw to Refined":**
   - Filter tabs: "Alle", "Maatwerk meubels", "Renovatie", "Restauratie", "Tuinhuisjes"
   - Layout: Asymmetric masonry (some wide, some tall)
   - **Unique hover effect**: 
     - Before hover: Image shows "raw wood" state (grayish, unfinished)
     - On hover: Smooth transition (like applying varnish) to "finished" state (rich colors)
     - Title slides up with dovetail joint underline animation
   - Images: `/images/timmerman/projects/cabinet-1.jpg`, `staircase-renovation.jpg`, `garden-house.jpg`, `restored-door.jpg` (all local)

4. **Joinery Techniques Showcase (Educational/Trust):**
   - Section: "Onze verbindingstechnieken" (Our joinery techniques)
   - Three interactive cards:
     - **Zwaluwstaart** (Dovetail): SVG animation showing how two pieces interlock
     - **Pen-en-gat** (Mortise-tenon): 3D-style rotation showing the joint
     - **Fingerjoint**: Stacked fingers interlocking animation
   - Each reveals "Waarom dit beter is dan schroeven" on click

5. **Maatwerk Configurator (Custom Furniture Builder):**
   - Interactive tool: "Ontwerp uw meubel"
   - Step 1: Choose type (Kast, Tafel, Bed, Deur, Trap)
   - Step 2: Select wood type (from selector above)
   - Step 3: Dimensions input (L x B x H) with visual ruler graphic
   - Step 4: Details (Lades? Deuren? Grepen?)
   - Result: Rough price estimate ("Vanaf €1.850") + "Vraag exacte offerte aan" button
   - Visual: Simple 2D/3D representation sketch style of the furniture piece

6. **Workshop Timeline (The Process):**
   - Horizontal scroll section showing the process: 
     1. Inventarisatie (Planning), 
     2. Ontwerp (Design with sketch animation), 
     3. Materiaal selectie (Wood choosing), 
     4. Vervaardiging (Crafting - tools animation), 
     5. Aflevering (Delivery)
   - Each step has icon and brief description

7. **Sustainability Calculator (Hout & Milieu):**
   - Tool: "Hoe duurzaam is uw keuze?"
   - Compare wood types vs plastic/metal
   - Show CO2 storage in wood (positive impact)
   - FSC certification badge animation
   - Result: "U bespaart X kg CO2" with tree icon

**ADMIN PANEL (/admin):**
- Login: demo/demo123 (pre-filled)
- Theme: Dark wood aesthetic (deep walnut background #3E2723, amber accents)
- Dashboard:
  - Stats: Huidige projecten, Offertes deze maand, Voorraad hout (board meters), Klanten
  - Wood inventory visualization: Stack of wood planks graphic showing remaining stock
  - Project timeline with phases (Ontwerp → Productie → Afwerking → Oplevering)
  - Recent projects table with wood type badges (Oak, Walnut, etc.)
  - Calendar with delivery dates
  - **Important**: Include "Offerte generator" button that shows how quotes are calculated (demo calculation)

**KLANT PORTAL (/mijn-project):**
- Login for demo clients
- "Mijn Meubel" tracking:
  - Visual timeline of THEIR specific furniture piece (with photos from workshop uploaded by carpenter)
  - Current phase highlighted (e.g., "Huidig: Schuren en afwerken")
  - Wood certificate download (PDF icon)
  - Delivery countdown
  - Direct message to craftsman (chat interface demo)

**BLOG (/werkplaats-nieuws):**
- Categories: Onderhoudstips, Houtsoorten, Restauratie, Duurzaamheid
- "Hoe onderhoud ik eiken meubels?" (care guide)
- "De geschiedenis van de zwaluwstaartverbinding" (craft history)
- Downloadable: "Houtsoorten vergelijkingstabel" (PDF)

**MICRO-INTERACTIONS & ANIMATIONS:**
- **Page load**: Elements "carve in" (clip-path reveal like a chisel cutting)
- **Scroll**: Wood grain lines grow and connect sections (SVG stroke-dashoffset animation)
- **Buttons**: On hover, background fills like wood stain being applied (from left to right, darkening)
- **Images**: Ken Burns effect subtle zoom (like examining wood grain)
- **Cursor**: Custom cursor that changes to "magnifying glass" over wood textures to see grain detail
- **Forms**: Input borders look like pencil lines that darken on focus

**IMAGE STRUCTURE (LOCAL - REQUIRED):**
/public/images/timmerman/
/hero/
- workshop-depth.jpg (warm lighting, tools hanging)
- hands-chiseling.jpg (close up craft)
- wood-grain-macro.jpg (texture)
/projects/
- cabinet-oak-finished.jpg
- cabinet-oak-raw.jpg (before)
- staircase-walnut.jpg
- garden-house-cedar.jpg
- restored-door-heritage.jpg
- custom-table-live-edge.jpg
/wood-types/
- oak-grain.jpg (macro texture)
- walnut-grain.jpg
- pine-grain.jpg
- bamboo-grain.jpg
/workshop/
- tools-wall.jpg
- sawing-process.jpg
- sanding-detail.jpg
- varnish-application.jpg
/icons/
- fsc-logo.png
- craftsmanship-badge.png
plain
Copy

**SETUP SCRIPT:**
Provide `setup-images.js` that downloads from Unsplash:
- workshop: https://images.unsplash.com/photo-1581147036324-c17ac41dd161?w=1200
- wood grain: https://images.unsplash.com/photo-1543446860-24757c244585?w=800
- hands working: https://images.unsplash.com/photo-1504198266287-1659872e6590?w=800
- etc.

**RESPONSIVE:**
- Mobile: Stacked layouts, wood grain pattern simplifies, click-to-call button sticky bottom (amber)
- Tablet: 2-column grids
- Desktop: Full asymmetric layouts with grain line connections

**CONTENT (DUTCH - A2/B1 LEVEL):**
- Tone: Craftsman expertise, warm, reliable, traditional but modern ("Oude ambacht, nieuwe techniek")
- Areas: Utrecht, Amersfoort, Hilversum, Leusden
- USP: "Handgemaakt in Nederland", "FSC gecertificeerd hout", "Levenslange garantie op verbindingen"

**GDPR/COMPLIANCE:**
- Cookie banner (functional)
- Footer: "DEMO WEBSITE - Geen echte data wordt verwerkt"
- Privacy policy link (dummy)

**DEPLOYMENT:**
- Static export ready (output: 'export')
- All images in public folder
- Fonts via next/font (no external requests)

Include complete file structure with App Router, components in components/sections/ (Hero, WoodSelector, Gallery, Configurator, Process, Blog), proper TypeScript interfaces, and extensive comments in English explaining the "Living Grain" design system.