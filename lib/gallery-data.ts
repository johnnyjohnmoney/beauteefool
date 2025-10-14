/**
 * Gallery Image Data Structure
 * Defines the structure and data for the beauty salon gallery
 */

export type GalleryCategory = 'all' | 'hair' | 'nails' | 'makeup' | 'spa' | 'interior';

export interface GalleryImage {
  id: string;
  src: string;
  category: Exclude<GalleryCategory, 'all'>;
  alt: string;
  description?: string;
  width: number;
  height: number;
}

// Gallery images data - using Unsplash placeholders for now
// Replace with actual salon images in production
export const galleryImages: GalleryImage[] = [
  // Hair Styling
  {
    id: 'hair-1',
    src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
    category: 'hair',
    alt: 'Beautiful blonde hair styling with waves',
    description: 'Professional hair styling with natural waves',
    width: 800,
    height: 1000,
  },
  {
    id: 'hair-2',
    src: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&q=80',
    category: 'hair',
    alt: 'Elegant updo hairstyle',
    description: 'Elegant updo for special occasions',
    width: 800,
    height: 1000,
  },
  {
    id: 'hair-3',
    src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80',
    category: 'hair',
    alt: 'Modern hair coloring treatment',
    description: 'Professional hair coloring service',
    width: 800,
    height: 1200,
  },
  {
    id: 'hair-4',
    src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&q=80',
    category: 'hair',
    alt: 'Curly hair styling',
    description: 'Natural curly hair enhancement',
    width: 800,
    height: 1000,
  },

  // Nails
  {
    id: 'nails-1',
    src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80',
    category: 'nails',
    alt: 'French manicure nail art',
    description: 'Classic French manicure',
    width: 800,
    height: 600,
  },
  {
    id: 'nails-2',
    src: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=800&q=80',
    category: 'nails',
    alt: 'Gel nail polish application',
    description: 'Professional gel manicure',
    width: 800,
    height: 1000,
  },
  {
    id: 'nails-3',
    src: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800&q=80',
    category: 'nails',
    alt: 'Artistic nail design',
    description: 'Creative nail art designs',
    width: 800,
    height: 600,
  },
  {
    id: 'nails-4',
    src: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=800&q=80',
    category: 'nails',
    alt: 'Elegant pink manicure',
    description: 'Soft pink gel nails',
    width: 800,
    height: 1000,
  },

  // Makeup
  {
    id: 'makeup-1',
    src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80',
    category: 'makeup',
    alt: 'Professional makeup application',
    description: 'Bridal makeup service',
    width: 800,
    height: 1000,
  },
  {
    id: 'makeup-2',
    src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80',
    category: 'makeup',
    alt: 'Natural makeup look',
    description: 'Natural everyday makeup',
    width: 800,
    height: 1200,
  },
  {
    id: 'makeup-3',
    src: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80',
    category: 'makeup',
    alt: 'Glamorous evening makeup',
    description: 'Evening glamour makeup',
    width: 800,
    height: 1000,
  },
  {
    id: 'makeup-4',
    src: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80',
    category: 'makeup',
    alt: 'Eye makeup close-up',
    description: 'Artistic eye makeup',
    width: 800,
    height: 600,
  },

  // Spa
  {
    id: 'spa-1',
    src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
    category: 'spa',
    alt: 'Relaxing spa massage',
    description: 'Therapeutic massage service',
    width: 800,
    height: 600,
  },
  {
    id: 'spa-2',
    src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
    category: 'spa',
    alt: 'Facial treatment session',
    description: 'Rejuvenating facial treatment',
    width: 800,
    height: 1000,
  },
  {
    id: 'spa-3',
    src: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&q=80',
    category: 'spa',
    alt: 'Spa skincare treatment',
    description: 'Professional skincare therapy',
    width: 800,
    height: 1200,
  },
  {
    id: 'spa-4',
    src: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80',
    category: 'spa',
    alt: 'Aromatherapy spa session',
    description: 'Relaxing aromatherapy',
    width: 800,
    height: 1000,
  },

  // Interior
  {
    id: 'interior-1',
    src: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80',
    category: 'interior',
    alt: 'Modern salon interior',
    description: 'Our luxurious salon space',
    width: 800,
    height: 600,
  },
  {
    id: 'interior-2',
    src: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=800&q=80',
    category: 'interior',
    alt: 'Styling station area',
    description: 'Professional styling stations',
    width: 800,
    height: 1000,
  },
  {
    id: 'interior-3',
    src: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=800&q=80',
    category: 'interior',
    alt: 'Waiting lounge area',
    description: 'Comfortable waiting area',
    width: 800,
    height: 600,
  },
  {
    id: 'interior-4',
    src: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80',
    category: 'interior',
    alt: 'Reception desk',
    description: 'Welcoming reception area',
    width: 800,
    height: 1000,
  },
];

// Helper function to get images by category
export function getImagesByCategory(category: GalleryCategory): GalleryImage[] {
  if (category === 'all') {
    return galleryImages;
  }
  return galleryImages.filter((image) => image.category === category);
}

// Category display names
export const categoryLabels: Record<GalleryCategory, string> = {
  all: 'All',
  hair: 'Hair Styling',
  nails: 'Nail Care',
  makeup: 'Makeup',
  spa: 'Spa & Massage',
  interior: 'Our Salon',
};
