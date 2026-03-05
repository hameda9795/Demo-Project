"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { GlassCard } from "@/components/custom/GlassCard";
import { MagneticButton } from "@/components/custom/MagneticButton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const contactInfo = [
  {
    icon: MapPin,
    title: "Adres",
    content: "Keizersgracht 123, 1015 CJ Amsterdam",
    href: "#",
  },
  {
    icon: Phone,
    title: "Telefoon",
    content: "+31 20 123 4567",
    href: "tel:+31201234567",
  },
  {
    icon: Mail,
    title: "E-mail",
    content: "demo@techsolutionsutrecht.nl",
    href: "mailto:demo@techsolutionsutrecht.nl",
  },
  {
    icon: Clock,
    title: "Openingstijden",
    content: "Ma-Vr: 09:00 - 17:00",
    href: "#",
  },
];

export default function ContactPage() {
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
            Neem <span className="text-gradient">Contact</span> Op
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Heeft u vragen of wilt u een vrijblijvend adviesgesprek? 
            Vul het formulier in of neem direct contact met ons op.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.title}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="block"
                >
                  <GlassCard className="text-center h-full">
                    <div className="w-12 h-12 rounded-xl bg-[#d4af37]/20 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-[#d4af37]" />
                    </div>
                    <h3 className="font-semibold text-[#1e3a5f] dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.content}</p>
                  </GlassCard>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard>
                <h2 className="text-2xl font-bold text-[#1e3a5f] dark:text-white mb-6">
                  Stuur ons een bericht
                </h2>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-[#1e3a5f] dark:text-white">
                        Naam
                      </Label>
                      <Input
                        id="name"
                        placeholder="Uw naam"
                        className="mt-1.5"
                        aria-label="Uw naam"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-[#1e3a5f] dark:text-white">
                        E-mail
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="uw@email.nl"
                        className="mt-1.5"
                        aria-label="Uw e-mailadres"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-[#1e3a5f] dark:text-white">
                      Telefoon (optioneel)
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+31 6 12345678"
                      className="mt-1.5"
                      aria-label="Uw telefoonnummer"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-[#1e3a5f] dark:text-white">
                      Onderwerp
                    </Label>
                    <Input
                      id="subject"
                      placeholder="Waar gaat uw bericht over?"
                      className="mt-1.5"
                      aria-label="Onderwerp van uw bericht"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-[#1e3a5f] dark:text-white">
                      Bericht
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Typ hier uw bericht..."
                      rows={5}
                      className="mt-1.5"
                      aria-label="Uw bericht"
                    />
                  </div>

                  <MagneticButton
                    type="submit"
                    className="w-full justify-center gap-2 bg-[#d4af37] hover:bg-[#e5c158] text-[#1e3a5f] font-semibold"
                  >
                    <Send className="w-4 h-4" />
                    Versturen
                  </MagneticButton>
                </form>
              </GlassCard>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard className="h-full">
                <h2 className="text-2xl font-bold text-[#1e3a5f] dark:text-white mb-6">
                  Locatie
                </h2>
                <div className="aspect-video rounded-xl bg-gradient-to-br from-[#1e3a5f]/10 to-[#d4af37]/10 flex items-center justify-center overflow-hidden">
                  <div className="text-center p-8">
                    <MapPin className="w-16 h-16 text-[#d4af37] mx-auto mb-4" />
                    <p className="text-[#1e3a5f] dark:text-white font-semibold">
                      Keizersgracht 123
                    </p>
                    <p className="text-muted-foreground">
                      1015 CJ Amsterdam
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      (Kaartweergave - afbeelding vereist)
                    </p>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-[#1e3a5f] dark:text-white">Met het OV:</strong>{" "}
                    Tram 2, 11 of 12 halte Keizersgracht
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-[#1e3a5f] dark:text-white">Parkeren:</strong>{" "}
                    Q-Park Europarking op 5 minuten loopafstand
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <GlassCard>
            <h2 className="text-2xl font-bold text-[#1e3a5f] dark:text-white mb-4">
              Liever direct contact?
            </h2>
            <p className="text-muted-foreground mb-6">
              Bel ons tijdens kantooruren of stuur een e-mail. 
              We reageren meestal binnen 24 uur.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+31201234567"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#1e3a5f] text-white font-semibold hover:bg-[#2a4a73] transition-colors"
              >
                <Phone className="w-4 h-4" />
                Bel direct
              </a>
              <a
                href="mailto:demo@techsolutionsutrecht.nl"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-[#1e3a5f]/20 text-[#1e3a5f] dark:text-white font-semibold hover:bg-[#1e3a5f]/10 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Stuur e-mail
              </a>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
