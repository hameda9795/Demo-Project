'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Home, Building2, Layers, Hammer, SprayCan, 
  ChevronDown, CheckCircle2 
} from 'lucide-react'
import { services } from '@/lib/utils'
import { cn } from '@/lib/utils'

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Home,
  Building: Building2,
  Layers,
  Hammer,
  SprayCan,
}

export function Services() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-4"
          >
            Onze Diensten
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Alles voor uw <span className="text-teal-600">schilderwerk</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Van binnen tot buiten, wij regelen het allemaal met vakmanschap en oog voor detail.
          </motion.p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Home
            const isExpanded = expandedId === service.id

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Color header */}
                <div className={cn("h-2", service.color)} />
                
                <div className="p-6 lg:p-8">
                  {/* Icon */}
                  <div className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg",
                    service.color
                  )}>
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                  
                  <p className="text-teal-600 font-semibold text-sm mb-4">
                    {service.price}
                  </p>

                  {/* Expandable features */}
                  <div className={cn(
                    "overflow-hidden transition-all duration-300",
                    isExpanded ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  )}>
                    <ul className="space-y-2 pt-4 border-t border-gray-100">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-teal-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Toggle button */}
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : service.id)}
                    className="mt-4 flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-teal-600 transition-colors"
                  >
                    {isExpanded ? 'Minder info' : 'Meer info'}
                    <ChevronDown className={cn(
                      "w-4 h-4 transition-transform",
                      isExpanded && "rotate-180"
                    )} />
                  </button>
                </div>

                {/* Paint drip decoration */}
                <div className="absolute top-0 right-4 w-1 h-8 bg-gradient-to-b from-white/50 to-transparent opacity-50" />
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 mb-4">
            Niet zeker welke dienst u nodig heeft?
          </p>
          <a
            href="https://techsolutionsutrecht.nl/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-colors"
          >
            Vraag gratis advies aan
          </a>
        </motion.div>
      </div>
    </section>
  )
}
