/**
 * Booking System Type Definitions
 * 
 * This file contains all TypeScript interfaces and types used throughout
 * the booking system, including service definitions, customer information,
 * booking data, and wizard step management.
 */

/**
 * Available service categories for filtering and organization
 */
export type ServiceCategory = 'all' | 'hair' | 'nails' | 'makeup' | 'spa' | 'facial';

/**
 * Represents a single beauty service offered by the salon
 */
export interface Service {
  /** Unique identifier for the service */
  id: string;
  /** Display name of the service */
  name: string;
  /** Category for filtering and organization */
  category: Exclude<ServiceCategory, 'all'>;
  /** Brief description of the service */
  description: string;
  /** Price in USD */
  price: number;
  /** Duration in minutes */
  duration: number;
  /** Image URL (Unsplash placeholder or local asset) */
  image: string;
  /** Whether this service should display a "Popular" badge */
  popular: boolean;
}

/**
 * Represents a time slot for appointment booking
 */
export interface TimeSlot {
  /** Time in 12-hour format (e.g., "10:00 AM") */
  time: string;
  /** Whether this slot is available for booking */
  available: boolean;
}

/**
 * Customer contact information collected in Step 3
 */
export interface CustomerInfo {
  /** Full name (2-100 characters) */
  fullName: string;
  /** Email address (must be valid format) */
  email: string;
  /** Phone number (minimum 10 digits) */
  phone: string;
  /** Optional special requests or notes (max 500 characters) */
  specialRequests?: string;
}

/**
 * Complete booking data collected across all wizard steps
 */
export interface BookingData {
  /** Array of selected Service objects */
  selectedServices: Service[];
  /** Selected appointment date */
  selectedDate: Date | null;
  /** Selected time slot in 12-hour format */
  selectedTime: string | null;
  /** Customer contact information */
  customerInfo: CustomerInfo | null;
  /** Total price of all selected services */
  totalPrice: number;
  /** Total duration of all selected services in minutes */
  totalDuration: number;
}

/**
 * Confirmed booking with unique ID and timestamp
 */
export interface BookingConfirmation {
  /** Unique confirmation ID (UUID) */
  id: string;
  /** Complete booking data */
  bookingData: BookingData;
  /** ISO timestamp when booking was confirmed */
  confirmedAt: string;
}

/**
 * Wizard step number (1-4)
 */
export type BookingStep = 1 | 2 | 3 | 4;

/**
 * Complete booking wizard state
 */
export interface BookingState {
  /** Array of selected service IDs */
  selectedServiceIds: string[];
  /** Selected appointment date */
  selectedDate: Date | null;
  /** Selected time slot */
  selectedTime: string | null;
  /** Customer information */
  customerInfo: CustomerInfo | null;
  /** Current active step */
  currentStep: BookingStep;
  /** Set of completed steps that can be edited */
  completedSteps: Set<BookingStep>;
}

/**
 * Business hours configuration
 */
export interface BusinessHours {
  /** Opening time in HH:MM format (e.g., "09:00") */
  start: string;
  /** Closing time in HH:MM format (e.g., "19:00") */
  end: string;
  /** Time slot interval in minutes */
  interval: number;
}

/**
 * Form validation errors for customer info
 */
export interface ValidationErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  specialRequests?: string;
}
