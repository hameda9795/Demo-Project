"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  Star,
  Heart,
  ArrowRight,
  Home,
  Calendar,
  BadgeCheck,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookingWidget } from "@/components/booking/booking-widget";
import { properties, testimonials } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

// Animated counter component
function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

// Property Card Component
function PropertyCard({ property, index }: { property: typeof properties[0]; index: number }) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Link href={`/vakantiehuizen/${property.id}`}>
        <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500">
          {/* Image Container */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Image
              src={property.images[0]}
              alt={property.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Badges */}
            <div className="absolute top-3 left-3 z-20 flex gap-2">
              {property.instantBook && (
                <Badge className="bg-white/90 text-charcoal hover:bg-white">
                  <Sparkles className="w-3 h-3 mr-1 text-terracotta" />
                  Direct boeken
                </Badge>
              )}
            </div>

            {/* Wishlist Button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsLiked(!isLiked);
              }}
              className="absolute top-3 right-3 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors"
            >
              <Heart
                className={`w-5 h-5 transition-all duration-300 ${
                  isLiked ? "fill-terracotta text-terracotta scale-110" : "text-white"
                }`}
              />
            </button>

            {/* Price Badge */}
            <div className="absolute bottom-3 left-3 z-20">
              <div className="glass px-3 py-1.5 rounded-full">
                <span className="font-bold text-charcoal">{formatPrice(property.pricePerNight)}</span>
                <span className="text-xs text-charcoal/70"> /nacht</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <CardContent className="p-4">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-display font-semibold text-lg text-charcoal line-clamp-1 group-hover:text-terracotta transition-colors">
                  {property.title}
                </h3>
                <p className="text-sm text-charcoal/60 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {property.location}
                </p>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <Star className="w-4 h-4 fill-terracotta text-terracotta" />
                <span className="font-medium">{property.rating}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-charcoal/60">
              <span>{property.maxGuests} gasten</span>
              <span>•</span>
              <span>{property.bedrooms} slaapkamers</span>
              <span>•</span>
              <span>{property.bathrooms} badkamers</span>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}

// Steps Section
const steps = [
  {
    icon: Home,
    title: "Vind uw perfecte verblijf",
    description: "Doorzoek ons zorgvuldig geselecteerde aanbod van unieke vakantiehuizen in heel Nederland.",
  },
  {
    icon: Calendar,
    title: "Boek direct online",
    description: "Reserveer eenvoudig met onze veilige boekingsengine. Direct bevestiging, geen gedoe.",
  },
  {
    icon: BadgeCheck,
    title: "Geniet van uw verblijf",
    description: "Ontvang een digitale welkomstgids en geniet van een zorgeloze vakantie met lokale tips.",
  },
];

