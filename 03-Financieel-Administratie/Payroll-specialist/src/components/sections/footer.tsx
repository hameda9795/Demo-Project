import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  diensten: [
    { label: "Salarisadministratie", href: "/werkgevers" },
    { label: "Loonspecificaties", href: "/werkgevers" },
    { label: "HR-administratie", href: "/werkgevers" },
    { label: "Jaaropgaven", href: "/werkgevers" },
  ],
  werknemers: [
    { label: "Mijn loonspecificatie", href: "/login" },
    { label: "Verlof aanvragen", href: "/login" },
    { label: "Jaaropgave downloaden", href: "/login" },
    { label: "Gegevens wijzigen", href: "/login" },
  ],
  bedrijf: [
    { label: "Over ons", href: "/#over-ons" },
    { label: "Contact", href: "/contact" },
    { label: "Vacatures", href: "/#vacatures" },
    { label: "Partners", href: "/#partners" },
  ],
  kennisbank: [
    { label: "Belastingen", href: "/blog?categorie=belasting" },
    { label: "Wetgeving", href: "/blog?categorie=wetgeving" },
    { label: "Handige tips", href: "/blog?categorie=tips" },
    { label: "FAQ", href: "/werknemers#faq" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
            <Link href="/" className="inline-block mb-4">
              <div className="flex items-center gap-2">
                <span className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold">
                  SP
                </span>
                <span className="text-white font-bold text-xl">SalarisPro</span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 mb-4 max-w-xs">
              Professionele salarisadministratie voor het MKB in Nederland. 
              Precies en op tijd, altijd.
            </p>
            <div className="space-y-2 text-sm">
              <p>Croeselaan 125</p>
              <p>3521 BC Utrecht</p>
              <p>Tel: +31 30 987 6543</p>
              <p>info@techsolutionsutrecht.nl</p>
            </div>
          </div>

          {/* Diensten */}
          <div>
            <h4 className="text-white font-semibold mb-4">Diensten</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.diensten.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Werknemers */}
          <div>
            <h4 className="text-white font-semibold mb-4">Werknemers</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.werknemers.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bedrijf */}
          <div>
            <h4 className="text-white font-semibold mb-4">Bedrijf</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.bedrijf.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kennisbank */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kennisbank</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.kennisbank.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-slate-800 mb-8" />

        {/* Demo Disclaimer */}
        <div className="bg-slate-800/50 rounded-xl p-6 mb-8">
          <p className="text-sm text-slate-400 text-center">
            Dit is een demo versie en alle intellectuele eigendomsrechten behoren toe aan techsolutionsutrecht
          </p>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>
            © 2024 SalarisPro Nederland - Gebouwd door{" "}
            <a
              href="https://www.techsolutionsutrecht.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              www.techsolutionsutrecht.nl
            </a>
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacybeleid
            </Link>
            <Link href="/algemene-voorwaarden" className="hover:text-white transition-colors">
              Algemene Voorwaarden
            </Link>
            <Link href="/cookies" className="hover:text-white transition-colors">
              Cookiebeleid
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
