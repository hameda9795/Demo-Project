"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { GlassCard } from "@/components/custom/GlassCard";
import { MagneticButton } from "@/components/custom/MagneticButton";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    description: "Voor startende ondernemers",
    monthlyPrice: 149,
    yearlyPrice: 1490,
    features: [
      "Tot 100 boekingen per maand",
      "BTW-aangifte per kwartaal",
      "Jaarrekening",
      "Telefonisch advies",
      "Online portal toegang",
    ],
    notIncluded: [
      "Loonadministratie",
      "Fiscaal advies",
      "Huisbezoek",
    ],
  },
  {
    name: "Business",
    description: "Voor groeiende bedrijven",
    monthlyPrice: 299,
    yearlyPrice: 2990,
    popular: true,
    features: [
      "Tot 500 boekingen per maand",
      "BTW-aangifte per maand",
      "Jaarrekening",
      "Onbeperkt telefonisch advies",
      "Online portal toegang",
      "Loonadministratie (tot 5 medewerkers)",
      "Kwartierapportages",
    ],
    notIncluded: [
      "Huisbezoek",
    ],
  },
  {
    name: "Enterprise",
    description: "Voor gevestigde ondernemingen",
    monthlyPrice: 599,
    yearlyPrice: 5990,
    features: [
      "Onbeperkt boekingen",
      "BTW-aangifte per maand",
      "Jaarrekening met controle",
      "Priority support 24/7",
      "Online portal toegang",
      "Loonadministratie (onbeperkt)",
      "Maandelijkse rapportages",
      "Fiscaal advies",
      "Huisbezoek (4x per jaar)",
    ],
    notIncluded: [],
  },
];

const addons = [
  { name: "Extra loonadministratie medewerker", price: "€ 25,-/maand" },
  { name: "Aangifte Inkomstenbelasting", price: "€ 195,-" },
  { name: "Bedrijfswaardering", price: "€ 950,-" },
  { name: "Due diligence onderzoek", price: "Op aanvraag" },
];

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-[#1e3a5f] dark:text-white mb-6"
          >
            Transparante <span className="text-gradient">Tarieven</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Kies het pakket dat het beste past bij uw onderneming. 
            Alle prijzen zijn exclusief btw.
          </motion.p>
        </div>
      </section>

      {/* Pricing Toggle */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-medium ${!isYearly ? "text-[#1e3a5f] dark:text-white" : "text-muted-foreground"}`}>
              Maandelijks
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              aria-label="Wissel tussen maandelijkse en jaarlijkse betaling"
            />
            <span className={`text-sm font-medium ${isYearly ? "text-[#1e3a5f] dark:text-white" : "text-muted-foreground"}`}>
              Jaarlijks
            </span>
            {isYearly && (
              <span className="ml-2 px-2 py-1 rounded-full bg-[#d4af37]/20 text-[#d4af37] text-xs font-semibold">
                17% korting
              </span>
            )}
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative ${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-[#d4af37] text-[#1e3a5f] text-sm font-semibold">
                      <Sparkles className="w-4 h-4" />
                      Meest gekozen
                    </div>
                  </div>
                )}
                <GlassCard
                  className={`h-full flex flex-col ${
                    plan.popular ? "border-2 border-[#d4af37]" : ""
                  }`}
                >
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-[#1e3a5f] dark:text-white mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>

                  <div className="text-center mb-6">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold text-[#1e3a5f] dark:text-white">
                        € {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-muted-foreground">
                        /{isYearly ? "jaar" : "maand"}
                      </span>
                    </div>
                    {isYearly && (
                      <p className="text-xs text-[#d4af37] mt-1">
                        bespaar € {(plan.monthlyPrice * 12 - plan.yearlyPrice).toLocaleString("nl-NL")} per jaar
                      </p>
                    )}
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#1e3a5f] dark:text-white mb-3">
                      Inbegrepen:
                    </p>
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-[#d4af37] mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {plan.notIncluded.length > 0 && (
                      <>
                        <p className="text-sm font-medium text-muted-foreground mb-3">
                          Niet inbegrepen:
                        </p>
                        <ul className="space-y-2">
                          {plan.notIncluded.map((feature) => (
                            <li key={feature} className="flex items-start gap-2 text-sm">
                              <span className="w-4 h-4 rounded-full border border-muted-foreground/30 flex-shrink-0" />
                              <span className="text-muted-foreground/60 line-through">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>

                  <div className="mt-6 pt-6 border-t border-[#1e3a5f]/10">
                    <Link href="/contact">
                      <MagneticButton
                        className={`w-full justify-center font-semibold ${
                          plan.popular
                            ? "bg-[#d4af37] hover:bg-[#e5c158] text-[#1e3a5f]"
                            : "bg-[#1e3a5f] hover:bg-[#2a4a73] text-white"
                        }`}
                      >
                        Kies {plan.name}
                      </MagneticButton>
                    </Link>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-[#1e3a5f] dark:text-white mb-4">
              Aanvullende Diensten
            </h2>
            <p className="text-muted-foreground">
              Breid uw pakket uit met extra diensten
            </p>
          </div>

          <GlassCard>
            <div className="space-y-4">
              {addons.map((addon, index) => (
                <div
                  key={addon.name}
                  className={`flex justify-between items-center py-3 ${
                    index !== addons.length - 1 ? "border-b border-[#1e3a5f]/10" : ""
                  }`}
                >
                  <span className="text-[#1e3a5f] dark:text-white">{addon.name}</span>
                  <span className="font-semibold text-[#d4af37]">{addon.price}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>

      {/* FAQ Note */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <GlassCard>
            <h2 className="text-2xl font-bold text-[#1e3a5f] dark:text-white mb-4">
              Heeft u specifieke wensen?
            </h2>
            <p className="text-muted-foreground mb-6">
              Wij stellen graag een maatwerk offerte voor u samen. 
              Neem contact met ons op voor een vrijblijvend gesprek.
            </p>
            <Link href="/contact">
              <MagneticButton className="bg-[#d4af37] hover:bg-[#e5c158] text-[#1e3a5f] font-semibold">
                Vraag maatwerk offerte aan
              </MagneticButton>
            </Link>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
