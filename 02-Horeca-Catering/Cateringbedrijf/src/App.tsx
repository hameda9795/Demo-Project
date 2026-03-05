import { useState, useEffect, useRef, useCallback } from 'react';
import { 
  Lock, 
  User, 
  Calendar, 
  ClipboardList, 
  FileText, 
  CheckCircle, 
  Clock, 
  ArrowRight, 
  Menu,
  Phone,
  Mail,
  MapPin,
  ChefHat,
  UtensilsCrossed,
  Wine,
  Coffee
} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import './App.css';

// ============================================
// TYPES
// ============================================
interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface Course {
  title: string;
  items: MenuItem[];
}

interface Booking {
  id: string;
  date: string;
  event: string;
  guests: number;
  status: 'confirmed' | 'pending' | 'completed';
}

interface Order {
  id: string;
  date: string;
  total: string;
  status: 'paid' | 'pending' | 'cancelled';
}

// ============================================
// DEMO DATA
// ============================================
const COMPANY_INFO = {
  name: 'Catering Atelier Utrecht (DEMO)',
  phone: '+31 6 25518708',
  email: 'demo@techsolutionsutrecht.nl',
  address: 'Demo Vest 45, 3511 AB Utrecht',
  kvk: '99202301',
};

const MENU_COURSES: Course[] = [
  {
    title: 'Amuse & Voorgerecht',
    items: [
      { name: 'Gegrilde groene asperges', description: 'met citroen-hollandaise en gekonfijte eidooier', price: '€14' },
      { name: 'Tartaar van Nederlandse runderlende', description: 'met kappertjes, sjalot en truffelmayonaise', price: '€16' },
      { name: 'Geroosterde biet', description: 'met geitenkaas, walnoot en balsamico', price: '€13' },
    ],
  },
  {
    title: 'Hoofdgerecht',
    items: [
      { name: 'Gesmoorde lamsschouder', description: 'met rozemarijn, knoflook en seizoensgroenten', price: '€28' },
      { name: 'Gegrilde zeebaas', description: 'met venkel, saffraan en beurre blanc', price: '€32' },
      { name: 'Wild mushroom risotto', description: 'met parmezaan, truffelolie en kruiden', price: '€24' },
    ],
  },
  {
    title: 'Dessert & Afsluiting',
    items: [
      { name: 'Chocolade fondant', description: 'met vanille-ijs en framboos', price: '€12' },
      { name: 'Citroentarte', description: 'met Italiaanse meringue en bosbessen', price: '€11' },
      { name: 'Kaasplateau Nederlandse kazen', description: 'met druiven, noten en honing', price: '€15' },
    ],
  },
];

const DEMO_BOOKINGS: Booking[] = [
  { id: 'B001', date: '15 maart 2024', event: 'Jubileumfeest De Vries', guests: 45, status: 'confirmed' },
  { id: 'B002', date: '22 maart 2024', event: 'Zakelijke lunch TechCorp', guests: 12, status: 'pending' },
  { id: 'B003', date: '28 maart 2024', event: 'Bruiloft Jansen & Peters', guests: 80, status: 'confirmed' },
];

const DEMO_ORDERS: Order[] = [
  { id: 'O001', date: '1 maart 2024', total: '€1.240,00', status: 'paid' },
  { id: 'O002', date: '15 februari 2024', total: '€890,00', status: 'paid' },
  { id: 'O003', date: '28 januari 2024', total: '€2.150,00', status: 'pending' },
];

