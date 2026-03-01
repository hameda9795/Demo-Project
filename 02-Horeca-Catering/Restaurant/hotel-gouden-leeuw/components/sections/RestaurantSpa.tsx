'use client';

/**
 * Spa & Dining Preview - Split Screen Section
 * 
 * Design:
 * - Left: Restaurant "De Leeuwenkelder"
 * - Right: Spa & Wellness
 * - Gold line connecting both sections (visual path)
 * - Parallax images
 */

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Utensils, Clock, Wine, Soup, ChefHat, Flower2, Droplets, Heart } from 'lucide-react';
import { menuItems, spaTreatments } from '@/lib/data';
import { formatPrice } from '@/lib/utils';

export default function RestaurantSpa() {
  return (
    <section className="relative">
      {/* Connecting Gold Line */}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent hidden lg:block" />

      <div className="grid lg:grid-cols-2">
        {/* Restaurant Section */}
        <div id="restaurant" className="relative min-h-[600px] lg:min-h-[700px]">
          {/* Background Image with Parallax */}
          <div className="absolute inset-0">
            <Image
              src="/images/hotel/restaurant/dining-room.jpg"
              alt="Restaurant De Leeuwenkelder"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-navy/70" />
          </div>

          <div className="relative z-10 h-full flex flex-col justify-center p-8 lg:p-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Utensils className="w-6 h-6 text-gold" />
                <span className="text-gold text-sm font-medium uppercase tracking-widest">
                  Restaurant
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-white font-semibold mb-4">
                De Leeuwenkelder
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-lg">
                Een culinaire reis door Nederland met internationale invloeden. 
                Onze chef-kok combineert lokale ingrediënten met moderne technieken.
              </p>

              {/* Menu Highlights */}
              <div className="space-y-4 mb-8">
                {menuItems.slice(0, 3).map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl p-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center">
                        {index === 0 ? <Soup className="w-6 h-6 text-gold" /> :
                         index === 1 ? <ChefHat className="w-6 h-6 text-gold" /> :
                         <Wine className="w-6 h-6 text-gold" />}
                      </div>
                      <div>
                        <h4 className="text-white font-medium">{item.name}</h4>
                        <p className="text-white/60 text-sm">{item.description}</p>
                      </div>
                    </div>
                    <span className="text-gold font-semibold">{formatPrice(item.price)}</span>
                  </motion.div>
                ))}
              </div>

              {/* Opening Hours */}
              <div className="flex items-center gap-6 text-white/70 text-sm mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gold" />
                  <span>Di-Zo: 07:00 - 22:00</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wine className="w-4 h-4 text-gold" />
                  <span>Wijnkelder met 100+ wijnen</span>
                </div>
              </div>

              <button className="px-8 py-4 bg-gold text-navy font-medium rounded-xl hover:bg-gold-light transition-colors btn-shimmer">
                Reserveer een tafel
              </button>
            </motion.div>
          </div>
        </div>

        {/* Spa Section */}
        <div id="spa" className="relative min-h-[600px] lg:min-h-[700px]">
          {/* Background Image with Parallax */}
          <div className="absolute inset-0">
            <Image
              src="/images/hotel/spa/relaxation-area.jpg"
              alt="Spa & Wellness"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-burgundy/80" />
          </div>

          <div className="relative z-10 h-full flex flex-col justify-center p-8 lg:p-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Flower2 className="w-6 h-6 text-gold" />
                <span className="text-gold text-sm font-medium uppercase tracking-widest">
                  Spa & Wellness
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-white font-semibold mb-4">
                Ontspan & Herlaad
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-lg">
                Laat de stress van alledag achter u in onze luxe spa. 
                Van ontspannende massages tot verfrissende gezichtsbehandelingen.
              </p>

              {/* Treatment Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {spaTreatments.slice(0, 2).map((treatment, index) => (
                  <motion.div
                    key={treatment.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Droplets className="w-5 h-5 text-gold" />
                      <span className="text-white/60 text-xs">{treatment.duration} min</span>
                    </div>
                    <h4 className="text-white font-medium mb-1">{treatment.name}</h4>
                    <p className="text-white/60 text-sm mb-3">{treatment.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gold font-semibold">{formatPrice(treatment.price)}</span>
                      <button className="text-white/70 hover:text-gold text-sm transition-colors">
                        Boek →
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Facilities */}
              <div className="flex flex-wrap gap-3 mb-8">
                {['Sauna', 'Stoombad', 'Whirlpool', 'Relaxruimte'].map((facility) => (
                  <span 
                    key={facility}
                    className="px-4 py-2 bg-white/10 text-white rounded-full text-sm flex items-center gap-2"
                  >
                    <Heart className="w-4 h-4 text-gold" />
                    {facility}
                  </span>
                ))}
              </div>

              <button className="px-8 py-4 bg-white text-burgundy font-medium rounded-xl hover:bg-gold hover:text-navy transition-colors btn-shimmer">
                Bekijk alle behandelingen
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
