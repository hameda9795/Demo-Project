You are an expert Next.js 14 developer and UI/UX designer specializing in interior design and painting service websites. Build a complete, vibrant, professional demo website for a Dutch painting company ("Schilder") called "Kleur & Verf Meesters" based in Den Haag/Rotterdam area.

**CRITICAL REQUIREMENTS (LAHZ SHAOD):**
- NO device toggle/responsive switcher component
- **ALL IMAGES MUST BE LOCAL ONLY**: Create complete `/public/images/schilder/` folder structure. Provide `setup-images.js` script to download from Unsplash. Reference ONLY local paths like `/images/schilder/hero/painter-roller.jpg`
- **FLOATING CTA BUTTON (GLOBAL)**: Create `FloatingCTA.tsx` component appearing on ALL pages. Position: bottom-right (desktop) or bottom-center (mobile). Design: Circular with paint bucket/drop icon (PaintBucket from Lucide), vibrant color-changing gradient (blue → purple → pink subtle shift), gentle pulse animation. Text: "Offerte Aanvragen". On click: opens `https://techsolutionsutrecht.nl/contact` in new tab. Use z-50, backdrop-blur, shadow-xl.
- **DEMO CONTACT INFO (SAMPLE)**: ALL contact details MUST be clearly marked as DEMO:
  - Phone: "070-1234567 (DEMO - Voorbeeld)"
  - Email: "info@demo-schilder.nl (DEMO)"
  - Address: "DEMO Straat 12, 2585 AB Den Haag (Voorbeeldadres)"
  - KVK: "12345678 (DEMO nummer)"
  - BTW: "NL001234567B01 (Voorbeeld)"
  - Add prominent red/amber "DEMO WEBSITE" badge in header, persistent banner, or watermark

**TECH STACK:**
- Next.js 14 (App Router), TypeScript, Tailwind CSS
- Framer Motion (smooth color transitions, brush stroke animations)
- Swiper.js for room galleries
- Lucide React (icons: PaintBucket, Paintbrush, Palette, Home, Brush, CheckCircle2)
- next/image (unoptimized: true)

