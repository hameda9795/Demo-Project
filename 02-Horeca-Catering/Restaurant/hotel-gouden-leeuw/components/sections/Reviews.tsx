'use client';

/**
 * Reviews Marquee - Social Proof Section
 * 
 * Features:
 * - Auto-scrolling horizontal marquee
 * - Pause on hover
 * - Review cards with star ratings
 * - Dutch testimonials
 */

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { reviews } from '@/lib/data';

export default function Reviews() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  // Double the reviews for seamless loop
  const doubledReviews = [...reviews, ...reviews];

  return (
    <section className="py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">
            Wat gasten zeggen
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-navy font-semibold mb-6">
            Gastbeoordelingen
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 text-gold fill-gold" />
              ))}
            </div>
            <span className="text-navy font-semibold text-lg">4.9/5</span>
            <span className="text-navy/60">op basis van 127 beoordelingen</span>
          </div>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div 
        ref={marqueeRef}
        className="relative"
        onMouseEnter={() => {
          if (marqueeRef.current) {
            marqueeRef.current.style.animationPlayState = 'paused';
          }
        }}
        onMouseLeave={() => {
          if (marqueeRef.current) {
            marqueeRef.current.style.animationPlayState = 'running';
          }
        }}
      >
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />

        {/* Scrolling Content */}
        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {doubledReviews.map((review, index) => (
            <div
              key={`${review.id}-${index}`}
              className="flex-shrink-0 w-[400px] mx-4"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg h-full">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-gold/30 mb-4" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating 
                          ? 'text-gold fill-gold' 
                          : 'text-gray-200'
                      }`}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-navy/80 text-sm leading-relaxed mb-6">
                  "{review.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center">
                    <span className="text-navy font-semibold text-lg">
                      {review.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy">{review.author}</h4>
                    {review.location && (
                      <p className="text-navy/50 text-sm">{review.location}</p>
                    )}
                  </div>
                </div>

                {/* Verified Badge */}
                {review.verified && (
                  <div className="mt-4 flex items-center gap-2 text-green-600 text-xs">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Geverifieerde gast
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16"
      >
        <div className="flex flex-wrap justify-center gap-8">
          {[
            { name: 'Booking.com', rating: '4.9/5' },
            { name: 'TripAdvisor', rating: '5/5' },
            { name: 'Google', rating: '4.8/5' },
            { name: 'Hotels.com', rating: '4.9/5' },
          ].map((platform) => (
            <div key={platform.name} className="flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-sm">
              <span className="text-navy font-medium text-sm">{platform.name}</span>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-gold fill-gold" />
                <span className="text-navy font-semibold text-sm">{platform.rating}</span>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center text-navy/40 text-xs mt-8">
          DEMO - Beoordelingen zijn fictief en voor demonstratiedoeleinden
        </p>
      </motion.div>
    </section>
  );
}
