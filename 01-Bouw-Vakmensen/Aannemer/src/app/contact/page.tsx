'use client'

import { motion } from 'framer-motion'
import { MainLayout } from '@/components/layouts/MainLayout'
import { Footer } from '@/components/layouts/Footer'
import { Button } from '@/components/atoms/Button'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

export default function ContactPage() {
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
            <span className="text-safety font-semibold text-sm uppercase tracking-wider">Contact</span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mt-2 mb-4">
              Neem Contact Met Ons Op
            </h1>
            <p className="text-white/60">
              Heeft u vragen of wilt u een vrijblijvend gesprek? We staan voor u klaar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading font-bold text-2xl text-navy mb-6">
                Stuur ons een bericht
              </h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-navy text-sm font-medium mb-2">Naam *</label>
                    <input
                      type="text"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-safety focus:border-transparent"
                      placeholder="Uw naam"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-navy text-sm font-medium mb-2">E-mail *</label>
                    <input
                      type="email"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-safety focus:border-transparent"
                      placeholder="uw@email.nl"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-navy text-sm font-medium mb-2">Telefoon</label>
                  <input
                    type="tel"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-safety focus:border-transparent"
                    placeholder="06-12345678"
                  />
                </div>
                <div>
                  <label className="block text-navy text-sm font-medium mb-2">Onderwerp *</label>
                  <select className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-safety focus:border-transparent">
                    <option>Algemene vraag</option>
                    <option>Offerte aanvragen</option>
                    <option>Project bespreken</option>
                    <option>Klacht</option>
                    <option>Anders</option>
                  </select>
                </div>
                <div>
                  <label className="block text-navy text-sm font-medium mb-2">Bericht *</label>
                  <textarea
                    rows={5}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-safety focus:border-transparent resize-none"
                    placeholder="Uw bericht..."
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full sm:w-auto group">
                  <Send size={18} className="mr-2" />
                  Versturen
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading font-bold text-2xl text-navy mb-6">
                Contactgegevens
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-safety/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-safety" size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-navy mb-1">Telefoon</h3>
                    <a href="tel:+31301234567" className="text-concrete hover:text-safety transition-colors">
                      030 - 123 4567
                    </a>
                    <p className="text-sm text-concrete mt-1">Maandag t/m vrijdag 8:00 - 17:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-safety/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-safety" size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-navy mb-1">E-mail</h3>
                    <a href="mailto:info@vandenberg.nl" className="text-concrete hover:text-safety transition-colors">
                      info@vandenberg.nl
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-safety/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-safety" size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-navy mb-1">Adres</h3>
                    <p className="text-concrete">
                      Bouwstraat 123<br />
                      3583 AB Utrecht<br />
                      Nederland
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-safety/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="text-safety" size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-navy mb-1">Openingstijden</h3>
                    <div className="text-concrete space-y-1">
                      <p>Maandag - Vrijdag: 8:00 - 17:00</p>
                      <p>Zaterdag: Op afspraak</p>
                      <p>Zondag: Gesloten</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 h-64 bg-gradient-to-br from-concrete/20 to-concrete/40 rounded-xl flex items-center justify-center">
                <span className="text-concrete">Kaart komt hier</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </MainLayout>
  )
}
