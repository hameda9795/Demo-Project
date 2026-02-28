"use client"

import Link from "next/link"
import { Zap, Phone, Mail, MapPin, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-circuit-dark border-t border-electric-800">
      {/* Demo Banner */}
      <div className="bg-amber-500/10 border-y border-amber-500/30 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
            <span className="text-amber-400 font-medium">
              Alle contactgegevens zijn fictief (DEMO)
            </span>
            <span className="hidden md:inline text-gray-500">|</span>
            <span className="text-gray-300">Voor dit project contact opnemen:</span>
            <a
              href="https://techsolutionsutrecht.nl/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-electric-600 hover:bg-electric-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="font-medium">techsolutionsutrecht.nl</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-electric-500 to-electric-700 p-2 rounded-lg">
                <Zap className="w-5 h-5 text-white" fill="currentColor" />
              </div>
              <span className="font-heading font-bold text-white">
                Stroom & Veiligheid
              </span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Professionele elektricien diensten voor Eindhoven, Rotterdam en omgeving. 
              Specialisatie in spoedhulp, laadpalen en smart home installaties.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4 text-electric-500" />
                <span>DEMO Straat 123, 1234 AB Eindhoven (DEMO)</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-white mb-4">Diensten</h3>
            <ul className="space-y-2">
              {[
                "Spoedhulp 24/7",
                "Meterkast vervangen",
                "Laadpaal installatie",
                "Zonnepanelen aansluiten",
                "Smart home installatie",
                "Groepenkast uitbreiden",
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-400 hover:text-electric-400 transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:020-1234567"
                  className="flex items-center gap-2 text-gray-400 hover:text-electric-400 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>020-1234567 (DEMO)</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:demo@elektro-voorbeeld.nl"
                  className="flex items-center gap-2 text-gray-400 hover:text-electric-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>demo@elektro-voorbeeld.nl (DEMO)</span>
                </a>
              </li>
            </ul>
            
            <div className="mt-4 pt-4 border-t border-electric-800">
              <div className="text-sm text-gray-500">
                <p>KVK: 12345678 (DEMO)</p>
                <p>BTW: NL001234567B01 (DEMO)</p>
              </div>
            </div>
          </div>

          {/* Emergency CTA */}
          <div>
            <h3 className="font-heading font-bold text-white mb-4">Spoed?</h3>
            <p className="text-gray-400 text-sm mb-4">
              Stroomstoring of elektrisch probleem? Wij zijn 24/7 beschikbaar voor spoedklussen.
            </p>
            <motion.a
              href="tel:020-1234567"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg font-medium transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>Bel Direct (DEMO)</span>
            </motion.a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-electric-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Stroom & Veiligheid Elektro. Alle rechten voorbehouden.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <Link href="/" className="text-gray-500 hover:text-electric-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/" className="text-gray-500 hover:text-electric-400 transition-colors">
                Algemene Voorwaarden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
