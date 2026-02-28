'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, AlertTriangle, Send, Building2, User } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    label: 'Telefoon (DEMO)',
    value: '020-123 4567',
    subtext: 'Ma-Vr 08:00-17:00',
  },
  {
    icon: Mail,
    label: 'Email (DEMO)',
    value: 'info@demo-stukadoor.nl',
    subtext: 'Reactie binnen 24 uur',
  },
  {
    icon: MapPin,
    label: 'Adres (DEMO)',
    value: 'DEMO Straat 78',
    subtext: '1012 AB Amsterdam',
  },
  {
    icon: Clock,
    label: 'Openingstijden (DEMO)',
    value: 'Maandag - Vrijdag',
    subtext: '08:00 - 17:00',
  },
]

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20 bg-sand-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-stone-800 mb-4">
            Neem contact op
          </h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Heeft u vragen of wilt u een vrijblijvende offerte? 
            Vul het formulier in of neem direct contact met ons op.
          </p>
        </motion.div>

        {/* Demo Warning Box */}
        <motion.div
          className="bg-red-50 border-2 border-red-300 rounded-2xl p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h2 className="text-xl font-heading font-bold text-red-800 mb-2">
                DEMO WEBSITE - Geen echte contactgegevens
              </h2>
              <p className="text-red-700 mb-4">
                Dit is een voorbeeld website. Alle contactgegevens op deze pagina zijn fictief.
                Voor dit project kunt u contact opnemen met:
              </p>
              <a
                href="https://techsolutionsutrecht.nl/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-full
                           hover:bg-red-700 transition-colors font-medium"
              >
                <Send className="w-4 h-4" />
                Contact Tech Solutions Utrecht
              </a>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-4">
            {contactInfo.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.label}
                  className="glass-card p-5"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-sand-200 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-stone-700" />
                    </div>
                    <div>
                      <p className="text-xs text-stone-500 uppercase tracking-wider">{item.label}</p>
                      <p className="font-semibold text-stone-800">{item.value}</p>
                      <p className="text-sm text-stone-500">{item.subtext}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}

            {/* Company Info */}
            <motion.div
              className="glass-card p-5 bg-stone-800 text-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-5 h-5 text-sand-300" />
                <h3 className="font-heading font-semibold">Bedrijfsgegevens (DEMO)</h3>
              </div>
              <div className="space-y-2 text-sm">
                <p><span className="text-stone-400">Bedrijfsnaam:</span> Perfect Stucwerk B.V. (DEMO)</p>
                <p><span className="text-stone-400">KVK:</span> 12345678 (DEMO nummer)</p>
                <p><span className="text-stone-400">BTW:</span> NL001234567B01 (Voorbeeld)</p>
                <p><span className="text-stone-400">IBAN:</span> NL00DEMO0123456789</p>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="glass-card p-8">
              <h2 className="text-2xl font-heading font-bold text-stone-800 mb-6">
                Stuur een bericht (DEMO)
              </h2>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Voornaam (DEMO)
                    </label>
                    <input
                      type="text"
                      placeholder="Uw voornaam"
                      className="w-full px-4 py-3 rounded-xl border border-sand-300 bg-white
                                 focus:outline-none focus:ring-2 focus:ring-clay/50
                                 transition-shadow"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Achternaam (DEMO)
                    </label>
                    <input
                      type="text"
                      placeholder="Uw achternaam"
                      className="w-full px-4 py-3 rounded-xl border border-sand-300 bg-white
                                 focus:outline-none focus:ring-2 focus:ring-clay/50
                                 transition-shadow"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Email (DEMO)
                    </label>
                    <input
                      type="email"
                      placeholder="uw@email.nl"
                      className="w-full px-4 py-3 rounded-xl border border-sand-300 bg-white
                                 focus:outline-none focus:ring-2 focus:ring-clay/50
                                 transition-shadow"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Telefoon (DEMO)
                    </label>
                    <input
                      type="tel"
                      placeholder="06-12345678"
                      className="w-full px-4 py-3 rounded-xl border border-sand-300 bg-white
                                 focus:outline-none focus:ring-2 focus:ring-clay/50
                                 transition-shadow"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Onderwerp (DEMO)
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-sand-300 bg-white
                                   focus:outline-none focus:ring-2 focus:ring-clay/50
                                   transition-shadow">
                    <option>Vrijblijvende offerte aanvragen (DEMO)</option>
                    <option>Vraag over stucwerk (DEMO)</option>
                    <option>Afspraak maken (DEMO)</option>
                    <option>Anders (DEMO)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Bericht (DEMO)
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Beschrijf uw project... (DEMO - Dit formulier werkt niet)"
                    className="w-full px-4 py-3 rounded-xl border border-sand-300 bg-white
                               focus:outline-none focus:ring-2 focus:ring-clay/50
                               transition-shadow resize-none"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="mt-1 w-4 h-4 rounded border-sand-300 text-clay focus:ring-clay"
                  />
                  <label htmlFor="privacy" className="text-sm text-stone-600">
                    Ik ga akkoord met de verwerking van mijn gegevens (DEMO) - 
                    Dit is een voorbeeld, er worden geen gegevens verwerkt.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-br from-sand-300 to-sand-400 
                             text-stone-800 font-semibold rounded-full
                             shadow-lg hover:shadow-xl hover:scale-[1.02]
                             transition-all duration-300"
                >
                  Bericht versturen (DEMO - Werkt niet)
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
