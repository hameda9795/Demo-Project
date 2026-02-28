'use client'

import { motion } from 'framer-motion'
import { MainLayout } from '@/components/layouts/MainLayout'
import { Footer } from '@/components/layouts/Footer'
import { TeamSection } from '@/components/organisms/TeamSection'
import { Button } from '@/components/atoms/Button'
import { ArrowRight, Award, Users, Clock, Shield } from 'lucide-react'
import Link from 'next/link'

const values = [
  {
    icon: Award,
    title: 'Kwaliteit',
    description: 'Vakmanschap en aandacht voor detail in elk project.',
  },
  {
    icon: Users,
    title: 'Betrokkenheid',
    description: 'Persoonlijk contact en duidelijke communicatie.',
  },
  {
    icon: Clock,
    title: 'Betrouwbaarheid',
    description: 'Afspraak is afspraak. We leveren op tijd en binnen budget.',
  },
  {
    icon: Shield,
    title: 'Garantie',
    description: '5 jaar garantie op al ons werk voor uw zekerheid.',
  },
]

export default function OverOnsPage() {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="bg-navy py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="text-safety font-semibold text-sm uppercase tracking-wider">Over Ons</span>
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mt-2 mb-6">
                Bouwbedrijf Van den Berg
              </h1>
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                Al meer dan 25 jaar zijn wij het vertrouwde adres voor renovatie en 
                nieuwbouw in Utrecht en omgeving. Van karakteristieke grachtenpanden 
                in de binnenstad tot moderne woningen in de nieuwbouwwijken.
              </p>
              <p className="text-white/60 leading-relaxed">
                Ons team van ervaren vakmensen staat voor u klaar. Met passie voor 
                het vak en oog voor detail realiseren we uw bouwdromen.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div 
                className="aspect-[4/3] bg-gradient-to-br from-safety/20 to-safety/5 rounded-2xl"
                style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '25+', label: 'Jaar ervaring' },
              { value: '500+', label: 'Projecten' },
              { value: '15', label: 'Vakmensen' },
              { value: '98%', label: 'Tevreden klanten' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-heading font-bold text-4xl text-safety mb-2">{stat.value}</div>
                <div className="text-concrete">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-4">
              Onze Kernwaarden
            </h2>
            <p className="text-concrete max-w-2xl mx-auto">
              Deze principes vormen de basis van alles wat we doen.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-safety/10 rounded-2xl flex items-center justify-center">
                    <Icon className="text-safety" size={28} />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-navy mb-2">{value.title}</h3>
                  <p className="text-concrete text-sm">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
              Klaar om uw project te bespreken?
            </h2>
            <p className="text-white/60 mb-8">
              We denken graag met u mee over de mogelijkheden voor uw woning.
            </p>
            <Link href="/contact/">
              <Button size="lg" className="group">
                Neem Contact Op
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </MainLayout>
  )
}
