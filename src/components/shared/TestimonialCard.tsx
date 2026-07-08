import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Review } from '../../types';
import StarRating from '../ui/StarRating';

interface TestimonialCardProps {
  review: Review;
  index?: number;
}

const TestimonialCard = ({ review, index = 0 }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15 }}
      className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="flex items-center gap-4 mb-4">
        <img
          src={review.avatar}
          alt={review.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-gray-100">
            {review.name}
          </h4>
          <StarRating rating={review.rating} size="sm" />
        </div>
      </div>

      <div className="relative">
        <Quote className="absolute -top-1 -left-1 w-6 h-6 text-primary-200 dark:text-primary-800 rotate-180" />
        <p className="pl-6 text-gray-600 dark:text-gray-400 italic">
          {review.comment}
        </p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
