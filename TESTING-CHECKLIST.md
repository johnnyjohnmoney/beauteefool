# Booking System Testing Checklist

## Phase 9: Manual Testing Guide

### 9.1 Complete Booking Flow Testing

#### Happy Path - Single Service
- [ ] Navigate to `/booking`
- [ ] Select 1 service from any category
- [ ] Verify total price and duration updates
- [ ] Click "Continue to Date & Time"
- [ ] Select a future date on the calendar
- [ ] Select an available time slot- [ ] Verify appointment summary shows correct date/time
- [ ] Click "Continue to Your Information"
- [ ] Fill in valid customer info (name, email, phone)
- [ ] Add optional special requests
- [ ] Click "Continue to Review"
- [ ] Verify all details are correct in summary
- [ ] Click "Confirm Booking"
- [ ] Verify redirect to confirmation page
- [ ] Verify confirmation number is displayed
- [ ] Verify all booking details are shown correctly

#### Happy Path - Multiple Services
- [ ] Select 3-5 services from different categories
- [ ] Verify total price = sum of all service prices
- [ ] Verify total duration = sum of all service durations
- [ ] Complete booking flow
- [ ] Verify all services appear in confirmation

#### Edge Cases
- [ ] Try to continue from Step 1 without selecting any service (should be disabled)
- [ ] Try to continue from Step 2 without selecting date (should be disabled)
- [ ] Try to continue from Step 2 without selecting time (should be disabled)
- [ ] Select max services (5+) and verify behavior
- [ ] Select service, deselect it, verify totals update

### 9.2 Validation Testing

#### Email Validation
- [ ] Enter invalid email (no @) - should show error
- [ ] Enter invalid email (no domain) - should show error
- [ ] Enter valid email - should clear error
- [ ] Leave email blank and blur - should show "required" error

#### Phone Validation
- [ ] Enter less than 10 digits - should show error
- [ ] Enter 10 digits - should be valid
- [ ] Enter non-numeric characters - test behavior
- [ ] Leave phone blank and blur - should show "required" error

#### Name Validation
- [ ] Enter 1 character name - should show error (min 2 chars)
- [ ] Enter very long name (100+ chars) - should show error (max 100 chars)
- [ ] Enter special characters - should be allowed
- [ ] Leave name blank and blur - should show "required" error

#### Date/Time Validation
- [ ] Try to select past date - should be disabled in calendar
- [ ] Try to select today's past time - should not appear in time slots
- [ ] Select today's future time - should work
- [ ] Select future date - all time slots should be available

#### Special Requests
- [ ] Enter 500+ characters - should show character counter warning
- [ ] Enter exactly 500 characters - should be at limit
- [ ] Leave blank - should be optional (no error)

### 9.3 Responsive Design Testing

#### Mobile (375px width)
- [ ] Booking stepper shows vertical layout
- [ ] Service cards stack in single column
- [ ] Calendar fits in viewport
- [ ] Time slots are easy to tap
- [ ] Form inputs are full width
- [ ] Navigation buttons are full width
- [ ] Sticky footer doesn't overlap content

#### Tablet (768px width)
- [ ] Service cards show in 2 columns
- [ ] Stepper transitions to horizontal
- [ ] Calendar and time slots side-by-side
- [ ] Form is comfortable to fill

#### Desktop (1024px+ width)
- [ ] Service cards show in 3 columns
- [ ] All content is centered with max-width
- [ ] White space is balanced
- [ ] Components don't stretch too wide

### 9.4 LocalStorage Persistence Testing

#### Auto-Save Testing
- [ ] Select services and refresh page - selections should persist
- [ ] Select date/time and refresh - selections should persist
- [ ] Fill customer form halfway and refresh - data should persist
- [ ] Complete all steps except confirm, refresh - should be on last step
- [ ] Navigate away from /booking and return - data should persist

#### Confirmation Persistence
- [ ] Complete booking and confirm
- [ ] Refresh confirmation page - details should persist
- [ ] Navigate away and return to confirmation - details should show
- [ ] Click "Book Another Appointment" - draft should be cleared

#### Edge Cases
- [ ] Clear localStorage and load /booking - should start fresh
- [ ] Clear localStorage and load /confirmation - should redirect to /booking
- [ ] Corrupt localStorage data - should handle gracefully

### 9.5 Dark Mode Testing

- [ ] Toggle dark mode on homepage
- [ ] Navigate to /booking in dark mode
- [ ] Verify all text is readable (good contrast)
- [ ] Verify service cards have proper dark backgrounds
- [ ] Verify calendar is readable in dark mode
- [ ] Verify form inputs have visible borders
- [ ] Verify buttons maintain gradient in dark mode
- [ ] Verify time slots are distinguishable when selected
- [ ] Complete entire flow in dark mode

### 9.6 Accessibility Testing

#### Keyboard Navigation
- [ ] Tab through all form inputs in order
- [ ] Focus indicators are visible on all interactive elements
- [ ] Enter/Space activates buttons
- [ ] Escape closes any modals/dialogs
- [ ] Can complete entire booking using only keyboard

#### Screen Reader Testing (if available)
- [ ] Form labels are announced correctly
- [ ] Error messages are announced
- [ ] Button purposes are clear
- [ ] Service names and prices are announced
- [ ] Confirmation details are readable

#### Visual Accessibility
- [ ] Text has sufficient contrast (WCAG AA minimum 4.5:1)
- [ ] Focus indicators are visible
- [ ] Interactive elements are large enough (min 44x44px)
- [ ] Error messages use color + icons (not color alone)

### 9.7 Browser Compatibility

Test in the following browsers (if possible):
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (macOS/iOS)
- [ ] Mobile browsers (Chrome mobile, Safari mobile)

### 9.8 Performance Testing

- [ ] Page loads in under 3 seconds
- [ ] No layout shift when images load
- [ ] Smooth transitions between steps
- [ ] Time slot generation is instant
- [ ] Form validation is instant
- [ ] No visible lag when typing

---

## Bug Tracking

### Found Issues
Document any bugs found during testing here:

1. ~~Date deserialization error on confirmation page~~ - **FIXED**: Added Date object conversion in useEffect
2. 

---

## Test Results Summary

**Date Tested**: _________________

**Tested By**: _________________

**Pass Rate**: ____ / ____ tests passed

**Critical Issues**: _________________

**Status**: ⬜ All tests passed | ⬜ Minor issues | ⬜ Critical issues found
