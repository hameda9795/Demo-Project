/**
 * Hero Section
 * Van den Berg Timmerwerken
 * 
 * "Craftsmanship Showcase"
 * 
 * Features:
 * - Full viewport height with parallax layers
 * - Wood grain SVG overlay flowing diagonally
 * - Animated headline with "blijft" in amber
 * - Trust badges
 * - Two CTA buttons with wood texture styling
 */

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Award, Leaf, Home, Shield, ArrowRight } from "lucide-react";
import { TRUST_BADGES } from "@/lib/data";

// Icon mapping for trust badges
const iconMap: Record<string, React.ReactNode> = {
  award: <Award className="w-5 h-5" />,
  leaf: <Leaf className="w-5 h-5" />,
  home: <Home className="w-5 h-5" />,
  shield: <Shield className="w-5 h-5" />,
};

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background Layer */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/timmerman/hero/workshop-depth.jpg"
            alt="Ambachtelijke timmerwerkplaats met warme verlichting"
            fill
            priority
            className="object-cover ken-burns"
            sizes="100vw"
          />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#3E2723]/70 via-[#3E2723]/50 to-[#3E2723]/80" />
        </div>
      </motion.div>

      {/* Wood Grain SVG Overlay - Flowing lines */}
      <svg
        className="absolute inset-0 w-full h-full z-10 pointer-events-none"
        preserveAspectRatio="none"
        viewBox="0 0 1920 1080"
      >
        <defs>
          <linearGradient id="grainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5A2B" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#8B5A2B" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        
        {/* Animated grain lines */}
        <motion.path
          d="M0,200 Q400,100 800,300 T1600,200 T1920,400"
          fill="none"
          stroke="url(#grainGradient)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        <motion.path
          d="M0,400 Q300,500 600,400 T1200,500 T1920,450"
          fill="none"
          stroke="url(#grainGradient)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
        />
        <motion.path
          d="M0,600 Q500,700 1000,600 T1600,700 T1920,650"
          fill="none"
          stroke="url(#grainGradient)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, delay: 1, ease: "easeInOut" }}
        />
        <motion.path
          d="M0,800 Q400,750 800,850 T1600,800 T1920,900"
          fill="none"
          stroke="url(#grainGradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, delay: 1.5, ease: "easeInOut" }}
        />
      </svg>

      {/* Content */}
      <motion.div 
        className="relative z-20 section-container pt-32 pb-20"
        style={{ opacity }}
      >
        <div className="section-inner text-center">
          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full"
          >
            <span className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse" />
            <span className="text-sm text-[#D4AF37] font-medium tracking-wider uppercase">
              Oude ambacht, nieuwe techniek
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#F5F5DC] mb-6 leading-tight"
          >
            Vakmanschap dat{" "}
            <span className="text-[#D4AF37]">blijft</span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-[#F5F5DC]/80 mb-12 max-w-2xl mx-auto"
          >
            Maatwerk in hout voor uw huis. Handgemaakte meubels, renovaties en restauraties in Utrecht & Amersfoort.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link href="#projecten" className="btn-secondary group">
              <span className="flex items-center gap-2">
                Bekijk projecten
              </span>
            </Link>
            <Link href="#contact" className="btn-primary group">
              <span className="flex items-center gap-2">
                Offerte aanvragen
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-8"
          >
            {TRUST_BADGES.map((badge, index) => (
              <div
                key={badge.text}
                className="flex items-center gap-2 text-[#F5F5DC]/70"
              >
                <span className="text-[#D4AF37]">{iconMap[badge.icon]}</span>
                <span className="text-sm font-medium">{badge.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F5F5DC] to-transparent z-20" />
    </section>
  );
}
