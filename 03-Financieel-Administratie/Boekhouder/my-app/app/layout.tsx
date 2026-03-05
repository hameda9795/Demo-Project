import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/lib/context/AuthContext";
import { SideNavigation } from "@/components/custom/SideNavigation";
import { FloatingCTA } from "@/components/custom/FloatingCTA";
import { Footer } from "@/components/custom/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "De Betrouwbare Boekhouder Amsterdam | Uw Financiële Partner",
  description: "Professionele boekhoudkundige diensten in Amsterdam. Jaarrekeningen, loonadministratie, BTW-aangifte en fiscaal advies. Gratis adviesgesprek mogelijk.",
  keywords: "boekhouder, accountant, Amsterdam, jaarrekening, loonadministratie, BTW, fiscaal advies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <AuthProvider>
          <div className="min-h-screen flex">
            <SideNavigation />
            <main className="flex-1 w-full lg:ml-72 transition-all duration-300">
              <div className="min-h-screen flex flex-col">
                {children}
                <Footer />
              </div>
            </main>
          </div>
          <FloatingCTA />
        </AuthProvider>
      </body>
    </html>
  );
}
