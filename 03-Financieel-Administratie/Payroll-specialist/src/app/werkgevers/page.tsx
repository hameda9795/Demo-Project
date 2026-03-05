"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, ArrowRight, Clock, Shield, Users } from "lucide-react";

const benefits = [
  "Geen zorgen meer over loonberekening",
  "Altijd compliant met wet- en regelgeving",
  "24/7 inzicht in uw loonkosten",
  "Direct contact met een dedicated adviseur",
  "Koppeling met uw boekhoudsoftware",
  "Snelle implementatie en onboarding",
];

const integrations = ["AFAS", "Exact", "Twinfield", "Visma", "ADP", "NMBRS"];

const pricingComparison = [
  { feature: "Loonspecificaties", diy: "U doet het zelf", salarispro: "Wij regelen alles" },
  { feature: "Belastingaangifte", diy: "Maandelijks werk", salarispro: "Automatisch" },
  { feature: "Wetgeving updates", diy: "Zelf bijhouden", salarispro: "Altijd up-to-date" },
  { feature: "Jaaropgaven", diy: "Tijdsintensief", salarispro: "Automatisch gegenereerd" },
  { feature: "Support bij controle", diy: "Geen hulp", salarispro: "Persoonlijke begeleiding" },
];

export default function EmployersPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-primary-900 text-white py-24 pt-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">Voor Werkgevers</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Salarisadministratie <span className="text-accent">uitbesteden</span></h1>
              <p className="text-xl text-white/80 mb-8">Focus op uw core business, terwijl wij zorgen voor foutloze loonberekeningen en tijdige betalingen.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="xl" className="shimmer-gold text-accent-foreground">
                    Gratis adviesgesprek<ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="#prijzen">
                  <Button size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10">Bekijk prijzen</Button>
                </Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
                <div className="relative glass border-white/20 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold mb-6">Waarom SalarisPro?</h3>
                  <ul className="space-y-4">
                    {benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"><Check className="w-4 h-4 text-accent" /></div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[{ value: "15+", label: "Jaar ervaring" }, { value: "500+", label: "Tevreden klanten" }, { value: "25.000+", label: "Werknemers verwerkt" }, { value: "99.9%", label: "Klanttevredenheid" }].map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <p className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</p>
                <p className="text-gray-500 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Onze Diensten</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Compleet ontzorgd op het gebied van payroll</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[{ icon: Clock, title: "Salarisadministratie", description: "Complete verwerking van uw loonadministratie inclusief brutonaar-netto berekeningen, loonbeslagen en correcties." },
              { icon: Shield, title: "Compliance & Rapportages", description: "Alle verplichte aangiftes bij de Belastingdienst en UWV, plus maatwerk rapportages voor inzicht in uw personeelskosten." },
              { icon: Users, title: "HR Ondersteuning", description: "Ondersteuning bij arbeidscontracten, verzuimbeheer, wijzigingen en alle andere HR-gerelateerde vraagstukken." }].map((service, i) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6"><service.icon className="w-7 h-7" /></div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Koppelingen met uw software</h2>
            <p className="text-slate-600">Wij koppelen naadloos met uw bestaande boekhoud- en HR-software</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {integrations.map((integration) => (
              <div key={integration} className="px-6 py-3 bg-slate-100 rounded-xl font-medium text-slate-700 hover:bg-slate-200 transition-colors">{integration}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="prijzen" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Prijzen</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Transparante prijzen, geen verborgen kosten</h2>
          </div>
          <Tabs defaultValue="comparison" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="comparison">Zelf doen vs. SalarisPro</TabsTrigger>
              <TabsTrigger value="calculator">Kosten calculator</TabsTrigger>
            </TabsList>
            <TabsContent value="comparison" className="mt-6">
              <Card>
                <CardContent className="p-0">
                  <div className="grid grid-cols-3 gap-4 p-4 bg-slate-100 font-semibold text-sm">
                    <div>Feature</div><div className="text-center">Zelf doen</div><div className="text-center text-primary">SalarisPro</div>
                  </div>
                  {pricingComparison.map((row, i) => (
                    <div key={i} className="grid grid-cols-3 gap-4 p-4 border-t items-center">
                      <div>{row.feature}</div><div className="text-center text-slate-500">{row.diy}</div><div className="text-center text-primary font-medium">{row.salarispro}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="calculator" className="mt-6">
              <Card>
                <CardHeader><CardTitle>Bereken uw kosten</CardTitle></CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-6">De exacte kosten hangen af van het aantal werknemers en de complexiteit van uw payroll. Vraag een vrijblijvende offerte aan voor een exacte berekening.</p>
                  <Link href="/contact">
                    <Button className="w-full">Vraag een offerte aan<ArrowRight className="w-4 h-4 ml-2" /></Button>
                  </Link>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Klaar om uw payroll uit te besteden?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">Plan een gratis adviesgesprek en ontdek hoe wij u kunnen helpen met uw salarisadministratie.</p>
          <Link href="/contact">
            <Button size="xl" className="shimmer-gold text-accent-foreground">Plan een gesprek<ArrowRight className="w-5 h-5 ml-2" /></Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
