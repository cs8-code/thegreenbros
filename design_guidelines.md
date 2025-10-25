# TheGreenBros Landing Page - Design Guidelines

## Design Approach

**Reference-Based Approach:** Drawing inspiration from premium service-based landing pages that emphasize trust, craftsmanship, and visual storytelling. Think modern home services meets nature photography portfolio—professional credibility with organic, approachable warmth.

**Core Principles:**
- Natural authenticity over corporate sterility
- Visual proof through high-quality imagery
- Progressive trust-building through each section
- Clear conversion pathways without aggressive sales tactics

## Typography System

**Font Families:**
- Primary: 'Inter' or 'DM Sans' (clean, modern sans-serif for UI elements)
- Headings: 'Outfit' or 'Sora' (friendly yet professional, slightly rounded)
- All via Google Fonts CDN

**Type Scale:**
- Hero Headline: text-5xl md:text-6xl lg:text-7xl, font-bold
- Section Headlines: text-3xl md:text-4xl lg:text-5xl, font-bold
- Subsection Titles: text-xl md:text-2xl, font-semibold
- Service Card Titles: text-lg md:text-xl, font-semibold
- Body Text: text-base md:text-lg, font-normal (leading-relaxed)
- Small Text (testimonials, captions): text-sm md:text-base

## Layout System

**Spacing Primitives:** Consistent use of Tailwind units: 4, 6, 8, 12, 16, 20, 24 for vertical rhythm
- Section padding: py-16 md:py-24 lg:py-32
- Container spacing: px-4 md:px-8 lg:px-12
- Card/Component gaps: gap-6 md:gap-8 lg:gap-12
- Element spacing: space-y-4 to space-y-8

**Container Widths:**
- Full-width sections: w-full with max-w-7xl mx-auto
- Content sections: max-w-6xl mx-auto
- Form containers: max-w-2xl

**Grid Patterns:**
- Services: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Testimonials: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Gallery: masonry-style grid or grid-cols-2 md:grid-cols-3 lg:grid-cols-4

## Component Library

### Hero Section
- Full-viewport height (min-h-screen) with high-quality garden imagery as background
- Dark overlay (bg-black/40) for text readability
- Centered content with large headline, supporting slogan, and prominent CTA button
- Buttons on hero image should have backdrop-blur-md and semi-transparent backgrounds (bg-white/10 for outlined, bg-green/90 for primary)
- CTA button: Large (px-8 py-4), rounded-lg, with arrow icon from Heroicons

### Navigation
- Sticky header (sticky top-0 z-50) with backdrop-blur-lg and subtle border-bottom
- Logo on left, navigation links center/right
- Mobile: hamburger menu transforming to full-screen overlay
- Smooth scroll behavior to section anchors

### Service Cards
- Elevated cards with rounded-xl borders and subtle shadows (shadow-lg hover:shadow-xl transition)
- Icon at top (Heroicons: WrenchScrewdriverIcon, TreeDeciduousIcon, etc.) - size-12 md:size-16
- Title, 2-3 line description
- Hover effect: subtle lift (hover:-translate-y-1 transition-transform)

### Gallery/Referenzen Section
- Grid layout with varied image sizes for visual interest
- Before/after slider component for select projects (split-screen with draggable divider)
- Lightbox functionality on image click (simple modal overlay)
- Image aspect ratios: aspect-[4/3] or aspect-square for consistency

### Testimonial Cards
- Rounded-2xl cards with padding p-6 md:p-8
- 5-star rating at top (Heroicons star icons)
- Quote text in slightly larger, italic font
- Client name and role at bottom with small avatar or initials circle
- Background: subtle texture or very light tint

### Contact Form
- Two-column layout on desktop: form left, contact info/map right
- Form inputs: Large touch targets (py-3 px-4), rounded-lg borders
- Textarea for message: min-h-32
- Submit button: Full-width on mobile, auto-width on desktop, with loading state
- Validation states with inline error messages (text-red-600)

### Sticky CTA Button
- Fixed bottom-right (fixed bottom-8 right-8) on scroll
- Floating appearance with shadow-2xl
- Pulse animation on initial appearance (animate-pulse once)
- WhatsApp icon integration option

### Footer
- Three-column layout on desktop (Company info, Quick links, Contact)
- Single column stack on mobile
- Separator line above footer
- Social icons: rounded-full with hover effects
- Copyright and legal links at bottom

## Images & Visual Assets

**Icons:** Heroicons (outline style for consistency with natural aesthetic)

**Images Needed:**
1. **Hero Background:** Stunning, high-resolution landscape garden shot - lush green lawn, well-maintained garden beds, professional hardscaping visible. Should convey quality and care. (Full-width, min-h-screen)

2. **Über Uns Section:** Team photo or close-up of hands working in garden - authentic, documentary style (max-w-xl, rounded-xl)

3. **Gallery/Referenzen:** 8-12 before/after project images showing transformations:
   - Overgrown garden → manicured landscape
   - Bare yard → installed terrace/patio
   - Unruly hedges → shaped topiary
   - Dead lawn → lush green turf
   (Mixed sizes in masonry grid)

4. **Testimonial Avatars:** Placeholder initials or simple portrait shots if available (size-12, rounded-full)

5. **Service Section Icons:** Use Heroicons - no custom images needed

6. **Google Maps:** Embedded iframe showing service area coverage

## Interaction & Animation

**Minimal, Purposeful Animations:**
- Smooth scroll: CSS scroll-behavior: smooth
- Scroll-reveal: Fade-in + slight slide-up on section entry (IntersectionObserver, transform translateY(20px) → 0)
- Hero fade-in on load: 0.8s duration
- Button hover: Subtle scale (hover:scale-105) with 200ms transition
- Card hover: Shadow expansion and slight lift
- Form focus states: Border emphasis with transition

**No Animations:**
- Parallax effects
- Complex scroll-triggered sequences
- Auto-playing carousels
- Distracting motion graphics

## Responsive Breakpoints

- Mobile-first approach
- sm: 640px (stacked layouts)
- md: 768px (2-column transitions)
- lg: 1024px (3-column grids, full desktop experience)
- xl: 1280px (max container widths reached)

## Accessibility Standards

- Semantic HTML throughout (header, nav, main, section, footer)
- ARIA labels for icon-only buttons and navigation
- Sufficient contrast ratios for text on images
- Focus indicators on all interactive elements (focus:ring-2 ring-offset-2)
- Alt text for all images (descriptive, German language)
- Form labels properly associated with inputs
- Keyboard navigation support for all interactions

## German Language Implementation

All text content in German, maintaining professional yet approachable tone:
- Formal "Sie" for business communication
- Clear, benefit-focused service descriptions
- Trust-building testimonial language
- Action-oriented CTA copy

This design creates a trustworthy, conversion-optimized landing page that showcases TheGreenBros' expertise through compelling visuals and clear service communication.