You are an expert Next.js 14 developer and UI/UX designer specializing in construction and home-service websites. Build a complete, premium demo website for a Dutch roofing company ("Dakdekker") called "Dakwerken Van der Berg" based in Utrecht/Amsterdam area.

**CRITICAL REQUIREMENTS:**
- NO device toggle/responsive switcher component
- **ALL IMAGES MUST BE LOCAL**: Create a complete `/public/images/dakdekker/` folder structure with subfolders: `/hero`, `/services`, `/projects`, `/team`, `/icons`. Generate a `download-images.js` script in root that downloads all necessary images using node-fetch or provide direct instructions to download them manually from Unsplash. In the code, ONLY reference local paths like `/images/dakdekker/hero/roof-sunset.jpg` - NO external URLs in production code
- Use realistic, high-quality roofing imagery: aerial roof views, dramatic cloudy skies, workers on ladders, roof tiles (pannen and leien), gutter cleaning, chimney work, solar panels on roof, storm damage, modern skylights

**TECH STACK:**
- Next.js 14 (App Router), TypeScript, Tailwind CSS
- Framer Motion for scroll animations and page transitions
- Swiper.js for project galleries
- React Hook Form + Zod (Dutch validation)
- Lucide React for icons
- next/image (unoptimized: true for static export)

