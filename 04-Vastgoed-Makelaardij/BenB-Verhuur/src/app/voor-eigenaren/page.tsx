"use client";

import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Shield,
  Clock,
  Camera,
  MessageCircle,
  CheckCircle,
  Star,
  ArrowRight,
  Calculator,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { testimonials } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

const services = [
  {
    icon: Camera,
    title: "Professionele fotografie",
    description: "Hoogwaardige foto's en video's door ervaren vastgoedfotografen.",
  },
  {
    icon: TrendingUp,
    title: "Dynamische prijsoptimalisatie",
    description: "AI-gestuurde prijsbepaling voor maximale bezetting en omzet.",
  },
  {
    icon: MessageCircle,
    title: "24/7 Gastenservice",
    description: "Professionele communicatie met gasten in meerdere talen.",
  },
  {
    icon: Shield,
    title: "Schadeverzekering",
    description: "Volledige dekking voor schades en aansprakelijkheid.",
  },
  {
    icon: Clock,
    title: "Schoonmaak & Onderhoud",
    description: "Gecertificeerde schoonmaakpartners en snelle reparaties.",
  },
  {
    icon: Home,
    title: "Sleuteluitwisseling",
    description: "Slimme sloten of persoonlijke ontvangst, naar keuze.",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    commission: "20%",
    description: "Voor eigenaren die net beginnen",
    features: [
      "Professionele fotoshoot",
      "Basis marketing",
      "Gastencommunicatie",
      "Maandelijkse uitbetaling",
    ],
  },
  {
    name: "Professional",
    commission: "15%",
    description: "Meest populair bij eigenaren",
    features: [
      "Alles van Starter",
      "Dynamische prijsoptimalisatie",
      "24/7 support",
      "Schoonmaakcoördinatie",
      "Schadeverzekering",
    ],
    popular: true,
  },
  {
    name: "Premium",
    commission: "12%",
    description: "Voor meerdere woningen",
    features: [
      "Alles van Professional",
      "Gepersonaliseerde strategie",
      "Prioriteit support",
      "Interieuradvies",
      "Meerdere woningen korting",
    ],
  },
];

