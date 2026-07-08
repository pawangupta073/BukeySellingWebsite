import { Category } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Roses',
    slug: 'roses',
    description: 'Classic beauty for every occasion',
    image: 'https://images.pexels.com/photos-165853/pexels-photo-165853.jpeg?w=600',
    productCount: 24,
  },
  {
    id: '2',
    name: 'Lilies',
    slug: 'lilies',
    description: 'Elegant and graceful blooms',
    image: 'https://images.pexels.com/photos-67692/pexels-photo-67692.jpeg?w=600',
    productCount: 18,
  },
  {
    id: '3',
    name: 'Orchids',
    slug: 'orchids',
    description: 'Exotic sophistication',
    image: 'https://images.pexels.com/photos-110239/pexels-photo-110239.jpeg?w=600',
    productCount: 12,
  },
  {
    id: '4',
    name: 'Mixed Flowers',
    slug: 'mixed-flowers',
    description: 'Vibrant color combinations',
    image: 'https://images.pexels.com/photos-125417/pexels-photo-125417.jpeg?w=600',
    productCount: 32,
  },
  {
    id: '5',
    name: 'Anniversary Bouquets',
    slug: 'anniversary',
    description: 'Celebrate your love story',
    image: 'https://images.pexels.com/photos-133335/pexels-photo-133335.jpeg?w=600',
    productCount: 15,
  },
  {
    id: '6',
    name: 'Birthday Bouquets',
    slug: 'birthday',
    description: 'Make their day extra special',
    image: 'https://images.pexels.com/photos-162634/pexels-photo-162634.jpeg?w=600',
    productCount: 28,
  },
  {
    id: '7',
    name: 'Romantic Bouquets',
    slug: 'romantic',
    description: 'Express your deepest feelings',
    image: 'https://images.pexels.com/photos-936137/pexels-photo-936137.jpeg?w=600',
    productCount: 20,
  },
  {
    id: '8',
    name: 'Luxury Collection',
    slug: 'luxury',
    description: 'Premium arrangements for special moments',
    image: 'https://images.pexels.com/photos-231798/pexels-photo-231798.jpeg?w=600',
    productCount: 10,
  },
  {
    id: '9',
    name: 'Congratulations',
    slug: 'congratulations',
    description: 'Celebrate achievements and milestones',
    image: 'https://images.pexels.com/photos-5424180/pexels-photo-5424180.jpeg?w=600',
    productCount: 14,
  },
  {
    id: '10',
    name: 'Thank You',
    slug: 'thank-you',
    description: 'Show your gratitude beautifully',
    image: 'https://images.pexels.com/photos-1453574/pexels-photo-1453574.jpeg?w=600',
    productCount: 16,
  },
  {
    id: '11',
    name: 'Get Well Soon',
    slug: 'get-well',
    description: 'Send healing thoughts',
    image: 'https://images.pexels.com/photos-5282726/pexels-photo-5282726.jpeg?w=600',
    productCount: 12,
  },
  {
    id: '12',
    name: 'Sympathy',
    slug: 'sympathy',
    description: 'Express condolences with grace',
    image: 'https://images.pexels.com/photos-1687899/pexels-photo-1687899.jpeg?w=600',
    productCount: 8,
  },
];

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(c => c.slug === slug);
};
