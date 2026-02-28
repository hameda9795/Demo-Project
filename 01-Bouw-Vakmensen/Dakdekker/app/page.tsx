/**
 * Home Page
 * Dakwerken Van der Berg - Premium Roofing Website
 * 
 * @description Main landing page with all sections
 * Roof Angle Design System applied throughout
 */

import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { StormAlert } from "@/components/storm-alert";
import { Services } from "@/components/services";
import { Projects } from "@/components/projects";
import { MaterialConfigurator } from "@/components/material-configurator";
import { SeasonalTips } from "@/components/seasonal-tips";
import { TrustRow } from "@/components/trust-row";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { CookieBanner } from "@/components/cookie-banner";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Fixed Navigation */}
      <Navigation />

      {/* Storm Damage Alert - Floating banner */}
      <StormAlert />

      {/* Hero Section - Full viewport with dramatic imagery */}
      <Hero />

      {/* Services Grid - Asymmetric masonry */}
      <Services />

      {/* Project Gallery - With before/after hover effect */}
      <Projects />

      {/* Roof Material Configurator - Interactive quote tool */}
      <MaterialConfigurator />

      {/* Seasonal Tips - Rotating advice */}
      <SeasonalTips />

      {/* Trust Row - Certifications and guarantees */}
      <TrustRow />

      {/* Testimonials - Customer reviews */}
      <Testimonials />

      {/* Contact Section - Form with validation */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Cookie Consent Banner */}
      <CookieBanner />
    </main>
  );
}
