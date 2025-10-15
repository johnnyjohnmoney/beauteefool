# Booking System Specification

## ADDED Requirements

### Requirement: Service Selection
The system SHALL allow users to select one or more beauty services for booking.

#### Scenario: Single service selection
- **WHEN** user clicks on a service card
- **THEN** the service is marked as selected with visual indication (pink border and checkmark)
- **AND** the service is added to the booking summary
- **AND** the total price and duration are updated

#### Scenario: Multiple service selection
- **WHEN** user selects multiple services
- **THEN** all selected services are displayed in the summary
- **AND** the total price is the sum of all service prices
- **AND** the estimated duration is the sum of all service durations

#### Scenario: Service deselection
- **WHEN** user clicks on a previously selected service
- **THEN** the service is removed from the booking
- **AND** the total price and duration are recalculated

#### Scenario: No services selected
- **WHEN** user attempts to proceed without selecting any service
- **THEN** the "Next" button is disabled
- **AND** a validation message is displayed: "Please select at least one service"

#### Scenario: Service catalog display
- **WHEN** user views the service selection page
- **THEN** services are grouped by category (Hair, Nails, Makeup, Spa, Facial)
- **AND** each service displays name, description, duration, and price
- **AND** popular services are highlighted with a badge

### Requirement: Date and Time Selection
The system SHALL allow users to select an appointment date and time within business hours.

#### Scenario: Date selection
- **WHEN** user selects a date from the calendar
- **THEN** available time slots for that date are displayed
- **AND** past dates are disabled and grayed out
- **AND** the selected date is highlighted

#### Scenario: Time slot selection
- **WHEN** user clicks on an available time slot
- **THEN** the time slot is marked as selected
- **AND** the appointment date and time are added to the booking summary
- **AND** the "Next" button becomes enabled

#### Scenario: Business hours validation
- **WHEN** the system displays available time slots
- **THEN** only slots within business hours (9 AM - 7 PM) are shown
- **AND** slots are in 30-minute intervals
- **AND** slots that conflict with the total service duration are disabled

#### Scenario: Same-day booking
- **WHEN** user selects today's date
- **THEN** past time slots are disabled
- **AND** only future time slots for today are available

#### Scenario: No time slot selected
- **WHEN** user attempts to proceed without selecting a time
- **THEN** the "Next" button is disabled
- **AND** a validation message is displayed: "Please select a time slot"

### Requirement: Customer Information Collection
The system SHALL collect customer contact information and preferences.

#### Scenario: Required fields validation
- **WHEN** user attempts to submit customer information
- **THEN** full name, email, and phone number must be provided
- **AND** empty required fields show validation errors
- **AND** the form cannot be submitted until all required fields are valid

#### Scenario: Email validation
- **WHEN** user enters an email address
- **THEN** the email format is validated (contains @ and valid domain)
- **AND** invalid emails show error: "Please enter a valid email address"

#### Scenario: Phone validation
- **WHEN** user enters a phone number
- **THEN** the phone format is validated (at least 10 digits)
- **AND** invalid phone numbers show error: "Please enter a valid phone number"

#### Scenario: Special requests
- **WHEN** user enters text in the special requests field
- **THEN** the text is stored with the booking (up to 500 characters)
- **AND** this field is optional

#### Scenario: Form persistence
- **WHEN** user enters customer information
- **THEN** the data is auto-saved to local storage
- **AND** the data persists across page refreshes

### Requirement: Booking Summary and Review
The system SHALL display a complete summary of the booking before submission.

#### Scenario: Summary display
- **WHEN** user reaches the booking summary step
- **THEN** all selected services are listed with individual prices
- **AND** the selected date and time are displayed
- **AND** customer information is displayed
- **AND** the total price is calculated and displayed
- **AND** the estimated end time is calculated and displayed

#### Scenario: Edit previous steps
- **WHEN** user clicks on a section in the summary (services, date/time, customer info)
- **THEN** the user is navigated back to that step
- **AND** previous selections are preserved
- **AND** user can make changes and return to summary

#### Scenario: Booking submission
- **WHEN** user clicks "Confirm Booking" button
- **THEN** all booking data is validated one final time
- **AND** the booking is logged to console (MVP - no backend)
- **AND** user is redirected to confirmation page

### Requirement: Booking Confirmation
The system SHALL display a confirmation page after successful booking submission.

