"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "SalarisPro heeft onze loonadministratie volledig geautomatiseerd. Wat voorheen dagen werk kostte, gebeurt nu in minuten.",
    author: "Peter van Dijk",
    role: "Directeur",
    company: "TechCorp Nederland",
    initials: "PV",
  },
  {
    quote:
      "De klantenservice is uitstekend. Bij vragen krijgen we direct antwoord en de loonspecificaties zijn altijd foutloos.",
    author: "Maria Jansen",
    role: "HR Manager",
    company: "BouwPartners BV",
    initials: "MJ",
  },
  {
    quote:
      "Onze werknemers zijn blij met het online portaal. Ze kunnen zelf hun verlof regelen en specificaties inzien.",
    author: "Ahmed Hassan",
    role: "CFO",
    company: "Retail Solutions",
    initials: "AH",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
          >
            Klantenvertellen
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
          >
            Wat onze klanten <span className="gradient-text">zeggen</span>
          </motion.h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full bg-slate-50 border-0 hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <Quote className="w-10 h-10 text-primary/20 mb-4" />
                  <p className="text-slate-700 mb-6 leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12 bg-primary text-white">
                      <AvatarFallback className="bg-primary text-white font-semibold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-slate-900">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-slate-500">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
