/**
 * Klant Portal (/portal)
 * Van den Berg Timmerwerken
 * 
 * Customer project tracking portal
 * - Login for demo clients
 * - Visual project timeline
 * - Current phase highlighting
 * - Photo updates from workshop
 * - Delivery countdown
 * 
 * DEMO - All data is fictional
 */

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User,
  Lock,
  Package,
  Clock,
  CheckCircle2,
  Circle,
  Download,
  MessageCircle,
  Calendar,
  Image as ImageIcon,
  Send,
  LogOut
} from "lucide-react";
import { CUSTOMER_PROJECTS } from "@/lib/data";

// Phase configuration
const PHASES = [
  { id: "ontwerp", label: "Ontwerp", icon: Circle },
  { id: "productie", label: "Productie", icon: Circle },
  { id: "afwerking", label: "Afwerking", icon: Circle },
  { id: "oplevering", label: "Oplevering", icon: CheckCircle2 },
];

export default function PortalPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [showChat, setShowChat] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [messages, setMessages] = useState([
    { sender: "timmerman", text: "Hallo! Uw kast is nu in de afwerkingsfase. De eerste laag lak is aangebracht.", time: "Gisteren, 16:30" },
  ]);

  // Use first demo project
  const project = CUSTOMER_PROJECTS[0];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo login - accepts any input
    setIsLoggedIn(true);
  };

  const handleSendMessage = () => {
    if (!chatMessage.trim()) return;
    setMessages([...messages, { sender: "klant", text: chatMessage, time: "Nu" }]);
    setChatMessage("");
    // Auto-reply after 1 second
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        sender: "timmerman", 
        text: "Bedankt voor uw bericht. Ik antwoord zo spoedig mogelijk.", 
        time: "Nu" 
      }]);
    }, 1000);
  };

  // Calculate days until delivery
  const deliveryDate = new Date(project.estimatedDelivery);
  const today = new Date();
  const daysLeft = Math.ceil((deliveryDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#F5F5DC] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          {/* Demo Warning */}
          <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-xl text-center">
            <p className="text-amber-800 text-sm">
              ⚠️ DEMO - Klant portal voor demonstratiedoeleinden
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#8B5A2B] to-[#D4AF37] flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <h1 className="font-playfair text-2xl font-bold text-[#3E2723]">
                Mijn Project
              </h1>
              <p className="text-[#4A5568] text-sm mt-1">
                Volg de voortgang van uw meubel
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#3E2723] mb-2">
                  E-mailadres
                </label>
                <input
                  type="email"
                  placeholder="uw@email.nl"
                  value={loginData.email}
                  onChange={(e) => setLoginData(d => ({ ...d, email: e.target.value }))}
                  className="w-full px-4 py-3 border border-[#8B5A2B]/30 rounded-lg focus:border-[#8B5A2B] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#3E2723] mb-2">
                  Wachtwoord
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={loginData.password}
                  onChange={(e) => setLoginData(d => ({ ...d, password: e.target.value }))}
                  className="w-full px-4 py-3 border border-[#8B5A2B]/30 rounded-lg focus:border-[#8B5A2B] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-[#8B5A2B] to-[#D4AF37] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Inloggen
              </button>
            </form>

            <p className="text-center text-[#4A5568]/60 text-xs mt-6">
              DEMO: Vul willekeurige gegevens in
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      {/* Header */}
      <header className="bg-white border-b border-[#8B5A2B]/10 sticky top-0 z-30">
        <div className="px-4 sm:px-6 py-4 flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#8B5A2B] to-[#D4AF37] flex items-center justify-center">
              <Package className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="font-playfair font-bold text-[#3E2723]">Mijn Project</h1>
              <p className="text-xs text-[#4A5568]">{project.id}</p>
            </div>
          </div>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="flex items-center gap-2 px-4 py-2 text-sm text-[#4A5568] hover:text-[#8B5A2B] transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">Uitloggen</span>
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Project Overview */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Main Info */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="font-playfair text-2xl font-bold text-[#3E2723] mb-1">
                  {project.furnitureType}
                </h2>
                <p className="text-[#4A5568]">{project.customerName}</p>
              </div>
              <span className="px-4 py-2 bg-[#8B5A2B]/10 text-[#8B5A2B] rounded-full font-medium">
                {project.woodType}
              </span>
            </div>

            {/* Timeline */}
            <div className="mb-8">
              <div className="relative">
                {/* Progress line */}
                <div className="absolute top-[20px] left-0 right-0 h-1 bg-[#4A5568]/10 rounded-full" />
                <div 
                  className="absolute top-[20px] left-0 h-1 bg-gradient-to-r from-[#8B5A2B] to-[#D4AF37] rounded-full transition-all duration-1000"
                  style={{ width: `${(project.status.filter(s => s.status === "completed").length / 4) * 100}%` }}
                />

                {/* Steps */}
                <div className="relative flex justify-between">
                  {PHASES.map((phase, index) => {
                    const phaseStatus = project.status[index];
                    const isCompleted = phaseStatus?.status === "completed";
                    const isCurrent = phaseStatus?.status === "current";

                    return (
                      <div key={phase.id} className="flex flex-col items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-all ${
                          isCompleted 
                            ? "bg-[#8B5A2B] text-white" 
                            : isCurrent 
                              ? "bg-[#D4AF37] text-[#3E2723] ring-4 ring-[#D4AF37]/30"
                              : "bg-white border-2 border-[#4A5568]/20 text-[#4A5568]/40"
                        }`}>
                          {isCompleted ? (
                            <CheckCircle2 className="w-5 h-5" />
                          ) : (
                            <phase.icon className="w-5 h-5" />
                          )}
                        </div>
                        <span className={`text-sm font-medium ${
                          isCompleted || isCurrent ? "text-[#3E2723]" : "text-[#4A5568]/50"
                        }`}>
                          {phase.label}
                        </span>
                        {phaseStatus?.date && (
                          <span className="text-xs text-[#4A5568]/50 mt-1">
                            {phaseStatus.date}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Current Phase */}
            <div className="bg-[#D4AF37]/10 rounded-xl p-4 border border-[#D4AF37]/20">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-5 h-5 text-[#8B5A2B]" />
                <span className="font-semibold text-[#3E2723]">Huidige fase</span>
              </div>
              <p className="text-[#4A5568]">{project.currentPhase}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Delivery Countdown */}
            <div className="bg-[#3E2723] rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-5 h-5 text-[#D4AF37]" />
                <span className="font-semibold">Verwachte oplevering</span>
              </div>
              <p className="text-3xl font-bold text-[#D4AF37] mb-1">
                {daysLeft > 0 ? `${daysLeft} dagen` : "Binnenkort!"}
              </p>
              <p className="text-sm text-white/60">{project.estimatedDelivery}</p>
            </div>

            {/* Wood Certificate */}
            {project.hasCertificate && (
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#22C55E]/10 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#3E2723]">Hout Certificaat</p>
                    <p className="text-xs text-[#4A5568]">FSC gecertificeerd</p>
                  </div>
                </div>
                <button className="flex items-center gap-2 w-full py-2 px-4 bg-[#8B5A2B]/10 text-[#8B5A2B] rounded-lg hover:bg-[#8B5A2B]/20 transition-colors text-sm">
                  <Download className="w-4 h-4" />
                  Download PDF
                </button>
              </div>
            )}

            {/* Chat Button */}
            <button
              onClick={() => setShowChat(true)}
              className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-[#8B5A2B] to-[#D4AF37] text-white rounded-2xl font-semibold hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="w-5 h-5" />
              Stuur bericht aan timmerman
            </button>
          </div>
        </div>

        {/* Photo Updates */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="font-playfair text-xl font-bold text-[#3E2723] mb-6 flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-[#8B5A2B]" />
            Updates uit de werkplaats
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative aspect-square rounded-xl overflow-hidden bg-[#4A5568]/10">
                <div className="absolute inset-0 flex items-center justify-center text-[#4A5568]/30">
                  <ImageIcon className="w-8 h-8" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-xs text-white/80">Werkplaats update #{i}</p>
                  <p className="text-xs text-white/60">{new Date().toLocaleDateString("nl-NL")}</p>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-sm text-[#4A5568]/60 text-center mt-4">
            DEMO - Foto&apos;s zijn voorbeelden
          </p>
        </div>
      </main>

      {/* Chat Modal */}
      <AnimatePresence>
        {showChat && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 flex items-end sm:items-center justify-center p-4"
          >
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              className="bg-white rounded-2xl w-full max-w-lg overflow-hidden"
            >
              {/* Chat Header */}
              <div className="p-4 bg-gradient-to-r from-[#8B5A2B] to-[#D4AF37] text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Henk van den Berg</p>
                    <p className="text-xs text-white/80">Meestal binnen 2 uur reactie</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowChat(false)}
                  className="p-2 hover:bg-white/20 rounded-lg"
                >
                  ✕
                </button>
              </div>

              {/* Chat Messages */}
              <div className="h-80 overflow-y-auto p-4 space-y-4 bg-[#F5F5DC]">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.sender === "klant" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl ${
                        msg.sender === "klant"
                          ? "bg-[#8B5A2B] text-white rounded-br-sm"
                          : "bg-white text-[#3E2723] rounded-bl-sm"
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                      <p className={`text-xs mt-1 ${msg.sender === "klant" ? "text-white/60" : "text-[#4A5568]/60"}`}>
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <div className="p-4 bg-white border-t border-[#8B5A2B]/10 flex gap-2">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Typ een bericht..."
                  className="flex-1 px-4 py-2 border border-[#8B5A2B]/20 rounded-lg focus:border-[#8B5A2B] focus:outline-none"
                />
                <button
                  onClick={handleSendMessage}
                  className="px-4 py-2 bg-[#8B5A2B] text-white rounded-lg hover:bg-[#6B4423] transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
