'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const finishes = [
  {
    id: 'mat',
    title: 'Mat',
    subtitle: 'Muurverf',
    description: 'Ideaal voor woonkamers en slaapkamers. Geeft een warme, diepe uitstraling zonder glans.',
    usage: ['Woonkamers', 'Slaapkamers', 'Plafonds'],
    pros: ['Verbergt oneffenheden', 'Warme uitstraling', 'Niet reflecterend'],
    cons: ['Moeilijker schoon te maken', 'Kan vlekkerig worden'],
    image: '/images/schilder/finishes/mat-finish.jpg',
    color: 'bg-teal-500',
  },
  {
    id: 'satin',
    title: 'Satijn',
    subtitle: 'Lakverf',
    description: 'Perfect voor keukens en badkamers. Subtiele glans en goed afwasbaar.',
    usage: ['Keukens', 'Badkamers', 'Gangen'],
    pros: ['Goed afwasbaar', 'Duurzaam', 'Subtiele glans'],
    cons: ['Oneffenheden zichtbaarder', 'Iets meer reflectie'],
    image: '/images/schilder/finishes/satin-finish.jpg',
    color: 'bg-coral-500',
  },
  {
    id: 'gloss',
    title: 'Hoogglans',
    subtitle: 'Lak',
    description: 'Voor deuren, kozijnen en details. Maximale glans en zeer slijtvast.',
    usage: ['Deuren', 'Kozijnen', 'Meubels', 'Lijstwerk'],
    pros: ['Maximale duurzaamheid', 'Goed afwasbaar', 'Luxe uitstraling'],
    cons: ['Alles zichtbaar', 'Vereist perfecte voorbereiding'],
    image: '/images/schilder/finishes/gloss-finish.jpg',
    color: 'bg-deepblue-600',
  },
]

export function FinishTypes() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-softyellow-100 text-yellow-700 rounded-full text-sm font-semibold mb-4"
          >
            Afwerking
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Welke <span className="text-yellow-500">glansgraad</span> kies ik?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Elke ruimte vraagt om een andere afwerking. Hier ziet u het verschil.
          </motion.p>
        </div>

        {/* Finish cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {finishes.map((finish, index) => (
            <motion.div
              key={finish.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
              onMouseEnter={() => setHoveredId(finish.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className={cn(
                "bg-white rounded-3xl overflow-hidden border-2 transition-all duration-300 h-full",
                hoveredId === finish.id 
                  ? 'border-transparent shadow-2xl scale-[1.02]' 
                  : 'border-gray-100 shadow-lg'
              )}>
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={finish.image}
                    alt={finish.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={cn(
                    "absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm font-bold",
                    finish.color
                  )}>
                    {finish.title}
                  </div>
                  
                  {/* Gloss indicator overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white/80 text-sm">{finish.subtitle}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4">
                    {finish.description}
                  </p>

                  {/* Usage tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {finish.usage.map((use) => (
                      <span
                        key={use}
                        className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
                      >
                        {use}
                      </span>
                    ))}
                  </div>

                  {/* Pros & Cons */}
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Voordelen:</p>
                      <ul className="space-y-1">
                        {finish.pros.map((pro) => (
                          <li key={pro} className="text-gray-600 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Nadelen:</p>
                      <ul className="space-y-1">
                        {finish.cons.map((con) => (
                          <li key={con} className="text-gray-600 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Helper note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gray-50 rounded-2xl p-6 text-center"
        >
          <p className="text-gray-600">
            <span className="font-semibold">Tip:</span> Voor een modern interieur combineert u matte muren met satijnen of hoogglans details.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
