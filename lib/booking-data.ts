/**
 * Booking Data and Configuration
 * Service catalog, business hours, and availability helpers
 */

import { Service, ServiceCategory, TimeSlot, BusinessHours } from '@/types/booking';

// Business hours configuration
export const BUSINESS_HOURS: BusinessHours = {
  start: '09:00',
  end: '19:00',
  interval: 30, // 30-minute slots
};

// Service catalog with pricing and duration
export const services: Service[] = [
  // Hair Styling Services
  {
    id: 'hair-1',
    name: 'Haircut & Style',
    category: 'hair',
    description: 'Professional haircut with styling, tailored to your face shape and preferences',
    duration: 60,
    price: 65,
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&q=80',
    popular: true,
  },
  {
    id: 'hair-2',
    name: 'Hair Coloring',
    category: 'hair',
    description: 'Full color service including consultation, application, and styling',
    duration: 120,
    price: 120,
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&q=80',
  },
  {
    id: 'hair-3',
    name: 'Highlights & Balayage',
    category: 'hair',
    description: 'Custom highlighting technique for natural, sun-kissed color',
    duration: 150,
    price: 150,
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=400&q=80',
    popular: true,
  },
  {
    id: 'hair-4',
    name: 'Deep Conditioning Treatment',
    category: 'hair',
    description: 'Intensive hydration treatment for damaged or dry hair',
    duration: 45,
    price: 45,
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400&q=80',
  },
  {
    id: 'hair-5',
    name: 'Blowout & Styling',
    category: 'hair',
    description: 'Professional blowout with heat styling for any occasion',
    duration: 45,
    price: 55,
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&q=80',
  },

  // Nail Care Services
  {
    id: 'nails-1',
    name: 'Classic Manicure',
    category: 'nails',
    description: 'Nail shaping, cuticle care, polish application',
    duration: 45,
    price: 35,
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80',
    popular: true,
  },
  {
    id: 'nails-2',
    name: 'Gel Manicure',
    category: 'nails',
    description: 'Long-lasting gel polish with UV curing',
    duration: 60,
    price: 50,
    image: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=400&q=80',
  },
  {
    id: 'nails-3',
    name: 'Spa Pedicure',
    category: 'nails',
    description: 'Luxurious foot soak, exfoliation, massage, and polish',
    duration: 75,
    price: 60,
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=400&q=80',
  },
  {
    id: 'nails-4',
    name: 'Acrylic Nails',
    category: 'nails',
    description: 'Full set of durable acrylic nail extensions',
    duration: 90,
    price: 75,
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=400&q=80',
  },

  // Makeup Services
  {
    id: 'makeup-1',
    name: 'Bridal Makeup',
    category: 'makeup',
    description: 'Long-lasting wedding makeup with trial session',
    duration: 90,
    price: 150,
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&q=80',
    popular: true,
  },
  {
    id: 'makeup-2',
    name: 'Special Event Makeup',
    category: 'makeup',
    description: 'Glamorous makeup for parties, proms, or photoshoots',
    duration: 60,
    price: 85,
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&q=80',
  },
  {
    id: 'makeup-3',
    name: 'Natural Makeup',
    category: 'makeup',
    description: 'Everyday natural look that enhances your features',
    duration: 45,
    price: 65,
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&q=80',
  },
  {
    id: 'makeup-4',
    name: 'Makeup Lesson',
    category: 'makeup',
    description: 'One-on-one tutorial to learn professional techniques',
    duration: 90,
    price: 120,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&q=80',
  },

  // Spa & Massage Services
  {
    id: 'spa-1',
    name: 'Relaxation Massage',
    category: 'spa',
    description: '60-minute full body Swedish massage',
    duration: 60,
    price: 90,
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=80',
    popular: true,
  },
  {
    id: 'spa-2',
    name: 'Deep Tissue Massage',
    category: 'spa',
    description: 'Therapeutic massage for muscle tension and pain relief',
    duration: 75,
    price: 110,
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=400&q=80',
  },
  {
    id: 'spa-3',
    name: 'Aromatherapy Massage',
    category: 'spa',
    description: 'Massage with essential oils for relaxation and wellness',
    duration: 60,
    price: 95,
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&q=80',
  },

  // Facial Treatments
  {
    id: 'facial-1',
    name: 'Classic Facial',
    category: 'facial',
    description: 'Deep cleansing, exfoliation, and hydration treatment',
    duration: 60,
    price: 80,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=80',
    popular: true,
  },
  {
    id: 'facial-2',
    name: 'Anti-Aging Facial',
    category: 'facial',
    description: 'Advanced treatment targeting fine lines and wrinkles',
    duration: 75,
    price: 120,
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&q=80',
  },
  {
    id: 'facial-3',
    name: 'Acne Treatment Facial',
    category: 'facial',
    description: 'Deep pore cleansing and blemish control treatment',
    duration: 60,
    price: 95,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=80',
  },
  {
    id: 'facial-4',
    name: 'Hydrating Facial',
    category: 'facial',
    description: 'Intense moisture boost for dry or dehydrated skin',
    duration: 60,
    price: 85,
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&q=80',
  },
];

