You are an expert Next.js 14 developer and UI/UX designer. Create a stunning, high-end demo website for an accounting firm (Boekhouder) that showcases premium design capabilities to potential clients.

**PROJECT IDENTITY:**
- Industry: Financieel Administratie / Boekhouder (Accountant)
- Company Name: "De Betrouwbare Boekhouder Amsterdam" 
- Demo Email: demo@techsolutionsutrecht.nl
- Demo Phone: +31 20 123 4567
- Demo Address: Keizersgracht 123, 1015 CJ Amsterdam
- Website: www.techsolutionsutrecht.nl
- Language: Dutch (Nederlands) - use simple B1 level, short sentences, professional but accessible tone

**TECH STACK:**
- Next.js 14 (App Router)
- React 18 + TypeScript
- Tailwind CSS
- Framer Motion (for animations)
- Lucide React (icons)
- shadcn/ui components
- next/image (local images only, no external URLs)

**CRITICAL DESIGN REQUIREMENTS (Visual Wow Factor):**
1. **Non-standard shapes**: Use organic blobs, hexagons, and clip-path shapes for images. NO standard rectangles/squares for hero images.
2. **Glassmorphism**: Use backdrop-blur with rgba backgrounds for cards and navigation
3. **Magnetic interactions**: Buttons should have subtle magnetic pull effect on hover
4. **Typography**: Use variable fonts (Inter or Geist) with animated text reveals on scroll
5. **Color scheme**: Professional navy blue (#1e3a5f) + gold accents (#d4af37) + white, with dark mode support
6. **Side Navigation**: Instead of standard top header, use a floating sidebar on the left with glassmorphism effect containing logo, menu items, and login button
7. **Animated elements**: Sparkle animations on CTA buttons (representing "financial clarity"), number counters that animate when scrolling into view
8. **Device mockup section**: Include a section showing the responsive design inside phone/tablet/desktop frames with rotation toggle

**FUNCTIONAL REQUIREMENTS:**
1. **Authentication System:**
   - Login page at /login with form (username: demo, password: demo123)
   - Client Dashboard at /dashboard (profile layout with sidebar menu)
   - Admin Panel at /admin (showing mock client data, documents list, statistics cards)
   - Include "Login" and "Admin" buttons in the side navigation header

2. **Industry-Specific Tools:**
   - **BTW Calculator**: Interactive VAT calculator on homepage (21%, 9%, 0% rates)
   - **Financial Health Widget**: Visual gauge showing "company health" status
   - **Document Portal Simulation**: Upload area (frontend only) showing "Upload your annual report"
   - **Appointment Scheduler**: Calendar interface for booking consultations

3. **Pages Required:**
   - / (Home): Hero with hexagon image grid, services in glass cards, calculator tool, testimonials with parallax
   - /over-ons (About): Team section with circular clipped images, timeline of company history
   - /diensten (Services): Detailed service cards with hover tilt effects (tax advice, payroll, annual accounts)
   - /tarieven (Pricing): Pricing table with toggle (monthly/yearly) in glassmorphism cards
   - /blog: Blog listing with masonry layout, category filters
   - /contact: Contact form with map integration (static image), floating contact cards
   - /login: Clean centered login with glass effect
   - /dashboard: Client portal with document list, profile card, messages notification
   - /admin: Admin dashboard with stats (revenue chart placeholder, recent clients table)

4. **Floating CTA (CRITICAL):**
   - Fixed position button at bottom-right corner on ALL pages
   - Shimmering/pulsing animation (gold color #d4af37)
   - Text: "Direct Contact"
   - Link: https://techsolutionsutrecht.nl/contact
   - Glassmorphism background with blur

5. **Footer (CRITICAL):**
   - Exact text: "Dit is een demo versie en alle intellectuele rechten behoren toe aan techsolutionsutrecht"
   - Additional: "© 2024 De Betrouwbare Boekhouder - Gebouwd door www.techsolutionsutrecht.nl"

**IMAGE REQUIREMENTS:**
Use placeholder images with descriptive filenames that indicate they should be generated:
- /public/images/hero-accountant-blob.jpg (Professional accountant in modern office, hexagon frame)
- /public/images/team-1.jpg (Business portrait, circular crop ready)
- /public/images/office-dutch.jpg (Amsterdam canal office interior)
- /public/images/documents-digital.jpg (Digital paperwork visualization)
- /public/images/calculator-gold.jpg (Luxury calculator on marble)

**RESPONSIVE (MOBILE-FIRST):**
- 90% of users are mobile - prioritize mobile experience
- Side navigation becomes bottom sheet or hamburger menu on mobile
- Touch-friendly buttons (min 44px)
- Floating CTA stays visible but smaller on mobile
- Test on 320px, 375px, 768px, 1024px+ breakpoints

**CONTENT (DUTCH):**
Write all content in Dutch. Examples:
- Hero: "Uw financiële toekomst, onze zorg"
- CTA: "Gratis adviesgesprek"
- Services: "Jaarrekeningen", "Loonadministratie", "BTW-aangifte", "Fiscaal advies"
- Login labels: "Gebruikersnaam", "Wachtwoord", "Inloggen"

**ACCESSIBILITY:**
- ARIA labels on all interactive elements
- Focus states visible
- Color contrast WCAG AA minimum
- Reduced motion media query support

**OUTPUT:**
Provide complete, production-ready code with file structure. All components must be fully styled and animated. No placeholder text allowed - use realistic Dutch content for an accounting firm. Ensure the demo/demo123 login actually routes to the dashboard with a mock session.