import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui';
import siteConfig from '../config/site.config';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-b from-cream-50 to-white dark:from-gray-900 dark:to-gray-950">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <div className="text-8xl mb-6">🌸</div>
        <h1 className="text-5xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-4">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
          Oops! The page you're looking for seems to have wilted away.
          Let's get you back to beautiful blooms.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => navigate('/')} size="lg">
            Go Home
          </Button>
          <Button variant="outline" onClick={() => navigate('/shop')} size="lg">
            Browse Shop
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
