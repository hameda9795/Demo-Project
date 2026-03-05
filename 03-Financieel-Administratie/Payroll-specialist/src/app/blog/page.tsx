"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Calendar, ArrowRight, BookOpen } from "lucide-react";

const categories = [
  { id: "all", label: "Alles" },
  { id: "belasting", label: "Belasting" },
  { id: "wetgeving", label: "Wetgeving" },
  { id: "tips", label: "Tips" },
];

const articles = [
  {
    id: 1,
    title: "Loonheffingskorting 2024: Wat is er veranderd?",
    excerpt: "De loonheffingskorting is in 2024 aangepast. Lees alles over de nieuwe bedragen en hoe dit uw nettoloon beïnvloedt.",
    category: "belasting",
    date: "15 februari 2024",
    readTime: "5 min",
    featured: true,
  },
  {
    id: 2,
    title: "Vakantiegeld: Wanneer en hoeveel?",
    excerpt: "Het vakantiegeld is een wettelijk recht. Ontdek wanneer het wordt uitbetaald en hoe de berekening werkt.",
    category: "wetgeving",
    date: "10 februari 2024",
    readTime: "4 min",
    featured: false,
  },
  {
    id: 3,
    title: "5 Tips voor het op orde houden van uw salarisadministratie",
    excerpt: "Een goede salarisadministratie bespaart tijd en geld. Met deze tips houdt u alles overzichtelijk.",
    category: "tips",
    date: "5 februari 2024",
    readTime: "6 min",
    featured: false,
  },
  {
    id: 4,
    title: "De nieuwe pensioenwet: Wat betekent dit voor u?",
    excerpt: "De pensioenwet is gewijzigd. Wat verandert er precies en wat betekent dit voor uw pensioenopbouw?",
    category: "wetgeving",
    date: "1 februari 2024",
    readTime: "8 min",
    featured: true,
  },
  {
    id: 5,
    title: "Thuiswerken: Welke kosten zijn aftrekbaar?",
    excerpt: "Werkt u vanuit huis? Dan heeft u recht op bepaalde kostenvergoedingen. Lees hier wat aftrekbaar is.",
    category: "belasting",
    date: "25 januari 2024",
    readTime: "5 min",
    featured: false,
  },
  {
    id: 6,
    title: "Ziekteverzuim registreren: Best practices",
    excerpt: "Het correct registreren van ziekteverzuim is belangrijk. Ontdek de beste manieren om dit aan te pakken.",
    category: "tips",
    date: "20 januari 2024",
    readTime: "4 min",
    featured: false,
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = activeCategory === "all" || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticles = articles.filter((a) => a.featured);

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />Kennisbank
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Alles over salarisadministratie</h1>
          <p className="text-lg text-slate-600">Tips, nieuws en informatie over loonbelasting, wetgeving en HR.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input placeholder="Zoeken in artikelen..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-10" />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <Button key={cat.id} variant={activeCategory === cat.id ? "default" : "outline"} onClick={() => setActiveCategory(cat.id)} size="sm">
                {cat.label}
              </Button>
            ))}
          </div>
        </motion.div>

        {activeCategory === "all" && searchQuery === "" && (
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {featuredArticles.map((article) => (
              <motion.div key={article.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <Link href="#">
                  <Card className="h-full hover:shadow-xl transition-shadow group">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Badge variant="secondary">{categories.find((c) => c.id === article.category)?.label}</Badge>
                        <span className="text-sm text-gray-500">{article.readTime} leestijd</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{article.title}</h3>
                      <p className="text-gray-600 mb-4">{article.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-gray-500"><Calendar className="w-4 h-4" />{article.date}</div>
                        <ArrowRight className="w-5 h-5 text-primary" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(activeCategory === "all" && searchQuery === "" ? filteredArticles.filter((a) => !a.featured) : filteredArticles).map((article, i) => (
            <motion.div key={article.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <Link href="#">
                <Card className="h-full hover:shadow-xl transition-shadow group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">{categories.find((c) => c.id === article.category)?.label}</Badge>
                    </div>
                    <h3 className="font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">{article.title}</h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500"><Calendar className="w-3 h-3" />{article.date}</div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {filteredArticles.length === 0 && <div className="text-center py-12"><p className="text-gray-500">Geen artikelen gevonden. Probeer een andere zoekterm.</p></div>}
      </div>
    </main>
  );
}
