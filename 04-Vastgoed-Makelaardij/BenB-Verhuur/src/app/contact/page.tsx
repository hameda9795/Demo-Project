"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/data";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefoon",
    content: "+31 20 555 0199",
    description: "Ma-Vr 09:00 - 18:00",
  },
  {
    icon: Mail,
    title: "E-mail",
    content: "info@techsolutionsutrecht.nl",
    description: "We reageren binnen 24 uur",
  },
  {
    icon: MapPin,
    title: "Adres",
    content: "Prinsengracht 456",
    description: "1017 KE Amsterdam",
  },
  {
    icon: Clock,
    title: "Openingstijden",
    content: "Ma - Vr: 09:00 - 18:00",
    description: "Za: 10:00 - 14:00",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-cream pt-24 lg:pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-terracotta font-medium mb-2 block">Contact</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Neem contact met ons op
          </h1>
          <p className="text-charcoal/60 max-w-2xl mx-auto">
            Heeft u vragen over een boeking, uw woning of onze diensten? 
            We staan voor u klaar.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card>
              <CardContent className="p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-sage" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-charcoal mb-2">
                      Bericht verstuurd!
                    </h3>
                    <p className="text-charcoal/60">
                      We nemen zo snel mogelijk contact met u op.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          Naam *
                        </label>
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Uw naam"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          E-mail *
                        </label>
                        <Input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="uw@email.nl"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          Telefoon
                        </label>
                        <Input
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+31 6 12345678"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          Onderwerp *
                        </label>
                        <select
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full h-11 px-4 rounded-lg border border-cream-300 bg-white focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
                        >
                          <option value="">Kies een onderwerp</option>
                          <option value="booking">Vraag over boeking</option>
                          <option value="owner">Ik wil mijn woning verhuren</option>
                          <option value="support">Technische support</option>
                          <option value="other">Anders</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        Bericht *
                      </label>
                      <textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={5}
                        className="w-full p-4 rounded-lg border border-cream-300 bg-white focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent resize-none"
                        placeholder="Typ hier uw bericht..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12"
                      isLoading={isSubmitting}
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Verstuur bericht
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/31205550199"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center gap-4 p-6 bg-green-500 text-white rounded-2xl hover:bg-green-600 transition-colors"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <p className="font-medium">Direct antwoord via WhatsApp</p>
                <p className="text-sm text-white/80">Klik om te chatten</p>
              </div>
            </a>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="w-10 h-10 bg-terracotta/10 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5 text-terracotta" />
                      </div>
                      <h3 className="font-medium text-charcoal mb-1">{info.title}</h3>
                      <p className="text-charcoal font-medium">{info.content}</p>
                      <p className="text-sm text-charcoal/60">{info.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Map Placeholder */}
            <div className="relative h-80 bg-cream rounded-2xl overflow-hidden map-placeholder flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-sage mx-auto mb-4" />
                <p className="text-charcoal font-medium">Prinsengracht 456</p>
                <p className="text-charcoal/60">1017 KE Amsterdam</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <span className="text-terracotta font-medium mb-2 block">FAQ</span>
            <h2 className="font-display text-3xl font-bold text-charcoal">
              Veelgestelde vragen
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-2xl border-none shadow-sm px-6"
                >
                  <AccordionTrigger className="text-left font-display font-semibold text-lg py-6 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-charcoal/70 pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
