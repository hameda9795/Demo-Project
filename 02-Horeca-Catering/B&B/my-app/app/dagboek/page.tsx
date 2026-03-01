'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  BookOpen, Calendar, Clock, ArrowLeft, Tag, 
  Printer, Share2, ChefHat, Map, Heart, Leaf,
  User, ChevronRight
} from 'lucide-react'
import { blogPosts } from '@/lib/data'

const categoryConfig: Record<string, { icon: typeof ChefHat; label: string; color: string }> = {
  recipes: { icon: ChefHat, label: 'Recepten', color: 'bg-strawberry-jam' },
  trips: { icon: Map, label: 'Uitstapjes', color: 'bg-fresh-sage' },
  'bnb-life': { icon: Heart, label: 'B&B Life', color: 'bg-honey-gold' },
  seasons: { icon: Leaf, label: 'Seizoenen', color: 'bg-coffee-brown' },
}

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredPosts = selectedCategory
    ? blogPosts.filter((post) => post.category === selectedCategory)
    : blogPosts

  if (selectedPost) {
    return (
      <BlogPostDetail 
        post={selectedPost} 
        onBack={() => setSelectedPost(null)} 
      />
    )
  }

  return (
    <div className="min-h-screen bg-creamy-egg">
      {/* Header */}
      <header className="bg-white border-b border-coffee-brown/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-2 mb-4">
            <Link 
              href="/"
              className="flex items-center gap-2 text-sm text-coffee-brown/60 hover:text-strawberry-jam transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Terug naar home
            </Link>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="w-8 h-8 text-strawberry-jam" />
            <h1 className="font-lora text-3xl sm:text-4xl font-bold text-coffee-brown">
              Ons Dagboek
            </h1>
          </div>
          <p className="text-coffee-brown/70 max-w-2xl">
            Verhalen uit het B&B leven, lokale tips, seizoensrecepten en meer. 
            Geschreven met liefde door Maria en Jan.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === null
                ? 'bg-coffee-brown text-white'
                : 'bg-white text-coffee-brown hover:bg-coffee-brown/5'
            }`}
          >
            Alles
          </button>
          {Object.entries(categoryConfig).map(([key, config]) => {
            const Icon = config.icon
            return (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === key
                    ? `${config.color} text-white`
                    : 'bg-white text-coffee-brown hover:bg-coffee-brown/5'
                }`}
              >
                <Icon className="w-4 h-4" />
                {config.label}
              </button>
            )
          })}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-cozy hover:shadow-cozy-hover transition-all h-full">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee-brown/40 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 ${categoryConfig[post.category].color} text-white text-xs rounded-full`}>
                      {(() => {
                        const Icon = categoryConfig[post.category].icon
                        return <Icon className="w-3 h-3" />
                      })()}
                      {categoryConfig[post.category].label}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-coffee-brown/50 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString('nl-NL', { 
                        day: 'numeric', 
                        month: 'long', 
                        year: 'numeric' 
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </span>
                  </div>

                  <h2 className="font-lora text-xl font-semibold text-coffee-brown mb-2 group-hover:text-strawberry-jam transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-sm text-coffee-brown/70 line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-strawberry-jam text-sm font-medium">
                    Lees meer
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-coffee-brown/60">Geen artikelen gevonden in deze categorie.</p>
          </div>
        )}
      </main>
    </div>
  )
}

// Blog Post Detail Component
function BlogPostDetail({ post, onBack }: { post: typeof blogPosts[0]; onBack: () => void }) {
  const config = categoryConfig[post.category]
  const CategoryIcon = config.icon

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-creamy-egg">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-coffee-brown/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-sm text-coffee-brown/60 hover:text-strawberry-jam transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Terug naar overzicht
            </button>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="p-2 text-coffee-brown/60 hover:text-strawberry-jam transition-colors"
                title="Print dit artikel"
              >
                <Printer className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category & Meta */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <span className={`inline-flex items-center gap-2 px-4 py-2 ${config.color} text-white rounded-full text-sm`}>
            <CategoryIcon className="w-4 h-4" />
            {config.label}
          </span>
          <div className="flex items-center gap-4 text-sm text-coffee-brown/60">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString('nl-NL', { 
                day: 'numeric', 
                month: 'long', 
                year: 'numeric' 
              })}
            </span>
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {post.author}
            </span>
          </div>
        </div>

        {/* Title */}
        <h1 className="font-lora text-3xl sm:text-4xl lg:text-5xl font-bold text-coffee-brown mb-6">
          {post.title}
        </h1>

        {/* Featured Image */}
        <div className="relative h-64 sm:h-80 lg:h-96 rounded-3xl overflow-hidden mb-8">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-cozy">
          <div 
            className="prose prose-lg max-w-none prose-headings:font-lora prose-headings:text-coffee-brown prose-p:text-coffee-brown/80 prose-strong:text-coffee-brown prose-li:text-coffee-brown/80"
            dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }}
          />

          {/* Tags */}
          <div className="mt-8 pt-8 border-t border-coffee-brown/10">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-soft-linen rounded-full text-xs text-coffee-brown/70"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author Box */}
          <div className="mt-8 p-6 bg-creamy-egg rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-strawberry-jam rounded-full flex items-center justify-center text-white">
                <User className="w-6 h-6" />
              </div>
              <div>
                <p className="font-medium text-coffee-brown">Geschreven door {post.author}</p>
                <p className="text-sm text-coffee-brown/60 mt-1">
                  Eigenaar van Het Kleine Paradijs. Passie voor gastvrijheid, goed eten en mooie momenten.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Print-only footer */}
        <div className="hidden print:block mt-8 text-center text-sm text-coffee-brown/50">
          <p>© 2025 Het Kleine Paradijs - {window.location.href}</p>
        </div>
      </article>
    </div>
  )
}
