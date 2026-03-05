"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActionButton from "@/components/FloatingActionButton";
import { Eye, EyeOff, Lock, Mail, ArrowRight, User } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Demo login logic
    setTimeout(() => {
      if (formState.email === "demo@debrug.nl" && formState.password === "demo123") {
        router.push("/dashboard");
      } else {
        setError("Ongeldig e-mailadres of wachtwoord. Probeer de demo gegevens.");
        setIsLoading(false);
      }
    }, 1000);
  };

  const fillDemoCredentials = () => {
    setFormState({
      email: "demo@debrug.nl",
      password: "demo123",
      rememberMe: false,
    });
  };

  return (
    <>
      <Header />
      
      <main className="pt-16 md:pt-20 min-h-screen flex items-center">
        <div className="w-full py-12 md:py-20">
          <div className="container-asymmetric">
            <div className="max-w-md mx-auto">
              {/* Login Card */}
              <div className="bg-cream-50 p-8 md:p-12 shadow-xl border border-concrete-200">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-ink flex items-center justify-center mx-auto mb-4">
                    <User className="w-8 h-8 text-cream-50" />
                  </div>
                  <h1 className="text-2xl md:text-3xl font-serif mb-2">
                    Welkom terug
                  </h1>
                  <p className="text-concrete-600 text-sm">
                    Log in om toegang te krijgen tot uw persoonlijke omgeving
                  </p>
                </div>

                {/* Demo Credentials Banner */}
                <div className="bg-ochre-100 border border-ochre-200 p-4 mb-6">
                  <p className="text-sm text-ochre-800 font-medium mb-2">Demo toegang:</p>
                  <div className="space-y-1 text-sm text-ochre-700">
                    <p>E-mail: <code className="bg-ochre-200 px-1.5 py-0.5 rounded">demo@debrug.nl</code></p>
                    <p>Wachtwoord: <code className="bg-ochre-200 px-1.5 py-0.5 rounded">demo123</code></p>
                  </div>
                  <button
                    onClick={fillDemoCredentials}
                    className="mt-3 text-sm font-medium text-ochre-800 hover:text-ochre-900 underline"
                  >
                    Vul demo gegevens in
                  </button>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 mb-6 text-sm">
                    {error}
                  </div>
                )}

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
                      E-mailadres
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-concrete-400" />
                      <input
                        type="email"
                        id="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 bg-cream-100 border border-concrete-300 text-ink placeholder-concrete-400 focus:outline-none focus:border-terracotta-400 transition-colors"
                        placeholder="uw@email.nl"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-ink mb-2">
                      Wachtwoord
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-concrete-400" />
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        value={formState.password}
                        onChange={(e) => setFormState({ ...formState, password: e.target.value })}
                        className="w-full pl-12 pr-12 py-3 bg-cream-100 border border-concrete-300 text-ink placeholder-concrete-400 focus:outline-none focus:border-terracotta-400 transition-colors"
                        placeholder="••••••••"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-concrete-400 hover:text-concrete-600"
                      >
                        {showPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formState.rememberMe}
                        onChange={(e) => setFormState({ ...formState, rememberMe: e.target.checked })}
                        className="w-4 h-4 border-concrete-300 text-terracotta-500 focus:ring-terracotta-400"
                      />
                      <span className="text-sm text-concrete-600">Onthoud mij</span>
                    </label>
                    <Link 
                      href="/wachtwoord-vergeten" 
                      className="text-sm text-terracotta-500 hover:text-terracotta-600"
                    >
                      Wachtwoord vergeten?
                    </Link>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn-brutalist w-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-cream-50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Bezig met inloggen...
                      </span>
                    ) : (
                      <>
                        Inloggen
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>

                {/* Divider */}
                <div className="relative my-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-concrete-200"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="px-4 bg-cream-50 text-sm text-concrete-500">
                      Nog geen account?
                    </span>
                  </div>
                </div>

                {/* Register Link */}
                <Link
                  href="/registreren"
                  className="btn-brutalist-outline w-full flex items-center justify-center"
                >
                  Maak een account aan
                </Link>

                {/* Help Section */}
                <div className="mt-8 pt-6 border-t border-concrete-200">
                  <p className="text-sm text-concrete-600 text-center">
                    Hulp nodig bij inloggen?{" "}
                    <a href="tel:0301234567" className="text-terracotta-500 hover:text-terracotta-600">
                      Bel ons op 030 - 123 4567
                    </a>
                  </p>
                </div>
              </div>

              {/* Security Note */}
              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-concrete-500">
                <Lock className="w-4 h-4" />
                <span>Uw gegevens zijn veilig met SSL-encryptie</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <FloatingActionButton />
    </>
  );
}
