/**
 * Hero Section Component
 * Dakwerken Van der Berg
 * 
 * @description Full viewport height hero with dramatic imagery,
 * weather widget, trust badge, and roof-tile shaped CTAs
 * Implements the Roof Angle Design System
 */

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, Sun, CloudRain, Shield } from "lucide-react";
import { companyInfo, telLink } from "@/lib/utils";

export function Hero() {
  // Static weather data for demo (decorative)
  const weather = {
    temp: 18,
    condition: "Zonnig",
    icon: Sun,
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-storm-gray">
      {/* Background Image with Ken Burns Effect */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0"
        >
          <Image
            src="/images/dakdekker/hero/sunset-roof.jpg"
            alt="Dramatische lucht boven een dak - Dakwerken Van der Berg"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </motion.div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-storm-gray/60 via-storm-gray/40 to-storm-gray/80" />
        {/* Diagonal Overlay for Roof Angle Theme */}
        <div
          className="absolute inset-0 bg-safety-orange/10"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 40%, 0 60%)",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full border border-white/20"
              >
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium">
                  Dakdekkers sinds 1998
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 40, rotate: 2 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.1]"
              >
                Uw dak,
                <br />
                <span className="text-safety-orange">ons vak</span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-white/80 max-w-lg leading-relaxed"
              >
                Professionele dakdekkers in Utrecht, Amsterdam en omgeving. 
                Van reparatie tot complete renovatie - wij beschermen uw huis 
                met vakmanschap en 10 jaar garantie.
              </motion.p>

              {/* CTA Buttons - Roof Tile Shaped */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                {/* Primary CTA - Tilted Rectangle (Roof Tile) */}
                <Link
                  href="#offerte"
                  className="group relative inline-flex items-center gap-2 px-8 py-4 bg-safety-orange text-white font-heading font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                  style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }}
                >
                  <span className="relative z-10">Gratis Inspectie</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>

                {/* Secondary CTA - Mirror Tilt */}
                <Link
                  href="#projecten"
                  className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-heading font-semibold border-2 border-white/30 transition-all duration-300 hover:bg-white hover:text-storm-gray hover:-translate-y-1"
                  style={{ clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)" }}
                >
                  <span>Bekijk Projecten</span>
                </Link>
              </motion.div>

              {/* Service Areas */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap items-center gap-3 text-white/60 text-sm"
              >
                <span>Werkzaam in:</span>
                {["Utrecht", "Hilversum", "Amersfoort", "Breukelen"].map((city) => (
                  <span
                    key={city}
                    className="px-3 py-1 bg-white/10 rounded-full text-white/80"
                  >
                    {city}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right Side - Floating Elements */}
            <div className="hidden lg:block relative h-[500px]">
              {/* Weather Widget */}
              <motion.div
                initial={{ opacity: 0, x: 40, rotate: 5 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute top-0 right-0 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-sky-400 rounded-full flex items-center justify-center">
                    <weather.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-heading font-bold text-white">
                      {weather.temp}°C
                    </div>
                    <div className="text-white/70">{weather.condition}</div>
                    <div className="text-xs text-white/50 mt-1">Utrecht</div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-sm text-white/70">
                    Perfect weer voor dakwerkzaamheden
                  </p>
                </div>
              </motion.div>

              {/* Trust Badge - Rotated Square */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -30 }}
                animate={{ opacity: 1, scale: 1, rotate: -15 }}
                transition={{ duration: 0.8, delay: 0.7, type: "spring" }}
                className="absolute bottom-20 right-10"
              >
                <div className="w-32 h-32 bg-safety-orange flex flex-col items-center justify-center text-white shadow-2xl">
                  <Shield className="w-8 h-8 mb-2" />
                  <div className="text-2xl font-heading font-bold">10</div>
                  <div className="text-xs font-medium uppercase tracking-wider">
                    Jaar Garantie
                  </div>
                </div>
              </motion.div>

              {/* Emergency Quick Contact */}
              <motion.a
                href={telLink(companyInfo.mobile)}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="absolute bottom-0 left-10 bg-white rounded-2xl p-5 shadow-2xl group cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-emergency-red/10 rounded-full flex items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Phone className="w-6 h-6 text-emergency-red" />
                    </motion.div>
                  </div>
                  <div>
                    <div className="text-xs text-storm-gray/60 uppercase tracking-wider">
                      Spoed? Bel direct
                    </div>
                    <div className="text-xl font-heading font-bold text-storm-gray group-hover:text-safety-orange transition-colors">
                      {companyInfo.mobile}
                    </div>
                  </div>
                </div>
              </motion.a>

              {/* Decorative Elements - Roof Lines */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute top-1/2 left-0 w-32 h-1 bg-safety-orange/50 origin-left rotate-[-30deg]"
              />
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1.1 }}
                className="absolute top-1/2 left-8 w-24 h-1 bg-white/30 origin-left rotate-[-30deg]"
              />
            </div>
          </div>
        </div>

        {/* Bottom Diagonal - Roof Angle Theme */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 bg-cloud-white"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
        />
      </div>
    </section>
  );
}
