"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Voor kleine ondernemingen tot 10 werknemers",
    price: "12,50",
    period: "per werknemer / maand",
    features: [
      "Loonadministratie",
      "Digitale loonspecificaties",
      "Jaaropgaven",
      "Online werknemersportaal",
      "E-mail support",
    ],
    cta: "Start gratis proefperiode",
    href: "/contact",
    popular: false,
  },
  {
    name: "Business",
    description: "Voor groeiende bedrijven tot 50 werknemers",
    price: "9,95",
    period: "per werknemer / maand",
    features: [
      "Alles van Starter",
      "HR-administratie",
      "Verzuimregistratie",
      "Rapportages & analyse",
      "Telefonische support",
      "API koppelingen",
    ],
    cta: "Start gratis proefperiode",
    href: "/contact",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Voor grote organisaties vanaf 50 werknemers",
    price: "Op aanvraag",
    period: "Maatwerk oplossingen",
    features: [
      "Alles van Business",
      "Dedicated accountmanager",
      "Custom rapportages",
      "Prioriteit support",
      "SLA garantie",
      "On-site training",
    ],
    cta: "Neem contact op",
    href: "/contact",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
          >
            Transparante Prijzen
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
          >
            Kies het pakket dat bij u <span className="gradient-text">past</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            Geen verborgen kosten. Opzeggen kan maandelijks.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}
            >
              <Card
                className={`h-full relative ${
                  plan.popular
                    ? "border-2 border-primary shadow-xl"
                    : "border-0 shadow-lg"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 bg-primary text-white text-sm font-medium px-4 py-1 rounded-full">
                      <Sparkles className="w-4 h-4" />
                      Meest populair
                    </span>
                  </div>
                )}

                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <p className="text-slate-500 text-sm">{plan.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <div className="flex items-baseline gap-1">
                      {plan.price !== "Op aanvraag" && (
                        <span className="text-3xl font-bold text-slate-400">€</span>
                      )}
                      <span className="text-5xl font-bold text-slate-900">
                        {plan.price}
                      </span>
                    </div>
                    <p className="text-slate-500 text-sm mt-1">{plan.period}</p>
                  </div>

                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={plan.href}>
                    <Button
                      className="w-full"
                      variant={plan.popular ? "default" : "outline"}
                      size="lg"
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 text-slate-500"
        >
          <p>
            Alle prijzen zijn exclusief 21% BTW. Eenmalige implementatiekosten
            van €250 voor Starter en Business.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
