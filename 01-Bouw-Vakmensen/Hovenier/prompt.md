You are an expert Next.js 14 developer and UI/UX designer specializing in landscaping and garden architecture websites. Build a complete, organic, nature-inspired demo website for a Dutch gardener/landscaper ("Hovenier") called "Groen & Tuin Architectuur" based in Amsterdam/Haarlem area.

**CRITICAL REQUIREMENTS (LAHZ SHAOD):**
- NO device toggle/responsive switcher component
- **ALL IMAGES MUST BE LOCAL ONLY**: Create complete `/public/images/hovenier/` folder structure. Provide `setup-images.js` script to download from Unsplash. Reference ONLY local paths like `/images/hovenier/hero/garden-sunset.jpg`
- **FLOATING CTA BUTTON (GLOBAL)**: Create `FloatingCTA.tsx` component appearing on ALL pages. Position: bottom-right (desktop) or bottom-center (mobile). Design: Circular with organic green glow (#16a34a), gentle pulsing animation (breathing effect like nature), leaf icon (Leaf from Lucide). Text: "Direct Contact". On click: opens `https://techsolutionsutrecht.nl/contact` in new tab. Use z-50, backdrop-blur, shadow-green-500/30. Hide only in /admin if logical.
- **DEMO CONTACT INFO (SAMPLE)**: ALL contact details MUST be clearly marked as DEMO:
  - Phone: "020-1234567 (DEMO - Voorbeeld)"
  - Email: "info@demo-tuinbedrijf.nl (DEMO)"
  - Address: "DEMO Straat 45, 5678 AB Amsterdam (Voorbeeldadres)"
  - KVK: "12345678 (DEMO nummer)"
  - BTW: "NL001234567B01 (Voorbeeld)"
  - Add visual red/amber "DEMO WEBSITE" badge in header near logo

**TECH STACK:**
- Next.js 14 (App Router), TypeScript, Tailwind CSS
- Framer Motion (organic, flowing animations - like wind/breeze, gentle swaying)
- Swiper.js for garden galleries
- Lucide React (icons: Leaf, TreePine, Flower, Sun, CloudRain, Shovel)
- next/image (unoptimized: true)

**DESIGN REQUIREMENTS (ORGANIC/NATURE AESTHETIC):**
- Colors: Forest Green (#166534), Earth Brown (#78350f), Leaf Light (#4ade80), Sky Blue (#0ea5e9), Cream/Beige (#fef3c7), Stone Gray (#78716c)
- Typography: "DM Serif Display" for headings (elegant, organic), "Inter" for body
- Visual Motifs:
  - Organic blob shapes (border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%)
  - Leaf/flower clip-paths for images
  - Wood texture backgrounds (subtle)
  - Growing vine animations (SVG paths drawing on scroll)
  - Soft shadows (shadow-lg shadow-green-900/10)
- Shapes: NO sharp rectangles. Use organic curves, soft angles (5-15 degrees), asymmetrical layouts that feel "grown" not built

**SPECIFIC FEATURES FOR HOVENIER INDUSTRY:**

1. **Hero Section (Nature Immersion):**
   - Full viewport height with parallax layers
   - Background: Lush garden layers (local images: `/images/hovenier/hero/layer-back.jpg`, `/images/hovenier/hero/layer-front.png` with transparency)
   - Headline: "Uw tuin, onze passie" with "passie" in leaf-green with subtle growing animation
   - Floating leaf particles (gentle CSS animation, not distracting)
   - Season selector: 4 small buttons (Lente, Zomer, Herfst, Winter) that change hero image colors via CSS filter (hue-rotate) to show seasonal maintenance
   - DEMO badge floating top-left

2. **Before/After Garden Transformations (Crucial):**
   - Interactive slider showing bare garden → designed landscape
   - 3 examples: "Moderne stadstuin", "Landelijke achtertuin", "Daktuim"
   - Before images: messy/overgrown (local: `/images/hovenier/before/chaos.jpg`)
   - After images: designed/maintained (local: `/images/hovenier/after/oase.jpg`)
   - Add "Swipe" instruction with hand icon

3. **TuinOntwerper Tool (Garden Designer):**
   - Interactive visualizer:
     - Step 1: Select garden type (Stadstuin, Villa tuin, Bedrijfstuin) with sketch icons
     - Step 2: Choose style (Modern, Landelijk, Mediterraans, Ecologisch)
     - Step 3: Features (Vijver, Terras, Bomen, Moestuin) - checkboxes with small preview images
     - Result: Visual composition + rough price indication ("Vanaf €2.500") + "Vraag adviesgesprek aan" button
   - Background changes subtly based on selections (CSS gradients)

4. **Seasonal Maintenance Calendar:**
   - Visual calendar showing what needs doing when:
     - Lente: Snoeien, Zaaien, Gazonherstel
     - Zomer: Sproeien, Onderhoud, Oogsten
     - Herfst: Blad ruimen, Beschermen, Planten
     - Winter: Snoeien bomen, Plannen, Voorbereiden
   - Current season highlighted based on real date (but demo static)
   - Clicking month shows tip card with image

5. **Eco/Sustainability Calculator (Trending):**
   - Interactive tool: "Hoe groen is uw tuin?"
   - Questions: Rainwater collection? Native plants? Insect hotels? Compost?
   - Result: Score (1-10 leaves) + tips for improvement
   - Shows water savings calculation (demo numbers)

6. **Project Gallery (Masonry):**
   - Filter: Alle, Stadstuinen, Villa's, Bedrijfstuinen, Dakterrassen
   - Layout: Pinterest-style masonry with varying heights
   - Images: Local high-quality garden photos (`/images/hovenier/projects/tuin-1.jpg` through `tuin-8.jpg`)
   - Hover: Image zooms slightly, title appears from bottom with leaf icon, "Bekijk project" link

7. **Plant Database (Mini):**
   - Showcase 6 native plants for Dutch gardens:
     - Hortensia, Lavendel, Japanse Esdoorn, Buxus, Gras, Vaste planten
   - Cards with: Image, Name, Sun/Shade icons, Water needs, Season color
   - Filter: Zon, Halfschaduw, Schaduw

8. **Services (Growing Cards):**
   - 5 services with "growth" hover effect (cards expand upward on hover):
     - Tuinontwerp
     - Tuinaanleg
     - Tuinonderhoud
     - Boomverzorging
     - Vijveraanleg
   - Each with unique organic shape background (blob SVG)

**ADMIN PANEL (/admin):**
- Login: demo/demo123
- Theme: Nature-inspired dark mode (dark green bg, light green accents)
- Dashboard:
  - Weather widget (for planning outdoor work)
  - Seasonal task list ("Deze week: 5 x snoeien, 3 x aanleggen")
  - Project map: Google Maps style with garden locations pinned (Amsterdam, Haarlem, Utrecht areas)
  - Plant inventory (demo stock: "Buxus: 150 stuks", "Graszoden: 500m2")
  - Customer appointments with garden photos attached

**KLANT PORTAL (/mijn-tuin):**
- Login for demo clients
- "Mijn Tuin" profile with:
  - Garden plan/diagram (uploaded design PDF)
  - Maintenance schedule (when is next visit?)
  - Seasonal tips personalized to their garden type
  - Photo timeline: Growth progress over months (before/after their specific garden)
  - "Hulp nodig?" button linking to your real contact page

**BLOG (/tuinblog):**
- Categories: Onderhoudstips, Tuinontwerp, Duurzaamheid, Seizoenswerk
- "Maandtaak" feature: What to do this month in the garden
- Downloadable: "Jaarkalender Tuinonderhoud" (PDF)

**IMAGE STRUCTURE (LOCAL - REQUIRED):**
/public/images/hovenier/
/hero/
- garden-sunset.jpg (wide landscape)
- modern-garden.jpg (contemporary design)
- hands-planting.jpg (close up work)
/before/
- messy-garden-1.jpg (overgrown)
- bare-soil.jpg (empty plot)
- wild-grass.jpg
/after/
- design-1.jpg (modern result)
- design-2.jpg (landelijk result)
- terrace-garden.jpg
/projects/
- city-garden-1.jpg (small space)
- villa-lawn.jpg (large)
- roof-garden.jpg (dakterras)
- pond-garden.jpg (vijver)
- maintenance-1.jpg
- tree-care.jpg (boomverzorging)
- seasonal-spring.jpg
- seasonal-autumn.jpg
/plants/
- hydrangea.jpg (hortensia)
- lavender.jpg
- maple.jpg (esdoorn)
- grass.jpg
/icons/
- eco-badge.png
- certified-hovenier.png
plain
Copy

**FLOATING CTA COMPONENT SPECS:**
```typescript
// components/FloatingCTA.tsx
- Position: fixed bottom-6 right-6 (desktop), bottom-4 left-1/2 -translate-x-1/2 (mobile, full width max-w-xs)
- Container: rounded-full (pill shape desktop), rounded-2xl (mobile)
- Background: bg-green-600 with backdrop-blur-md bg-green-600/90
- Shadow: shadow-lg shadow-green-500/30
- Animation: animate-pulse (subtle, breathing rhythm 3s), hover:scale-110
- Icon: <Leaf className="w-6 h-6 text-white" />
- Text: "Direct Contact" (white, font-medium, hidden on mobile icon-only)
- onClick: () => window.open('https://techsolutionsutrecht.nl/contact', '_blank', 'noopener,noreferrer')
- z-index: 50
- Border: border-2 border-green-400/30
DEMO CONTENT MARKING (CLEAR):
Header: Red pill badge "DEMO WEBSITE - Voorbeeld"
Footer section: "⚠️ Let op: Dit is een demonstratie website. Alle contactgegevens zijn fictief."
Contact page: Big yellow banner "DEMO - Geen echte contactgegevens"
Phone numbers: formatted as "020-123 4567 (DEMO)"
Email: formatted as "info@demo.nl (Voorbeeld)"
MICRO-INTERACTIONS:
Scroll: Elements "grow" into view (scale from 0.9 to 1 with opacity)
Images: Gentle "sway" animation on hover (rotate 1-2 degrees back and forth, like wind)
Buttons: On hover, background "blossoms" (gradient shift from center)
Form inputs: Focus state shows leaf icon appearing in border
Navigation: Active link has underline that "grows" like a vine (width animation)
DEPLOYMENT:
Static export (output: 'export')
All images in public folder
Floating CTA in root layout.tsx (appears on all routes)
Demo watermark component persistent
Include complete file structure with the floating CTA, demo watermark component, and local image setup instructions.