// ============================================
// LOADING SCREEN COMPONENT
// ============================================
function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-cream flex items-center justify-center">
      <div className="relative">
        {/* Plate Animation */}
        <svg 
          width="120" 
          height="120" 
          viewBox="0 0 100 100" 
          className="transform -rotate-90"
        >
          {/* Outer ring */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#1a1a1a"
            strokeWidth="1"
            className="plate-loader animate"
            style={{ animationDelay: '0ms' }}
          />
          {/* Inner ring */}
          <circle
            cx="50"
            cy="50"
            r="35"
            fill="none"
            stroke="#d4845e"
            strokeWidth="1"
            className="plate-loader animate"
            style={{ animationDelay: '300ms' }}
          />
          {/* Center dot */}
          <circle
            cx="50"
            cy="50"
            r="3"
            fill="#0f766e"
            className="animate-fade-in-up"
            style={{ animationDelay: '800ms' }}
          />
        </svg>
        {/* Cutlery icons */}
        <div className="absolute -left-8 top-1/2 -translate-y-1/2 animate-fade-in-up" style={{ animationDelay: '1000ms' }}>
          <UtensilsCrossed className="w-5 h-5 text-charcoal/40" />
        </div>
      </div>
    </div>
  );
}

// ============================================
// CUSTOM CURSOR COMPONENT
// ============================================
function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Track hoverable elements
    const hoverables = document.querySelectorAll('a, button, [data-cursor="spoon"]');
    
    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    hoverables.forEach(el => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
    });

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      hoverables.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, []);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <div
      className={`custom-cursor ${isHovering ? 'spoon' : 'hidden'} ${!isVisible ? 'opacity-0' : ''} hidden md:block`}
      style={{
        left: position.x,
        top: position.y,
      }}
    >
      {isHovering && (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          {/* Tasting spoon shape */}
          <ellipse cx="16" cy="10" rx="8" ry="6" stroke="#0f766e" strokeWidth="2" fill="none" />
          <line x1="16" y1="16" x2="16" y2="28" stroke="#0f766e" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )}
    </div>
  );
}

