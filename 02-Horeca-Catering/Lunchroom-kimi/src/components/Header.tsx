'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/#over-ons', label: 'Over ons' },
  { href: '/#menu', label: 'Menu' },
  { href: '/#catering', label: 'Catering' },
  { href: '/#galerij', label: 'Galerij' },
  { href: '/#contact', label: 'Contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const handleNavClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <header 
        className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
          isScrolled ? 'bg-warm-white/95 backdrop-blur-xl shadow-sm' : ''
        }`}
      >
        <nav className="flex items-center justify-between px-4 md:px-6 max-w-[1400px] mx-auto">
          {/* Logo */}
          <div className="nav-brand z-50">
            <Link href="/" className="flex flex-col font-display leading-none">
              <span className="text-xs font-body font-medium tracking-[0.2em] uppercase text-stone">De</span>
              <span className="text-xl font-bold text-primary">Lunchkamer</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex list-none gap-6 items-center">
            {isHomePage && navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href}
                  className="text-sm font-medium text-primary relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link 
                href="/login"
                className="bg-primary text-white px-6 py-3 rounded text-sm font-medium hover:bg-accent transition-colors"
              >
                Inloggen
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <button 
            className="flex md:hidden flex-col gap-1.5 bg-transparent border-none p-2 z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Menu sluiten' : 'Menu openen'}
          >
            <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-0.5' : ''}`} />
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 right-0 w-4/5 max-w-[320px] h-full bg-warm-white shadow-2xl z-40 md:hidden transition-transform duration-300 ease-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 pt-20">
          {isHomePage && navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="text-lg font-medium text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/login"
            onClick={handleNavClick}
            className="bg-primary text-white px-8 py-3 rounded text-sm font-medium hover:bg-accent transition-colors mt-4"
          >
            Inloggen
          </Link>
        </div>
      </div>
    </>
  )
}
