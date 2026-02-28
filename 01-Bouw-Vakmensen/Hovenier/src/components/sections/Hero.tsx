"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Leaf, Flower, Sun, CloudRain, Snowflake } from "lucide-react";
import { seasons, getCurrentSeason } from "@/lib/utils";

const seasonButtons = [
  { id: 'lente', label: 'Lente', icon: Flower },
  { id: 'zomer', label: 'Zomer', icon: Sun },
  { id: 'herfst', label: 'Herfst', icon: Leaf },
  { id: 'winter', label: 'Winter', icon: Snowflake },
] as const;

export function Hero() {
  const [activeSeason, setActiveSeason] = useState<keyof typeof seasons>(getCurrentSeason());
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Parallax Background Layers */}
      <div className="absolute inset-0">
        {/* Back layer - moves slower */}
        <motion.div 
          className="absolute inset-0 transition-all duration-700"
          style={{ 
            y: scrollY * 0.3,
            filter: seasons[activeSeason].filter 
          }}>
          <Image
            src="/images/hovenier/hero/garden-sunset.jpg"
            alt="Prachtige tuin bij zonsondergang"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-900/40 via-forest-900/20 to-forest-900/60" />
        </motion.div>

        {/* Front layer - subtle movement */}
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          style={{ y: scrollY * 0.1 }}>
          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-green-400/30 rounded-full"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, 10, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-4 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 
              bg-white/10 backdrop-blur-md rounded-full 
              border border-white/20 text-white mb-8">
            <Leaf className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium">Hovenier in Amsterdam & Haarlem</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
            Uw tuin,{" "}
            <motion.span 
              className="text-gradient-green inline-block"
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}>
              onze passie
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
            Van verwilderde plek tot groene oase. Wij ontwerpen, aanleggen en 
            onderhouden tuinen die leven.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact/"
              className="group inline-flex items-center justify-center gap-2 
                px-8 py-4 bg-green-600 text-white 
                rounded-full font-medium text-lg
                hover:bg-green-500 transition-all duration-300
                hover:shadow-glow hover:-translate-y-1">
              <Leaf className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Gratis Adviesgesprek
            </Link>
            <Link
              href="/diensten/"
              className="inline-flex items-center justify-center gap-2 
                px-8 py-4 bg-white/10 backdrop-blur-md text-white 
                rounded-full font-medium text-lg border border-white/30
                hover:bg-white/20 transition-all duration-300">
              Bekijk Diensten
            </Link>
          </motion.div>
        </div>

        {/* Season Selector */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16">
          <p className="text-white/70 text-sm mb-4 text-center">Ontdek seizoenswerk:</p>
          <div className="flex gap-3">
            {seasonButtons.map((season) => {
              const Icon = season.icon;
              const isActive = activeSeason === season.id;
              return (
                <button
                  key={season.id}
                  onClick={() => setActiveSeason(season.id as keyof typeof seasons)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full 
                    transition-all duration-300
                    ${isActive 
                      ? 'bg-green-600 text-white shadow-glow' 
                      : 'bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border border-white/20'}`}>
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline font-medium">{season.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative organic shapes */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 
        bg-green-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-96 h-96 
        bg-green-400/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
