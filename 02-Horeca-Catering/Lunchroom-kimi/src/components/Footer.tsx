import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary text-warm-white py-xl pb-md">
      <div className="container-custom">
        <div className="grid grid-cols-4 gap-xl mb-xl max-lg:grid-cols-2 max-md:grid-cols-1 max-md:text-center">
          {/* Brand */}
          <div className="col-span-1 max-lg:col-span-2 max-md:col-span-1">
            <Link href="/" className="flex flex-col font-display leading-none mb-sm">
              <span className="text-xs font-body font-medium tracking-[0.2em] uppercase text-stone">De</span>
              <span className="text-2xl font-bold text-white">Lunchkamer</span>
            </Link>
            <p className="text-stone-light text-sm max-w-[250px] max-md:mx-auto">
              Verse lunch, warme service sinds 2015.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-sm font-semibold tracking-wider uppercase mb-sm text-accent-light">Snel naar</h4>
            <ul className="space-y-2">
              <li><Link href="/#over-ons" className="text-stone-light text-sm hover:text-white transition-colors">Over ons</Link></li>
              <li><Link href="/#menu" className="text-stone-light text-sm hover:text-white transition-colors">Menu</Link></li>
              <li><Link href="/#catering" className="text-stone-light text-sm hover:text-white transition-colors">Catering</Link></li>
              <li><Link href="/#contact" className="text-stone-light text-sm hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-sm font-semibold tracking-wider uppercase mb-sm text-accent-light">Contact</h4>
            <p className="text-stone-light text-sm leading-relaxed">
              Oudegracht 123<br />
              3511 AB Utrecht<br />
              <Link href="tel:+31301234567" className="hover:text-white transition-colors">030 - 123 4567</Link><br />
              <Link href="mailto:hallo@delunchkamer.nl" className="hover:text-white transition-colors">hallo@delunchkamer.nl</Link>
            </p>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-body text-sm font-semibold tracking-wider uppercase mb-sm text-accent-light">Volg ons</h4>
            <div className="flex gap-sm max-md:justify-center">
              <Link 
                href="#" 
                aria-label="Instagram"
                className="w-10 h-10 border border-stone flex items-center justify-center text-stone-light text-xs font-semibold hover:bg-accent hover:border-accent hover:text-white transition-all"
              >
                IG
              </Link>
              <Link 
                href="#" 
                aria-label="Facebook"
                className="w-10 h-10 border border-stone flex items-center justify-center text-stone-light text-xs font-semibold hover:bg-accent hover:border-accent hover:text-white transition-all"
              >
                FB
              </Link>
              <Link 
                href="#" 
                aria-label="LinkedIn"
                className="w-10 h-10 border border-stone flex items-center justify-center text-stone-light text-xs font-semibold hover:bg-accent hover:border-accent hover:text-white transition-all"
              >
                LI
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-md border-t border-white/10 text-center">
          <p className="text-xs text-stone mb-xs">
            Dit is een demoversie en alle materiële en intellectuele rechten behoren toe aan{' '}
            <Link href="https://www.techsolutionsutrecht.nl" target="_blank" className="text-accent-light underline">
              TechSolutions Utrecht
            </Link>.
          </p>
          <p className="text-xs text-stone">
            © 2024 De Lunchkamer. Website door{' '}
            <Link href="https://www.techsolutionsutrecht.nl" target="_blank" className="text-accent-light">
              www.techsolutionsutrecht.nl
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
