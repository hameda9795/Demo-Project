'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { blogPosts } from '@/data/blog'
import { cn } from '@/lib/utils'
import { ArrowRight, Clock } from 'lucide-react'
import { BlogImage } from '@/components/atoms/BlogImage'

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

/**
 * Blog Section
 * Grid layout with featured post (spans 2 columns)
 * Diagonal clip-path on images
 */
export function BlogSection() {
  const featuredPost = blogPosts.find(p => p.featured) || blogPosts[0]
  const regularPosts = blogPosts.filter(p => p.id !== featuredPost.id).slice(0, 4)

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-safety font-semibold text-sm uppercase tracking-wider"
            >
              Blog
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading font-bold text-4xl md:text-5xl text-navy mt-2"
            >
              Bouwnieuws & Tips
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/blog/"
              className="inline-flex items-center gap-2 text-navy font-heading font-bold hover:text-safety transition-colors group"
            >
              Alle Artikelen
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Post */}
          <FeaturedPost post={featuredPost} />

          {/* Regular Posts */}
          <div className="grid sm:grid-cols-2 gap-6">
            {regularPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturedPost({ post }: { post: typeof blogPosts[0] }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative lg:row-span-2"
    >
      <Link href={`/blog/${post.id}/`} className="block h-full">
        <div className="relative h-full min-h-[400px] lg:min-h-full rounded-2xl overflow-hidden">
          {/* Image with Diagonal Clip */}
          <div 
            className="absolute inset-0 overflow-hidden"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
            }}
          >
            <BlogImage category={post.category} className="absolute inset-0" />
          </div>

          {/* Category Tag - Floating Top Right */}
          <div className="absolute top-4 right-4 z-10">
            <span className={cn(
              'px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm',
              categoryColors[post.category]
            )}>
              {categoryLabels[post.category]}
            </span>
          </div>

          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
            {/* Read Time */}
            <div className="flex items-center gap-2 text-white/60 text-sm mb-3">
              <Clock size={14} />
              <span>{post.readTime} min leestijd</span>
            </div>

            <h3 className="font-heading font-bold text-2xl lg:text-3xl text-white mb-3 group-hover:text-safety transition-colors">
              {post.title}
            </h3>
            
            <p className="text-white/70 mb-4 line-clamp-2">
              {post.excerpt}
            </p>

            <span className="inline-flex items-center gap-2 text-safety font-semibold text-sm group-hover:gap-3 transition-all">
              Lees Verder
              <ArrowRight size={16} />
            </span>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-500" />
        </div>
      </Link>
    </motion.article>
  )
}

function BlogCard({ post, index }: { post: typeof blogPosts[0]; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/blog/${post.id}/`} className="block">
        {/* Image with Diagonal Clip */}
        <div 
          className="relative h-40 mb-4 rounded-xl overflow-hidden"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)',
          }}
        >
          <BlogImage category={post.category} className="absolute inset-0" />

          {/* Category Tag */}
          <div className="absolute top-3 right-3 z-10">
            <span className={cn(
              'px-2 py-0.5 rounded-full text-xs font-medium backdrop-blur-sm',
              categoryColors[post.category]
            )}>
              {categoryLabels[post.category]}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex items-center gap-3 text-xs text-concrete mb-2">
          <span>{new Date(post.date).toLocaleDateString('nl-NL', { day: 'numeric', month: 'long' })}</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {post.readTime} min
          </span>
        </div>

        <h3 className="font-heading font-bold text-lg text-navy group-hover:text-safety transition-colors line-clamp-2">
          {post.title}
        </h3>
      </Link>
    </motion.article>
  )
}
