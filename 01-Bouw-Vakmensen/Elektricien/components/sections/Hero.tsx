"use client"

import { motion } from "framer-motion"
import { Zap, Clock, Award, Home, ArrowRight } from "lucide-react"
import Image from "next/image"

const stats = [
  { icon: Zap, label: "< 30 min reactie", suffix: "" },
  { icon: Award, label: "15+ jaar", suffix: " ervaring" },
  { icon: Home, label: "5000+", suffix: " klanten" },
]

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-circuit-dark">
      {/* Animated Circuit Background */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-30" />
      
      {/* Animated Electricity Lines SVG */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="electric-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0" />
            <stop offset="50%" stopColor="#2563eb" stopOpacity="1" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Horizontal lines */}
        {[...Array(8)].map((_, i) => (
          <motion.line
            key={`h-${i}`}
            x1="0"
            y1={`${15 + i * 12}%`}
            x2="100%"
            y2={`${15 + i * 12}%`}
            stroke="url(#electric-gradient)"
            strokeWidth="1"
            strokeDasharray="100 200"
            initial={{ strokeDashoffset: 300 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.3,
            }}
          />
        ))}
        
        {/* Diagonal lines */}
        {[...Array(5)].map((_, i) => (
          <motion.line
            key={`d-${i}`}
            x1={`${i * 25}%`}
            y1="100%"
            x2={`${10 + i * 20}%`}
            y2="0"
            stroke="url(#electric-gradient)"
            strokeWidth="1"
            strokeDasharray="50 150"
            initial={{ strokeDashoffset: 200 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
          />
        ))}
      </svg>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-circuit-dark via-circuit-dark/95 to-transparent" />

      <div className="relative container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* 24/7 Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-2 mb-6"
            >
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2.5 h-2.5 bg-red-500 rounded-full"
              />
              <Clock className="w-4 h-4 text-red-400" />
              <span className="text-sm font-medium text-red-400">24/7 Spoedhulp Beschikbaar</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-block"
              >
                <span className="text-white">Krachtig </span>
                <motion.span
                  className="text-electric-500 text-glow"
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(37,99,235,0.5)",
                      "0 0 40px rgba(37,99,235,0.8)",
                      "0 0 20px rgba(37,99,235,0.5)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  aangesloten
                </motion.span>
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-400 mb-8 max-w-lg"
            >
              Professionele elektricien in Eindhoven & Rotterdam. 
              Van spoedreparaties tot complete smart home installaties.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.a
                href="tel:020-1234567"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-electric inline-flex items-center justify-center gap-2 bg-electric-600 hover:bg-electric-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-electric"
              >
                <Zap className="w-5 h-5" fill="currentColor" />
                Bel Direct (DEMO)
              </motion.a>
              
              <motion.a
                href="#diensten"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 border-2 border-electric-600 text-electric-400 hover:bg-electric-600/10 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Onze Diensten
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="p-2 bg-electric-900/50 rounded-lg">
                    <stat.icon className="w-5 h-5 text-electric-400" />
                  </div>
                  <div>
                    <span className="text-white font-heading font-bold">{stat.label}</span>
                    <span className="text-gray-500 text-sm">{stat.suffix}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute -inset-4 bg-electric-600/20 blur-3xl rounded-full" />
              
              {/* Image container with parallelogram clip */}
              <div className="relative clip-parallelogram overflow-hidden">
                <div className="relative aspect-[4/3] bg-gradient-to-br from-electric-900 to-circuit-dark">
                  <Image
                    src="/images/elektricien/hero/electrician-work.svg"
                    alt="Professionele elektricien aan het werk"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-circuit-dark/60 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
                className="absolute -bottom-4 -left-4 bg-circuit-dark border border-electric-600/50 rounded-lg p-4 shadow-electric"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-600/20 rounded-lg">
                    <Award className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-bold">Gecertificeerd</p>
                    <p className="text-gray-400 text-sm">NEN 1010 Gecertificeerd</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
                className="absolute -top-4 -right-4 bg-circuit-dark border border-electric-600/50 rounded-lg p-4 shadow-electric"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-electric-600/20 rounded-lg">
                    <Zap className="w-6 h-6 text-electric-400" fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-white font-bold">100% Garantie</p>
                    <p className="text-gray-400 text-sm">Op alle werkzaamheden</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-circuit-dark to-transparent" />
    </section>
  )
}
