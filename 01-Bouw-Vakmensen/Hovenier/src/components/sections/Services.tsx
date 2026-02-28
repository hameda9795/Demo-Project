"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Pencil, Hammer, Scissors, TreePine, Waves,
  ArrowRight, Check
} from "lucide-react";

const services = [
  {
    id: 'ontwerp',
    title: 'Tuinontwerp',
    description: 'Een uniek tuinontwerp dat perfect aansluit bij uw wensen, het huis en de omgeving.',
    icon: Pencil,
    features: ['3D visualisatie', 'Plantenplan', 'Verlichtingsplan', 'Bewegwijzering'],
    color: 'from-green-500 to-green-700',
  },
  {
    id: 'aanleg',
    title: 'Tuinaanleg',
    description: 'Vakkundige aanleg van uw tuin met kwalitatieve materialen en planten.',
    icon: Hammer,
    features: ['Grondwerk', 'Bestrating', 'Beplanting', 'Gazon aanleg'],
    color: 'from-forest-600 to-forest-800',
  },
  {
    id: 'onderhoud',
    title: 'Tuinonderhoud',
    description: 'Regelmatig onderhoud om uw tuin het hele jaar door prachtig te houden.',
    icon: Scissors,
    features: ['Snoeien', 'Onkruidbestrijding', 'Gazononderhoud', 'Seizoensbeplanting'],
    color: 'from-emerald-500 to-emerald-700',
  },
  {
    id: 'bomen',
    title: 'Boomverzorging',
    description: 'Specialistische zorg voor bomen: snoei, velling en gezondheidscontroles.',
    icon: TreePine,
    features: ['Kroonsnoei', 'Vellig', 'Stormschade', 'Boomadvies'],
    color: 'from-teal-600 to-teal-800',
  },
  {
    id: 'vijver',
    title: 'Vijveraanleg',
    description: 'Ontwerp en aanleg van natuurlijke of strakke vijvers en waterpartijen.',
    icon: Waves,
    features: ['Natuurvijver', 'Koivijver', 'Waterpompen', 'Onderhoud'],
    color: 'from-cyan-600 to-blue-700',
  },
];

export function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-forest-900 to-forest-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 
            bg-white/10 text-green-300 rounded-full text-sm font-medium mb-4">
            Wat wij doen
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
            Onze Diensten
          </h2>
          <p className="text-white/70 text-lg">
            Van eerste schets tot onderhoud: wij begeleiden uw tuinproject 
            van begin tot eind.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative">
                <div className="h-full bg-white rounded-3xl p-8 
                  transition-all duration-300 
                  hover:-translate-y-4 hover:shadow-2xl">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color}
                    flex items-center justify-center mb-6 
                    transform group-hover:scale-110 group-hover:rotate-3 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="font-serif text-2xl text-forest-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-forest-600 mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-forest-600">
                        <Check className="w-4 h-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  <Link
                    href="/diensten/"
                    className="inline-flex items-center gap-2 text-green-600 font-medium 
                      group-hover:gap-3 transition-all">
                    Meer info
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Organic shape background */}
                <div className={`absolute -z-10 inset-0 bg-gradient-to-br ${service.color} 
                  rounded-3xl opacity-0 group-hover:opacity-20 
                  transform group-hover:scale-105 group-hover:rotate-2 transition-all duration-300`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
