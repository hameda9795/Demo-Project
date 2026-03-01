/**
 * Main Layout
 * Layout for the main website with navigation
 */

import { Header } from '@/components/Header';
import { BottomNav } from '@/components/BottomNav';
import { Footer } from '@/components/Footer';
import { FloatingCTA } from '@/components/FloatingCTA';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header - Sticky top */}
      <Header />
      
      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Mobile Bottom Navigation */}
      <BottomNav />
      
      {/* Floating CTA Button (All Pages) */}
      <FloatingCTA />
    </div>
  );
}
