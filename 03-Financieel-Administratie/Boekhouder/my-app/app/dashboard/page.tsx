"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  User,
  FileText,
  Bell,
  Calendar,
  Download,
  Mail,
  Settings,
  LogOut,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { GlassCard } from "@/components/custom/GlassCard";
import { useAuth } from "@/lib/context/AuthContext";

const documents = [
  { name: "Jaarrekening 2023.pdf", date: "15 januari 2024", size: "2.4 MB", status: "completed" },
  { name: "BTW-aangifte Q4 2023.pdf", date: "31 december 2023", size: "1.2 MB", status: "completed" },
  { name: "Loonstroken december 2023.pdf", date: "31 december 2023", size: "3.1 MB", status: "completed" },
  { name: "Provisieoverzicht 2023.pdf", date: "2 januari 2024", size: "0.8 MB", status: "pending" },
];

const messages = [
  {
    id: 1,
    subject: "Jaarrekening 2023 gereed",
    preview: "Uw jaarrekening voor 2023 is gereed voor review...",
    date: "15 jan",
    unread: true,
  },
  {
    id: 2,
    subject: "BTW-aangifte reminder",
    preview: "Vergeet niet om uw btw-aangifte voor Q1 2024 te controleren...",
    date: "10 jan",
    unread: true,
  },
  {
    id: 3,
    subject: "Nieuw fiscaal jaar",
    preview: "Belangrijke wijzigingen voor het nieuwe fiscale jaar...",
    date: "2 jan",
    unread: false,
  },
];

const upcomingAppointments = [
  { date: "20 jan", time: "14:00", title: "Jaaroverzicht bespreken" },
  { date: "5 feb", time: "10:30", title: "Belastingplanning 2024" },
];

