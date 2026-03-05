"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/diensten", label: "Diensten" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F5F0E8] brutal-border-bottom">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#6D5B4F] brutal-border flex items-center justify-center transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                <span className="font-mono font-bold text-[#F5F0E8] text-lg lg:text-xl">BD</span>
              </div>
              <div className="absolute inset-0 w-10 h-10 lg:w-12 lg:h-12 bg-[#C17A5C] brutal-border -z-10 translate-x-1 translate-y-1" />
            </div>
            <div className="hidden sm:block">
              <span className="font-serif text-xl lg:text-2xl font-semibold text-[#2C2420]">
                Bureau Dekker
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-5 py-2 group"
              >
                <span className="font-mono text-sm uppercase tracking-wider text-[#2C2420] group-hover:text-[#C17A5C] transition-colors">
                  {item.label}
                </span>
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C17A5C]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
            ))}
          </nav>

          {/* Login Button + Mobile Menu */}
          <div className="flex items-center gap-3">
            <Link href="/login" className="hidden sm:flex">
              <Button 
                variant="outline" 
                className="brutal-border bg-transparent hover:bg-[#6D5B4F] hover:text-[#F5F0E8] transition-all font-mono text-sm uppercase tracking-wider"
              >
                <User className="w-4 h-4 mr-2" />
                Inloggen
              </Button>
            </Link>
            
            <Link href="/contact" className="hidden md:flex">
              <Button 
                className="bg-[#C17A5C] brutal-border text-white hover:bg-[#6D5B4F] transition-all font-mono text-sm uppercase tracking-wider group"
              >
                Afspraak maken
                <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="brutal-border">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[400px] bg-[#F5F0E8] brutal-border-left p-0">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-6 brutal-border-bottom">
                    <span className="font-serif text-xl font-semibold">Menu</span>
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="brutal-border">
                      <X className="w-5 h-5" />
                    </Button>
                  </div>
                  
                  <nav className="flex flex-col p-6 gap-2">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center justify-between p-4 brutal-border hover:bg-[#E8DFD0] transition-colors group"
                        >
                          <span className="font-mono text-lg uppercase tracking-wider">{item.label}</span>
                          <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </motion.div>
                    ))}
                  </nav>

                  <div className="mt-auto p-6 brutal-border-top space-y-3">
                    <Link href="/login" onClick={() => setIsOpen(false)}>
                      <Button 
                        variant="outline" 
                        className="w-full brutal-border bg-transparent font-mono uppercase tracking-wider"
                      >
                        <User className="w-4 h-4 mr-2" />
                        Inloggen
                      </Button>
                    </Link>
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      <Button 
                        className="w-full bg-[#C17A5C] brutal-border text-white font-mono uppercase tracking-wider"
                      >
                        Afspraak maken
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
