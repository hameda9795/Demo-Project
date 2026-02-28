/**
 * Blog Page - "Dakenkennis"
 * Dakwerken Van der Berg
 * 
 * @description Blog with categories, featured posts, and email capture
 */

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  ArrowRight,
  Tag,
  Mail,
  Download,
  ChevronRight,
  Search,
} from "lucide-react";
import type { BlogPost, BlogCategory } from "@/types";

// Demo blog posts
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Hoe herkent u stormschade aan uw dak?",
    slug: "stormschade-herkennen",
    excerpt: "Na een hevige storm is het belangrijk om uw dak te controleren op beschadigingen. Lees welke signalen op stormschade kunnen duiden.",
    content: "",
    featuredImage: "/images/dakdekker/services/repair-leak.jpg",
    category: "stormschade",
    tags: ["stormschade", "onderhoud", "veiligheid"],
    publishedAt: "2024-02-15",
    author: "Peter van der Berg",
    readingTime: 5,
  },
  {
    id: "2",
    title: "Dakpannen vs. leien: welke kiest u?",
    slug: "dakpannen-vs-leien",
    excerpt: "De keuze tussen dakpannen en leien hangt af van verschillende factoren. Wij zetten de voor- en nadelen voor u op een rij.",
    content: "",
    featuredImage: "/images/dakdekker/services/new-tiles.jpg",
    category: "materialen",
    tags: ["dakpannen", "leien", "renovatie"],
    publishedAt: "2024-02-10",
    author: "Peter van der Berg",
    readingTime: 7,
  },
  {
    id: "3",
    title: "5 tips voor een energiezuinig dak",
    slug: "energiezuinig-dak-tips",
    excerpt: "Een goed geïsoleerd dak kan uw energierekening flink verlagen. Ontdek onze tips voor een energiezuiniger woning.",
    content: "",
    featuredImage: "/images/dakdekker/services/insulation.jpg",
    category: "energiebesparing",
    tags: ["isolatie", "energiebesparing", "duurzaamheid"],
    publishedAt: "2024-02-05",
    author: "Marieke Jansen",
    readingTime: 6,
  },
  {
    id: "4",
    title: "De voorjaarschecklist voor uw dak",
    slug: "voorjaarschecklist-dak",
    excerpt: "Voorjaar is de ideale tijd om uw dak te inspecteren. Met deze checklist controleert u zelf of uw dak klaar is voor het nieuwe seizoen.",
    content: "",
    featuredImage: "/images/dakdekker/services/gutter-cleaning.jpg",
    category: "onderhoudstips",
    tags: ["onderhoud", "voorjaar", "checklist"],
    publishedAt: "2024-01-28",
    author: "Peter van der Berg",
    readingTime: 4,
  },
  {
    id: "5",
    title: "Zonnepanelen op uw dak: wat moet u weten?",
    slug: "zonnepanelen-dak",
    excerpt: "Overweegt u zonnepanelen? Wij vertellen u alles over de voorbereiding, plaatsing en het onderhoud van zonnepanelen op uw dak.",
    content: "",
    featuredImage: "/images/dakdekker/services/solar-roof.jpg",
    category: "energiebesparing",
    tags: ["zonnepanelen", "duurzaamheid", "renovatie"],
    publishedAt: "2024-01-20",
    author: "Marieke Jansen",
    readingTime: 8,
  },
  {
    id: "6",
    title: "Hoe vaak moet u uw dak laten inspecteren?",
    slug: "dakinspectie-frequentie",
    excerpt: "Regelmatige dakinspectie voorkomt verrassingen. Maar hoe vaak is regelmatig? Wij geven u het antwoord.",
    content: "",
    featuredImage: "/images/dakdekker/projects/detail-work.jpg",
    category: "onderhoudstips",
    tags: ["onderhoud", "inspectie", "preventie"],
    publishedAt: "2024-01-15",
    author: "Peter van der Berg",
    readingTime: 5,
  },
];

