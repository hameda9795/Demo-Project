"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

const footerLinks = {
  diensten: [
    { name: "Belastingadvies", href: "/diensten#belasting" },
    { name: "Financiële Administratie", href: "/diensten#administratie" },
    { name: "Salarisadministratie", href: "/diensten#salaris" },
    { name: "Bedrijfsadvies", href: "/diensten#advies" },
  ],
  bedrijf: [
    { name: "Over Ons", href: "/over-ons" },
    { name: "Ons Team", href: "/over-ons#team" },
    { name: "Vacatures", href: "/over-ons#vacatures" },
    { name: "Contact", href: "/contact" },
  ],
  juridisch: [
    { name: "Privacybeleid", href: "/privacy" },
    { name: "Algemene Voorwaarden", href: "/voorwaarden" },
    { name: "Cookiebeleid", href: "/cookies" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-ink text-cream-200">
      {/* Main Footer */}
      <div className="container-asymmetric py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-terracotta-400 flex items-center justify-center">
                  <span className="text-cream-50 font-serif text-2xl font-medium">DB</span>
                </div>
                <div>
                  <span className="font-serif text-xl text-cream-50 block">De Brug Adviseurs</span>
                  <span className="text-xs text-concrete-400 uppercase tracking-wider">Sinds 1987</span>
                </div>
              </div>
            </Link>
            <p className="text-concrete-300 text-sm leading-relaxed mb-6 max-w-xs">
              Uw betrouwbare partner in belastingadvies en financiële administratie. 
              Persoonlijke service met professioneel vakmanschap.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="tel:+31301234567" className="flex items-center gap-3 text-sm text-concrete-300 hover:text-terracotta-300 transition-colors">
                <Phone className="w-4 h-4 text-terracotta-400" />
                <span>030 - 123 4567</span>
              </a>
              <a href="mailto:info@debrugadviseurs.nl" className="flex items-center gap-3 text-sm text-concrete-300 hover:text-terracotta-300 transition-colors">
                <Mail className="w-4 h-4 text-terracotta-400" />
                <span>info@debrugadviseurs.nl</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-concrete-300">
                <MapPin className="w-4 h-4 text-terracotta-400 flex-shrink-0 mt-0.5" />
                <span>Nobelstraat 42<br />3583 CE Utrecht</span>
              </div>
            </div>
          </div>

          {/* Links - Diensten */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-cream-50 font-medium text-sm uppercase tracking-wider mb-4">Diensten</h3>
            <ul className="space-y-3">
              {footerLinks.diensten.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-concrete-400 hover:text-terracotta-300 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links - Bedrijf */}
          <div className="lg:col-span-2">
            <h3 className="text-cream-50 font-medium text-sm uppercase tracking-wider mb-4">Bedrijf</h3>
            <ul className="space-y-3">
              {footerLinks.bedrijf.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-concrete-400 hover:text-terracotta-300 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="lg:col-span-3">
            <h3 className="text-cream-50 font-medium text-sm uppercase tracking-wider mb-4">Openingstijden</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-concrete-300">
                <span>Maandag - Vrijdag</span>
                <span className="text-cream-100">08:30 - 17:30</span>
              </div>
              <div className="flex justify-between text-concrete-300">
                <span>Dinsdag (koopavond)</span>
                <span className="text-cream-100">08:30 - 20:00</span>
              </div>
              <div className="flex justify-between text-concrete-300">
                <span>Zaterdag & Zondag</span>
                <span className="text-concrete-500">Gesloten</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-concrete-800/50 border border-concrete-700">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-terracotta-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-concrete-400">Voor spoedgevallen buiten kantooruren kunt u contact opnemen met onze spoedlijn.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer Bar */}
      <div className="border-t border-concrete-800">
        <div className="container-asymmetric py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-concrete-500 text-center md:text-left">
              Dit is een demoversie en alle materiële en intellectuele rechten behoren toe aan{" "}
              <a href="https://techsolutionsutrecht.nl" target="_blank" rel="noopener noreferrer" className="text-terracotta-400 hover:text-terracotta-300">
                TechSolutions Utrecht
              </a>
            </p>
            <div className="flex items-center gap-4">
              {footerLinks.juridisch.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs text-concrete-500 hover:text-concrete-300 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Creator Attribution */}
      <div className="bg-ink-light border-t border-concrete-800">
        <div className="container-asymmetric py-3">
          <p className="text-xs text-concrete-500 text-center">
            Website gemaakt door{" "}
            <a 
              href="https://www.techsolutionsutrecht.nl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-terracotta-400 hover:text-terracotta-300 transition-colors"
            >
              TechSolutions Utrecht
              <ExternalLink className="w-3 h-3" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
