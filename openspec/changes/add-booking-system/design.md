# Design: Booking System

## Context

The Beauteefool salon website currently lacks a dedicated booking system. Users who click "Book Now" are redirected to a contact form, which requires manual follow-up. This creates friction in the customer journey and reduces conversion rates.

We need a guided, user-friendly booking experience that works immediately (client-side MVP) while being architected to support future backend integration.

## Goals / Non-Goals

### Goals
- ✅ **Immediate value**: Working booking flow on day 1 (client-side only)
- ✅ **Clear UX**: Multi-step wizard guides users through booking
- ✅ **Professional feel**: Matches luxury salon brand aesthetic
- ✅ **Mobile-first**: Optimized for phone bookings
- ✅ **Future-ready**: Architecture supports backend integration later
- ✅ **Low complexity**: Reuse existing components, avoid over-engineering

### Non-Goals
- ❌ **No backend** in MVP (Phase 2 feature)
- ❌ **No payment processing** initially
- ❌ **No real availability** checking (simulated in MVP)
- ❌ **No staff selection** (assume single stylist/team)
- ❌ **No booking cancellation** in MVP

## Decisions

### 1. Multi-Step Form vs. Single Page

**Decision**: Use multi-step wizard (4 steps)

**Rationale**:
- Reduces cognitive load - one decision at a time
- Mobile-friendly - less scrolling on small screens
- Professional appearance - matches salon booking apps
- Clear progress indication builds confidence
- Easier to validate each step before proceeding

**Alternatives considered**:
- Single long form: Overwhelming on mobile, harder to validate progressively
- Modal-based: Limits screen space, accessibility concerns

### 2. State Management Approach

**Decision**: React Context + Local Storage

**Rationale**:
- Simple, no external dependencies (Redux, Zustand)
- Local storage provides persistence across refreshes
- Context API sufficient for single booking flow
- Easy to migrate to backend state later

**Implementation**:
```typescript
// Context stores current booking state
interface BookingState {
  step: number;
  selectedServices: Service[];
  selectedDate: Date | null;
  selectedTime: string | null;
  customerInfo: CustomerInfo | null;
}

// Local storage for persistence
localStorage.setItem('booking-draft', JSON.stringify(bookingState));
```

### 3. Date/Time Selection Component

**Decision**: Use shadcn/ui Calendar + custom time slot grid

**Rationale**:
- Calendar component already styled and accessible
- Custom time slot grid gives fine control over UX
- Can show "busy" slots visually (grayed out)
- Mobile-friendly tap targets

**Time slot grid design**:
- 30-minute intervals (e.g., 9:00 AM, 9:30 AM, 10:00 AM)
- Business hours: 9 AM - 7 PM (configurable)
- Visual indicators: Available (pink), Selected (dark pink), Unavailable (gray)

### 4. Service Catalog Structure

**Decision**: Static service catalog in `lib/booking-data.ts`

```typescript
interface Service {
  id: string;
  name: string;
  category: 'hair' | 'nails' | 'makeup' | 'spa' | 'facial';
  description: string;
  duration: number; // minutes
  price: number; // dollars
  image: string;
  popular?: boolean;
}
```

**Rationale**:
- Services change infrequently (weeks/months)
- Static data = fast load, no API calls
- Easy to migrate to CMS/admin panel later
- TypeScript types provide validation

### 5. Booking Confirmation Flow

**Decision**: Redirect to separate confirmation page (`/booking/confirmation`)

**Rationale**:
- Clear endpoint - "booking complete" feeling
- Can share confirmation link
- Prevents accidental re-submission
- Allows booking summary to be bookmarked

**Flow**:
```
/booking (step 1-4) → Submit → /booking/confirmation?id=xyz
                                    ↓
                          Display confirmation details
                          Option to download/email receipt
```

### 6. Form Validation Strategy

**Decision**: Progressive validation with Zod schema

**Rationale**:
- Validate each step before allowing "Next"
- Show errors inline, near the field
- Use Zod for TypeScript-first validation
- Consistent with Next.js best practices

**Validation rules**:
- Step 1: At least one service selected
- Step 2: Date is today or future, time slot selected, within business hours
- Step 3: Valid email format, phone number, name required
- Step 4: All previous steps valid (safety check)

### 7. Responsive Design Strategy

**Breakpoints**:
- Mobile (< 768px): Single column, stacked form fields
- Tablet (768px - 1024px): Two-column service grid
- Desktop (> 1024px): Three-column service grid, side-by-side time selection

**Touch optimization**:
- Large tap targets (min 44x44px)
- No hover-dependent interactions
- Swipe gestures for stepper navigation (future enhancement)

### 8. Color and Theming

**Decision**: Maintain pink-to-rose gradient brand identity

**Application**:
- Stepper progress indicator: Active step = gradient, completed = solid pink, upcoming = gray
- Selected services: Pink border + background tint
- Selected time slot: Pink gradient background
- Primary buttons: Pink gradient (`from-pink-500 to-rose-500`)
- Success confirmation: Pink accent with checkmark animation

