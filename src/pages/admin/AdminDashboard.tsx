import { motion } from 'framer-motion';
import {
  DollarSign,
  ShoppingCart,
  Users,
  TrendingUp,
  Package,
  BarChart3,
} from 'lucide-react';
import { Card } from '../../components/ui';
import AdminLayout from './AdminLayout';

const stats = [
  {
    title: 'Total Revenue',
    value: '$45,231.89',
    change: '+20.1%',
    isPositive: true,
    icon: DollarSign,
    color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
  },
  {
    title: 'Orders',
    value: '2,350',
    change: '+15.5%',
    isPositive: true,
    icon: ShoppingCart,
    color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
  },
  {
    title: 'Customers',
    value: '1,234',
    change: '+5.2%',
    isPositive: true,
    icon: Users,
    color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
  },
  {
    title: 'Conversion Rate',
    value: '3.2%',
    change: '-0.5%',
    isPositive: false,
    icon: TrendingUp,
    color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
  },
];

const recentOrders = [
  { id: 'ORD-001', customer: 'Sarah Johnson', items: 3, total: '$125.00', status: 'delivered' },
  { id: 'ORD-002', customer: 'Michael Chen', items: 1, total: '$79.99', status: 'processing' },
  { id: 'ORD-003', customer: 'Emily Davis', items: 2, total: '$180.00', status: 'shipped' },
  { id: 'ORD-004', customer: 'Robert Wilson', items: 5, total: '$320.00', status: 'pending' },
];

const topProducts = [
  { name: 'Eternal Love Rose Bouquet', sales: 245, revenue: '$19,525' },
  { name: 'Spring Lily Symphony', sales: 189, revenue: '$11,339' },
  { name: 'Pink Blush Bouquet', sales: 156, revenue: '$7,017' },
  { name: 'Luxury Champagne Collection', sales: 98, revenue: '$14,699' },
];

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Dashboard Overview
        </h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <span
                    className={`text-sm font-medium ${
                      stat.isPositive ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  {stat.title}
                </h3>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {stat.value}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Recent Orders */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Recent Orders
                </h2>
                <a href="/admin/orders" className="text-sm text-primary-600 hover:underline">
                  View all
                </a>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-sm text-gray-500 dark:text-gray-400">
                      <th className="pb-3">Order ID</th>
                      <th className="pb-3">Customer</th>
                      <th className="pb-3">Items</th>
                      <th className="pb-3">Total</th>
                      <th className="pb-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {recentOrders.map(order => (
                      <tr key={order.id} className="border-t dark:border-gray-700">
                        <td className="py-3 font-medium text-gray-900 dark:text-gray-100">
                          {order.id}
                        </td>
                        <td className="py-3 text-gray-600 dark:text-gray-400">
                          {order.customer}
                        </td>
                        <td className="py-3 text-gray-600 dark:text-gray-400">
                          {order.items}
                        </td>
                        <td className="py-3 font-medium text-gray-900 dark:text-gray-100">
                          {order.total}
                        </td>
                        <td className="py-3">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              order.status === 'delivered'
                                ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                : order.status === 'shipped'
                                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                                : order.status === 'processing'
                                ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                                : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                            }`}
                          >
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>

          {/* Top Products */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Top Products
                </h2>
                <a href="/admin/products" className="text-sm text-primary-600 hover:underline">
                  View all
                </a>
              </div>

              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div key={product.name} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 font-semibold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {product.name}
                      </h4>
                      <p className="text-xs text-gray-500">{product.sales} sales</p>
                    </div>
                    <span className="font-semibold text-gray-900 dark:text-gray-100">
                      {product.revenue}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Chart Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Sales Analytics
              </h2>
              <BarChart3 className="w-5 h-5 text-gray-400" />
            </div>
            <div className="h-64 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">
                Sales chart would be rendered here
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
