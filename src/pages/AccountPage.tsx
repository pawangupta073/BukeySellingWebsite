import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  User,
  Package,
  Heart,
  MapPin,
  Settings,
  LogOut,
  Edit2,
  Trash2,
  Plus,
} from 'lucide-react';
import { Button, Card, Input } from '../components/ui';
import { useUserStore, useToastStore } from '../stores';
import { formatDate } from '../lib/utils';

type Tab = 'profile' | 'orders' | 'addresses' | 'wishlist' | 'settings';

const AccountPage = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, orders, logout, updateProfile, addAddress, deleteAddress, setDefaultAddress, addresses } = useUserStore();
  const { addToast } = useToastStore();

  const [activeTab, setActiveTab] = useState<Tab>('profile');
  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const [newAddress, setNewAddress] = useState({
    label: '',
    name: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
  });

  // Redirect if not authenticated
  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  const tabs = [
    { id: 'profile' as const, icon: User, label: 'Profile' },
    { id: 'orders' as const, icon: Package, label: 'Orders' },
    { id: 'addresses' as const, icon: MapPin, label: 'Addresses' },
    { id: 'wishlist' as const, icon: Heart, label: 'Wishlist' },
    { id: 'settings' as const, icon: Settings, label: 'Settings' },
  ];

  const handleLogout = () => {
    logout();
    addToast('Logged out successfully', 'info');
    navigate('/');
  };

  const handleAddAddress = () => {
    if (newAddress.name && newAddress.address && newAddress.city) {
      addAddress({
        ...newAddress,
        isDefault: addresses.length === 0,
      });
      setNewAddress({ label: '', name: '', phone: '', address: '', city: '', state: '', zipCode: '' });
      setIsAddingAddress(false);
      addToast('Address added successfully', 'success');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <Card className="p-4">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b dark:border-gray-700">
                <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                  <User className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h2 className="font-semibold text-gray-900 dark:text-gray-100">
                    {user?.name}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {user?.email}
                  </p>
                </div>
              </div>

              <nav className="space-y-1">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                      activeTab === tab.id
                        ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    <tab.icon className="w-5 h-5" />
                    {tab.label}
                  </button>
                ))}
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                >
                  <LogOut className="w-5 h-5" />
                  Logout
                </button>
              </nav>
            </Card>
          </div>

          {/* Content */}
          <div className="flex-1">
            {activeTab === 'profile' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Card className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                    Profile Information
                  </h2>

                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-24 h-24 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                      <User className="w-12 h-12 text-primary-600 dark:text-primary-400" />
                    </div>
                    <Button variant="outline" size="sm">
                      <Edit2 className="w-4 h-4 mr-2" />
                      Change Photo
                    </Button>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <Input
                      label="Full Name"
                      value={user?.name}
                      onChange={e => updateProfile({ name: e.target.value })}
                      placeholder="Your name"
                    />
                    <Input
                      label="Email"
                      type="email"
                      value={user?.email}
                      disabled
                    />
                    <Input
                      label="Phone"
                      value={user?.phone}
                      onChange={e => updateProfile({ phone: e.target.value })}
                      placeholder="Your phone number"
                    />
                  </div>

                  <Button className="mt-6" onClick={() => addToast('Profile updated!', 'success')}>
                    Save Changes
                  </Button>
                </Card>
              </motion.div>
            )}

            {activeTab === 'orders' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                  Order History
                </h2>

                {orders.length === 0 ? (
                  <Card className="p-8 text-center">
                    <Package className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                    <p className="text-gray-600 dark:text-gray-400 mb-4">No orders yet</p>
                    <Link to="/shop">
                      <Button>Start Shopping</Button>
                    </Link>
                  </Card>
                ) : (
                  <div className="space-y-4">
                    {orders.map(order => (
                      <Card key={order.id} className="p-4">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <p className="font-medium text-gray-900 dark:text-gray-100">
                              Order #{order.id.slice(0, 8)}
                            </p>
                            <p className="text-sm text-gray-500">{formatDate(order.createdAt)}</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            order.status === 'delivered'
                              ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                              : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                          }`}>
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600 dark:text-gray-400">{order.items.length} items</span>
                          <span className="font-semibold text-gray-900 dark:text-gray-100">
                            ${order.total.toFixed(2)}
                          </span>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </motion.div>
            )}

            {activeTab === 'addresses' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    Saved Addresses
                  </h2>
                  <Button onClick={() => setIsAddingAddress(true)}>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Address
                  </Button>
                </div>

                {isAddingAddress && (
                  <Card className="p-6 mb-6">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">
                      Add New Address
                    </h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <Input
                        label="Label (Home, Work, etc.)"
                        value={newAddress.label}
                        onChange={e => setNewAddress({ ...newAddress, label: e.target.value })}
                      />
                      <Input
                        label="Full Name"
                        value={newAddress.name}
                        onChange={e => setNewAddress({ ...newAddress, name: e.target.value })}
                      />
                      <Input
                        label="Phone"
                        value={newAddress.phone}
                        onChange={e => setNewAddress({ ...newAddress, phone: e.target.value })}
                      />
                      <Input
                        label="Address"
                        value={newAddress.address}
                        onChange={e => setNewAddress({ ...newAddress, address: e.target.value })}
                      />
                      <Input
                        label="City"
                        value={newAddress.city}
                        onChange={e => setNewAddress({ ...newAddress, city: e.target.value })}
                      />
                      <Input
                        label="State"
                        value={newAddress.state}
                        onChange={e => setNewAddress({ ...newAddress, state: e.target.value })}
                      />
                      <Input
                        label="ZIP Code"
                        value={newAddress.zipCode}
                        onChange={e => setNewAddress({ ...newAddress, zipCode: e.target.value })}
                      />
                    </div>
                    <div className="flex gap-3 mt-4">
                      <Button onClick={handleAddAddress}>Save Address</Button>
                      <Button variant="outline" onClick={() => setIsAddingAddress(false)}>
                        Cancel
                      </Button>
                    </div>
                  </Card>
                )}

                {user?.addresses.length === 0 && !isAddingAddress ? (
                  <Card className="p-8 text-center">
                    <MapPin className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                    <p className="text-gray-600 dark:text-gray-400">No saved addresses</p>
                  </Card>
                ) : (
                  <div className="space-y-4">
                    {user?.addresses.map(addr => (
                      <Card key={addr.id} className="p-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-medium text-gray-900 dark:text-gray-100">
                                {addr.name}
                              </span>
                              {addr.isDefault && (
                                <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                                  Default
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {addr.address}, {addr.city}, {addr.state} {addr.zipCode}
                            </p>
                            <p className="text-sm text-gray-500">{addr.phone}</p>
                          </div>
                          <div className="flex gap-2">
                            {!addr.isDefault && (
                              <Button variant="ghost" size="sm" onClick={() => setDefaultAddress(addr.id)}>
                                Set Default
                              </Button>
                            )}
                            <Button variant="ghost" size="sm" onClick={() => deleteAddress(addr.id)}>
                              <Trash2 className="w-4 h-4 text-red-500" />
                            </Button>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </motion.div>
            )}

            {activeTab === 'wishlist' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    My Wishlist
                  </h2>
                  <Link to="/wishlist">
                    <Button variant="outline">View All</Button>
                  </Link>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  View your saved items in the wishlist page.
                </p>
              </motion.div>
            )}

            {activeTab === 'settings' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                  Account Settings
                </h2>
                <Card className="p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    Notifications
                  </h3>
                  <div className="space-y-3">
                    <label className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Email notifications</span>
                      <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                    </label>
                    <label className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">SMS notifications</span>
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                    </label>
                    <label className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Newsletter</span>
                      <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                    </label>
                  </div>

                  <div className="border-t dark:border-gray-700 mt-6 pt-6">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">
                      Danger Zone
                    </h3>
                    <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50 dark:border-red-800 dark:hover:bg-red-900/20">
                      Delete Account
                    </Button>
                  </div>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
