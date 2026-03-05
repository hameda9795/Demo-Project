"use client";

import Link from "next/link";
// import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone, Heart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const footerLinks = {
  gasten: [
    { label: "Vakantiehuizen", href: "/vakantiehuizen" },
    { label: "Hoe het werkt", href: "#hoe-het-werkt" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  eigenaren: [
    { label: "Uw woning verhuren", href: "/voor-eigenaren" },
    { label: "Beheerservices", href: "/voor-eigenaren#services" },
    { label: "Revenue Calculator", href: "/voor-eigenaren#calculator" },
    { label: "Eigenaarsdashboard", href: "/eigenaarsdashboard" },
  ],
  support: [
    { label: "Veelgestelde vragen", href: "/contact#faq" },
    { label: "Gastenportaal", href: "/gastenportaal" },
    { label: "Huisregels", href: "#" },
    { label: "Annuleringsvoorwaarden", href: "#" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="relative bg-charcoal text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-terracotta/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sage/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <div className="w-12 h-12 bg-terracotta rounded-xl flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl">V</span>
              </div>
              <span className="font-display font-bold text-2xl">
                VakantieHuizen <span className="text-terracotta">Pro</span>
              </span>
            </Link>
            <p className="text-white/70 mb-6 max-w-sm leading-relaxed">
              Uw woning, onze zorg, tevreden gasten. Wij beheren uw vakantiewoning 
              alsof het onze eigen is. Professioneel, persoonlijk en met passie.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:info@techsolutionsutrecht.nl" className="flex items-center gap-3 text-white/70 hover:text-terracotta transition-colors">
                <Mail className="w-5 h-5" />
                <span>info@techsolutionsutrecht.nl</span>
              </a>
              <a href="tel:+31205550199" className="flex items-center gap-3 text-white/70 hover:text-terracotta transition-colors">
                <Phone className="w-5 h-5" />
                <span>+31 20 555 0199</span>
              </a>
              <div className="flex items-center gap-3 text-white/70">
                <MapPin className="w-5 h-5" />
                <span>Prinsengracht 456, 1017 KE Amsterdam</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Voor Gasten</h4>
            <ul className="space-y-3">
              {footerLinks.gasten.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-terracotta transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Voor Eigenaren</h4>
            <ul className="space-y-3">
              {footerLinks.eigenaren.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-terracotta transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-terracotta transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/10 py-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-display font-semibold text-xl mb-1">Blijf op de hoogte</h4>
              <p className="text-white/60 text-sm">Schrijf u in voor onze nieuwsbrief met tips en aanbiedingen</p>
            </div>
            <form className="flex gap-3 w-full md:w-auto">
              <Input
                type="email"
                placeholder="Uw e-mailadres"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus-visible:ring-terracotta w-full md:w-64"
              />
              <Button type="submit" className="whitespace-nowrap">
                Inschrijven
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Required Demo Text */}
            <div className="text-center lg:text-left">
              <p className="text-white/50 text-sm mb-1">
                Dit is een demo versie en alle intellectuele eigendomsrechten behoren toe aan techsolutionsutrecht
              </p>
              <p className="text-white/40 text-xs">
                © 2024 VakantieHuizen Pro - Gebouwd door www.techsolutionsutrecht.nl
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-terracotta transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Made with Love */}
        <div className="mt-8 text-center">
          <p className="text-white/30 text-sm flex items-center justify-center gap-1">
            Gemaakt met <Heart className="w-4 h-4 text-terracotta fill-current" /> in Amsterdam
          </p>
        </div>
      </div>
    </footer>
  );
}
