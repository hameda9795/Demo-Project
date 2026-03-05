"use client";

import { useState } from "react";
// import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { blogPosts } from "@/lib/data";

const categories = [
  "Alle categorieën",
  "Amsterdam Tips",
  "Interior Design",
  "Hosting Tips",
  "Nederland",
  "Weekendjes Weg",
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("Alle categorieën");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "Alle categorieën" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // For demo, create more mock posts
  const allPosts = [
    ...blogPosts,
    {
      id: "4",
      title: "De mooiste tulpenvelden van Nederland",
      excerpt: "Ontdek waar u de beste tulpenroutes kunt vinden en wanneer u moet gaan voor de mooiste bloemen.",
      image: "/images/hero-cottage.jpg",
      category: "Nederland",
      date: "2024-02-20",
      readTime: 7,
    },
    {
      id: "5",
      title: "Hoe word ik een Superhost?",
      excerpt: "Tips en tricks om uw waardering te verhogen en meer boekingen binnen te halen.",
      image: "/images/host-welcome.jpg",
      category: "Hosting Tips",
      date: "2024-02-15",
      readTime: 5,
    },
    {
      id: "6",
      title: "Weekendje weg in Utrecht",
      excerpt: "De leukste hotspots, restaurants en activiteiten voor een perfect weekend in Utrecht.",
      image: "/images/modern-bnb-living.jpg",
      category: "Weekendjes Weg",
      date: "2024-02-10",
      readTime: 6,
    },
  ];

  const displayPosts = activeCategory === "Alle categorieën" && !searchQuery ? allPosts : filteredPosts.length > 0 ? filteredPosts : allPosts.filter(post => {
    const matchesCategory = activeCategory === "Alle categorieën" || post.category === activeCategory;
    const matchesSearch = !searchQuery || post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = displayPosts[0];
  const otherPosts = displayPosts.slice(1);

  return (
    <main className="min-h-screen bg-cream pt-24 lg:pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-terracotta font-medium mb-2 block">Reisinspiratie</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Blog & Inspiratie
          </h1>
          <p className="text-charcoal/60 max-w-2xl mx-auto">
            Ontdek de mooiste plekken, handige tips voor hosts en inspiratie voor uw volgende verblijf.
          </p>
        </motion.div>

        {/* Search & Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          {/* Search */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-charcoal/40" />
              <Input
                type="text"
                placeholder="Zoek artikelen..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 rounded-full"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-terracotta text-white"
                    : "bg-white text-charcoal/70 hover:bg-cream-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Post */}
        {featuredPost && !searchQuery && activeCategory === "Alle categorieën" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Link href="#">
              <Card className="overflow-hidden group cursor-pointer">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <div className="absolute inset-0 bg-cream" />
                    <div className="absolute inset-0 flex items-center justify-center text-charcoal/30">
                      <span className="text-6xl">📝</span>
                    </div>
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <Badge className="w-fit mb-4 bg-terracotta/10 text-terracotta">
                      {featuredPost.category}
                    </Badge>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-charcoal mb-4 group-hover:text-terracotta transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-charcoal/60 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-charcoal/50">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredPost.date).toLocaleDateString("nl-NL", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime} min lezen
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </motion.div>
        )}

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href="#">
                <Card className="overflow-hidden group cursor-pointer h-full hover:shadow-xl transition-shadow">
                  <div className="relative h-48 overflow-hidden bg-cream flex items-center justify-center">
                    <span className="text-5xl">📝</span>
                  </div>
                  <CardContent className="p-6">
                    <Badge className="mb-3 bg-terracotta/10 text-terracotta">
                      {post.category}
                    </Badge>
                    <h3 className="font-display text-xl font-bold text-charcoal mb-3 group-hover:text-terracotta transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-charcoal/60 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-charcoal/50">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.date).toLocaleDateString("nl-NL", {
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime} min
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-terracotta group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-charcoal rounded-3xl p-8 md:p-12 text-center">
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              Blijf op de hoogte
            </h2>
            <p className="text-white/70 mb-8 max-w-md mx-auto">
              Schrijf u in voor onze nieuwsbrief en ontvang maandelijks de beste 
              reistips en exclusive aanbiedingen.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Uw e-mailadres"
                className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/40"
              />
              <Button className="h-12 bg-terracotta hover:bg-terracotta-600 whitespace-nowrap">
                Inschrijven
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
