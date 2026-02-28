"use client"

import { motion } from "framer-motion"
import { 
  Zap, 
  BookOpen, 
  Shield, 
  BatteryCharging, 
  Home, 
  Lightbulb,
  Download,
  ArrowRight,
  Clock,
  User
} from "lucide-react"
import Image from "next/image"

const categories = [
  { id: "veiligheid", label: "Veiligheid", icon: Shield, color: "red" },
  { id: "energie", label: "Energie Besparen", icon: Lightbulb, color: "yellow" },
  { id: "smarthome", label: "Smart Home", icon: Home, color: "blue" },
  { id: "laadpalen", label: "Laadpalen", icon: BatteryCharging, color: "green" },
]

const articles = [
  {
    id: 1,
    title: "Elektrische Veiligheid in Huis: De Complete Checklist",
    excerpt: "Lees welke maatregelen u kunt nemen om uw huis elektrisch veilig te maken. Inclusief gratis downloadbare checklist.",
    category: "veiligheid",
    image: "/images/elektricien/hero/meterkast-open.svg",
    readTime: "5 min",
    author: "M. Jansen",
    date: "15 januari 2024",
    featured: true,
    hasDownload: true,
  },
  {
    id: 2,
    title: "Laadpaal Thuis: Welk Vermogen Heb ik Nodig?",
    excerpt: "Een uitgebreide gids over het kiezen van de juiste laadpaal voor uw situatie en elektrische auto.",
    category: "laadpalen",
    image: "/images/elektricien/services/ev-charging.svg",
    readTime: "8 min",
    author: "P. de Vries",
    date: "10 januari 2024",
    featured: false,
    hasDownload: false,
  },
  {
    id: 3,
    title: "Slimme Thermostaten: Bespaar tot 20% op Verwarming",
    excerpt: "Ontdek hoe een smart thermostaat uw energierekening verlaagt en uw comfort verhoogt.",
    category: "smarthome",
    image: "/images/elektricien/services/smart-home.svg",
    readTime: "6 min",
    author: "L. Bakker",
    date: "5 januari 2024",
    featured: false,
    hasDownload: false,
  },
  {
    id: 4,
    title: "Zonnepanelen Aansluiten: Wat U Moet Weten",
    excerpt: "Alles over het aansluiten van zonnepanelen op uw bestaande elektrische installatie.",
    category: "energie",
    image: "/images/elektricien/services/solar-connection.svg",
    readTime: "7 min",
    author: "M. Jansen",
    date: "28 december 2023",
    featured: false,
    hasDownload: false,
  },
  {
    id: 5,
    title: "Oude Meterkast? Dit Zijn de Risico's",
    excerpt: "Waarom een verouderde meterkast gevaarlijk kan zijn en wanneer u moet overwegen te vervangen.",
    category: "veiligheid",
    image: "/images/elektricien/projects/meterkast-before.svg",
    readTime: "4 min",
    author: "P. de Vries",
    date: "20 december 2023",
    featured: false,
    hasDownload: true,
  },
  {
    id: 6,
    title: "Smart Home Beginnersgids 2024",
    excerpt: "De beste start voor wie zijn huis slimmer wil maken. Van lampen tot beveiliging.",
    category: "smarthome",
    image: "/images/elektricien/services/smart-home.svg",
    readTime: "10 min",
    author: "L. Bakker",
    date: "15 december 2023",
    featured: false,
    hasDownload: true,
  },
]

export default function KnowledgePage() {
  return (
    <div className="min-h-screen bg-circuit-dark">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-electric-900/20 to-circuit-dark">
        <div className="absolute inset-0 bg-circuit-pattern opacity-10" />
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-electric-600/20 border border-electric-500/30 rounded-full px-4 py-2 mb-6">
              <BookOpen className="w-5 h-5 text-electric-500" />
              <span className="text-electric-400 font-medium">Kennisbank</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Elektrische <span className="text-electric-500">Kennis</span> & Expertise
            </h1>
            
            <p className="text-gray-400 text-lg mb-8">
              Ontdek handige tips, veiligheidsinformatie en de laatste ontwikkelingen 
              op het gebied van elektra, smart home en duurzame energie.
            </p>

            {/* Category Pills */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all bg-electric-900/50 text-gray-300 hover:bg-electric-800 hover:text-white border border-electric-800`}
                >
                  <category.icon className={`w-4 h-4 text-${category.color}-400`} />
                  {category.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {articles.filter(a => a.featured).map((article) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative bg-gradient-to-r from-electric-900/40 to-circuit-dark border border-electric-800 rounded-3xl overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative aspect-[16/10] md:aspect-auto">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-circuit-dark/90 md:bg-gradient-to-l" />
                </div>
                
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-electric-600 text-white text-sm rounded-full">
                      Uitgelicht
                    </span>
                    <span className="px-3 py-1 bg-red-600/20 text-red-400 text-sm rounded-full flex items-center gap-1">
                      <Shield className="w-3 h-3" />
                      Veiligheid
                    </span>
                  </div>
                  
                  <h2 className="text-3xl font-heading font-bold text-white mb-4">
                    {article.title}
                  </h2>
                  
                  <p className="text-gray-400 mb-6">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {article.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </span>
                    <span>{article.date}</span>
                  </div>
                  
                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 bg-electric-600 hover:bg-electric-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                      Lees Artikel
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    
                    {article.hasDownload && (
                      <button className="flex items-center gap-2 bg-electric-900/50 hover:bg-electric-900 text-white px-6 py-3 rounded-lg font-semibold transition-colors border border-electric-800">
                        <Download className="w-4 h-4" />
                        Download Checklist
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-heading font-bold text-white mb-8">
            Recent Gepubliceerd
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.filter(a => !a.featured).map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="group bg-electric-900/20 border border-electric-800 rounded-2xl overflow-hidden hover:border-electric-600 transition-all"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-circuit-dark to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      article.category === "veiligheid" ? "bg-red-600/80 text-white" :
                      article.category === "energie" ? "bg-yellow-600/80 text-white" :
                      article.category === "smarthome" ? "bg-blue-600/80 text-white" :
                      "bg-green-600/80 text-white"
                    }`}>
                      {categories.find(c => c.id === article.category)?.label}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                    <span>{article.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-electric-400 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{article.author}</span>
                    <button className="flex items-center gap-1 text-electric-400 hover:text-electric-300 text-sm font-medium transition-colors">
                      Lees meer
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Download CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16 bg-gradient-to-r from-electric-900/40 to-electric-800/20 border border-electric-800 rounded-2xl p-8 text-center"
          >
            <div className="inline-flex p-4 bg-electric-600/20 rounded-2xl mb-6">
              <Download className="w-8 h-8 text-electric-500" />
            </div>
            <h2 className="text-2xl font-heading font-bold text-white mb-4">
              Gratis Elektrische Veiligheidschecklist
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-6">
              Download onze complete checklist om de veiligheid van uw elektrische installatie 
              zelf te controleren. Inclusief tips voor verbetering.
            </p>
            <button className="inline-flex items-center gap-2 bg-electric-600 hover:bg-electric-700 text-white px-8 py-4 rounded-lg font-bold transition-colors">
              <Download className="w-5 h-5" />
              Download PDF (DEMO)
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
