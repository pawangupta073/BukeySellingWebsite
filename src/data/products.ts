import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Eternal Love Rose Bouquet',
    price: 79.99,
    originalPrice: 99.99,
    images: [
      'https://images.pexels.com/photos/936137/pexels-photo-936137.jpeg?w=600',
      'https://images.pexels.com/photos/133335/pexels-photo-133335.jpeg?w=600',
      'https://images.pexels.com/photos/163953/pexels-photo-163953.jpeg?w=600',
    ],
    category: 'Roses',
    occasion: ['Anniversary', 'Romantic'],
    rating: 4.9,
    reviews: 156,
    description: 'A stunning arrangement of 24 premium red roses, elegantly wrapped in premium paper with a satin ribbon. Perfect for expressing eternal love.',
    colors: ['Red', 'Pink', 'White'],
    inStock: true,
    featured: true,
    bestSeller: true,
  },
  {
    id: '2',
    name: 'Spring Lily Symphony',
    price: 59.99,
    originalPrice: 74.99,
    images: [
      'https://images.pexels.com/photos/67692/pexels-photo-67692.jpeg?w=600',
      'https://images.pexels.com/photos/541232/pexels-photo-541232.jpeg?w=600',
    ],
    category: 'Lilies',
    occasion: ['Birthday', 'Congratulations'],
    rating: 4.8,
    reviews: 89,
    description: 'Beautiful white lilies mixed with seasonal spring flowers. A refreshing bouquet that brings joy to any occasion.',
    colors: ['White', 'Pink'],
    inStock: true,
    featured: true,
    bestSeller: true,
  },
  {
    id: '3',
    name: 'Exotic Orchid Elegance',
    price: 89.99,
    originalPrice: 109.99,
    images: [
      'https://images.pexels.com/photos/110239/pexels-photo-110239.jpeg?w=600',
      'https://images.pexels.com/photos/4903378/pexels-photo-4903378.jpeg?w=600',
    ],
    category: 'Orchids',
    occasion: ['Anniversary', 'Luxury'],
    rating: 5.0,
    reviews: 67,
    description: 'Premium purple orchids arranged in a beautiful glass vase. A luxurious gift for someone special.',
    colors: ['Purple', 'White', 'Pink'],
    inStock: true,
    featured: true,
    bestSeller: false,
  },
  {
    id: '4',
    name: 'Rainbow Mix Delight',
    price: 49.99,
    originalPrice: 59.99,
    images: [
      'https://images.pexels.com/photos/125417/pexels-photo-125417.jpeg?w=600',
      'https://images.pexels.com/photos/162634/pexels-photo-162634.jpeg?w=600',
    ],
    category: 'Mixed Flowers',
    occasion: ['Birthday', 'Thank You'],
    rating: 4.7,
    reviews: 134,
    description: 'A vibrant mix of seasonal flowers in all colors of the rainbow. Perfect for spreading happiness.',
    colors: ['Multi'],
    inStock: true,
    featured: false,
    bestSeller: true,
  },
  {
    id: '5',
    name: 'Romantic Red Passion',
    price: 69.99,
    originalPrice: 84.99,
    images: [
      'https://images.pexels.com/photos/165853/pexels-photo-165853.jpeg?w=600',
      'https://images.pexels.com/photos/133335/pexels-photo-133335.jpeg?w=600',
    ],
    category: 'Roses',
    occasion: ['Valentine', 'Romantic'],
    rating: 4.9,
    reviews: 201,
    description: '12 long-stemmed premium red roses with baby breath and greenery. A classic symbol of love.',
    colors: ['Red'],
    inStock: true,
    featured: true,
    bestSeller: true,
  },
  {
    id: '6',
    name: 'Serene White Garden',
    price: 54.99,
    originalPrice: 69.99,
    images: [
      'https://images.pexels.com/photos/5282726/pexels-photo-5282726.jpeg?w=600',
      'https://images.pexels.com/photos/105072/pexels-photo-105072.jpeg?w=600',
    ],
    category: 'Mixed Flowers',
    occasion: ['Sympathy', 'Get Well'],
    rating: 4.8,
    reviews: 78,
    description: 'A peaceful arrangement of white roses, lilies, and chrysanthemums. Comforting and elegant.',
    colors: ['White', 'Cream'],
    inStock: true,
    featured: false,
    bestSeller: false,
  },
  {
    id: '7',
    name: 'Pink Blush Bouquet',
    price: 44.99,
    originalPrice: 54.99,
    images: [
      'https://images.pexels.com/photos/1453574/pexels-photo-1453574.jpeg?w=600',
      'https://images.pexels.com/photos/3672951/pexels-photo-3672951.jpeg?w=600',
    ],
    category: 'Roses',
    occasion: ['Birthday', 'Thank You'],
    rating: 4.6,
    reviews: 92,
    description: 'Soft pink roses with delicate fillers, wrapped in blush pink paper. Feminine and sweet.',
    colors: ['Pink', 'Light Pink'],
    inStock: true,
    featured: true,
    bestSeller: false,
  },
  {
    id: '8',
    name: 'Luxury Champagne Collection',
    price: 149.99,
    originalPrice: 179.99,
    images: [
      'https://images.pexels.com/photos/231798/pexels-photo-231798.jpeg?w=600',
      'https://images.pexels.com/photos/162634/pexels-photo-162634.jpeg?w=600',
    ],
    category: 'Luxury Collection',
    occasion: ['Anniversary', 'Wedding', 'Luxury'],
    rating: 5.0,
    reviews: 45,
    description: 'Premium champagne roses with exclusive orchids in a crystal vase. The ultimate luxury gift.',
    colors: ['Champagne', 'Cream'],
    inStock: true,
    featured: true,
    bestSeller: true,
  },
  {
    id: '9',
    name: 'Sunny Sunflower Bunch',
    price: 34.99,
    originalPrice: 44.99,
    images: [
      'https://images.pexels.com/photos-5262698/pexels-photo-5262698.jpeg?w=600',
      'https://images.pexels.com/photos/1598060/pexels-photo-1598060.jpeg?w=600',
    ],
    category: 'Mixed Flowers',
    occasion: ['Birthday', 'Congratulations', 'Thank You'],
    rating: 4.7,
    reviews: 167,
    description: 'Bright sunflowers that bring instant cheer. Perfect for celebrating achievements and milestones.',
    colors: ['Yellow', 'Orange'],
    inStock: true,
    featured: false,
    bestSeller: true,
  },
  {
    id: '10',
    name: 'Lavender Dreams',
    price: 64.99,
    originalPrice: 79.99,
    images: [
      'https://images.pexels.com/photos/1341726/pexels-photo-1341726.jpeg?w=600',
      'https://images.pexels.com/photos/1031645/pexels-photo-1031645.jpeg?w=600',
    ],
    category: 'Mixed Flowers',
    occasion: ['Birthday', 'Romantic'],
    rating: 4.8,
    reviews: 88,
    description: 'A dreamy mix of lavender roses, purple lisianthus, and delicate fillers. Enchanting and romantic.',
    colors: ['Purple', 'Lavender'],
    inStock: true,
    featured: true,
    bestSeller: false,
  },
  {
    id: '11',
    name: 'Congratulations Celebration',
    price: 74.99,
    originalPrice: 89.99,
    images: [
      'https://images.pexels.com/photos-5424180/pexels-photo-5424180.jpeg?w=600',
      'https://images.pexels.com/photos/1124883/pexels-photo-1124883.jpeg?w=600',
    ],
    category: 'Mixed Flowers',
    occasion: ['Congratulations', 'Graduation'],
    rating: 4.9,
    reviews: 54,
    description: 'A vibrant celebratory bouquet with mixed seasonal flowers and festive ribbons.',
    colors: ['Multi', 'Orange', 'Yellow'],
    inStock: true,
    featured: false,
    bestSeller: false,
  },
  {
    id: '12',
    name: 'Tender Sympathy Wreath',
    price: 99.99,
    originalPrice: 119.99,
    images: [
      'https://images.pexels.com/photos-5424180/pexels-photo-5424180.jpeg?w=600',
      'https://images.pexels.com/photos/1687899/pexels-photo-1687899.jpeg?w=600',
    ],
    category: 'Sympathy',
    occasion: ['Sympathy'],
    rating: 4.9,
    reviews: 32,
    description: 'A respectful and elegant sympathy arrangement with white lilies, roses, and greenery.',
    colors: ['White', 'Green'],
    inStock: true,
    featured: false,
    bestSeller: false,
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(p => p.category === category);
};

export const getProductsByOccasion = (occasion: string): Product[] => {
  return products.filter(p => p.occasion.includes(occasion));
};

export const getBestSellers = (): Product[] => {
  return products.filter(p => p.bestSeller);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.featured);
};

export const searchProducts = (query: string): Product[] => {
  const lowerQuery = query.toLowerCase();
  return products.filter(p =>
    p.name.toLowerCase().includes(lowerQuery) ||
    p.category.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery) ||
    p.occasion.some(o => o.toLowerCase().includes(lowerQuery))
  );
};
