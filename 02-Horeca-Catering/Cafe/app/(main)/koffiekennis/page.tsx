'use client';

/**
 * Coffee Knowledge Blog Page
 * Swipeable articles and brewing guides
 */

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Clock, ChevronRight, BookOpen, Coffee, Leaf, Sparkles } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/data';
import { BottomSheet } from '@/components/BottomSheet';
import type { BlogPost } from '@/types';

const categories = [
  { id: 'all', label: 'Alles', icon: BookOpen },
  { id: 'brewing', label: 'Brewing', icon: Coffee },
  { id: 'beans', label: 'Bonen', icon: Leaf },
  { id: 'barista', label: 'Barista', icon: Sparkles },
];

export default function CoffeeKnowledgePage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const filteredPosts = activeCategory === 'all' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-espresso-800 to-espresso-900 text-white p-6">
        <h1 className="text-3xl font-extrabold mb-2">Koffie Kennis</h1>
        <p className="text-espresso-200">Leer van onze barista&apos;s</p>
      </div>

      {/* Category Filter */}
      <div className="sticky top-16 z-30 bg-cream-50/95 backdrop-blur-lg border-b border-latte-100 pt-4 pb-2">
        <div className="flex gap-2 px-4 overflow-x-auto scrollbar-hide">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full font-semibold text-sm transition-all ${
                  activeCategory === category.id
                    ? 'bg-amber-500 text-white shadow-soft'
                    : 'bg-white text-espresso-700 border border-latte-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.label}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Featured Article */}
      <div className="px-4 py-6">
        <motion.div
          whileTap={{ scale: 0.98 }}
          onClick={() => setSelectedPost(BLOG_POSTS[0])}
          className="relative h-64 rounded-2xl overflow-hidden shadow-elevated"
        >
          <Image
            src={BLOG_POSTS[0].image}
            alt={BLOG_POSTS[0].title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso-900 via-espresso-900/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <span className="px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded-full mb-2 inline-block">
              Uitgelicht
            </span>
            <h2 className="text-xl font-bold text-white mb-1">{BLOG_POSTS[0].title}</h2>
            <p className="text-espresso-200 text-sm line-clamp-2">{BLOG_POSTS[0].excerpt}</p>
            <div className="flex items-center gap-4 mt-3 text-xs text-espresso-300">
              <span>{BLOG_POSTS[0].author}</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {BLOG_POSTS[0].readTimeMinutes} min lezen
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Articles Grid */}
      <div className="px-4 pb-6">
        <h2 className="text-xl font-bold text-espresso-900 mb-4">Meer artikelen</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredPosts.slice(1).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedPost(post)}
              className="bg-white rounded-2xl overflow-hidden shadow-soft cursor-pointer"
            >
              <div className="relative h-40">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full capitalize">
                    {post.category}
                  </span>
                  <span className="text-xs text-espresso-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTimeMinutes} min
                  </span>
                </div>
                <h3 className="font-bold text-espresso-900 mb-1 line-clamp-2">{post.title}</h3>
                <p className="text-sm text-espresso-500 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-xs text-espresso-400">{post.author}</span>
                  <ChevronRight className="w-5 h-5 text-amber-500" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Brewing Guide Section */}
      <div className="px-4 py-6 bg-espresso-900 text-white">
        <h2 className="text-xl font-bold mb-4">Barista Geheimen</h2>
        <div className="space-y-4">
          {['De perfecte espresso', 'Milk steaming basics', 'Latte art voor beginners'].map((guide, index) => (
            <motion.div
              key={guide}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-4 p-4 bg-espresso-800 rounded-xl cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-xl font-bold">
                {index + 1}
              </div>
              <div className="flex-1">
                <p className="font-semibold">{guide}</p>
                <p className="text-sm text-espresso-300">Video tutorial • 5 min</p>
              </div>
              <ChevronRight className="w-5 h-5 text-espresso-400" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Article Detail Bottom Sheet */}
      <BottomSheet
        isOpen={!!selectedPost}
        onClose={() => setSelectedPost(null)}
        title={selectedPost?.title}
        height="large"
      >
        {selectedPost && (
          <div className="p-4 space-y-4">
            <div className="relative h-48 rounded-2xl overflow-hidden">
              <Image
                src={selectedPost.image}
                alt={selectedPost.title}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="flex items-center gap-4 text-sm text-espresso-500">
              <span>{selectedPost.author}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {selectedPost.readTimeMinutes} minuten leestijd
              </span>
            </div>

            <div className="prose prose-espresso">
              <p className="text-lg font-medium text-espresso-700 mb-4">
                {selectedPost.excerpt}
              </p>
              <p className="text-espresso-600 leading-relaxed">
                {/* Demo content - in real app this would be full article */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do 
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                aliquip ex ea commodo consequat.
              </p>
              <p className="text-espresso-600 leading-relaxed mt-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse 
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                anim id est laborum.
              </p>
            </div>

            <div className="pt-4 border-t border-latte-100">
              <p className="text-sm text-espresso-400">
                Gepubliceerd op {new Date(selectedPost.publishDate).toLocaleDateString('nl-NL')}
              </p>
            </div>
          </div>
        )}
      </BottomSheet>
    </div>
  );
}
