import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight, Leaf, Download, Flower } from "lucide-react";
import { DemoBadge } from "@/components/DemoBadge";
import { getCurrentSeason } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Tuinblog | Onderhoudstips & Tuinontwerp - Groen & Tuin Architectuur",
  description: "Praktische tips voor tuinonderhoud, tuinontwerp inspiratie en duurzaam tuinieren. Lees onze blog voor het laatste tuinnieuws.",
};

const categories = [
  { id: 'onderhoud', name: 'Onderhoudstips', color: 'bg-green-100 text-green-700' },
  { id: 'ontwerp', name: 'Tuinontwerp', color: 'bg-blue-100 text-blue-700' },
  { id: 'duurzaam', name: 'Duurzaamheid', color: 'bg-emerald-100 text-emerald-700' },
  { id: 'seizoen', name: 'Seizoenswerk', color: 'bg-amber-100 text-amber-700' },
];

const posts = [
  {
    id: '1',
    title: 'De ultieme voorjaarschecklist voor uw tuin',
    excerpt: 'Maart is de ideale maand om uw tuin klaar te stomen voor het nieuwe seizoen. Met deze checklist vergeet u niets.',
    category: 'seizoen',
    image: '/images/hovenier/projects/seasonal-spring.jpg',
    date: '15 maart 2024',
    readTime: 5,
  },
  {
    id: '2',
    title: '5 Trending tuinstijlen voor 2024',
    excerpt: 'Van cottagecore tot mediterraans: ontdek welke tuinstijlen dit jaar populair zijn en hoe u ze toepast.',
    category: 'ontwerp',
    image: '/images/hovenier/hero/modern-garden.jpg',
    date: '8 maart 2024',
    readTime: 7,
  },
  {
    id: '3',
    title: 'Hoe spaart u water in de tuin?',
    excerpt: 'Met deze slimme tips vermindert u waterverbruik zonder in te leveren op groen. Goed voor milieu én portemonnee.',
    category: 'duurzaam',
    image: '/images/hovenier/projects/villa-lawn.jpg',
    date: '1 maart 2024',
    readTime: 6,
  },
  {
    id: '4',
    title: 'Snoeien in de lente: do\'s en don\'ts',
    excerpt: 'Niet elke plant kan in het voorjaar gesnoeid worden. Lees welke planten nu aan de beurt zijn.',
    category: 'onderhoud',
    image: '/images/hovenier/projects/tree-care.jpg',
    date: '22 februari 2024',
    readTime: 4,
  },
  {
    id: '5',
    title: 'Kleine tuin, grootse impact',
    excerpt: 'Tips voor het inrichten van een kleine stadstuin. Met slimme keuzes creëert u het gevoel van ruimte.',
    category: 'ontwerp',
    image: '/images/hovenier/projects/city-garden-1.jpg',
    date: '15 februari 2024',
    readTime: 5,
  },
  {
    id: '6',
    title: 'Insectenhotels: waarom en hoe?',
    excerpt: 'Help de bijen en vlinders met een zelfgemaakt insectenhotel. Inclusief stap-voor-stap bouwinstructie.',
    category: 'duurzaam',
    image: '/images/hovenier/projects/pond-garden.jpg',
    date: '5 februari 2024',
    readTime: 8,
  },
];

const currentSeason = getCurrentSeason();
const seasonTasks: Record<string, string[]> = {
  lente: ['Snoei uitgebloeide heesters', 'Zaai eerste groenten', 'Gazon verticuleren', 'Borders opschonen'],
  zomer: ['Doodhoofd bloemen', 'Water geven vroeg', 'Hagen snoeien', 'Geniet van de tuin!'],
  herfst: ['Blad ruimen voor compost', 'Bollen planten', 'Vijver winterklaar maken', 'Gazon bemesten'],
  winter: ['Bomen structuursnoei', 'Gereedschap onderhouden', 'Tuinboeken lezen', 'Plannen maken'],
};

export default function TuinblogPage() {
  return (
    <div className="min-h-screen bg-earth-50">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-green-900 to-forest-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <DemoBadge variant="inline" />
            <h1 className="font-serif text-5xl md:text-6xl text-white mt-4 mb-6">
              Tuinblog
            </h1>
            <p className="text-xl text-white/80">
              Inspiratie, tips en advies voor elke tuinliefhebber. 
              Van onderhoud tot ontwerp, van duurzaamheid tot seizoenswerk.
            </p>
          </div>
        </div>
      </section>

      {/* Maandtaak Section */}
      <section className="py-12 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Flower className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="font-serif text-3xl text-white mb-2">
                  Maandtaak: {currentSeason.charAt(0).toUpperCase() + currentSeason.slice(1)}
                </h2>
                <p className="text-white/80 mb-4">
                  Wat staat er deze maand op het programma in uw tuin?
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  {seasonTasks[currentSeason].map((task) => (
                    <span key={task} className="px-4 py-2 bg-white/20 text-white rounded-full text-sm">
                      {task}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex-shrink-0">
                <button className="flex items-center gap-2 px-6 py-3 bg-white text-green-700 rounded-full font-medium hover:bg-green-50 transition-colors">
                  <Download className="w-5 h-5" />
                  Download Jaarkalender (PDF)
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-forest-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/tuinblog/"
              className="px-5 py-2.5 bg-forest-800 text-white rounded-full text-sm font-medium">
              Alle artikelen
            </Link>
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${cat.color}`}>
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => {
              const category = categories.find(c => c.id === post.category);
              return (
                <article 
                  key={post.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-nature hover:shadow-nature-lg transition-all duration-300 hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${category?.color}`}>
                        {category?.name}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-forest-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime} min
                      </span>
                    </div>

                    <h3 className="font-serif text-xl text-forest-900 mb-3 group-hover:text-green-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-forest-600 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 text-green-600 font-medium text-sm hover:gap-3 transition-all">
                      Lees meer
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-wood">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-forest-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-400/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <Leaf className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h2 className="font-serif text-3xl text-white mb-4">
                Blijf op de hoogte
              </h2>
              <p className="text-white/70 mb-8 max-w-lg mx-auto">
                Ontvang maandelijks tuintips, onderhoudsadvies en inspiratie 
                direct in uw inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Uw emailadres"
                  className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-green-400"
                />
                <button className="px-6 py-3 bg-green-600 text-white rounded-full font-medium hover:bg-green-500 transition-colors">
                  Inschrijven
                </button>
              </div>
              <p className="text-white/50 text-xs mt-4">
                Uitschrijven kan op elk moment. DEMO - Geen echte nieuwsbrief.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
