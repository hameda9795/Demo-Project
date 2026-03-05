"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  FileText,
  MessageSquare,
  Settings,
  LogOut,
  User,
  Bell,
  Download,
  TrendingUp,
  TrendingDown,
  Calendar,
  CheckCircle,
  Clock,
  AlertCircle,
  ArrowUpRight,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";

// Demo data
const stats = [
  { label: "Openstaande facturen", value: "€ 12.450", change: "+5%", trend: "up" },
  { label: "BTW teruggaaf", value: "€ 3.280", change: "-2%", trend: "down" },
  { label: "Lopende projecten", value: "8", change: "+2", trend: "up" },
  { label: "Jaaromzet", value: "€ 248K", change: "+12%", trend: "up" },
];

const documents = [
  { id: 1, name: "Jaarrekening 2023.pdf", type: "PDF", date: "15 jan 2024", size: "2.4 MB" },
  { id: 2, name: "BTW Aangifte Q4 2023.pdf", type: "PDF", date: "20 jan 2024", size: "1.1 MB" },
  { id: 3, name: "Salarisspecificatie december.xlsx", type: "XLSX", date: "05 jan 2024", size: "450 KB" },
  { id: 4, name: "Fiscaal advies brief.pdf", type: "PDF", date: "10 dec 2023", size: "890 KB" },
];

const tasks = [
  { id: 1, title: "BTW Aangifte Q1 2024", deadline: "30 apr 2024", status: "pending", priority: "high" },
  { id: 2, title: "Jaarcijfers doorsturen", deadline: "1 mei 2024", status: "in-progress", priority: "high" },
  { id: 3, title: "Pensioenafspraak review", deadline: "15 mei 2024", status: "pending", priority: "medium" },
  { id: 4, title: "Investeringsplan 2024", deadline: "30 mei 2024", status: "completed", priority: "low" },
];

