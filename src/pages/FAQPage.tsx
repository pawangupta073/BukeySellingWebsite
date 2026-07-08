import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search } from 'lucide-react';
import { Input, Card } from '../components/ui';

const faqs = [
  {
    category: 'Delivery',
    questions: [
      {
        q: 'What are your delivery hours?',
        a: 'We deliver between 9 AM and 8 PM. During checkout, you can select your preferred delivery time slot (Morning, Afternoon, or Evening).',
      },
      {
        q: 'Do you offer same-day delivery?',
        a: 'Yes! Orders placed before 2 PM are eligible for same-day delivery. Subject to availability in your area.',
      },
      {
        q: 'How can I track my order?',
        a: 'Once your order is dispatched, you\'ll receive a tracking link via email and SMS. You can also track from your account dashboard.',
      },
      {
        q: 'What areas do you deliver to?',
        a: 'We currently deliver to most areas within a 50-mile radius. Enter your pincode on the product page to check availability.',
      },
    ],
  },
  {
    category: 'Orders & Payment',
    questions: [
      {
        q: 'What payment methods do you accept?',
        a: 'We accept Credit/Debit Cards, UPI, Net Banking, and Cash on Delivery (COD). All payments are secured with industry-standard encryption.',
      },
      {
        q: 'Can I modify or cancel my order?',
        a: 'Orders can be modified or cancelled within 2 hours of placing them. Contact our support team immediately for changes.',
      },
      {
        q: 'My payment failed. What should I do?',
        a: 'If money was deducted but the order wasn\'t placed, the amount will be refunded within 5-7 business days. Contact support if you need assistance.',
      },
    ],
  },
  {
    category: 'Products',
    questions: [
      {
        q: 'How fresh are your flowers?',
        a: 'All flowers are sourced fresh daily from local farms and select international growers. We guarantee freshness for at least 7 days after delivery.',
      },
      {
        q: 'Can I customize a bouquet?',
        a: 'Absolutely! Contact us with your requirements. Our florists will create a custom arrangement for you at no extra design fee.',
      },
      {
        q: 'Do you offer add-ons like chocolates or cards?',
        a: 'Yes! We offer gift combos including chocolates, teddy bears, greeting cards, and vases. Add them during checkout.',
      },
    ],
  },
  {
    category: 'Returns & Refunds',
    questions: [
      {
        q: 'What if I\'m not satisfied with my order?',
        a: 'Your satisfaction is our priority. If you\'re unhappy with your order, contact us within 24 hours and we\'ll make it right with a replacement or refund.',
      },
      {
        q: 'What is your refund policy?',
        a: 'Full refunds are processed within 5-7 business days for eligible orders. Partial refunds may be offered for minor issues.',
      },
    ],
  },
  {
    category: 'Account',
    questions: [
      {
        q: 'How do I create an account?',
        a: 'Click on "Login/Register" in the navigation bar, then choose "Create Account". You\'ll need to verify your email to complete registration.',
      },
      {
        q: 'I forgot my password. How do I reset it?',
        a: 'Click "Forgot Password" on the login page. Enter your email, and we\'ll send a reset link. The link expires in 24 hours.',
      },
    ],
  },
];

const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const filteredFAQs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      faq =>
        faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.a.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about orders, delivery, products, and more.
          </p>

          <div className="mt-8 max-w-md mx-auto">
            <Input
              icon={<Search className="w-5 h-5" />}
              placeholder="Search questions..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
        </motion.div>

        <div className="space-y-8">
          {filteredFAQs.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.1 }}
            >
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                {category.category}
              </h2>

              <div className="space-y-3">
                {category.questions.map((faq, faqIndex) => {
                  const id = `${catIndex}-${faqIndex}`;
                  const isOpen = openIndex === id;

                  return (
                    <Card key={id} className="overflow-hidden">
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : id)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left"
                      >
                        <span className="font-medium text-gray-900 dark:text-gray-100">
                          {faq.q}
                        </span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="px-6 pb-4 text-gray-600 dark:text-gray-400">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Card>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              No questions found matching "{searchQuery}"
            </p>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Still have questions? We're here to help!
          </p>
          <button
            onClick={() => window.location.href = '/contact'}
            className="text-primary-600 dark:text-primary-400 font-medium hover:underline"
          >
            Contact Support
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQPage;