export default function DashboardPage() {
  const { user, logout, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login");
    }
    if (!isLoading && user?.role === "admin") {
      router.push("/admin");
    }
  }, [user, isLoading, router]);

  if (isLoading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-2 border-[#d4af37] border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-8 pb-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold text-[#1e3a5f] dark:text-white">
              Mijn Dashboard
            </h1>
            <p className="text-muted-foreground">
              Welkom terug, {user.name}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-xl glass-card text-[#1e3a5f] dark:text-white hover:bg-[#1e3a5f]/10">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#d4af37]" />
            </button>
            <button
              onClick={logout}
              className="flex items-center gap-2 px-4 py-2 rounded-xl glass-card text-[#1e3a5f] dark:text-white hover:bg-red-500/10 hover:text-red-500 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Uitloggen</span>
            </button>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Documenten", value: "12", icon: FileText },
            { label: "Ongelezen berichten", value: "2", icon: Mail, highlight: true },
            { label: "Afspraken", value: "2", icon: Calendar },
            { label: "Lopende taken", value: "1", icon: Clock },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    stat.highlight ? "bg-[#d4af37]/20" : "bg-[#1e3a5f]/10"
                  }`}>
                    <Icon className={`w-6 h-6 ${stat.highlight ? "text-[#d4af37]" : "text-[#1e3a5f] dark:text-white"}`} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#1e3a5f] dark:text-white">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <GlassCard className="h-full">
              <div className="text-center mb-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#1e3a5f] to-[#2a4a73] flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-[#d4af37]" />
                </div>
                <h2 className="text-xl font-bold text-[#1e3a5f] dark:text-white">{user.name}</h2>
                <p className="text-sm text-muted-foreground">{user.email}</p>
                <span className="inline-block mt-2 px-3 py-1 rounded-full bg-[#d4af37]/20 text-[#d4af37] text-xs font-medium">
                  Actief lid
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Klantnummer</span>
                  <span className="font-medium text-[#1e3a5f] dark:text-white">#DB-2024-001</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Pakket</span>
                  <span className="font-medium text-[#1e3a5f] dark:text-white">Business</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Sinds</span>
                  <span className="font-medium text-[#1e3a5f] dark:text-white">januari 2022</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-[#1e3a5f]/10">
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-[#1e3a5f]/20 text-[#1e3a5f] dark:text-white hover:bg-[#1e3a5f]/10 transition-colors">
                  <Settings className="w-4 h-4" />
                  Profiel bewerken
                </button>
              </div>
            </GlassCard>
          </motion.div>

          {/* Documents */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <GlassCard className="h-full">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-[#1e3a5f] dark:text-white">
                  Recent Documenten
                </h2>
                <button className="text-sm text-[#d4af37] hover:underline">
                  Alle documenten
                </button>
              </div>

              <div className="space-y-3">
                {documents.map((doc, index) => (
                  <div
                    key={doc.name}
                    className="flex items-center justify-between p-4 rounded-xl bg-[#1e3a5f]/5 dark:bg-white/5 hover:bg-[#1e3a5f]/10 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#d4af37]/20 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-[#d4af37]" />
                      </div>
                      <div>
                        <p className="font-medium text-[#1e3a5f] dark:text-white text-sm">
                          {doc.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {doc.date} • {doc.size}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {doc.status === "completed" ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-yellow-500" />
                      )}
                      <button className="p-2 rounded-lg hover:bg-[#1e3a5f]/10 transition-colors">
                        <Download className="w-4 h-4 text-[#1e3a5f] dark:text-white" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Messages */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <GlassCard>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-[#1e3a5f] dark:text-white">
                  Berichten
                </h2>
                <button className="text-sm text-[#d4af37] hover:underline">
                  Alles bekijken
                </button>
              </div>

              <div className="space-y-3">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`p-4 rounded-xl cursor-pointer transition-colors ${
                      msg.unread
                        ? "bg-[#d4af37]/10 border border-[#d4af37]/20"
                        : "bg-[#1e3a5f]/5 dark:bg-white/5 hover:bg-[#1e3a5f]/10"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <p className={`text-sm ${msg.unread ? "font-semibold" : ""} text-[#1e3a5f] dark:text-white`}>
                        {msg.subject}
                      </p>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">{msg.date}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                      {msg.preview}
                    </p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Appointments */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <GlassCard>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-[#1e3a5f] dark:text-white">
                  Afspraken
                </h2>
                <button className="text-sm text-[#d4af37] hover:underline">
                  Nieuwe afspraak
                </button>
              </div>

              <div className="space-y-3">
                {upcomingAppointments.map((apt, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-[#1e3a5f]/5 dark:bg-white/5"
                  >
                    <div className="w-14 h-14 rounded-xl bg-[#d4af37]/20 flex flex-col items-center justify-center">
                      <span className="text-xs text-[#d4af37] font-bold">{apt.date.split(" ")[0]}</span>
                      <span className="text-xs text-[#d4af37]">{apt.date.split(" ")[1]}</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-[#1e3a5f] dark:text-white text-sm">
                        {apt.title}
                      </p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {apt.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 py-3 rounded-xl border border-dashed border-[#1e3a5f]/30 text-[#1e3a5f] dark:text-white/70 text-sm hover:bg-[#1e3a5f]/5 transition-colors">
                + Afspraak inplannen
              </button>
            </GlassCard>
          </motion.div>

          {/* Upload Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <GlassCard className="h-full flex flex-col items-center justify-center text-center p-8 border-dashed border-2 border-[#1e3a5f]/20">
              <div className="w-16 h-16 rounded-full bg-[#d4af37]/20 flex items-center justify-center mb-4">
                <FileText className="w-8 h-8 text-[#d4af37]" />
              </div>
              <h3 className="text-lg font-bold text-[#1e3a5f] dark:text-white mb-2">
                Document uploaden
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Sleep uw jaarrekening of andere documenten hierheen
              </p>
              <button className="px-4 py-2 rounded-xl bg-[#1e3a5f] text-white text-sm font-medium hover:bg-[#2a4a73] transition-colors">
                Bestand selecteren
              </button>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
