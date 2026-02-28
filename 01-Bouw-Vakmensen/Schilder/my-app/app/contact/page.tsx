'use client'

import { motion } from 'framer-motion'
import { 
  MapPin, Phone, Mail, Clock, Send,
  AlertTriangle
} from 'lucide-react'
import { demoContact } from '@/lib/utils'

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-teal-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Contact <span className="text-teal-600">opnemen</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600"
            >
              Vragen of een offerte aanvragen? Wij staan voor u klaar.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* DEMO Warning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-50 border-2 border-red-400 rounded-2xl p-8 mb-12"
          >
            <div className="flex items-start gap-4">
              <div className="bg-red-100 p-3 rounded-full">
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-red-700 mb-2">
                  ⚠️ DEMO WEBSITE - Geen echte contactgegevens
                </h2>
                <p className="text-red-600">
                  Dit is een demonstratie website. Alle contactgegevens op deze pagina zijn fictief. 
                  Voor echte schilderdiensten bezoek onze partner website.
                </p>
                <a
                  href="https://techsolutionsutrecht.nl/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Bezoek echte website
                </a>
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Contactgegevens (DEMO)
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Adres</h3>
                    <p className="text-gray-600">{demoContact.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Telefoon</h3>
                    <a href={`tel:${demoContact.phoneRaw}`} className="text-teal-600 hover:underline">
                      {demoContact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">E-mail</h3>
                    <a href={`mailto:${demoContact.email}`} className="text-teal-600 hover:underline">
                      {demoContact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Openingstijden</h3>
                    <p className="text-gray-600">{demoContact.hours}</p>
                    <p className="text-sm text-gray-500">Zaterdag op afspraak</p>
                  </div>
                </div>
              </div>

              {/* Business info */}
              <div className="mt-8 p-6 bg-gray-100 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-4">Bedrijfsgegevens (DEMO)</h3>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-gray-500">KVK-nummer:</dt>
                    <dd className="font-medium text-gray-900">{demoContact.kvk}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-500">BTW-nummer:</dt>
                    <dd className="font-medium text-gray-900">{demoContact.btw}</dd>
                  </div>
                </dl>
              </div>
            </motion.div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Stuur een bericht
              </h2>
              <p className="text-gray-500 mb-8">
                Vul het formulier in en wij nemen zo snel mogelijk contact met u op.
              </p>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Voornaam
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
                      placeholder="Jan"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Achternaam
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
                      placeholder="Jansen"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-mailadres
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
                    placeholder="jan@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefoonnummer
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
                    placeholder="06-12345678"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Onderwerp
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all">
                    <option>Offerte aanvragen</option>
                    <option>Kleuradvies</option>
                    <option>Binnenschilderwerk</option>
                    <option>Buitenschilderwerk</option>
                    <option>Anders</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bericht
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all resize-none"
                    placeholder="Beschrijf uw project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-teal-500/30 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Verstuur bericht (DEMO)
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
