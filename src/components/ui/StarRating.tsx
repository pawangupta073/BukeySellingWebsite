import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
  showNumber?: boolean;
}

const StarRating = ({ rating, size = 'md', showNumber = true }: StarRatingProps) => {
  const sizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map(star => (
        <Star
          key={star}
          className={`${sizes[size]} ${
            star <= rating
              ? 'text-yellow-400 fill-yellow-400'
              : 'text-gray-300 dark:text-gray-600'
          }`}
        />
      ))}
      {showNumber && (
        <span className="ml-1 text-sm text-gray-500 dark:text-gray-400">
          ({rating.toFixed(1)})
        </span>
      )}
    </div>
  );
};

export default StarRating;
