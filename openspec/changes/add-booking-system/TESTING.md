# Testing Guide: Booking System

## Test Strategy

### Test Levels
1. **Unit Testing** - Individual component validation
2. **Integration Testing** - Multi-step flow testing
3. **E2E Testing** - Complete user journey
4. **Accessibility Testing** - WCAG compliance
5. **Performance Testing** - Load time and responsiveness
6. **Cross-browser Testing** - Compatibility verification

---

## 1. Service Selection Tests

### Test Case 1.1: Display Service Catalog
**Steps**:
1. Navigate to `/booking`
2. Verify services are displayed

**Expected**:
- Services grouped by category (Hair, Nails, Makeup, Spa, Facial)
- Each service shows: name, description, duration, price, image
- Popular services have badge
- Responsive grid: 1 col mobile, 2 col tablet, 3 col desktop

### Test Case 1.2: Single Service Selection
**Steps**:
1. Click on a service card
2. Verify visual feedback

**Expected**:
- Service card has pink border
- Checkmark appears on card
- Service appears in summary sidebar
- Total price updates
- "Next" button becomes enabled

### Test Case 1.3: Multiple Service Selection
**Steps**:
1. Click on 3 different services
2. Verify all are selected

**Expected**:
- All 3 services show pink border and checkmark
- All 3 appear in summary
- Total price = sum of all prices
- Estimated duration = sum of all durations

### Test Case 1.4: Service Deselection
**Steps**:
1. Select 2 services
2. Click one selected service again

**Expected**:
- Service is deselected (border/checkmark removed)
- Service removed from summary
- Total price recalculated
- Duration recalculated

### Test Case 1.5: No Selection Validation
**Steps**:
1. Don't select any service
2. Try to click "Next"

**Expected**:
- "Next" button is disabled
- Validation message: "Please select at least one service"

---

## 2. Date and Time Selection Tests

### Test Case 2.1: Calendar Display
**Steps**:
1. Complete step 1, proceed to step 2
2. View calendar

**Expected**:
- Current month displayed
- Past dates are disabled/grayed
- Today and future dates are clickable
- Calendar is touch-friendly on mobile

### Test Case 2.2: Date Selection
**Steps**:
1. Click on a future date

**Expected**:
- Date is highlighted
- Available time slots appear
- Time slots are in 30-minute intervals
- Business hours (9 AM - 7 PM) respected

### Test Case 2.3: Time Slot Selection
**Steps**:
1. Select a date
2. Click on an available time slot

**Expected**:
- Time slot has pink gradient background
- Date and time appear in summary
- "Next" button becomes enabled

### Test Case 2.4: Same-Day Booking
**Steps**:
1. Select today's date
2. View time slots

**Expected**:
- Past time slots are disabled
- Only future slots for today are available
- If after 7 PM, no slots available with message

### Test Case 2.5: Service Duration Conflict
**Steps**:
1. Select services totaling 2 hours
2. View time slots for 6 PM onwards

**Expected**:
- Slots after 5:30 PM are disabled
- Tooltip: "Not enough time for selected services"

### Test Case 2.6: No Time Selection Validation
**Steps**:
1. Select date but no time
2. Try to proceed

**Expected**:
- "Next" button is disabled
- Message: "Please select a time slot"

---

## 3. Customer Information Tests

### Test Case 3.1: Form Display
**Steps**:
1. Proceed to step 3

**Expected**:
- Form shows: Name, Email, Phone, Special Requests
- Required fields marked with asterisk (*)
- Previous entries auto-filled if user went back

### Test Case 3.2: Email Validation
**Steps**:
1. Enter invalid email: "test"
2. Blur field

**Expected**:
- Red border on field
- Error: "Please enter a valid email address"
- "Next" button disabled

**Valid test**: "test@example.com" - error clears

### Test Case 3.3: Phone Validation
**Steps**:
1. Enter invalid phone: "123"
2. Blur field

