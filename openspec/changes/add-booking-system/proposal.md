# Proposal: Add Booking System

## Why

The current website has "Book Now" call-to-action buttons throughout (hero section, CTA section, gallery page) that link to a contact form (`/#contact`), but there's no dedicated appointment booking functionality. Clients cannot select services, choose time slots, or receive booking confirmations. This creates friction in the customer journey and missed business opportunities.

## What Changes

- **NEW**: Dedicated `/booking` page with multi-step booking flow
- **NEW**: Service selection interface with pricing and duration information
- **NEW**: Date and time picker with availability calendar
- **NEW**: Customer information collection form
- **NEW**: Booking confirmation page with appointment details
- **NEW**: Client-side booking state management
- **NEW**: Booking data structure and validation
- **MODIFIED**: Update "Book Now" CTAs across the site to link to `/booking` page
- **MODIFIED**: Navigation component to include "Book Now" link (optional - may be CTA only)

### Booking Flow (4 Steps)

1. **Service Selection** - Choose one or more services from catalog
2. **Date & Time** - Select appointment date and available time slot
3. **Customer Info** - Enter contact details and special requests
4. **Confirmation** - Review and submit booking

### Implementation Approach

**Phase 1 (MVP - Client-Side Only)**
- No backend integration initially
- Simulated availability (all slots available)
- Local storage for booking state
- Email simulation (console log)
- Focus on UX and UI polish

**Phase 2 (Future - Backend Integration)**
- Real-time availability checking
- Database persistence
- Email notifications (Resend/SendGrid)
- Calendar integration (Google Calendar)
- Admin dashboard for managing bookings
- Payment processing (Stripe)

## Impact

### Affected Specs
- **NEW**: `booking` - Complete booking system specification
- **MODIFIED**: `navigation` (if adding booking link to nav)

### Affected Code
- **NEW Files**:
  - `app/booking/page.tsx` - Main booking page with stepper
  - `app/booking/confirmation/page.tsx` - Booking confirmation
  - `components/booking/service-selection.tsx` - Step 1 component
  - `components/booking/datetime-picker.tsx` - Step 2 component
  - `components/booking/customer-form.tsx` - Step 3 component
  - `components/booking/booking-summary.tsx` - Step 4 review
  - `components/booking/booking-stepper.tsx` - Progress indicator
  - `lib/booking-data.ts` - Service catalog and availability helpers
  - `lib/booking-validation.ts` - Form validation logic
  - `types/booking.ts` - TypeScript interfaces

- **MODIFIED Files**:
  - `components/hero-section.tsx` - Update CTA button link
  - `components/cta-section.tsx` - Update booking button link
  - `app/gallery/page.tsx` - Update "Book Now" link
  - `components/navigation.tsx` - Add booking link (optional)
  - `openspec/project.md` - Document booking system

### User Experience Changes
- ✨ Clear, guided booking process
- ⏱️ Estimated time: 2-3 minutes to complete booking
- 📱 Mobile-optimized multi-step form
- ✅ Immediate visual feedback and validation
- 🎨 Consistent with existing pink-rose gradient theme

### Business Impact
- **Positive**: Direct booking path increases conversions
- **Positive**: Professional booking experience builds trust
- **Neutral**: No actual appointment creation (MVP is client-side only)
- **Note**: Backend integration required for production use

### Technical Considerations
- **Complexity**: Medium - Multi-step form with state management
- **Dependencies**: Will use existing shadcn/ui components (calendar, select, input)
- **Performance**: Client-side only, minimal bundle impact
- **Testing**: Manual testing initially, automated tests recommended

### Breaking Changes
- None - This is purely additive functionality

## Success Criteria

- [ ] Users can complete entire booking flow without errors
- [ ] Form validation prevents invalid submissions
- [ ] Booking confirmation displays all selected details
- [ ] Mobile experience is smooth and intuitive
- [ ] "Book Now" CTAs across site lead to booking page
- [ ] Visual design matches existing salon aesthetic
- [ ] Page loads in < 2 seconds on 3G connection
