'use client'

import Link from 'next/link'
import { Droplets, Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react'

/**
 * Footer component
 * Multi-column layout with navigation, contact info, and social links
 */
export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    diensten: [
      { label: 'Lekkages', href: '/#diensten' },
      { label: 'Verwarming', href: '/#diensten' },
      { label: 'Sanitair', href: '/#diensten' },
      { label: 'Riool', href: '/#diensten' },
    ],
    bedrijf: [
      { label: 'Over ons', href: '/#over-ons' },
      { label: 'Werkgebied', href: '/#werkgebied' },
      { label: 'Kennisbank', href: '/kennisbank/' },
      { label: 'Contact', href: '/#contact' },
    ],
    juridisch: [
      { label: 'Privacybeleid', href: '/privacy/' },
      { label: 'Algemene voorwaarden', href: '#' },
      { label: 'Cookiebeleid', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ]

  return (
    <footer className="bg-deep-navy text-white">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-water-blue rounded-full flex items-center justify-center">
                <Droplets className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-outfit font-bold text-lg leading-tight">
                  Van Dijk
                </span>
                <span className="text-xs text-gray-400 leading-tight">
                  Loodgieters
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Professionele loodgietersdiensten in Rotterdam sinds 2009. 
              24/7 beschikbaar voor spoedhulp.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-water-blue transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Diensten</h3>
            <ul className="space-y-3">
              {footerLinks.diensten.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Bedrijf</h3>
            <ul className="space-y-3">
              {footerLinks.bedrijf.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:010-1234567"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 text-water-blue" />
                  <span>010-1234567</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@vandijkloodgieters.nl"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 text-water-blue" />
                  <span>info@vandijkloodgieters.nl</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 text-water-blue flex-shrink-0 mt-0.5" />
                  <span>Hoofdstraat 123<br />3011 AA Rotterdam</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Van Dijk Loodgieters. Alle rechten voorbehouden.
            </p>
            <p className="text-gray-500 text-xs">
              Demo website - Geen echte data wordt verwerkt
            </p>
            <div className="flex gap-6">
              {footerLinks.juridisch.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
