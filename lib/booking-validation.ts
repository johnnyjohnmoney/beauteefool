/**
 * Booking Form Validation
 * Zod schemas for validating booking form data
 */

import { z } from 'zod';

// Customer information validation schema
export const customerInfoSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes'),
  
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters'),
  
  phone: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .regex(/^[\d\s()+-]+$/, 'Phone number can only contain numbers, spaces, and ()+-')
    .transform((val) => val.replace(/\D/g, '')) // Remove non-digits for storage
    .refine((val) => val.length >= 10, 'Phone number must have at least 10 digits'),
  
  specialRequests: z
    .string()
    .max(500, 'Special requests must be less than 500 characters')
    .optional()
    .or(z.literal('')),
});

// Service selection validation
export const serviceSelectionSchema = z.object({
  selectedServices: z
    .array(z.string())
    .min(1, 'Please select at least one service')
    .max(5, 'You can select up to 5 services'),
});

// Date and time validation
export const dateTimeSchema = z.object({
  selectedDate: z
    .date()
    .refine((date) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return date >= today;
    }, 'Please select today or a future date'),
  
  selectedTime: z
    .string()
    .min(1, 'Please select a time slot')
    .regex(/^\d{1,2}:\d{2}\s(AM|PM)$/, 'Invalid time format'),
});

// Complete booking validation
export const bookingDataSchema = z.object({
  services: serviceSelectionSchema.shape.selectedServices,
  date: dateTimeSchema.shape.selectedDate,
  time: dateTimeSchema.shape.selectedTime,
  customerInfo: customerInfoSchema,
});

// Type exports
export type CustomerInfoFormData = z.infer<typeof customerInfoSchema>;
export type ServiceSelectionFormData = z.infer<typeof serviceSelectionSchema>;
export type DateTimeFormData = z.infer<typeof dateTimeSchema>;
export type BookingFormData = z.infer<typeof bookingDataSchema>;

// Validation helper functions
export function validateCustomerInfo(data: unknown) {
  return customerInfoSchema.safeParse(data);
}

export function validateServiceSelection(data: unknown) {
  return serviceSelectionSchema.safeParse(data);
}

export function validateDateTime(data: unknown) {
  return dateTimeSchema.safeParse(data);
}

export function validateCompleteBooking(data: unknown) {
  return bookingDataSchema.safeParse(data);
}

// Format phone number for display (e.g., "5551234567" -> "(555) 123-4567")
export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone;
}

// Validate time slot is within business hours
export function isWithinBusinessHours(time: string, startHour: number = 9, endHour: number = 19): boolean {
  const [timeStr, period] = time.split(' ');
  const [hours, minutes] = timeStr.split(':').map(Number);
  
  let hour24 = hours;
  if (period === 'PM' && hours !== 12) {
    hour24 = hours + 12;
  } else if (period === 'AM' && hours === 12) {
    hour24 = 0;
  }
  
  return hour24 >= startHour && hour24 < endHour;
}

// Check if time slot is in the past for today
export function isTimeSlotInPast(date: Date, time: string): boolean {
  const now = new Date();
  const selectedDate = new Date(date);
  
  // If not today, it's not in the past
  if (selectedDate.toDateString() !== now.toDateString()) {
    return false;
  }
  
  const [timeStr, period] = time.split(' ');
  const [hours, minutes] = timeStr.split(':').map(Number);
  
  let hour24 = hours;
  if (period === 'PM' && hours !== 12) {
    hour24 = hours + 12;
  } else if (period === 'AM' && hours === 12) {
    hour24 = 0;
  }
  
  const slotTime = new Date(selectedDate);
  slotTime.setHours(hour24, minutes, 0, 0);
  
  return slotTime < now;
}
