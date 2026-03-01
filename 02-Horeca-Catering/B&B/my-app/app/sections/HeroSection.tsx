'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ChevronDown, Heart, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Sunrise Animation */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bnb/garden/morning-terrace.jpg"
          alt="Morning terrace at Het Kleine Paradijs"
          fill
          className="object-cover"
          priority
        />
        {/* Sunrise gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-honey-gold/40 via-transparent to-creamy-egg/60"
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-creamy-egg via-transparent to-transparent" />
        
        {/* Linen texture overlay */}
        <div className="absolute inset-0 bg-linen-texture opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-32">
        {/* Small tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <Sparkles className="w-4 h-4 text-strawberry-jam" />
          <span className="text-sm sm:text-base font-medium text-coffee-brown/80 tracking-wide">
            Welkom bij Het Kleine Paradijs
          </span>
          <Sparkles className="w-4 h-4 text-strawberry-jam" />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-lora text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-coffee-brown mb-6 leading-tight"
        >
          Uw thuis
          <br />
          <span className="text-strawberry-jam">weg van huis</span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-nunito text-lg sm:text-xl md:text-2xl text-coffee-brown/80 max-w-2xl mx-auto mb-8"
        >
          Geniet van huisgemaakt ontbijt en gastvrijheid in het hart van Nederland
        </motion.p>

        {/* Hosts introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <div className="relative">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-4 border-white shadow-cozy">
              <Image
                src="/images/bnb/hosts/maria-jan-portrait.jpg"
                alt="Maria en Jan - uw gastheren"
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>
            <motion.div
              className="absolute -top-1 -right-1 bg-strawberry-jam text-white p-1.5 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="w-3 h-3 fill-current" />
            </motion.div>
          </div>
          <div className="text-center sm:text-left">
            <p className="font-medium text-coffee-brown">Maria & Jan</p>
            <p className="text-sm text-coffee-brown/60">Uw gastheer en gastvrouw sinds 2018</p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Link
            href="#kamers"
            className="inline-flex items-center gap-2 px-8 py-4 bg-strawberry-jam text-white font-medium rounded-full shadow-cozy hover:shadow-cozy-hover transition-all hover:scale-105 group"
          >
            Bekijk onze kamers
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-coffee-brown/50"
        >
          <span className="text-xs tracking-wider">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 rounded-full bg-honey-gold/20 blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-40 right-10 w-32 h-32 rounded-full bg-fresh-sage/20 blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
      />
    </section>
  )
}
