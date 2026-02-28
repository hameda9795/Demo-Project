/**
 * Testimonials Component
 * Dakwerken Van der Berg
 * 
 * @description Customer reviews with ratings and photos
 */

"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import type { Testimonial } from "@/types";

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Peter van Dijk",
    location: "Utrecht",
    rating: 5,
    text: "Na stormschade heeft Van der Berg ons dak snel en vakkundig gerepareerd. Zeer tevreden over de communicatie en het resultaat. Zeker aan te bevelen!",
    date: "2024-01-20",
    projectType: "Stormschade herstel",
  },
  {
    id: "2",
    name: "Maria Jansen",
    location: "Hilversum",
    rating: 5,
    text: "Onze complete dakrenovatie is perfect uitgevoerd. Het team werkte netjes en de prijs-kwaliteit verhouding is uitstekend. Het dak ziet er prachtig uit!",
    date: "2023-11-15",
    projectType: "Dakrenovatie",
  },
  {
    id: "3",
    name: "Jan de Vries",
    location: "Amersfoort",
    rating: 5,
    text: "Snelle reactie op mijn aanvraag voor dakisolatie. Professioneel advies en vakkundige uitvoering. Mijn energierekening is al merkbaar lager!",
    date: "2023-12-05",
    projectType: "Dakisolatie",
  },
  {
    id: "4",
    name: "Lisa Bakker",
    location: "Breukelen",
    rating: 5,
    text: "Zonnepanelen laten plaatsen in combinatie met dakonderhoud. Alles in één keer goed geregeld. Fijn dat ze meedenken over duurzame oplossingen.",
    date: "2024-02-10",
    projectType: "Zonnepanelen",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-storm-gray/20"
          }`}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-24 bg-safety-orange relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 40px,
              rgba(255,255,255,0.1) 40px,
              rgba(255,255,255,0.1) 80px
            )`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-white/20 text-white font-semibold text-sm rounded-full mb-4">
            Klantverhalen
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Wat onze klanten <span className="text-storm-gray">zeggen</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Meer dan 2.500 tevreden klanten gingen u voor. 
            Bekijk hun ervaringen met Dakwerken Van der Berg.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30, rotate: index % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-xl relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-storm-gray rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Rating */}
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Text */}
              <p className="text-storm-gray/80 text-lg leading-relaxed mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-storm-gray/10">
                {/* Avatar Placeholder */}
                <div className="w-14 h-14 bg-storm-gray/10 rounded-full flex items-center justify-center">
                  <span className="font-heading font-bold text-xl text-storm-gray/50">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-heading font-bold text-storm-gray">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-storm-gray/60">
                    {testimonial.location} • {testimonial.projectType}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8 text-white/80"
        >
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold">4.9/5</span>
            <span className="text-white/60">gemiddelde beoordeling</span>
          </div>
          <div className="hidden md:block w-px h-6 bg-white/20" />
          <div className="flex items-center gap-2">
            <span className="font-semibold">127+</span>
            <span className="text-white/60">reviews</span>
          </div>
          <div className="hidden md:block w-px h-6 bg-white/20" />
          <div className="flex items-center gap-2">
            <span className="font-semibold">Google</span>
            <span className="text-white/60">&</span>
            <span className="font-semibold">Trustpilot</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
