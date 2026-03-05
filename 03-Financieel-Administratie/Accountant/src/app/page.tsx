"use client";

import { CustomCursor } from "@/components/CustomCursor";
import { FloatingActionButton } from "@/components/FloatingActionButton";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <FloatingActionButton />
      <Navigation />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
