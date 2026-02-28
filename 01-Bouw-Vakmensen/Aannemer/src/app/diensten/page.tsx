'use client'

import { motion } from 'framer-motion'
import { MainLayout } from '@/components/layouts/MainLayout'
import { Footer } from '@/components/layouts/Footer'
import { services } from '@/data/services'
import { ServiceImage } from '@/components/atoms/ServiceImage'
import { Button } from '@/components/atoms/Button'
import { Hammer, Building, Home, Ruler, ArrowRight, Check, LucideIcon } from 'lucide-react'
import Link from 'next/link'

const iconMap: Record<string, LucideIcon> = {
  hammer: Hammer,
  building: Building,
  home: Home,
  ruler: Ruler,
}

export default function DienstenPage() {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="bg-navy py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="text-safety font-semibold text-sm uppercase tracking-wider">Diensten</span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mt-2 mb-4">
              Wat We Voor U Kunnen Doen
            </h1>
            <p className="text-white/60">
              Van kleine renovatie tot complete nieuwbouw. Wij leveren vakwerk op maat.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon]
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    <div className="w-16 h-16 bg-safety/10 rounded-2xl flex items-center justify-center mb-6">
                      {Icon && <Icon className="text-safety" size={32} />}
                    </div>
                    
                    <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-4">
                      {service.title}
                    </h2>
                    
                    <p className="text-concrete text-lg leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <span className="w-6 h-6 bg-safety/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <Check className="text-safety" size={14} />
                          </span>
                          <span className="text-navy">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link href="/offerte/">
                      <Button className="group">
                        Vraag Offerte Aan
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>

                  {/* Image */}
                  <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                    <div 
                      className="relative aspect-[4/3] rounded-2xl overflow-hidden"
                      style={{
                        clipPath: isEven 
                          ? 'polygon(0 0, 100% 0, 100% 85%, 15% 100%, 0 100%)'
                          : 'polygon(0 0, 100% 0, 100% 100%, 85% 100%, 0 85%)'
                      }}
                    >
                      <ServiceImage serviceId={service.id} className="absolute inset-0" />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
              Heeft u een specifieke vraag?
            </h2>
            <p className="text-white/60 mb-8">
              Neem contact met ons op voor een vrijblijvend gesprek over uw project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/offerte/">
                <Button size="lg">Vraag Offerte Aan</Button>
              </Link>
              <Link href="/contact/">
                <Button variant="outline" size="lg">Contact Opnemen</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </MainLayout>
  )
}
