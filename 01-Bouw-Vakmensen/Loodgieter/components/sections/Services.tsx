'use client'

import { motion } from 'framer-motion'
import { Droplets, Flame, Bath, Pipette, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import Link from 'next/link'

/**
 * Service data with icons and images
 */
const services = [
  {
    id: 'lekkages',
    title: 'Lekkages',
    description: 'Snelle detectie en reparatie van lekkages. Bescherm uw huis tegen waterschade met onze expertise.',
    icon: Droplets,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600',
  },
  {
    id: 'verwarming',
    title: 'Verwarming',
    description: 'Installatie, onderhoud en reparatie van cv-ketels en verwarmingssystemen voor een warm thuis.',
    icon: Flame,
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600',
  },
  {
    id: 'sanitair',
    title: 'Sanitair',
    description: 'Complete badkamerrenovaties en sanitair installaties. Van toilet tot luxe wellness.',
    icon: Bath,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
  },
  {
    id: 'riool',
    title: 'Riool',
    description: 'Professionele rioolreiniging en -reparatie. Oplossingen voor verstoppingen en rioolproblemen.',
    icon: Pipette,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600',
  },
]

/**
 * Services Section
 * 4 service cards with organic shapes and hover effects
 */
export function Services() {
  return (
    <section id="diensten" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-water-blue font-semibold text-sm uppercase tracking-wider">
            Onze Expertise
          </span>
          <h2 className="font-outfit text-3xl md:text-4xl font-bold text-deep-navy mt-3 mb-4">
            Complete loodgietersdiensten
          </h2>
          <p className="text-steel-gray">
            Van spoedreparaties tot complete installaties. Wij leveren vakwerk 
            voor al uw loodgieterswerkzaamheden in Rotterdam.
          </p>
        </motion.div>

        {/* Service cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full group">
                {/* Image with clip-path */}
                <div className="relative h-48 overflow-hidden clip-diagonal">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Icon floating over image */}
                  <div className="absolute -bottom-6 left-6 w-14 h-14 bg-water-blue rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                <CardContent className="pt-10">
                  <h3 className="font-outfit text-xl font-bold text-deep-navy mb-3">
                    {service.title}
                  </h3>
                  <p className="text-steel-gray text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    href={`/#${service.id}`}
                    className="inline-flex items-center gap-2 text-water-blue font-semibold text-sm group/link"
                  >
                    Lees meer
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
