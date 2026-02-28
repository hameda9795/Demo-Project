'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, Clock, ArrowRight, Share2, 
  Droplets, Wrench, Lightbulb, HelpCircle,
  Facebook, Linkedin, Twitter, Link as LinkIcon
} from 'lucide-react'
import { Navigation } from '@/components/sections/Navigation'
import { Footer } from '@/components/sections/Footer'
import { cn, readingTime, truncate } from '@/lib/utils'
import Link from 'next/link'

// Blog categories
const categories = [
  { id: 'alle', label: 'Alle artikelen', icon: null },
  { id: 'tips', label: 'Tips & Tricks', icon: Lightbulb },
  { id: 'onderhoud', label: 'Onderhoud', icon: Wrench },
  { id: 'technologie', label: 'Nieuwe technologie', icon: Droplets },
  { id: 'faq', label: 'FAQ', icon: HelpCircle },
]

// Mock blog posts
const blogPosts = [
  {
    id: '1',
    title: 'Hoe voorkomt u lekkages in de winter?',
    excerpt: 'De winter kan hard aankomen op uw leidingen. Ontdek hoe u lekkages kunt voorkomen met deze praktische tips voor het koude seizoen.',
    content: 'Lorem ipsum dolor sit amet...',
    category: 'tips',
    date: '2024-02-20',
    readTime: 5,
    image: 'https://placehold.co/800x400/1e3a8a/ffffff?text=Winter+Tips',
    slug: 'winter-lekkages-voorkomen',
    featured: true,
  },
  {
    id: '2',
    title: 'Het belang van jaarlijks CV onderhoud',
    excerpt: 'Een goed onderhouden CV ketel gaat langer mee en is zuiniger. Lees waarom jaarlijks onderhoud essentieel is.',
    content: 'Lorem ipsum dolor sit amet...',
    category: 'onderhoud',
    date: '2024-02-15',
    readTime: 4,
    image: 'https://placehold.co/800x400/3b82f6/ffffff?text=CV+Onderhoud',
    slug: 'jaarlijks-cv-onderhoud',
    featured: false,
  },
  {
    id: '3',
    title: 'Slimme watermeters: de toekomst?',
    excerpt: 'Slimme watermeters helpen u waterverbruik te monitoren en lekkages vroegtijdig te detecteren.',
    content: 'Lorem ipsum dolor sit amet...',
    category: 'technologie',
    date: '2024-02-10',
    readTime: 6,
    image: 'https://placehold.co/800x400/ea580c/ffffff?text=Slimme+Watermeters',
    slug: 'slimme-watermeters',
    featured: false,
  },
  {
    id: '4',
    title: 'Wat te doen bij een verstopte afvoer?',
    excerpt: 'Een verstopte afvoer is vervelend. Met deze stappen kunt u zelf proberen het probleem op te lossen.',
    content: 'Lorem ipsum dolor sit amet...',
    category: 'faq',
    date: '2024-02-05',
    readTime: 3,
    image: 'https://placehold.co/800x400/1e3a8a/ffffff?text=Verstopte+Afvoer',
    slug: 'verstopte-afvoer',
    featured: false,
  },
  {
    id: '5',
    title: 'Kosten badkamer renovatie: wat kunt u verwachten?',
    excerpt: 'Een complete badkamer renovatie is een investering. We geven een overzicht van de kosten en mogelijkheden.',
    content: 'Lorem ipsum dolor sit amet...',
    category: 'tips',
    date: '2024-01-28',
    readTime: 7,
    image: 'https://placehold.co/800x400/3b82f6/ffffff?text=Badkamer+Kosten',
    slug: 'badkamer-renovatie-kosten',
    featured: false,
  },
  {
    id: '6',
    title: 'Hoe herkent u een lekkage in de muur?',
    excerpt: 'Verborgen lekkages kunnen grote schade veroorzaken. Lees welke signalen op een lekkage kunnen wijzen.',
    content: 'Lorem ipsum dolor sit amet...',
    category: 'tips',
    date: '2024-01-20',
    readTime: 4,
    image: 'https://placehold.co/800x400/ea580c/ffffff?text=Lekkage+Herkennen',
    slug: 'lekkage-muur-herkennen',
    featured: false,
  },
]

/**
 * Knowledge Base / Blog Page
 * Article listing with categories, search, and social sharing
 */
export default function KennisbankPage() {
  const [activeCategory, setActiveCategory] = useState('alle')
  const [searchQuery, setSearchQuery] = useState('')

  const featuredPost = blogPosts.find(post => post.featured)
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'alle' || post.category === activeCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch && !post.featured
  })

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero section */}
      <section className="pt-32 pb-16 bg-deep-navy text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="text-water-blue font-semibold text-sm uppercase tracking-wider">
              Kennisbank
            </span>
            <h1 className="font-outfit text-3xl md:text-4xl font-bold mt-3 mb-4">
              Tips & Expertise
            </h1>
            <p className="text-gray-300">
              Ontdek handige tips, onderhoudsadvies en het laatste nieuws 
              uit de wereld van loodgieterswerk.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and filter section */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-0 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Zoek artikelen..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-xl focus:bg-white focus:ring-2 focus:ring-water-blue focus:outline-none transition-all"
              />
            </div>

            {/* Category filters */}
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto hide-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    'flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-colors',
                    activeCategory === cat.id
                      ? 'bg-water-blue text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  )}
                >
                  {cat.icon && <cat.icon className="w-4 h-4" />}
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-off-white">
        <div className="container mx-auto px-4">
          {/* Featured article */}
          {featuredPost && activeCategory === 'alle' && !searchQuery && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <span className="text-water-blue font-semibold text-sm uppercase tracking-wider mb-4 block">
                Uitgelicht
              </span>
              <Link href={`/kennisbank/${featuredPost.slug}/`}>
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="grid md:grid-cols-2">
                    <div className="h-64 md:h-auto">
                      <img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <span className="bg-water-blue/10 text-water-blue px-3 py-1 rounded-full">
                          {categories.find(c => c.id === featuredPost.category)?.label}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {featuredPost.readTime} min leestijd
                        </span>
                      </div>
                      <h2 className="font-outfit text-2xl font-bold text-deep-navy mb-3">
                        {featuredPost.title}
                      </h2>
                      <p className="text-steel-gray mb-6">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-water-blue font-semibold flex items-center gap-2 group">
                          Lees artikel
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="flex gap-2">
                          <button className="p-2 text-gray-400 hover:text-water-blue transition-colors">
                            <Share2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Article grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                >
                  <Link href={`/kennisbank/${post.slug}/`}>
                    <div className="h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                        <span className="text-water-blue font-medium">
                          {categories.find(c => c.id === post.category)?.label}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime} min
                        </span>
                      </div>
                      <h3 className="font-outfit text-lg font-bold text-deep-navy mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-steel-gray text-sm line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="font-outfit text-xl font-bold text-deep-navy mb-2">
                Geen artikelen gevonden
              </h3>
              <p className="text-steel-gray">
                Probeer een andere zoekterm of categorie
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
