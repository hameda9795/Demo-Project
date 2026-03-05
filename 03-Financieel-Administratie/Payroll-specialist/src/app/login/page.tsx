"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/lib/auth-context";
import { Lock, User, AlertCircle } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const success = await login(email, password);
    
    if (success) {
      if (email === "admin") {
        router.push("/admin");
      } else {
        router.push("/dashboard");
      }
    } else {
      setError("Ongeldige inloggegevens. Probeer 'demo' / 'demo123' of 'admin' / 'admin123'");
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-primary-900 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md px-4"
      >
        <Card className="glass border-white/20 shadow-2xl">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl text-white">Inloggen</CardTitle>
            <CardDescription className="text-white/70">
              Log in op uw SalarisPro account
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">
                  Gebruikersnaam
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
                  <Input
                    id="email"
                    type="text"
                    placeholder="demo of admin"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-white">
                  Wachtwoord
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="demo123 of admin123"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    required
                  />
                </div>
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="flex items-center gap-2 text-red-300 text-sm p-3 bg-red-500/20 rounded-lg"
                >
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  {error}
                </motion.div>
              )}

              <Button
                type="submit"
                className="w-full shimmer-gold text-accent-foreground"
                disabled={isLoading}
              >
                {isLoading ? "Bezig met inloggen..." : "Inloggen"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <Link
                href="#"
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                Wachtwoord vergeten?
              </Link>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-sm text-white/50 text-center">
                Demo accounts: <br />
                <span className="text-white/70">demo / demo123</span> (Werknemer) of{" "}
                <span className="text-white/70">admin / admin123</span> (Admin)
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
