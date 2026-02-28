'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone } from 'lucide-react'
import { Button } from '@/components/atoms/Button'

/**
 * Hero Section
 * Full viewport height with animated gradient background
 * Diagonal text and blob-shaped image container
 * Uses clip-path for organic shapes
 */
export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-navy"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-charcoal"
          animate={{
            background: [
              'linear-gradient(to bottom right, #0f172a, #1e293b, #1a1a1a)',
              'linear-gradient(to bottom right, #1e293b, #0f172a, #1a1a1a)',
              'linear-gradient(to bottom right, #0f172a, #1e293b, #1a1a1a)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }} />
        </div>
      </div>

      {/* Floating Accent Shapes */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 bg-safety/20 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-40 left-10 w-48 h-48 bg-safety/10 rounded-full blur-3xl"
        animate={{
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Content Container */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-32"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Text Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-safety/20 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-safety rounded-full animate-pulse" />
              <span className="text-safety text-sm font-medium">Beschikbaar voor nieuwe projecten</span>
            </motion.div>

            {/* Main Heading - Diagonal Text Effect */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-[0.9] mb-6"
            >
              <span className="block">BOUWEN</span>
              <span className="block text-safety transform -rotate-2 inline-block">MET</span>
              <span className="block transform rotate-1">PASSIE</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-white/70 text-lg md:text-xl max-w-lg mb-8 leading-relaxed"
            >
              Uw visie, ons vakmanschap. Al 25 jaar de betrouwbare partner voor 
              renovatie en nieuwbouw in Utrecht en omgeving.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <Link href="/offerte/">
                <Button size="lg" className="group">
                  Vraag Offerte Aan
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="tel:+31301234567">
                <Button variant="outline" size="lg">
                  <Phone size={18} className="mr-2" />
                  Bel Direct
                </Button>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex items-center gap-8 mt-12 pt-8 border-t border-white/10"
            >
              {[
                { value: '25+', label: 'Jaar ervaring' },
                { value: '500+', label: 'Projecten' },
                { value: '98%', label: 'Tevreden klanten' },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="font-heading font-bold text-3xl text-safety">{stat.value}</div>
                  <div className="text-white/50 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Image with Blob Shape */}
          <motion.div
            style={{ scale }}
            className="order-1 lg:order-2 relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Blob Shape Container */}
              <div 
                className="relative w-full aspect-square overflow-hidden"
                style={{
                  borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                }}
              >
                {/* Hero Image */}
                <Image
                  src="/images/hero.jpg"
                  alt="Bouwbedrijf Van den Berg - Professionele aannemer"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Decorative Ring */}
                <motion.div
                  className="absolute inset-0 border-2 border-safety/30 rounded-full"
                  style={{
                    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                />
              </div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute -bottom-4 -left-4 lg:-left-12 bg-white p-4 rounded-lg shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-safety/10 rounded-full flex items-center justify-center">
                    <span className="text-safety text-2xl">★</span>
                  </div>
                  <div>
                    <div className="font-heading font-bold text-navy">4.9/5</div>
                    <div className="text-concrete text-sm">Klantbeoordeling</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1"
        >
          <motion.div className="w-1.5 h-3 bg-safety rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
