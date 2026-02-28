/**
 * Customer Dashboard - "Mijn Dak"
 * Dakwerken Van der Berg
 * 
 * @description Customer view with roof diagram, documents, and photo gallery
 */

"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  LogOut,
  FileText,
  Image as ImageIcon,
  AlertTriangle,
  Phone,
  Droplets,
  Wind,
  Wrench,
  CheckCircle,
  Download,
  Calendar,
  MapPin,
  Shield,
  X,
} from "lucide-react";

// Demo customer data
const customerData = {
  name: "Jan Jansen",
  address: "Dorpsstraat 42, 1234 AB Utrecht",
  roofInstallationDate: "2022-03-15",
  warrantyEndDate: "2032-03-15",
  materials: ["Monier Stonewold", "Rhenofol onderdak"],
  lastInspection: "2023-09-20",
  nextInspection: "2024-09-20",
};

const documents = [
  { id: "1", name: "Garantiebewijs dakrenovatie", type: "garantie", date: "2022-03-20", size: "2.4 MB" },
  { id: "2", name: "Factuur #2022-0342", type: "factuur", date: "2022-03-15", size: "1.8 MB" },
  { id: "3", name: "Inspectierapport 2023", type: "inspectie", date: "2023-09-22", size: "4.2 MB" },
  { id: "4", name: "Onderhoudshandleiding", type: "overig", date: "2022-03-20", size: "3.1 MB" },
];

const photos = [
  { id: "1", type: "before" as const, date: "2022-03-10", description: "Oude situatie - voorzijde" },
  { id: "2", type: "before" as const, date: "2022-03-10", description: "Oude situatie - achterzijde" },
  { id: "3", type: "after" as const, date: "2022-03-25", description: "Nieuwe dakpannen geplaatst" },
  { id: "4", type: "after" as const, date: "2022-03-28", description: "Eindresultaat" },
  { id: "5", type: "inspectie" as const, date: "2023-09-20", description: "Jaarlijkse inspectie" },
];

// Roof Diagram Component (SVG)
function RoofDiagram() {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const sections = [
    { id: "voor", name: "Voorzijde", status: "vervangen", color: "#22c55e" },
    { id: "achter", name: "Achterzijde", status: "vervangen", color: "#22c55e" },
    { id: "links", name: "Linkerzijde", status: "origineel", color: "#94a3b8" },
    { id: "rechts", name: "Rechterzijde", status: "origineel", color: "#94a3b8" },
    { id: "schoorsteen", name: "Schoorsteen", status: "gerepareerd", color: "#f59e0b" },
  ];

  return (
    <div className="relative bg-sky-50 rounded-2xl p-6">
      <svg viewBox="0 0 300 200" className="w-full h-auto">
        {/* House base */}
        <rect x="50" y="120" width="200" height="80" fill="#f1f5f9" stroke="#475569" strokeWidth="2" />
        
        {/* Roof sections */}
        {/* Voorzijde - vervangen */}
        <polygon
          points="50,120 150,40 250,120"
          fill={hoveredSection === "voor" ? "#16a34a" : "#22c55e"}
          stroke="#166534"
          strokeWidth="2"
          className="cursor-pointer transition-colors"
          onMouseEnter={() => setHoveredSection("voor")}
          onMouseLeave={() => setHoveredSection(null)}
        />
        
        {/* Achterzijde - vervangen (simplified as back) */}
        <polygon
          points="50,120 20,100 150,20 280,100 250,120 150,40"
          fill={hoveredSection === "achter" ? "#16a34a" : "#22c55e"}
          stroke="#166534"
          strokeWidth="1"
          opacity="0.5"
          className="cursor-pointer transition-colors"
          onMouseEnter={() => setHoveredSection("achter")}
          onMouseLeave={() => setHoveredSection(null)}
        />
        
        {/* Schoorsteen - gerepareerd */}
        <rect
          x="180" y="50" width="30" height="50"
          fill={hoveredSection === "schoorsteen" ? "#d97706" : "#f59e0b"}
          stroke="#92400e"
          strokeWidth="2"
          className="cursor-pointer transition-colors"
          onMouseEnter={() => setHoveredSection("schoorsteen")}
          onMouseLeave={() => setHoveredSection(null)}
        />

        {/* Labels */}
        <text x="150" y="90" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
          VOORZIJDE
        </text>
        <text x="150" y="105" textAnchor="middle" fill="white" fontSize="10">
          Vervangen 2022
        </text>
      </svg>

      {/* Tooltip */}
      {hoveredSection && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-4 left-4 bg-white px-4 py-2 rounded-lg shadow-lg"
        >
          <div className="font-semibold text-storm-gray">
            {sections.find((s) => s.id === hoveredSection)?.name}
          </div>
          <div className="text-sm text-storm-gray/60">
            Status: {sections.find((s) => s.id === hoveredSection)?.status}
          </div>
        </motion.div>
      )}

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mt-4 text-sm">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded bg-green-500" />
          <span>Vervangen (garantie)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded bg-amber-500" />
          <span>Gerepareerd</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded bg-slate-400" />
          <span>Origineel</span>
        </div>
      </div>
    </div>
  );
}

