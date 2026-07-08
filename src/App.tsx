import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Layout } from './components/layout';
import { SearchProvider, FilterProvider, MobileMenuProvider } from './contexts/DialogContext';
import {
  HomePage,
  ShopPage,
  ProductDetailsPage,
  CartPage,
  CheckoutPage,
  WishlistPage,
  ContactPage,
  AboutPage,
  FAQPage,
  LoginPage,
  RegisterPage,
  AccountPage,
  NotFoundPage,
  AdminDashboard,
  AdminProducts,
} from './pages';
import siteConfig from './config/site.config';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <SearchProvider>
        <FilterProvider>
          <MobileMenuProvider>
            <ScrollToTop />
            <Routes>
              {/* Main Layout Routes */}
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="shop" element={<ShopPage />} />
                <Route path="product/:id" element={<ProductDetailsPage />} />
                <Route path="cart" element={<CartPage />} />
                <Route path="checkout" element={<CheckoutPage />} />
                <Route path="wishlist" element={<WishlistPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="faq" element={<FAQPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />
                <Route path="account" element={<AccountPage />} />
                <Route path="categories" element={<ShopPage />} />
                <Route path="best-sellers" element={<ShopPage />} />
                <Route path="special-days" element={<ShopPage />} />
                <Route path="category/:slug" element={<ShopPage />} />
                <Route path="occasion/:slug" element={<ShopPage />} />
                <Route path="search" element={<ShopPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>

              {/* Admin Routes */}
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/products" element={<AdminProducts />} />
              <Route path="/admin/*" element={<AdminDashboard />} />
            </Routes>
          </MobileMenuProvider>
        </FilterProvider>
      </SearchProvider>
    </BrowserRouter>
  );
}

export default App;