export default function HomePage() {
  // Guest counter for social proof

  return (
    <main className="min-h-screen">
      {/* Hero Section - Asymmetrical Layout */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-cottage.jpg"
            alt="Gezellig vakantiehuis"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6"
              >
                <Sparkles className="w-4 h-4 text-coral" />
                <span className="text-sm font-medium">Meer dan 2.800 tevreden gasten</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
              >
                Uw thuis{" "}
                <span className="text-gradient">weg van huis</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-white/80 mb-8 max-w-lg leading-relaxed"
              >
                Ontdek unieke vakantiehuizen en B&B&apos;s in Nederland. Van grachtenpanden 
                in Amsterdam tot boshuisjes op de Veluwe.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Button size="lg" className="bg-terracotta hover:bg-terracotta-600 text-lg px-8">
                  Ontdek huizen
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8">
                  Voor eigenaren
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex gap-8 mt-12"
              >
                <div>
                  <p className="text-3xl font-display font-bold">
                    <AnimatedCounter end={2847} suffix="+" />
                  </p>
                  <p className="text-white/60 text-sm">Tevreden gasten</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-bold">
                    <AnimatedCounter end={156} suffix="+" />
                  </p>
                  <p className="text-white/60 text-sm">Unieke huizen</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-bold">
                    <AnimatedCounter end={4} suffix=".9" />
                  </p>
                  <p className="text-white/60 text-sm">Gem. beoordeling</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right - Floating Booking Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="hidden lg:block"
            >
              <div className="relative">
                {/* Decorative blob */}
                <div className="absolute -inset-4 bg-gradient-to-r from-terracotta/20 to-sage/20 rounded-[3rem] blur-2xl" />
                <BookingWidget pricePerNight={185} className="relative" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-terracotta font-medium mb-2 block"
              >
                Uitgelichte accommodaties
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-display text-4xl md:text-5xl font-bold text-charcoal"
              >
                Populaire bestemmingen
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link href="/vakantiehuizen">
                <Button variant="outline" className="mt-4 md:mt-0">
                  Bekijk alles
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Property Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.slice(0, 6).map((property, index) => (
              <PropertyCard key={property.id} property={property} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-terracotta font-medium mb-2 block"
            >
              Hoe het werkt
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-4"
            >
              Drie simpele stappen
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-charcoal/60 text-lg max-w-2xl mx-auto"
            >
              Boeken was nog nooit zo eenvoudig. Wij regelen alles zodat u zich kunt focussen op het genieten.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-terracotta text-white rounded-full flex items-center justify-center font-display font-bold text-xl z-10">
                    {index + 1}
                  </div>
                  
                  {/* Card */}
                  <div className="pt-8 pb-8 px-8 bg-cream rounded-2xl h-full">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                      <Icon className="w-8 h-8 text-terracotta" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-charcoal mb-3">
                      {step.title}
                    </h3>
                    <p className="text-charcoal/60 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-terracotta/30" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* For Owners Section */}
      <section className="py-24 px-6 bg-charcoal relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-terracotta/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sage/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <span className="text-terracotta font-medium mb-4 block">Voor eigenaren</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Verhuur uw woning, wij regelen de rest
              </h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                Laat uw woning werken voor u. Met ons professionele beheer verdient u 
                tot 40% meer dan bij traditionele verhuur, zonder de zorgen.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Professionele fotografie en marketing",
                  "Dynamische prijsoptimalisatie",
                  "24/7 gastenservice",
                  "Schoonmaak en onderhoud geregeld",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-sage/20 flex items-center justify-center">
                      <BadgeCheck className="w-4 h-4 text-sage" />
                    </div>
                    <span className="text-white/80">{item}</span>
                  </motion.div>
                ))}
              </div>

              <Link href="/voor-eigenaren">
                <Button size="lg" className="bg-terracotta hover:bg-terracotta-600">
                  Bereken uw inkomsten
                  <TrendingUp className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>

            {/* Right - Revenue Calculator Preview */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-2xl"
            >
              <h3 className="font-display text-2xl font-bold text-charcoal mb-6">
                Revenue Calculator
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-charcoal/70 mb-2 block">Locatie</label>
                  <select className="w-full p-3 bg-cream rounded-xl border-2 border-transparent focus:border-terracotta focus:outline-none">
                    <option>Amsterdam Centrum</option>
                    <option>Amsterdam Jordaan</option>
                    <option>Utrecht</option>
                    <option>Den Haag</option>
                    <option>Rotterdam</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-charcoal/70 mb-2 block">Type woning</label>
                  <select className="w-full p-3 bg-cream rounded-xl border-2 border-transparent focus:border-terracotta focus:outline-none">
                    <option>Appartement (1-2 slaapkamers)</option>
                    <option>Appartement (3+ slaapkamers)</option>
                    <option>Woonboot</option>
                    <option>Huis</option>
                    <option>Villa</option>
                  </select>
                </div>

                <div className="pt-4 border-t border-cream-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-charcoal/70">Geschatte inkomsten per maand:</span>
                    <span className="font-display text-3xl font-bold text-terracotta">€3.200</span>
                  </div>
                  <p className="text-sm text-charcoal/50">*Op basis van 75% bezettingsgraad</p>
                </div>

                <Button className="w-full">Bereken precieze inkomsten</Button>
              </div>
            </motion.div>
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
              Wat eigenaren zeggen
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold text-charcoal"
            >
              Tevreden eigenaren
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
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-sage" />
                    </div>
                    <div>
                      <p className="font-medium text-charcoal">{testimonial.name}</p>
                      <p className="text-sm text-charcoal/60">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-display font-bold text-sage">{testimonial.revenue}</p>
                    <p className="text-xs text-charcoal/50">{testimonial.per}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