## Data Flow

```
User Action → Component State → Booking Context → Local Storage
                                       ↓
                               Validation (Zod)
                                       ↓
                              Step Transition
                                       ↓
                            Final Submit (Console log in MVP)
                                       ↓
                          Navigate to /booking/confirmation
```

## Technical Architecture

### File Structure
```
app/
  booking/
    page.tsx                    # Main booking wizard
    confirmation/
      page.tsx                  # Success page
    layout.tsx                  # Booking-specific metadata

components/
  booking/
    booking-stepper.tsx         # Progress indicator
    service-selection.tsx       # Step 1
    datetime-picker.tsx         # Step 2
    customer-form.tsx           # Step 3
    booking-summary.tsx         # Step 4
    booking-context.tsx         # State management

lib/
  booking-data.ts               # Service catalog
  booking-validation.ts         # Zod schemas

types/
  booking.ts                    # TypeScript interfaces
```

### Component Hierarchy
```
BookingPage
├── BookingStepper (1→2→3→4)
├── BookingContext.Provider
│   ├── Step 1: ServiceSelection
│   │   └── ServiceCard[] (grid)
│   ├── Step 2: DateTimePicker
│   │   ├── Calendar (shadcn)
│   │   └── TimeSlotGrid (custom)
│   ├── Step 3: CustomerForm
│   │   ├── Input (name, email, phone)
│   │   └── Textarea (notes)
│   └── Step 4: BookingSummary
│       ├── Selected services
│       ├── Date/time
│       ├── Customer info
│       └── Total price
└── Navigation buttons (Back/Next/Submit)
```

## Risks / Trade-offs

### Risk: Users expect real booking confirmation
**Mitigation**: 
- Clear messaging: "We'll contact you to confirm"
- Confirmation page states "Pending confirmation"
- Phase 2 roadmap visible to stakeholders

### Risk: No backend = potential booking conflicts
**Mitigation**:
- MVP targets small salon (low volume)
- Manual booking review via email/console
- Phase 2 prioritizes real-time availability

### Risk: Local storage can be cleared
**Mitigation**:
- Auto-save every field change
- "Save draft" messaging
- Confirmation page allows re-booking if lost

### Trade-off: Client-side only limits features
**Accepted because**:
- Faster time-to-market
- Proves UX before backend investment
- Salon can manually manage bookings short-term

## Migration Plan (Phase 1 → Phase 2)

### Backend Integration Steps
1. Set up database schema (Postgres/Supabase)
2. Create API routes (`/api/bookings`, `/api/availability`)
3. Replace mock data with API calls
4. Add authentication (optional - email-based booking codes)
5. Implement email notifications
6. Add admin dashboard

### Data Migration
- No migration needed (Phase 1 doesn't persist bookings)
- Booking schema designed to match future API structure

### Backward Compatibility
- Old `/booking` URLs continue to work
- Form structure remains the same
- Only submission handler changes

## Open Questions

- **Q**: Should we allow multiple services in one booking?
  - **A**: Yes - common to book haircut + color together
  
- **Q**: How to handle service duration overlap?
  - **A**: Sum total duration, show estimated end time
  
- **Q**: Business hours on weekends vs. weekdays?
  - **A**: Configurable in `booking-data.ts`, default 9 AM - 7 PM daily
  
- **Q**: Allow same-day bookings?
  - **A**: Yes, but disable past time slots on current day
  
- **Q**: Deposit/payment required upfront?
  - **A**: No in MVP, Phase 2 feature with Stripe

## Performance Considerations

- **Bundle size**: +15KB estimated (calendar component)
- **Load time**: < 2s on 3G (static page, no API calls)
- **Interactivity**: < 100ms for step transitions
- **Local storage**: < 5KB per booking draft

## Accessibility Requirements

- **Keyboard navigation**: Tab through all form fields, Enter to submit
- **Screen reader**: ARIA labels on all inputs, step announcements
- **Focus management**: Focus moves to next step on "Next" button
- **Color contrast**: WCAG AA compliant (pink gradients tested)
- **Error announcements**: Screen reader announces validation errors

## Success Metrics (Post-Launch)

- **Completion rate**: % of users who complete all 4 steps
- **Drop-off points**: Which step has highest abandonment
- **Mobile vs. Desktop**: Conversion rate comparison
- **Time to complete**: Average booking duration (target: < 3 min)
- **Form errors**: Most common validation failures

## Future Enhancements (Phase 2+)

1. **Real-time availability** - Sync with Google Calendar
2. **Staff selection** - Choose preferred stylist
3. **Package deals** - Discounted service bundles
4. **Loyalty rewards** - Points for repeat bookings
5. **Waitlist** - Notify when slots open
6. **Automated reminders** - SMS/email 24h before appointment
7. **Online payment** - Pay deposit via Stripe
8. **Booking management** - Customer portal to view/edit bookings
9. **Admin dashboard** - Manage calendar, services, staff
10. **Analytics** - Booking trends, popular services, revenue tracking
