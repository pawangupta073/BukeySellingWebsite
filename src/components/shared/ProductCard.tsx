import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Eye } from 'lucide-react';
import { Product } from '../../types';
import { formatPrice, getDiscountPercentage } from '../../lib/utils';
import { useCartStore, useWishlistStore, useToastStore } from '../../stores';
import { Badge } from '../ui';
import StarRating from '../ui/StarRating';

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const { addItem: addToCart } = useCartStore();
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlistStore();
  const { addToast } = useToastStore();

  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discount = hasDiscount ? getDiscountPercentage(product.originalPrice, product.price) : 0;
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    addToast(`${product.name} added to cart!`, 'success');
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (inWishlist) {
      removeFromWishlist(product.id);
      addToast('Removed from wishlist', 'info');
    } else {
      addToWishlist(product);
      addToast(`${product.name} added to wishlist!`, 'success');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <Link to={`/product/${product.id}`}>
        <div className="group relative bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
          {/* Image Container */}
          <div className="relative aspect-square overflow-hidden">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />

            {/* Overlay Actions */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300">
              <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={handleWishlistToggle}
                  className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-colors ${
                    inWishlist
                      ? 'bg-primary-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${inWishlist ? 'fill-current' : ''}`} />
                </button>
                <button
                  onClick={handleAddToCart}
                  className="w-10 h-10 rounded-full bg-white text-gray-700 flex items-center justify-center shadow-lg hover:bg-primary-50 hover:text-primary-600 transition-colors"
                >
                  <ShoppingCart className="w-5 h-5" />
                </button>
                <Link
                  to={`/product/${product.id}`}
                  className="w-10 h-10 rounded-full bg-white text-gray-700 flex items-center justify-center shadow-lg hover:bg-primary-50 hover:text-primary-600 transition-colors"
                >
                  <Eye className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-1">
              {hasDiscount && (
                <Badge variant="error" className="font-semibold">
                  -{discount}%
                </Badge>
              )}
              {product.bestSeller && (
                <Badge variant="warning">Best Seller</Badge>
              )}
              {product.featured && (
                <Badge variant="success">Featured</Badge>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-primary-600 dark:text-primary-400 font-medium uppercase tracking-wider">
                {product.category}
              </span>
              <StarRating rating={product.rating} size="sm" />
            </div>

            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 line-clamp-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {product.name}
            </h3>

            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 line-clamp-2">
              {product.description}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-primary-600 dark:text-primary-400">
                  {formatPrice(product.price)}
                </span>
                {hasDiscount && (
                  <span className="text-sm text-gray-400 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full mt-4 py-2.5 px-4 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-xl font-medium hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