**Expected**:
- Red border on field
- Error: "Please enter a valid phone number"
- "Next" button disabled

**Valid test**: "555-123-4567" - error clears

### Test Case 3.4: Required Fields
**Steps**:
1. Leave name, email, or phone empty
2. Try to proceed

**Expected**:
- Empty fields highlighted in red
- Error: "This field is required"
- "Next" button disabled

### Test Case 3.5: Special Requests (Optional)
**Steps**:
1. Fill required fields
2. Leave special requests empty
3. Click "Next"

**Expected**:
- Form submits successfully
- Proceeds to step 4

### Test Case 3.6: Auto-Save to Local Storage
**Steps**:
1. Enter customer info
2. Refresh page
3. Navigate back to step 3

**Expected**:
- Data is preserved
- Form fields show previous values

---

## 4. Booking Summary Tests

### Test Case 4.1: Summary Display
**Steps**:
1. Complete steps 1-3
2. View step 4

**Expected**:
- All selected services listed with prices
- Date and time displayed
- Customer info displayed
- Total price calculated
- Estimated end time shown (start time + total duration)

### Test Case 4.2: Price Calculation
**Steps**:
1. Select 3 services: $50, $75, $30
2. View summary

**Expected**:
- Individual prices shown
- Total: $155
- Tax/fees (if applicable)

### Test Case 4.3: Edit Services
**Steps**:
1. Click "Edit" next to Services section
2. Navigate back to step 1

**Expected**:
- Previous selections preserved
- Can modify and return to summary
- Changes reflected in summary

### Test Case 4.4: Edit Date/Time
**Steps**:
1. Click "Edit" next to Date/Time
2. Change time slot
3. Return to summary

**Expected**:
- New time displayed
- Estimated end time recalculated

### Test Case 4.5: Edit Customer Info
**Steps**:
1. Click "Edit" next to Customer Info
2. Change email
3. Return to summary

**Expected**:
- New email displayed
- All other fields preserved

---

## 5. Booking Submission Tests

### Test Case 5.1: Successful Submission
**Steps**:
1. Complete all 4 steps
2. Click "Confirm Booking"

**Expected**:
- Loading spinner appears
- Console logs booking data
- Redirects to `/booking/confirmation`
- Confirmation page shows booking details

### Test Case 5.2: Confirmation Page Display
**Steps**:
1. Submit booking
2. View confirmation page

**Expected**:
- Confirmation number (UUID)
- All booking details (services, date/time, total)
- Success message
- "Return to Home" button
- "Book Another Appointment" button
- Message: "We'll contact you within 24 hours"

### Test Case 5.3: Confirmation Actions
**Steps**:
1. On confirmation page
2. Click "Return to Home"

**Expected**:
- Navigates to `/`
- Booking draft cleared from local storage

### Test Case 5.4: Book Another Appointment
**Steps**:
1. On confirmation page
2. Click "Book Another Appointment"

**Expected**:
- Navigates to `/booking`
- Fresh booking flow (no previous data)

---

## 6. Navigation and Stepper Tests

### Test Case 6.1: Stepper Display
**Steps**:
1. View booking page

**Expected**:
- 4 steps shown: Services, Date/Time, Info, Review
- Current step highlighted with gradient
- Completed steps have checkmark and pink color
- Future steps grayed out

### Test Case 6.2: Next Button Navigation
**Steps**:
1. Complete step 1
2. Click "Next"

**Expected**:
- Validates current step
- Proceeds to step 2
- Stepper updates (step 1 = complete, step 2 = active)

### Test Case 6.3: Back Button Navigation
**Steps**:
1. On step 3
2. Click "Back"

**Expected**:
- Returns to step 2
- No validation required
- Data preserved

### Test Case 6.4: Direct Step Navigation
**Steps**:
1. Complete step 1 and 2
2. Click on "Services" in stepper

**Expected**:
- Navigates to step 1
- All data preserved
- Can navigate back to step 2

