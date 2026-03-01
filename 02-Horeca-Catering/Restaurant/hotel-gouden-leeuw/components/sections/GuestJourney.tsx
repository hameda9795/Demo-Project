'use client';

/**
 * Guest Journey Timeline
 * 
 * Design:
 * - Horizontal scroll section with 5 steps
 * - Each step has icon and brief text
 * - Connected by golden path line
 * - Animated reveal on scroll
 */

import { motion } from 'framer-motion';
import { Calendar, GlassWater, Bed, MapPin, Gift } from 'lucide-react';

const journeySteps = [
  {
    number: '01',
    title: 'Reserveren',
    description: 'Boek eenvoudig online uw verblijf met onze real-time beschikbaarheid.',
    icon: Calendar,
    color: 'bg-navy',
  },
  {
    number: '02',
    title: 'Welkom',
    description: 'Ontvangst met een glas champagne en persoonlijke service.',
    icon: GlassWater,
    color: 'bg-gold',
  },
  {
    number: '03',
    title: 'Verblijven',
    description: 'Geniet van luxe, room service en toegang tot spa faciliteiten.',
    icon: Bed,
    color: 'bg-burgundy',
  },
  {
    number: '04',
    title: 'Ontdekken',
    description: 'Verken de Domtoren, grachten en bezienswaardigheden van Utrecht.',
    icon: MapPin,
    color: 'bg-navy',
  },
  {
    number: '05',
    title: 'Tot ziens',
    description: 'Vertrek met een herinneringscadeau en de wens tot snel weerzien.',
    icon: Gift,
    color: 'bg-gold',
  },
];

export default function GuestJourney() {
  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '50px 50px'
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
          <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">
            Uw Ervaring
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-semibold mb-6">
            De Gouden Leeuw Ervaring
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Van boeking tot vertrek: een onvergetelijke reis door gastvrijheid en luxe.
          </p>
        </motion.div>

        {/* Journey Timeline */}
        <div className="relative">
          {/* Golden Path Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-gold/30 via-gold to-gold/30 -translate-y-1/2 hidden lg:block" />

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Step Card */}
                <div className="relative z-10">
                  {/* Icon Circle */}
                  <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-gold/20 relative`}>
                    <step.icon className="w-8 h-8 text-white" />
                    
                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                      <span className="text-navy font-bold text-sm">{step.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="font-serif text-xl text-white font-semibold mb-2">
                      {step.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connector Arrow (except last) */}
                {index < journeySteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-full">
                    <div className="w-full h-0.5 bg-gold/30" />
                    <div className="absolute right-0 -top-1 w-2 h-2 border-t-2 border-r-2 border-gold rotate-45" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <button className="px-10 py-4 bg-gold text-navy font-semibold rounded-full hover:bg-gold-light transition-all btn-shimmer shadow-gold">
            Begin uw reis
          </button>
        </motion.div>
      </div>
    </section>
  );
}
