import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingActionButton } from "@/components/floating-action-button";

export const metadata: Metadata = {
  title: "Bureau Dekker | Administratiekantoor in Utrecht",
  description: "Uw vertrouwde partner voor administratie, belastingen en financieel advies. Persoonlijke service met een modern perspectief.",
  keywords: "administratiekantoor, boekhouding, belastingen, Utrecht, financieel advies, salarisadministratie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingActionButton />
      </body>
    </html>
  );
}