### Test Case 6.5: Step Validation Lock
**Steps**:
1. On step 1 (no services selected)
2. Try to click on "Date/Time" in stepper

**Expected**:
- Cannot navigate (step is locked)
- Or: navigates but shows validation error

---

## 7. Responsive Design Tests

### Test Case 7.1: Mobile Layout (< 768px)
**Steps**:
1. Open booking on mobile/resize to 375px
2. Test all steps

**Expected**:
- Single column layout
- Service cards: 1 per row
- Form fields stacked
- Large tap targets (min 44x44px)
- Calendar optimized for touch
- Stepper: vertical or horizontal with small icons

### Test Case 7.2: Tablet Layout (768-1024px)
**Steps**:
1. Resize to 800px
2. Test all steps

**Expected**:
- Service cards: 2 columns
- Form fields: optimized spacing
- Calendar and time slots side-by-side (if space)

### Test Case 7.3: Desktop Layout (> 1024px)
**Steps**:
1. View on desktop (1440px)
2. Test all steps

**Expected**:
- Service cards: 3 columns
- Calendar and time slots side-by-side
- Horizontal stepper at top
- Booking summary in sidebar

---

## 8. Accessibility Tests

### Test Case 8.1: Keyboard Navigation
**Steps**:
1. Use Tab key to navigate through booking
2. Use Enter/Space to select options

**Expected**:
- All interactive elements focusable
- Clear focus indicators (pink outline)
- Tab order is logical
- Enter key submits forms
- Space key selects checkboxes/radios

### Test Case 8.2: Screen Reader Compatibility
**Steps**:
1. Enable screen reader (NVDA/JAWS)
2. Navigate booking flow

**Expected**:
- Step announcements on transition
- Form labels read correctly
- Validation errors announced
- Button purposes clear
- ARIA labels on all controls

### Test Case 8.3: Color Contrast
**Steps**:
1. Check all text with contrast tool
2. Verify WCAG AA compliance

**Expected**:
- All text meets 4.5:1 contrast ratio
- Pink gradient text is readable
- Error messages have sufficient contrast

### Test Case 8.4: Focus Management
**Steps**:
1. Click "Next" button
2. Check focus location

**Expected**:
- Focus moves to first field of next step
- Or focus moves to heading of next step

---

## 9. Performance Tests

### Test Case 9.1: Initial Load Time
**Steps**:
1. Open DevTools Network tab
2. Navigate to `/booking` (cold cache)
3. Measure load time

**Expected**:
- Page loads in < 2 seconds on 3G
- First Contentful Paint < 1 second
- Time to Interactive < 2 seconds

### Test Case 9.2: Step Transition Performance
**Steps**:
1. Complete step 1
2. Click "Next"
3. Measure transition time

**Expected**:
- Step transition < 100ms
- Smooth animation (60fps)
- No layout shift

### Test Case 9.3: Bundle Size
**Steps**:
1. Build production version
2. Check booking page bundle

**Expected**:
- Booking JS bundle < 50KB (gzipped)
- Calendar component lazy-loaded if possible

---

## 10. Edge Cases and Error Handling

### Test Case 10.1: Local Storage Full
**Steps**:
1. Fill local storage to capacity
2. Try to save booking draft

**Expected**:
- Graceful degradation (no auto-save)
- Warning message (optional)
- Booking still functional

### Test Case 10.2: Browser Back Button
**Steps**:
1. Complete step 2
2. Click browser back button

**Expected**:
- Returns to step 1
- Or stays on step 2 with data preserved
- No data loss

### Test Case 10.3: Multiple Tab Editing
**Steps**:
1. Open booking in 2 tabs
2. Edit in both tabs

**Expected**:
- Last saved version wins
- Or warning about conflicting edits

### Test Case 10.4: Very Long Service Duration
**Steps**:
1. Select services totaling 8 hours
2. Try to book

