import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hotel Demo Utrecht (DEMO)",
  description: "Een boutique hotel ervaring in het hart van Utrecht - Demo website door TechSolutionsUtrecht",
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
