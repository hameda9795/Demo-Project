'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'
import { Footer } from '@/components/layouts/Footer'
import { BlogPost } from '@/types'
import { BlogImage } from '@/components/atoms/BlogImage'
import { ArrowLeft, Clock, Calendar } from 'lucide-react'
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

interface BlogPostContentProps {
  post: BlogPost
  relatedPosts: BlogPost[]
}

export default function BlogPostContent({ post, relatedPosts }: BlogPostContentProps) {
  return (
    <MainLayout>
      {/* Article Header */}
      <section className="bg-navy py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link 
              href="/blog/"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={18} />
              Terug naar blog
            </Link>

            <span className={cn(
              'inline-block px-3 py-1 rounded-full text-sm font-medium mb-4',
              categoryColors[post.category]
            )}>
              {categoryLabels[post.category]}
            </span>

            <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-white/60 text-sm">
              <span className="flex items-center gap-1">
                <Calendar size={16} />
                {new Date(post.date).toLocaleDateString('nl-NL', { 
                  day: 'numeric', 
                  month: 'long', 
                  year: 'numeric' 
                })}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock size={16} />
                {post.readTime} min leestijd
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Featured Image */}
            <div 
              className="aspect-video mb-12 rounded-2xl overflow-hidden"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 92%, 0 100%)' }}
            >
              <BlogImage category={post.category} className="w-full h-full" />
            </div>

            {/* Article Body */}
            <article className="prose prose-lg max-w-none">
              <p className="text-xl text-concrete leading-relaxed mb-8 font-medium">
                {post.excerpt}
              </p>
              
              <div className="text-navy leading-relaxed space-y-4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <h2 className="font-heading font-bold text-2xl text-navy mt-8 mb-4">
                  Waarom dit belangrijk is
                </h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                  veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                  sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </p>
              </div>
            </article>

            {/* Share */}
            <div className="mt-12 pt-8 border-t">
              <h3 className="font-heading font-bold text-navy mb-4">Deel dit artikel</h3>
              <div className="flex gap-3">
                <button className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                  f
                </button>
                <button className="w-10 h-10 bg-sky-500 text-white rounded-lg flex items-center justify-center hover:bg-sky-600 transition-colors">
                  t
                </button>
                <button className="w-10 h-10 bg-blue-700 text-white rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors">
                  in
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <h2 className="font-heading font-bold text-2xl text-navy mb-8">
              Gerelateerde artikelen
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.id} 
                  href={`/blog/${relatedPost.id}/`}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-40 overflow-hidden">
                    <BlogImage category={relatedPost.category} className="w-full h-full" />
                  </div>
                  <div className="p-4">
                    <span className={cn(
                      'inline-block px-2 py-0.5 rounded text-xs font-medium mb-2',
                      categoryColors[relatedPost.category]
                    )}>
                      {categoryLabels[relatedPost.category]}
                    </span>
                    <h3 className="font-heading font-bold text-navy group-hover:text-safety transition-colors">
                      {relatedPost.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </MainLayout>
  )
}
