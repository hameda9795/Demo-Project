"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { GlassCard } from "@/components/custom/GlassCard";
import Link from "next/link";

const categories = ["Alle", "Belastingen", "Ondernemerschap", "Financiën", "Wetgeving"];

const posts = [
  {
    id: 1,
    title: "Belangrijke wijzigingen in de belastingwetgeving 2024",
    excerpt: "Ontdek welke belastingwijzigingen van invloed zijn op uw onderneming dit jaar.",
    category: "Belastingen",
    date: "15 januari 2024",
    readTime: "5 min",
    image: "/images/blog-1.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Hoe optimaliseert u uw kasstroom?",
    excerpt: "Praktische tips voor een gezonde financiële administratie.",
    category: "Financiën",
    date: "10 januari 2024",
    readTime: "4 min",
    image: "/images/blog-2.jpg",
    featured: false,
  },
  {
    id: 3,
    title: " starters: welke rechtsvorm kiezen?",
    excerpt: "Een overzicht van de voor- en nadelen van verschillende rechtsvormen.",
    category: "Ondernemerschap",
    date: "5 januari 2024",
    readTime: "6 min",
    image: "/images/blog-3.jpg",
    featured: false,
  },
  {
    id: 4,
    title: "BTW-verhoging: wat betekent dit voor u?",
    excerpt: "Alle ins and outs over de btw-verhoging en de impact op uw prijzen.",
    category: "Belastingen",
    date: "28 december 2023",
    readTime: "4 min",
    image: "/images/blog-4.jpg",
    featured: false,
  },
  {
    id: 5,
    title: "Digitalisering van de boekhouding",
    excerpt: "De voordelen van een digitale boekhouding voor uw onderneming.",
    category: "Financiën",
    date: "20 december 2023",
    readTime: "5 min",
    image: "/images/blog-5.jpg",
    featured: false,
  },
  {
    id: 6,
    title: "Nieuwe werkkostenregeling 2024",
    excerpt: "Wat verandert er in de werkkostenregeling en hoe past u dit toe?",
    category: "Wetgeving",
    date: "15 december 2023",
    readTime: "7 min",
    image: "/images/blog-6.jpg",
    featured: false,
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("Alle");

  const filteredPosts =
    activeCategory === "Alle"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  const featuredPost = posts.find((p) => p.featured);
  const regularPosts = filteredPosts.filter((p) => !p.featured || activeCategory !== "Alle");

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
            Kennis & <span className="text-gradient">Inzichten</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Blijf op de hoogte van het laatste nieuws op het gebied van belastingen, 
            boekhouding en ondernemerschap.
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-[#1e3a5f] text-white"
                    : "bg-[#1e3a5f]/10 text-[#1e3a5f] dark:text-white/70 hover:bg-[#1e3a5f]/20"
                }`}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {activeCategory === "Alle" && featuredPost && (
        <section className="px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card rounded-2xl overflow-hidden"
            >
              <div className="grid md:grid-cols-2">
                <div className="aspect-video md:aspect-auto bg-gradient-to-br from-[#1e3a5f] to-[#2a4a73] flex items-center justify-center">
                  <Tag className="w-24 h-24 text-[#d4af37]/30" />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#d4af37]/20 text-[#d4af37] text-sm font-medium">
                      {featuredPost.category}
                    </span>
                    <span className="text-sm text-muted-foreground">Uitgelicht</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] dark:text-white mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-[#d4af37] font-semibold hover:gap-3 transition-all"
                  >
                    Lees meer <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Posts Grid - Masonry Style */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
            >
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                  className="break-inside-avoid"
                >
                  <GlassCard hover className="h-full">
                    <div className="aspect-video rounded-xl bg-gradient-to-br from-[#1e3a5f]/10 to-[#d4af37]/10 flex items-center justify-center mb-4">
                      <Tag className="w-12 h-12 text-[#1e3a5f]/30" />
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-0.5 rounded-full bg-[#d4af37]/20 text-[#d4af37] text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#1e3a5f] dark:text-white mb-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </GlassCard>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                Geen artikelen gevonden in deze categorie.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="text-center">
            <h2 className="text-2xl font-bold text-[#1e3a5f] dark:text-white mb-4">
              Blijf op de hoogte
            </h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Schrijf u in voor onze nieuwsbrief en ontvang maandelijks het laatste nieuws 
              over belastingen en ondernemerschap.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Uw e-mailadres"
                className="flex-1 px-4 py-3 rounded-xl border border-[#1e3a5f]/20 bg-white/50 dark:bg-[#0f172a]/50 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                aria-label="E-mailadres voor nieuwsbrief"
              />
              <button className="px-6 py-3 rounded-xl bg-[#d4af37] hover:bg-[#e5c158] text-[#1e3a5f] font-semibold transition-colors">
                Inschrijven
              </button>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