// ============================================
// HEADER COMPONENT
// ============================================
function Header({ onLoginClick }: { onLoginClick: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-cream/95 backdrop-blur-md py-3 shadow-sm' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className={`transition-all duration-500 ${isScrolled ? 'scale-90' : 'scale-100'}`}>
            <a href="#" className="flex items-center gap-2 group">
              <ChefHat className={`w-6 h-6 transition-colors duration-300 ${isScrolled ? 'text-teal' : 'text-charcoal'}`} />
              <span className={`font-serif text-lg sm:text-xl font-medium tracking-tight transition-colors duration-300 ${isScrolled ? 'text-charcoal' : 'text-charcoal'}`}>
                {isScrolled ? 'CAU' : 'Catering Atelier'}
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('philosophy')} 
              className="editorial-caption text-charcoal/70 hover:text-teal transition-colors duration-300"
            >
              Filosofie
            </button>
            <button 
              onClick={() => scrollToSection('menu')} 
              className="editorial-caption text-charcoal/70 hover:text-teal transition-colors duration-300"
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('process')} 
              className="editorial-caption text-charcoal/70 hover:text-teal transition-colors duration-300"
            >
              Werkwijze
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="editorial-caption text-charcoal/70 hover:text-teal transition-colors duration-300"
            >
              Contact
            </button>
          </nav>

          {/* Right Side - Demo Badge & Login */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Demo Badge */}
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-terracotta/10 text-terracotta text-xs font-medium rounded-full">
              <Lock className="w-3 h-3" />
              Demo Modus
            </span>

            {/* Login Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={onLoginClick}
              className="border-2 border-teal text-teal hover:bg-teal hover:text-white transition-all duration-300 rounded-full px-4 sm:px-6"
              data-cursor="spoon"
            >
              <User className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:inline">Demo Login</span>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-charcoal"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-charcoal/10 pt-4">
            <nav className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('philosophy')} 
                className="text-left editorial-caption text-charcoal/70 hover:text-teal transition-colors"
              >
                Filosofie
              </button>
              <button 
                onClick={() => scrollToSection('menu')} 
                className="text-left editorial-caption text-charcoal/70 hover:text-teal transition-colors"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection('process')} 
                className="text-left editorial-caption text-charcoal/70 hover:text-teal transition-colors"
              >
                Werkwijze
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-left editorial-caption text-charcoal/70 hover:text-teal transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

// ============================================
// LOGIN MODAL COMPONENT
// ============================================
function LoginModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [activeTab, setActiveTab] = useState('admin');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');

    const expectedUsername = activeTab === 'admin' ? 'demo' : 'klant';
    const expectedPassword = 'demo123';

    if (username === expectedUsername && password === expectedPassword) {
      setIsLoggedIn(true);
    } else {
      setLoginError('Ongeldige inloggegevens. Probeer opnieuw.');
    }
  };

  const handleClose = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    setLoginError('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl bg-cream border-4 border-charcoal p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="font-serif text-2xl text-charcoal">
            Demo Portal
          </DialogTitle>
        </DialogHeader>

        {!isLoggedIn ? (
          <div className="p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2 bg-cream-200">
                <TabsTrigger value="admin" className="data-[state=active]:bg-teal data-[state=active]:text-white">
                  <Lock className="w-4 h-4 mr-2" />
                  Admin Panel
                </TabsTrigger>
                <TabsTrigger value="client" className="data-[state=active]:bg-teal data-[state=active]:text-white">
                  <User className="w-4 h-4 mr-2" />
                  Klant Portal
                </TabsTrigger>
              </TabsList>

              <TabsContent value="admin" className="mt-6">
                <p className="text-sm text-charcoal/60 mb-4">
                  Gebruikersnaam: <code className="bg-cream-200 px-2 py-1 rounded">demo</code>
                  <span className="mx-2">|</span>
                  Wachtwoord: <code className="bg-cream-200 px-2 py-1 rounded">demo123</code>
                </p>
              </TabsContent>

              <TabsContent value="client" className="mt-6">
                <p className="text-sm text-charcoal/60 mb-4">
                  Gebruikersnaam: <code className="bg-cream-200 px-2 py-1 rounded">klant</code>
                  <span className="mx-2">|</span>
                  Wachtwoord: <code className="bg-cream-200 px-2 py-1 rounded">demo123</code>
                </p>
              </TabsContent>
            </Tabs>

            <form onSubmit={handleLogin} className="space-y-4 mt-4">
              <div>
                <Label htmlFor="username">Gebruikersnaam</Label>
                <Input
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-1 bg-white border-charcoal/20"
                  placeholder="Voer gebruikersnaam in"
                />
              </div>
              <div>
                <Label htmlFor="password">Wachtwoord</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 bg-white border-charcoal/20"
                  placeholder="Voer wachtwoord in"
                />
              </div>
              {loginError && (
                <p className="text-sm text-red-500">{loginError}</p>
              )}
              <Button 
                type="submit" 
                className="w-full bg-teal hover:bg-teal-800 text-white"
              >
                Inloggen
              </Button>
            </form>
          </div>
        ) : (
          <div className="p-6">
            {activeTab === 'admin' ? <AdminDashboard /> : <ClientPortal />}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

// ============================================
// ADMIN DASHBOARD COMPONENT
// ============================================
function AdminDashboard() {
  const [activeSection, setActiveSection] = useState<'menu' | 'bookings' | 'orders'>('bookings');

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <div className="w-10 h-10 bg-teal/10 rounded-full flex items-center justify-center">
          <Lock className="w-5 h-5 text-teal" />
        </div>
        <div>
          <h3 className="font-serif text-lg">Admin Dashboard</h3>
          <p className="text-sm text-charcoal/60">Welkom, Demo Admin</p>
        </div>
      </div>

      <div className="flex gap-2 mb-6">
        <Button
          variant={activeSection === 'menu' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setActiveSection('menu')}
          className={activeSection === 'menu' ? 'bg-teal' : ''}
        >
          <ClipboardList className="w-4 h-4 mr-2" />
          Menu
        </Button>
        <Button
          variant={activeSection === 'bookings' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setActiveSection('bookings')}
          className={activeSection === 'bookings' ? 'bg-teal' : ''}
        >
          <Calendar className="w-4 h-4 mr-2" />
          Boekingen
        </Button>
        <Button
          variant={activeSection === 'orders' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setActiveSection('orders')}
          className={activeSection === 'orders' ? 'bg-teal' : ''}
        >
          <FileText className="w-4 h-4 mr-2" />
          Orders
        </Button>
      </div>

      {activeSection === 'menu' && (
        <div className="space-y-4">
          <h4 className="font-serif text-lg border-b border-charcoal/10 pb-2">Menu Management</h4>
          <div className="bg-cream-200/50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="font-medium">Gerechten</span>
              <Button size="sm" variant="outline" className="text-xs">+ Toevoegen</Button>
            </div>
            <div className="space-y-2">
              {MENU_COURSES[0].items.slice(0, 2).map((item, idx) => (
                <div key={idx} className="flex items-center justify-between bg-white p-3 rounded">
                  <div>
                    <p className="font-medium text-sm">{item.name}</p>
                    <p className="text-xs text-charcoal/60">{item.description}</p>
                  </div>
                  <span className="text-teal font-medium">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeSection === 'bookings' && (
        <div className="space-y-4">
          <h4 className="font-serif text-lg border-b border-charcoal/10 pb-2">Boekingskalender</h4>
          <div className="space-y-3">
            {DEMO_BOOKINGS.map((booking) => (
              <div key={booking.id} className="flex items-center gap-4 bg-cream-200/50 p-4 rounded-lg">
                <div className={`w-3 h-3 rounded-full ${
                  booking.status === 'confirmed' ? 'bg-green-500' : 
                  booking.status === 'pending' ? 'bg-yellow-500' : 'bg-gray-400'
                }`} />
                <div className="flex-1">
                  <p className="font-medium">{booking.event}</p>
                  <p className="text-sm text-charcoal/60">{booking.date} • {booking.guests} gasten</p>
                </div>
                <span className="text-xs uppercase tracking-wider text-charcoal/40">{booking.id}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeSection === 'orders' && (
        <div className="space-y-4">
          <h4 className="font-serif text-lg border-b border-charcoal/10 pb-2">Orderoverzicht</h4>
          <div className="space-y-3">
            {DEMO_ORDERS.map((order) => (
              <div key={order.id} className="flex items-center gap-4 bg-cream-200/50 p-4 rounded-lg">
                <div className={`w-3 h-3 rounded-full ${
                  order.status === 'paid' ? 'bg-green-500' : 
                  order.status === 'pending' ? 'bg-yellow-500' : 'bg-red-500'
                }`} />
                <div className="flex-1">
                  <p className="font-medium">{order.id}</p>
                  <p className="text-sm text-charcoal/60">{order.date}</p>
                </div>
                <span className="font-medium text-teal">{order.total}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================
// CLIENT PORTAL COMPONENT
// ============================================
function ClientPortal() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <div className="w-10 h-10 bg-terracotta/10 rounded-full flex items-center justify-center">
          <User className="w-5 h-5 text-terracotta" />
        </div>
        <div>
          <h3 className="font-serif text-lg">Mijn Portal</h3>
          <p className="text-sm text-charcoal/60">Welkom, Demo Klant</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Event Details */}
        <div className="bg-cream-200/50 rounded-lg p-4">
          <h4 className="font-serif text-lg mb-3 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-teal" />
            Mijn Evenement
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-charcoal/60">Datum:</span>
              <span>15 maart 2024</span>
            </div>
            <div className="flex justify-between">
              <span className="text-charcoal/60">Type:</span>
              <span>Jubileumfeest</span>
            </div>
            <div className="flex justify-between">
              <span className="text-charcoal/60">Aantal gasten:</span>
              <span>45 personen</span>
            </div>
            <div className="flex justify-between">
              <span className="text-charcoal/60">Locatie:</span>
              <span>Utrecht Centrum</span>
            </div>
          </div>
        </div>

        {/* Menu Selection */}
        <div className="bg-cream-200/50 rounded-lg p-4">
          <h4 className="font-serif text-lg mb-3 flex items-center gap-2">
            <UtensilsCrossed className="w-4 h-4 text-teal" />
            Menukeuzes
          </h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Voorgerecht geselecteerd</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Hoofdgerecht geselecteerd</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4 text-yellow-500" />
              <span>Dessert - nog te bevestigen</span>
            </div>
          </div>
        </div>

        {/* Invoice History */}
        <div className="bg-cream-200/50 rounded-lg p-4">
          <h4 className="font-serif text-lg mb-3 flex items-center gap-2">
            <FileText className="w-4 h-4 text-teal" />
            Factuurhistorie
          </h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm bg-white p-3 rounded">
              <div>
                <p className="font-medium">Factuur #F001</p>
                <p className="text-xs text-charcoal/60">1 maart 2024</p>
              </div>
              <span className="text-green-600 text-xs font-medium">Betaald</span>
            </div>
            <div className="flex items-center justify-between text-sm bg-white p-3 rounded">
              <div>
                <p className="font-medium">Factuur #F002</p>
                <p className="text-xs text-charcoal/60">15 februari 2024</p>
              </div>
              <span className="text-green-600 text-xs font-medium">Betaald</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// HERO SECTION COMPONENT
