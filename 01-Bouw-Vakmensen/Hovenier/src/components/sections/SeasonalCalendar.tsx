"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  Flower, Sun, Leaf, Snowflake,
  Scissors, Droplets, Sprout, Shovel,
  Shield, Calendar
} from "lucide-react";
import { getCurrentSeason, type Season } from "@/lib/utils";

interface SeasonData {
  id: Season;
  name: string;
  months: string[];
  icon: typeof Flower;
  color: string;
  bgColor: string;
  tasks: { icon: typeof Scissors; title: string; desc: string }[];
  tip: string;
  image: string;
}

const seasonsData: SeasonData[] = [
  {
    id: 'lente',
    name: 'Lente',
    months: ['Maart', 'April', 'Mei'],
    icon: Flower,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    tasks: [
      { icon: Scissors, title: 'Snoeien', desc: 'Snoei uitgebloeide winterbloeiers' },
      { icon: Sprout, title: 'Zaaien', desc: 'Start met moestuin zaaien' },
      { icon: Droplets, title: 'Gazonherstel', desc: 'Belucht en bemest het gazon' },
    ],
    tip: 'Begin het seizoen met een grondige tuininspectie. Verwijder onkruid voordat het gaat zaaien.',
    image: '/images/hovenier/projects/seasonal-spring.jpg',
  },
  {
    id: 'zomer',
    name: 'Zomer',
    months: ['Juni', 'Juli', 'Augustus'],
    icon: Sun,
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    tasks: [
      { icon: Droplets, title: 'Sproeien', desc: 'Water geven vroeg of laat op de dag' },
      { icon: Scissors, title: 'Onderhoud', desc: 'Regelmatig snoeien en doodhalen' },
      { icon: Sprout, title: 'Oogsten', desc: 'Geniet van uw moestuin oogst' },
    ],
    tip: 'In warme periodes is mulchen essentieel om vocht vast te houden en wortels koel te houden.',
    image: '/images/hovenier/projects/villa-lawn.jpg',
  },
  {
    id: 'herfst',
    name: 'Herfst',
    months: ['September', 'Oktober', 'November'],
    icon: Leaf,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    tasks: [
      { icon: Leaf, title: 'Blad ruimen', desc: 'Hark blad voor compost of gazonbescherming' },
      { icon: Shield, title: 'Beschermen', desc: 'Bescherm vorstgevoelige planten' },
      { icon: Sprout, title: 'Planten', desc: 'Ideale tijd voor bomen en struiken' },
    ],
    tip: 'Herfst is het perfecte seizoen om nieuwe bomen en struiken aan te planten.',
    image: '/images/hovenier/projects/seasonal-autumn.jpg',
  },
  {
    id: 'winter',
    name: 'Winter',
    months: ['December', 'Januari', 'Februari'],
    icon: Snowflake,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    tasks: [
      { icon: Scissors, title: 'Snoeien bomen', desc: 'Snoei bladverliezende bomen' },
      { icon: Calendar, title: 'Plannen', desc: 'Ontwerp nieuwe tuinprojecten' },
      { icon: Shovel, title: 'Voorbereiden', desc: 'Bestel zaden en benodigdheden' },
    ],
    tip: 'Gebruik de rustige wintermaanden om te genieten van tuinboeken en nieuwe plannen te maken.',
    image: '/images/hovenier/hero/modern-garden.jpg',
  },
];

export function SeasonalCalendar() {
  const [activeSeason, setActiveSeason] = useState<Season>(getCurrentSeason());
  const currentSeason = seasonsData.find(s => s.id === activeSeason)!;

  return (
    <section className="py-24 bg-wood">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 
            bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            <Calendar className="w-4 h-4" />
            Jaarkalender
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-forest-900 mb-4">
            Seizoenswerk
          </h2>
          <p className="text-forest-600 text-lg">
            Elke seizoen vraagt om specifieke tuinwerkzaamheden. 
            Bekijk wat er nu te doen is in uw tuin.
          </p>
        </motion.div>

        {/* Season Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {seasonsData.map((season) => {
            const Icon = season.icon;
            const isActive = activeSeason === season.id;
            return (
              <button
                key={season.id}
                onClick={() => setActiveSeason(season.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full 
                  font-medium transition-all duration-300
                  ${isActive 
                    ? `${season.bgColor} ${season.color} ring-2 ring-current` 
                    : 'bg-white text-forest-600 hover:bg-forest-50 border border-forest-200'}`}>
                <Icon className="w-5 h-5" />
                {season.name}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSeason}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Tasks */}
            <div className="bg-white rounded-3xl p-8 shadow-nature">
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl ${currentSeason.bgColor}`}>
                  <currentSeason.icon className={`w-6 h-6 ${currentSeason.color}`} />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-forest-900">{currentSeason.name}</h3>
                  <p className="text-forest-500 text-sm">{currentSeason.months.join(', ')}</p>
                </div>
              </div>

              <div className="space-y-4">
                {currentSeason.tasks.map((task, index) => {
                  const Icon = task.icon;
                  return (
                    <motion.div
                      key={task.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-forest-50 hover:bg-green-50 transition-colors">
                      <div className={`p-2 rounded-lg ${currentSeason.bgColor}`}>
                        <Icon className={`w-5 h-5 ${currentSeason.color}`} />
                      </div>
                      <div>
                        <h4 className="font-medium text-forest-900">{task.title}</h4>
                        <p className="text-forest-600 text-sm">{task.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Tip Card */}
              <div className={`mt-6 p-6 rounded-2xl ${currentSeason.bgColor} border-2 border-current border-opacity-20`}>
                <h4 className={`font-medium ${currentSeason.color} mb-2`}>💡 Tip van de hovenier</h4>
                <p className="text-forest-700">{currentSeason.tip}</p>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-[400px] lg:h-full min-h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={currentSeason.image}
                alt={currentSeason.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white/80 text-sm mb-1">Maandtaak</p>
                <h4 className="font-serif text-2xl text-white">{currentSeason.tasks[0].title}</h4>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
