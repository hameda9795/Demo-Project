"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, User, ArrowRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Demo credentials check
    if (formData.username === "demo" && formData.password === "demo123") {
      router.push("/dashboard");
    } else {
      alert("Ongeldige inloggegevens. Gebruik: demo / demo123");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F0E8] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-[#6D5B4F] hover:text-[#C17A5C] transition-colors mb-8 font-mono text-sm"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Terug naar website
          </Link>
        </motion.div>

        {/* Login Card */}
        <motion.div
          className="bg-white brutal-border"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Header */}
          <div className="bg-[#2C2420] p-8 text-center brutal-border-bottom">
            <div className="w-16 h-16 bg-[#C17A5C] brutal-border flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="font-serif text-2xl font-semibold text-white mb-1">
              Klantenportal
            </h1>
            <p className="text-[#B8A99A] text-sm">
              Log in om uw administratie te bekijken
            </p>
          </div>

          {/* Form */}
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="username" className="font-mono text-sm uppercase tracking-wider">
                  Gebruikersnaam
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6D5B4F]" />
                  <Input 
                    id="username"
                    type="text"
                    required
                    className="brutal-border bg-transparent pl-10 h-12"
                    placeholder="Voer gebruikersnaam in"
                    value={formData.username}
                    onChange={(e) => setFormData({...formData, username: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="font-mono text-sm uppercase tracking-wider">
                  Wachtwoord
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6D5B4F]" />
                  <Input 
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    className="brutal-border bg-transparent pl-10 pr-10 h-12"
                    placeholder="Voer wachtwoord in"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6D5B4F] hover:text-[#2C2420]"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 border-2 border-[#2C2420]" />
                  <span className="text-[#6D5B4F]">Onthoud mij</span>
                </label>
                <Link href="#" className="text-[#C17A5C] hover:underline">
                  Wachtwoord vergeten?
                </Link>
              </div>

              <Button 
                type="submit"
                size="lg"
                disabled={isLoading}
                className="w-full bg-[#2C2420] brutal-border text-white hover:bg-[#C17A5C] transition-all font-mono uppercase tracking-wider h-12 disabled:opacity-50"
              >
                {isLoading ? "Bezig met inloggen..." : "Inloggen"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>

            {/* Demo credentials */}
            <div className="mt-8 p-4 bg-[#F5F0E8] brutal-border">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-[#C17A5C] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-[#6D5B4F] mb-2">
                    Demo inloggegevens
                  </p>
                  <div className="space-y-1 text-sm">
                    <p><strong>Gebruikersnaam:</strong> demo</p>
                    <p><strong>Wachtwoord:</strong> demo123</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.p 
          className="text-center text-sm text-[#6D5B4F] mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Nog geen account?{" "}
          <Link href="/contact" className="text-[#C17A5C] hover:underline font-medium">
            Neem contact op
          </Link>
        </motion.p>
      </div>
    </div>
  );
}
