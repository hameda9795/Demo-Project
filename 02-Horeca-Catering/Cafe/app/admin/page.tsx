'use client';

/**
 * Admin Dashboard Page
 * Mobile-optimized admin panel with cards instead of tables
 * Login: demo/demo123
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Package, 
  Settings,
  LogOut,
  TrendingUp,
  Clock,
  AlertCircle,
  CheckCircle,
  Coffee,
  Users,
  Euro,
  Menu
} from 'lucide-react';
import { DEMO_ORDERS, INVENTORY_ITEMS, DEMO_CONTACT } from '@/lib/data';
import type { BusynessLevel } from '@/types';

const BUSYNESS_OPTIONS: { level: BusynessLevel; label: string; color: string }[] = [
  { level: 'quiet', label: 'Rustig', color: 'bg-green-500' },
  { level: 'busy', label: 'Gezellig druk', color: 'bg-amber-500' },
  { level: 'crowded', label: 'Even wachten', color: 'bg-red-500' },
];

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [busyness, setBusyness] = useState<BusynessLevel>('busy');
  const [orders, setOrders] = useState(DEMO_ORDERS);

  // Handle login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'demo' && password === 'demo123') {
      setIsLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('Ongeldige inloggegevens. Gebruik demo/demo123');
    }
  };

  // Handle order status update
  const updateOrderStatus = (orderId: string) => {
    setOrders(prev => prev.map(order => 
      order.id === orderId 
        ? { ...order, status: 'completed' as const }
        : order
    ));
  };

  // Login Screen
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-espresso-800 to-espresso-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-sm bg-white rounded-3xl p-8 shadow-2xl"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Coffee className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-espresso-900">Admin Login</h1>
            <p className="text-espresso-500 text-sm mt-1">De Gouden Boon Dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-espresso-700 mb-1">
                Gebruikersnaam
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="demo"
                className="w-full px-4 py-3 border-2 border-espresso-200 rounded-xl focus:border-amber-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-espresso-700 mb-1">
                Wachtwoord
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="demo123"
                className="w-full px-4 py-3 border-2 border-espresso-200 rounded-xl focus:border-amber-500 focus:outline-none"
              />
            </div>

            {loginError && (
              <p className="text-red-500 text-sm text-center">{loginError}</p>
            )}

            <motion.button
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-4 bg-amber-500 text-white font-bold rounded-xl shadow-soft"
            >
              Inloggen
            </motion.button>
          </form>

          <p className="text-center text-xs text-espresso-400 mt-6">
            Gebruik: demo / demo123
          </p>
        </motion.div>
      </div>
    );
  }

  // Dashboard Content
  return (
    <div className="min-h-screen pb-24">
      {/* Admin Header */}
      <header className="bg-espresso-900 text-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center">
              <Coffee className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-bold">Admin Dashboard</h1>
              <p className="text-xs text-espresso-300">De Gouden Boon</p>
            </div>
          </div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsLoggedIn(false)}
            className="p-2 hover:bg-espresso-800 rounded-lg"
          >
            <LogOut className="w-5 h-5" />
          </motion.button>
        </div>
      </header>

      {/* Tab Navigation */}
      <div className="bg-espresso-800 px-4 py-2 overflow-x-auto scrollbar-hide">
        <div className="flex gap-2">
          {[
            { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
            { id: 'orders', icon: ShoppingBag, label: 'Bestellingen' },
            { id: 'inventory', icon: Package, label: 'Voorraad' },
            { id: 'settings', icon: Settings, label: 'Instellingen' },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <motion.button
                key={tab.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'bg-amber-500 text-white'
                    : 'text-espresso-300 hover:bg-espresso-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Dashboard Tab */}
      {activeTab === 'dashboard' && (
        <div className="p-4 space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-4 rounded-2xl shadow-soft text-center"
            >
              <ShoppingBag className="w-6 h-6 text-amber-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-espresso-900">24</p>
              <p className="text-xs text-espresso-500">Bestellingen</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-4 rounded-2xl shadow-soft text-center"
            >
              <Euro className="w-6 h-6 text-green-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-espresso-900">€485</p>
              <p className="text-xs text-espresso-500">Omzet</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-4 rounded-2xl shadow-soft text-center"
            >
              <Clock className="w-6 h-6 text-blue-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-espresso-900">3</p>
              <p className="text-xs text-espresso-500">Openstaand</p>
            </motion.div>
          </div>

          {/* Busyness Toggle */}
          <div className="bg-white p-5 rounded-2xl shadow-soft">
            <h2 className="font-bold text-espresso-900 mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-amber-500" />
              Hoe druk is het?
            </h2>
            <div className="grid grid-cols-3 gap-2">
              {BUSYNESS_OPTIONS.map((option) => (
                <motion.button
                  key={option.level}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setBusyness(option.level)}
                  className={`p-3 rounded-xl text-center font-semibold text-sm transition-all ${
                    busyness === option.level
                      ? 'bg-espresso-900 text-white'
                      : 'bg-espresso-100 text-espresso-700'
                  }`}
                >
                  <div className={`w-3 h-3 rounded-full mx-auto mb-2 ${option.color}`} />
                  {option.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-3">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="p-4 bg-amber-500 text-white rounded-2xl font-semibold text-center"
            >
              + Nieuwe Bestelling
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="p-4 bg-espresso-800 text-white rounded-2xl font-semibold text-center"
            >
              Voorraad Bijvullen
            </motion.button>
          </div>
        </div>
      )}

      {/* Orders Tab */}
      {activeTab === 'orders' && (
        <div className="p-4 space-y-4">
          <h2 className="font-bold text-espresso-900">Live Bestellingen</h2>
          {orders.map((order) => (
            <motion.div
              key={order.id}
              layout
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`bg-white p-4 rounded-2xl shadow-soft border-l-4 ${
                order.status === 'ready' ? 'border-green-500' :
                order.status === 'preparing' ? 'border-amber-500' :
                'border-blue-500'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-bold text-espresso-900">{order.id}</p>
                  <p className="text-sm text-espresso-500">{order.customerName}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  order.status === 'ready' ? 'bg-green-100 text-green-700' :
                  order.status === 'preparing' ? 'bg-amber-100 text-amber-700' :
                  'bg-blue-100 text-blue-700'
                }`}>
                  {order.status === 'ready' ? 'Klaar' :
                   order.status === 'preparing' ? 'Bezig' : 'Nieuw'}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold text-amber-600">
                  €{order.totalAmount.toFixed(2)}
                </p>
                {order.status !== 'completed' && (
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => updateOrderStatus(order.id)}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg font-semibold text-sm flex items-center gap-1"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Afronden
                  </motion.button>
                )}
              </div>
              {order.tableNumber && (
                <p className="text-sm text-espresso-400 mt-2">
                  Tafel {order.tableNumber}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      )}

      {/* Inventory Tab */}
      {activeTab === 'inventory' && (
        <div className="p-4 space-y-4">
          <h2 className="font-bold text-espresso-900">Voorraad</h2>
          {INVENTORY_ITEMS.map((item) => {
            const percentage = (item.currentStock / (item.minStock * 3)) * 100;
            const isLow = item.currentStock <= item.minStock;
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-4 rounded-2xl shadow-soft"
              >
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="font-semibold text-espresso-900">{item.name}</p>
                    <p className="text-xs text-espresso-500">{item.category}</p>
                  </div>
                  {isLow && (
                    <AlertCircle className="w-5 h-5 text-red-500" />
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2 bg-espresso-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(percentage, 100)}%` }}
                      className={`h-full rounded-full ${
                        isLow ? 'bg-red-500' : 'bg-green-500'
                      }`}
                    />
                  </div>
                  <span className={`text-sm font-bold ${
                    isLow ? 'text-red-600' : 'text-espresso-700'
                  }`}>
                    {item.currentStock} {item.unit}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Settings Tab */}
      {activeTab === 'settings' && (
        <div className="p-4 space-y-4">
          <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-4">
            <h3 className="font-bold text-amber-800 mb-2">⚠️ DEMO MODUS</h3>
            <p className="text-sm text-amber-700">
              Dit is een demo admin paneel. Alle wijzigingen worden niet opgeslagen.
            </p>
          </div>

          <h2 className="font-bold text-espresso-900">Instellingen</h2>
          
          <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
            <div className="p-4 border-b border-espresso-100">
              <p className="font-semibold text-espresso-900">Bedrijfsinformatie</p>
              <p className="text-sm text-espresso-500">{DEMO_CONTACT.address}</p>
            </div>
            <div className="p-4 border-b border-espresso-100">
              <p className="font-semibold text-espresso-900">Contact</p>
              <p className="text-sm text-espresso-500">{DEMO_CONTACT.phone}</p>
            </div>
            <div className="p-4">
              <p className="font-semibold text-espresso-900">KVK Nummer</p>
              <p className="text-sm text-espresso-500">{DEMO_CONTACT.kvk}</p>
            </div>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            className="w-full py-4 bg-red-500 text-white font-bold rounded-xl"
          >
            Demo Data Resetten
          </motion.button>
        </div>
      )}
    </div>
  );
}