**Expected**:
- No time slots available for same day
- Booking spans business hours (may need multi-day)

### Test Case 10.5: Invalid Date in URL
**Steps**:
1. Navigate to `/booking/confirmation` directly

**Expected**:
- Redirects to `/booking`
- Or shows "No booking found"

---

## 11. Cross-Browser Tests

### Test Case 11.1: Chrome (Latest)
**Steps**: Test full booking flow

**Expected**: All features work

### Test Case 11.2: Firefox (Latest)
**Steps**: Test full booking flow

**Expected**: All features work, calendar renders correctly

### Test Case 11.3: Safari (Latest)
**Steps**: Test full booking flow, especially date picker

**Expected**: All features work, iOS date picker compatible

### Test Case 11.4: Edge (Latest)
**Steps**: Test full booking flow

**Expected**: All features work

### Test Case 11.5: Mobile Safari (iOS)
**Steps**: Test on iPhone

**Expected**: Touch interactions smooth, calendar usable

### Test Case 11.6: Mobile Chrome (Android)
**Steps**: Test on Android device

**Expected**: All features work, no layout issues

---

## 12. Integration with Existing Site

### Test Case 12.1: Hero Section CTA
**Steps**:
1. Go to home page
2. Click "Book Appointment" button in hero

**Expected**:
- Navigates to `/booking`
- Booking page loads correctly

### Test Case 12.2: CTA Section Button
**Steps**:
1. Scroll to CTA section on home page
2. Click "Book Now" button

**Expected**:
- Navigates to `/booking`

### Test Case 12.3: Gallery Page CTA
**Steps**:
1. Go to `/gallery`
2. Click "Book Now" button

**Expected**:
- Navigates to `/booking`

### Test Case 12.4: Navigation Link (Optional)
**Steps**:
1. View navigation menu
2. Click "Book Now" link (if added)

**Expected**:
- Navigates to `/booking`
- Active state shows on booking page

---

## Test Automation Recommendations

### Priority 1: E2E Tests (Playwright)
```typescript
test('complete booking flow', async ({ page }) => {
  await page.goto('/booking');
  
  // Step 1: Select service
  await page.click('[data-service-id="hair-1"]');
  await page.click('[data-testid="next-button"]');
  
  // Step 2: Select date/time
  await page.click('[data-date="2025-10-20"]');
  await page.click('[data-time="10:00"]');
  await page.click('[data-testid="next-button"]');
  
  // Step 3: Customer info
  await page.fill('[name="fullName"]', 'John Doe');
  await page.fill('[name="email"]', 'john@example.com');
  await page.fill('[name="phone"]', '555-1234');
  await page.click('[data-testid="next-button"]');
  
  // Step 4: Confirm
  await page.click('[data-testid="confirm-button"]');
  
  // Verify confirmation
  await expect(page).toHaveURL('/booking/confirmation');
  await expect(page.locator('h1')).toContainText('Booking Confirmed');
});
```

### Priority 2: Component Tests (Vitest + Testing Library)
- Service selection component
- Date/time picker component
- Form validation

### Priority 3: Visual Regression Tests
- Screenshot each step
- Compare against baseline

---

## Bug Report Template

```markdown
**Title**: [Component] - Brief description

**Steps to Reproduce**:
1. 
2. 
3. 

**Expected Behavior**:


**Actual Behavior**:


**Screenshots**:
[Attach screenshot]

**Environment**:
- Browser: 
- Device: 
- OS: 
- Screen size: 

**Console Errors**:
[Paste any errors]
```

---

## Test Sign-Off Checklist

Before marking implementation complete:

- [ ] All functional tests pass
- [ ] All accessibility tests pass
- [ ] All performance benchmarks met
- [ ] Cross-browser testing complete
- [ ] Mobile testing complete (iOS + Android)
- [ ] Edge cases handled
- [ ] No console errors
- [ ] Documentation updated
- [ ] Code reviewed
- [ ] Ready for production
