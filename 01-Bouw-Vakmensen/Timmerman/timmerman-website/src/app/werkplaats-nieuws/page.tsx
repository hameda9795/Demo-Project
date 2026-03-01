/**
 * Blog Page (/werkplaats-nieuws)
 * Van den Berg Timmerwerken
 * 
 * Workshop News - Blog section
 * - Categories: Onderhoudstips, Houtsoorten, Restauratie, Duurzaamheid
 * - Article cards with images
 * - Downloadable PDF resources
 * - Related articles
 * 
 * DEMO - All content is fictional
 */

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Download, 
  Tag,
  ChevronLeft,
  AlertTriangle
} from "lucide-react";
import { BLOG_POSTS } from "@/lib/data";
import { BlogPost } from "@/types";

type Category = "all" | "onderhoud" | "houtsoorten" | "restauratie" | "duurzaamheid";

const CATEGORIES: { id: Category; label: string; color: string }[] = [
  { id: "all", label: "Alle artikelen", color: "#8B5A2B" },
  { id: "onderhoud", label: "Onderhoudstips", color: "#D4AF37" },
  { id: "houtsoorten", label: "Houtsoorten", color: "#5D4037" },
  { id: "restauratie", label: "Restauratie", color: "#4A5568" },
  { id: "duurzaamheid", label: "Duurzaamheid", color: "#22C55E" },
];

/**
 * Article Card Component
 */
function ArticleCard({ post, index }: { post: BlogPost; index: number }) {
  const category = CATEGORIES.find(c => c.id === post.category);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow card-lift"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span 
            className="px-3 py-1 text-xs font-medium text-white rounded-full"
            style={{ backgroundColor: category?.color }}
          >
            {category?.label}
          </span>
        </div>

        {/* Download badge if available */}
        {post.download && (
          <div className="absolute top-4 right-4">
            <span className="flex items-center gap-1 px-3 py-1 text-xs font-medium bg-[#3E2723] text-white rounded-full">
              <Download className="w-3 h-3" />
              PDF
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-[#4A5568] mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {new Date(post.date).toLocaleDateString("nl-NL", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {post.readTime} min
          </span>
        </div>

        {/* Title */}
        <h3 className="font-playfair text-xl font-bold text-[#3E2723] mb-2 line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-[#4A5568] text-sm mb-4 line-clamp-2">
          {post.excerpt}
        </p>

        {/* Read more / Download */}
        {post.download ? (
          <a
            href={post.download.url}
            className="inline-flex items-center gap-2 text-[#8B5A2B] font-medium hover:text-[#6B4423] transition-colors"
          >
            <Download className="w-4 h-4" />
            {post.download.name}
          </a>
        ) : (
          <button className="inline-flex items-center gap-2 text-[#8B5A2B] font-medium hover:text-[#6B4423] transition-colors group">
            Lees meer
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        )}
      </div>
    </motion.article>
  );
}

/**
 * Featured Article Component
 */
function FeaturedArticle({ post }: { post: BlogPost }) {
  const category = CATEGORIES.find(c => c.id === post.category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative bg-[#3E2723] rounded-3xl overflow-hidden"
    >
      <div className="grid lg:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-[4/3] lg:aspect-auto">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Content */}
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <span 
            className="inline-block self-start px-4 py-1 text-sm font-medium text-white rounded-full mb-4"
            style={{ backgroundColor: category?.color }}
          >
            {category?.label}
          </span>

          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-[#F5F5DC] mb-4">
            {post.title}
          </h2>

          <p className="text-[#F5F5DC]/70 text-lg mb-6">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-4 text-sm text-[#F5F5DC]/50 mb-6">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString("nl-NL")}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime} min leestijd
            </span>
          </div>

          {post.download ? (
            <a
              href={post.download.url}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4AF37] text-[#3E2723] font-semibold rounded-lg hover:bg-[#E5C158] transition-colors self-start"
            >
              <Download className="w-5 h-5" />
              Download {post.download.name}
            </a>
          ) : (
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4AF37] text-[#3E2723] font-semibold rounded-lg hover:bg-[#E5C158] transition-colors self-start">
              Lees volledig artikel
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredPosts = activeCategory === "all"
    ? BLOG_POSTS
    : BLOG_POSTS.filter(p => p.category === activeCategory);

  const featuredPost = BLOG_POSTS[0];
  const regularPosts = filteredPosts.filter(p => p.id !== featuredPost.id);

  return (
    <div className="min-h-screen bg-[#F5F5DC] pt-24 pb-24">
      {/* Header */}
      <div className="section-container mb-12">
        <div className="section-inner">
          {/* Back to home */}
          <a 
            href="/"
            className="inline-flex items-center gap-2 text-[#4A5568] hover:text-[#8B5A2B] mb-8 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Terug naar home
          </a>

          {/* Page Title */}
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-sm font-medium text-[#8B5A2B] tracking-wider uppercase mb-4"
            >
              Kennisbank
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-playfair text-4xl md:text-5xl font-bold text-[#3E2723] mb-4 dovetail-underline inline-block"
            >
              Werkplaats Nieuws
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-[#4A5568] max-w-2xl mx-auto"
            >
              Tips, technieken en inspiratie uit onze werkplaats. Van onderhoud tot houtsoorten.
            </motion.p>
          </div>

          {/* Demo Warning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12 p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-center gap-4"
          >
            <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" />
            <p className="text-amber-800">
              <strong>DEMO WEBSITE:</strong> Alle artikelen zijn voorbeelden voor demonstratiedoeleinden.
            </p>
          </motion.div>

          {/* Featured Article */}
          <div className="mb-16">
            <FeaturedArticle post={featuredPost} />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
                  activeCategory === category.id
                    ? "bg-[#8B5A2B] text-white"
                    : "bg-white text-[#4A5568] hover:bg-[#8B5A2B]/10"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <ArticleCard key={post.id} post={post} index={index} />
            ))}
          </div>

          {/* Empty State */}
          {regularPosts.length === 0 && (
            <div className="text-center py-16">
              <Tag className="w-16 h-16 mx-auto mb-4 text-[#4A5568]/30" />
              <h3 className="font-playfair text-xl font-bold text-[#3E2723] mb-2">
                Geen artikelen gevonden
              </h3>
              <p className="text-[#4A5568]">
                Probeer een andere categorie
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
