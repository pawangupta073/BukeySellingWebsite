import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Occasion } from '../../types';

interface OccasionCardProps {
  occasion: Occasion;
  index?: number;
}

const OccasionCard = ({ occasion, index = 0 }: OccasionCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      <Link to={`/occasion/${occasion.slug}`}>
        <div className="aspect-square relative">
          <img
            src={occasion.image}
            alt={occasion.name}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/20 to-transparent" />

          <div className="absolute inset-0 flex flex-col items-center justify-end p-4">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-cream-100" />
            </div>
            <h3 className="text-lg font-semibold text-white text-center mb-3">
              {occasion.name}
            </h3>
            <button className="w-full py-2 px-4 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full hover:bg-white/30 transition-colors">
              Shop Collection
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default OccasionCard;
