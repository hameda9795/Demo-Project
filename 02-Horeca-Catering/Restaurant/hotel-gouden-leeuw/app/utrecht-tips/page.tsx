'use client';

/**
 * Blog Page (/utrecht-tips)
 * 
 * Features:
 * - Categories: Weekendjes weg, Zakelijk verblijf, Romantisch, Culinair
 * - Article cards with reading time and share buttons
 * - Related rooms for each article
 * - Search and filter functionality
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  Search, 
  Clock, 
  Share2, 
  ChevronRight,
  Calendar,
  ArrowLeft,
  Heart,
  Briefcase,
  Users,
  Utensils,
  MapPin
} from 'lucide-react';
import { blogPosts } from '@/lib/data';

const categories = [
  { id: 'all', label: 'Alle artikelen', icon: null },
  { id: 'weekend', label: 'Weekendjes weg', icon: Heart },
  { id: 'business', label: 'Zakelijk verblijf', icon: Briefcase },
  { id: 'romantic', label: 'Romantisch', icon: Heart },
  { id: 'culinary', label: 'Culinair', icon: Utensils },
  { id: 'city-guide', label: 'City Guide', icon: MapPin },
];

function BlogCard({ post, index }: { post: typeof blogPosts[0]; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer card-lift"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-gold text-navy text-xs font-medium rounded-full">
            {categories.find(c => c.id === post.category)?.label}
          </span>
        </div>

        {/* Reading Time */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white text-sm">
          <Clock className="w-4 h-4" />
          <span>{post.readingTime} min leestijd</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-4 text-navy/50 text-sm mb-3">
          <span>{post.author}</span>
          <span>•</span>
          <span>{post.publishedAt.toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
        </div>

        <h2 className="font-serif text-xl text-navy font-semibold mb-3 group-hover:text-gold transition-colors line-clamp-2">
          {post.title}
        </h2>

        <p className="text-navy/70 text-sm mb-4 line-clamp-2">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <span 
              key={tag}
              className="px-2 py-1 bg-cream text-navy/70 text-xs rounded"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <button className="flex items-center gap-2 text-navy font-medium text-sm group/btn">
            Lees meer
            <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </button>
          <button className="p-2 text-navy/50 hover:text-gold transition-colors">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-cream pt-24">
      {/* Header */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-gold text-sm mb-4">
              <a href="/" className="hover:underline">Home</a>
              <ChevronRight className="w-4 h-4" />
              <span>Blog</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-white font-semibold mb-4">
              Utrecht Tips & Nieuws
            </h1>
            <p className="text-white/70 max-w-2xl text-lg">
              Ontdek de beste plekken in Utrecht, handige tips voor uw verblijf 
              en het laatste nieuws van Hotel De Gouden Leeuw.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="sticky top-16 z-30 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 lg:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    activeCategory === cat.id
                      ? 'bg-navy text-white'
                      : 'bg-cream text-navy hover:bg-navy/10'
                  }`}
                >
                  {cat.icon && <cat.icon className="w-4 h-4" />}
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-navy/40" />
              <input
                type="text"
                placeholder="Zoeken..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-cream border border-gray-200 rounded-full text-navy placeholder:text-navy/40 focus:border-gold focus:outline-none w-full lg:w-64"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-cream flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-navy/30" />
              </div>
              <h3 className="font-serif text-xl text-navy font-semibold mb-2">
                Geen artikelen gevonden
              </h3>
              <p className="text-navy/60">
                Probeer een andere zoekterm of categorie
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl text-white font-semibold mb-4">
              Blijf op de hoogte
            </h2>
            <p className="text-white/70 mb-8">
              Schrijf u in voor onze nieuwsbrief en ontvang exclusieve aanbiedingen 
              en het laatste nieuws uit Utrecht.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Uw e-mailadres"
                className="flex-1 px-4 py-3 bg-white/10 border border-gold/30 rounded-lg text-white placeholder:text-white/40 focus:border-gold focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-light transition-colors"
              >
                Inschrijven
              </button>
            </form>
            <p className="text-white/40 text-xs mt-4">
              DEMO - Geen echte nieuwsbrief
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-dark border-t border-gold/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <a href="/" className="flex items-center gap-2 text-white hover:text-gold transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Terug naar home
            </a>
            <p className="text-white/40 text-sm">
              © 2025 Hotel De Gouden Leeuw - DEMO
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
