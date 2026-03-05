"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Award, Users, Clock, Heart } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Persoonlijk",
    description: "Geen klant is hetzelfde. Wij nemen de tijd om jouw situatie te begrijpen.",
  },
  {
    icon: Award,
    title: "Kwaliteit",
    description: "Gecertificeerde accountants met jarenlange ervaring in diverse sectoren.",
  },
  {
    icon: Clock,
    title: "Beschikbaar",
    description: "Snelle reactie op vragen. Wij staan voor je klaar wanneer je ons nodig hebt.",
  },
  {
    icon: Users,
    title: "Partnerschap",
    description: "Wij groeien met je mee. Van start-up tot gevestigd bedrijf.",
  },
];

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section 
      id="over-ons"
      ref={containerRef}
      className="relative bg-warm-beige overflow-hidden"
    >
      {/* Abstract Background Elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-32 bg-warm-cream"
        style={{ 
          clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 100%)" 
        }}
      />
      
      <div className="relative z-10 w-full px-6 lg:px-12 pt-32 lg:pt-48 pb-24 lg:pb-32">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column - Sticky Title */}
          <motion.div 
            className="lg:col-span-4 lg:sticky lg:top-32"
            style={{ y: textY }}
          >
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-caption text-warm-terracotta mb-4 block">
                Over ons
              </span>
              <h2 className="text-headline text-warm-charcoal mb-6">
                Een kantoor met karakter
              </h2>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-body-large text-warm-taupe">
                Van den Berg Accountants is opgericht in 1987 en sindsdien uitgegroeid 
                tot een vertrouwd adres voor ondernemers in heel Nederland.
              </p>
              <p className="text-body text-warm-taupe">
                Wij combineren traditionele vakmanschap met moderne technologie. 
                Onze aanpak is persoonlijk, direct en altijd gericht op jouw succes.
              </p>
            </motion.div>
          </motion.div>

          {/* Middle Column - Abstract Visual */}
          <motion.div 
            className="lg:col-span-4 lg:col-start-6"
            style={{ y: imageY }}
          >
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Abstract Composition */}
              <div className="relative aspect-[3/4] bg-warm-cream overflow-hidden">
                {/* Geometric Shapes */}
                <motion.div
                  className="absolute top-0 right-0 w-3/4 h-1/2 bg-warm-terracotta/20"
                  initial={{ x: 100 }}
                  animate={isInView ? { x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-warm-charcoal"
                  initial={{ y: 100 }}
                  animate={isInView ? { y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
                <motion.div
                  className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border-4 border-warm-terracotta"
                  initial={{ scale: 0, rotate: -45 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
                
                {/* Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <span className="font-display text-[8rem] lg:text-[10rem] leading-none text-warm-cream/20">
                      37
                    </span>
                    <span className="block text-caption text-warm-cream mt-4">
                      Jaar ervaring
                    </span>
                  </motion.div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-warm-terracotta text-white p-6"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
              >
                <span className="font-display text-3xl font-medium">AA</span>
                <span className="block text-xs mt-1">Gecertificeerd</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Values */}
          <div className="lg:col-span-3 lg:col-start-10 space-y-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="group"
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-warm-cream flex items-center justify-center flex-shrink-0 group-hover:bg-warm-terracotta transition-colors">
                    <value.icon className="w-5 h-5 text-warm-terracotta group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg text-warm-charcoal mb-1">
                      {value.title}
                    </h4>
                    <p className="text-body text-warm-taupe">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Stats Row */}
        <motion.div
          className="mt-24 lg:mt-32 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {[
            { number: "850+", label: "Actieve klanten" },
            { number: "12", label: "Medewerkers" },
            { number: "25+", label: "Branches" },
            { number: "99%", label: "Tevredenheid" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center lg:text-left py-6 border-t-2 border-warm-terracotta"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <span className="font-display text-4xl lg:text-5xl text-warm-charcoal block mb-2">
                {stat.number}
              </span>
              <span className="text-caption text-warm-taupe">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
