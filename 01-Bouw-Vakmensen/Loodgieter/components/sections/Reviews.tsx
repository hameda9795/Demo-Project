'use client'

import { motion } from 'framer-motion'
import { Star, MapPin } from 'lucide-react'
import { cn, getInitials } from '@/lib/utils'

/**
 * Testimonial data
 */
const testimonials = [
  {
    id: '1',
    name: 'Jan de Vries',
    location: 'Rotterdam Centrum',
    rating: 5,
    text: 'Snelle hulp bij een lekkage in het weekend. Binnen 45 minuten was de monteur ter plaatse en het probleem opgelost. Top service!',
  },
  {
    id: '2',
    name: 'Maria Jansen',
    location: 'Kralingen',
    rating: 5,
    text: 'Onze cv-ketel was defect midden in de winter. Van Dijk kwam direct en heeft alles perfect gerepareerd. Zeer tevreden!',
  },
  {
    id: '3',
    name: 'Pieter van den Berg',
    location: 'Schiedam',
    rating: 5,
    text: 'Complete badkamer renovatie laten doen. Netjes gewerkt, alles volgens afspraak en binnen budget. Aanrader!',
  },
  {
    id: '4',
    name: 'Anna Bakker',
    location: 'Capelle aan den IJssel',
    rating: 5,
    text: 'Vriendelijke monteur die duidelijk uitlegde wat er mis was met onze leidingen. Eerlijke prijs en goed werk geleverd.',
  },
  {
    id: '5',
    name: 'Willem Smit',
    location: 'Rotterdam Noord',
    rating: 5,
    text: 'Verstopte afvoer in de keuken. Binnen een uur was alles weer in orde. Professioneel en vriendelijk.',
  },
  {
    id: '6',
    name: 'Sophie van Dijk',
    location: 'Vlaardingen',
    rating: 5,
    text: 'Al meerdere keren gebruik gemaakt van hun diensten. Altijd snel, professioneel en eerlijke prijzen.',
  },
]

// Duplicate for seamless marquee
const duplicatedTestimonials = [...testimonials, ...testimonials]

/**
 * Star rating component
 */
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={cn(
            'w-4 h-4',
            i < rating ? 'text-emergency-orange fill-emergency-orange' : 'text-gray-300'
          )}
        />
      ))}
    </div>
  )
}

/**
 * Reviews Section
 * Auto-scrolling marquee of review cards with pause on hover
 * Google rating badge
 */
export function Reviews() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      {/* Section header */}
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-water-blue font-semibold text-sm uppercase tracking-wider">
            Klantenvertellen
          </span>
          <h2 className="font-outfit text-3xl md:text-4xl font-bold text-deep-navy mt-3 mb-4">
            Wat klanten zeggen
          </h2>
          <p className="text-steel-gray">
            Lees de ervaringen van tevreden klanten in Rotterdam en omgeving.
          </p>
        </motion.div>

        {/* Google rating badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mt-6"
        >
          <div className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-full px-6 py-3 shadow-sm">
            <div className="flex items-center gap-1">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="font-bold text-gray-800">Google</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-2xl text-deep-navy">4.9</span>
              <StarRating rating={5} />
              <span className="text-sm text-gray-500">| 127 reviews</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Gradient masks for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Scrolling marquee */}
        <div className="flex overflow-hidden hover:[animation-play-state:paused]">
          <motion.div
            animate={{ x: [0, -50 * testimonials.length * 4] }}
            transition={{
              x: {
                duration: 40,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
            className="flex gap-6 py-4"
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-80 bg-off-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Rating */}
                <StarRating rating={testimonial.rating} />

                {/* Review text */}
                <p className="text-gray-700 mt-3 mb-4 line-clamp-4">
                  "{testimonial.text}"
                </p>

                {/* Author info */}
                <div className="flex items-center gap-3">
                  {/* Avatar placeholder */}
                  <div className="w-10 h-10 bg-water-blue/10 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-water-blue text-sm">
                      {getInitials(testimonial.name)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-deep-navy text-sm">
                      {testimonial.name}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <MapPin className="w-3 h-3" />
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
