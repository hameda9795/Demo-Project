import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/lib/auth-context";
import { FloatingNav } from "@/components/sections/floating-nav";
import { FloatingCTA } from "@/components/sections/floating-cta";
import { Footer } from "@/components/sections/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SalarisPro Nederland | Loonspecificaties, precies en op tijd",
  description: "Professionele salarisadministratie voor MKB in Nederland. Uitbesteden van loonadministratie, loonspecificaties en HR-administratie.",
  keywords: "salarisadministratie, loonadministratie, loonspecificatie, payroll, Nederland, MKB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={`${inter.variable} font-sans antialiased`}>
        <AuthProvider>
          <FloatingNav />
          {children}
          <FloatingCTA />
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
