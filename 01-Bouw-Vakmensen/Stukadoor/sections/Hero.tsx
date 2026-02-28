'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'

const trustBadges = [
  'Streeploos resultaat',
  '10 jaar garantie',
  'Binnen 3 dagen gestart',
]

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const leftWidth = useTransform(scrollYProgress, [0, 0.5], ['50%', '0%'])
  const rightWidth = useTransform(scrollYProgress, [0, 0.5], ['50%', '100%'])
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, -50])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden pt-24"
    >
      {/* Split Screen Background */}
      <div className="absolute inset-0 flex">
        {/* Left Side - Before (Rough) */}
        <motion.div
          className="relative h-full overflow-hidden"
          style={{ width: leftWidth }}
        >
          <Image
            src="/images/stukadoor/before/brick-wall-rough.jpg"
            alt="Ruw oppervlak voor stucwerk"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-stone-900/20" />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{ opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0]) }}
          >
            <span className="text-white/60 text-2xl md:text-4xl font-heading font-light tracking-widest uppercase">
              Ruw
            </span>
          </motion.div>
        </motion.div>

        {/* Right Side - After (Smooth) */}
        <motion.div
          className="relative h-full overflow-hidden"
          style={{ width: rightWidth }}
        >
          <Image
            src="/images/stukadoor/after/living-smooth.jpg"
            alt="Glad gestuct oppervlak"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-l from-stone-900/10 to-transparent" />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{ opacity: useTransform(scrollYProgress, [0, 0.3], [0.6, 1]) }}
          >
            <span className="text-white/80 text-2xl md:text-4xl font-heading font-light tracking-widest uppercase">
              Gestuct
            </span>
          </motion.div>
        </motion.div>

        {/* Morphing Divider */}
        <motion.div
          className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-sand-300 to-transparent"
          style={{
            left: leftWidth,
            boxShadow: '0 0 40px rgba(214, 211, 209, 0.5)',
          }}
        />
      </div>

      {/* Content Overlay */}
      <motion.div
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 section-padding"
        style={{ opacity: textOpacity, y: textY }}
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* DEMO Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-red-500/90 backdrop-blur-sm text-white text-sm font-medium shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            DEMO WEBSITE - Voorbeeld
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="block">Vloeiend</span>
            <span className="block mt-2">
              <span className="relative inline-block group">
                perfectionisme
                <motion.span
                  className="absolute -bottom-2 left-0 h-1 bg-clay rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1, duration: 0.8, ease: 'easeOut' }}
                />
              </span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Specialist in naadloze stucwerk afwerking voor woningen en bedrijven 
            in Amsterdam en Utrecht. Waar kwaliteit zichtbaar is.
          </motion.p>

          {/* Trust Badges */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {trustBadges.map((badge, index) => (
              <motion.div
                key={badge}
                className="flex items-center gap-2 text-white/90 text-sm md:text-base"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
              >
                <Check className="w-5 h-5 text-sand-300" />
                <span className="drop-shadow-sm">{badge}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-br from-sand-300 to-sand-400 text-stone-800 font-semibold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Gratis offerte
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/#werkwijze"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white font-medium rounded-full border border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              Bekijk werkwijze
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <motion.div className="w-1.5 h-1.5 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
