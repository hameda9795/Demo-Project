"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const contactInfo = [
  {
    icon: MapPin,
    label: "Adres",
    value: "Koningssingel 123",
    subValue: "3581 GA Utrecht",
  },
  {
    icon: Phone,
    label: "Telefoon",
    value: "+31 (0)30 123 4567",
    subValue: "Ma t/m vr 8:30 - 17:30",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "info@vandenberg-accountants.nl",
    subValue: "We reageren binnen 24 uur",
  },
  {
    icon: Clock,
    label: "Openingstijden",
    value: "Maandag t/m Vrijdag",
    subValue: "08:30 - 17:30 uur",
  },
];

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo form submission
    alert("Bedankt voor je bericht! We nemen binnen 24 uur contact met je op.");
    setFormState({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section 
      id="contact"
      ref={containerRef}
      className="relative bg-warm-cream overflow-hidden"
    >
      {/* Abstract Background */}
      <motion.div
        className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-warm-beige/50 shape-blob"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />

      <div className="relative z-10 w-full px-6 lg:px-12 py-24 lg:py-32">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-24">
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-caption text-warm-terracotta mb-4 block">
              Contact
            </span>
            <h2 className="text-headline text-warm-charcoal">
              Laten we kennismaken
            </h2>
          </motion.div>
          
          <motion.div
            className="lg:col-span-4 lg:col-start-9 flex items-end"
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-body-large text-warm-taupe">
              Heb je vragen of wil je een vrijblijvend gesprek? 
              We staan voor je klaar.
            </p>
          </motion.div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Contact Info Column */}
          <motion.div
            className="lg:col-span-5 space-y-8"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                className="flex items-start gap-5 group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              >
                <div className="w-12 h-12 bg-warm-beige flex items-center justify-center flex-shrink-0 group-hover:bg-warm-terracotta transition-colors">
                  <item.icon className="w-5 h-5 text-warm-terracotta group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="text-caption text-warm-taupe block mb-1">
                    {item.label}
                  </span>
                  <span className="font-display text-lg text-warm-charcoal block">
                    {item.value}
                  </span>
                  {item.subValue && (
                    <span className="text-body text-warm-taupe">
                      {item.subValue}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Map Placeholder */}
            <motion.div
              className="relative aspect-video bg-warm-beige mt-12 overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-10 h-10 text-warm-terracotta mx-auto mb-3" />
                  <span className="font-display text-warm-charcoal">Koningssingel 123</span>
                  <span className="block text-caption text-warm-taupe">Utrecht</span>
                </div>
              </div>
              {/* Grid overlay */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `linear-gradient(to right, hsl(var(--warm-charcoal)) 1px, transparent 1px),
                                  linear-gradient(to bottom, hsl(var(--warm-charcoal)) 1px, transparent 1px)`,
                backgroundSize: '20px 20px'
              }} />
            </motion.div>
          </motion.div>

          {/* Contact Form Column */}
          <motion.div
            className="lg:col-span-6 lg:col-start-7"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-warm-beige/50 p-8 lg:p-12">
              <h3 className="font-display text-2xl text-warm-charcoal mb-2">
                Stuur ons een bericht
              </h3>
              <p className="text-body text-warm-taupe mb-8">
                Vul het formulier in en we nemen binnen 24 uur contact met je op.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-caption text-warm-taupe">
                      Naam
                    </Label>
                    <Input
                      id="name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Jouw naam"
                      required
                      className="bg-warm-cream border-warm-taupe/20 focus:border-warm-terracotta rounded-none h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-caption text-warm-taupe">
                      E-mail
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="jouw@email.nl"
                      required
                      className="bg-warm-cream border-warm-taupe/20 focus:border-warm-terracotta rounded-none h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-caption text-warm-taupe">
                    Telefoonnummer
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    placeholder="+31 (0)6 12345678"
                    className="bg-warm-cream border-warm-taupe/20 focus:border-warm-terracotta rounded-none h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-caption text-warm-taupe">
                    Bericht
                  </Label>
                  <Textarea
                    id="message"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Waar kunnen we je mee helpen?"
                    required
                    rows={5}
                    className="bg-warm-cream border-warm-taupe/20 focus:border-warm-terracotta rounded-none resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-warm-charcoal hover:bg-warm-terracotta text-warm-cream rounded-none h-14 font-display tracking-wide transition-colors"
                  data-cursor-hover
                >
                  <span>Verstuur bericht</span>
                  <Send className="w-4 h-4 ml-2" />
                </Button>

                <p className="text-xs text-warm-taupe/60 text-center">
                  Door dit formulier te versturen ga je akkoord met onze privacyvoorwaarden.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
