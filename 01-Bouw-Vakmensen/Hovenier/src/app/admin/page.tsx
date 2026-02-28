"use client";

import { useEffect, useState } from "react";
import { 
  Sun, CloudRain, Wind, Droplets,
  Calendar, CheckCircle, Clock, AlertCircle,
  MapPin, Package, TrendingUp, Users
} from "lucide-react";

// Mock data
const weatherData = {
  temp: 18,
  condition: 'deels bewolkt',
  humidity: 65,
  wind: 12,
  rainChance: 20,
};

const tasks = [
  { id: 1, title: 'Snoeien kastanje Prinsengracht', client: 'De Jong', time: '08:00', status: 'pending' },
  { id: 2, title: 'Gazon maaien Van Baerlestraat', client: 'Van Dijk', time: '10:30', status: 'completed' },
  { id: 3, title: 'Vijver schoonmaken Amstelveen', client: 'Bakker', time: '13:00', status: 'pending' },
  { id: 4, title: 'Terras reinigen Haarlem', client: 'Peters', time: '15:00', status: 'pending' },
  { id: 5, title: 'Heg snoeien Bloemendaal', client: 'Smit', time: '16:30', status: 'pending' },
];

const projects = [
  { id: 1, name: 'Stadstuin Centrum', location: { lat: 52.367, lng: 4.904 }, address: 'Keizersgracht 123, Amsterdam' },
  { id: 2, name: 'Villa Tuin Bloemendaal', location: { lat: 52.394, lng: 4.623 }, address: 'Bloemendaalseweg 45' },
  { id: 3, name: 'Dakterras Zuidas', location: { lat: 52.336, lng: 4.873 }, address: 'Gustav Mahlerlaan 24' },
  { id: 4, name: 'Bedrijfstuin Hoofddorp', location: { lat: 52.306, lng: 4.690 }, address: 'Polderplein 12' },
];

const inventory = [
  { name: 'Buxus', stock: 150, unit: 'stuks' },
  { name: 'Taxus', stock: 80, unit: 'stuks' },
  { name: 'Graszoden', stock: 500, unit: 'm²' },
  { name: 'Lavendel', stock: 200, unit: 'stuks' },
  { name: 'Siergrind', stock: 50, unit: 'zakken' },
];

export default function AdminDashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-serif text-white">Dashboard</h1>
          <p className="text-green-400">
            {currentTime.toLocaleDateString('nl-NL', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-green-900/50 rounded-full">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-green-300 text-sm">DEMO Modus</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Deze week klussen', value: '12', icon: Calendar, color: 'bg-blue-600' },
          { label: 'Actieve projecten', value: '8', icon: MapPin, color: 'bg-green-600' },
          { label: 'Open offertes', value: '5', icon: TrendingUp, color: 'bg-amber-600' },
          { label: 'Tevreden klanten', value: '156', icon: Users, color: 'bg-purple-600' },
        ].map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-forest-900 rounded-xl p-4 border border-green-800">
              <div className={`w-10 h-10 ${stat.color} rounded-lg flex items-center justify-center mb-3`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-green-400 text-sm">{stat.label}</p>
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Weather Widget */}
        <div className="bg-forest-900 rounded-2xl p-6 border border-green-800">
          <h2 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
            <Sun className="w-5 h-5 text-amber-400" />
            Weer vandaag
          </h2>
          <div className="text-center py-4">
            <div className="text-5xl font-bold text-white mb-2">{weatherData.temp}°C</div>
            <p className="text-green-300 capitalize">{weatherData.condition}</p>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-green-800">
            <div className="text-center">
              <Droplets className="w-5 h-5 text-blue-400 mx-auto mb-1" />
              <p className="text-white font-medium">{weatherData.humidity}%</p>
              <p className="text-green-500 text-xs">Luchtvochtigheid</p>
            </div>
            <div className="text-center">
              <Wind className="w-5 h-5 text-gray-400 mx-auto mb-1" />
              <p className="text-white font-medium">{weatherData.wind} km/u</p>
              <p className="text-green-500 text-xs">Wind</p>
            </div>
            <div className="text-center">
              <CloudRain className="w-5 h-5 text-blue-400 mx-auto mb-1" />
              <p className="text-white font-medium">{weatherData.rainChance}%</p>
              <p className="text-green-500 text-xs">Neerslag</p>
            </div>
          </div>
        </div>

        {/* Task List */}
        <div className="bg-forest-900 rounded-2xl p-6 border border-green-800">
          <h2 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-400" />
            Deze week ({tasks.filter(t => t.status === 'completed').length}/{tasks.length})
          </h2>
          <div className="space-y-3">
            {tasks.map((task) => (
              <div 
                key={task.id} 
                className={`flex items-center gap-3 p-3 rounded-lg ${
                  task.status === 'completed' ? 'bg-green-900/30' : 'bg-forest-950'
                }`}>
                <div className={`w-2 h-2 rounded-full ${
                  task.status === 'completed' ? 'bg-green-500' : 'bg-amber-500'
                }`} />
                <div className="flex-1 min-w-0">
                  <p className={`text-sm truncate ${
                    task.status === 'completed' ? 'text-green-400 line-through' : 'text-white'
                  }`}>
                    {task.title}
                  </p>
                  <p className="text-green-600 text-xs">{task.client}</p>
                </div>
                <span className="text-green-500 text-sm">{task.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Inventory */}
        <div className="bg-forest-900 rounded-2xl p-6 border border-green-800">
          <h2 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
            <Package className="w-5 h-5 text-purple-400" />
            Plantenvoorraad
          </h2>
          <div className="space-y-3">
            {inventory.map((item) => (
              <div key={item.name} className="flex items-center justify-between p-3 bg-forest-950 rounded-lg">
                <span className="text-white text-sm">{item.name}</span>
                <span className="text-green-400 text-sm font-medium">
                  {item.stock} {item.unit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Map Section */}
      <div className="bg-forest-900 rounded-2xl p-6 border border-green-800">
        <h2 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-red-400" />
          Projecten Kaart
        </h2>
        <div className="bg-forest-950 rounded-xl h-64 flex items-center justify-center relative overflow-hidden">
          {/* Mock Map Background */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-gradient-to-br from-green-900 to-forest-950" />
            {/* Grid lines to simulate map */}
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }} />
          </div>
          
          {/* Project Pins */}
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="absolute group cursor-pointer"
              style={{
                left: `${20 + index * 20}%`,
                top: `${30 + (index % 2) * 30}%`,
              }}>
              <div className="relative">
                <MapPin className="w-8 h-8 text-green-500 fill-green-500" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-forest-950" />
              </div>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 
                px-3 py-2 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 
                transition-opacity whitespace-nowrap z-10">
                <p className="text-forest-900 font-medium text-sm">{project.name}</p>
                <p className="text-forest-500 text-xs">{project.address}</p>
              </div>
            </div>
          ))}
          
          <p className="text-green-600 text-sm relative z-10">
            DEMO: Projecten in Amsterdam, Haarlem en omgeving
          </p>
        </div>
      </div>
    </div>
  );
}
