"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calculator,
  FileText,
  Users,
  Shield,
  Clock,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Salarisadministratie",
    description:
      "Complete verwerking van uw loonadministratie. Van brutonaar-netto berekening tot en met de betaling.",
    features: ["Automatische berekeningen", "Meerdere loonperiodes", "Correctieverwerking"],
    href: "/werkgevers",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: FileText,
    title: "Jaaropgaven & Aangiftes",
    description:
      "Alle verplichte aangiftes en jaaropgaven worden tijdig en correct bij de Belastingdienst ingediend.",
    features: ["Loonaangifte", "Jaaropgaven", "CBS-statistieken"],
    href: "/werkgevers",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Users,
    title: "HR-Ondersteuning",
    description:
      "Ondersteuning bij arbeidscontracten, verzuimbeheer en alle HR-gerelateerde zaken.",
    features: ["Contractbeheer", "Verzuimregistratie", "Personeelsdossiers"],
    href: "/werkgevers",
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: Shield,
    title: "Wet- & Regelgeving",
    description:
      "Altijd up-to-date met de laatste wijzigingen in arbeidsrecht en belastingwetgeving.",
    features: ["CAO updates", "Wet DBA", "Privacy wetgeving (AVG)"],
    href: "/blog",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Clock,
    title: "24/7 Online Portal",
    description:
      "Uw werknemers hebben altijd en overal toegang tot loonspecificaties en verlofgegevens.",
    features: ["Self-service", "Mobiele app", "Veilige toegang"],
    href: "/werknemers",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: TrendingUp,
    title: "Rapportages & Inzicht",
    description:
      "Gedetailleerde rapportages over loonkosten, verzuim en andere HR-statistieken.",
    features: ["Kostenanalyse", "Verzuimrapportage", "Custom dashboards"],
    href: "/werkgevers",
    color: "from-rose-500 to-red-600",
  },
];

export function Services() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
          >
            Onze Diensten
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
          >
            Alles voor uw{" "}
            <span className="gradient-text">salarisadministratie</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            Van loonberekening tot HR-ondersteuning. Wij nemen het volledige
            administratieve proces uit handen.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={service.href}>
                <Card className="group h-full card-3d hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white overflow-hidden">
                  <CardContent className="p-6">
                    {/* Icon */}
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="w-7 h-7" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-slate-500"
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                      <span>Meer informatie</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
