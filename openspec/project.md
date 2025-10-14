# Project Context

## Purpose
Beauteefool is a modern, beautiful landing page and web application for a luxury beauty salon. The project aims to:
- Showcase beauty salon services in an elegant, professional manner
- Provide an engaging user experience with smooth animations and interactive components
- Enable easy booking and contact functionality for potential clients
- Present testimonials and build trust with prospective customers
- Create a responsive, mobile-friendly interface that works across all devices

## Tech Stack

### Core Framework
- **Next.js 15.5.5** - React framework with App Router (RSC enabled)
- **React 19.1.0** - UI library
- **TypeScript 5** - Type-safe development
- **Turbopack** - Fast bundler for development and production builds

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - Component library (New York style variant)
- **Aceternity UI** - Premium animated components
- **TweakCN** - Custom theme registry (vintage-paper theme)
- **Framer Motion 12.23.24** - Animation library for smooth transitions
- **Lucide React 0.545.0** - Icon library
- **Tabler Icons** - Additional icon set

### UI Component Libraries
- **Radix UI** - Headless UI primitives (@radix-ui/react-label, @radix-ui/react-slot)
- **class-variance-authority** - Component variant management
- **clsx** & **tailwind-merge** - Conditional class name utilities

### Development Tools
- **ESLint 9** - Code linting
- **PostCSS** - CSS processing
- **tw-animate-css** - Tailwind animation utilities

## Project Conventions

### Code Style
- **Language**: TypeScript with strict mode enabled
- **File naming**: kebab-case for components (e.g., `hero-section.tsx`, `contact-form.tsx`)
- **Component naming**: PascalCase for component names (e.g., `HeroSection`, `ContactForm`)
- **Client components**: Always marked with `"use client"` directive at the top
- **Imports**: Use path aliases (`@/components`, `@/lib`, `@/ui`)
- **Formatting**: 
  - 2-space indentation
  - Double quotes for strings
  - Semicolons required
  - ES2017+ features allowed

### Architecture Patterns
- **Component structure**: Modular, reusable components in `/components` directory
- **UI components**: Shared UI primitives in `/components/ui`
- **Feature components**: Page-specific sections (hero, services, testimonials, etc.)
- **Server/Client separation**: RSC (React Server Components) by default, client components only when needed
- **Styling approach**: Tailwind utility classes, no CSS modules
- **Color scheme**: Pink-to-rose gradient primary (`from-pink-500 to-rose-500`)
- **Layout pattern**: App Router with `app/layout.tsx` and `app/page.tsx`

### Component Registry Configuration
- **Primary registry**: @shadcn (ui.shadcn.com)
- **Secondary registries**: 
  - @aceternity (ui.aceternity.com) - for premium animated components
  - @tweakcn (tweakcn.com) - for custom themes
  - @acme (acme.com) - placeholder registry
- **Style variant**: New York
- **Base color**: Gray
- **CSS variables**: Enabled for theming

### Testing Strategy
- Currently no testing framework configured
- Future considerations: Jest + React Testing Library for unit/integration tests
- E2E testing with Playwright recommended for booking flows

### Git Workflow
- Project uses OpenSpec for change management
- Conventional commits recommended
- Feature branches for new functionality
- Main branch for production-ready code

## Domain Context

### Beauty Salon Business Context
- **Target audience**: Customers seeking luxury beauty services
- **Core services**: 
  - Hair Styling
  - Spa & Massage
  - Facial Treatments
  - Nail Care
  - Makeup Artistry
  - Skin Care

### Key Features
- **Hero section**: Eye-catching landing with highlighted text and CTA buttons
- **Services showcase**: Interactive focus cards displaying service categories
- **Features/USPs**: 3D cards highlighting unique selling points
- **Social proof**: Customer testimonials with ratings
- **Contact/Booking**: Quick booking form with animated gradient background
- **Navigation**: Fixed responsive nav with smooth scroll anchors and active route highlighting
- **Responsive design**: Mobile-first approach with breakpoints
- **Gallery page**: Filterable image portfolio with lightbox viewer
  - Masonry grid layout (4-3-2-1 columns responsive)
  - Category filtering (Hair, Nails, Makeup, Spa, Interior)
  - Full-screen lightbox with keyboard and touch navigation
  - Lazy loading images for performance
  - 20 curated placeholder images across 5 categories

### Content Strategy
- Professional, luxurious tone
- Focus on personalization and premium quality
- Emphasis on expert staff and organic products
- Trust-building through testimonials
- Visual proof through gallery portfolio

## Important Constraints

### Technical Constraints
- Must support both light and dark modes
- Must be fully responsive (mobile, tablet, desktop)
- Animations must be performant (use Framer Motion sparingly)
- Images use Unsplash URLs (should be replaced with local assets in production)
- Server-side rendering enabled - avoid browser-only APIs in server components

### Business Constraints
- Contact information is placeholder (needs real business data)
- Booking form currently simulates API calls (needs backend integration)
- No payment processing implemented yet
- No actual booking calendar/scheduling system

### Performance Constraints
- Use Next.js Image component for optimized images
- Minimize client-side JavaScript (prefer RSC)
- Lazy load heavy animated components when possible
- Keep bundle size reasonable

## External Dependencies

### Component Registries
- **shadcn/ui**: https://ui.shadcn.com/schema.json
- **Aceternity UI**: https://ui.aceternity.com/registry/{name}.json
- **TweakCN**: https://tweakcn.com/r/themes/{name}.json

### Image Sources
- **Unsplash** - Placeholder images for services (should be replaced with professional salon photography)

### Future Integrations (Planned)
- **Booking API**: For appointment scheduling
- **Email service**: For contact form submissions (e.g., SendGrid, Resend)
- **Google Maps**: For location display
- **Analytics**: Google Analytics or Plausible for tracking
- **Social media**: Instagram API for gallery feed

### Icon Libraries
- **Lucide React**: Primary icon set
- **Tabler Icons**: Secondary icons for specific use cases

## Current Component Inventory

### Page Sections
- `navigation.tsx` - Fixed top navigation with mobile menu
- `hero-section.tsx` - Hero with highlight effect and CTA
- `services-section.tsx` - Service showcase with focus cards
- `features-section.tsx` - Features/USPs with 3D cards
- `testimonials-section.tsx` - Customer reviews
- `cta-section.tsx` - Call-to-action with booking form
- `contact-form.tsx` - Standalone contact form (legacy)

### Gallery Components (NEW)
- `gallery-grid.tsx` - Masonry grid layout for images
- `gallery-filter.tsx` - Category filtering buttons
- `image-lightbox.tsx` - Full-screen image viewer with keyboard/touch navigation

### UI Components (from registries)
- From shadcn: button, input, label, textarea, card, skeleton
- From Aceternity: hero-highlight, 3d-card, focus-cards, background-gradient-animation, text-generate-effect, tailwindcss-buttons, layout-grid, parallax-scroll

### Pages
- `/` - Home page with all landing sections
- `/gallery` - Gallery page with filterable image portfolio

### Data/Config
- `lib/gallery-data.ts` - Gallery image data and helper functions
- `lib/utils.ts` - Utility functions (cn helper)
