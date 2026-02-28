'use client'

import { motion } from 'framer-motion'
import { Phone, ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

/**
 * Hero Section
 * Split-screen design with animated water ripple background
 * Features trust badges and dual CTAs
 */
export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const trustBadges = [
    '24/7 Beschikbaar',
    'VCA Gecertificeerd',
    '15 Jaar Ervaring',
  ]

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Animated water ripple background */}
      <div className="absolute inset-0 water-ripple -z-10" />
      
      {/* Decorative SVG elements */}
      <svg className="absolute top-20 left-10 w-32 h-32 text-water-blue/10 -z-10" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="currentColor" />
      </svg>
      <svg className="absolute bottom-20 right-20 w-48 h-48 text-deep-navy/5 -z-10" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="currentColor" />
      </svg>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content (55%) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-xl"
          >
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-water-blue/10 text-water-blue px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-emergency-orange rounded-full animate-pulse" />
              24/7 Spoedhulp in Rotterdam
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="font-outfit text-4xl md:text-5xl lg:text-6xl font-bold text-deep-navy leading-tight mb-6"
            >
              Elke lek{' '}
              <span className="relative inline-block">
                <span className="text-emergency-orange">snel</span>
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-1 bg-emergency-orange rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1, duration: 0.5 }}
                />
              </span>{' '}
              gedicht
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-steel-gray mb-8 leading-relaxed"
            >
              Professionele loodgietersdiensten in Rotterdam en omgeving. 
              Van kleine reparaties tot complete installaties. 
              Snel, betrouwbaar en altijd beschikbaar.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-water-blue text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-water-blue/30 transition-all group"
              >
                Direct een afspraak
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/#diensten"
                className="inline-flex items-center justify-center gap-2 border-2 border-water-blue text-water-blue px-8 py-4 rounded-full font-semibold hover:bg-water-blue hover:text-white transition-all"
              >
                Bekijk diensten
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              {trustBadges.map((badge) => (
                <div 
                  key={badge}
                  className="flex items-center gap-2 text-sm text-gray-600"
                >
                  <CheckCircle2 className="w-4 h-4 text-emergency-orange" />
                  <span>{badge}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Image (45%) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative clip-diagonal overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800"
                alt="Professionele loodgieter aan het werk"
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/30 to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emergency-orange/10 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-emergency-orange" />
                </div>
                <div>
                  <p className="text-xs text-steel-gray">Spoedhulp nodig?</p>
                  <a href="tel:010-1234567" className="font-bold text-deep-navy">
                    010-1234567
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Decorative pipe line */}
            <div className="absolute -z-10 top-10 -right-10 w-32 h-4 bg-water-blue/20 rounded-full" />
            <div className="absolute -z-10 bottom-20 -right-5 w-20 h-4 bg-emergency-orange/20 rounded-full" />
          </motion.div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="wave-divider">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  )
}
