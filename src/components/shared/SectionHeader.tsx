import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  linkText?: string;
  linkTo?: string;
}

const SectionHeader = ({ title, subtitle, linkText, linkTo }: SectionHeaderProps) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 dark:text-gray-100">
          {title}
        </h2>
        {subtitle && (
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            {subtitle}
          </p>
        )}
      </motion.div>
      {linkText && linkTo && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Link
            to={linkTo}
            className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium hover:gap-3 transition-all"
          >
            {linkText}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default SectionHeader;
