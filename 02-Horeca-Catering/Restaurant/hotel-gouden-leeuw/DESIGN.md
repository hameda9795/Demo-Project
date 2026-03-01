# The Art of Arrival - Design Philosophy

## Concept

"The Art of Arrival" is the guiding design philosophy behind Hotel De Gouden Leeuw's website. This concept captures the feeling of entering a luxury hotel lobby - the anticipation, the warmth, the architectural beauty, and the sense of coming home.

## Core Principles

### 1. Architectural Archways
- **Visual Elements**: Arch-shaped containers for images (border-radius: 50% 50% 0 0)
- **Purpose**: Creates the feeling of looking through doorways into different spaces
- **Implementation**: Room cards, gallery items, and section dividers

### 2. Layered Depth
- **Parallax Effects**: Backgrounds move slower than foreground content
- **Shadow Systems**: Soft, multi-layered shadows creating depth (shadow-arch, shadow-lift)
- **Z-index Hierarchy**: Clear visual layering of elements

### 3. Warm Lighting
- **Color Palette**: Deep navy backgrounds with gold accents
- **Gradient Overlays**: Subtle gradients on images for warmth
- **Glow Effects**: Gold glow on interactive elements (pulse animation)

### 4. Premium Textures
- **Noise Overlay**: Subtle paper-like texture (opacity 0.03) for premium feel
- **Smooth Surfaces**: Clean, modern surfaces with subtle shadows

## Animation Philosophy

### Curtain Reveal
- Elements unfold from center like opening curtains
- Clip-path animations for dramatic reveals
- Scale + opacity transitions for content entry

### Door Opening
- Hover effects that suggest doors opening
- Gold borders appearing on hover
- Content sliding up from bottom

### Gold Shimmer
- Button hover effects with moving gradients
- Suggests luxury and attention to detail

## Color Psychology

### Navy (#1e3a5f)
- Trust, stability, luxury
- Used for: Headers, primary buttons, admin theme

### Gold (#d4af37)
- Premium, success, warmth
- Used for: Accents, hover states, important CTAs

### Cream (#faf9f6)
- Comfort, cleanliness, elegance
- Used for: Backgrounds, cards, content areas

### Burgundy (#722f37)
- Sophistication, richness
- Used for: Spa section, accents, alerts

## Typography

### Cormorant Garamond
- **Usage**: Headlines, titles, elegant text
- **Characteristics**: Serif, timeless, sophisticated
- **Weights**: 300-700 for hierarchy

### Montserrat
- **Usage**: Body text, UI elements, buttons
- **Characteristics**: Sans-serif, modern, clean
- **Weights**: 300-700 for emphasis

## Interaction Design

### Micro-interactions
- Input borders turn gold on focus
- Placeholders float up (floating labels)
- Cards lift on hover (translateY -5px)
- Buttons have shimmer effect

### Scroll Behavior
- Smooth scroll for navigation
- Reveal animations on scroll into view
- Parallax for hero sections

### Mobile Considerations
- Stacked layouts for small screens
- Touch-friendly tap targets (min 44px)
- Hamburger menu with gold accent
- Bottom-center floating CTA on mobile

## Responsive Breakpoints

- **Mobile**: < 640px (1 column, stacked)
- **Tablet**: 640px - 1024px (2 columns)
- **Desktop**: > 1024px (full layouts, parallax)

## Component Patterns

### Arch Card
```
┌─────────────────────────┐
│    ╭───────────────╮    │
│   ╱                 ╲   │
│  │   [Image Here]    │  │
│  │                   │  │
│  │   [Content]       │  │
│   ╲                 ╱   │
│    ╰───────────────╯    │
└─────────────────────────┘
```

### Floating CTA
```
    ┌──────────────┐
   ╱    [Icon]     ╲
  │   Direct Boeken  │
   ╲                ╱
    └──────────────┘
        (Pulse)
```

## Accessibility

- Focus visible states with gold outline
- Semantic HTML structure
- ARIA labels for interactive elements
- Color contrast compliance (WCAG AA)
- Reduced motion support for animations

## Performance

- Next.js image optimization
- Lazy loading for below-fold content
- Font preloading
- CSS animations over JS where possible

---

This design system creates a cohesive, luxury hotel experience that guides visitors through "The Art of Arrival" from their first interaction to booking.
