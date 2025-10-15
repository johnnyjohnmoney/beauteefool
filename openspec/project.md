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

### Form Validation
- **Zod 3.24.1** - TypeScript-first schema validation for booking forms

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
- **Online Booking System**: Complete 4-step wizard for appointment booking
  - Step 1: Service selection with category filtering (20 services)
  - Step 2: Date and time selection with availability checking
  - Step 3: Customer information form with real-time validation
  - Step 4: Review and confirmation
  - Auto-save to localStorage for draft persistence
  - Confirmation page with booking details and actions

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

### Booking System Components (NEW)
- `booking/booking-stepper.tsx` - 4-step progress indicator (mobile + desktop layouts)
- `booking/service-selection.tsx` - Service selection grid with category filters (Step 1)
- `booking/datetime-picker.tsx` - Calendar and time slot selection (Step 2)
- `booking/customer-form.tsx` - Contact information form with validation (Step 3)
- `booking/booking-summary.tsx` - Review all selections with edit capabilities (Step 4)

### UI Components (from registries)
- From shadcn: button, input, label, textarea, card, skeleton, calendar, select, radio-group, checkbox
- From Aceternity: hero-highlight, 3d-card, focus-cards, background-gradient-animation, text-generate-effect, tailwindcss-buttons, layout-grid, parallax-scroll

### Pages
- `/` - Home page with all landing sections
- `/gallery` - Gallery page with filterable image portfolio
- `/booking` - Multi-step booking wizard with 4 steps
- `/booking/confirmation` - Booking confirmation page with success details

### Data/Config
- `lib/gallery-data.ts` - Gallery image data and helper functions
- `lib/booking-data.ts` - Service catalog (20 services), business hours, booking utilities
- `lib/booking-validation.ts` - Zod schemas for form validation, phone/date helpers
- `lib/utils.ts` - Utility functions (cn helper)

### TypeScript Types
- `types/booking.ts` - Complete type definitions for booking system (Service, CustomerInfo, BookingData, BookingStep, etc.)

---

## Booking System Architecture

### Overview
The booking system is a complete client-side appointment scheduling solution with 4 wizard steps, real-time validation, and localStorage persistence. It supports multi-service selection, date/time availability checking, and provides a confirmation flow.

### Data Flow
1. **Service Selection (Step 1)** → User selects 1-5 services → Updates `selectedServiceIds` state
2. **Date/Time Selection (Step 2)** → User picks date + time → Updates `selectedDate` and `selectedTime` state
3. **Customer Info (Step 3)** → User fills form → Updates `customerInfo` state with validation
4. **Review (Step 4)** → User confirms → Creates `BookingConfirmation` → Redirects to confirmation page

### State Management
- **Primary state**: React useState hooks in `app/booking/page.tsx`
  - `selectedServiceIds: string[]` - Array of selected service IDs
  - `selectedDate: Date | null` - Chosen appointment date
  - `selectedTime: string | null` - Chosen time slot (e.g., "10:00 AM")
  - `customerInfo: CustomerInfo | null` - Customer contact details
  - `currentStep: BookingStep` - Current wizard step (1-4)
  - `completedSteps: Set<BookingStep>` - Steps that can be edited
  - `isSubmitting: boolean` - Loading state during confirmation

- **Persistence**: All state auto-saves to localStorage on change
  - Draft key: `'beauteefool-booking-draft'`
  - Confirmation key: `'booking-confirmation'`

### Service Catalog
- **Location**: `lib/booking-data.ts`
- **Count**: 20 services across 5 categories
- **Categories**: Hair (5), Nails (4), Makeup (4), Spa (3), Facial (4)
- **Service properties**:
  - `id: string` - Unique identifier
  - `name: string` - Service name
  - `category: ServiceCategory` - Category grouping
  - `description: string` - Brief description
  - `price: number` - Price in dollars
  - `duration: number` - Duration in minutes
  - `image: string` - Unsplash image URL
  - `popular: boolean` - Popular badge flag

### Business Rules
- **Hours**: 9:00 AM - 7:00 PM (configurable in `BUSINESS_HOURS`)
- **Time slots**: 30-minute intervals
- **Selection limits**: 1-5 services per booking
- **Availability**: Basic validation (no past dates/times, no double-booking logic yet)
- **Price calculation**: Sum of all selected service prices
- **Duration calculation**: Sum of all selected service durations

### Validation Rules
Implemented using Zod schemas in `lib/booking-validation.ts`:

