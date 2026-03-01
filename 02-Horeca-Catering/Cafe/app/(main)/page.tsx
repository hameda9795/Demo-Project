'use client';

/**
 * Home Page - Hero Section
 * Mobile-first design with vertical carousel
 * "The Daily Ritual" concept
 */

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { ArrowRight, MapPin, Clock } from 'lucide-react';
import { BusynessIndicator } from '@/components/BusynessIndicator';
import { LoyaltyCard } from '@/components/LoyaltyCard';
import { DEMO_USER, OPENING_HOURS } from '@/lib/data';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const heroSlides = [
  {
    image: '/images/cafe/coffee/pour-latte-art.jpg',
    title: 'Perfecte latte art',
    subtitle: 'Elke keer weer',
  },
  {
    image: '/images/cafe/food/croissant-butter.jpg',
    title: 'Versgebakken croissants',
    subtitle: 'Iedere ochtend',
  },
  {
    image: '/images/cafe/interior/cozy-corner.jpg',
    title: 'Uw vaste plekje',
    subtitle: 'In het hart van Utrecht',
  },
];

const features = [
  { icon: '☕', title: 'Specialty Coffee', desc: 'Vers gebrande bonen' },
  { icon: '🥐', title: 'Homemade', desc: 'Vers gebakken dagelijks' },
  { icon: '🌱', title: 'Duurzaam', desc: 'Lokale leveranciers' },
];

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [greeting, setGreeting] = useState('Goedemorgen');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 6) setGreeting('Goedenacht');
    else if (hour < 12) setGreeting('Goedemorgen');
    else if (hour < 18) setGreeting('Goedemiddag');
    else setGreeting('Goedenavond');
  }, []);

  return (
    <div className="pb-8">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px]">
        {/* Background Carousel */}
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          className="h-full w-full"
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full w-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/90 via-espresso-900/40 to-transparent" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 pb-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Greeting */}
              <p className="text-amber-400 font-semibold mb-2">{greeting}</p>
              
              {/* Main Title */}
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                Uw <span className="text-amber-400">dagelijkse ritueel</span>
              </h1>
              
              {/* Slide Title */}
              <p className="text-xl text-cream-100 mb-2">
                {heroSlides[activeSlide].title}
              </p>
              <p className="text-cream-200 mb-6">
                {heroSlides[activeSlide].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Busyness Indicator */}
          <div className="mb-4">
            <BusynessIndicator level="busy" waitTime={15} />
          </div>

          {/* CTA Button */}
          <Link href="/order">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="w-full py-4 bg-amber-500 text-white font-bold rounded-full shadow-elevated flex items-center justify-center gap-2"
            >
              Bestel Nu
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-8 -mt-8 relative z-10">
        <div className="grid grid-cols-3 gap-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-4 text-center shadow-soft"
            >
              <span className="text-3xl mb-2 block">{feature.icon}</span>
              <h3 className="font-bold text-sm text-espresso-900">{feature.title}</h3>
              <p className="text-xs text-espresso-500">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Loyalty Card Preview */}
      <section className="px-4 py-6">
        <h2 className="text-xl font-bold text-espresso-900 mb-4">Uw spaarkaart</h2>
        <LoyaltyCard 
          stamps={DEMO_USER.loyaltyCard.stamps}
          freeDrinksAvailable={DEMO_USER.loyaltyCard.freeDrinksAvailable}
        />
      </section>

      {/* Quick Info Section */}
      <section className="px-4 py-6">
        <div className="bg-white rounded-2xl p-5 shadow-soft">
          <h2 className="text-lg font-bold text-espresso-900 mb-4">Vandaag geopend</h2>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-espresso-700">
              <Clock className="w-5 h-5 text-amber-500" />
              <span>{OPENING_HOURS[new Date().getDay() === 0 ? 6 : new Date().getDay() - 1].hours}</span>
            </div>
            <div className="flex items-center gap-3 text-espresso-700">
              <MapPin className="w-5 h-5 text-amber-500" />
              <span>5 min van Domtoren</span>
            </div>
          </div>

          <Link href="/locatie">
            <button className="mt-4 w-full py-3 border-2 border-amber-500 text-amber-600 font-semibold rounded-xl">
              Bekijk Locatie
            </button>
          </Link>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-espresso-900">Populair vandaag</h2>
          <Link href="/menu" className="text-amber-600 font-semibold text-sm">
            Alles bekijken →
          </Link>
        </div>

        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4">
          {['Cappuccino', 'Avocado Toast', 'Cold Brew', 'Croissant'].map((item, index) => (
            <motion.div
              key={item}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0 w-32 bg-white rounded-xl p-3 shadow-soft text-center"
            >
              <div className="w-16 h-16 mx-auto mb-2 bg-amber-100 rounded-full flex items-center justify-center text-2xl">
                {['☕', '🥑', '🧊', '🥐'][index]}
              </div>
              <p className="font-semibold text-sm text-espresso-900">{item}</p>
              <p className="text-xs text-amber-600 font-bold">€{[3.50, 8.50, 4.00, 2.75][index]}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
