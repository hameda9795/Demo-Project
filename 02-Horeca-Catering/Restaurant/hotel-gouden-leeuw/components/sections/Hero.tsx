'use client';

/**
 * Hero Section - The Grand Entrance
 * 
 * Design Philosophy: "The Art of Arrival"
 * - Full viewport height with layered parallax
 * - Archway overlay framing the content like looking through a doorway
 * - Curtain reveal animation on load
 * - Booking widget with date selection
 */

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, Users, ChevronDown, Star, Award, Leaf } from 'lucide-react';
import { trustBadges } from '@/lib/data';
import { formatDate, addDays } from '@/lib/utils';

export default function Hero() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set default dates
    const today = new Date();
    const tomorrow = addDays(today, 1);
    setCheckIn(today.toISOString().split('T')[0]);
    setCheckOut(tomorrow.toISOString().split('T')[0]);
    setIsLoaded(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Scroll to rooms section
    document.getElementById('kamers')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/hotel/exterior/facade-golden-hour.jpg"
          alt="Hotel De Gouden Leeuw bij zonsondergang"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy/70" />
      </motion.div>

      {/* Archway SVG Frame */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <svg 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none" 
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="archGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d4af37" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#d4af37" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#d4af37" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          {/* Arch outline */}
          <path
            d="M 10 100 L 10 40 Q 10 10 50 10 Q 90 10 90 40 L 90 100"
            fill="none"
            stroke="url(#archGradient)"
            strokeWidth="0.5"
            className="opacity-50"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -20 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8"
        >
          {trustBadges.map((badge, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
            >
              {badge.icon === 'star' && <Star className="w-4 h-4 text-gold fill-gold" />}
              {badge.icon === 'award' && <Award className="w-4 h-4 text-gold" />}
              {badge.icon === 'leaf' && <Leaf className="w-4 h-4 text-gold" />}
              <div className="text-left">
                <span className="text-white font-semibold text-sm">{badge.label}</span>
                <span className="text-white/70 text-xs ml-1">{badge.sublabel}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.9 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-semibold leading-tight mb-6"
        >
          Uw{' '}
          <span className="text-gold">thuis</span>
          {' '}in het hart van Utrecht
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-white/90 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-12 font-light"
        >
          Boutique hotel met 25 unieke kamers en panoramisch uitzicht op de Domtoren
        </motion.p>

        {/* Booking Widget */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 sm:p-8 max-w-4xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Check-in Date */}
            <div className="relative">
              <label className="block text-navy/70 text-xs font-medium uppercase tracking-wider mb-2">
                Check-in
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gold" />
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-cream border border-gray-200 rounded-lg text-navy focus:border-gold focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Check-out Date */}
            <div className="relative">
              <label className="block text-navy/70 text-xs font-medium uppercase tracking-wider mb-2">
                Check-out
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gold" />
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-cream border border-gray-200 rounded-lg text-navy focus:border-gold focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Guests */}
            <div className="relative">
              <label className="block text-navy/70 text-xs font-medium uppercase tracking-wider mb-2">
                Gasten
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gold" />
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-cream border border-gray-200 rounded-lg text-navy focus:border-gold focus:outline-none transition-colors appearance-none"
                >
                  <option value="1">1 gast</option>
                  <option value="2">2 gasten</option>
                  <option value="3">3 gasten</option>
                  <option value="4">4 gasten</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-navy/50 pointer-events-none" />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full py-3.5 bg-navy text-white font-medium rounded-lg hover:bg-navy-light transition-all btn-shimmer shadow-lg shadow-navy/30"
              >
                Bekijk Beschikbaarheid
              </button>
            </div>
          </form>
        </motion.div>

        {/* DEMO Label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ delay: 1.2, duration: 0.4 }}
          className="mt-6 text-white/60 text-sm"
        >
          DEMO - Geen echte boekingen mogelijk
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ delay: 1.4, duration: 0.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center text-white/60"
        >
          <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