// Category display names
export const categoryLabels: Record<ServiceCategory, string> = {
  hair: 'Hair Styling',
  nails: 'Nail Care',
  makeup: 'Makeup Artistry',
  spa: 'Spa & Massage',
  facial: 'Facial Treatments',
};

// Helper functions

/**
 * Get services by category
 */
export function getServicesByCategory(category: ServiceCategory | 'all'): Service[] {
  if (category === 'all') {
    return services;
  }
  return services.filter((service) => service.category === category);
}

/**
 * Get service by ID
 */
export function getServiceById(id: string): Service | undefined {
  return services.find((service) => service.id === id);
}

/**
 * Get multiple services by IDs
 */
export function getServicesByIds(ids: string[]): Service[] {
  return ids
    .map((id) => getServiceById(id))
    .filter((service): service is Service => service !== undefined);
}

/**
 * Calculate total price for selected services
 */
export function calculateTotalPrice(serviceIds: string[]): number {
  const selectedServices = getServicesByIds(serviceIds);
  return selectedServices.reduce((total, service) => total + service.price, 0);
}

/**
 * Calculate total duration for selected services
 */
export function calculateTotalDuration(serviceIds: string[]): number {
  const selectedServices = getServicesByIds(serviceIds);
  return selectedServices.reduce((total, service) => total + service.duration, 0);
}

/**
 * Generate time slots for a given date
 */
export function generateTimeSlots(date: Date, serviceDuration: number = 0): TimeSlot[] {
  const slots: TimeSlot[] = [];
  const [startHour, startMinute] = BUSINESS_HOURS.start.split(':').map(Number);
  const [endHour, endMinute] = BUSINESS_HOURS.end.split(':').map(Number);
  
  const startTime = startHour * 60 + startMinute;
  const endTime = endHour * 60 + endMinute;
  
  const now = new Date();
  const isToday = date.toDateString() === now.toDateString();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  
  for (let minutes = startTime; minutes < endTime; minutes += BUSINESS_HOURS.interval) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    
    // Check if slot has enough time for service duration
    const slotEndTime = minutes + serviceDuration;
    const hasEnoughTime = slotEndTime <= endTime;
    
    // Check if slot is in the past (for today only)
    const isPast = isToday && minutes <= currentMinutes;
    
    // Format time as "H:MM AM/PM"
    const period = hours >= 12 ? 'PM' : 'AM';
    const displayHour = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
    const timeString = `${displayHour}:${mins.toString().padStart(2, '0')} ${period}`;
    
    slots.push({
      time: timeString,
      available: !isPast && hasEnoughTime,
    });
  }
  
  return slots;
}

/**
 * Calculate estimated end time
 */
export function calculateEndTime(startTime: string, durationMinutes: number): string {
  const [timeStr, period] = startTime.split(' ');
  const [hours, minutes] = timeStr.split(':').map(Number);
  
  let hour24 = hours;
  if (period === 'PM' && hours !== 12) {
    hour24 = hours + 12;
  } else if (period === 'AM' && hours === 12) {
    hour24 = 0;
  }
  
  const startMinutes = hour24 * 60 + minutes;
  const endMinutes = startMinutes + durationMinutes;
  
  const endHour24 = Math.floor(endMinutes / 60);
  const endMins = endMinutes % 60;
  
  const endPeriod = endHour24 >= 12 ? 'PM' : 'AM';
  const endHour12 = endHour24 > 12 ? endHour24 - 12 : endHour24 === 0 ? 12 : endHour24;
  
  return `${endHour12}:${endMins.toString().padStart(2, '0')} ${endPeriod}`;
}

/**
 * Format duration in human-readable format
 */
export function formatDuration(minutes: number): string {
  if (minutes < 60) {
    return `${minutes} min`;
  }
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (mins === 0) {
    return `${hours} hr${hours > 1 ? 's' : ''}`;
  }
  return `${hours} hr${hours > 1 ? 's' : ''} ${mins} min`;
}
