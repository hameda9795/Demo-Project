'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  Calendar, Clock, ArrowRight, Download,
  Lightbulb, Wrench, TrendingUp, Home
} from 'lucide-react'

const categories = [
  { id: 'kleuradvies', label: 'Kleuradvies', icon: Lightbulb, color: 'bg-purple-100 text-purple-700' },
  { id: 'onderhoud', label: 'Onderhoud', icon: Wrench, color: 'bg-teal-100 text-teal-700' },
  { id: 'trends', label: 'Trends', icon: TrendingUp, color: 'bg-coral-100 text-coral-700' },
  { id: 'diy', label: 'DIY Tips', icon: Home, color: 'bg-blue-100 text-blue-700' },
]

const articles = [
  {
    id: 1,
    title: 'Kleur van het jaar 2024: Brave Ground',
    excerpt: 'Ontdek waarom dit warme, aardse neutrale de perfecte basis is voor elk interieur.',
    category: 'trends',
    image: '/images/schilder/hero/color-wall.jpg',
    date: '15 januari 2024',
    readTime: '5 min',
    featured: true,
  },
  {
    id: 2,
    title: 'Hoe bereken ik mijn schilderoppervlakte?',
    excerpt: 'Een stap-voor-stap handleiding om precies te weten hoeveel verf u nodig heeft.',
    category: 'diy',
    image: '/images/schilder/hero/paint-cans.jpg',
    date: '10 januari 2024',
    readTime: '8 min',
  },
  {
    id: 3,
    title: 'Onderhoudstips voor buitenschilderwerk',
    excerpt: 'Zo houdt uw gevel langer mooi met deze eenvoudige onderhoudsadviezen.',
    category: 'onderhoud',
    image: '/images/schilder/after/exterior-fresh.jpg',
    date: '5 januari 2024',
    readTime: '6 min',
  },
  {
    id: 4,
    title: 'Warme vs koele kleuren: wat past bij u?',
    excerpt: 'Leer hoe u de juiste kleurtemperatuur kiest voor de gewenste sfeer.',
    category: 'kleuradvies',
    image: '/images/schilder/rooms/empty-living.jpg',
    date: '28 december 2023',
    readTime: '7 min',
  },
  {
    id: 5,
    title: 'De comeback van dark moody interiors',
    excerpt: 'Donkere kleuren zijn terug van weggeweest. Zo past u de trend toe.',
    category: 'trends',
    image: '/images/schilder/before/bedroom-dark.jpg',
    date: '20 december 2023',
    readTime: '5 min',
  },
  {
    id: 6,
    title: 'DIY: Zelf behangen doe je zo',
    excerpt: 'Van voorbereiding tot aflakken: alles wat u moet weten over zelf behangen.',
    category: 'diy',
    image: '/images/schilder/rooms/detail-brush.jpg',
    date: '15 december 2023',
    readTime: '10 min',
  },
]

export default function VerfTipsPage() {
  const featuredArticle = articles.find(a => a.featured)
  const regularArticles = articles.filter(a => !a.featured)

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-purple-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Verf <span className="text-purple-600">Tips</span> & Blog
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600"
            >
              Inspiratie, tips en trends op het gebied van schilderwerk en kleur.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all hover:shadow-md ${cat.color}`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-3xl overflow-hidden shadow-xl"
            >
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium w-fit mb-4">
                    <TrendingUp className="w-3 h-3" />
                    Trending
                  </span>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredArticle.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredArticle.readTime} leestijd
                    </span>
                  </div>
                  <button className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:gap-3 transition-all">
                    Lees meer
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Recente artikelen
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article, index) => {
              const category = categories.find(c => c.id === article.category)
              
              return (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {category && (
                      <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${category.color}`}>
                        {category.label}
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {article.excerpt}
                    </p>
                    <button className="inline-flex items-center gap-1 text-purple-600 font-medium text-sm hover:gap-2 transition-all">
                      Lees meer
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-3xl p-8 lg:p-12 text-white text-center"
          >
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Download onze Schilderwerk Checklist
            </h2>
            <p className="text-teal-100 mb-8 max-w-2xl mx-auto">
              Een handige PDF met alles wat u moet weten voor uw schilderproject. 
              Van voorbereiding tot oplevering.
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-600 font-semibold rounded-full hover:bg-teal-50 transition-colors">
              <Download className="w-5 h-5" />
              Download PDF (DEMO)
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
