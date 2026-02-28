You are an expert Next.js 14 developer and UI/UX designer specializing in luxury interior finishing and plastering websites. Build a complete, sophisticated, seamless demo website for a Dutch plastering company ("Stukadoor") called "Perfect Stucwerk" based in Amsterdam/Utrecht area.

**CRITICAL REQUIREMENTS (LAHZ SHAOD):**
- NO device toggle/responsive switcher component
- **ALL IMAGES MUST BE LOCAL ONLY**: Create complete `/public/images/stukadoor/` folder structure. Provide `setup-images.js` script to download from Unsplash. Reference ONLY local paths like `/images/stukadoor/hero/smooth-wall.jpg`
- **FLOATING CTA BUTTON (GLOBAL)**: Create `FloatingCTA.tsx` component appearing on ALL pages. Position: bottom-right (desktop) or bottom-center (mobile). Design: Circular with trowel/wall icon (Trowel or Square from Lucide), warm sand/beige gradient (#d6d3d1 to #a8a29e), smooth pulse animation (like spreading plaster). Text: "Offerte Aanvragen". On click: opens `https://techsolutionsutrecht.nl/contact` in new tab. Use z-50, backdrop-blur, shadow-stone-500/30.
- **DEMO CONTACT INFO (SAMPLE)**: ALL contact details MUST be clearly marked as DEMO:
  - Phone: "020-1234567 (DEMO - Voorbeeld)"
  - Email: "info@demo-stukadoor.nl (DEMO)"
  - Address: "DEMO Straat 78, 1012 AB Amsterdam (Voorbeeldadres)"
  - KVK: "12345678 (DEMO nummer)"
  - BTW: "NL001234567B01 (Voorbeeld)"
  - Add prominent red/amber "DEMO WEBSITE" badge in header or fixed top banner

**TECH STACK:**
- Next.js 14 (App Router), TypeScript, Tailwind CSS
- Framer Motion (smooth, seamless animations - spreading, wiping, fading)
- Swiper.js for project galleries
- Lucide React (icons: Trowel, BrickWall, Paintbrush, CheckSquare, Home, Maximize)
- next/image (unoptimized: true)

**DESIGN REQUIREMENTS (SEAMLESS/LUXURY AESTHETIC):**
- Colors: Warm Sand (#d6d3d1), Cement Gray (#9ca3af), Off-white (#fafaf9), Pure White (#ffffff), Clay/Terra (#c2410c subtle accents), Deep Stone (#44403c)
- Typography: "Plus Jakarta Sans" for headings (modern, clean lines), "Inter" for body
- Visual Motifs:
  - Seamless transitions (no harsh lines between sections - use gradient fades)
  - Trowel stroke dividers (subtle horizontal lines)
  - Texture backgrounds (micro-patterns resembling plaster textures, very subtle)
  - Smooth rounded everything (full rounded corners, no sharp edges)
  - Shadow depth (soft, diffused shadows like ambient light)
- Shapes: 
  - Super rounded corners (rounded-3xl)
  - Asymmetric soft shapes (blob-like but more rectangular, organic)
  - Full-bleed sections (edge-to-edge smoothness)

**SPECIFIC FEATURES FOR STUKADOOR INDUSTRY:**

1. **Hero Section (Seamless Smoothness):**
   - Full viewport, split screen: Left side rough concrete texture (before), Right side silky smooth plaster wall (after) - local images
   - Morphing transition animation between the two on scroll (Framer Motion)
   - Headline: "Vloeiend perfectionisme" with smooth underline animation (width expanding like spreading plaster)
   - Trust badges: "✓ Streeploos resultaat", "✓ 10 jaar garantie", "✓ Binnen 3 dagen gestart"
   - CTA: "Gratis offerte" (primary, sand color), "Bekijk werkwijze" (secondary)
   - DEMO badge floating top-left with subtle shadow

2. **Structuur Visualizer (Texture Selector):**
   - Interactive showcase of 4 plaster types:
     - Glad stucwerk (Smooth - level 5 finish)
     - Spachtelputz (Fine texture)
     - Granol (Coarse texture)
     - Sierpleister (Decorative/Venetian)
   - Each type shows: Large texture close-up image (local), Description, Suitable rooms, Price indication per m²
   - Hover effect: Texture "smoothes out" animation or zoom into detail
   - "Bekijk in uw huis" toggle to see same room with different textures

3. **Before/After Smoothness Slider (Crucial):**
   - Interactive comparison: Rough brick/concrete vs Perfect smooth plaster
   - 3 examples: Woonkamer wand, Plafond renovatie, Badkamer stucwerk
   - Vertical slider option (swipe up/down) or horizontal
   - Labels: "Ruw" vs "Gestuct" with smooth icons
   - Local images: `/images/stukadoor/before/rough-wall.jpg` vs `/images/stukadoor/after/smooth-finish.jpg`

4. **Oppervlakte Calculator (Plaster Calculator):**
   - Elegant tool: "Bereken uw investering"
   - Inputs:
     - Oppervlakte m² (slider with smooth thumb animation)
     - Type structuur (dropdown with texture preview)
     - Nuancering (Wit / Creme / Gekleurd)
     - Plafond mee stucen? (toggle switch)
   - Real-time calculation: Shows price range, liters primer needed, days work
   - Smooth number counting animation (0 to final number)
   - "Details offerte aanvragen" button

5. **Afwerking Gradaties (Finish Levels):**
   - Explain the difference between:
     - Q1 (Spackspuitwerk - basic)
     - Q2 (Glad - standard)
     - Q3 (Zijdeglad - luxury)
     - Q4 (Spiegelglad - premium)
   - Visual comparison with light reflection on each surface
   - Use case recommendations per room type

6. **Project Gallery (Seamless Rooms):**
   - Full-width images of finished rooms (local: `/images/stukadoor/projects/living-smooth.jpg`, `/images/stukadoor/projects/bathroom-seamless.jpg`)
   - Categories: Woonkamers, Badkamers, Keukens, Plafonds, Exterieur
   - No borders between images (seamless grid)
   - Hover: Image zooms slightly, title fades in from bottom with "Bekijk project"
   - Lightbox with before/after toggle within the gallery view

7. **Werkwijze Proces (Process Timeline):**
   - Smooth horizontal scroll or vertical timeline with connecting line animation
   - Steps: 1. Inspectie → 2. Voorbereiding (masking) → 3. Gronden → 4. Stucen → 5. Afwerking → 6. Oplevering
   - Each step has icon in smooth stone circle, brief description, duration
   - Connecting line "fills" as you scroll (scroll-triggered animation)

8. **Renovlies vs Stucwerk Comparison:**
   - Help customers choose: Interactive comparison table/cards
   - Renovlies (wallpaper covering): Pros/cons, suitable for, price
   - Stucwerk (plastering): Pros/cons, suitable for, price
   - "Wat past bij mij?" decision tree (2-3 questions)

**ADMIN PANEL (/admin):**
- Login: demo/demo123
- Theme: Minimalist stone/sand colors, clean lines
- Dashboard:
  - Project planning board: Offerte → Inmeet → Voorbereiding → Stucen → Drogen → Oplevering
  - M² calculator tool (internal pricing)
  - Material stock: Sacks of plaster, Primer liters, Tape quantities
  - Photo documentation: Before/After pairs per room
  - Client communication log
  - Calendar with drying times indicated (can't paint yet indicators)

**KLANT PORTAL (/mijn-stucwerk):**
- Login for demo clients
- "Mijn Project" view:
  - Progress bar: Percentage smooth filling (like plaster drying)
  - Photo updates per day (rough → primer → base → finish)
  - Expected completion date countdown
  - Care instructions after completion (when can you paint, cleaning)
  - Digital invoice with 10-year warranty certificate

**BLOG (/stucwerk-kennis):**
- Categories: Onderhoud, Kleuradvies, Nieuwe technieken, Vergelijkingen
- "Spachtelputz vs Granol: Wat kies ik?"
- "Hoelang moet stucwerk drogen?"
- "Sauzen of verven op stucwerk?"
- Downloadable: "Onderhoudsgids gestucte muren" (PDF)

**IMAGE STRUCTURE (LOCAL - REQUIRED):**
/public/images/stukadoor/
/hero/
- rough-concrete.jpg (before texture)
- smooth-wall.jpg (after texture - silk finish)
- trowel-action.jpg (craftsman working)
/before/
- brick-wall-rough.jpg
- damaged-ceiling.jpg
- uneven-surface.jpg
- old-plaster.jpg
/after/
- living-smooth.jpg (perfect finish)
- bathroom-seamless.jpg (water resistant)
- ceiling-finish.jpg
- decorative-venetian.jpg (sierpleister)
/textures/
- spachtelputz-close.jpg (fine texture)
- granol-texture.jpg (coarse)
- glad-close.jpg (mirror smooth)
- decorative-pattern.jpg
/projects/
- room-1.jpg (modern living)
- room-2.jpg (minimalist bedroom)
- room-3.jpg (kitchen backsplash)
- room-4.jpg (bathroom walls)
- exterior-facade.jpg
/process/
- prep-masking.jpg
- applying-primer.jpg
- trowel-work.jpg
- finishing.jpg
plain
Copy

**FLOATING CTA COMPONENT SPECS:**
```typescript
// components/FloatingCTA.tsx
- Position: fixed bottom-6 right-6 (desktop), bottom-4 left-1/2 -translate-x-1/2 (mobile, max-w-xs)
- Shape: rounded-full (soft pill shape)
- Background: gradient-to-br from-stone-300 to-stone-400 (warm sand/cement color)
- Icon: <Trowel className="w-6 h-6 text-stone-800" /> or <BrickWall className="w-6 h-6 text-stone-800" />
- Text desktop: "Offerte Aanvragen" (stone-800, font-semibold, ml-2)
- Animation: animate-pulse (very subtle, like breathing/spreading), hover:scale-105, hover:shadow-lg
- Shadow: shadow-xl shadow-stone-500/20
- Backdrop: backdrop-blur-sm bg-stone-200/80
- Border: border border-stone-300
- onClick: window.open('https://techsolutionsutrecht.nl/contact', '_blank', 'noopener,noreferrer')
- z-index: 50
DEMO CONTENT MARKING (VERY CLEAR):
Fixed top banner: "⚠️ DEMO WEBSITE - Alle gegevens zijn fictief (Voorbeeld) - Geen echte diensten"
Footer: "Dit is een voorbeeld website. Contact opnemen voor dit project:"
Contact page: All fields show "(DEMO)" suffix, big red warning box
Phone numbers: "020-123 4567 (DEMO)"
Email addresses: "info@voorbeeld.nl (DEMO)"
Prices: "Vanaf €45 per m² (DEMO prijs)"
MICRO-INTERACTIONS:
Scroll: Elements "smooth in" (fade + slight Y movement, no bounce - very smooth)
Images: Slow zoom on hover (very subtle, 5% scale over 0.7s)
Buttons: On hover, background color "spreads" from center outward (radial wipe)
Text: Underlines animate from center to edges (smooth expansion)
Form inputs: Focus creates soft glow (box-shadow transition, no harsh borders)
Page transitions: Cross-fade (seamless, no slide)
DEPLOYMENT:
Static export (output: 'export')
All images local in public folder
Floating CTA in root layout.tsx (appears on every route)
Demo watermark component persistent on all pages
Include complete file structure with the floating CTA linking to external URL, demo watermark/banner, local image setup script, and smooth spreading animations throughout.