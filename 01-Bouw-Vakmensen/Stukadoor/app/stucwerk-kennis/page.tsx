'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Clock, Palette, Lightbulb, ArrowRight, Download, AlertTriangle } from 'lucide-react'

const categories = [
  { id: 'onderhoud', label: 'Onderhoud', icon: BookOpen },
  { id: 'kleur', label: 'Kleuradvies', icon: Palette },
  { id: 'technieken', label: 'Technieken', icon: Lightbulb },
  { id: 'vergelijking', label: 'Vergelijkingen', icon: Clock },
]

const articles = [
  {
    id: 1,
    title: 'Spachtelputz vs Granol: Wat kies ik?',
    excerpt: 'Een uitgebreide vergelijking tussen de twee populairste stucwerk texturen. Lees welke het beste bij uw interieur past.',
    category: 'vergelijking',
    readTime: '5 min',
    featured: true,
  },
  {
    id: 2,
    title: 'Hoelang moet stucwerk drogen?',
    excerpt: 'De droogtijd van stucwerk hangt af van verschillende factoren. Ontdek wanneer u veilig kunt schilderen.',
    category: 'onderhoud',
    readTime: '4 min',
    featured: true,
  },
  {
    id: 3,
    title: 'Sauzen of verven op stucwerk?',
    excerpt: 'Wat is het verschil en welke afwerking past het beste bij uw gestucte wanden? Alle voor- en nadelen op een rij.',
    category: 'kleur',
    readTime: '6 min',
    featured: false,
  },
  {
    id: 4,
    title: 'Q1 t/m Q4 uitgelegd',
    excerpt: 'Wat betekenen de kwaliteitsgradaties? Een helder overzicht van wat u mag verwachten per niveau.',
    category: 'technieken',
    readTime: '7 min',
    featured: false,
  },
  {
    id: 5,
    title: 'Stucwerk onderhouden: de complete gids',
    excerpt: 'Tips voor het schoonmaken en onderhouden van uw gestucte wanden zonder beschadiging.',
    category: 'onderhoud',
    readTime: '5 min',
    featured: false,
  },
  {
    id: 6,
    title: 'Kleurtrends 2024 voor stucwerk',
    excerpt: 'Ontdek de meest populaire kleuren en tinten voor gestucte wanden dit jaar.',
    category: 'kleur',
    readTime: '4 min',
    featured: false,
  },
]

const downloads = [
  {
    title: 'Onderhoudsgids Gestucte Muren',
    description: 'Complete handleiding voor het onderhouden van uw stucwerk',
    format: 'PDF',
    size: '2.4 MB',
  },
  {
    title: 'Stucwerk Kleurenwijzer',
    description: 'Overzicht van alle beschikbare kleuren en combinaties',
    format: 'PDF',
    size: '4.1 MB',
  },
  {
    title: 'Prijsindicatie 2024',
    description: 'Actuele prijzen per m² voor verschillende stucwerk soorten',
    format: 'PDF',
    size: '1.2 MB',
  },
]

export default function KnowledgePage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredArticles =
    activeCategory === 'all'
      ? articles
      : articles.filter((a) => a.category === activeCategory)

  return (
    <div className="pt-32 pb-20 bg-sand-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-clay bg-clay/10 rounded-full">
            Kennisbank
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-stone-800 mb-4">
            Stucwerk <span className="text-clay">Kennis</span>
          </h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Alles wat u moet weten over stucwerk. Van droogtijden tot kleuradvies 
            en het kiezen van de juiste structuur.
          </p>
        </motion.div>

        {/* Demo Notice */}
        <motion.div
          className="bg-amber-50 border border-amber-300 rounded-xl p-4 mb-12 flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
          <p className="text-sm text-amber-800">
            <strong>DEMO:</strong> Dit is een voorbeeld kennisbank. Artikelen zijn illustratief.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === 'all'
                ? 'bg-stone-800 text-white'
                : 'bg-white text-stone-600 hover:bg-stone-100'
            }`}
          >
            Alle artikelen
          </button>
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                  activeCategory === cat.id
                    ? 'bg-stone-800 text-white'
                    : 'bg-white text-stone-600 hover:bg-stone-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* Featured Articles */}
        {activeCategory === 'all' && (
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {articles
              .filter((a) => a.featured)
              .map((article, index) => (
                <motion.article
                  key={article.id}
                  className="glass-card p-6 hover:shadow-lg transition-shadow cursor-pointer group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="px-3 py-1 bg-clay/10 text-clay text-xs font-medium rounded-full">
                      {categories.find((c) => c.id === article.category)?.label}
                    </span>
                    <span className="text-xs text-stone-500">{article.readTime} lezen</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-stone-800 mb-2 group-hover:text-clay transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-stone-600 mb-4">{article.excerpt}</p>
                  <div className="flex items-center gap-2 text-clay font-medium">
                    <span className="text-sm">Lees meer</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.article>
              ))}
          </div>
        )}

        {/* All Articles Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {filteredArticles
            .filter((a) => !a.featured || activeCategory !== 'all')
            .map((article, index) => (
              <motion.article
                key={article.id}
                className="glass-card p-5 hover:shadow-lg transition-shadow cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.05 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-stone-500">
                    {categories.find((c) => c.id === article.category)?.label}
                  </span>
                  <span className="text-xs text-stone-400">{article.readTime}</span>
                </div>
                <h3 className="font-heading font-semibold text-stone-800 mb-2 group-hover:text-clay transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-stone-600 line-clamp-2">{article.excerpt}</p>
              </motion.article>
            ))}
        </div>

        {/* Downloads Section */}
        <div className="glass-card p-8 bg-gradient-to-br from-stone-800 to-stone-900 text-white">
          <div className="flex items-center gap-3 mb-6">
            <Download className="w-6 h-6 text-sand-300" />
            <h2 className="text-2xl font-heading font-bold">Downloads (DEMO)</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {downloads.map((download, index) => (
              <motion.div
                key={download.title}
                className="p-5 bg-white/10 rounded-xl hover:bg-white/20 transition-colors cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="px-2 py-1 bg-sand-300/20 text-sand-300 text-xs rounded">
                    {download.format}
                  </span>
                  <span className="text-xs text-stone-400">{download.size}</span>
                </div>
                <h3 className="font-medium mb-1 group-hover:text-sand-300 transition-colors">
                  {download.title}
                </h3>
                <p className="text-sm text-stone-400">{download.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
