You are an expert Next.js 14 developer and UI/UX designer specializing in mobile-first hospitality and F&B websites. Build a complete, high-converting demo website for an Amsterdam-style café called "De Gouden Boon" located in Utrecht city center, specializing in specialty coffee, fresh lunch, and homemade pastries.

**CRITICAL REQUIREMENTS (MANDATORY - MOBILE FIRST):**
- **MOBILE-FIRST DESIGN:** Design for 375px width first, then scale up. Every interaction must be thumb-reachable (bottom 50% of screen priority).
- **BOTTOM NAVIGATION BAR (Mobile Only):** Sticky bottom bar with 4 items: [Home] [Menu] [Order] [Locatie]. Center "Order" button is larger (circular, amber), elevated above bar (translateY -10px). Desktop: Horizontal top nav.
- **NO device toggle/responsive switcher component**
- **ALL IMAGES MUST BE LOCAL ONLY:** Create `/public/images/cafe/` structure with subfolders `/coffee`, `/food`, `/interior`, `/barista`. Provide `download-images.js` script. Reference ONLY local paths.
- **FLOATING CTA BUTTON (GLOBAL):** Create `FloatingCTA.tsx` appearing on ALL pages. Position: bottom-right above bottom nav on mobile (bottom-20 right-4), bottom-right desktop. Design: Circular amber (#f59e0b) with coffee bean icon, pulsing "glow" animation. On click: opens `https://techsolutionsutrecht.nl/contact` in new tab (noopener,noreferrer). z-50.
- **DEMO CONTACT INFO (SAMPLE):** ALL contact details MUST be clearly marked as DEMO:
  - Phone: "030-1234567 (DEMO - Voorbeeld)"
  - Email: "hello@demo-goudenboon.nl (DEMO)"
  - Address: "DEMO Oudegracht 45, 3511 AP Utrecht (Voorbeeldadres)"
  - KVK: "12345678 (DEMO nummer)"
  - Add orange/amber "DEMO PLEK" badge in header
- **HEADER NAVIGATION:** 
  - Mobile: Only Logo (left) and two small icon buttons (right): [Admin] (lock icon) and [Profiel] (user icon) linking to /admin and /portal. Keep it minimal.
  - Desktop: Full horizontal menu + text buttons for Admin/Login.
- **COPYRIGHT FOOTER:** Must include: "© 2025 Tech Solutions Utrecht. Alle intellectuele eigendomsrechten voorbehouden. Concept, design en ontwikkeling door Tech Solutions Utrecht."

**TECH STACK:**
- Next.js 14 (App Router), TypeScript, Tailwind CSS
- Framer Motion (swipe gestures, bottom sheet animations, tap feedback)
- Swiper.js for horizontal menu categories
- Lucide React (icons: Coffee, Croissant, MapPin, User, Lock, Clock)
- next/image (unoptimized: true)

**DESIGN REQUIREMENTS ("THE DAILY RITUAL" CONCEPT):**
- **Mobile Visual Theme:** Instagram-story style cards, edge-to-edge images, thumb-friendly buttons (min 48px touch target), bottom sheets instead of popups.
- **Colors:** Warm Amber (#f59e0b - primary CTA), Espresso Brown (#3e2723 - text), Cream (#fff8e1 - backgrounds), Latte Foam (#d7ccc8), Fresh Mint (#4ecdc4 - accents).
- **Typography:** "Nunito" for all text (rounded, friendly, highly readable on small screens), minimum 16px body.
- **Shapes:** Extra rounded (rounded-2xl, rounded-3xl), soft shadows, no sharp corners.
- **Mobile Patterns:** 
  - Pull-to-refresh visual (coffee cup filling)
  - Swipe right to add favorite
  - Long press for quick preview
  - Bottom sheets (slide up from bottom) for all modals/forms

**MOBILE-FIRST SPECIFIC FEATURES:**

1. **Hero Section (Thumb Swipe):**
   - Full-width vertical carousel (swipe up/down) showing: Coffee being poured, Croissant close-up, Cozy interior.
   - Large text overlay: "Uw dagelijkse ritueel" with amber highlight.
   - Sticky bottom CTA: "Bestel Nu" (full width, amber, rounded-full).

2. **Visual Menu (Instagram-Style Grid):**
   - **Category Swiper:** Horizontal swipe tabs at top: "Koffie", "Lunch", "Zoet", "Drank".
   - **Vertical Feed:** Full-width cards edge-to-edge (like Instagram). Each card:
     - Large food photo (local)
     - Name, price (large 18px), dietary icons (vegan/gluten-free)
     - "Add" button (circle with +) bottom-right of card
     - Swipe left for "Details", Swipe right for "Favorite"
   - **Quick Add:** Tap once to add, tap again for customization (size/milk).

3. **Smart Ordering Flow (Mobile Optimized):**
   - **Bottom Sheet Modal:** When tapping item, sheet slides up from bottom (not popup).
   - **Size Selector:** Big horizontal buttons (S/M/L) with thumb-size tap targets, clear visual selection (amber fill).
   - **Milk Options:** Icon buttons (Cow, Oat, Almond, Soy) with labels.
   - **Special Requests:** Large textarea (easy thumb typing).
   - **Sticky Bottom Bar:** Price total (left) + "Toevoegen" button (right, amber, full height).

4. **Digital Loyalty Card (Gamified):**
   - **Visual Card:** Coffee card graphic with 10 circles.
   - **Animation:** When adding to cart, coffee bean flies to card and "stamps" a circle (confetti effect on 10th stamp).
   - **"10e koffie gratis!"** progress bar in profile section.

5. **Live Busyness Indicator ("Hoe druk is het?"):**
   - **Traffic Light System:** Green (Rustig), Orange (Gezellig druk), Red (Even wachten).
   - **Location:** Top of page, small pill shape.
   - **Text:** "Nu: Gezellig druk (15 min wacht)" or direct demo logic.

6. **Table Reservation (Mobile Simple):**
   - **Bottom Sheet:** Slide up from "Reserveer" button.
   - **Date Picker:** Wheel style (native feel), large touch targets.
   - **Time:** Big buttons (09:00, 09:30) in 2-column grid.
   - **People:** +/- buttons (large) with number display.

7. **Order Ahead / Pickup:**
   - **Time Selector:** "Klaar over: [10 min] [20 min] [30 min]" horizontal scroll.
   - **Pickup Counter:** Animation showing counter number when ready (demo).

**ADMIN PANEL (/admin):**
- **Mobile Optimized:** Cards instead of tables (swipeable), big touch targets.
- **Dashboard:**
  - "Vandaag" stats (big numbers): Bestellingen, Omzet, Openstaand.
  - **Live Orders List:** Cards with swipe to complete (like Tinder, swipe right = done).
  - **Inventory:** Visual coffee bean bag (empties as stock low).
  - **Busyness Toggle:** Switch to manually set "rustig/gezellig/druk" for demo.
- **Login:** demo/demo123

**CUSTOMER PORTAL (/mijn-koffie):**
- **Digital Stamp Card:** Large visual, animated stamps.
- **Order History:** "Uw vaste bestelling" (repeat order button).
- **Favorites:** Heart icon list, swipe to remove.
- **Payment:** Demo payment methods (visual cards).

**BLOG (/koffiekennis):**
- **Swipeable Articles:** Horizontal scroll cards with coffee tips.
- **"Barista Geheimen"** series.
- **Brewing Guides:** Step-by-step with large images (mobile readable).

**MICRO-INTERACTIONS (Mobile Focused):**
- **Tap Feedback:** Buttons scale down 0.95 then up on tap (satisfying click feel).
- **Swipe Gestures:** Swipe menu items left for "Quick Add", right for "Details".
- **Pull to Refresh:** Coffee cup filling up animation.
- **Page Transitions:** Slide from right (like native app), not fade.
- **Loading States:** Coffee bean bouncing (not spinner).

**IMAGE STRUCTURE (LOCAL - REQUIRED):**
/public/images/cafe/
/coffee/
- pour-latte-art.jpg (close up)
- espresso-detail.jpg
- cold-brew.jpg
- beans-roasted.jpg
/food/
- croissant-butter.jpg
- avocado-toast.jpg
- pastry-display.jpg
- sandwich-club.jpg
/interior/
- cozy-corner.jpg (seating)
- barista-bar.jpg
- window-seats.jpg
- terras-sunny.jpg
/barista/
- barista-portrait.jpg (friendly)
- making-coffee-action.jpg
plain
Copy

**SETUP SCRIPT:**
Provide `setup-images.js` downloading from Unsplash:
- Coffee: https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800
- Food: https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=800
- Interior: https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800

**RESPONSIVE (Mobile → Desktop):**
- **Mobile:** Bottom nav, full-width cards, bottom sheets, thumb zones.
- **Tablet:** 2-column menu grid, side navigation.
- **Desktop:** Horizontal menu, hover effects (lift cards), right sidebar for cart.

**CONTENT (DUTCH - A2, friendly/casual):**
- Tone: "Jij/je" informal, welcoming barista style.
- "Haal hier of drink hier", "Vers gebrand dagelijks", "Uw vaste plekje".
- Emphasize local, fresh, quick.

**DEPLOYMENT:**
- Static export ready
- PWA manifest included (add to home screen capability)
- All images local
- Fonts via next/font

Include complete file structure with mobile-optimized components (BottomNav, BottomSheet, SwipeCard), TypeScript interfaces, and comments explaining thumb-zone design principles.