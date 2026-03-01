'use client'

import Link from 'next/link'
import { Flower2, Phone, Mail, MapPin, Instagram, Facebook, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-coffee-brown text-creamy-egg">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Flower2 className="w-6 h-6 text-strawberry-jam" />
              <span className="font-lora text-lg font-semibold">Het Kleine Paradijs</span>
            </Link>
            <p className="text-sm text-creamy-egg/70 leading-relaxed mb-4">
              Uw thuis weg van huis in het hart van Nederland. Geniet van huisgemaakt ontbijt en warme gastvrijheid.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-creamy-egg/10 hover:bg-strawberry-jam transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-creamy-egg/10 hover:bg-strawberry-jam transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-lora text-base font-semibold mb-4">Ontdek</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#kamers" className="text-sm text-creamy-egg/70 hover:text-strawberry-jam transition-colors">
                  Onze Kamers
                </Link>
              </li>
              <li>
                <Link href="#ontbijt" className="text-sm text-creamy-egg/70 hover:text-strawberry-jam transition-colors">
                  Het Ontbijt
                </Link>
              </li>
              <li>
                <Link href="#over-ons" className="text-sm text-creamy-egg/70 hover:text-strawberry-jam transition-colors">
                  Over Ons
                </Link>
              </li>
              <li>
                <Link href="#omgeving" className="text-sm text-creamy-egg/70 hover:text-strawberry-jam transition-colors">
                  Omgeving
                </Link>
              </li>
              <li>
                <Link href="/dagboek/" className="text-sm text-creamy-egg/70 hover:text-strawberry-jam transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-lora text-base font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-strawberry-jam mt-0.5 shrink-0" />
                <span className="text-sm text-creamy-egg/70">
                  DEMO Dorpsweg 12<br />
                  1234 AB Dorpje<br />
                  (Voorbeeldadres)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-strawberry-jam shrink-0" />
                <span className="text-sm text-creamy-egg/70">
                  030-9876543<br />
                  <span className="text-xs text-creamy-egg/50">(DEMO - Voorbeeld)</span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-strawberry-jam shrink-0" />
                <span className="text-sm text-creamy-egg/70">
                  welcome@demo-paradijs.nl<br />
                  <span className="text-xs text-creamy-egg/50">(DEMO)</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-lora text-base font-semibold mb-4">Ontbijttijden</h3>
            <ul className="space-y-2 text-sm text-creamy-egg/70">
              <li className="flex justify-between">
                <span>Maandag - Vrijdag</span>
                <span>08:00 - 10:30</span>
              </li>
              <li className="flex justify-between">
                <span>Zaterdag</span>
                <span>08:30 - 11:00</span>
              </li>
              <li className="flex justify-between">
                <span>Zondag</span>
                <span>09:00 - 11:00</span>
              </li>
            </ul>
            <p className="text-xs text-creamy-egg/50 mt-3">
              * Op aanvraag ook eerder mogelijk
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-creamy-egg/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-creamy-egg/50">
            <p className="text-center md:text-left">
              © 2025 Tech Solutions Utrecht. Alle intellectuele eigendomsrechten voorbehouden. 
              Concept, design en ontwikkeling door Tech Solutions Utrecht.
            </p>
            <p className="flex items-center gap-1">
              Met <Heart className="w-3 h-3 text-strawberry-jam fill-strawberry-jam" /> gemaakt in Nederland
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