const categories: { value: BlogCategory; label: string; color: string }[] = [
  { value: "onderhoudstips", label: "Onderhoudstips", color: "bg-green-500" },
  { value: "stormschade", label: "Stormschade", color: "bg-red-500" },
  { value: "materialen", label: "Materialen", color: "bg-amber-500" },
  { value: "energiebesparing", label: "Energiebesparing", color: "bg-sky-blue" },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [email, setEmail] = useState("");

  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  const filteredPosts = otherPosts.filter((post) => {
    const matchesCategory = activeCategory === "all" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription
    alert("Bedankt voor uw aanmelding!");
    setEmail("");
  };

  return (
    <main className="min-h-screen bg-cloud-white">
      {/* Header */}
      <header className="bg-storm-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-safety-orange flex items-center justify-center rounded-lg">
                <span className="font-heading font-bold text-white">VdB</span>
              </div>
              <div className="text-white">
                <div className="font-heading font-bold text-sm">Dakwerken</div>
                <div className="text-white/50 text-xs">Van der Berg</div>
              </div>
            </Link>
            <Link href="/" className="text-white/60 hover:text-white transition-colors">
              ← Terug naar website
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-storm-gray pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center pt-12 pb-16"
          >
            <span className="inline-block px-4 py-2 bg-safety-orange/20 text-safety-orange font-semibold text-sm rounded-full mb-4">
              Kennisbank
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6">
              Daken<span className="text-safety-orange">kennis</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Alles over dakonderhoud, materialen en energiebesparing. 
              Expert advies van onze dakdekkers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="-mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={featuredPost.featuredImage}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 ${
                    categories.find(c => c.value === featuredPost.category)?.color || "bg-storm-gray"
                  } text-white text-sm font-medium rounded-full`}>
                    {categories.find(c => c.value === featuredPost.category)?.label}
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-storm-gray/60 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(featuredPost.publishedAt).toLocaleDateString("nl-NL")}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readingTime} min leestijd
                  </span>
                </div>
                <h2 className="font-heading text-2xl lg:text-3xl font-bold text-storm-gray mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-storm-gray/70 mb-6">
                  {featuredPost.excerpt}
                </p>
                <Link
                  href={`/dakenkennis/${featuredPost.slug}/`}
                  className="inline-flex items-center gap-2 text-safety-orange font-semibold group"
                >
                  Lees meer
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Search */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-heading font-bold text-storm-gray mb-4">Zoeken</h3>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-storm-gray/40" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Zoek artikelen..."
                    className="w-full pl-12 pr-4 py-3 border-2 border-storm-gray/10 rounded-xl focus:border-safety-orange focus:outline-none"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-heading font-bold text-storm-gray mb-4">Categorieën</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setActiveCategory("all")}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-colors ${
                      activeCategory === "all"
                        ? "bg-safety-orange text-white"
                        : "hover:bg-storm-gray/5 text-storm-gray"
                    }`}
                  >
                    <span>Alle artikelen</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => setActiveCategory(cat.value)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-colors ${
                        activeCategory === cat.value
                          ? "bg-safety-orange text-white"
                          : "hover:bg-storm-gray/5 text-storm-gray"
                      }`}
                    >
                      <span>{cat.label}</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Email Capture / Download CTA */}
              <div className="bg-safety-orange rounded-2xl p-6 text-white">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <Download className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">
                  Download onze checklist
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  Ontvang onze gratis dakonderhoudschecklist in uw mailbox.
                </p>
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Uw e-mailadres"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 bg-white text-safety-orange font-semibold rounded-xl hover:bg-white/90 transition-colors"
                  >
                    Download
                  </button>
                </form>
              </div>
            </div>

            {/* Blog Grid */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-6">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-sm overflow-hidden group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        style={{ clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)" }}
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 ${
                          categories.find(c => c.value === post.category)?.color || "bg-storm-gray"
                        } text-white text-xs font-medium rounded-full`}>
                          {categories.find(c => c.value === post.category)?.label}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-storm-gray/60 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.publishedAt).toLocaleDateString("nl-NL")}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readingTime} min
                        </span>
                      </div>
                      <h3 className="font-heading text-xl font-bold text-storm-gray mb-3 group-hover:text-safety-orange transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-storm-gray/70 text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <Link
                        href={`/dakenkennis/${post.slug}/`}
                        className="inline-flex items-center gap-2 text-safety-orange font-semibold text-sm"
                      >
                        Lees meer
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-storm-gray/60">Geen artikelen gevonden.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-storm-gray py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mail className="w-12 h-12 text-safety-orange mx-auto mb-6" />
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Blijf op de hoogte
          </h2>
          <p className="text-white/70 mb-8">
            Schrijf u in voor onze nieuwsbrief en ontvang maandelijks tips en advies over dakonderhoud.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Uw e-mailadres"
              className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-safety-orange"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-safety-orange text-white font-semibold rounded-xl hover:bg-safety-orange/90 transition-colors"
            >
              Inschrijven
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-slate py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © 2024 Dakwerken Van der Berg. Alle rechten voorbehouden.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/" className="text-white/40 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="#contact" className="text-white/40 hover:text-white transition-colors">
                Contact
              </Link>
              <Link href="#" className="text-white/40 hover:text-white transition-colors">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