#### Scenario: Confirmation page display
- **WHEN** user successfully submits a booking
- **THEN** a confirmation page is displayed at `/booking/confirmation`
- **AND** a confirmation number is generated (random UUID in MVP)
- **AND** all booking details are displayed (services, date/time, customer info, total)
- **AND** a success message is shown: "Your booking request has been received!"

#### Scenario: Confirmation actions
- **WHEN** user views the confirmation page
- **THEN** a "Return to Home" button is displayed
- **AND** a "Book Another Appointment" button is displayed
- **AND** booking details can be printed or saved

#### Scenario: Confirmation messaging
- **WHEN** confirmation page is displayed
- **THEN** a message indicates: "We'll contact you within 24 hours to confirm your appointment"
- **AND** contact information for the salon is displayed

### Requirement: Multi-Step Progress Indication
The system SHALL provide clear visual feedback on booking progress.

#### Scenario: Stepper display
- **WHEN** user is on any booking step
- **THEN** a progress indicator shows all 4 steps (Services, Date/Time, Info, Review)
- **AND** completed steps are marked with a checkmark and pink color
- **AND** the current step is highlighted with a gradient
- **AND** upcoming steps are grayed out

#### Scenario: Step navigation
- **WHEN** user clicks "Next" button
- **THEN** the current step data is validated
- **AND** if valid, user proceeds to the next step
- **AND** if invalid, validation errors are displayed

#### Scenario: Backward navigation
- **WHEN** user clicks "Back" button
- **THEN** user returns to the previous step
- **AND** previously entered data is preserved
- **AND** no validation is required to go back

#### Scenario: Direct step navigation
- **WHEN** user clicks on a completed step in the stepper
- **THEN** user navigates directly to that step
- **AND** data from all steps is preserved

### Requirement: Form Validation and Error Handling
The system SHALL validate user input and provide clear error messages.

#### Scenario: Real-time validation
- **WHEN** user enters data in any form field
- **THEN** validation occurs on blur (when field loses focus)
- **AND** errors are displayed inline below the field
- **AND** fields with errors are highlighted with red border

#### Scenario: Validation error messages
- **WHEN** validation fails
- **THEN** error messages are specific and actionable
- **AND** errors are displayed in red text
- **AND** error icons are shown next to invalid fields

#### Scenario: Error recovery
- **WHEN** user corrects an invalid field
- **THEN** the error message disappears immediately
- **AND** the field styling returns to normal
- **AND** the "Next" button becomes enabled if all fields are valid

### Requirement: Responsive Design and Mobile Support
The system SHALL provide an optimized experience across all device sizes.

#### Scenario: Mobile layout
- **WHEN** user accesses booking on a mobile device (< 768px)
- **THEN** form fields are stacked in a single column
- **AND** service cards are displayed one per row
- **AND** calendar is optimized for touch input
- **AND** time slots have minimum 44x44px tap targets

#### Scenario: Tablet layout
- **WHEN** user accesses booking on a tablet (768px - 1024px)
- **THEN** service cards are displayed in a 2-column grid
- **AND** form fields use optimized spacing
- **AND** calendar and time slots are side-by-side

#### Scenario: Desktop layout
- **WHEN** user accesses booking on desktop (> 1024px)
- **THEN** service cards are displayed in a 3-column grid
- **AND** calendar and time slots are displayed side-by-side
- **AND** the stepper is displayed horizontally at the top

#### Scenario: Touch interactions
- **WHEN** user interacts with booking on a touch device
- **THEN** all interactive elements are easily tappable
- **AND** no hover-dependent functionality is required
- **AND** touch gestures work smoothly (scrolling, selecting)

## Technical Notes

### Business Hours Configuration
- Default: Monday-Sunday, 9:00 AM - 7:00 PM
- Time slots: 30-minute intervals
- Configurable in `lib/booking-data.ts`

### Service Categories
- Hair: Cuts, styling, coloring, treatments
- Nails: Manicure, pedicure, gel, acrylics
- Makeup: Bridal, special event, lessons
- Spa: Massage, body treatments
- Facial: Skincare, anti-aging, deep cleanse

### Data Persistence (MVP)
- Client-side only using localStorage
- Auto-save on every field change
- Key: `'beauteefool-booking-draft'`
- Cleared after successful booking submission

### Future Backend Integration
- POST `/api/bookings` - Create booking
- GET `/api/availability?date=YYYY-MM-DD` - Check availability
- GET `/api/services` - Fetch service catalog
- POST `/api/bookings/:id/confirm` - Send confirmation email