const messages = [
  { id: 1, from: "Peter van Berg", subject: "Jaarcijfers gereed", preview: "Beste, de jaarcijfers voor 2023 zijn gereed voor bespreking...", time: "2 uur geleden", unread: true },
  { id: 2, from: "Sophie de Vries", subject: "BTW vraag", preview: "Ik heb een vraag over de aftrekposten voor Q4...", time: "Gisteren", unread: false },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarItems = [
    { id: "overview", label: "Overzicht", icon: LayoutDashboard },
    { id: "documents", label: "Documenten", icon: FileText },
    { id: "messages", label: "Berichten", icon: MessageSquare },
    { id: "settings", label: "Instellingen", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-warm-cream flex">
      {/* Sidebar */}
      <motion.aside
        className={`fixed lg:sticky top-0 left-0 z-30 h-screen w-72 bg-warm-charcoal flex flex-col transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo */}
        <div className="p-6 border-b border-warm-cream/10">
          <Link href="/" className="inline-block">
            <div className="flex flex-col">
              <span className="font-display text-lg font-semibold text-warm-cream">
                VAN DEN BERG
              </span>
              <span className="text-caption text-warm-beige/60 text-[10px]">
                Klantenportaal
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-display tracking-wide transition-colors ${
                activeTab === item.id
                  ? "bg-warm-terracotta text-white"
                  : "text-warm-beige/70 hover:bg-warm-cream/10 hover:text-warm-cream"
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-warm-cream/10">
          <div className="flex items-center gap-3 px-4 py-3 bg-warm-cream/5">
            <div className="w-10 h-10 bg-warm-terracotta flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-display text-warm-cream truncate">
                Demo Gebruiker
              </p>
              <p className="text-xs text-warm-beige/60 truncate">
                info@demo.nl
              </p>
            </div>
          </div>
          <Link
            href="/"
            className="w-full flex items-center gap-3 px-4 py-3 mt-2 text-sm text-warm-beige/70 hover:text-warm-terracotta transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Uitloggen
          </Link>
        </div>
      </motion.aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 min-w-0">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-warm-cream/95 backdrop-blur-sm border-b border-warm-taupe/20 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 -ml-2 text-warm-charcoal"
              >
                <Menu className="w-6 h-6" />
              </button>
              <h1 className="font-display text-xl lg:text-2xl text-warm-charcoal">
                {sidebarItems.find((i) => i.id === activeTab)?.label}
              </h1>
            </div>

            <div className="flex items-center gap-4">
              {/* Notifications */}
              <button className="relative p-2 text-warm-taupe hover:text-warm-charcoal transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-warm-terracotta rounded-full" />
              </button>

              {/* Date */}
              <div className="hidden sm:flex items-center gap-2 text-sm text-warm-taupe">
                <Calendar className="w-4 h-4" />
                <span>{new Date().toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" })}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-6 lg:p-8">
          {activeTab === "overview" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* Welcome Banner */}
              <div className="bg-warm-charcoal p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <h2 className="font-display text-2xl text-warm-cream mb-2">
                      Welkom terug, Demo Gebruiker
                    </h2>
                    <p className="text-warm-beige/70">
                      Je hebt 2 ongelezen berichten en 3 taken die aandacht vereisen.
                    </p>
                  </div>
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-warm-terracotta text-white font-display text-sm hover:bg-warm-terracotta/90 transition-colors"
                  >
                    <span>Contact opnemen</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="bg-white p-5 lg:p-6 border border-warm-taupe/20 hover:border-warm-terracotta/30 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="text-caption text-warm-taupe block mb-2">
                      {stat.label}
                    </span>
                    <span className="font-display text-2xl lg:text-3xl text-warm-charcoal block mb-2">
                      {stat.value}
                    </span>
                    <div className="flex items-center gap-1">
                      {stat.trend === "up" ? (
                        <TrendingUp className="w-4 h-4 text-green-600" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-warm-terracotta" />
                      )}
                      <span className={`text-sm ${stat.trend === "up" ? "text-green-600" : "text-warm-terracotta"}`}>
                        {stat.change}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Two Column Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                {/* Tasks */}
                <div className="bg-white border border-warm-taupe/20">
                  <div className="p-5 border-b border-warm-taupe/10 flex items-center justify-between">
                    <h3 className="font-display text-lg text-warm-charcoal">Openstaande taken</h3>
                    <Link href="#" className="text-caption text-warm-terracotta hover:underline">
                      Alles bekijken
                    </Link>
                  </div>
                  <div className="divide-y divide-warm-taupe/10">
                    {tasks.map((task) => (
                      <div key={task.id} className="p-5 flex items-start gap-4 hover:bg-warm-cream/50 transition-colors">
                        <div className={`w-10 h-10 flex items-center justify-center flex-shrink-0 ${
                          task.status === "completed" ? "bg-green-100" :
                          task.status === "in-progress" ? "bg-warm-terracotta/10" : "bg-warm-beige"
                        }`}>
                          {task.status === "completed" ? (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          ) : task.status === "in-progress" ? (
                            <Clock className="w-5 h-5 text-warm-terracotta" />
                          ) : (
                            <AlertCircle className="w-5 h-5 text-warm-taupe" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-display text-warm-charcoal truncate">{task.title}</p>
                          <p className="text-sm text-warm-taupe">Deadline: {task.deadline}</p>
                        </div>
                        <span className={`text-xs px-2 py-1 ${
                          task.priority === "high" ? "bg-warm-terracotta text-white" :
                          task.priority === "medium" ? "bg-warm-beige text-warm-charcoal" :
                          "bg-warm-cream text-warm-taupe"
                        }`}>
                          {task.priority}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Messages */}
                <div className="bg-white border border-warm-taupe/20">
                  <div className="p-5 border-b border-warm-taupe/10 flex items-center justify-between">
                    <h3 className="font-display text-lg text-warm-charcoal">Recente berichten</h3>
                    <Link href="#" className="text-caption text-warm-terracotta hover:underline">
                      Alles bekijken
                    </Link>
                  </div>
                  <div className="divide-y divide-warm-taupe/10">
                    {messages.map((message) => (
                      <div key={message.id} className="p-5 hover:bg-warm-cream/50 transition-colors cursor-pointer">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <p className="font-display text-warm-charcoal">{message.from}</p>
                              {message.unread && (
                                <span className="w-2 h-2 bg-warm-terracotta rounded-full" />
                              )}
                            </div>
                            <p className="text-sm font-medium text-warm-charcoal mb-1">{message.subject}</p>
                            <p className="text-sm text-warm-taupe truncate">{message.preview}</p>
                          </div>
                          <span className="text-xs text-warm-taupe whitespace-nowrap">{message.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "Document uploaden", icon: FileText },
                  { label: "Afspraak maken", icon: Calendar },
                  { label: "Bericht sturen", icon: MessageSquare },
                  { label: "Rapport downloaden", icon: Download },
                ].map((action) => (
                  <button
                    key={action.label}
                    className="p-6 bg-warm-beige/30 hover:bg-warm-beige/50 border border-warm-taupe/20 hover:border-warm-terracotta/30 transition-all text-center group"
                  >
                    <action.icon className="w-6 h-6 mx-auto mb-3 text-warm-terracotta group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-display text-warm-charcoal">{action.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "documents" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border border-warm-taupe/20"
            >
              <div className="p-6 border-b border-warm-taupe/10">
                <h2 className="font-display text-xl text-warm-charcoal">Documenten</h2>
              </div>
              <div className="divide-y divide-warm-taupe/10">
                {documents.map((doc) => (
                  <div key={doc.id} className="p-6 flex items-center justify-between hover:bg-warm-cream/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-warm-beige flex items-center justify-center">
                        <FileText className="w-6 h-6 text-warm-terracotta" />
                      </div>
                      <div>
                        <p className="font-display text-warm-charcoal">{doc.name}</p>
                        <p className="text-sm text-warm-taupe">{doc.date} • {doc.size}</p>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-warm-beige transition-colors">
                      <Download className="w-5 h-5 text-warm-taupe hover:text-warm-terracotta" />
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "messages" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              {messages.map((message) => (
                <div key={message.id} className="bg-white border border-warm-taupe/20 p-6 hover:border-warm-terracotta/30 transition-colors cursor-pointer">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-warm-charcoal flex items-center justify-center">
                        <span className="font-display text-warm-cream">
                          {message.from.split(" ").map((n) => n[0]).join("")}
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-display text-warm-charcoal">{message.from}</p>
                          {message.unread && (
                            <span className="px-2 py-0.5 bg-warm-terracotta text-white text-xs">Nieuw</span>
                          )}
                        </div>
                        <p className="font-medium text-warm-charcoal mt-1">{message.subject}</p>
                        <p className="text-sm text-warm-taupe mt-1">{message.preview}</p>
                      </div>
                    </div>
                    <span className="text-sm text-warm-taupe">{message.time}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === "settings" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl bg-white border border-warm-taupe/20 p-8"
            >
              <h2 className="font-display text-xl text-warm-charcoal mb-6">Account instellingen</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="text-caption text-warm-taupe block mb-2">Bedrijfsnaam</label>
                  <input
                    type="text"
                    value="Demo B.V."
                    readOnly
                    className="w-full p-3 bg-warm-cream border border-warm-taupe/20 text-warm-charcoal"
                  />
                </div>
                
                <div>
                  <label className="text-caption text-warm-taupe block mb-2">E-mailadres</label>
                  <input
                    type="email"
                    value="info@demo.nl"
                    readOnly
                    className="w-full p-3 bg-warm-cream border border-warm-taupe/20 text-warm-charcoal"
                  />
                </div>
                
                <div>
                  <label className="text-caption text-warm-taupe block mb-2">KvK-nummer</label>
                  <input
                    type="text"
                    value="12345678"
                    readOnly
                    className="w-full p-3 bg-warm-cream border border-warm-taupe/20 text-warm-charcoal"
                  />
                </div>

                <div className="pt-6 border-t border-warm-taupe/20">
                  <h3 className="font-display text-lg text-warm-charcoal mb-4">Notificaties</h3>
                  <div className="space-y-3">
                    {["E-mail bij nieuwe documenten", "E-mail bij deadline reminders", "Maandelijkse nieuwsbrief"].map((setting) => (
                      <label key={setting} className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" defaultChecked className="w-4 h-4 text-warm-terracotta" />
                        <span className="text-warm-charcoal">{setting}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
}
