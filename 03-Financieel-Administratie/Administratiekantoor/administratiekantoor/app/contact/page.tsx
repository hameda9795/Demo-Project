"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  ArrowRight,
  CheckCircle,
  User,
  Building,
  MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefoon",
    value: "+31 (0)30 123 4567",
    href: "tel:+31301234567",
    description: "Bereikbaar tijdens kantooruren"
  },
  {
    icon: Mail,
    title: "E-mail",
    value: "info@bureaudekker.nl",
    href: "mailto:info@bureaudekker.nl",
    description: "We reageren binnen 24 uur"
  },
  {
    icon: MapPin,
    title: "Adres",
    value: "Maliebaan 45, 3581 CD Utrecht",
    href: "https://maps.google.com",
    description: "Gratis parkeren voor de deur"
  },
  {
    icon: Clock,
    title: "Openingstijden",
    value: "Ma - vr: 09:00 - 17:00",
    description: "Weekend op afspraak mogelijk"
  },
];

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-[#2C2420] text-[#F5F0E8] brutal-border-bottom">
        <div className="absolute inset-0 bg-grid-light opacity-20" />
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 bg-[#C17A5C] text-white brutal-border font-mono text-xs uppercase tracking-wider">
              Contact
            </Badge>
            <h1 className="font-serif text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[0.95] mb-6">
              Laten we kennismaken
            </h1>
            <p className="text-xl text-[#B8A99A] max-w-2xl leading-relaxed">
              Heeft u vragen of wilt u een vrijblijvend gesprek? 
              Vul het formulier in of neem direct contact met ons op.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 lg:py-24 bg-[#F5F0E8]">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-32 relative z-10">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-white brutal-border p-6 hover:-translate-y-1 transition-transform"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-[#C17A5C] brutal-border flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-1">{item.title}</h3>
                {item.href ? (
                  <a href={item.href} className="text-[#C17A5C] hover:underline font-medium">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-[#2C2420] font-medium">{item.value}</p>
                )}
                <p className="text-sm text-[#6D5B4F] mt-2">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-mono text-sm uppercase tracking-wider text-[#C17A5C] mb-4 block">Stuur een bericht</span>
              <h2 className="font-serif text-3xl lg:text-4xl font-semibold mb-8">
                Vul het formulier in
              </h2>

              {isSubmitted ? (
                <motion.div 
                  className="bg-[#F5F0E8] brutal-border p-8 text-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-16 h-16 bg-[#C17A5C] brutal-border flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold mb-2">Bedankt voor uw bericht!</h3>
                  <p className="text-[#6D5B4F] mb-6">
                    We hebben uw aanvraag ontvangen en nemen binnen 24 uur contact met u op.
                  </p>
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="brutal-border bg-transparent"
                  >
                    Nieuw bericht versturen
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-mono text-sm uppercase tracking-wider">
                        <User className="w-4 h-4 inline mr-2" />
                        Naam *
                      </Label>
                      <Input 
                        id="name"
                        required
                        className="brutal-border bg-transparent h-12"
                        placeholder="Uw naam"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-mono text-sm uppercase tracking-wider">
                        <Mail className="w-4 h-4 inline mr-2" />
                        E-mail *
                      </Label>
                      <Input 
                        id="email"
                        type="email"
                        required
                        className="brutal-border bg-transparent h-12"
                        placeholder="uw@email.nl"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-mono text-sm uppercase tracking-wider">
                        <Phone className="w-4 h-4 inline mr-2" />
                        Telefoon
                      </Label>
                      <Input 
                        id="phone"
                        type="tel"
                        className="brutal-border bg-transparent h-12"
                        placeholder="+31 (0)6 12345678"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="font-mono text-sm uppercase tracking-wider">
                        <Building className="w-4 h-4 inline mr-2" />
                        Bedrijfsnaam
                      </Label>
                      <Input 
                        id="company"
                        className="brutal-border bg-transparent h-12"
                        placeholder="Uw bedrijf"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="font-mono text-sm uppercase tracking-wider">
                      <MessageSquare className="w-4 h-4 inline mr-2" />
                      Onderwerp *
                    </Label>
                    <Input 
                      id="subject"
                      required
                      className="brutal-border bg-transparent h-12"
                      placeholder="Waar gaat uw bericht over?"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-mono text-sm uppercase tracking-wider">
                      Bericht *
                    </Label>
                    <Textarea 
                      id="message"
                      required
                      rows={6}
                      className="brutal-border bg-transparent resize-none"
                      placeholder="Schrijf hier uw bericht..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-[#2C2420] brutal-border text-white hover:bg-[#C17A5C] transition-all font-mono uppercase tracking-wider h-14"
                  >
                    Verstuur bericht
                    <Send className="w-4 h-4 ml-2" />
                  </Button>

                  <p className="text-xs text-[#6D5B4F] text-center">
                    Door dit formulier te versturen gaat u akkoord met onze{" "}
                    <Link href="#" className="underline hover:text-[#C17A5C]">privacyvoorwaarden</Link>.
                  </p>
                </form>
              )}
            </motion.div>

            {/* Map / Location Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-mono text-sm uppercase tracking-wider text-[#C17A5C] mb-4 block">Locatie</span>
              <h2 className="font-serif text-3xl lg:text-4xl font-semibold mb-8">
                Bezoek ons kantoor
              </h2>

              {/* Map placeholder */}
              <div className="relative bg-[#E8DFD0] brutal-border aspect-[4/3] mb-8 overflow-hidden">
                <div className="absolute inset-0 bg-grid-light opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 mx-auto mb-4 bg-[#C17A5C] brutal-border flex items-center justify-center">
                      <MapPin className="w-10 h-10 text-white" />
                    </div>
                    <p className="font-serif text-xl text-[#2C2420]">Maliebaan 45</p>
                    <p className="font-mono text-sm text-[#6D5B4F]">3581 CD Utrecht</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#F5F0E8] brutal-border p-6">
                <h3 className="font-serif text-xl font-semibold mb-4">Routebeschrijving</h3>
                <div className="space-y-4 text-[#6D5B4F]">
                  <p>
                    <strong className="text-[#2C2420]">Met de auto:</strong><br />
                    Vanaf de A12, afslag Utrecht-Centrum. Volg de borden naar het centrum. 
                    Gratis parkeergelegenheid beschikbaar voor het kantoor.
                  </p>
                  <p>
                    <strong className="text-[#2C2420]">Met het openbaar vervoer:</strong><br />
                    Bus 4, 8 of 50, halte Maliebaan. Vanaf Utrecht Centraal is het 10 minuten lopen.
                  </p>
                </div>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 font-mono text-sm uppercase tracking-wider text-[#C17A5C] hover:underline"
                >
                  Open in Google Maps
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 lg:py-32 bg-[#E8DFD0]">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-16">
            <span className="font-mono text-sm uppercase tracking-wider text-[#C17A5C] mb-4 block">Veelgestelde vragen</span>
            <h2 className="font-serif text-4xl lg:text-5xl font-semibold">Snel antwoord op uw vragen</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: "Wat kost een administratiekantoor?",
                a: "De kosten zijn afhankelijk van de omvang van uw administratie. We maken graag een vrijblijvende offerte op maat."
              },
              {
                q: "Kan ik online mijn administratie inzien?",
                a: "Ja, onze klantenportal geeft u 24/7 toegang tot al uw documenten en financiële overzichten."
              },
              {
                q: "Hoe snel kan ik bij jullie terecht?",
                a: "We streven ernaar om binnen 1-2 werkdagen een kennismakingsgesprek in te plannen."
              },
              {
                q: "Werken jullie ook met startende ondernemers?",
                a: "Absoluut! We begeleiden veel startende ondernemers vanaf de eerste dag van hun onderneming."
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white brutal-border p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="font-serif text-lg font-semibold mb-2">{faq.q}</h3>
                <p className="text-[#6D5B4F] text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