**DESIGN REQUIREMENTS (COLORFUL/CLEAN AESTHETIC):**
- Colors: Primary Palette (Teal #0d9488, Coral #f97316, Soft Yellow #facc15), Neutrals (White #ffffff, Off-white #fafaf9, Gray #64748b), Accent (Deep Blue #1e40af for trust)
- Typography: "Poppins" for headings (friendly, modern), "Inter" for body
- Visual Motifs:
  - Paint brush stroke dividers (SVG paths)
  - Color swatches/circles as design elements
  - Paint roller animations (horizontal wipe reveals)
  - Drop/splatter accents (subtle)
  - Smooth gradients (soft transitions between sections)
- Shapes: Rounded corners (2xl/3xl), organic blob shapes for image containers, paint drip effects on cards

**SPECIFIC FEATURES FOR SCHILDER INDUSTRY:**

1. **Hero Section (Color Impact):**
   - Split screen: Left side white/clean, Right side vibrant painted wall (local image: `/images/schilder/hero/color-wall.jpg`)
   - Headline: "Geef uw ruimte kleur" with "kleur" changing colors (animated gradient text)
   - Paint roller animation: Horizontal line that "paints" across screen on load
   - Trust badges: "✓ 5 Jaar garantie", "✓ Streeploos resultaat", "✓ Binnen 1 week gestart"
   - CTA buttons: "Gratis kleuradvies" (primary), "Bekijk prijzen" (secondary)
   - DEMO badge floating top-right corner

2. **Kleurenkiezer Tool (Color Visualizer):**
   - Interactive room painter:
     - Select room type (Woonkamer, Slaapkamer, Keuken, Badkamer)
     - Upload photo (simulated with pre-loaded room images: `/images/schilder/rooms/empty-living.jpg`)
     - Click wall areas to apply colors from palette
     - Color palette: 12 curated colors (white, off-white, gray, navy, green, terracotta, etc.)
     - Shows paint brand simulation (historische kleuren)
   - "Bekijk in uw huis" button (simulated camera upload UI)
   - Price estimate updates based on room size selection

3. **Before/After Comparisons (Essential):**
   - 4 transformations:
     - Woonkamer (beige → modern gray)
     - Keukenkastjes (wood → white)
     - Buitengevel (faded → fresh white)
     - Slaapkamer (dark → light pastel)
   - Interactive slider (local images: `/images/schilder/before/room-beige.jpg`, `/images/schilder/after/room-gray.jpg`)
   - Labels: "Voor" and "Na" with brush icons
   - Descriptive text below each: "Binnenschilderwerk - Den Haag"

4. **Afnemer Calculator (Paint Calculator):**
   - Smart tool: "Hoeveel verf heeft u nodig?"
   - Inputs: 
     - Oppervlakte m² (slider or input)
     - Aantal lagen (1-3)
     - Ondergrond (Glad/Poreus)
     - Dekkingsgraad verf (keuze: Goed/Dekkend)
   - Output: Liters needed + Estimated price range + "Bestel offerte" button
   - Visual paint bucket fills up as you calculate

5. **Finish Types Explainer:**
   - Visual cards showing different paint finishes:
     - Mat (Muurverf) - Living rooms/bedrooms
     - Satijn (Lakverf) - Kitchens/bathrooms
     - Hoogglans (Lak) - Doors/trim
   - Interactive: Hover shows texture close-up (local images)
   - "Waar gebruik ik welke?" guide

6. **Services (Paint Cards):**
   - 5 services with color-coded headers:
     - Binnenschilderwerk (Teal)
     - Buitenschilderwerk (Coral)
     - Behang verwijderen/aanbrengen (Yellow)
     - Houtrot saneren (Brown)
     - Latex spuiten (Purple)
   - Each card has:
     - Icon in paint circle
     - Before/After thumbnail
     - "Vanaf €X,XX per m²" pricing indication
     - "Meer info" expanding accordion

7. **Seasonal Timing Advisor:**
   - "Wanneer schilderen?"
   - Visual calendar showing best months:
     - Buiten: April-September (green)
     - Binnen: Hele jaar (blue)
   - Weather widget integration (decorative)
   - "Plan nu voor het voorjaar" CTA

8. **Kwaliteit Garantie Section:**
   - Trust signals with icons:
     - "Streeploos werk"
     - "Binnen spettervrij garantie"
     - "5 jaar garantie op buitenwerk"
     - "Erkend schilder" (Schildersbedrijf certificering)
   - Process timeline: 1. Advies → 2. Voorbereiding → 3. Schilderen → 4. Oplevering

**ADMIN PANEL (/admin):**
- Login: demo/demo123
- Theme: Clean white with color accents
- Dashboard:
  - Project pipeline: Offerte aangevraagd → In planning → Uitvoering → Afgerond (Kanban style)
  - Color stock: Paint inventory (RAL colors, liters remaining)
  - Calendar with scheduled jobs (color-coded by type: Interior=blue, Exterior=orange, Emergency=red)
  - Photo upload for before/after documentation
  - Quote generator (price calculator with profit margins)

**KLANT PORTAL (/mijn-project):**
- Login for demo clients
- "Mijn Schilderwerk" overview:
  - Project status bar (visual progress: 25%, 50%, 75%, 100%)
  - Selected color codes (RAL codes listed)
  - Scheduled dates (when do painters arrive?)
  - Photo progress updates (daily work photos)
  - Final invoice preview (demo)
  - "Vraag aanpassing aan" button

**BLOG (/verftips):**
- Categories: Kleuradvies, Onderhoud, Trends, DIY (basic tips)
- "Kleur van het jaar" article (trending)
- "Hoe bereken ik mijn oppervlakte?" guide
- Downloadable: "Schilderwerk checklist" (PDF)

**IMAGE STRUCTURE (LOCAL - REQUIRED):**
/public/images/schilder/
/hero/
- painter-roller.jpg (professional with roller)
- color-wall.jpg (vibrant painted wall)
- paint-cans.jpg (styled product shot)
/before/
- living-beige.jpg (dated interior)
- kitchen-wood.jpg (old cabinets)
- exterior-faded.jpg (weathered facade)
- bedroom-dark.jpg (dark walls)
/after/
- living-gray.jpg (modern)
- kitchen-white.jpg (fresh painted)
- exterior-fresh.jpg (new white)
- bedroom-pastel.jpg (light colors)
/rooms/
- empty-living.jpg (for color visualizer)
- empty-bedroom.jpg
- empty-kitchen.jpg
- detail-brush.jpg (close up work)
/finishes/
- mat-finish.jpg (texture)
- satin-finish.jpg
- gloss-finish.jpg
/projects/
- project-1.jpg (modern living)
- project-2.jpg (classic exterior)
- project-3.jpg (kitchen cabinets)
- project-4.jpg (commercial space)
/icons/
- quality-badge.png
- guarantee-stamp.png
plain
Copy

**FLOATING CTA COMPONENT SPECS:**
```typescript
// components/FloatingCTA.tsx
- Position: fixed bottom-6 right-6 (desktop), bottom-4 left-1/2 -translate-x-1/2 (mobile)
- Shape: rounded-full (pill/circle hybrid - wider on desktop with text, icon-only circle on mobile)
- Background: gradient-to-r from-teal-500 to-blue-600 with animate-pulse (subtle)
- Shadow: shadow-xl shadow-teal-500/30
- Backdrop: backdrop-blur-md bg-white/10
- Icon: <PaintBucket className="w-6 h-6 text-white" fill="currentColor" />
- Text desktop: "Offerte Aanvragen" (white, font-semibold, ml-2)
- Hover: scale-105, shadow intensifies, gradient shifts
- onClick: window.open('https://techsolutionsutrecht.nl/contact', '_blank')
- z-index: 50
- Border: border-2 border-white/20
DEMO CONTENT MARKING (VERY CLEAR):
Header: Fixed red banner "⚠️ DEMO WEBSITE - Alle gegevens zijn fictief"
Footer: "Dit is een demonstratie. Voor echte diensten bezoek: [button to your site]"
Contact page: Large warning box "DEMO - Geen echte contactgegevens"
Phone: "070-123 4567 (DEMO)"
Email: formatted with "(Voorbeeld)" suffix
All prices marked as "Indicatie prijzen (DEMO)"
MICRO-INTERACTIONS:
Scroll: Colorful elements fade in with slight Y translation
Buttons: On hover, background "brushes" in from left (wipe effect using pseudo-element)
Images: Subtle zoom on hover (scale 105%)
Color swatches: Scale up + shadow on hover/selection
Form inputs: Focus shows colored border that "draws" itself (width animation)
DEPLOYMENT:
Static export (output: 'export')
All images local in public folder
Floating CTA in root layout.tsx
Demo watermark/badge component on every page
Include complete file structure, the floating CTA with external link, demo watermark component, and local image setup script.