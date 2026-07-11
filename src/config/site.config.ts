// Site Configuration - Easy to customize all business details here
export const siteConfig = {
  name: 'Bloom Basket',
  tagline: 'Fresh handcrafted bouquets delivered with love',
  description: 'Make every moment special with our premium flower bouquets. Same-day delivery available.',

  contact: {
    phone: '+91 6289132580',
    email: 'pawangupta7094@gmail.com',
    address: '123 Flower Street, Garden City, NY 10001',
    whatsapp: '1234567890', // without + sign
    businessHours: 'Mon-Sat: 9:00 AM - 8:00 PM, Sunday: 10:00 AM - 6:00 PM',
  },

  social: {
    instagram: 'https://instagram.com/bloombasket',
    facebook: 'https://facebook.com/bloombasket',
    whatsapp: 'https://wa.me/916289132580',
  },

  seo: {
    title: 'Bloom Basket - Premium Flower Bouquets Delivery',
    description: 'Order fresh flower bouquets online. Same-day delivery available for birthdays, anniversaries, and special occasions.',
    keywords: 'flower delivery, bouquets, roses, lilies, anniversary flowers, birthday flowers',
    ogImage: '/og-image.jpg',
  },

  navigation: [
    { name: 'Home', href: '/' },
    { name: 'Categories', href: '/categories' },
    { name: 'Best Sellers', href: '/best-sellers' },
    { name: 'Special Days', href: '/special-days' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],

  footerLinks: {
    quickLinks: [
      { name: 'Home', href: '/' },
      { name: 'Shop', href: '/shop' },
      { name: 'Categories', href: '/categories' },
      { name: 'Best Sellers', href: '/best-sellers' },
      { name: 'Special Days', href: '/special-days' },
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'FAQ', href: '/faq' },
    ],
    customerSupport: [
      { name: 'Delivery Information', href: '/delivery' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Refund Policy', href: '/refund' },
      { name: 'Terms & Conditions', href: '/terms' },
    ],
  },

  features: [
    { icon: 'Flower2', title: 'Fresh Flowers', description: 'Hand-picked fresh flowers daily' },
    { icon: 'Truck', title: 'Same Day Delivery', description: 'Order before 2 PM for same-day delivery' },
    { icon: 'ShieldCheck', title: 'Secure Payments', description: '100% secure payment gateway' },
    { icon: 'Heart', title: 'Handmade with Love', description: 'Each bouquet crafted with care' },
    { icon: 'Award', title: 'Premium Quality', description: 'Only the finest flowers selected' },
    { icon: 'Headphones', title: '24×7 Support', description: 'Always here to help you' },
  ],
};

export default siteConfig;