// ============================================
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-cream">
      {/* Background Abstract Image */}
      <div className="absolute inset-0 opacity-30">
        {/* Replace with local optimized WebP images */}
        <img 
          src="/images/catering/hero-abstract.jpg" 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/50 via-transparent to-cream" />
      </div>

      {/* Scattered Content - Like Plates on a Table */}
      <div className="relative w-full px-4 sm:px-6 lg:px-12 pt-24 pb-12">
        {/* Main Title - Positioned Left */}
        <div className="max-w-4xl animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <span className="editorial-caption text-teal block mb-4">
            Catering Atelier Utrecht
          </span>
          <h1 className="editorial-h1 text-charcoal mb-6">
            Catering
            <br />
            <span className="italic text-terracotta">met karakter</span>
          </h1>
        </div>

        {/* Decorative Element */}
        <div className="hidden lg:block absolute top-1/3 right-1/4 w-32 h-32 border-2 border-teal/20 rounded-full animate-pulse-gentle" />
        
        {/* Tagline - Positioned Bottom Right */}
        <div className="mt-16 sm:mt-24 lg:mt-32 lg:ml-auto lg:max-w-md lg:text-right animate-fade-in-up" style={{ animationDelay: '500ms' }}>
          <p className="editorial-body text-charcoal/80 mb-6">
            Van intieme diners tot grootschalige evenementen — wij creëren 
            culinaire ervaringen die blijven hangen. Met aandacht voor detail, 
            seizoensgebonden ingrediënten en een vleugje creativiteit.
          </p>
          <div className="flex items-center gap-4 lg:justify-end">
            <span className="w-12 h-[2px] bg-terracotta" />
            <span className="editorial-caption text-charcoal/60">
              Sinds 2015 in Utrecht
            </span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
          <span className="editorial-caption text-charcoal/40 text-[10px]">Scroll</span>
          <div className="w-[1px] h-12 bg-charcoal/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-4 bg-teal animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// PHILOSOPHY SECTION COMPONENT
