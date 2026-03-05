"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const contactInfo = [
  { icon: Mail, title: "E-mail", content: "info@techsolutionsutrecht.nl", href: "mailto:info@techsolutionsutrecht.nl" },
  { icon: Phone, title: "Telefoon", content: "+31 30 987 6543", href: "tel:+31309876543" },
  { icon: MapPin, title: "Adres", content: "Croeselaan 125, 3521 BC Utrecht", href: "#" },
  { icon: Clock, title: "Openingstijden", content: "Ma-Vr: 08:30 - 17:30", href: "#" },
];

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Contact</span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Neem contact met ons op</h1>
          <p className="text-lg text-slate-600">Heeft u vragen over onze diensten of wilt u een vrijblijvend adviesgesprek? Wij helpen u graag.</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="lg:col-span-2">
            <Card>
              <CardHeader><CardTitle>Stuur ons een bericht</CardTitle></CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"><CheckCircle className="w-8 h-8 text-green-600" /></div>
                    <h3 className="text-xl font-bold mb-2">Bedankt!</h3>
                    <p className="text-gray-600">We hebben uw bericht ontvangen en nemen zo snel mogelijk contact met u op.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2"><Label htmlFor="name">Naam *</Label><Input id="name" required /></div>
                      <div className="space-y-2"><Label htmlFor="company">Bedrijf</Label><Input id="company" /></div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2"><Label htmlFor="email">E-mail *</Label><Input id="email" type="email" required /></div>
                      <div className="space-y-2"><Label htmlFor="phone">Telefoon</Label><Input id="phone" type="tel" /></div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="department">Afdeling</Label>
                      <Select>
                        <SelectTrigger><SelectValue placeholder="Selecteer een onderwerp" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="payroll">Payroll vraag</SelectItem>
                          <SelectItem value="technical">Technische support</SelectItem>
                          <SelectItem value="sales">Sales</SelectItem>
                          <SelectItem value="other">Overig</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2"><Label htmlFor="message">Bericht *</Label><Textarea id="message" rows={5} required placeholder="Vertel ons waarmee we u kunnen helpen..." /></div>
                    <Button type="submit" size="lg" className="w-full"><Send className="w-4 h-4 mr-2" />Versturen</Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="space-y-4">
            {contactInfo.map((info) => (
              <Card key={info.title} className="glass border-white/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <a href={info.href} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0"><info.icon className="w-6 h-6" /></div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">{info.title}</h4>
                      <p className="text-slate-600">{info.content}</p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}
            <Card className="overflow-hidden">
              <div className="h-48 bg-slate-200 flex items-center justify-center">
                <div className="text-center text-slate-500"><MapPin className="w-8 h-8 mx-auto mb-2" /><p className="text-sm">Croeselaan 125</p><p className="text-sm">3521 BC Utrecht</p></div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
