'use client'

import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { DemoBadge } from '../DemoBanner'

const trustBadges = [
  '5 Jaar garantie',
  'Streeploos resultaat',
  'Binnen 1 week gestart',
]

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-white via-teal-50/30 to-white">
      {/* Paint roller animation line */}
      <motion.div
        className="absolute top-1/2 left-0 h-1.5 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 z-10"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
      />
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-teal-100 rounded-full opacity-50 blur-3xl" />
        <div className="absolute bottom-20 -left-20 w-72 h-72 bg-coral-100 rounded-full opacity-40 blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-softyellow-100 rounded-full opacity-30 blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-6"
            >
              {trustBadges.map((badge, index) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 text-sm text-gray-600 bg-white px-3 py-1.5 rounded-full shadow-sm border border-gray-100"
                >
                  <Check className="w-4 h-4 text-teal-500" />
                  {badge}
                </span>
              ))}
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              <span className="text-gray-900">Geef uw ruimte </span>
              <motion.span
                className="bg-gradient-to-r from-teal-500 via-blue-600 to-purple-600 bg-clip-text text-transparent inline-block"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              >
                kleur
              </motion.span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Professioneel schilderwerk in Den Haag en Rotterdam. 
              Van binnen tot buiten, wij brengen uw visie tot leven met streeploze precisie.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/contact/"
                className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-full shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
              >
                Gratis kleuradvies
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/diensten/"
                className="group w-full sm:w-auto px-8 py-4 bg-white text-gray-700 font-semibold rounded-full border-2 border-gray-200 hover:border-teal-500 hover:text-teal-600 transition-all flex items-center justify-center gap-2"
              >
                Bekijk prijzen
              </Link>
            </div>

            {/* Service area */}
            <p className="mt-8 text-sm text-gray-500">
              Actief in: <span className="font-medium text-gray-700">Den Haag • Rotterdam • Zoetermeer • Delft</span>
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="relative"
          >
            <DemoBadge />
            
            {/* Main image container with organic shape */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-200 via-blue-200 to-purple-200 rounded-[3rem] blur-2xl opacity-60" />
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                <Image
                  src="/images/schilder/hero/color-wall.jpg"
                  alt="Vibrant painted wall showcasing professional painting work"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                  priority
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Floating stats card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-teal-600">15+</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Jaar ervaring</p>
                    <p className="text-xs text-gray-500">Schilders vakmanschap</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating rating card */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100"
              >
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-bold text-gray-900">4.9/5</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">128+ reviews</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
