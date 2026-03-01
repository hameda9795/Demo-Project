'use client';

/**
 * Customer Portal Page
 * Digital stamp card, order history, favorites
 * "Mijn Koffie" - personal coffee experience
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  History, 
  CreditCard, 
  Settings, 
  LogOut,
  ChevronRight,
  Repeat,
  Gift,
  Star,
  User
} from 'lucide-react';
import { LoyaltyCard } from '@/components/LoyaltyCard';
import { DEMO_USER, MENU_ITEMS } from '@/lib/data';
import { formatPrice } from '@/lib/utils';

const TABS = [
  { id: 'stamps', label: 'Spaarkaart', icon: Gift },
  { id: 'history', label: 'Geschiedenis', icon: History },
  { id: 'favorites', label: 'Favorieten', icon: Heart },
  { id: 'payment', label: 'Betaling', icon: CreditCard },
];

export default function MijnKoffiePage() {
  const [activeTab, setActiveTab] = useState('stamps');
  const [stamps, setStamps] = useState(DEMO_USER.loyaltyCard.stamps);

  // Demo: Add stamp
  const addStamp = () => {
    setStamps(prev => (prev >= 10 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white p-6 pb-12">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Mijn Koffie</h1>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-white/20 rounded-full"
          >
            <Settings className="w-5 h-5" />
          </motion.button>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-amber-500">
            <User className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-xl font-bold">{DEMO_USER.name}</h2>
            <p className="text-amber-100">{DEMO_USER.email}</p>
            <div className="flex items-center gap-1 mt-1">
              <Star className="w-4 h-4 fill-white" />
              <span className="text-sm font-semibold">Gouden Lid</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="-mt-6 px-4">
        <div className="bg-white rounded-2xl shadow-soft p-2 flex overflow-x-auto scrollbar-hide">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            return (
              <motion.button
                key={tab.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-amber-500 text-white'
                    : 'text-espresso-600 hover:bg-espresso-50'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-4">
        {/* Stamps Tab */}
        {activeTab === 'stamps' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <LoyaltyCard 
              stamps={stamps} 
              freeDrinksAvailable={stamps === 10 ? 1 : 0}
              showAnimation={true}
            />

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-2xl shadow-soft text-center">
                <p className="text-3xl font-bold text-amber-600">
                  {DEMO_USER.loyaltyCard.totalDrinksPurchased}
                </p>
                <p className="text-sm text-espresso-500">Koffies genuttigd</p>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-soft text-center">
                <p className="text-3xl font-bold text-green-600">
                  {Math.floor(DEMO_USER.loyaltyCard.totalDrinksPurchased / 10)}
                </p>
                <p className="text-sm text-espresso-500">Gratis koffies</p>
              </div>
            </div>

            {/* Demo Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={addStamp}
              className="w-full py-4 bg-espresso-800 text-white font-bold rounded-xl"
            >
              Demo: Stempel toevoegen
            </motion.button>
          </motion.div>
        )}

        {/* History Tab */}
        {activeTab === 'history' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h2 className="font-bold text-espresso-900">Recente bestellingen</h2>
            {[
              { date: 'Vandaag', items: 'Cappuccino, Croissant', total: 6.25 },
              { date: 'Gisteren', items: 'Latte Macchiato', total: 3.75 },
              { date: '22 feb', items: 'Cold Brew, Avocado Toast', total: 12.50 },
            ].map((order, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-4 rounded-2xl shadow-soft"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-semibold text-espresso-900">{order.items}</p>
                    <p className="text-sm text-espresso-400">{order.date}</p>
                  </div>
                  <span className="font-bold text-amber-600">
                    {formatPrice(order.total)}
                  </span>
                </div>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="mt-3 flex items-center gap-2 text-sm font-semibold text-amber-600"
                >
                  <Repeat className="w-4 h-4" />
                  Opnieuw bestellen
                </motion.button>
              </motion.div>
            ))}

            {/* Regular Order */}
            <div className="bg-amber-50 border-2 border-amber-200 p-4 rounded-2xl">
              <h3 className="font-bold text-amber-800 mb-2">Jouw vaste bestelling</h3>
              <p className="text-sm text-amber-700 mb-3">
                Cappuccino (M) met havermelk + Croissant
              </p>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 bg-amber-500 text-white font-semibold rounded-xl"
              >
                Snel bestellen
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Favorites Tab */}
        {activeTab === 'favorites' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h2 className="font-bold text-espresso-900">Jouw favorieten</h2>
            {MENU_ITEMS.filter(item => DEMO_USER.favoriteItems.includes(item.id)).map((item) => (
              <motion.div
                key={item.id}
                whileTap={{ scale: 0.98 }}
                className="bg-white p-4 rounded-2xl shadow-soft flex items-center gap-4"
              >
                <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center text-2xl">
                  {item.category === 'koffie' ? '☕' : 
                   item.category === 'lunch' ? '🥪' : '🥐'}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-espresso-900">{item.name}</p>
                  <p className="text-sm text-amber-600">{formatPrice(item.price)}</p>
                </div>
                <motion.button
                  whileTap={{ scale: 0.8 }}
                  className="p-2 text-red-500"
                >
                  <Heart className="w-5 h-5 fill-current" />
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Payment Tab */}
        {activeTab === 'payment' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h2 className="font-bold text-espresso-900">Betaalmethoden</h2>
            
            {/* Demo Credit Card */}
            <div className="bg-gradient-to-br from-espresso-800 to-espresso-900 text-white p-6 rounded-2xl shadow-elevated">
              <div className="flex justify-between items-start mb-8">
                <div className="text-2xl font-bold">VISA</div>
                <div className="w-10 h-8 bg-amber-400/30 rounded" />
              </div>
              <p className="text-xl font-mono tracking-widest mb-4">
                •••• •••• •••• 4242
              </p>
              <div className="flex justify-between text-sm text-espresso-300">
                <span>DEMO GEBRUIKER</span>
                <span>12/28</span>
              </div>
            </div>

            {/* Other Payment Methods */}
            <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
              {['iDEAL', 'Apple Pay', 'Google Pay'].map((method, index) => (
                <button
                  key={method}
                  className={`w-full p-4 flex items-center justify-between ${
                    index !== 2 ? 'border-b border-espresso-100' : ''
                  }`}
                >
                  <span className="font-semibold text-espresso-900">{method}</span>
                  <ChevronRight className="w-5 h-5 text-espresso-400" />
                </button>
              ))}
            </div>

            <p className="text-center text-sm text-espresso-400">
              Dit zijn demo betaalmethoden voor illustratie
            </p>
          </motion.div>
        )}
      </div>

      {/* Logout Button */}
      <div className="p-4 pt-0">
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="w-full py-4 border-2 border-espresso-200 text-espresso-600 font-semibold rounded-xl flex items-center justify-center gap-2"
        >
          <LogOut className="w-5 h-5" />
          Uitloggen
        </motion.button>
      </div>
    </div>
  );
}
