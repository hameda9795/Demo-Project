'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  Home, Building2, Layers, Hammer, SprayCan, 
  CheckCircle2, ArrowRight, Phone
} from 'lucide-react'
import { services, demoContact } from '@/lib/utils'
import { DemoWarningBox } from '@/components/DemoBanner'

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Home,
  Building: Building2,
  Layers,
  Hammer,
  SprayCan,
}

export default function DienstenPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-teal-50 via-white to-coral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Onze <span className="text-teal-600">diensten</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600"
            >
              Van binnen tot buiten, wij regelen al uw schilderwerk met vakmanschap en kwaliteit.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DemoWarningBox />
          
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Home
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Image */}
                  <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                      <div className={`absolute top-0 left-0 right-0 h-2 ${service.color}`} />
                      <Image
                        src={`/images/schilder/projects/project-${(index % 4) + 1}.jpg`}
                        alt={service.title}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    
                    <p className="text-lg text-gray-600 mb-6">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-gray-700">
                          <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                      <p className="text-sm text-gray-500 mb-1">Vanafprijs (DEMO)</p>
                      <p className="text-2xl font-bold text-teal-600">{service.price}</p>
                    </div>

                    <a
                      href="https://techsolutionsutrecht.nl/contact"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-teal-500/30 transition-all"
                    >
                      Offerte aanvragen
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Niet zeker wat u nodig heeft?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Neem contact met ons op voor een vrijblijvend adviesgesprek op locatie.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${demoContact.phoneRaw}`}
              className="flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {demoContact.phone}
            </a>
            <a
              href="https://techsolutionsutrecht.nl/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-teal-500 text-white font-semibold rounded-full hover:bg-teal-600 transition-colors"
            >
              Contactformulier
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
