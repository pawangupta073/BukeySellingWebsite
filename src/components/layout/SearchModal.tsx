import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../contexts/DialogContext';
import { searchProducts } from '../../data/products';
import { Product } from '../../types';
import { formatPrice } from '../../lib/utils';

const SearchModal = () => {
  const navigate = useNavigate();
  const { isSearchOpen, setIsSearchOpen, searchQuery, setSearchQuery } = useSearch();
  const [results, setResults] = useState<Product[]>([]);

  useEffect(() => {
    if (searchQuery.trim()) {
      const searchResults = searchProducts(searchQuery);
      setResults(searchResults.slice(0, 5));
    } else {
      setResults([]);
    }
  }, [searchQuery]);

  const handleClose = () => {
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
    handleClose();
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      handleClose();
    }
  };

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={handleClose}
          />
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-2xl"
          >
            <div className="max-w-3xl mx-auto p-4">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search bouquets, categories, occasions..."
                  autoFocus
                  className="w-full pl-12 pr-12 py-4 rounded-2xl bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button
                  type="button"
                  onClick={handleClose}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </form>

              {results.length > 0 && (
                <div className="mt-4 space-y-2">
                  {results.map(product => (
                    <motion.button
                      key={product.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      onClick={() => handleProductClick(product.id)}
                      className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-left"
                    >
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 dark:text-gray-100">
                          {product.name}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {product.category} • {formatPrice(product.price)}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400" />
                    </motion.button>
                  ))}

                  <button
                    onClick={handleSearch}
                    className="w-full py-3 text-center text-primary-600 dark:text-primary-400 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors"
                  >
                    View all results for "{searchQuery}"
                  </button>
                </div>
              )}

              {searchQuery && results.length === 0 && (
                <div className="mt-4 py-8 text-center text-gray-500 dark:text-gray-400">
                  No results found for "{searchQuery}"
                </div>
              )}

              {results.length === 0 && !searchQuery && (
                <div className="mt-4 py-8 text-center text-gray-500 dark:text-gray-400">
                  <p className="text-sm">Search for bouquets by name, category, or occasion</p>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
