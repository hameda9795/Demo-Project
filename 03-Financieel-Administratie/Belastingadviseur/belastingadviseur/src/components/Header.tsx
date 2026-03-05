"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, User } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Over Ons", href: "/over-ons" },
  { name: "Diensten", href: "/diensten" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream-100/95 backdrop-blur-sm border-b border-concrete-200">
      <nav className="container-asymmetric">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-ink flex items-center justify-center">
              <span className="text-cream-50 font-serif text-xl font-medium">DB</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-serif text-lg md:text-xl text-ink tracking-tight">De Brug Adviseurs</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium tracking-wide uppercase transition-colors ${
                  pathname === item.href
                    ? "text-terracotta-500"
                    : "text-concrete-600 hover:text-ink"
                }`}
              >
                {item.name}
                {pathname === item.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-terracotta-400" />
                )}
              </Link>
            ))}
          </div>

          {/* Login Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/login"
              className="inline-flex items-center gap-2 px-4 py-2 bg-ink text-cream-50 text-sm font-medium tracking-wide uppercase hover:bg-terracotta-500 transition-colors"
            >
              <User className="w-4 h-4" />
              Inloggen
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-ink"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-concrete-200">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-lg font-medium ${
                    pathname === item.href
                      ? "text-terracotta-500"
                      : "text-ink"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/login"
                className="inline-flex items-center gap-2 px-4 py-3 bg-ink text-cream-50 text-sm font-medium tracking-wide uppercase mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <User className="w-4 h-4" />
                Inloggen
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
