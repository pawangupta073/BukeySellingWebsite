import { motion } from 'framer-motion';
import { Flower2, Truck, ShieldCheck, Heart, Award, Headphones } from 'lucide-react';

const features = [
  {
    icon: Flower2,
    title: 'Fresh Flowers',
    description: 'Hand-picked fresh flowers daily',
  },
  {
    icon: Truck,
    title: 'Same Day Delivery',
    description: 'Order before 2 PM for same-day delivery',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Payments',
    description: '100% secure payment gateway',
  },
  {
    icon: Heart,
    title: 'Handmade with Love',
    description: 'Each bouquet crafted with care',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Only the finest flowers selected',
  },
  {
    icon: Headphones,
    title: '24x7 Support',
    description: 'Always here to help you',
  },
];

const FeaturesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 bg-cream-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-100 to-lavender-100 dark:from-primary-900/30 dark:to-lavender-900/30 flex items-center justify-center mb-4">
                <feature.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
