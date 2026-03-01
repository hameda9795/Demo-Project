'use client';

/**
 * Order Page
 * Order ahead / pickup functionality
 * Smart ordering flow with time selector
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, ShoppingBag, Store, Truck, ChevronRight, Minus, Plus } from 'lucide-react';
import { formatPrice } from '@/lib/utils';
import { MENU_ITEMS } from '@/lib/data';
import type { OrderType, CartItem } from '@/types';

const PICKUP_TIMES = [
  { label: '10 min', minutes: 10 },
  { label: '20 min', minutes: 20 },
  { label: '30 min', minutes: 30 },
  { label: '45 min', minutes: 45 },
  { label: '1 uur', minutes: 60 },
];

export default function OrderPage() {
  const [orderType, setOrderType] = useState<OrderType>('pickup');
  const [pickupTime, setPickupTime] = useState(20);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [step, setStep] = useState<'cart' | 'details' | 'confirm'>('cart');

  // Sample cart items for demo
  const sampleCart: CartItem[] = [
    {
      ...MENU_ITEMS[1], // Cappuccino
      cartId: '1',
      quantity: 2,
      selectedSize: 'M',
      selectedMilk: 'havermelk',
      unitPrice: 4.00,
      totalPrice: 8.00,
    },
    {
      ...MENU_ITEMS[6], // Croissant
      cartId: '2',
      quantity: 1,
      unitPrice: 2.75,
      totalPrice: 2.75,
    },
  ];

  const cartItems = cart.length > 0 ? cart : sampleCart;
  const total = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <div className="bg-amber-500 text-white p-6">
        <h1 className="text-3xl font-extrabold mb-2">Bestellen</h1>
        <p className="text-amber-100">Kies hoe je wilt bestellen</p>
      </div>

      {/* Order Type Selection */}
      <div className="px-4 py-6">
        <h2 className="text-lg font-bold text-espresso-900 mb-4">Hoe wil je bestellen?</h2>
        <div className="grid grid-cols-2 gap-3">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setOrderType('pickup')}
            className={`p-4 rounded-2xl border-2 text-center transition-all ${
              orderType === 'pickup'
                ? 'border-amber-500 bg-amber-50'
                : 'border-espresso-200 bg-white'
            }`}
          >
            <ShoppingBag className={`w-8 h-8 mx-auto mb-2 ${
              orderType === 'pickup' ? 'text-amber-500' : 'text-espresso-400'
            }`} />
            <p className="font-bold text-espresso-900">Afhalen</p>
            <p className="text-xs text-espresso-500">Bestel vooruit</p>
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setOrderType('dine-in')}
            className={`p-4 rounded-2xl border-2 text-center transition-all ${
              orderType === 'dine-in'
                ? 'border-amber-500 bg-amber-50'
                : 'border-espresso-200 bg-white'
            }`}
          >
            <Store className={`w-8 h-8 mx-auto mb-2 ${
              orderType === 'dine-in' ? 'text-amber-500' : 'text-espresso-400'
            }`} />
            <p className="font-bold text-espresso-900">Ter plekke</p>
            <p className="text-xs text-espresso-500">Aan tafel</p>
          </motion.button>
        </div>
      </div>

      {/* Pickup Time Selection */}
      {orderType === 'pickup' && (
        <div className="px-4 py-6 bg-white border-y border-latte-100">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-amber-500" />
            <h2 className="text-lg font-bold text-espresso-900">Wanneer klaar?</h2>
          </div>
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
            {PICKUP_TIMES.map((time) => (
              <motion.button
                key={time.minutes}
                whileTap={{ scale: 0.95 }}
                onClick={() => setPickupTime(time.minutes)}
                className={`flex-shrink-0 px-5 py-3 rounded-xl font-semibold transition-all ${
                  pickupTime === time.minutes
                    ? 'bg-amber-500 text-white shadow-soft'
                    : 'bg-espresso-100 text-espresso-700'
                }`}
              >
                {time.label}
              </motion.button>
            ))}
          </div>
        </div>
      )}

      {/* Cart Items */}
      <div className="px-4 py-6">
        <h2 className="text-lg font-bold text-espresso-900 mb-4">Jouw bestelling</h2>
        <div className="space-y-3">
          {cartItems.map((item) => (
            <motion.div
              key={item.cartId}
              layout
              className="bg-white p-4 rounded-2xl shadow-soft flex items-center gap-4"
            >
              {/* Quantity Controls */}
              <div className="flex items-center gap-2">
                <motion.button
                  whileTap={{ scale: 0.8 }}
                  className="w-8 h-8 rounded-full bg-espresso-100 flex items-center justify-center"
                >
                  <Minus className="w-4 h-4 text-espresso-600" />
                </motion.button>
                <span className="w-6 text-center font-bold">{item.quantity}</span>
                <motion.button
                  whileTap={{ scale: 0.8 }}
                  className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center"
                >
                  <Plus className="w-4 h-4 text-amber-600" />
                </motion.button>
              </div>

              {/* Item Info */}
              <div className="flex-1">
                <p className="font-bold text-espresso-900">{item.name}</p>
                {item.selectedSize && (
                  <p className="text-xs text-espresso-500">
                    {item.selectedSize}, {item.selectedMilk}
                  </p>
                )}
              </div>

              {/* Price */}
              <span className="font-bold text-amber-600">
                {formatPrice(item.totalPrice)}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Add More Link */}
        <button className="mt-4 text-amber-600 font-semibold flex items-center gap-1">
          + Voeg items toe
        </button>
      </div>

      {/* Order Summary */}
      <div className="px-4 py-6 bg-white border-t border-latte-100">
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-espresso-600">
            <span>Subtotaal</span>
            <span>{formatPrice(total)}</span>
          </div>
          <div className="flex justify-between text-espresso-600">
            <span>Servicekosten</span>
            <span>Gratis</span>
          </div>
          <div className="flex justify-between text-lg font-bold text-espresso-900 pt-2 border-t border-latte-100">
            <span>Totaal</span>
            <span>{formatPrice(total)}</span>
          </div>
        </div>

        {/* Pickup Info */}
        {orderType === 'pickup' && (
          <div className="bg-amber-50 p-4 rounded-xl mb-4">
            <p className="text-sm text-espresso-700">
              <span className="font-semibold">Afhaaltijd:</span> Over {pickupTime} minuten
            </p>
            <p className="text-xs text-espresso-500 mt-1">
              Je ontvangt een melding wanneer je bestelling klaar staat
            </p>
          </div>
        )}

        {/* Checkout Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="w-full py-4 bg-amber-500 text-white font-bold rounded-full shadow-elevated flex items-center justify-center gap-2"
        >
          Bestelling plaatsen
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </div>

      {/* Pickup Counter Animation (Demo) */}
      <div className="px-4 py-6">
        <div className="bg-espresso-900 text-white p-6 rounded-2xl text-center">
          <p className="text-espresso-300 text-sm mb-2">Jouw afhaalnummer</p>
          <p className="text-6xl font-black text-amber-400">42</p>
          <p className="text-espresso-300 text-sm mt-2">Toon dit nummer bij de bar</p>
        </div>
      </div>
    </div>
  );
}
