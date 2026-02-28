'use client'

import Link from 'next/link'
import { BrickWall, Phone, Mail, MapPin, Clock, AlertTriangle } from 'lucide-react'

const footerLinks = {
  diensten: [
    { label: 'Glad stucwerk', href: '/#structuur' },
    { label: 'Spachtelputz', href: '/#structuur' },
    { label: 'Granol', href: '/#structuur' },
    { label: 'Sierpleister', href: '/#structuur' },
  ],
  bedrijf: [
    { label: 'Over ons', href: '/#werkwijze' },
    { label: 'Projecten', href: '/#projecten' },
    { label: 'Werkwijze', href: '/#werkwijze' },
    { label: 'Contact', href: '/contact/' },
  ],
  kennisbank: [
    { label: 'Stucwerk droogtijd', href: '/stucwerk-kennis/' },
    { label: 'Spachtelputz vs Granol', href: '/stucwerk-kennis/' },
    { label: 'Sauzen of verven', href: '/stucwerk-kennis/' },
    { label: 'Onderhoudsgids', href: '/stucwerk-kennis/' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-stone-800 text-stone-300">
      {/* Demo Warning Banner */}
      <div className="bg-red-600/20 border-b border-red-500/30">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-center gap-2">
          <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0" />
          <p className="text-sm text-red-200 text-center">
            <strong>DIT IS EEN DEMO WEBSITE</strong> - Alle gegevens zijn fictief (Voorbeeld)
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sand-300 to-sand-400 flex items-center justify-center">
                <BrickWall className="w-6 h-6 text-stone-800" />
              </div>
              <div>
                <span className="font-heading font-bold text-xl text-white">
                  Perfect Stucwerk
                </span>
                <span className="block text-xs text-stone-400">Amsterdam & Utrecht</span>
              </div>
            </Link>
            <p className="text-stone-400 mb-6 max-w-sm">
              Vloeiend perfectionisme in stucwerk. Met meer dan 15 jaar ervaring creëren wij naadloze wanden en plafonds voor uw woning of bedrijfspand.
            </p>
            
            {/* Contact Info - ALL DEMO */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-sand-400" />
                <span>020-123 4567 (DEMO - Voorbeeld)</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-sand-400" />
                <span>info@demo-stukadoor.nl (DEMO)</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-sand-400" />
                <span>DEMO Straat 78, 1012 AB Amsterdam (Voorbeeldadres)</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-sand-400" />
                <span>Ma-Vr: 08:00 - 17:00 (DEMO)</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Diensten</h3>
            <ul className="space-y-3">
              {footerLinks.diensten.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-stone-400 hover:text-sand-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Bedrijf</h3>
            <ul className="space-y-3">
              {footerLinks.bedrijf.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-stone-400 hover:text-sand-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Knowledge Column */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Kennisbank</h3>
            <ul className="space-y-3">
              {footerLinks.kennisbank.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-stone-400 hover:text-sand-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-stone-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-stone-500">
            <p>
              © {new Date().getFullYear()} Perfect Stucwerk (DEMO). Alle rechten voorbehouden.
            </p>
            <div className="flex items-center gap-6">
              <span>KVK: 12345678 (DEMO)</span>
              <span>BTW: NL001234567B01 (Voorbeeld)</span>
            </div>
          </div>
          <p className="text-center text-xs text-stone-600 mt-4">
            Dit is een voorbeeld website. Contact opnemen voor dit project:{' '}
            <a
              href="https://techsolutionsutrecht.nl/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sand-400 hover:underline"
            >
              Tech Solutions Utrecht
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
