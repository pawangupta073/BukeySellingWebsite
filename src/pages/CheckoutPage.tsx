import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CreditCard, Truck, Check, AlertCircle } from 'lucide-react';
import { Button, Input, Card } from '../components/ui';
import { useCartStore, useUserStore, useToastStore } from '../stores';
import { formatPrice } from '../lib/utils';
import { v4 as uuidv4 } from 'uuid';

const paymentMethods = [
  { id: 'card', name: 'Credit / Debit Card', icon: CreditCard },
  { id: 'upi', name: 'UPI', icon: '💳' },
  { id: 'netbanking', name: 'Net Banking', icon: '🏦' },
  { id: 'cod', name: 'Cash on Delivery', icon: '💵' },
];

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { items, getTotal, clearCart } = useCartStore();
  const { user, addOrder } = useUserStore();
  const { addToast } = useToastStore();

  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState('card');

  const [shippingData, setShippingData] = useState({
    firstName: user?.name?.split(' ')[0] || '',
    lastName: user?.name?.split(' ').slice(1).join(' ') || '',
    email: user?.email || '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    recipientName: '',
    recipientPhone: '',
    deliveryDate: '',
    deliveryTime: 'morning',
    message: '',
  });

  const subtotal = getTotal();
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Your cart is empty
        </h1>
        <Link to="/shop">
          <Button>Start Shopping</Button>
        </Link>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setShippingData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitOrder = async () => {
    setIsProcessing(true);

    setTimeout(() => {
      const order = {
        id: uuidv4(),
        items,
        status: 'pending' as const,
        total: total,
        subtotal,
        shipping,
        tax,
        discount: 0,
        shippingAddress: {
          id: uuidv4(),
          label: 'Shipping',
          name: `${shippingData.firstName} ${shippingData.lastName}`,
          phone: shippingData.phone,
          address: shippingData.address,
          city: shippingData.city,
          state: shippingData.state,
          zipCode: shippingData.zipCode,
          isDefault: false,
        },
        paymentMethod: selectedPayment,
        createdAt: new Date().toISOString(),
        estimatedDelivery: shippingData.deliveryDate,
      };

      addOrder(order);
      clearCart();
      addToast('Order placed successfully!', 'success');
      navigate('/order-confirmation');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-8">
          Checkout
        </h1>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-4 mb-8">
          {[1, 2, 3].map(s => (
            <div key={s} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= s
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-500'
                }`}
              >
                {step > s ? <Check className="w-4 h-4" /> : s}
              </div>
              {s < 3 && (
                <div
                  className={`w-16 h-0.5 ${
                    step > s ? 'bg-primary-500' : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Step 1: Shipping */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <Card className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                    Shipping Details
                  </h2>

                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        label="First Name"
                        name="firstName"
                        value={shippingData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                      <Input
                        label="Last Name"
                        name="lastName"
                        value={shippingData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        label="Email"
                        name="email"
                        type="email"
                        value={shippingData.email}
                        onChange={handleInputChange}
                        required
                      />
                      <Input
                        label="Phone"
                        name="phone"
                        type="tel"
                        value={shippingData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <Input
                      label="Address"
                      name="address"
                      value={shippingData.address}
                      onChange={handleInputChange}
                      required
                    />

                    <div className="grid grid-cols-3 gap-4">
                      <Input
                        label="City"
                        name="city"
                        value={shippingData.city}
                        onChange={handleInputChange}
                        required
                      />
                      <Input
                        label="State"
                        name="state"
                        value={shippingData.state}
                        onChange={handleInputChange}
                        required
                      />
                      <Input
                        label="ZIP Code"
                        name="zipCode"
                        value={shippingData.zipCode}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                      Recipient Details
                    </h3>

                    <div className="grid gap-4">
                      <div className="grid grid-cols-2 gap-4">
                        <Input
                          label="Recipient Name"
                          name="recipientName"
                          value={shippingData.recipientName}
                          onChange={handleInputChange}
                          placeholder="Leave blank if same as sender"
                        />
                        <Input
                          label="Recipient Phone"
                          name="recipientPhone"
                          type="tel"
                          value={shippingData.recipientPhone}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <Input
                          label="Delivery Date"
                          name="deliveryDate"
                          type="date"
                          value={shippingData.deliveryDate}
                          onChange={handleInputChange}
                          min={new Date().toISOString().split('T')[0]}
                          required
                        />
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                            Delivery Time
                          </label>
                          <select
                            name="deliveryTime"
                            value={shippingData.deliveryTime}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                          >
                            <option value="morning">Morning (9am - 12pm)</option>
                            <option value="afternoon">Afternoon (12pm - 5pm)</option>
                            <option value="evening">Evening (5pm - 8pm)</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                          Card Message
                        </label>
                        <textarea
                          name="message"
                          value={shippingData.message}
                          onChange={handleInputChange}
                          placeholder="Write a message for the greeting card..."
                          rows={3}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 resize-none focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                    </div>
                  </div>

                  <Button
                    className="w-full mt-6"
                    size="lg"
                    onClick={() => setStep(2)}
                  >
                    Continue to Payment
                  </Button>
                </Card>
              </motion.div>
            )}

            {/* Step 2: Payment */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <Card className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                    Payment Method
                  </h2>

                  <div className="space-y-3">
                    {paymentMethods.map(method => (
                      <button
                        key={method.id}
                        onClick={() => setSelectedPayment(method.id)}
                        className={`w-full p-4 rounded-xl border-2 flex items-center gap-4 transition-all ${
                          selectedPayment === method.id
                            ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                            : 'border-gray-200 dark:border-gray-700 hover:border-primary-300'
                        }`}
                      >
                        <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                          {typeof method.icon === 'string' ? (
                            <span className="text-lg">{method.icon}</span>
                          ) : (
                            <method.icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                          )}
                        </div>
                        <span className="font-medium text-gray-900 dark:text-gray-100">
                          {method.name}
                        </span>
                        {selectedPayment === method.id && (
                          <Check className="w-5 h-5 text-primary-500 ml-auto" />
                        )}
                      </button>
                    ))}
                  </div>

                  {selectedPayment === 'card' && (
                    <div className="mt-6 space-y-4">
                      <Input label="Card Number" placeholder="1234 5678 9012 3456" />
                      <div className="grid grid-cols-2 gap-4">
                        <Input label="Expiry Date" placeholder="MM/YY" />
                        <Input label="CVV" placeholder="123" />
                      </div>
                      <Input label="Cardholder Name" placeholder="John Doe" />
                    </div>
                  )}

                  <div className="flex gap-4 mt-6">
                    <Button
                      variant="outline"
                      size="lg"
                      className="flex-1"
                      onClick={() => setStep(1)}
                    >
                      Back
                    </Button>
                    <Button
                      size="lg"
                      className="flex-1"
                      onClick={() => setStep(3)}
                    >
                      Review Order
                    </Button>
                  </div>
                </Card>
              </motion.div>
            )}

            {/* Step 3: Review */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <Card className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                    Review Your Order
                  </h2>

                  {/* Items */}
                  <div className="space-y-4 mb-6">
                    {items.map(item => (
                      <div key={item.product.id} className="flex gap-4">
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 dark:text-gray-100">
                            {item.product.name}
                          </h4>
                          <p className="text-sm text-gray-500">
                            Qty: {item.quantity}
                          </p>
                        </div>
                        <p className="font-medium text-gray-900 dark:text-gray-100">
                          {formatPrice(item.product.price * item.quantity)}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Delivery Info */}
                  <div className="border-t dark:border-gray-700 pt-6 mb-6">
                    <div className="flex items-start gap-3 mb-4">
                      <Truck className="w-5 h-5 text-primary-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-gray-100">
                          Deliver to:{' '}
                          {shippingData.recipientName ||
                            `${shippingData.firstName} ${shippingData.lastName}`}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {shippingData.address}, {shippingData.city},{' '}
                          {shippingData.state} {shippingData.zipCode}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {shippingData.deliveryDate} ({shippingData.deliveryTime})
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CreditCard className="w-5 h-5 text-primary-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-gray-100">
                          Payment Method
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {paymentMethods.find(m => m.id === selectedPayment)?.name}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="lg"
                      className="flex-1"
                      onClick={() => setStep(2)}
                      disabled={isProcessing}
                    >
                      Back
                    </Button>
                    <Button
                      size="lg"
                      className="flex-1"
                      onClick={handleSubmitOrder}
                      isLoading={isProcessing}
                    >
                      Place Order
                    </Button>
                  </div>
                </Card>
              </motion.div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                Order Summary
              </h2>

              <div className="space-y-4">
                {items.map(item => (
                  <div key={item.product.id} className="flex gap-3">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 line-clamp-1">
                        {item.product.name}
                      </h4>
                      <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      {formatPrice(item.product.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t dark:border-gray-700 mt-4 pt-4 space-y-3">
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Tax</span>
                  <span>{formatPrice(tax)}</span>
                </div>
                <div className="border-t dark:border-gray-700 pt-3 flex justify-between text-lg font-semibold text-gray-900 dark:text-gray-100">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
