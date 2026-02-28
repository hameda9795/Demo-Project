"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  LayoutDashboard, Calendar, MapPin, Package, Users, 
  Sun, CloudRain, LogOut, TreePine 
} from "lucide-react";

const navItems = [
  { href: "/admin/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/afspraken/", label: "Afspraken", icon: Calendar },
  { href: "/admin/projecten/", label: "Projecten", icon: MapPin },
  { href: "/admin/voorraad/", label: "Voorraad", icon: Package },
  { href: "/admin/klanten/", label: "Klanten", icon: Users },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "demo" && password === "demo123") {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Ongeldige inloggegevens. Gebruik demo / demo123");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
    router.push("/admin/");
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-forest-950 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <TreePine className="w-8 h-8 text-white" />
            </div>
            <h1 className="font-serif text-2xl text-white">Groen & Tuin</h1>
            <p className="text-green-400 text-sm">Admin Panel (DEMO)</p>
          </div>

          {/* Login Form */}
          <div className="bg-forest-900 rounded-2xl p-8 border border-green-800">
            <h2 className="text-xl text-white font-medium mb-6">Inloggen</h2>
            
            {error && (
              <div className="mb-4 p-3 bg-red-900/50 border border-red-700 rounded-lg text-red-200 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-green-300 text-sm mb-2">Gebruikersnaam</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 bg-forest-950 border border-green-800 rounded-lg text-white 
                    placeholder-green-700 focus:outline-none focus:border-green-600"
                  placeholder="demo"
                />
              </div>
              <div>
                <label className="block text-green-300 text-sm mb-2">Wachtwoord</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-forest-950 border border-green-800 rounded-lg text-white 
                    placeholder-green-700 focus:outline-none focus:border-green-600"
                  placeholder="demo123"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-green-600 text-white rounded-lg font-medium 
                  hover:bg-green-500 transition-colors">
                Inloggen
              </button>
            </form>

            <div className="mt-6 p-4 bg-green-900/30 rounded-lg border border-green-800">
              <p className="text-green-400 text-sm text-center">
                <strong>DEMO:</strong> Gebruik<br />
                <code className="bg-green-950 px-2 py-1 rounded">demo / demo123</code>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-forest-950 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-forest-900 border-r border-green-800 flex-shrink-0">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
              <TreePine className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="font-serif text-lg text-white">Groen & Tuin</h1>
              <p className="text-green-400 text-xs">Admin</p>
            </div>
          </div>

          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 text-green-200 
                    hover:bg-green-800/50 hover:text-white rounded-lg transition-colors">
                  <Icon className="w-5 h-5" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-green-800">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 text-green-300 
              hover:text-white transition-colors w-full">
            <LogOut className="w-5 h-5" />
            Uitloggen
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
