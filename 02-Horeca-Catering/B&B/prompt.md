You are an expert Next.js 14 developer and UI/UX designer specializing in boutique hospitality and cozy accommodation websites. Build a complete, heartwarming demo website for a charming Bed & Breakfast called "Het Kleine Paradijs" located in the countryside near Utrecht (or a historic canal house), run by a warm host couple, featuring 4 unique rooms and famous homemade breakfasts.

**CRITICAL REQUIREMENTS (MANDATORY):**
- **NO device toggle/responsive switcher component**
- **ALL IMAGES MUST BE LOCAL ONLY**: Create `/public/images/bnb/` structure with subfolders `/breakfast`, `/rooms`, `/garden`, `/hosts`, `/details`. Provide `download-images.js` script. Reference ONLY local paths.
- **FLOATING CTA BUTTON (GLOBAL)**: Create `FloatingCTA.tsx` appearing on ALL pages. Position: bottom-right (desktop), bottom-center (mobile). Design: Circular button with warm terracotta background (#e76f51), soft glow, gentle breathing animation. Icon: Coffee or Heart from Lucide. Text: "Direct Contact". On click: opens `https://techsolutionsutrecht.nl/contact` in new tab.
- **DEMO CONTACT INFO (SAMPLE)**: ALL contact details MUST be clearly marked as DEMO:
  - Phone: "030-9876543 (DEMO - Voorbeeld)"
  - Email: "welcome@demo-paradijs.nl (DEMO)"
  - Address: "DEMO Dorpsweg 12, 1234 AB Dorpje (Voorbeeldadres)"
  - Add "DEMO WEBSITE" badge in header (soft coral color)
- **HEADER NAVIGATION**: 
  - Left: Logo (Het Kleine Paradijs with small flower icon)
  - Center: Onze Kamers, Het Ontbijt, Over Ons, Omgeving, Blog, Contact
  - Right corner: Two subtle buttons: [🔒 Admin] (links to /admin) and [👤 Mijn Boeking] (links to /portal). Style: text-sm, soft buttons with terracotta border.
- **COPYRIGHT FOOTER**: Must include: "© 2025 Tech Solutions Utrecht. Alle intellectuele eigendomsrechten voorbehouden. Concept, design en ontwikkeling door Tech Solutions Utrecht."

**TECH STACK:**
- Next.js 14 (App Router), TypeScript, Tailwind CSS
- Framer Motion (gentle, cozy animations - "steam rising", "page turning")
- Lucide React (icons: Coffee, Heart, Sun, Home, Utensils, Flower2)
- next/image (unoptimized: true)

**DESIGN REQUIREMENTS ("THE MORNING EMBRACE" CONCEPT):**
- **Visual Theme**: Cozy, intimate, homemade feel. Soft morning light, breakfast table aesthetics, floral touches.
- **Colors**: Honey Gold (#f4a261), Strawberry Jam (#e76f51), Fresh Sage (#2a9d8f), Creamy Egg (#fefae0), Coffee Brown (#6f4e37), Soft Linen (#faedcd)
- **Typography**: "Lora" for headings (warm, readable serif), "Nunito" for body (friendly, rounded sans-serif).
- **Shapes**: 
  - Extra rounded corners (rounded-3xl), pill shapes, organic blobs
  - Soft shadows (shadow-xl shadow-orange-900/10)
  - Scalloped edges or wavy dividers (SVG wave separators)
- **Textures**: Linen texture overlay (very subtle), watercolor backgrounds, pressed flower motifs

**SPECIFIC FEATURES FOR B&B INDUSTRY:**

1. **Hero Section (The Warm Welcome):**
   - Full viewport height with soft morning light gradient overlay
   - Background: Cozy garden or breakfast terrace (local: `/images/bnb/garden/morning-terrace.jpg`)
   - **Sunrise Animation**: Slow gradient shift simulating morning light
   - Headline: "Uw thuis weg van huis" in Lora font, warm brown color
   - Subhead: "Geniet van huisgemaakt ontbijt en gastvrijheid in het hart van Nederland"
   - Hosts photo: Circular frame with Maria & Jan (demo names) waving
   - CTA: "Bekijk onze kamers" (soft coral button)

2. **Breakfast Showcase (The Star Feature):**
   - Section title: "Het beroemde ontbijt" with egg icon
   - **Horizontal scroll gallery** of breakfast items:
     - Fresh croissants, homemade jam jars, local cheese, farm eggs, fresh juice, barista coffee
   - Each item has hover effect: Steam rising animation (CSS), description popup
   - "Dietary wishes" badges: Vegetarisch, Vegan, Gluten-free, Lactose-free
   - **Breakfast Time**: Visual clock showing 08:00 - 10:30 with sun animation

3. **Room Gallery (Cozy & Personal):**
   - Only 4 rooms (intimate scale): "De Zonnebloem", "Het Romantisch Hoekje", "De Tuinkamer", "De Attic Suite"
   - Card design: Rounded-3xl, soft shadow, photo with polaroid-style white border
   - Each room has:
     - Character description (not just specs): "Perfect voor romantici" vs "Ideaal voor natuurliefhebbers"
     - Amenities with cute icons ( rainfall shower, coffee machine, garden view)
     - Price per night including breakfast (DEMO pricing)
     - "Personal touch" note: "Deze kamer heeft originele balken uit 1890"
   - **Booking widget**: Simple date picker with "Check beschikbaarheid" that shows calendar

4. **Meet Your Hosts (Personal Connection):**
   - Split section: Photo of hosts (husband & wife, warm smile) on one side
   - Story text: "Wij zijn Maria en Jan. Sinds 2018 verwelkomen wij gasten in ons droomhuis..."
   - **Host Tips**: Accordion with local secrets (not tourist traps):
     - "Ons favoriete wandelingetje"
     - "De beste bakker van het dorp"
     - "Geheim restaurant aan de gracht"
   - Photo gallery of hosts with guests (blurred faces for privacy demo)

5. **Seasonal Availability (Rustic Calendar):**
   - Visual calendar showing:
     - High season (summer): Warm colors, fully booked warnings
     - Low season (winter): Cozy discounts, "Winter warming package"
     - Spring: Tulip season specials
   - **Weather Widget**: Showing current weather in the village (static demo) with appropriate activity suggestions ("Perfect weer voor een fietstocht!")

6. **Guestbook (Social Proof - Cozy Style):**
   - Not just reviews, but "Gastenboek" style:
     - Handwritten font style cards
     - Photos from guests (breakfast table, garden moments)
     - Longer stories, not just stars: "We voelden ons meteen thuis..."
   - **Leave a message**: Form for future guests to ask questions (demo functionality)

7. **Local Experiences (By Locals):**
   - Map with hand-drawn style pins
   - Categories: "Eten & Drinken", "Natuur", "Cultuur", "Fietstochten"
   - Each recommendation has "Afstand van B&B" (walking/biking distance)
   - Special: "De geheime tuin route" - only locals know

**ADMIN PANEL (/admin):**
- Login: demo/demo123
- Theme: Warm cream background (#fefae0), terracotta accents
- Dashboard:
  - **Today's Guests**: Who is arriving, who is staying, room status
  - **Breakfast Count**: How many guests for breakfast tomorrow, dietary restrictions list
  - **Calendar**: Simple month view with color coding (green=booked, yellow=inquiry, white=free)
  - **Guest Notes**: Special notes per booking ("Anniversary", "Allergic to nuts", "Late arrival")
  - **Reviews Management**: Guestbook entries approval
  - **Housekeeping**: Simple checklist (beds made, towels replaced, breakfast prep)

**GUEST PORTAL (/mijn-verblijf):**
- Login for demo guests
- **Personal Welcome**: "Welkom terug Maria & Jan!" with photo of their booked room
  - Check-in instructions (door code demo: 1234), parking info
  - "Wat wilt u eten?" Breakfast menu selection for tomorrow (radio buttons)
  - Special requests: "Extra kussen", "Late check-out verzoek"
- **Local Guide**: Personalized PDF download "Maria's favorieten"
- **Weather forecast**: "Pak een paraplu mee voor morgen!"
- **Message host**: Chat interface (demo: "Zien we u morgen om 9u voor ontbijt?")

**BLOG (/dagboek):**
- Categories: "Recepten", "Uitstapjes", "B&B Life", "Seizoenen"
- Posts written from host perspective (personal):
  - "Ons recept voor huisgemaakte aardbeienjam"
  - "5 redenen waarom september de beste maand is voor Utrecht"
  - "Achter de schermen: zo bereiden wij het ontbijt voor"
- Recipe cards with printable PDF option

**MICRO-INTERACTIONS:**
- **Steam effect**: Subtle CSS animation on coffee/tea images (opacity transform)
- **Page turns**: Route transitions like turning book pages (3D rotation)
- **Hover**: Buttons fill like spreading jam (from center outward)
- **Focus**: Input fields get soft glow like morning sun
- **Loading**: Coffee cup filling up instead of spinner

**IMAGE STRUCTURE (LOCAL):**
/public/images/bnb/
/breakfast/
- croissants-basket.jpg
- jam-jars.jpg (homemade labels)
- coffee-pour.jpg (steam important)
- fresh-fruit.jpg
- breakfast-table-setting.jpg
/rooms/
- zonnebloem-room.jpg (yellow accents)
- romantisch-hoekje.jpg (canopy bed)
- tuinkamer.jpg (garden view)
- attic-suite.jpg (beams)
- bathroom-details.jpg
/garden/
- morning-terrace.jpg
- flowers-closeup.jpg
- garden-seating.jpg
- entrance-path.jpg
/hosts/
- maria-jan-portrait.jpg (warm, smiling)
- hosts-with-guests-blurred.jpg
- kitchen-preparing.jpg
/details/
- key-vintage.jpg
- flowers-vase.jpg
- bedside-table.jpg
- window-view.jpg
plain
Copy

**SETUP SCRIPT:**
Provide `setup-images.js` with Unsplash URLs:
- Cozy room: https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800
- Breakfast: https://images.unsplash.com/photo-1493770348161-369560ae357d?w=800
- Garden: https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800

**RESPONSIVE:**
- Mobile: Stacked cozy cards, hamburger menu with warm colors, sticky "Bel ons" button (coral)
- Desktop: Side-by-side layouts with soft shadows

**CONTENT (DUTCH - A2/B1, persoonlijk en warm):**
- Tone: "Jij/je" (informal, friendly), "Wij verwelkomen u graag"
- Focus on hospitality, breakfast, personal attention
- Local village charm, not city business

**DEPLOYMENT:**
- Static export ready
- All images local
- Fonts via next/font

Include complete file structure with warm, cozy component architecture.