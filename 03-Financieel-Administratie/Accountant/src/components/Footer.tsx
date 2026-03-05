"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  diensten: [
    { label: "Boekhouding", href: "#diensten" },
    { label: "Fiscaal Advies", href: "#diensten" },
    { label: "Jaarcijfers", href: "#diensten" },
    { label: "Salarisadministratie", href: "#diensten" },
  ],
  bedrijf: [
    { label: "Over Ons", href: "#over-ons" },
    { label: "Het Team", href: "#over-ons" },
    { label: "Vacatures", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  juridisch: [
    { label: "Algemene Voorwaarden", href: "#" },
    { label: "Privacybeleid", href: "#" },
    { label: "Cookiebeleid", href: "#" },
    { label: "Klachtenregeling", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-warm-charcoal">
      {/* Main Footer Content */}
      <div className="w-full px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6" data-cursor-hover>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-semibold tracking-tight text-warm-cream">
                  VAN DEN BERG
                </span>
                <span className="text-caption text-warm-beige/60">
                  Accountants & Adviseurs
                </span>
              </div>
            </Link>
            
            <p className="text-body text-warm-beige/70 max-w-sm mb-8">
              Sinds 1987 dé vertrouwde partner voor ondernemers. 
              Persoonlijk advies, heldere cijfers, duurzame relaties.
            </p>

            {/* KvK and Registration info */}
            <div className="space-y-2 text-xs text-warm-beige/50">
              <p>KvK: 12345678</p>
              <p>BTW: NL123456789B01</p>
              <p>AFM Vergunning: 12345678</p>
              <p>IBA Register: 12345</p>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-6 lg:col-start-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-caption text-warm-terracotta mb-6">Diensten</h4>
              <ul className="space-y-3">
                {footerLinks.diensten.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-body text-warm-beige/70 hover:text-warm-cream transition-colors"
                      data-cursor-hover
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-caption text-warm-terracotta mb-6">Bedrijf</h4>
              <ul className="space-y-3">
                {footerLinks.bedrijf.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-body text-warm-beige/70 hover:text-warm-cream transition-colors"
                      data-cursor-hover
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-caption text-warm-terracotta mb-6">Juridisch</h4>
              <ul className="space-y-3">
                {footerLinks.juridisch.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-body text-warm-beige/70 hover:text-warm-cream transition-colors"
                      data-cursor-hover
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Back to Top Link */}
        <motion.div
          className="mt-16 lg:mt-24 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            href="#"
            className="group flex items-center gap-2 text-caption text-warm-beige/50 hover:text-warm-terracotta transition-colors"
            data-cursor-hover
          >
            <span>Terug naar boven</span>
            <ArrowUpRight className="w-4 h-4 rotate-[-45deg] group-hover:-translate-y-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* Disclaimer Bar */}
      <div className="border-t border-warm-cream/10">
        <div className="w-full px-6 lg:px-12 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Disclaimer Text */}
            <p className="text-xs text-warm-beige/40 max-w-2xl">
              <span className="text-warm-terracotta">Disclaimer:</span>{" "}
              Dit is een demoversie en alle materiële en intellectuele rechten behoren toe aan{" "}
              <a 
                href="https://techsolutionsutrecht.nl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:text-warm-terracotta transition-colors"
              >
                TechSolutions Utrecht
              </a>.
              Alle getoonde gegevens zijn fictief en uitsluitend bedoeld voor demonstratiedoeleinden.
            </p>

            {/* Creator Attribution */}
            <p className="text-xs text-warm-beige/40 whitespace-nowrap">
              Gemaakt door{" "}
              <a 
                href="https://www.techsolutionsutrecht.nl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-warm-terracotta hover:underline"
              >
                www.techsolutionsutrecht.nl
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-warm-cream/5">
        <div className="w-full px-6 lg:px-12 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-warm-beige/30">
            <p>© 2024 Van den Berg Accountants. Alle rechten voorbehouden.</p>
            <p className="flex items-center gap-4">
              <span>Koningssingel 123, 3581 GA Utrecht</span>
              <span className="hidden sm:inline">•</span>
              <span>+31 (0)30 123 4567</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
