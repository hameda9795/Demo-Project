/**
 * Home Page - Van den Berg Timmerwerken
 * 
 * The Living Grain Design System
 * ==============================
 * This page assembles all the sections that make up the homepage:
 * 
 * 1. HERO - Full viewport craftsmanship showcase with parallax
 * 2. WOOD SELECTOR - Interactive wood type comparison
 * 3. PROJECT GALLERY - Masonry portfolio with raw-to-refined effect
 * 4. JOINERY TECHNIQUES - Educational SVG animations
 * 5. CONFIGURATOR - Custom furniture builder tool
 * 6. PROCESS - Workshop timeline visualization
 * 7. SUSTAINABILITY - CO2 calculator and eco-comparison
 * 8. CONTACT - Form and demo contact info
 * 
 * Each section is a separate component in components/sections/
 * following the "Living Grain" design philosophy.
 */

import { Hero } from "@/components/sections/Hero";
import { WoodSelector } from "@/components/sections/WoodSelector";
import { Gallery } from "@/components/sections/Gallery";
import { JoineryTechniques } from "@/components/sections/JoineryTechniques";
import { Configurator } from "@/components/sections/Configurator";
import { Process } from "@/components/sections/Process";
import { Sustainability } from "@/components/sections/Sustainability";
import { Contact } from "@/components/sections/Contact";

/**
 * Metadata for SEO - defined inline since this is a server component
 */
export const metadata = {
  title: "Van den Berg Timmerwerken | Maatwerk in Hout | Utrecht & Amersfoort",
  description: "DEMO WEBSITE - Vakmanschap in maatwerk meubels, renovaties en restauratie. 20 jaar ervaring in Utrecht, Amersfoort en omgeving.",
};

/**
 * Home Page Component
 * Renders all sections in order
 */
export default function Home() {
  return (
    <>
      {/* 
        HERO SECTION
        Full viewport with parallax, wood grain SVG overlay
        "Vakmanschap dat blijft" headline
      */}
      <Hero />

      {/* 
        WOOD TYPE SELECTOR
        Interactive comparison of wood species
        Scratch test animations, hardness visualization
      */}
      <WoodSelector />

      {/* 
        PROJECT GALLERY
        Asymmetric masonry layout
        Raw-to-refined hover effect
      */}
      <Gallery />

      {/* 
        JOINERY TECHNIQUES
        Educational section with SVG animations
        Dovetail, Mortise-Tenon, Finger joint
      */}
      <JoineryTechniques />

      {/* 
        MAATWERK CONFIGURATOR
        Interactive furniture builder
        Step-by-step configuration with live pricing
      */}
      <Configurator />

      {/* 
        WORKSHOP PROCESS
        Timeline from planning to delivery
        Animated icons for each phase
      */}
      <Process />

      {/* 
        SUSTAINABILITY CALCULATOR
        CO2 comparison tool
        Wood vs plastic/metal
      */}
      <Sustainability />

      {/* 
        CONTACT SECTION
        Contact form with pencil-style inputs
        Demo contact info clearly marked
      */}
      <Contact />
    </>
  );
}
