You are an expert Next.js 14 developer and UI/UX designer specializing in luxury hospitality websites. Build a complete, immersive demo website for a boutique 4-star hotel called "Hotel De Gouden Leeuw" located in Utrecht city center (near Domtoren), featuring 25 rooms, a restaurant, and spa facilities.

**CRITICAL REQUIREMENTS (MANDATORY):**
- **NO device toggle/responsive switcher component**
- **ALL IMAGES MUST BE LOCAL ONLY**: Create `/public/images/hotel/` structure with subfolders `/lobby`, `/rooms`, `/restaurant`, `/spa`, `/exterior`, `/amenities`. Provide `download-images.js` script. Reference ONLY local paths like `/images/hotel/lobby/entrance.jpg`.
- **FLOATING CTA BUTTON (GLOBAL)**: Create `FloatingCTA.tsx` appearing on ALL pages. Position: bottom-right (desktop: fixed bottom-6 right-6), bottom-center (mobile). Design: Circular button with rich navy background (#1e3a5f), gold/champagne glow (#d4af37), subtle pulse animation. Icon: Key or DoorOpen from Lucide. Text: "Direct Boeken". On click: opens `https://techsolutionsutrecht.nl/contact` in new tab (noopener,noreferrer). Use z-50, backdrop-blur, shadow-gold/30.
- **DEMO CONTACT INFO (SAMPLE)**: ALL contact details MUST be clearly marked as DEMO:
  - Phone: "030-1234567 (DEMO - Voorbeeld)"
  - Email: "info@demo-hotel.nl (DEMO)"
  - Address: "DEMO Domplein 1, 3512 JC Utrecht (Voorbeeldadres)"
  - KVK: "87654321 (DEMO nummer)"
  - **Important**: Add red/gold "DEMO WEBSITE - Voorbeeld" badge in header near logo
- **HEADER NAVIGATION**: 
  - Left: Logo (Hotel De Gouden Leeuw with lion icon)
  - Center: Kamers (dropdown), Restaurant, Spa & Wellness, Locatie, Blog, Contact
  - Right corner: Two subtle buttons: [🔒 Admin] (links to /admin) and [👤 Mijn Boeking] (links to /portal). Style: text-sm, outline buttons with gold border, navy text. On mobile: inside hamburger menu.
- **COPYRIGHT FOOTER**: Must include: "© 2025 Tech Solutions Utrecht. Alle intellectuele eigendomsrechten voorbehouden. Concept, design en ontwikkeling door Tech Solutions Utrecht." Plus HTML comment protection.

**TECH STACK:**
- Next.js 14 (App Router), TypeScript, Tailwind CSS
- Framer Motion (smooth, elegant animations - "curtain reveal", "door opening")
- Swiper.js for room galleries
- Lucide React (icons: Key, DoorOpen, Calendar, MapPin, Utensils, Bath, Wifi, Car)
- next/image (unoptimized: true)

**DESIGN REQUIREMENTS ("THE ART OF ARRIVAL" CONCEPT):**
- **Visual Theme**: Architectural archways, layered depth (parallax), warm lighting effects. The feeling of entering a luxury lobby.
- **Colors**: Deep Midnight Navy (#1e3a5f), Champagne Gold (#d4af37), Warm Cream (#faf9f6), Velvet Burgundy (#722f37 for accents), Soft Shadow (#e5e5e5)
- **Typography**: "Cormorant Garamond" for headings (elegant, luxury serif), "Montserrat" for body text (clean, modern). Load via next/font/google.
- **Shapes**: 
  - Arch shapes (border-radius: 50% 50% 0 0 for top arches, or full arch containers)
  - Doorway frames for images (thick borders with gold accents)
  - Layered cards with soft shadows (feeling of depth)
- **Textures**: Subtle noise texture overlay (opacity 0.03) for that "premium paper" feel, gradient meshes for lighting effects

**SPECIFIC FEATURES FOR HOTEL INDUSTRY:**

1. **Hero Section (The Grand Entrance):**
   - Full viewport height with layered parallax
   - Background: Hotel entrance at golden hour (local: `/images/hotel/exterior/golden-hour.jpg`)
   - **Archway Overlay**: SVG arch shape framing the content like looking through a doorway
   - Headline: "Uw thuis in het hart van Utrecht" with "thuis" in gold color
   - Subhead: "Boutique hotel met 25 unieke kamers en panoramisch uitzicht op de Domtoren"
   - **Booking Widget (Compact)**: Check-in date, Check-out, Guests, "Bekijk Beschikbaarheid" button - all functional as demo (shows availability calendar)
   - Trust badges: "4.9/5 op Booking.com", "Vrijdag Magazine Top 10", "Duurzaam 4*"

2. **Room Showcase (Archway Gallery):**
   - Section title: "Ontdek onze kamers"
   - Layout: Grid with arch-shaped image containers (rounded top corners)
   - Room types: Superior Kamer, Deluxe Suite, Junior Suite, Domtoren Suite (penthouse)
   - Each room card:
     - Image carousel (Swiper) with arch mask
     - Price per night (crossed out "vanaf €189" showing "Nu vanaf €149" DEMO)
     - Amenities icons (Wifi, Bath, Minibar, View)
     - **Hover Effect**: Image zooms slightly, gold border appears, "Bekijk Details" button slides up
     - **Click**: Opens modal (not new page) with room tour simulation (gallery + amenities list + "Boek Nu" CTA)

3. **Virtual Concierge (Interactive Service):**
   - Section: "Uw persoonlijke concierge"
   - Chat interface simulation (static but animated):
     - "Goedemorgen! Waar kan ik u mee helpen?"
     - Quick options: "Restaurant reserveren", "Taxi bestellen", "Tips voor Utrecht"
   - Shows recommendation cards appearing (animate in)
   - Local guide integration: Map of Utrecht with pins (Domtoren, Grachten, Restaurants) - static image with interactive hotspots

4. **Spa & Dining Preview (Split Screen):**
   - Left side: Restaurant "De Leeuwenkelder" - image with parallax, menu highlights (3 dishes), "Reserveer een tafel" button
   - Right side: Spa - wellness facilities, treatment cards (massage, facial), opening hours
   - **Visual Connection**: Gold line connecting both sections (like a path)

5. **Availability Calendar (Booking Tool):**
   - Interactive calendar showing next 3 months
   - Color coding: Available (white), Low availability (orange), Fully booked (burgundy)
   - Price per day shown on hover
   - "Selecteer uw verblijf" button that shows room options for selected dates
   - **Demo Logic**: Always shows some dates available with fluctuating prices

6. **Guest Journey Timeline:**
   - Horizontal scroll section: 
     1. "Reserveren" (Booking online)
     2. "Welkom" (Check-in with champagne illustration)
     3. "Verblijven" (Room service, spa)
     4. "Ontdekken" (City tips)
     5. "Tot ziens" (Checkout with gift)
   - Each step has icon and brief text, connected by golden path line

7. **Reviews Marquee (Social Proof):**
   - Auto-scrolling horizontal marquee of review cards
   - Names: "Familie De Jong", "Zakenreiziger Ahmed", "Stel uit Amsterdam"
   - Star ratings, short quotes in Dutch
   - Pause on hover

**ADMIN PANEL (/admin):**
- Login: demo/demo123 (pre-filled)
- Theme: Luxury dark mode (navy background #0f172a, gold accents #d4af37)
- Dashboard:
  - **Occupancy Rate**: Big number showing percentage (e.g., "78% bezet") with trend chart
  - **Today's Arrivals**: List with guest names, room numbers, check-in time
  - **Housekeeping Status**: Grid showing rooms (Clean, Dirty, In Progress) with room numbers
  - **Revenue Chart**: Line chart "Omzet deze maand" with gold line
  - **Bookings Table**: Check-in/out dates, guest name, room type, status (confirmed, pending, cancelled)
  - **Restaurant Reservations**: Table for dinner bookings, table numbers, special requests

**GUEST PORTAL (/mijn-boeking):**
- Login for demo guests
- **Booking Overview**: 
  - Reservation details (dates, room type, confirmation number)
  - Digital key simulation (not real, just visual "key" graphic)
  - Upgrade options ("Upgrade naar Suite voor €50")
- **Services**:
  - "Room Service Bestellen" (menu with demo items)
  - "Spa Afspaak Maken" (time slots)
  - "Late Checkout Aanvragen" (toggle)
- **City Guide**: Personalized recommendations based on "profile" (Romantic, Business, Family)
- **Messaging**: Chat with reception (demo conversation)

**BLOG (/utrecht-tips):**
- Categories: "Weekendjes weg", "Zakelijk verblijf", "Romantisch", "Culinair"
- Articles: "De 5 beste terrassen aan de gracht", "Romantisch dineren in Utrecht", "Zakelijke meetings in het hotel"
- Each post with reading time, share buttons, related rooms

**MICRO-INTERACTIONS & ANIMATIONS:**
- **Page load**: Content "unfolds" from center (scale + opacity from 0.9 to 1) like opening curtains
- **Scroll**: Elements reveal as if coming through archways (clip-path animations)
- **Buttons**: Gold shimmer effect on hover (gradient animation moving left to right)
- **Images**: Soft parallax (slower than scroll) creating depth
- **Forms**: Input borders turn gold on focus, placeholder floats up (floating labels)
- **Room cards**: On hover, slight lift (translateY -5px) with enhanced shadow (lifting off the page)

**IMAGE STRUCTURE (LOCAL - REQUIRED):**
/public/images/hotel/
/exterior/
- facade-golden-hour.jpg ( Domtoren in background)
- entrance-night.jpg (illuminated entrance)
- terrace-canal.jpg
/lobby/
- reception-desk.jpg (elegant, marble)
- lobby-seating.jpg (velvet chairs)
- stairs-grand.jpg (staircase)
/rooms/
- superior-room-1.jpg (bed, window)
- superior-room-bathroom.jpg
- deluxe-suite-living.jpg
- deluxe-suite-view.jpg (Domtoren view)
- junior-suite-bed.jpg
- penthouse-panorama.jpg
/restaurant/
- dining-room.jpg (ambiance)
- breakfast-buffet.jpg
- dish-gourmet-1.jpg
- wine-cellar.jpg
/spa/
- treatment-room.jpg (massage bed)
- sauna.jpg
- relaxation-area.jpg
/amenities/
- concierge.jpg
- key-card.jpg
- toiletries.jpg
plain
Copy

**SETUP SCRIPT:**
Provide `setup-images.js` downloading from Unsplash:
- Exterior: https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200
- Room: https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800
- Lobby: https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800
- etc.

**RESPONSIVE:**
- Mobile: Stacked layout, hamburger menu with gold accent, click-to-call sticky button (navy with gold text)
- Tablet: 2-column room grid
- Desktop: Full arch layouts, parallax effects, side-by-side splits

**CONTENT (DUTCH - A2/B1 LEVEL):**
- Tone: Welcoming, sophisticated but approachable, "thuis voelen" (feeling at home)
- Focus on Utrecht location (Domtoren, Grachten, Centraal Station nearby)
- Emphasize: "Boutique", "Persoonlijke service", "Historisch pand", "Moderne luxe"

**GDPR/COMPLIANCE:**
- Cookie consent banner (elegant, bottom, gold accent)
- Footer: "DEMO WEBSITE - Geen echte reserveringen"
- Privacy policy link

**DEPLOYMENT:**
- Static export ready (output: 'export')
- All images in public folder
- Fonts via next/font

Include complete file structure with components organized by sections (Hero, RoomGrid, Concierge, RestaurantSpa, BookingCalendar), proper TypeScript interfaces, and comments explaining "The Art of Arrival" design philosophy.