// ============================================
function PhilosophySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="philosophy" 
      className="relative py-24 sm:py-32 lg:py-40 bg-cream border-section-top"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10">
        {/* Replace with local optimized WebP images */}
        <img 
          src="/images/catering/texture-linen.jpg" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Section Label */}
          <div className={`mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="editorial-caption text-teal">Onze Filosofie</span>
          </div>

          {/* Pull Quote with Terracotta Border */}
          <div className={`border-terracotta-left pl-6 sm:pl-10 lg:pl-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <blockquote className="pull-quote mb-8">
              "Eten is meer dan voeding — het is een verhaal dat verteld wordt 
              aan tafel, een moment van verbinding dat blijft hangen."
            </blockquote>
          </div>

          {/* Body Text */}
          <div className={`grid md:grid-cols-2 gap-8 lg:gap-16 mt-12 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div>
              <p className="editorial-body text-charcoal/80 mb-6">
                Bij Catering Atelier geloven we in de kracht van seizoensgebonden 
                ingrediënten, lokale leveranciers en ambachtelijke technieken. 
                Elk gerecht wordt met de hand bereid, elk detail doordacht.
              </p>
              <p className="editorial-body text-charcoal/80">
                We werken samen met boeren uit de Utrechtse regio, vissers uit 
                IJmuiden en groentetelers uit het Groene Hart. Duurzaamheid 
                is geen trend, maar onze basis.
              </p>
            </div>
            <div>
              <p className="editorial-body text-charcoal/80 mb-6">
                Of het nu gaat om een intiem diner voor twaalf of een 
                bedrijfsevenement voor tweehonderd gasten — wij brengen 
                dezelfde passie en precisie naar elke gelegenheid.
              </p>
              <div className="flex items-center gap-4 mt-8">
                <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center">
                  <ChefHat className="w-8 h-8 text-teal" />
                </div>
                <div>
                  <p className="font-serif text-lg">Thomas van Berg</p>
                  <p className="text-sm text-charcoal/60">Executive Chef & Eigenaar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// MENU JOURNEY SECTION COMPONENT
// ============================================
function MenuJourneySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleCourses, setVisibleCourses] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const courseIndex = parseInt(entry.target.getAttribute('data-course') || '0');
            setVisibleCourses((prev) => [...new Set([...prev, courseIndex])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const courseElements = sectionRef.current?.querySelectorAll('[data-course]');
    courseElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="menu" 
      className="relative py-24 sm:py-32 lg:py-40 bg-cream border-section-top"
    >
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-24">
            <span className="editorial-caption text-teal block mb-4">Het Menu</span>
            <h2 className="editorial-h2 text-charcoal">
              Een culinaire <span className="italic text-terracotta">reis</span>
            </h2>
          </div>

          {/* Vertical Timeline - Editorial Style */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-[2px] bg-charcoal/10" />

            {/* Courses */}
            <div className="space-y-16 sm:space-y-24">
              {MENU_COURSES.map((course, courseIndex) => (
                <div 
                  key={courseIndex}
                  data-course={courseIndex}
                  className={`relative pl-12 sm:pl-20 transition-all duration-700 ${
                    visibleCourses.includes(courseIndex) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-12'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-0 sm:left-4 top-2 w-8 h-8 rounded-full border-4 border-cream flex items-center justify-center transition-colors duration-500 ${
                    visibleCourses.includes(courseIndex) ? 'bg-teal' : 'bg-charcoal/20'
                  }`}>
                    <span className="text-white text-xs font-medium">{courseIndex + 1}</span>
                  </div>

                  {/* Course Title */}
                  <h3 className="editorial-h3 text-charcoal mb-6 sm:mb-8">
                    {course.title}
                  </h3>

                  {/* Menu Items - Running Text Style */}
                  <div className="space-y-4 sm:space-y-6">
                    {course.items.map((item, itemIndex) => (
                      <div 
                        key={itemIndex}
                        className="group"
                      >
                        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                          <span className="menu-item font-serif text-lg sm:text-xl text-charcoal cursor-default">
                            {item.name}
                          </span>
                          <span className="flex-1 border-b border-dotted border-charcoal/20 mb-2 hidden sm:block" />
                          <span className="font-sans text-sm text-teal font-medium">
                            {item.price}
                          </span>
                        </div>
                        <p className="text-sm text-charcoal/60 mt-1 font-light">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Menu Note */}
          <div className="mt-16 sm:mt-24 pt-8 border-t border-charcoal/10 text-center">
            <p className="editorial-body text-charcoal/60 italic">
              Onze menu's worden volledig op maat samengesteld. 
              Neem contact op voor een persoonlijk voorstel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// PROCESS SECTION COMPONENT
// ============================================
function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      icon: Phone,
      title: 'Kennismaking',
      description: 'We bespreken uw wensen, het aantal gasten en de sfeer van uw evenement.',
    },
    {
      icon: ClipboardList,
      title: 'Op Maat',
      description: 'Onze chef stelt een persoonlijk menu samen, afgestemd op uw voorkeuren.',
    },
    {
      icon: ChefHat,
      title: 'Uitvoering',
      description: 'Op de dag zelf zorgen wij voor een naadloze culinaire ervaring.',
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="process" 
      className="relative py-24 sm:py-32 lg:py-40 bg-cream border-section-top overflow-hidden"
    >
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-24">
            <span className="editorial-caption text-teal block mb-4">Onze Werkwijze</span>
            <h2 className="editorial-h2 text-charcoal">
              Van idee tot <span className="italic text-terracotta">tafel</span>
            </h2>
          </div>

          {/* Overlapping Circles */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const delays = [0, 200, 400];
              
              return (
                <div 
                  key={index}
                  className={`relative transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${delays[index]}ms` }}
                >
                  {/* Circle */}
                  <div 
                    className={`w-64 h-64 sm:w-72 sm:h-72 rounded-full flex flex-col items-center justify-center p-8 text-center transition-all duration-500 hover:scale-105 ${
                      index === 0 
                        ? 'bg-teal/10 lg:mr-[-30px]' 
                        : index === 1 
                          ? 'bg-terracotta/10 lg:z-10 lg:mr-[-30px]' 
                          : 'bg-cream-200'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                      index === 0 ? 'bg-teal/20' : index === 1 ? 'bg-terracotta/20' : 'bg-charcoal/10'
                    }`}>
                      <Icon className={`w-6 h-6 ${
                        index === 0 ? 'text-teal' : index === 1 ? 'text-terracotta' : 'text-charcoal'
                      }`} />
                    </div>
                    <span className="editorial-caption text-charcoal/40 mb-2">
                      Stap {index + 1}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-charcoal mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-charcoal/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// CONTACT SECTION COMPONENT
// ============================================
function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: '',
    guests: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section 
      id="contact" 
      className="relative py-24 sm:py-32 lg:py-40 bg-cream border-section-top"
    >
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left - Contact Info */}
            <div>
              <span className="editorial-caption text-teal block mb-4">Contact</span>
              <h2 className="editorial-h2 text-charcoal mb-8">
                Laten we <span className="italic text-terracotta">kennismaken</span>
              </h2>
              
              <p className="editorial-body text-charcoal/80 mb-12">
                Vertel ons over uw evenement. We nemen binnen 24 uur contact 
                met u op voor een vrijblijvend gesprek.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-teal" />
                  </div>
                  <div>
                    <p className="editorial-caption text-charcoal/40 mb-1">Telefoon</p>
                    <a 
                      href={`tel:${COMPANY_INFO.phone}`} 
                      className="font-serif text-lg text-charcoal hover:text-teal transition-colors"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-teal" />
                  </div>
                  <div>
                    <p className="editorial-caption text-charcoal/40 mb-1">E-mail</p>
                    <a 
                      href={`mailto:${COMPANY_INFO.email}`} 
                      className="font-serif text-lg text-charcoal hover:text-teal transition-colors"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-teal" />
                  </div>
                  <div>
                    <p className="editorial-caption text-charcoal/40 mb-1">Adres</p>
                    <p className="font-serif text-lg text-charcoal">
                      {COMPANY_INFO.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="bg-cream-200/50 p-8 sm:p-12 rounded-lg">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-teal" />
                  </div>
                  <h3 className="font-serif text-2xl text-charcoal mb-2">Bedankt!</h3>
                  <p className="text-charcoal/70">We nemen snel contact met u op.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="editorial-caption text-charcoal/60 block mb-2">
                      Naam
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="editorial-input"
                      placeholder="Uw naam"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="editorial-caption text-charcoal/60 block mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="editorial-input"
                      placeholder="uw@email.nl"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="eventType" className="editorial-caption text-charcoal/60 block mb-2">
                        Type evenement
                      </label>
                      <select
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        required
                        className="editorial-input bg-transparent"
                      >
                        <option value="">Selecteer...</option>
                        <option value="dinner">Privé diner</option>
                        <option value="corporate">Zakelijk evenement</option>
                        <option value="wedding">Bruiloft</option>
                        <option value="party">Feest</option>
                        <option value="other">Anders</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="guests" className="editorial-caption text-charcoal/60 block mb-2">
                        Aantal gasten
                      </label>
                      <input
                        type="number"
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        required
                        min="1"
                        className="editorial-input"
                        placeholder="0"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="editorial-caption text-charcoal/60 block mb-2">
                      Bericht
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="editorial-input resize-none"
                      placeholder="Vertel ons meer over uw evenement..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-teal hover:bg-teal-800 text-white py-6 text-lg font-medium rounded-full transition-all duration-300"
                    data-cursor="spoon"
                  >
                    Verstuur aanvraag
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// FOOTER COMPONENT
// ============================================
function Footer() {
  return (
    <footer className="relative py-12 sm:py-16 bg-charcoal text-cream">
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Main Footer Content */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mb-12">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <ChefHat className="w-8 h-8 text-teal" />
              <span className="font-serif text-xl">Catering Atelier Utrecht</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a href="#" className="text-cream/60 hover:text-teal transition-colors">
                <Wine className="w-5 h-5" />
              </a>
              <a href="#" className="text-cream/60 hover:text-teal transition-colors">
                <Coffee className="w-5 h-5" />
              </a>
              <a href="#" className="text-cream/60 hover:text-teal transition-colors">
                <UtensilsCrossed className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Legal Text - Exact as specified */}
          <div className="border-t border-cream/10 pt-8">
            <p className="text-center text-xs text-cream/40 leading-relaxed max-w-3xl mx-auto">
              Deze website is een demonstratieversie. Alle intellectuele eigendomsrechten en inhoud behoren toe aan TechSolutionsUtrecht. Contact: info@techsolutionsutrecht.nl | KvK: 99202301 | Utrecht
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============================================
// FLOATING CTA BUTTON COMPONENT
// ============================================
function FloatingCTA() {
  return (
    <a
      href="https://techsolutionsutrecht.nl/contact"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-40 bg-teal text-white px-6 py-4 rounded-full shadow-xl border-2 border-white animate-pulse-gentle flex items-center gap-2 hover:bg-teal-800 transition-colors duration-300 floating-cta"
      data-cursor="spoon"
    >
      <span className="font-medium">Offerte aanvragen</span>
      <ArrowRight className="w-5 h-5" />
    </a>
  );
}

// ============================================
// MAIN APP COMPONENT
// ============================================
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      
      {!isLoading && (
        <div className="relative">
          <CustomCursor />
          
          <Header onLoginClick={() => setIsLoginModalOpen(true)} />
          
          <main>
            <HeroSection />
            <PhilosophySection />
            <MenuJourneySection />
            <ProcessSection />
            <ContactSection />
          </main>
          
          <Footer />
          
          <FloatingCTA />
          
          <LoginModal 
            isOpen={isLoginModalOpen} 
            onClose={() => setIsLoginModalOpen(false)} 
          />
        </div>
      )}
    </>
  );
}

export default App;
