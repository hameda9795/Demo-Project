import Link from 'next/link'
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react'

/**
 * Footer Component
 * Contact info, links, and demo notice
 */
export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-heading font-bold text-2xl mb-4">
              <span className="text-safety">Bouw</span>bedrijf
            </h3>
            <p className="text-white/60 mb-4">Van den Berg</p>
            <p className="text-white/60 text-sm leading-relaxed">
              Al meer dan 25 jaar uw vertrouwde aannemer in Utrecht en omgeving. 
              Kwaliteit, vakmanschap en persoonlijke betrokkenheid.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Snelle Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Projecten', href: '/projecten/' },
                { label: 'Diensten', href: '/diensten/' },
                { label: 'Over Ons', href: '/over-ons/' },
                { label: 'Blog', href: '/blog/' },
                { label: 'Contact', href: '/contact/' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-safety transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Diensten</h4>
            <ul className="space-y-2">
              {[
                'Verbouwing',
                'Nieuwbouw',
                'Dakdekken',
                'Timmerwerk',
                'Renovatie',
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/diensten/"
                    className="text-white/60 hover:text-safety transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+31301234567"
                  className="flex items-center gap-2 text-white/60 hover:text-safety transition-colors text-sm"
                >
                  <Phone size={16} />
                  030 - 123 4567
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@vandenberg.nl"
                  className="flex items-center gap-2 text-white/60 hover:text-safety transition-colors text-sm"
                >
                  <Mail size={16} />
                  info@vandenberg.nl
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-white/60 text-sm">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                  Bouwstraat 123<br />
                  3583 AB Utrecht
                </span>
              </li>
            </ul>

            {/* Social */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                className="p-2 bg-white/5 hover:bg-safety rounded-lg transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-white/5 hover:bg-safety rounded-lg transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-white/5 hover:bg-safety rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Bouwbedrijf Van den Berg. Alle rechten voorbehouden.
          </p>
          <p className="text-white/40 text-xs">
            Demo omgeving - Geen echte data
          </p>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/privacy/" className="text-white/40 hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/voorwaarden/" className="text-white/40 hover:text-white transition-colors">
              Voorwaarden
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
