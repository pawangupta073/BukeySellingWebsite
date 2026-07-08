export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  occasion: string[];
  rating: number;
  reviews: number;
  description: string;
  colors: string[];
  inStock: boolean;
  featured: boolean;
  bestSeller: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
}

export interface Occasion {
  id: string;
  name: string;
  slug: string;
  image: string;
}

export interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  message?: string;
  deliveryDate?: string;
}

export interface WishlistItem {
  product: Product;
  addedAt: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  avatar?: string;
  addresses: Address[];
}

export interface Address {
  id: string;
  label: string;
  name: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  isDefault: boolean;
}

export interface Order {
  id: string;
  items: CartItem[];
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  total: number;
  subtotal: number;
  shipping: number;
  tax: number;
  discount: number;
  shippingAddress: Address;
  billingAddress?: Address;
  paymentMethod: string;
  createdAt: string;
  estimatedDelivery: string;
}

export interface FilterOptions {
  priceRange: [number, number];
  categories: string[];
  occasions: string[];
  colors: string[];
  rating: number;
  inStock: boolean;
}
