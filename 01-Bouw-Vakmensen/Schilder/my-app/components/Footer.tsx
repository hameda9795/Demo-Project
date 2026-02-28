'use client'

import Link from 'next/link'
import { PaintBucket, MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from 'lucide-react'
import { demoContact } from '@/lib/utils'
import { DemoFooterNote } from './DemoBanner'

const footerLinks = {
  diensten: [
    { href: '/diensten/', label: 'Binnenschilderwerk' },
    { href: '/diensten/', label: 'Buitenschilderwerk' },
    { href: '/diensten/', label: 'Behang aanbrengen' },
    { href: '/diensten/', label: 'Houtrot saneren' },
    { href: '/diensten/', label: 'Latex spuiten' },
  ],
  bedrijf: [
    { href: '/verftips/', label: 'Verf Tips & Blog' },
    { href: '/contact/', label: 'Contact' },
    { href: '/mijn-project/', label: 'Mijn Project' },
    { href: '/admin/', label: 'Admin Panel' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <DemoFooterNote />
      
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center">
                <PaintBucket className="w-5 h-5 text-white" fill="white" />
              </div>
              <span className="text-xl font-bold text-white">
                Kleur & Verf <span className="text-teal-400">Meesters</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 mb-6">
              Professioneel schilderwerk in Den Haag, Rotterdam en omgeving. 
              Streeploze kwaliteit met 5 jaar garantie.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Diensten */}
          <div>
            <h3 className="text-white font-semibold mb-4">Diensten</h3>
            <ul className="space-y-3">
              {footerLinks.diensten.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-teal-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bedrijf */}
          <div>
            <h3 className="text-white font-semibold mb-4">Bedrijf</h3>
            <ul className="space-y-3">
              {footerLinks.bedrijf.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-teal-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact (DEMO)</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                <span>{demoContact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal-500 flex-shrink-0" />
                <a href={`tel:${demoContact.phoneRaw}`} className="hover:text-teal-400">
                  {demoContact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-500 flex-shrink-0" />
                <a href={`mailto:${demoContact.email}`} className="hover:text-teal-400">
                  {demoContact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-teal-500 flex-shrink-0" />
                <span>{demoContact.hours}</span>
              </li>
            </ul>
            
            <div className="mt-4 pt-4 border-t border-gray-800 text-xs text-gray-500">
              <p>KVK: {demoContact.kvk}</p>
              <p>BTW: {demoContact.btw}</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© 2024 Kleur & Verf Meesters. Alle rechten voorbehouden.</p>
          <p className="text-amber-500 font-medium">⚠️ DEMO WEBSITE</p>
        </div>
      </div>
    </footer>
  )
}
