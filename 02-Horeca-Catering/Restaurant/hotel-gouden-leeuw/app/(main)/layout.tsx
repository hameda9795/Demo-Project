/**
 * Main Layout - Wraps all public pages
 * Includes: Header, Floating CTA, Footer
 */

import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import FloatingCTA from '@/components/shared/FloatingCTA';
import CookieConsent from '@/components/shared/CookieConsent';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingCTA />
      <CookieConsent />
    </>
  );
}
