"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SalaryCalculator } from "@/components/tools/salary-calculator";
import { ArrowRight, CheckCircle, Shield, Clock, TrendingUp } from "lucide-react";

const trustBadges = [
  { icon: Shield, text: "ISO 27001 Gecertificeerd" },
  { icon: Clock, text: "Altijd op tijd" },
  { icon: TrendingUp, text: "99.9% Uptime" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Split Screen Background */}
      <div className="absolute inset-0 flex">
        <div className="hidden lg:block w-5/12 bg-slate-900 relative">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 -right-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />
          </div>
        </div>
        <div className="flex-1 bg-gradient-to-br from-slate-50 via-white to-primary-50 relative">
          <svg
            className="absolute left-0 top-0 h-full w-24 -translate-x-full lg:translate-x-0 lg:left-auto lg:-right-12 text-slate-900 hidden lg:block"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C50,0 50,100 100,100 L100,0 Z" fill="currentColor" />
          </svg>
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row min-h-screen items-center py-20 lg:py-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-5/12 lg:pr-16 text-white mb-12 lg:mb-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm">Nu ook voor ZZP&apos;ers beschikbaar</span>
            </motion.div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Salarisadministratie{" "}
              <span className="text-accent">uitbesteden?</span>
            </h1>

            <p className="text-lg lg:text-xl text-white/80 mb-8 leading-relaxed">
              Wij regelen het <strong>precies en op tijd</strong>. Professionele 
              loonadministratie voor het MKB in Nederland.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              {trustBadges.map((badge) => (
                <div key={badge.text} className="flex items-center gap-2 text-sm text-white/70">
                  <badge.icon className="w-4 h-4 text-accent" />
                  {badge.text}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button
                  size="xl"
                  className="shimmer-gold text-accent-foreground group"
                >
                  Gratis looncheck aanvragen
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/loonberekening">
                <Button
                  size="xl"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Bereken uw nettoloon
                </Button>
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 pt-8 border-t border-white/10"
            >
              <p className="text-sm text-white/60 mb-4">Vertrouwd door 500+ bedrijven</p>
              <div className="flex items-center gap-6 opacity-50">
                {["TechCorp", "BouwBV", "RetailNL", "ConsultX"].map((company) => (
                  <span key={company} className="text-lg font-bold text-white/40">
                    {company}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="w-full lg:w-7/12 lg:pl-8"
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-2 shadow-2xl">
              <div className="bg-white rounded-2xl p-4 lg:p-6">
                <SalaryCalculator />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 gap-4 mt-6"
            >
              {[
                "Automatische loonberekening",
                "Digitale loonspecificaties",
                "Belastingaangifte",
                "Jaaropgaven",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  {feature}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 lg:hidden">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
