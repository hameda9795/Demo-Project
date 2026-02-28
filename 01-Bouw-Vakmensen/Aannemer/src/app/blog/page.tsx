'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'
import { Footer } from '@/components/layouts/Footer'
import { blogPosts } from '@/data/blog'
import { BlogImage } from '@/components/atoms/BlogImage'
import { ArrowRight, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'

const categoryColors: Record<string, string> = {
  bouwtips: 'bg-blue-100 text-blue-800',
  inspiratie: 'bg-purple-100 text-purple-800',
  duurzaamheid: 'bg-green-100 text-green-800',
}

const categoryLabels: Record<string, string> = {
  bouwtips: 'Bouwtips',
  inspiratie: 'Inspiratie',
  duurzaamheid: 'Duurzaamheid',
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const filteredPosts = activeCategory
    ? blogPosts.filter(p => p.category === activeCategory)
    : blogPosts

  return (
    <MainLayout>
      {/* Hero */}
      <section className="bg-navy py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="text-safety font-semibold text-sm uppercase tracking-wider">Blog</span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mt-2 mb-4">
              Bouwnieuws & Inspiratie
            </h1>
            <p className="text-white/60">
              Tips, trends en inspiratie voor uw bouwproject in Utrecht en omgeving.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setActiveCategory(null)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                activeCategory === null
                  ? 'bg-safety text-white'
                  : 'bg-gray-100 text-concrete hover:bg-gray-200'
              )}
            >
              Alle
            </button>
            {Object.entries(categoryLabels).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                  activeCategory === key
                    ? 'bg-safety text-white'
                    : 'bg-gray-100 text-concrete hover:bg-gray-200'
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/blog/${post.id}/`}>
                  {/* Image */}
                  <div 
                    className="relative h-56 mb-4 rounded-xl overflow-hidden"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)' }}
                  >
                    <BlogImage category={post.category} className="absolute inset-0" />
                    {/* Category Tag */}
                    <div className="absolute top-3 right-3 z-10">
                      <span className={cn(
                        'px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm',
                        categoryColors[post.category]
                      )}>
                        {categoryLabels[post.category]}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex items-center gap-3 text-sm text-concrete mb-2">
                    <span>{new Date(post.date).toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime} min
                    </span>
                  </div>

                  <h2 className="font-heading font-bold text-xl text-navy group-hover:text-safety transition-colors mb-2">
                    {post.title}
                  </h2>

                  <p className="text-concrete line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>

                  <span className="inline-flex items-center gap-2 text-safety font-semibold text-sm">
                    Lees Verder
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </MainLayout>
  )
}
