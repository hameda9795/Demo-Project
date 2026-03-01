'use client';

/**
 * Menu Page
 * Instagram-style grid with category swiper
 * Mobile-first with swipe gestures
 */

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Heart, Plus, Leaf, WheatOff, Info } from 'lucide-react';
import { BottomSheet } from '@/components/BottomSheet';
import { MENU_ITEMS, CATEGORIES, DEMO_USER } from '@/lib/data';
import { formatPrice } from '@/lib/utils';
import type { MenuItem, CategoryType, CartItem } from '@/types';

import 'swiper/css';

// Dietary icons mapping
const dietaryIcons = {
  'vegan': { icon: Leaf, color: 'text-green-600', bg: 'bg-green-100' },
  'vegetarian': { icon: Leaf, color: 'text-green-500', bg: 'bg-green-50' },
  'gluten-free': { icon: WheatOff, color: 'text-amber-600', bg: 'bg-amber-100' },
  'lactose-free': { icon: Info, color: 'text-blue-600', bg: 'bg-blue-100' },
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('koffie');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<string[]>(DEMO_USER.favoriteItems);

  // Filter items by category
  const filteredItems = useMemo(() => 
    MENU_ITEMS.filter(item => item.category === activeCategory),
    [activeCategory]
  );

  // Add to favorites
  const toggleFavorite = (itemId: string) => {
    setFavorites(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  // Add to cart
  const addToCart = (item: MenuItem) => {
    const cartItem: CartItem = {
      ...item,
      cartId: Math.random().toString(36).substr(2, 9),
      quantity: 1,
      unitPrice: item.price,
      totalPrice: item.price,
    };
    setCart(prev => [...prev, cartItem]);
    setSelectedItem(null);
  };

  return (
    <div className="min-h-screen pb-24">
      {/* Page Header */}
      <div className="bg-espresso-900 text-white p-6 pb-8">
        <h1 className="text-3xl font-extrabold mb-2">Ons Menu</h1>
        <p className="text-espresso-200">Vers bereid, met passie gemaakt</p>
      </div>

      {/* Category Swiper */}
      <div className="sticky top-16 z-30 bg-cream-50/95 backdrop-blur-lg border-b border-latte-100 -mt-4 pt-4 pb-2">
        <div className="flex gap-2 px-4 overflow-x-auto scrollbar-hide">
          {CATEGORIES.map((category) => (
            <motion.button
              key={category.id}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id as CategoryType)}
              className={`flex-shrink-0 px-5 py-2.5 rounded-full font-semibold text-sm transition-all ${
                activeCategory === category.id
                  ? 'bg-amber-500 text-white shadow-soft'
                  : 'bg-white text-espresso-700 border border-latte-200'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Menu Grid */}
      <div className="px-4 py-6 space-y-4">
        <AnimatePresence mode="wait">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-2xl overflow-hidden shadow-soft"
            >
              {/* Image Section */}
              <div className="relative h-48 w-full">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
                {/* Favorite Button */}
                <motion.button
                  whileTap={{ scale: 0.8 }}
                  onClick={() => toggleFavorite(item.id)}
                  className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-soft"
                >
                  <Heart 
                    className={`w-5 h-5 ${
                      favorites.includes(item.id) 
                        ? 'fill-red-500 text-red-500' 
                        : 'text-espresso-400'
                    }`} 
                  />
                </motion.button>
                {/* Popular Badge */}
                {item.popular && (
                  <span className="absolute top-3 left-3 px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded-full">
                    Populair
                  </span>
                )}
              </div>

              {/* Content Section */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-lg text-espresso-900">{item.name}</h3>
                    <p className="text-sm text-espresso-500 line-clamp-2">{item.description}</p>
                  </div>
                  <span className="text-lg font-bold text-amber-600 whitespace-nowrap ml-2">
                    {formatPrice(item.price)}
                  </span>
                </div>

                {/* Dietary Icons */}
                {item.dietary.length > 0 && (
                  <div className="flex gap-2 mb-3">
                    {item.dietary.map((diet) => {
                      const config = dietaryIcons[diet];
                      const Icon = config.icon;
                      return (
                        <span 
                          key={diet}
                          className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${config.bg} ${config.color}`}
                        >
                          <Icon className="w-3 h-3" />
                          {diet === 'vegan' ? 'Vegan' : 
                           diet === 'vegetarian' ? 'Veggie' :
                           diet === 'gluten-free' ? 'Glutenvrij' : 'Lactosevrij'}
                        </span>
                      );
                    })}
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-2">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedItem(item)}
                    className="flex-1 py-3 border-2 border-espresso-200 text-espresso-700 font-semibold rounded-xl"
                  >
                    Details
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => addToCart(item)}
                    className="w-14 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center shadow-soft"
                  >
                    <Plus className="w-6 h-6" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Cart Summary (if items in cart) */}
      {cart.length > 0 && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="fixed bottom-20 left-4 right-4 bg-espresso-900 text-white p-4 rounded-2xl shadow-elevated z-30"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-espresso-200">{cart.length} items in winkelwagen</p>
              <p className="text-lg font-bold">
                {formatPrice(cart.reduce((sum, item) => sum + item.totalPrice, 0))}
              </p>
            </div>
            <button className="px-6 py-3 bg-amber-500 text-white font-bold rounded-xl">
              Afrekenen
            </button>
          </div>
        </motion.div>
      )}

      {/* Item Detail Bottom Sheet */}
      <BottomSheet
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        title={selectedItem?.name}
        height="large"
      >
        {selectedItem && (
          <div className="p-4 space-y-6">
            {/* Item Image */}
            <div className="relative h-48 rounded-2xl overflow-hidden">
              <Image
                src={selectedItem.image}
                alt={selectedItem.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Description */}
            <p className="text-espresso-600">{selectedItem.description}</p>

            {/* Size Selection */}
            {selectedItem.customization?.sizes && (
              <div>
                <h4 className="font-bold text-espresso-900 mb-3">Maat</h4>
                <div className="flex gap-2">
                  {selectedItem.customization.sizes.map((size) => (
                    <button
                      key={size.label}
                      className="flex-1 py-3 border-2 border-espresso-200 rounded-xl font-semibold text-espresso-700 hover:border-amber-500 hover:text-amber-600 transition-colors"
                    >
                      <span className="block text-lg">{size.label}</span>
                      {size.ml && <span className="text-xs text-espresso-400">{size.ml}ml</span>}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Milk Selection */}
            {selectedItem.customization?.milkOptions && (
              <div>
                <h4 className="font-bold text-espresso-900 mb-3">Melk</h4>
                <div className="grid grid-cols-2 gap-2">
                  {selectedItem.customization.milkOptions.map((milk) => (
                    <button
                      key={milk.type}
                      className="py-3 px-4 border-2 border-espresso-200 rounded-xl font-medium text-espresso-700 text-left hover:border-amber-500 transition-colors"
                    >
                      <span className="block">{milk.label}</span>
                      {milk.priceModifier > 0 && (
                        <span className="text-xs text-espresso-400">+{formatPrice(milk.priceModifier)}</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Special Requests */}
            <div>
              <h4 className="font-bold text-espresso-900 mb-3">Opmerkingen</h4>
              <textarea
                placeholder="Bijv. extra heet, minder suiker..."
                className="w-full p-4 border-2 border-espresso-200 rounded-xl resize-none focus:border-amber-500 focus:outline-none"
                rows={3}
              />
            </div>

            {/* Add to Cart Button */}
            <div className="sticky bottom-0 bg-cream-50 pt-4 pb-safe-bottom">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => addToCart(selectedItem)}
                className="w-full py-4 bg-amber-500 text-white font-bold rounded-full shadow-elevated"
              >
                Toevoegen - {formatPrice(selectedItem.price)}
              </motion.button>
            </div>
          </div>
        )}
      </BottomSheet>
    </div>
  );
}
