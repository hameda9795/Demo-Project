"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Calculator, FileText, TrendingUp } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-warm-cream overflow-hidden"
    >
      {/* Abstract Background Shapes */}
      <motion.div
        className="absolute top-20 right-0 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-warm-beige shape-blob opacity-50"
        style={{ y: y1 }}
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.div
        className="absolute bottom-0 left-[-10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-warm-terracotta/10 shape-ellipse"
        style={{ y: y2 }}
        initial={{ scale: 0, rotate: 20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(to right, hsl(var(--warm-charcoal)) 1px, transparent 1px),
                          linear-gradient(to bottom, hsl(var(--warm-charcoal)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* Main Content */}
      <motion.div 
        className="relative z-10 w-full min-h-screen flex flex-col justify-center px-6 lg:px-12 pt-24 lg:pt-32 pb-20"
        style={{ opacity }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          {/* Left Column - Main Headline */}
          <div className="lg:col-span-7 lg:col-start-1">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-caption text-warm-terracotta mb-6 block">
                Accountantskantoor sinds 1987
              </span>
            </motion.div>

            <motion.h1
              className="text-display text-warm-charcoal mb-8"
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              Financiële
              <br />
              <span className="text-warm-terracotta">rust</span> begint
              <br />
              hier.
            </motion.h1>

            <motion.p
              className="text-body-large text-warm-taupe max-w-xl mb-10"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Wij ontzorgen ondernemers met persoonlijk advies, heldere cijfers 
              en proactieve fiscale begeleiding. Jouw succes is onze expertise.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="#contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-warm-charcoal text-warm-cream font-display text-sm tracking-wide hover:bg-warm-terracotta transition-colors"
                data-cursor-hover
              >
                <span>Maak een afspraak</span>
                <ArrowDown className="w-4 h-4 rotate-[-135deg] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
              <Link
                href="#diensten"
                className="inline-flex items-center gap-3 px-8 py-4 border border-warm-charcoal text-warm-charcoal font-display text-sm tracking-wide hover:bg-warm-charcoal hover:text-warm-cream transition-colors"
                data-cursor-hover
              >
                <span>Onze diensten</span>
              </Link>
            </motion.div>
          </div>

          {/* Right Column - Abstract Visual */}
          <div className="lg:col-span-4 lg:col-start-9 mt-12 lg:mt-0">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Abstract Stats Display */}
              <div className="relative bg-warm-beige p-8 lg:p-10">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-warm-terracotta" />
                
                <div className="space-y-8">
                  <div>
                    <span className="text-caption text-warm-taupe block mb-2">Ondernemers geholpen</span>
                    <span className="font-display text-5xl lg:text-6xl text-warm-charcoal">850+</span>
                  </div>
                  
                  <div className="h-px bg-warm-taupe/30" />
                  
                  <div>
                    <span className="text-caption text-warm-taupe block mb-2">Jaar ervaring</span>
                    <span className="font-display text-5xl lg:text-6xl text-warm-charcoal">37</span>
                  </div>
                  
                  <div className="h-px bg-warm-taupe/30" />
                  
                  <div>
                    <span className="text-caption text-warm-taupe block mb-2">Tevreden klanten</span>
                    <span className="font-display text-5xl lg:text-6xl text-warm-charcoal">99%</span>
                  </div>
                </div>

                {/* Decorative Icons */}
                <motion.div
                  className="absolute -bottom-6 -right-6 w-16 h-16 bg-warm-terracotta flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Calculator className="w-8 h-8 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Service Icons Row */}
        <motion.div
          className="mt-20 lg:mt-32 grid grid-cols-3 gap-8 max-w-3xl"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {[
            { icon: FileText, label: "Administratie" },
            { icon: Calculator, label: "Fiscaal Advies" },
            { icon: TrendingUp, label: "Jaarcijfers" },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              className="flex flex-col items-center gap-4 text-center"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="w-16 h-16 border border-warm-taupe/30 flex items-center justify-center hover:bg-warm-terracotta hover:border-warm-terracotta group transition-colors">
                <item.icon className="w-7 h-7 text-warm-taupe group-hover:text-white transition-colors" />
              </div>
              <span className="text-caption text-warm-taupe">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-caption text-warm-taupe">Scroll</span>
        <motion.div
          className="w-px h-12 bg-warm-taupe/30 relative overflow-hidden"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1.7, duration: 0.5 }}
        >
          <motion.div
            className="absolute top-0 left-0 right-0 h-1/2 bg-warm-terracotta"
            animate={{ y: ["0%", "200%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
