"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Van den Berg heeft onze boekhouding volledig gestroomlijnd. Eindelijk tijd om me te focussen op waar ik goed in ben: ondernemen.",
    author: "Marijke Jansen",
    role: "Eigenaar",
    company: "Jansen Interieur",
  },
  {
    quote: "Het fiscale advies heeft ons jaarlijks duizenden euro's opgeleverd. De investering in een goed accountant verdient zichzelf terug.",
    author: "Pieter van Dijk",
    role: "Directeur",
    company: "Dijk Logistics B.V.",
  },
  {
    quote: "Persoonlijke aandacht en altijd bereikbaar. Ze voelen als een verlengstuk van ons team, niet als een externe partij.",
    author: "Sophie Bakker",
    role: "Oprichter",
    company: "GreenTech Solutions",
  },
];

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section 
      id="testimonials"
      ref={containerRef}
      className="relative bg-warm-charcoal overflow-hidden"
    >
      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(30 20% 97%) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Decorative Shape */}
      <motion.div
        className="absolute top-0 right-0 w-1/3 h-full bg-warm-terracotta/10"
        initial={{ x: 200 }}
        animate={isInView ? { x: 0 } : {}}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)"
        }}
      />

      <div className="relative z-10 w-full px-6 lg:px-12 py-24 lg:py-32">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-24">
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-caption text-warm-terracotta mb-4 block">
              Klanten aan het woord
            </span>
            <h2 className="text-headline text-warm-cream">
              Wat ondernemers over ons zeggen
            </h2>
          </motion.div>
          
          <motion.div
            className="lg:col-span-4 lg:col-start-9 flex items-end"
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-body-large text-warm-beige/80">
              Trots op de samenwerking met ondernemers die elke dag het verschil maken.
            </p>
          </motion.div>
        </div>

        {/* Testimonials Grid - Asymmetrical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              className={`${
                index === 0 ? "lg:col-span-5" : 
                index === 1 ? "lg:col-span-4 lg:col-start-6" : 
                "lg:col-span-3 lg:col-start-10"
              }`}
              initial={{ opacity: 0, y: 80 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: 0.3 + index * 0.15, 
                ease: [0.16, 1, 0.3, 1] 
              }}
            >
              <div className="h-full bg-warm-cream/5 backdrop-blur-sm p-8 lg:p-10 border border-warm-cream/10 hover:border-warm-terracotta/30 transition-colors group">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-10 h-10 text-warm-terracotta/40 group-hover:text-warm-terracotta transition-colors" />
                </div>

                {/* Quote Text */}
                <blockquote className="text-body-large text-warm-cream/90 mb-8 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author Info */}
                <div className="pt-6 border-t border-warm-cream/10">
                  <span className="font-display text-lg text-warm-cream block">
                    {testimonial.author}
                  </span>
                  <span className="text-caption text-warm-beige/60">
                    {testimonial.role}, {testimonial.company}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee Logo Bar */}
        <motion.div
          className="mt-24 lg:mt-32 overflow-hidden border-t border-warm-cream/10 pt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex animate-marquee">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex items-center gap-16 px-8 shrink-0">
                {["Jansen Interieur", "Dijk Logistics", "GreenTech Solutions", "Bakker Bouw", "De Wit Media", "Noord-Holland Zorg"].map((company, index) => (
                  <span
                    key={`${setIndex}-${index}`}
                    className="text-caption text-warm-beige/40 whitespace-nowrap hover:text-warm-terracotta transition-colors"
                  >
                    {company}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