// Report Modal
function ReportModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const reportTypes = [
    { id: "lekkage", label: "Lekkage", icon: Droplets, description: "Waterdruk of vochtplekken" },
    { id: "storm", label: "Stormschade", icon: Wind, description: "Losse of kapotte dakpannen" },
    { id: "onderhoud", label: "Onderhoud", icon: Wrench, description: "Jaarlijkse controle" },
    { id: "overig", label: "Overig", icon: AlertTriangle, description: "Andere vragen of problemen" },
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-3xl p-8 max-w-lg w-full max-h-[90vh] overflow-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-heading text-2xl font-bold text-storm-gray">
                Nieuwe melding
              </h2>
              <p className="text-storm-gray/60 text-sm">
                Waar gaat uw melding over?
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-storm-gray/10 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-storm-gray" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            {reportTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`p-4 rounded-xl border-2 transition-all text-left ${
                  selectedType === type.id
                    ? "border-safety-orange bg-safety-orange/5"
                    : "border-storm-gray/10 hover:border-safety-orange/50"
                }`}
              >
                <type.icon className={`w-8 h-8 mb-3 ${
                  selectedType === type.id ? "text-safety-orange" : "text-storm-gray/40"
                }`} />
                <div className="font-semibold text-storm-gray">{type.label}</div>
                <div className="text-xs text-storm-gray/60">{type.description}</div>
              </button>
            ))}
          </div>

          {selectedType && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-storm-gray mb-2">
                  Beschrijving
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-storm-gray/10 rounded-xl focus:border-safety-orange focus:outline-none"
                  placeholder="Beschrijf het probleem..."
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-storm-gray mb-2">
                  Foto&apos;s (optioneel)
                </label>
                <div className="border-2 border-dashed border-storm-gray/20 rounded-xl p-6 text-center hover:border-safety-orange/50 transition-colors cursor-pointer">
                  <ImageIcon className="w-8 h-8 text-storm-gray/30 mx-auto mb-2" />
                  <p className="text-sm text-storm-gray/50">Klik om foto&apos;s te uploaden</p>
                </div>
              </div>
            </div>
          )}

          <div className="flex gap-3 mt-6">
            <button
              onClick={onClose}
              className="flex-1 py-3 border-2 border-storm-gray/20 rounded-xl font-semibold text-storm-gray hover:border-storm-gray transition-colors"
            >
              Annuleren
            </button>
            <button
              disabled={!selectedType}
              className="flex-1 py-3 bg-safety-orange text-white font-semibold rounded-xl hover:bg-safety-orange/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Melding versturen
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function CustomerDashboard() {
  const router = useRouter();
  const [showReportModal, setShowReportModal] = useState(false);

  const handleLogout = () => {
    router.push("/mijn-dak/");
  };

  const getDocumentIcon = (type: string) => {
    switch (type) {
      case "garantie":
        return Shield;
      case "factuur":
        return FileText;
      case "inspectie":
        return CheckCircle;
      default:
        return FileText;
    }
  };

  return (
    <div className="min-h-screen bg-cloud-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-safety-orange flex items-center justify-center rounded-lg">
                <Home className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-heading font-bold text-storm-gray">Mijn Dak</div>
                <div className="text-storm-gray/50 text-sm">{customerData.name}</div>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-storm-gray/60 hover:text-storm-gray transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span className="hidden sm:inline">Uitloggen</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome & Quick Actions */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="font-heading text-3xl font-bold text-storm-gray mb-1">
              Welkom terug, {customerData.name.split(" ")[0]}
            </h1>
            <p className="text-storm-gray/60 flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {customerData.address}
            </p>
          </div>
          <button
            onClick={() => setShowReportModal(true)}
            className="btn-tile"
          >
            <span className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Nieuwe melding
            </span>
          </button>
        </div>

        {/* Dashboard Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Roof Status */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-heading text-xl font-bold text-storm-gray">Dakstatus</h2>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                  <CheckCircle className="w-4 h-4 inline mr-1" />
                  In goede staat
                </span>
              </div>
              <RoofDiagram />
            </div>

            {/* Photo Gallery */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="font-heading text-xl font-bold text-storm-gray mb-6">Foto&apos;s van uw dak</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {photos.map((photo, index) => (
                  <motion.div
                    key={photo.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative aspect-square bg-storm-gray/5 rounded-xl overflow-hidden group cursor-pointer"
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <ImageIcon className="w-12 h-12 text-storm-gray/20" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="text-sm font-medium">{photo.description}</div>
                      <div className="text-xs text-white/70">
                        {new Date(photo.date).toLocaleDateString("nl-NL")}
                      </div>
                    </div>
                    <div className="absolute top-2 right-2">
                      <span className={`px-2 py-0.5 text-xs rounded-full ${
                        photo.type === "before" ? "bg-storm-gray/80 text-white" :
                        photo.type === "after" ? "bg-green-500 text-white" :
                        "bg-sky-blue text-white"
                      }`}>
                        {photo.type === "before" ? "Voor" : photo.type === "after" ? "Na" : "Inspectie"}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Warranty Info */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="font-heading text-xl font-bold text-storm-gray mb-4">Garantie</h2>
              <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-storm-gray">10 jaar garantie</div>
                  <div className="text-sm text-storm-gray/60">
                    Geldig tot {new Date(customerData.warrantyEndDate).toLocaleDateString("nl-NL")}
                  </div>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-storm-gray/60">Installatiedatum</span>
                  <span className="font-medium">{new Date(customerData.roofInstallationDate).toLocaleDateString("nl-NL")}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-storm-gray/60">Laatste inspectie</span>
                  <span className="font-medium">{new Date(customerData.lastInspection).toLocaleDateString("nl-NL")}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-storm-gray/60">Volgende inspectie</span>
                  <span className="font-medium text-safety-orange">{new Date(customerData.nextInspection).toLocaleDateString("nl-NL")}</span>
                </div>
              </div>
            </div>

            {/* Documents */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="font-heading text-xl font-bold text-storm-gray mb-4">Documenten</h2>
              <div className="space-y-3">
                {documents.map((doc) => {
                  const Icon = getDocumentIcon(doc.type);
                  return (
                    <div
                      key={doc.id}
                      className="flex items-center gap-3 p-3 bg-storm-gray/5 rounded-xl hover:bg-storm-gray/10 transition-colors cursor-pointer group"
                    >
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-storm-gray/60" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-storm-gray truncate">{doc.name}</div>
                        <div className="text-xs text-storm-gray/50">
                          {new Date(doc.date).toLocaleDateString("nl-NL")} • {doc.size}
                        </div>
                      </div>
                      <Download className="w-5 h-5 text-storm-gray/30 group-hover:text-safety-orange transition-colors" />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-emergency-red rounded-2xl p-6 text-white">
              <h2 className="font-heading text-lg font-bold mb-2">Spoedhulp nodig?</h2>
              <p className="text-white/80 text-sm mb-4">
                Bij acute lekkage of stormschade helpen wij 24/7.
              </p>
              <a
                href="tel:0612345678"
                className="flex items-center justify-center gap-2 w-full py-3 bg-white text-emergency-red font-semibold rounded-xl hover:bg-white/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
                06-12345678
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Report Modal */}
      <ReportModal isOpen={showReportModal} onClose={() => setShowReportModal(false)} />
    </div>
  );
}
