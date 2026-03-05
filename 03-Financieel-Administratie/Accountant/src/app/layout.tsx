import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Van den Berg Accountants | Financieel Administratie & Advies",
  description: "Van den Berg Accountants is uw vertrouwde partner voor boekhouding, fiscaal advies en administratie. Sinds 1987 helpen wij ondernemers met hun financiële zaken.",
  keywords: "accountant, boekhouding, fiscaal advies, Utrecht, administratie, belastingadviseur, jaarrekening",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
