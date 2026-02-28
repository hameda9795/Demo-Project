"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Leaf, Calendar, ImageIcon, FileText, 
  HelpCircle, CheckCircle, Clock, 
  LogIn, ArrowRight, Sun, CloudRain
} from "lucide-react";
import { getCurrentSeason, demoContact } from "@/lib/utils";

const seasonTips: Record<string, string[]> = {
  lente: [
    'Zaai de eerste groenten in de moestuin',
    'Snoei uitgebloeide heesters',
    'Verticuteer het gazon',
    'Plant nieuwe borderplanten',
  ],
  zomer: [
    'Water geven vroeg in de ochtend',
    'Doodhoofd bloemen voor doorbloei',
    'Houd het gazon op 4-5cm lengte',
    'Geniet van uw tuin!',
  ],
  herfst: [
    'Ruim gevallen blad op voor compost',
    'Plant voorjaarsbollen',
    'Bescherm vorstgevoelige planten',
    'Bemest het gazon',
  ],
  winter: [
    'Controleer bomen op stormschade',
    'Snoei bladverliezende bomen',
    'Onderhoud tuingeredschap',
    'Plan tuinprojecten voor volgend jaar',
  ],
};

const maintenanceSchedule = [
  { date: '15 maart 2024', task: 'Voorjaarsonderhoud', status: 'completed' },
  { date: '12 april 2024', task: 'Gazon maaien & bemesten', status: 'completed' },
  { date: '8 mei 2024', task: 'Border onderhoud', status: 'upcoming' },
  { date: '5 juni 2024', task: 'Zomeronderhoud', status: 'scheduled' },
];

const photoTimeline = [
  { month: 'Januari', image: '/images/hovenier/before/bare-soil.jpg', caption: 'Start situatie' },
  { month: 'April', image: '/images/hovenier/projects/seasonal-spring.jpg', caption: 'Lente groei' },
  { month: 'Juli', image: '/images/hovenier/projects/villa-lawn.jpg', caption: 'Zomer pracht' },
  { month: 'Oktober', image: '/images/hovenier/projects/seasonal-autumn.jpg', caption: 'Herfst kleuren' },
];

