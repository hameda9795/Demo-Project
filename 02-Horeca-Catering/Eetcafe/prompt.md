Create a Next.js 14 + Tailwind CSS demo website for an "Eetcafe" (casual dining cafe/bar) in Utrecht, Netherlands.

## CRITICAL ANTI-GENERIC CONSTRAINTS:
- ABSOLUTELY FORBIDDEN: Grid of food photos, "Book a table" generic forms, menu cards with prices, star ratings, cozy/cliché "brown cafe" aesthetics with wood textures everywhere, Instagram-style food galleries.
- REQUIRED: Asymmetric editorial layout (like an indie magazine), brutalist but warm aesthetic, generous negative space, thick borders (4-8px solid) as section separators.
- TYPOGRAPHY: Use Playfair Display (serif) for H1/H2 combined with Inter (sans) for body. Create typographic tension.
- COLOR: Strictly use Teal #0f766e, Warm Beige #f5f1e8 (like natural linen), Charcoal #1a1a1a, Burnt Orange accent #c4785a (subtle warmth). NO bright red, NO generic browns.
- MOBILE-FIRST: Design mobile viewport first (90% users). Touch targets min 48px.

## INDUSTRY-SPECIFIC ABSTRACT CONCEPT: "Social Canvas"
Instead of showing food/plates, focus on the "gathering" and "conversation" aspect:
- Hero: Split layout with large typography on left (H1: "Eten & Drinken in Utrecht"), right side abstract SVG of **overlapping circles** representing tables and conversation bubbles (not literal tables, abstract geometric overlap).
- Visual metaphor: **Parallax depth** representing layers of conversation - background moves slower than foreground text, creating depth like looking across a busy room.
- Custom cursor: Becomes a "warm glow" (radial gradient) when hovering over CTAs (representing hospitality).
- Menu presentation: Not as cards, but as **minimalist list** with generous line-height (like poetry), prices aligned right but subtle (muted color).
- Atmosphere: Use **shadow play** and light beams (SVG gradients) to suggest afternoon sunlight through windows - abstract, not photos.
- NO photos of food, coffee, or interiors. Use abstract textures: paper grain, ceramic glaze textures, soft shadows.

## TECHNICAL REQUIREMENTS:

### 1. ADMIN PANEL & USER PORTAL (In Header)
Place "Demo Login" button in header (top right). When clicked, show modal with:
- Admin Panel: username "demo" / password "demo123" 
  - Shows: Table reservation management, Daily menu editor, Order tracking for tables
- Client Portal: username "klant" / password "demo123"
  - Shows: My reservations, Order history, Favorite orders
Show "🔒 Demo" badge in header.

### 2. FOOTER (Only this exact info)
Place this exact text in footer:
"Deze website is een demonstratieversie. Alle intellectuele eigendomsrechten en inhoud behoren toe aan TechSolutionsUtrecht.

Adres: Utrecht 3553 CW
Tel: +31 6 23434286
Email: info@techsolutionsutrecht.nl
KvK: 99202301
Site: techsolutiosutrecht.nl"

### 3. FLOATING CTA BUTTON (All pages)
Fixed position: bottom-right (mobile), bottom-center (desktop).
Style: Teal #0f766e bg, white text, rounded-full, shadow-xl.
Animation: Pulse every 3 seconds (scale 1 to 1.05).
Text: "Offerte aanvragen" with arrow.
Link: https://techsolutionsutrecht.nl/contact (target="_blank").

### 4. LOCAL IMAGES ONLY
Use placeholder paths: /images/eetcafe/hero-abstract.jpg, /images/eetcafe/texture-paper.jpg
Add comments: &lt;!-- Replace with local WebP --&gt;
NO unsplash URLs, NO food photos.

### 5. DEMO DATA
Use this exact info:
- Company Name: "Eetcafe De Demo (DEMO)"
- Phone: "+31 6 23434286"
- Email: "info@techsolutionsutrecht.nl"
- Address: "Utrecht 3553 CW"
- KvK: "99202301"

## CONTENT STRUCTURE:
1. Hero: Asymmetric split (text left 55%, abstract overlapping circles SVG right 45%). H1: "Eten & Drinken in Utrecht" - large, editorial.
2. Sfeer: Full-width text block with pull-quote about "gezelligheid", bordered left with thick burnt orange line.
3. Menu: Vertical list (not cards), items with generous spacing, prices subtle (muted gray).
4. Reserve: Minimal form (name, date, guests), styled like a reservation card on a table (abstract border).
5. Contact: Simple info with the provided address/phone.

## SPECIFIC INTERACTIONS:
- Hover on menu items: Background fills with subtle beige #f5f1e8, text shifts right 4px.
- Mobile: Sticky header shrinks to logo only.
- Scroll: Text reveals with slight delay between lines (staggered).

Output: Single file page.tsx, TypeScript, Tailwind, fully responsive.