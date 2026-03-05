"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActionButton from "@/components/FloatingActionButton";
import { Eye, EyeOff, Lock, Mail, ArrowRight, User, Building2, Phone, CheckCircle2 } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    company: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Demo registration
    setIsSubmitted(true);
    setTimeout(() => {
      router.push("/login");
    }, 2000);
  };

  return (
    <>
      <Header />
      
      <main className="pt-16 md:pt-20 min-h-screen">
        <div className="w-full py-12 md:py-20">
          <div className="container-asymmetric">
            <div className="max-w-lg mx-auto">
              {/* Register Card */}
              <div className="bg-cream-50 p-8 md:p-12 shadow-xl border border-concrete-200">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-terracotta-500 flex items-center justify-center mx-auto mb-4">
                    <User className="w-8 h-8 text-cream-50" />
                  </div>
                  <h1 className="text-2xl md:text-3xl font-serif mb-2">
                    Maak een account aan
                  </h1>
                  <p className="text-concrete-600 text-sm">
                    Krijg toegang tot uw persoonlijke omgeving MijnDeBrug
                  </p>
                </div>

                {/* Success Message */}
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                    <h3 className="text-xl font-serif mb-2">Account aangemaakt!</h3>
                    <p className="text-concrete-600">
                      U wordt doorgestuurd naar de login pagina...
                    </p>
                  </div>
                ) : (
                  <>
                    {/* Register Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Name Fields */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-ink mb-2">
                            Voornaam *
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            value={formState.firstName}
                            onChange={(e) => setFormState({ ...formState, firstName: e.target.value })}
                            className="w-full px-4 py-3 bg-cream-100 border border-concrete-300 text-ink placeholder-concrete-400 focus:outline-none focus:border-terracotta-400 transition-colors"
                            placeholder="Jan"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-ink mb-2">
                            Achternaam *
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            value={formState.lastName}
                            onChange={(e) => setFormState({ ...formState, lastName: e.target.value })}
                            className="w-full px-4 py-3 bg-cream-100 border border-concrete-300 text-ink placeholder-concrete-400 focus:outline-none focus:border-terracotta-400 transition-colors"
                            placeholder="Jansen"
                            required
                          />
                        </div>
                      </div>

                      {/* Company */}
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-ink mb-2">
                          Bedrijfsnaam
                        </label>
                        <div className="relative">
                          <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-concrete-400" />
                          <input
                            type="text"
                            id="company"
                            value={formState.company}
                            onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                            className="w-full pl-12 pr-4 py-3 bg-cream-100 border border-concrete-300 text-ink placeholder-concrete-400 focus:outline-none focus:border-terracotta-400 transition-colors"
                            placeholder="Uw bedrijf (optioneel)"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-ink mb-2">
                          Telefoonnummer
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-concrete-400" />
                          <input
                            type="tel"
                            id="phone"
                            value={formState.phone}
                            onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                            className="w-full pl-12 pr-4 py-3 bg-cream-100 border border-concrete-300 text-ink placeholder-concrete-400 focus:outline-none focus:border-terracotta-400 transition-colors"
                            placeholder="06 - 123 456 78"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
                          E-mailadres *
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

                      {/* Password */}
                      <div>
                        <label htmlFor="password" className="block text-sm font-medium text-ink mb-2">
                          Wachtwoord *
                        </label>
                        <div className="relative">
                          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-concrete-400" />
                          <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            value={formState.password}
                            onChange={(e) => setFormState({ ...formState, password: e.target.value })}
                            className="w-full pl-12 pr-12 py-3 bg-cream-100 border border-concrete-300 text-ink placeholder-concrete-400 focus:outline-none focus:border-terracotta-400 transition-colors"
                            placeholder="Minimaal 8 tekens"
                            minLength={8}
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
                        <p className="mt-1 text-xs text-concrete-500">
                          Gebruik minimaal 8 tekens, waaronder een hoofdletter en een cijfer
                        </p>
                      </div>

                      {/* Confirm Password */}
                      <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-ink mb-2">
                          Bevestig wachtwoord *
                        </label>
                        <div className="relative">
                          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-concrete-400" />
                          <input
                            type={showConfirmPassword ? "text" : "password"}
                            id="confirmPassword"
                            value={formState.confirmPassword}
                            onChange={(e) => setFormState({ ...formState, confirmPassword: e.target.value })}
                            className="w-full pl-12 pr-12 py-3 bg-cream-100 border border-concrete-300 text-ink placeholder-concrete-400 focus:outline-none focus:border-terracotta-400 transition-colors"
                            placeholder="Herhaal wachtwoord"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-concrete-400 hover:text-concrete-600"
                          >
                            {showConfirmPassword ? (
                              <EyeOff className="w-5 h-5" />
                            ) : (
                              <Eye className="w-5 h-5" />
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Terms */}
                      <div>
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formState.acceptTerms}
                            onChange={(e) => setFormState({ ...formState, acceptTerms: e.target.checked })}
                            className="mt-1 w-4 h-4 border-concrete-300 text-terracotta-500 focus:ring-terracotta-400"
                            required
                          />
                          <span className="text-sm text-concrete-600">
                            Ik ga akkoord met de{" "}
                            <Link href="/voorwaarden" className="text-terracotta-500 hover:underline">
                              algemene voorwaarden
                            </Link>
                            {" "}en{" "}
                            <Link href="/privacy" className="text-terracotta-500 hover:underline">
                              privacyverklaring
                            </Link>
                            . *
                          </span>
                        </label>
                      </div>

                      <button
                        type="submit"
                        className="btn-brutalist w-full flex items-center justify-center"
                      >
                        Account aanmaken
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </button>
                    </form>

                    {/* Divider */}
                    <div className="relative my-8">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-concrete-200"></div>
                      </div>
                      <div className="relative flex justify-center">
                        <span className="px-4 bg-cream-50 text-sm text-concrete-500">
                          Al een account?
                        </span>
                      </div>
                    </div>

                    {/* Login Link */}
                    <Link
                      href="/login"
                      className="btn-brutalist-outline w-full flex items-center justify-center"
                    >
                      Log in
                    </Link>
                  </>
                )}
              </div>

              {/* Benefits Section */}
              <div className="mt-12 bg-ink text-cream-50 p-8">
                <h3 className="text-xl font-serif mb-6">Waarom een account aanmaken?</h3>
                <ul className="space-y-4">
                  {[
                    "24/7 toegang tot uw documenten",
                    "Direct inzicht in uw belastingzaken",
                    "Communicatie met uw adviseur",
                    "Ontvang meldingen en herinneringen",
                    "Veilig en vertrouwd",
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-terracotta-400 flex-shrink-0" />
                      <span className="text-concrete-300 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
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