export default function MijnTuinPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const currentSeason = getCurrentSeason();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-earth-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <h1 className="font-serif text-2xl text-forest-900">Mijn Tuin</h1>
            <p className="text-forest-600">Klantenportal (DEMO)</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-nature">
            <h2 className="text-xl text-forest-900 font-medium mb-6">Inloggen</h2>
            
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-forest-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-forest-200 
                    focus:border-green-500 focus:outline-none"
                  placeholder="uw@email.nl"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-forest-700 mb-2">
                  Wachtwoord
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 rounded-xl border-2 border-forest-200 
                    focus:border-green-500 focus:outline-none"
                  placeholder="••••••"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-green-600 text-white rounded-xl font-medium 
                  hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                <LogIn className="w-5 h-5" />
                Inloggen
              </button>
            </form>

            <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200">
              <p className="text-amber-800 text-sm text-center">
                <strong>DEMO:</strong> Vul een willekeurig emailadres in om verder te gaan.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-earth-50">
      {/* Header */}
      <div className="bg-forest-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-serif text-3xl text-white">Mijn Tuin</h1>
              <p className="text-green-400">Welkom terug, Demo Klant</p>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full">
              <Leaf className="w-4 h-4 text-green-400" />
              <span className="text-white text-sm">DEMO Account</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Tuin Info */}
            <div className="bg-white rounded-2xl p-6 shadow-nature">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Leaf className="w-5 h-5 text-green-600" />
                </div>
                <h2 className="font-serif text-xl text-forest-900">Tuinprofiel</h2>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-forest-500">Type</span>
                  <span className="text-forest-900 font-medium">Stadstuin</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-forest-500">Oppervlakte</span>
                  <span className="text-forest-900 font-medium">85 m²</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-forest-500">Oriëntatie</span>
                  <span className="text-forest-900 font-medium">Zuidwest</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-forest-500">Stijl</span>
                  <span className="text-forest-900 font-medium">Modern groen</span>
                </div>
              </div>
            </div>

            {/* Seizoens Tips */}
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white/20 rounded-lg">
                  {currentSeason === 'zomer' ? <Sun className="w-5 h-5" /> : <CloudRain className="w-5 h-5" />}
                </div>
                <h2 className="font-serif text-xl capitalize">{currentSeason} Tips</h2>
              </div>
              <ul className="space-y-2">
                {seasonTips[currentSeason].map((tip, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-green-300" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* Hulp nodig */}
            <Link
              href="https://techsolutionsutrecht.nl/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-forest-900 rounded-2xl p-6 text-white hover:bg-forest-800 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <HelpCircle className="w-6 h-6 text-green-400" />
                <h3 className="font-medium">Hulp nodig?</h3>
              </div>
              <p className="text-white/70 text-sm mb-4">
                Heeft u vragen over uw tuin of wilt u een extra onderhoudsbeurt?
              </p>
              <span className="inline-flex items-center gap-1 text-green-400 text-sm font-medium">
                Neem contact op
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>

          {/* Middle Column - Maintenance */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-6 shadow-nature">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Calendar className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="font-serif text-xl text-forest-900">Onderhoudsplanning</h2>
              </div>

              <div className="space-y-4">
                {maintenanceSchedule.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-forest-50">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0
                      ${item.status === 'completed' ? 'bg-green-100' : 
                        item.status === 'upcoming' ? 'bg-amber-100' : 'bg-blue-100'}`}>
                      {item.status === 'completed' ? (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      ) : item.status === 'upcoming' ? (
                        <Clock className="w-5 h-5 text-amber-600" />
                      ) : (
                        <Calendar className="w-5 h-5 text-blue-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-forest-900">{item.task}</p>
                      <p className="text-sm text-forest-500">{item.date}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full
                      ${item.status === 'completed' ? 'bg-green-100 text-green-700' : 
                        item.status === 'upcoming' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'}`}>
                      {item.status === 'completed' ? 'Gedaan' : 
                       item.status === 'upcoming' ? 'Binnenkort' : 'Gepland'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Design PDF */}
            <div className="bg-white rounded-2xl p-6 shadow-nature">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <FileText className="w-5 h-5 text-purple-600" />
                </div>
                <h2 className="font-serif text-xl text-forest-900">Tuinontwerp</h2>
              </div>
              <div className="aspect-video bg-forest-100 rounded-xl flex items-center justify-center relative overflow-hidden">
                <div className="text-center p-4">
                  <FileText className="w-12 h-12 text-forest-300 mx-auto mb-2" />
                  <p className="text-forest-500 text-sm">Tuinontwerp_2024.pdf</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/20 to-transparent" />
              </div>
              <button className="w-full mt-4 py-3 border-2 border-forest-200 text-forest-700 
                rounded-xl font-medium hover:border-green-500 hover:text-green-600 transition-colors">
                Download PDF
              </button>
            </div>
          </div>

          {/* Right Column - Timeline */}
          <div>
            <div className="bg-white rounded-2xl p-6 shadow-nature">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <ImageIcon className="w-5 h-5 text-amber-600" />
                </div>
                <h2 className="font-serif text-xl text-forest-900">Tuin Timeline</h2>
              </div>

              <div className="space-y-6">
                {photoTimeline.map((item, index) => (
                  <div key={index} className="relative">
                    {index < photoTimeline.length - 1 && (
                      <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-forest-200" />
                    )}
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 z-10">
                        <span className="text-white text-xs font-bold">{item.month.slice(0, 3)}</span>
                      </div>
                      <div className="flex-1">
                        <div className="relative h-32 rounded-xl overflow-hidden mb-2">
                          <Image
                            src={item.image}
                            alt={item.caption}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <p className="text-sm font-medium text-forest-700">{item.caption}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
