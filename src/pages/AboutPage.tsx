import { motion } from 'framer-motion';
import { Heart, Award, Users, Leaf, Clock, Truck } from 'lucide-react';
import { Card } from '../components/ui';
import { FeaturesSection } from '../components/shared';
import siteConfig from '../config/site.config';

const team = [
  {
    name: 'Sarah Johnson',
    role: 'Founder & Creative Director',
    image: 'https://images.pexels.com/photos-1181686/pexels-photo-1181686.jpeg?w=300',
    bio: 'With 15 years of floral design experience, Sarah brings artistic vision to every arrangement.',
  },
  {
    name: 'Michael Chen',
    role: 'Head Florist',
    image: 'https://images.pexels.com/photos-220453/pexels-photo-220453.jpeg?w=300',
    bio: 'Michael specializes in wedding florals and has won multiple national competitions.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Customer Experience Manager',
    image: 'https://images.pexels.com/photos-774909/pexels-photo-774909.jpeg?w=300',
    bio: 'Emily ensures every customer has a seamless and delightful experience.',
  },
  {
    name: 'David Thompson',
    role: 'Logistics Manager',
    image: 'https://images.pexels.com/photos-1222271/pexels-photo-1222271.jpeg?w=300',
    bio: 'David ensures your flowers arrive fresh and on time, every time.',
  },
];

const stats = [
  { icon: Users, value: '50K+', label: 'Happy Customers' },
  { icon: Heart, value: '100K+', label: 'Bouquets Delivered' },
  { icon: Award, value: '15+', label: 'Years of Experience' },
  { icon: Star, value: '4.9', label: 'Average Rating' },
];

import { Star } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-b from-cream-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-6">
              Our Story
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {siteConfig.name} was born from a passion for bringing joy through the timeless
              beauty of flowers. What started as a small family shop has blossomed into a
              beloved brand trusted by thousands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <img
                src="https://images.pexels.com/photos-162634/pexels-photo-162634.jpeg?w=800"
                alt="Our flower shop"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-gray-100">
                Crafted with Love, Delivered with Care
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Every bouquet at {siteConfig.name} tells a story. We believe that flowers
                are more than just beautiful arrangements—they're messengers of love,
                gratitude, celebration, and sympathy.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Our expert florists hand-select each bloom from local growers and select
                international farms, ensuring freshness that lasts. Each arrangement is
                crafted with meticulous attention to detail, wrapped with care, and delivered
                with a smile.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-gradient-to-br from-primary-50 to-lavender-50 dark:from-primary-900/20 dark:to-lavender-900/20">
              <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To bring joy and beauty into people's lives through stunning floral
                arrangements, exceptional service, and a commitment to quality that
                exceeds expectations. We strive to make every occasion memorable.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-lavender-50 to-cream-50 dark:from-lavender-900/20 dark:to-cream-900/20">
              <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To be the most trusted and loved flower delivery service, known for
                creativity, reliability, and a personal touch. We envision a world where
                everyone can easily express their emotions through flowers.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The passionate people behind every beautiful arrangement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                      {member.name}
                    </h3>
                    <p className="text-sm text-primary-600 dark:text-primary-400 mb-2">
                      {member.role}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {member.bio}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-4">
              Why Customers Trust Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <Leaf className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Farm Fresh Guarantee
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Direct partnerships with farms ensure peak freshness
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <Truck className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Temperature-Controlled Delivery
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Special vehicles maintain optimal conditions during transit
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                <Clock className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                On-Time, Every Time
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                99.5% on-time delivery rate across all orders
              </p>
            </div>
          </div>
        </div>
      </section>

      <FeaturesSection />
    </div>
  );
};

export default AboutPage;