#### Customer Info
- **Name**: 2-100 characters, required
- **Email**: Valid email format (regex), required
- **Phone**: Minimum 10 digits, required
- **Special Requests**: 0-500 characters, optional

#### Date/Time
- **Date**: Must be today or future date
- **Time**: Must not be in the past if today is selected
- **Business hours**: Time must be within 9 AM - 7 PM

#### Services
- **Minimum**: At least 1 service must be selected
- **Maximum**: Up to 5 services allowed (soft limit)

### Component Architecture

#### Booking Page (`app/booking/page.tsx`)
- Main orchestrator for wizard flow
- Manages all booking state
- Handles step navigation and validation
- Auto-saves to localStorage on every state change
- Generates confirmation ID (UUID) on submit
- Redirects to confirmation page with query param

#### Step Components
1. **ServiceSelection** - Grid of service cards, category filter, sticky summary footer
2. **DateTimePicker** - shadcn Calendar + time slot grid, appointment summary box
3. **CustomerForm** - Form inputs with real-time Zod validation, error display
4. **BookingSummary** - 3 collapsible sections (services, date/time, customer), edit buttons

#### Supporting Components
- **BookingStepper** - Visual progress indicator (mobile vertical, desktop horizontal)
- **ConfirmationPage** - Success page with booking details, print/new booking/home actions

### LocalStorage Schema

#### Draft Booking
```json
{
  "selectedServiceIds": ["hair-styling-1", "facial-classic"],
  "selectedDate": "2025-10-20T00:00:00.000Z",
  "selectedTime": "2:00 PM",
  "customerInfo": {
    "fullName": "Jane Doe",
    "email": "jane@example.com",
    "phone": "5551234567",
    "specialRequests": "First time customer"
  },
  "currentStep": 3,
  "completedSteps": [1, 2]
}
```

#### Confirmed Booking
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "confirmedAt": "2025-10-15T14:30:00.000Z",
  "bookingData": {
    "selectedServices": [...], // Full Service objects
    "selectedDate": "2025-10-20T00:00:00.000Z",
    "selectedTime": "2:00 PM",
    "customerInfo": { ... },
    "totalPrice": 150,
    "totalDuration": 120
  }
}
```

### Integration Points

#### Current (Client-Side Only)
- **Storage**: Browser localStorage
- **Validation**: Client-side Zod schemas
- **Confirmation**: UUID generation + localStorage
- **No backend**: All data stays in browser

#### Future Backend Integration
To connect to a real booking system, implement:

1. **POST `/api/bookings`** - Submit booking
   - Body: `BookingData` object
   - Returns: `{ id: string, confirmedAt: string, status: string }`
   - Action: Replace localStorage save with API call in `handleConfirm`

2. **GET `/api/availability`** - Check real-time availability
   - Query: `?date=2025-10-20&serviceIds=hair-1,nails-2`
   - Returns: `{ availableSlots: string[] }`
   - Action: Replace `generateTimeSlots` with API call

3. **POST `/api/send-confirmation`** - Send confirmation email
   - Body: `{ bookingId: string, customerEmail: string }`
   - Returns: `{ emailSent: boolean }`
   - Action: Call after successful booking

4. **GET `/api/services`** - Fetch services from database
   - Returns: `Service[]`
   - Action: Replace `lib/booking-data.ts` hardcoded services

#### Email Integration
- Send confirmation emails to customers
- Send notification to salon staff
- Suggested services: SendGrid, Resend, Nodemailer

#### Calendar Integration
- Sync with Google Calendar for staff schedules
- Check real availability against existing appointments
- Block out booked time slots

### Styling & Theming
- **Primary gradient**: `bg-gradient-to-r from-pink-500 to-rose-500`
- **Hover gradient**: `hover:from-pink-600 hover:to-rose-600`
- **Dark mode**: Full support with `dark:` variants throughout
- **Responsive**: Mobile-first with md: and lg: breakpoints
- **Animations**: Framer Motion for step transitions and success checkmark

### Testing
- **Manual testing checklist**: `TESTING-CHECKLIST.md`
- **100+ test cases** covering happy paths, edge cases, validation, responsive design
- **Browser compatibility**: Chrome, Firefox, Safari recommended
- **Accessibility**: Keyboard navigation, screen reader support, WCAG contrast ratios

### Known Limitations
- **No backend**: Bookings only saved to localStorage (lost on browser clear)
- **No real availability**: Time slots don't reflect actual bookings
- **No payment**: No payment processing integration
- **No email**: No confirmation emails sent
- **No admin panel**: No way to view/manage bookings
- **Single-device**: Bookings not synced across devices
