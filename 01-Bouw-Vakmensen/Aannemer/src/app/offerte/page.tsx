'use client'

import { motion } from 'framer-motion'
import { MainLayout } from '@/components/layouts/MainLayout'
import { Footer } from '@/components/layouts/Footer'
import { QuoteCalculator } from '@/components/organisms/QuoteCalculator'

export default function OffertePage() {
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
            <span className="text-safety font-semibold text-sm uppercase tracking-wider">Offerte</span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mt-2 mb-4">
              Vraag een Offerte Aan
            </h1>
            <p className="text-white/60">
              Vul het formulier in en ontvang binnen 24 uur een vrijblijvende offerte op maat.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quote Calculator */}
      <QuoteCalculator />

      {/* Info Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 text-center"
          >
            <div>
              <div className="w-16 h-16 mx-auto mb-4 bg-safety/10 rounded-full flex items-center justify-center">
                <span className="text-safety text-2xl font-bold">1</span>
              </div>
              <h3 className="font-heading font-bold text-navy mb-2">Aanvraag</h3>
              <p className="text-concrete text-sm">
                Vul het formulier in met uw wensen en projectdetails.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 mx-auto mb-4 bg-safety/10 rounded-full flex items-center justify-center">
                <span className="text-safety text-2xl font-bold">2</span>
              </div>
              <h3 className="font-heading font-bold text-navy mb-2">Inspectie</h3>
              <p className="text-concrete text-sm">
                We maken een afspraak voor een vrijblijvende inspectie ter plaatse.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 mx-auto mb-4 bg-safety/10 rounded-full flex items-center justify-center">
                <span className="text-safety text-2xl font-bold">3</span>
              </div>
              <h3 className="font-heading font-bold text-navy mb-2">Offerte</h3>
              <p className="text-concrete text-sm">
                Ontvang binnen 24 uur na inspectie een gedetailleerde offerte.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </MainLayout>
  )
}
