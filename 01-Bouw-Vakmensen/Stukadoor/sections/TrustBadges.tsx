'use client'

import { motion } from 'framer-motion'
import { Award, Shield, Clock, ThumbsUp, MapPin } from 'lucide-react'

const trustItems = [
  {
    icon: Award,
    title: '10 Jaar Garantie',
    description: 'Op al ons stucwerk',
  },
  {
    icon: Shield,
    title: 'Gecertificeerd',
    description: 'Erkend stukadoorsbedrijf',
  },
  {
    icon: Clock,
    title: 'Snelle Start',
    description: 'Binnen 3 dagen aan de slag',
  },
  {
    icon: ThumbsUp,
    title: '500+ Tevreden Klanten',
    description: 'In Amsterdam & Utrecht',
  },
  {
    icon: MapPin,
    title: 'Lokaal',
    description: 'Amsterdam & Utrecht regio',
  },
]

export function TrustBadges() {
  return (
    <section className="py-12 bg-sand-100 border-y border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
          {trustItems.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-soft mb-3">
                  <Icon className="w-6 h-6 text-clay" />
                </div>
                <h3 className="font-medium text-stone-800 text-sm">{item.title}</h3>
                <p className="text-xs text-stone-500">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