export default function ForOwnersPage() {
  const [propertyValue, setPropertyValue] = useState(150);
  const [location, setLocation] = useState("amsterdam");

  // Calculate estimated revenue
  const baseRate = location === "amsterdam" ? 185 : location === "utrecht" ? 145 : 125;
  const occupancyRate = 0.75;
  const estimatedMonthlyRevenue = Math.round(propertyValue * baseRate * occupancyRate);
  const estimatedYearlyRevenue = estimatedMonthlyRevenue * 12;

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-charcoal overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-terracotta/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sage/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-white"
            >
              <Badge className="bg-sage/20 text-sage mb-6">Voor eigenaren</Badge>
              <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Verdien meer aan uw vakantiewoning
              </h1>
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Wij regelen alles, van marketing tot schoonmaak. U geniet van het 
                extra inkomen zonder zorgen. Gemiddeld verdienen onze eigenaren 
                40% meer dan bij traditionele verhuur.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-terracotta hover:bg-terracotta-600">
                  Start gratis adviesgesprek
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Bereken uw inkomsten
                </Button>
              </div>

              {/* Trust badges */}
              <div className="flex gap-8 mt-12">
                <div className="text-center">
                  <p className="text-3xl font-display font-bold text-terracotta">500+</p>
                  <p className="text-white/60 text-sm">Beheerde woningen</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-display font-bold text-terracotta">€12M+</p>
                  <p className="text-white/60 text-sm">Opgebracht voor eigenaren</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-display font-bold text-terracotta">4.9</p>
                  <p className="text-white/60 text-sm">Gem. beoordeling</p>
                </div>
              </div>
            </motion.div>

            {/* Revenue Calculator */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-terracotta/10 rounded-xl flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-terracotta" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-charcoal">
                    Revenue Calculator
                  </h3>
                  <p className="text-sm text-charcoal/60">
                    Bereken uw geschatte inkomsten
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Location */}
                <div>
                  <label className="text-sm font-medium text-charcoal mb-2 block">Locatie</label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full p-3 bg-cream rounded-xl border-2 border-transparent focus:border-terracotta focus:outline-none"
                  >
                    <option value="amsterdam">Amsterdam</option>
                    <option value="utrecht">Utrecht</option>
                    <option value="den-haag">Den Haag</option>
                    <option value="rotterdam">Rotterdam</option>
                    <option value="veluwe">Veluwe</option>
                    <option value="zeeland">Zeeland</option>
                  </select>
                </div>

                {/* Property Value Slider */}
                <div>
                  <label className="text-sm font-medium text-charcoal mb-2 block">
                    Geschatte dagen verhuurd per maand: {propertyValue}
                  </label>
                  <Slider
                    value={[propertyValue]}
                    onValueChange={(value) => setPropertyValue(value[0])}
                    min={0}
                    max={31}
                    step={1}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-xs text-charcoal/50">
                    <span>0 dagen</span>
                    <span>31 dagen</span>
                  </div>
                </div>

                {/* Result */}
                <div className="p-6 bg-gradient-to-r from-terracotta/10 to-sage/10 rounded-2xl">
                  <p className="text-sm text-charcoal/60 mb-1">Geschatte maandomzet</p>
                  <p className="text-4xl font-display font-bold text-terracotta">
                    {formatPrice(estimatedMonthlyRevenue)}
                  </p>
                  <p className="text-sm text-charcoal/60 mt-2">
                    ofwel {formatPrice(estimatedYearlyRevenue)} per jaar
                  </p>
                </div>

                <Button className="w-full">Ontvang een precieze offerte</Button>

                <p className="text-xs text-charcoal/50 text-center">
                  *Schatting gebaseerd op gemiddelde bezettingsgraad van 75%
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-terracotta font-medium mb-2 block"
            >
              Onze diensten
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl font-bold text-charcoal mb-4"
            >
              Alles onder één dak
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-charcoal/60 max-w-2xl mx-auto"
            >
              Van A tot Z regelen wij uw verhuur. Zo heeft u alleen nog maar 
              het plezier van het extra inkomen.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-14 h-14 bg-terracotta/10 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-terracotta" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-charcoal mb-3">
                    {service.title}
                  </h3>
                  <p className="text-charcoal/60">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-terracotta font-medium mb-2 block"
            >
              Tarieven
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl font-bold text-charcoal mb-4"
            >
              Transparante prijzen
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-charcoal/60 max-w-2xl mx-auto"
            >
              Geen verborgen kosten, geen verrassingen. U betaalt alleen bij succesvolle boekingen.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-3xl p-8 ${
                  plan.popular
                    ? "bg-charcoal text-white shadow-2xl scale-105"
                    : "bg-cream text-charcoal"
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-terracotta">
                    Meest populair
                  </Badge>
                )}
                <div className="text-center mb-8">
                  <h3 className="font-display text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className={`text-sm ${plan.popular ? "text-white/70" : "text-charcoal/60"}`}>
                    {plan.description}
                  </p>
                  <div className="mt-6">
                    <span className="text-5xl font-display font-bold">{plan.commission}</span>
                    <span className={plan.popular ? "text-white/70" : "text-charcoal/60"}>
                      {" "}commissie
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className={`w-5 h-5 ${plan.popular ? "text-sage" : "text-terracotta"}`} />
                      <span className={plan.popular ? "text-white/90" : "text-charcoal/80"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-terracotta hover:bg-terracotta-600"
                      : "bg-charcoal hover:bg-charcoal/90"
                  }`}
                >
                  Kies dit pakket
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-terracotta font-medium mb-2 block"
            >
              Ervaringen
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl font-bold text-charcoal"
            >
              Wat eigenaren zeggen
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-terracotta text-terracotta" />
                  ))}
                </div>
                <p className="text-charcoal/80 mb-6 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-charcoal">{testimonial.name}</p>
                    <p className="text-sm text-charcoal/60">{testimonial.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-display font-bold text-sage">
                      {testimonial.revenue}
                    </p>
                    <p className="text-xs text-charcoal/50">{testimonial.per}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-charcoal">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Klaar om te starten?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Plan een vrijblijvend adviesgesprek en ontdek hoeveel uw woning 
              kan opbrengen met professioneel beheer.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-terracotta hover:bg-terracotta-600">
                Plan gratis adviesgesprek
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Bel: +31 20 555 0199
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
