Create a Next.js 14 + Tailwind CSS demo website for a boutique hotel in Utrecht, Netherlands.

## CRITICAL DESIGN CONSTRAINTS:
- AVOID: Generic booking engines, grid of room photos with prices, star ratings, "Amenities" icon cards, corporate hotel chains look.
- USE: Editorial magazine layout (like Cereal Magazine), asymmetric grids, generous whitespace, thick borders (4-8px solid teal) as section separators.
- TYPOGRAPHY: Playfair Display (serif) for headings + Inter (sans) for body. Editorial feel.
- COLOR: Teal #0f766e, Warm White #faf9f6, Charcoal #1a1a1a, Soft Gold accent #d4af37 (subtle luxury).
- MOBILE-FIRST: 90% users on mobile. Touch targets min 48px.

## INDUSTRY-SPECIFIC ABSTRACT CONCEPT: "Sanctuary & View"
Focus on the feeling of rest and perspective, not just rooms:
- Hero: Full-bleed background image (placeholder path) with asymmetric text overlay (H1 left bottom, tagline right top).
- Visual: **Parallax window views** - abstract representation of looking out from a room (layered depth).
- Gallery: Not grid, but **editorial masonry** - some images full-width, some half, with text wrapping around (magazine style).
- Custom cursor: Becomes a "key" shape on hover over booking buttons.
- Atmosphere: Soft shadows, natural light feeling, calm and quiet.

## IMAGES REQUIRED (Local placeholders):
- /images/hotel/hero-lobby.jpg (Main hero - hotel interior/lobby)
- /images/hotel/room-detail.jpg (Room interior detail)
- /images/hotel/view-window.jpg (Window view abstract)
- /images/hotel/breakfast.jpg (Breakfast/culinary detail)
- /images/hotel/exterior.jpg (Building exterior Utrecht style)
Add comments: &lt;!-- Replace with local optimized WebP/JPG images --&gt;

## TECHNICAL REQUIREMENTS:

### 1. ADMIN PANEL & USER PORTAL (Header)
Place "Demo Login" button in header (top right).
- Admin: username "demo" / password "demo123" 
  - Shows: Booking calendar dashboard, Room availability grid, Guest management
- Guest Portal: username "gast" / password "demo123"
  - Shows: My booking details, Check-in/check-out info, Room service menu
Show "🔒 Demo" badge in header.

### 2. FOOTER (Exact info only)
"Deze website is een demonstratieversie. Alle intellectuele eigendomsrechten en inhoud behoren toe aan TechSolutionsUtrecht.

Adres: Utrecht 3553 CW
Tel: +31 6 23434286
Email: info@techsolutionsutrecht.nl
KvK: 99202301
Site: techsolutiosutrecht.nl"

### 3. FLOATING CTA BUTTON (All pages)
Fixed: bottom-right (mobile), bottom-center (desktop).
Style: Teal #0f766e bg, white text, rounded-full, shadow-xl, pulse animation.
Text: "Offerte aanvragen" with arrow.
Link: https://techsolutionsutrecht.nl/contact (target="_blank").

### 4. DEMO DATA
- Hotel Name: "Hotel Demo Utrecht (DEMO)"
- Phone: "+31 6 23434286"
- Email: "info@techsolutionsutrecht.nl"
- Address: "Utrecht 3553 CW"

## CONTENT STRUCTURE:
1. Hero: Full-width image with overlaid asymmetric text (H1: "Uw verblijf in Utrecht").
2. Kamers: Editorial layout - large image left, text right (alternating), NOT card grid.
3. Sfeer: Masonry gallery with 5 images (using placeholder paths above), mixed sizes.
4. Locatie: Map placeholder + text about Utrecht location.
5. Boeken: Minimal booking form (dates, guests), styled editorial not corporate.

## IMAGE PLACEHOLDERS:
Use &lt;div className="bg-gray-200 aspect-[3/2] relative"&gt; with &lt;span className="absolute inset-0 flex items-center justify-center text-gray-500"&gt;Image: [description]&lt;/span&gt; for all image spots until real images added.

Output: Single file page.tsx, TypeScript, Tailwind, responsive, with all 5 image placeholders implemented.