**DESIGN REQUIREMENTS (BOLD/PROTECTIVE AESTHETIC):**
- Layout: Dynamic asymmetric design with "roof angle" theme (diagonal lines 30-degree angles)
- Navigation: Fixed top nav that changes from transparent (on hero) to solid white with shadow after scroll
- Color Palette: 
  - Roof Slate (#475569), 
  - Safety Orange (#ea580c) for CTAs, 
  - Sky Blue (#0ea5e9) for trust elements, 
  - Cloud White (#f8fafc), 
  - Storm Gray (#334155)
- Typography: "Space Grotesk" for headings (strong, construction feel), "Inter" for body
- Shapes: 
  - Hero image: clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%) (diagonal bottom)
  - Service cards: clip-path: polygon(0 0, 100% 10%, 100% 100%, 0 90%) (parallelogram feel)
  - Project gallery: Mix of landscape (clip-path: circle(90% at 50% 50%)) and portrait with angled edges
  - Section dividers: SVG wave shapes that look like roof lines

**SPECIFIC FEATURES FOR ROOFING INDUSTRY:**

1. **Hero Section (Full Impact):**
   - Full viewport height (100vh)
   - Background: Dramatic sky with roof silhouette (local image: `/images/dakdekker/hero/skyline.jpg`)
   - Headline: "Uw dak, ons vak" with word "vak" in safety orange
   - Two floating "roof tile" shaped buttons (tilted rectangles): "Gratis inspectie" (primary) and "Bekijk projecten" (secondary)
   - Weather widget (decorative): Shows current weather in Utrecht area with icon (sun/rain) - static for demo
   - Trust badge floating right side: "10 Jaar Garantie" in rotated square badge

2. **Storm Damage Alert Component:**
   - Prominent banner (only visible on first load, closable): "Stormschade? Wij helpen direct!" with pulsing red icon
   - Emergency phone number big and clickable (tel: link)

3. **Services Grid (Asymmetric Masonry):**
   - 6 services in uneven grid (some tall, some wide):
     - Dakreparatie (leaks)
     - Dakrenovatie (full replacement)
     - Dakisolatie (insulation)
     - Zonnepanelen (solar integration)
     - Schoorsteen renovatie (chimney)
     - Dakgoot reiniging (gutters)
   - Each card has:
     - Background image (local) with dark gradient overlay
     - Icon in top-right (rotated 15 degrees)
     - Title with "roof tile" underline animation on hover
     - Clip-path shape that looks like overlapping roof tiles

4. **Project Gallery (Realisaties):**
   - Filter tabs: "Alle", "Dakpannen", "Leien", "Zink", "Hout"
   - Grid: Masonry layout with different aspect ratios
   - Each project card:
     - Before state: Grayscale image (local: `/images/dakdekker/projects/before-1.jpg`)
     - Hover: Image turns colorful, "Bekijk resultaat" appears with arrow
     - Click: Opens lightbox with before/after slider (comparison)
   - Include 8 placeholder images with descriptive names: `storm-damage-utrecht.jpg`, `modern-tiles-amsterdam.jpg`, `solar-integration.jpg`, etc.

5. **Roof Material Configurator (Interactive):**
   - Not a standard form, but a visual selector:
     - Step 1: Choose house type (2D illustrations: bungalow, hoekhuis, vrijstaand) - use simple SVG or placeholder images
     - Step 2: Select material (Dakpannen: red/brown/black swatches, Leien: gray/black, Zink: metallic)
     - Step 3: See estimated price range with "Vraag exacte offerte aan" button
   - Visual feedback: Background changes to show selected material texture subtly

6. **Seasonal Check Reminder:**
   - Smart section with rotating tips based on season (static for demo, but looks dynamic):
     - Herfst: "Laat uw dakgoot controleren voor bladval"
     - Winter: "Controleer op stormschade"
     - Lente: "Voorjaarscheck: voorkom lekkage"
   - Icon animations (leaf falling, snow, sun)

7. **Certification/Trust Row:**
   - Logos (placeholder images): VCA, Bouwend Nederland, KOMO
   - Guarantees: "10 jaar garantie op werk", "GRATIS dakinspectie", "All-risk verzekerd"

**ADMIN PANEL (/admin):**
- Login: demo/demo123 (pre-filled inputs)
- Dashboard design:
  - Sidebar: Dark slate color (#1e293b), icons: Home, Afspraken, Projecten, Offertes, Materialen
  - Header: Weather widget (for scheduling context), notifications bell with badge
  - Main content:
    - Stats cards: Openstaande inspecties, Deze week gepland, Totale omzet, Nieuwe leads
    - Map overview: Simple SVG map of service area with pins for current jobs (Utrecht, Amersfoort, Hilversum areas)
    - Priority list: Storm damage cases marked in red at top
    - Photo upload area for project documentation (drag-drop UI)
  - Chart: "Inspecties per maand" (line chart, peak in autumn)

**KLANT PORTAL (/mijn-dak):**
- Login separate from admin
- Customer view:
  - "Mijn Dak" status: Visual roof diagram (SVG) showing which parts were worked on (colored sections)
  - Documenten: Garantiebewijs (PDF icon), Facturen, Inspectie rapporten
  - "Nieuwe melding" button with options: Lekkage, Stormschade, Onderhoud
  - Photo gallery: Professional photos taken by roofer of "before" and "after" of THEIR specific house

**BLOG (/dakenkennis):**
- Categories: Onderhoudstips, Stormschade, Materialen, Energiebesparing
- Featured post: Large hero image with overlaid text
- List view: Cards with diagonal clip-path on images
- "Download checklist" CTA in sidebar (email capture form)

**MICRO-INTERACTIONS:**
- Scroll: Elements "slide in" from angles (30 degrees, matching roof theme)
- Buttons: On hover, background slides in from left (like a roof tile being placed)
- Images: Ken Burns effect (slow zoom) on idle
- Phone icon: "Ringing" animation (subtle scale pulse)
- Forms: Input borders animate to orange on focus, label slides up

**IMAGE REQUIREMENTS (LOCAL FOLDER STRUCTURE):**
Create these folders and reference locally:
/public/images/dakdekker/
/hero/
- sunset-roof.jpg (dramatic sky over roof)
- worker-ladder.jpg (safety professional)
/services/
- repair-leak.jpg (close up water damage)
- new-tiles.jpg (red roof tiles)
- gutter-cleaning.jpg (autumn leaves)
- solar-roof.jpg (modern panels)
- chimney.jpg (brickwork)
- insulation.jpg (attic view)
/projects/
- before-storm.jpg (damaged tiles)
- after-renovation.jpg (clean new roof)
- modern-house.jpg (contemporary architecture)
- traditional-house.jpg (old Dutch house)
- commercial-building.jpg (flat roof)
- detail-work.jpg (craftsmanship close-up)
/team/
- foreman.jpg (professional portrait)
- worker-1.jpg (with helmet)
/icons/
- guarantee-badge.png (10 years)
- certification.png (VCA logo placeholder)
plain
Copy

**Provide a setup script** `setup-images.js` that uses `https` module to download sample images from Unsplash source URLs and saves them to correct folders, or provide manual download list in README.

**RESPONSIVE:**
- Mobile: Click-to-call button sticky bottom (green, big)
- Tablet: 2-column grids
- Desktop: Full asymmetric layouts with parallax

**CONTENT (DUTCH):**
- Tone: Expert, protective, reliable ("Wij beschermen uw huis")
- Areas: Utrecht, Hilversum, Amersfoort, Breukelen
- USP: "Dakdekkers sinds 1998", "Gratis inspectie", "Altijd dichtbij"

**GDPR:**
- Cookie banner (functional)
- Footer: "Demo omgeving - Geen echte data"

**DEPLOYMENT:**
- Static export ready
- All images in public folder (no external deps)
- Fonts via next/font

Include complete file structure, TypeScript types, and comments explaining the "roof angle" design system (30-degree rotations used throughout).