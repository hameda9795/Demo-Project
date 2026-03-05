"use client";

import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Menu,
  X,
  Calendar,
  Users,
  Clock,
  Coffee,
  Utensils,
  Wifi,
  User,
  Lock,
  LogOut,
  ChevronRight,
  Key,
  Check,
} from "lucide-react";

// ============================================
// TYPES
// ============================================
type UserRole = "admin" | "guest" | null;

interface Booking {
  id: string;
  guestName: string;
  room: string;
  checkIn: string;
  checkOut: string;
  status: "confirmed" | "pending" | "checked-in" | "checked-out";
}

interface RoomServiceItem {
  id: string;
  name: string;
  price: number;
  category: string;
}

// ============================================
// DEMO DATA
// ============================================
const DEMO_BOOKINGS: Booking[] = [
  {
    id: "B001",
    guestName: "Anna de Vries",
    room: "Suite Canal View",
    checkIn: "2024-03-15",
    checkOut: "2024-03-18",
    status: "confirmed",
  },
  {
    id: "B002",
    guestName: "Jan Jansen",
    room: "Deluxe Kamer",
    checkIn: "2024-03-16",
    checkOut: "2024-03-20",
    status: "checked-in",
  },
  {
    id: "B003",
    guestName: "Maria van Berg",
    room: "Superior Kamer",
    checkIn: "2024-03-18",
    checkOut: "2024-03-22",
    status: "pending",
  },
];

const ROOM_SERVICE_MENU: RoomServiceItem[] = [
  { id: "R001", name: "Continentaal Ontbijt", price: 18, category: "Ontbijt" },
  { id: "R002", name: "Hollands Ontbijt", price: 22, category: "Ontbijt" },
  { id: "R003", name: "Caesar Salad", price: 14, category: "Lunch" },
  { id: "R004", name: "Uitsmijter", price: 12, category: "Lunch" },
  { id: "R005", name: "Tomatensoep", price: 8, category: "Diner" },
  { id: "R006", name: "Stamppot", price: 16, category: "Diner" },
  { id: "R007", name: "Fles Rode Wijn", price: 28, category: "Drank" },
  { id: "R008", name: "Koffie & Gebak", price: 9, category: "Drank" },
];

// ============================================
// IMAGE PLACEHOLDER COMPONENT
// ============================================
const ImagePlaceholder = ({
  description,
  aspectRatio = "3/2",
  className = "",
  imagePath,
}: {
  description: string;
  aspectRatio?: string;
  className?: string;
  imagePath?: string;
}) => (
  <div
    className={`bg-gray-200 relative overflow-hidden ${className}`}
    style={{ aspectRatio }}
  >
    {imagePath ? (
      <img
        src={imagePath}
        alt={description}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    ) : (
      <>
        {/* Replace with local optimized WebP/JPG images */}
        <span className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm sm:text-base px-4 text-center">
          Image: {description}
        </span>
        <div className="absolute inset-0 border-2 border-dashed border-gray-300 m-2" />
      </>
    )}
  </div>
);

