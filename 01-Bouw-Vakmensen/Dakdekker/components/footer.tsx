/**
 * Footer Component
 * Dakwerken Van der Berg
 * 
 * @description Site footer with navigation, contact info, and legal links
 * Includes GDPR notice
 */

"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { companyInfo, telLink, serviceAreas } from "@/lib/utils";

const footerLinks = {
  diensten: [
    { label: "Dakreparatie", href: "#diensten" },
    { label: "Dakrenovatie", href: "#diensten" },
    { label: "Dakisolatie", href: "#diensten" },
    { label: "Zonnepanelen", href: "#diensten" },
    { label: "Schoorsteen renovatie", href: "#diensten" },
    { label: "Dakgoot reiniging", href: "#diensten" },
  ],
  bedrijf: [
    { label: "Over ons", href: "#" },
    { label: "Projecten", href: "#projecten" },
    { label: "Blog", href: "/dakenkennis/" },
    { label: "Werken bij", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  juridisch: [
    { label: "Algemene voorwaarden", href: "#" },
    { label: "Privacybeleid", href: "#" },
    { label: "Cookiebeleid", href: "#" },
    { label: "Garantievoorwaarden", href: "#" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-slate text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div
                className="w-12 h-12 bg-safety-orange flex items-center justify-center"
                style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}
              >
                <span className="font-heading font-bold text-white text-lg mt-2">VdB</span>
              </div>
              <div>
                <div className="font-heading font-bold text-xl">Dakwerken</div>
                <div className="font-heading text-sm text-white/60">Van der Berg</div>
              </div>
            </Link>

            <p className="text-white/60 mb-6 max-w-sm">
              Al 25+ jaar de betrouwbare dakdekker voor Utrecht en omgeving. 
              Vakmanschap, kwaliteit en persoonlijke service staan bij ons centraal.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href={telLink(companyInfo.mobile)}
                className="flex items-center gap-3 text-white/80 hover:text-safety-orange transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>{companyInfo.mobile}</span>
              </a>
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-3 text-white/80 hover:text-safety-orange transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>{companyInfo.email}</span>
              </a>
              <div className="flex items-start gap-3 text-white/60">
                <MapPin className="w-5 h-5 mt-0.5" />
                <span>
                  {companyInfo.address.street}
                  <br />
                  {companyInfo.address.postcode} {companyInfo.address.city}
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href={companyInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-safety-orange transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={companyInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-safety-orange transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={companyInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-safety-orange transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Diensten Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Diensten</h3>
            <ul className="space-y-3">
              {footerLinks.diensten.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-safety-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bedrijf Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Bedrijf</h3>
            <ul className="space-y-3">
              {footerLinks.bedrijf.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-safety-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Werkgebied</h3>
            <ul className="space-y-2">
              {serviceAreas.slice(0, 6).map((area) => (
                <li key={area} className="text-white/60">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-white/40 text-sm">
              © {currentYear} Dakwerken Van der Berg. Alle rechten voorbehouden.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {footerLinks.juridisch.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-white/40 hover:text-white/80 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Demo Notice - GDPR */}
          <div className="mt-4 pt-4 border-t border-white/5 text-center">
            <p className="text-white/30 text-xs">
              ⚠️ Demo omgeving - Geen echte data • Deze website is een demonstratie 
              en bevat geen werkelijke contactgegevens of diensten.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
