"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PayslipViewer } from "@/components/tools/payslip-viewer";
import { Smartphone, FileText, Calendar, Shield, HelpCircle, LogIn } from "lucide-react";

const features = [
  { icon: Smartphone, title: "Altijd toegang", description: "Bekijk uw loonspecificaties waar en wanneer u wilt, via computer, tablet of smartphone." },
  { icon: FileText, title: "Digitale loonspecificaties", description: "Geen papier meer. Alle specificaties worden veilig digitaal opgeslagen en zijn altijd terug te vinden." },
  { icon: Calendar, title: "Verlof beheren", description: "Zie uw verlofsaldo, vraag eenvoudig verlof aan en bekijk de status van uw aanvragen." },
  { icon: Shield, title: "Veilig & vertrouwd", description: "Uw gegevens zijn beveiligd met bank-grade encryptie en two-factor authenticatie." },
];

const faqs = [
  { question: "Hoe log ik in op het werknemersportaal?", answer: "U kunt inloggen met uw e-mailadres en wachtwoord. Bij uw eerste bezoek ontvangt u een uitnodiging met instructies om uw account te activeren." },
  { question: "Wanneer kan ik mijn loonspecificatie inzien?", answer: "Loonspecificaties zijn beschikbaar zodra uw salaris is verwerkt, meestal rond de 20e van de maand. U ontvangt een melding per e-mail." },
  { question: "Kan ik mijn jaaropgave downloaden?", answer: "Ja, uw jaaropgave is beschikbaar vanaf begin januari. U kunt deze downloaden als PDF of printen voor uw administratie." },
  { question: "Hoe vraag ik verlof aan?", answer: "Log in op uw account, ga naar 'Verlof' en selecteer de gewenste data. Uw leidinggevende ontvangt automatisch een melding." },
  { question: "Wat moet ik doen als ik een fout zie in mijn loonspecificatie?", answer: "Neem direct contact op met uw HR-afdeling of stuur een bericht via het contactformulier in het portaal. Wij zorgen voor een snelle correctie." },
  { question: "Is mijn data veilig?", answer: "Absoluut. We gebruiken dezelfde beveiligingstechnieken als banken, inclusief SSL-encryptie en two-factor authenticatie." },
];

export default function EmployeesPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-primary to-primary-800 text-white py-24 pt-32">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">Werknemersportaal</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Uw loongegevens, altijd binnen handbereik</h1>
            <p className="text-xl text-white/80 mb-8">Bekijk uw loonspecificaties, vraag verlof aan en beheer uw persoonlijke gegevens via ons moderne online portaal.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/login">
                <Button size="xl" className="shimmer-gold text-accent-foreground"><LogIn className="w-5 h-5 mr-2" />Inloggen</Button>
              </Link>
              <Link href="#hoe-werkt-het">
                <Button size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10"><HelpCircle className="w-5 h-5 mr-2" />Hoe werkt het?</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Voordelen</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Wat kunt u met ons portaal?</motion.h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6"><feature.icon className="w-7 h-7" /></div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="hoe-werkt-het" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Een voorbeeld van uw loonspecificatie</motion.h2>
            <p className="text-slate-600">Zo ziet uw digitale loonspecificatie eruit. Alle bedragen zijn duidelijk vermeld en uitgelegd.</p>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto">
            <PayslipViewer />
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Veelgestelde vragen</motion.h2>
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-slate-600">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Direct aan de slag?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">Log in op uw persoonlijke dashboard om uw loonspecificaties te bekijken en verlof aan te vragen.</p>
            <Link href="/login">
              <Button size="xl" className="shimmer-gold text-accent-foreground"><LogIn className="w-5 h-5 mr-2" />Inloggen op mijn account</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