// ============================================
// PARALLAX VIEW COMPONENT (Abstract window view)
// ============================================
const ParallaxWindow = () => {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight));
        setScrollY(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-[70vh] sm:h-[80vh] overflow-hidden border-y-[6px] border-teal"
    >
      {/* Layer 1: Sky/Background */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-blue-100 to-cream"
        style={{ transform: `translateY(${scrollY * 20}px)` }}
      />
      
      {/* Layer 2: Distant buildings */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/2 opacity-60"
        style={{ transform: `translateY(${scrollY * 40}px)` }}
      >
        <svg viewBox="0 0 1200 300" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0,300 L0,200 L100,180 L150,220 L200,160 L280,200 L350,140 L450,190 L550,120 L650,180 L750,150 L850,200 L950,130 L1050,170 L1150,140 L1200,190 L1200,300 Z" fill="#d4d4d4" />
        </svg>
      </div>

      {/* Layer 3: Mid-ground (Domtoren silhouette) */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 sm:w-72 opacity-80"
        style={{ transform: `translateX(-50%) translateY(${scrollY * 60}px)` }}
      >
        <svg viewBox="0 0 200 400" className="w-full">
          <path
            d="M100,0 L120,40 L120,80 L140,100 L140,400 L60,400 L60,100 L80,80 L80,40 Z"
            fill="#0f766e"
            opacity="0.3"
          />
          <path
            d="M100,0 L110,25 L110,60 L125,75 L125,400 L75,400 L75,75 L90,60 L90,25 Z"
            fill="#0f766e"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Layer 4: Window frame */}
      <div className="absolute inset-4 sm:inset-8 border-[8px] sm:border-[12px] border-teal pointer-events-none">
        <div className="absolute top-1/2 left-0 right-0 h-[8px] sm:h-[12px] bg-teal -translate-y-1/2" />
        <div className="absolute left-1/2 top-0 bottom-0 w-[8px] sm:w-[12px] bg-teal -translate-x-1/2" />
      </div>

      {/* Text overlay */}
      <div className="absolute bottom-8 sm:bottom-16 left-8 sm:left-16 max-w-md">
        <p className="font-serif text-2xl sm:text-4xl text-teal italic leading-tight">
          &ldquo;Uitzicht op de stad&rdquo;
        </p>
        <p className="mt-4 text-sm sm:text-base text-charcoal/70">
          Elke kamer biedt een uniek perspectief op Utrecht
        </p>
      </div>
    </div>
  );
};

// ============================================
// ADMIN DASHBOARD COMPONENT
// ============================================
const AdminDashboard = ({ onClose }: { onClose: () => void }) => {
  const [activeTab, setActiveTab] = useState<"calendar" | "rooms" | "guests">("calendar");

  return (
    <div className="fixed inset-0 bg-cream z-50 overflow-auto">
      <div className="max-w-6xl mx-auto p-4 sm:p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b-4 border-teal">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-teal">Admin Dashboard</h2>
            <p className="text-sm text-charcoal/60 mt-1">Hotel Demo Utrecht - Beheerpaneel</p>
          </div>
          <button
            onClick={onClose}
            className="p-3 hover:bg-teal/10 rounded-full transition-colors"
            aria-label="Sluiten"
          >
            <X className="w-6 h-6 text-teal" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto">
          {[
            { id: "calendar", label: "Kalender", icon: Calendar },
            { id: "rooms", label: "Kamers", icon: Key },
            { id: "guests", label: "Gasten", icon: Users },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex items-center gap-2 px-4 sm:px-6 py-3 rounded-full text-sm font-medium transition-all whitespace-nowrap min-h-[48px] ${
                activeTab === tab.id
                  ? "bg-teal text-white"
                  : "bg-white text-teal border-2 border-teal hover:bg-teal/5"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white border-4 border-teal rounded-lg p-4 sm:p-6">
          {activeTab === "calendar" && (
            <div>
              <h3 className="font-serif text-xl sm:text-2xl mb-4">Boekingskalender</h3>
              <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-4">
                {["Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"].map((day) => (
                  <div key={day} className="text-center py-2 font-medium text-sm text-charcoal/60">
                    {day}
                  </div>
                ))}
                {Array.from({ length: 31 }, (_, i) => (
                  <div
                    key={i}
                    className={`aspect-square flex items-center justify-center text-sm border-2 rounded-lg ${
                      [15, 16, 17, 20, 21].includes(i + 1)
                        ? "bg-teal/20 border-teal font-medium"
                        : "border-gray-200 hover:border-teal/50"
                    }`}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 mt-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-teal/20 border-2 border-teal rounded" />
                  <span>Bezet</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-gray-200 rounded" />
                  <span>Beschikbaar</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "rooms" && (
            <div>
              <h3 className="font-serif text-xl sm:text-2xl mb-4">Kamer Beschikbaarheid</h3>
              <div className="space-y-3">
                {[
                  { name: "Suite Canal View", total: 4, available: 2 },
                  { name: "Deluxe Kamer", total: 8, available: 5 },
                  { name: "Superior Kamer", total: 12, available: 8 },
                  { name: "Standaard Kamer", total: 6, available: 3 },
                ].map((room) => (
                  <div
                    key={room.name}
                    className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg hover:border-teal/50 transition-colors"
                  >
                    <div>
                      <p className="font-medium">{room.name}</p>
                      <p className="text-sm text-charcoal/60">
                        {room.available} van {room.total} beschikbaar
                      </p>
                    </div>
                    <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-teal rounded-full"
                        style={{ width: `${(room.available / room.total) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "guests" && (
            <div>
              <h3 className="font-serif text-xl sm:text-2xl mb-4">Gastenbeheer</h3>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px]">
                  <thead>
                    <tr className="border-b-2 border-teal">
                      <th className="text-left py-3 px-2 font-medium">Naam</th>
                      <th className="text-left py-3 px-2 font-medium">Kamer</th>
                      <th className="text-left py-3 px-2 font-medium">Check-in</th>
                      <th className="text-left py-3 px-2 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {DEMO_BOOKINGS.map((booking) => (
                      <tr key={booking.id} className="border-b border-gray-200">
                        <td className="py-3 px-2">{booking.guestName}</td>
                        <td className="py-3 px-2">{booking.room}</td>
                        <td className="py-3 px-2">{booking.checkIn}</td>
                        <td className="py-3 px-2">
                          <span
                            className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs ${
                              booking.status === "confirmed"
                                ? "bg-green-100 text-green-700"
                                : booking.status === "checked-in"
                                ? "bg-teal/20 text-teal"
                                : "bg-yellow-100 text-yellow-700"
                            }`}
                          >
                            <div
                              className={`w-1.5 h-1.5 rounded-full ${
                                booking.status === "confirmed"
                                  ? "bg-green-500"
                                  : booking.status === "checked-in"
                                  ? "bg-teal"
                                  : "bg-yellow-500"
                              }`}
                            />
                            {booking.status === "confirmed"
                              ? "Bevestigd"
                              : booking.status === "checked-in"
                              ? "Ingecheckt"
                              : "In afwachting"}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ============================================
// GUEST PORTAL COMPONENT
// ============================================
const GuestPortal = ({ onClose }: { onClose: () => void }) => {
  const [activeTab, setActiveTab] = useState<"booking" | "services">("booking");
  const currentBooking = DEMO_BOOKINGS[0];

  return (
    <div className="fixed inset-0 bg-cream z-50 overflow-auto">
      <div className="max-w-4xl mx-auto p-4 sm:p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b-4 border-teal">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-teal">Mijn Verblijf</h2>
            <p className="text-sm text-charcoal/60 mt-1">Welkom, {currentBooking.guestName}</p>
          </div>
          <button
            onClick={onClose}
            className="p-3 hover:bg-teal/10 rounded-full transition-colors"
            aria-label="Sluiten"
          >
            <X className="w-6 h-6 text-teal" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {[
            { id: "booking", label: "Mijn Boeking", icon: Calendar },
            { id: "services", label: "Room Service", icon: Coffee },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex items-center gap-2 px-4 sm:px-6 py-3 rounded-full text-sm font-medium transition-all min-h-[48px] ${
                activeTab === tab.id
                  ? "bg-teal text-white"
                  : "bg-white text-teal border-2 border-teal hover:bg-teal/5"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white border-4 border-teal rounded-lg p-4 sm:p-6">
          {activeTab === "booking" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-cream rounded-lg border-2 border-gray-200">
                  <div className="flex items-center gap-2 text-teal mb-2">
                    <Calendar className="w-5 h-5" />
                    <span className="font-medium">Check-in</span>
                  </div>
                  <p className="text-2xl font-serif">15 maart 2024</p>
                  <p className="text-sm text-charcoal/60">Vanaf 15:00</p>
                </div>
                <div className="p-4 bg-cream rounded-lg border-2 border-gray-200">
                  <div className="flex items-center gap-2 text-teal mb-2">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium">Check-out</span>
                  </div>
                  <p className="text-2xl font-serif">18 maart 2024</p>
                  <p className="text-sm text-charcoal/60">Tot 11:00</p>
                </div>
              </div>

              <div className="p-4 border-2 border-teal rounded-lg">
                <h4 className="font-medium text-lg mb-3">Kamer Details</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-charcoal/60">Kamertype</span>
                    <span className="font-medium">{currentBooking.room}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-charcoal/60">Boekingsnummer</span>
                    <span className="font-medium">#{currentBooking.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-charcoal/60">Status</span>
                    <span className="inline-flex items-center gap-1 text-teal">
                      <Check className="w-4 h-4" />
                      Bevestigd
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { icon: Wifi, label: "Gratis WiFi" },
                  { icon: Coffee, label: "Ontbijt inbegrepen" },
                  { icon: Utensils, label: "Room Service" },
                  { icon: Key, label: "Sleutelloze toegang" },
                ].map((amenity) => (
                  <div
                    key={amenity.label}
                    className="flex flex-col items-center gap-2 p-3 bg-cream rounded-lg text-center"
                  >
                    <amenity.icon className="w-6 h-6 text-teal" />
                    <span className="text-xs text-charcoal/70">{amenity.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "services" && (
            <div>
              <h3 className="font-serif text-xl sm:text-2xl mb-4">Room Service Menu</h3>
              <div className="space-y-4">
                {["Ontbijt", "Lunch", "Diner", "Drank"].map((category) => (
                  <div key={category}>
                    <h4 className="font-medium text-teal mb-2 flex items-center gap-2">
                      <div className="w-2 h-2 bg-teal rounded-full" />
                      {category}
                    </h4>
                    <div className="space-y-2 ml-4">
                      {ROOM_SERVICE_MENU.filter((item) => item.category === category).map(
                        (item) => (
                          <div
                            key={item.id}
                            className="flex items-center justify-between p-3 bg-cream rounded-lg hover:bg-teal/5 transition-colors cursor-pointer"
                          >
                            <span className="text-sm">{item.name}</span>
                            <span className="font-medium text-teal">€{item.price}</span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ============================================
// LOGIN MODAL COMPONENT
// ============================================
const LoginModal = ({
  isOpen,
  onClose,
  onLogin,
}: {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (role: UserRole) => void;
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (username === "demo" && password === "demo123") {
      onLogin("admin");
      onClose();
    } else if (username === "gast" && password === "demo123") {
      onLogin("guest");
      onClose();
    } else {
      setError("Ongeldige inloggegevens");
    }
  };

  return (
    <div className="fixed inset-0 bg-charcoal/50 z-50 flex items-center justify-center p-4">
      <div className="bg-cream w-full max-w-md border-4 border-teal rounded-lg p-6 sm:p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-serif text-2xl text-teal">Demo Login</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-teal/10 rounded-full transition-colors"
            aria-label="Sluiten"
          >
            <X className="w-5 h-5 text-teal" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Gebruikersnaam</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-teal focus:outline-none transition-colors"
              placeholder="demo of gast"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Wachtwoord</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-teal focus:outline-none transition-colors"
              placeholder="demo123"
            />
          </div>

          {error && (
            <p className="text-red-600 text-sm flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-red-600 rounded-full" />
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-teal text-white rounded-lg font-medium hover:bg-teal-dark transition-colors min-h-[48px]"
          >
            Inloggen
          </button>
        </form>

        <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
          <p className="text-xs text-charcoal/60 mb-2">Demo accounts:</p>
          <div className="space-y-1 text-xs">
            <p>
              <span className="font-medium">Admin:</span> demo / demo123
            </p>
            <p>
              <span className="font-medium">Gast:</span> gast / demo123
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================
// MAIN PAGE COMPONENT
// ============================================
export default function HotelPage() {
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    setUserRole(null);
  };

  const navLinks = [
    { href: "#kamers", label: "Kamers" },
    { href: "#sfeer", label: "Sfeer" },
    { href: "#locatie", label: "Locatie" },
    { href: "#boeken", label: "Boeken" },
  ];

  return (
    <main className="min-h-screen bg-cream">
      {/* ============================================
          HEADER
      ============================================ */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrollY > 100 ? "bg-cream/95 backdrop-blur-sm shadow-editorial" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a href="#" className="font-serif text-xl sm:text-2xl text-teal">
              Hotel Demo Utrecht
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-charcoal/70 hover:text-teal transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              {/* Demo Badge */}
              <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1 bg-teal/10 text-teal text-xs rounded-full">
                <Lock className="w-3 h-3" />
                Demo
              </span>

              {/* User Actions */}
              {userRole ? (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {}}
                    className="flex items-center gap-2 px-4 py-2 bg-teal text-white rounded-full text-sm font-medium hover:bg-teal-dark transition-colors min-h-[40px]"
                  >
                    <User className="w-4 h-4" />
                    <span className="hidden sm:inline">
                      {userRole === "admin" ? "Admin" : "Mijn Verblijf"}
                    </span>
                  </button>
                  <button
                    onClick={handleLogout}
                    className="p-2 hover:bg-teal/10 rounded-full transition-colors"
                    aria-label="Uitloggen"
                  >
                    <LogOut className="w-5 h-5 text-teal" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsLoginOpen(true)}
                  className="flex items-center gap-2 px-4 py-2 border-2 border-teal text-teal rounded-full text-sm font-medium hover:bg-teal hover:text-white transition-colors min-h-[40px]"
                >
                  <User className="w-4 h-4" />
                  <span className="hidden sm:inline">Demo Login</span>
                </button>
              )}

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 hover:bg-teal/10 rounded-full transition-colors"
                aria-label={isMobileMenuOpen ? "Menu sluiten" : "Menu openen"}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-teal" />
                ) : (
                  <Menu className="w-6 h-6 text-teal" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-cream border-t-2 border-teal">
            <nav className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 px-4 text-charcoal hover:bg-teal/5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 mt-2 border-t border-gray-200">
                <span className="flex items-center gap-2 px-4 py-2 text-sm text-teal">
                  <Lock className="w-4 h-4" />
                  Demo Versie
                </span>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* ============================================
          HERO SECTION
      ============================================ */}
      <section className="relative min-h-screen flex items-end pb-16 sm:pb-24">
        {/* Background Image Placeholder */}
        {/* Replace with local optimized WebP/JPG images */}
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/hotel/hero-lobby.svg"
            alt="Hotel lobby interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/20 to-transparent" />
        </div>

        {/* Asymmetric Text Overlay */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            {/* H1 - Left Bottom */}
            <div className="text-white">
              <p className="text-sm sm:text-base tracking-[0.3em] uppercase mb-4 text-white/80">
                Boutique Hotel
              </p>
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[0.9] mb-6">
                Uw verblijf
                <br />
                <span className="italic">in Utrecht</span>
              </h1>
              <a
                href="#boeken"
                className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-teal text-white rounded-full text-sm sm:text-base font-medium hover:bg-teal-dark transition-all cursor-key min-h-[48px]"
              >
                <Key className="w-5 h-5" />
                Reserveer direct
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>

            {/* Tagline - Right Top (visually positioned) */}
            <div className="hidden lg:block">
              <div className="bg-cream/95 backdrop-blur-sm p-6 sm:p-8 border-l-4 border-teal max-w-sm ml-auto">
                <p className="font-serif text-xl sm:text-2xl text-charcoal italic leading-relaxed">
                  &ldquo;Een plek van rust en perspectief in het hart van de stad&rdquo;
                </p>
                <p className="mt-4 text-sm text-charcoal/60">
                  Ervaar de unieke sfeer van ons boutique hotel
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          KAMERS SECTION - Editorial Layout
      ============================================ */}
      <section id="kamers" className="py-16 sm:py-24 lg:py-32 border-t-[6px] border-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-2xl mb-12 sm:mb-20">
            <p className="text-sm tracking-[0.3em] uppercase text-teal mb-4">Accommodatie</p>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl mb-6">
              Onze <span className="italic">kamers</span>
            </h2>
            <p className="text-charcoal/70 leading-relaxed">
              Elke kamer vertelt een eigen verhaal. Ontworpen met aandacht voor detail,
              natuurlijk licht en het unieke karakter van Utrecht.
            </p>
          </div>

          {/* Editorial Layout - Alternating */}
          <div className="space-y-16 sm:space-y-24 lg:space-y-32">
            {/* Room 1 - Image Left, Text Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="relative">
                {/* Replace with local optimized WebP/JPG images */}
                <img
                  src="/images/hotel/room-detail.svg"
                  alt="Room interior detail"
                  className="w-full h-auto shadow-editorial"
                />
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-24 sm:w-32 h-24 sm:h-32 border-4 border-teal -z-10" />
              </div>
              <div className="lg:pl-8">
                <p className="text-sm tracking-[0.2em] uppercase text-teal mb-3">Suite</p>
                <h3 className="font-serif text-2xl sm:text-4xl mb-4">
                  Canal <span className="italic">View</span>
                </h3>
                <p className="text-charcoal/70 leading-relaxed mb-6">
                  Een ruime suite met panoramisch uitzicht over de Utrechtse grachten.
                  Warme materialen, designmeubilair en een regendouche voor ultiem comfort.
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-charcoal/60 mb-8">
                  <span className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-teal rounded-full" />
                    45 m²
                  </span>
                  <span className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-teal rounded-full" />
                    2 personen
                  </span>
                  <span className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-teal rounded-full" />
                    Grachtenzicht
                  </span>
                </div>
                <button className="inline-flex items-center gap-2 text-teal font-medium hover:gap-4 transition-all cursor-key">
                  Bekijk details <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Room 2 - Text Left, Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="order-2 lg:order-1 lg:pr-8">
                <p className="text-sm tracking-[0.2em] uppercase text-teal mb-3">Deluxe</p>
                <h3 className="font-serif text-2xl sm:text-4xl mb-4">
                  Stadstuin <span className="italic">Suite</span>
                </h3>
                <p className="text-charcoal/70 leading-relaxed mb-6">
                  Een oase van rust met uitzicht op onze besloten stadstuin. Hoog plafond,
                  originele balken en een zithoek om te verdwalen in een goed boek.
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-charcoal/60 mb-8">
                  <span className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-teal rounded-full" />
                    38 m²
                  </span>
                  <span className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-teal rounded-full" />
                    2 personen
                  </span>
                  <span className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-teal rounded-full" />
                    Tuinzicht
                  </span>
                </div>
                <button className="inline-flex items-center gap-2 text-teal font-medium hover:gap-4 transition-all cursor-key">
                  Bekijk details <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="order-1 lg:order-2 relative">
                {/* Replace with local optimized WebP/JPG images */}
                <img
                  src="/images/hotel/view-window.svg"
                  alt="Window view abstract"
                  className="w-full h-auto shadow-editorial"
                />
                <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-24 sm:w-32 h-24 sm:h-32 border-4 border-teal -z-10" />
              </div>
            </div>

            {/* Room 3 - Image Left, Text Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="relative">
                {/* Replace with local optimized WebP/JPG images */}
                <img
                  src="/images/hotel/breakfast.svg"
                  alt="Breakfast culinary detail"
                  className="w-full h-auto shadow-editorial"
                />
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-24 sm:w-32 h-24 sm:h-32 border-4 border-teal -z-10" />
              </div>
              <div className="lg:pl-8">
                <p className="text-sm tracking-[0.2em] uppercase text-teal mb-3">Superior</p>
                <h3 className="font-serif text-2xl sm:text-4xl mb-4">
                  Ochtend <span className="italic">Licht</span>
                </h3>
                <p className="text-charcoal/70 leading-relaxed mb-6">
                  Perfect voor de vroege vogels. Oostelijke ligging betekent zacht ochtendlicht
                  en een panoramisch uitzicht over de daken van Utrecht bij zonsopkomst.
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-charcoal/60 mb-8">
                  <span className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-teal rounded-full" />
                    32 m²
                  </span>
                  <span className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-teal rounded-full" />
                    2 personen
                  </span>
                  <span className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-teal rounded-full" />
                    Dakterras
                  </span>
                </div>
                <button className="inline-flex items-center gap-2 text-teal font-medium hover:gap-4 transition-all cursor-key">
                  Bekijk details <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          PARALLAX WINDOW SECTION
      ============================================ */}
      <ParallaxWindow />

      {/* ============================================
          SFEER SECTION - Editorial Masonry Gallery
      ============================================ */}
      <section id="sfeer" className="py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 sm:mb-16 pb-6 border-b-4 border-teal">
            <div>
              <p className="text-sm tracking-[0.3em] uppercase text-teal mb-4">Impressie</p>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl">
                De <span className="italic">sfeer</span>
              </h2>
            </div>
            <p className="max-w-md text-charcoal/70 text-sm sm:text-base">
              Een kijkje in ons hotel — waar elke hoek een verhaal vertelt en elk detail telt.
            </p>
          </div>

          {/* Editorial Masonry Layout */}
          <div className="space-y-8 sm:space-y-12">
            {/* Row 1: Full width */}
            <div className="relative">
              {/* Replace with local optimized WebP/JPG images */}
              <img
                src="/images/hotel/hero-lobby.svg"
                alt="Main lobby interior"
                className="w-full h-auto shadow-editorial"
                style={{ aspectRatio: "21/9" }}
              />
              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 bg-cream/95 backdrop-blur-sm px-4 py-2 sm:px-6 sm:py-3 border-l-4 border-teal">
                <p className="font-serif text-base sm:text-lg">De ontvangst</p>
              </div>
            </div>

            {/* Row 2: Two columns - different sizes */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-8">
              <div className="md:col-span-3 relative">
                {/* Replace with local optimized WebP/JPG images */}
                <img
                  src="/images/hotel/room-detail.svg"
                  alt="Room interior"
                  className="w-full h-full object-cover shadow-editorial"
                />
              </div>
              <div className="md:col-span-2 flex flex-col justify-center py-4 sm:py-8">
                <p className="font-serif text-2xl sm:text-3xl mb-4">
                  &ldquo;Een thuisgevoel, ver weg van huis&rdquo;
                </p>
                <p className="text-charcoal/70 leading-relaxed text-sm sm:text-base">
                  Onze kamers zijn ontworpen als een persoonlijke sanctuary. Met natuurlijke
                  materialen, zachte verlichting en uitzichten die uitnodigen tot dagdromen.
                </p>
              </div>
            </div>

            {/* Row 3: Asymmetric - text wraps */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
              <div className="order-2 md:order-1 flex flex-col justify-center">
                <p className="text-sm tracking-[0.2em] uppercase text-teal mb-3">Culinaire</p>
                <h3 className="font-serif text-2xl sm:text-3xl mb-4">
                  Lokale <span className="italic">smaken</span>
                </h3>
                <p className="text-charcoal/70 leading-relaxed mb-6">
                  Ons ontbijt is een viering van lokale producten. Van versgebakken brood
                  van de bakker om de hoek tot kaas van de markt — elke ochtend een feest.
                </p>
                <p className="text-xs text-charcoal/50">
                  Ontbijt is inbegrepen bij elke boeking
                </p>
              </div>
              <div className="order-1 md:order-2 relative">
                {/* Replace with local optimized WebP/JPG images */}
                <img
                  src="/images/hotel/breakfast.svg"
                  alt="Breakfast detail"
                  className="w-full h-auto shadow-editorial"
                />
              </div>
            </div>

            {/* Row 4: Full width with offset text */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-8 items-center">
              <div className="md:col-span-8 relative">
                {/* Replace with local optimized WebP/JPG images */}
                <img
                  src="/images/hotel/exterior.svg"
                  alt="Building exterior Utrecht style"
                  className="w-full h-auto shadow-editorial"
                  style={{ aspectRatio: "16/9" }}
                />
              </div>
              <div className="md:col-span-4">
                <div className="bg-white p-6 sm:p-8 border-4 border-teal shadow-editorial">
                  <p className="font-serif text-lg sm:text-xl italic mb-4">
                    &ldquo;Het karakter van een monument, het comfort van nu&rdquo;
                  </p>
                  <p className="text-sm text-charcoal/60">
                    Ons pand dateert uit 1880 en ademt geschiedenis. De originele gevel
                    en trap zijn met zorg behouden.
                  </p>
                </div>
              </div>
            </div>

            {/* Row 5: Small image + large image */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
              <div className="relative">
                {/* Replace with local optimized WebP/JPG images */}
                <img
                  src="/images/hotel/view-window.svg"
                  alt="Window view"
                  className="w-full h-full object-cover shadow-editorial"
                  style={{ aspectRatio: "4/5" }}
                />
              </div>
              <div className="md:col-span-2 relative">
                {/* Replace with local optimized WebP/JPG images */}
                <img
                  src="/images/hotel/hero-lobby.svg"
                  alt="Hotel detail"
                  className="w-full h-full object-cover shadow-editorial"
                  style={{ aspectRatio: "16/9" }}
                />
                <div className="absolute top-6 right-6 sm:top-8 sm:right-8 bg-teal text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full">
                  <p className="text-sm font-medium">Est. 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          LOCATIE SECTION
      ============================================ */}
      <section id="locatie" className="py-16 sm:py-24 lg:py-32 border-t-[6px] border-teal bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Map Placeholder */}
            <div className="relative">
              <div className="bg-cream border-4 border-teal rounded-lg overflow-hidden">
                <div className="aspect-square sm:aspect-[4/3] relative bg-gradient-to-br from-teal/10 to-cream">
                  {/* Abstract map representation */}
                  <svg
                    viewBox="0 0 400 400"
                    className="absolute inset-0 w-full h-full opacity-30"
                  >
                    {/* Streets */}
                    <line x1="50" y1="100" x2="350" y2="100" stroke="#0f766e" strokeWidth="2" />
                    <line x1="50" y1="200" x2="350" y2="200" stroke="#0f766e" strokeWidth="2" />
                    <line x1="50" y1="300" x2="350" y2="300" stroke="#0f766e" strokeWidth="2" />
                    <line x1="100" y1="50" x2="100" y2="350" stroke="#0f766e" strokeWidth="2" />
                    <line x1="200" y1="50" x2="200" y2="350" stroke="#0f766e" strokeWidth="2" />
                    <line x1="300" y1="50" x2="300" y2="350" stroke="#0f766e" strokeWidth="2" />
                    {/* Canal */}
                    <path
                      d="M50,250 Q150,230 200,250 T350,250"
                      fill="none"
                      stroke="#0f766e"
                      strokeWidth="8"
                      opacity="0.4"
                    />
                  </svg>
                  {/* Hotel marker */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 bg-teal rounded-full flex items-center justify-center shadow-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-charcoal text-white px-3 py-1 rounded text-sm whitespace-nowrap">
                      Hotel Demo
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-24 sm:w-32 h-24 sm:h-32 border-4 border-teal -z-10" />
            </div>

            {/* Location Info */}
            <div className="flex flex-col justify-center">
              <p className="text-sm tracking-[0.3em] uppercase text-teal mb-4">Locatie</p>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl mb-6">
                In het <span className="italic">hart</span> van Utrecht
              </h2>
              <p className="text-charcoal/70 leading-relaxed mb-8">
                Gelegen in een karakteristieke straat, op loopafstand van de Domtoren,
                de grachten en de gezelligste cafés van de stad. Perfect voor een
                weekendje weg of een zakenreis.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-teal" />
                  </div>
                  <div>
                    <p className="font-medium">Adres</p>
                    <p className="text-charcoal/70">Utrecht 3553 CW</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-teal" />
                  </div>
                  <div>
                    <p className="font-medium">Afstand</p>
                    <p className="text-charcoal/70">
                      5 min lopen van Domtoren • 10 min van Centraal Station
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Utrecht+3553+CW"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-teal font-medium hover:gap-4 transition-all cursor-key"
              >
                Open in Google Maps <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          BOEKEN SECTION - Minimal Editorial Form
      ============================================ */}
      <section id="boeken" className="py-16 sm:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-teal mb-4">Reserveren</p>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl mb-6">
              Boek uw <span className="italic">verblijf</span>
            </h2>
            <p className="text-charcoal/70 max-w-xl mx-auto">
              Direct boeken zonder gedoe. Wij garanderen de beste prijs en flexibele
              annuleringsvoorwaarden.
            </p>
          </div>

          {/* Editorial Form */}
          <div className="bg-white border-4 border-teal p-6 sm:p-10 lg:p-12 shadow-editorial">
            <form className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Check-in */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-charcoal/70">
                    Check-in
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      className="w-full px-4 py-4 bg-cream border-2 border-gray-200 rounded-lg focus:border-teal focus:outline-none transition-colors cursor-key min-h-[56px]"
                    />
                    <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-teal pointer-events-none" />
                  </div>
                </div>

                {/* Check-out */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-charcoal/70">
                    Check-out
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      className="w-full px-4 py-4 bg-cream border-2 border-gray-200 rounded-lg focus:border-teal focus:outline-none transition-colors cursor-key min-h-[56px]"
                    />
                    <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-teal pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Guests */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-charcoal/70">
                    Gasten
                  </label>
                  <div className="relative">
                    <select className="w-full px-4 py-4 bg-cream border-2 border-gray-200 rounded-lg focus:border-teal focus:outline-none transition-colors cursor-key min-h-[56px] appearance-none">
                      <option>1 gast</option>
                      <option>2 gasten</option>
                      <option>3 gasten</option>
                      <option>4 gasten</option>
                    </select>
                    <Users className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-teal pointer-events-none" />
                  </div>
                </div>

                {/* Room Type */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-charcoal/70">
                    Kamertype
                  </label>
                  <div className="relative">
                    <select className="w-full px-4 py-4 bg-cream border-2 border-gray-200 rounded-lg focus:border-teal focus:outline-none transition-colors cursor-key min-h-[56px] appearance-none">
                      <option>Alle kamers</option>
                      <option>Suite Canal View</option>
                      <option>Deluxe Kamer</option>
                      <option>Superior Kamer</option>
                    </select>
                    <Key className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-teal pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 sm:py-5 bg-teal text-white rounded-full text-base sm:text-lg font-medium hover:bg-teal-dark transition-all cursor-key flex items-center justify-center gap-3 min-h-[56px]"
              >
                <Key className="w-5 h-5" />
                Beschikbaarheid checken
                <ChevronRight className="w-5 h-5" />
              </button>

              <p className="text-center text-xs sm:text-sm text-charcoal/50">
                Geen creditcard nodig • Gratis annuleren tot 24u voor aankomst
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ============================================
          FOOTER
      ============================================ */}
      <footer className="bg-charcoal text-white py-12 sm:py-16 border-t-[6px] border-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <h3 className="font-serif text-2xl sm:text-3xl mb-4">
                Hotel Demo <span className="italic text-teal">Utrecht</span>
              </h3>
              <p className="text-white/60 leading-relaxed max-w-md mb-6">
                Een boutique hotel ervaring in het hart van Utrecht. Ontworpen met
                aandacht voor detail en een passie voor gastvrijheid.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+31623434286"
                  className="flex items-center gap-2 text-sm text-white/80 hover:text-teal transition-colors min-h-[48px] px-3 py-2"
                >
                  <Phone className="w-4 h-4" />
                  +31 6 23434286
                </a>
                <a
                  href="mailto:info@techsolutionsutrecht.nl"
                  className="flex items-center gap-2 text-sm text-white/80 hover:text-teal transition-colors min-h-[48px] px-3 py-2"
                >
                  <Mail className="w-4 h-4" />
                  info@techsolutionsutrecht.nl
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-medium mb-4 text-teal">Navigatie</h4>
              <nav className="space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-sm text-white/60 hover:text-white transition-colors py-1"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-medium mb-4 text-teal">Contact</h4>
              <div className="space-y-2 text-sm text-white/60">
                <p>Utrecht 3553 CW</p>
                <p>KvK: 99202301</p>
                <p>
                  <a
                    href="https://techsolutionsutrecht.nl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    techsolutiosutrecht.nl
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-xs text-white/40 leading-relaxed max-w-3xl">
              Deze website is een demonstratieversie. Alle intellectuele eigendomsrechten
              en inhoud behoren toe aan TechSolutionsUtrecht. Adres: Utrecht 3553 CW.
              Tel: +31 6 23434286. Email: info@techsolutionsutrecht.nl. KvK: 99202301.
              Site: techsolutiosutrecht.nl
            </p>
          </div>
        </div>
      </footer>

      {/* ============================================
          FLOATING CTA BUTTON
      ============================================ */}
      <a
        href="https://techsolutionsutrecht.nl/contact"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-8 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 z-30"
      >
        <button className="flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-4 bg-teal text-white rounded-full shadow-xl animate-pulse-soft hover:bg-teal-dark transition-colors min-h-[56px]">
          <span className="font-medium text-sm sm:text-base">Offerte aanvragen</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </a>

      {/* ============================================
          MODALS
      ============================================ */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLogin={setUserRole}
      />

      {userRole === "admin" && (
        <AdminDashboard onClose={() => setUserRole(null)} />
      )}

      {userRole === "guest" && (
        <GuestPortal onClose={() => setUserRole(null)} />
      )}
    </main>
  );
}
