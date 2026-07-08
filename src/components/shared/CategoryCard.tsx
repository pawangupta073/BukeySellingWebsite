import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Category } from '../../types';

interface CategoryCardProps {
  category: Category;
  index?: number;
}

const CategoryCard = ({ category, index = 0 }: CategoryCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      <Link to={`/category/${category.slug}`}>
        <div className="aspect-[4/5] relative">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-xl font-semibold text-white mb-1">
              {category.name}
            </h3>
            <p className="text-white/80 text-sm mb-3">
              {category.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-white/60 text-sm">
                {category.productCount} products
              </span>
              <span className="flex items-center gap-1 text-white text-sm font-medium group-hover:gap-2 transition-all">
                Explore <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;
