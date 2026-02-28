import { Hero } from "@/components/sections/Hero";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { GardenDesigner } from "@/components/sections/GardenDesigner";
import { SeasonalCalendar } from "@/components/sections/SeasonalCalendar";
import { EcoCalculator } from "@/components/sections/EcoCalculator";
import { ProjectGallery } from "@/components/sections/ProjectGallery";
import { PlantDatabase } from "@/components/sections/PlantDatabase";
import { Services } from "@/components/sections/Services";
import { DemoBadge } from "@/components/DemoBadge";
import Link from "next/link";
import { ArrowRight, Leaf, Phone, Mail, MapPin } from "lucide-react";
import { demoContact } from "@/lib/utils";

export default function Home() {
  return (
    <>
      {/* Demo Banner */}
      <DemoBadge variant="banner" />

      {/* Hero */}
      <Hero />

      {/* Before/After Transformations */}
      <BeforeAfter />

      {/* Services Preview */}
      <Services />

      {/* Garden Designer Tool */}
      <GardenDesigner />

      {/* Seasonal Calendar */}
      <SeasonalCalendar />

      {/* Project Gallery */}
      <div id="projecten">
        <ProjectGallery />
      </div>

      {/* Plant Database */}
      <PlantDatabase />

      {/* Eco Calculator */}
      <EcoCalculator />

      {/* CTA Section */}
      <section className="py-24 bg-wood relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-green-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-300/20 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 
            bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
            <Leaf className="w-4 h-4" />
            Klaar voor uw droomtuin?
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-forest-900 mb-6">
            Laten we samen groen maken
          </h2>
          <p className="text-forest-600 text-lg mb-8 max-w-2xl mx-auto">
            Of u nu een complete tuinmakeover wilt of regelmatig onderhud nodig heeft, 
            wij staan voor u klaar. Vraag vandaag nog een vrijblijvend adviesgesprek aan.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="https://techsolutionsutrecht.nl/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 
                px-8 py-4 bg-green-600 text-white 
                rounded-full font-medium text-lg
                hover:bg-green-700 transition-all duration-300
                hover:shadow-glow hover:-translate-y-1">
              <Leaf className="w-5 h-5" />
              Direct Contact
            </Link>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center gap-2 
                px-8 py-4 bg-forest-800 text-white 
                rounded-full font-medium text-lg
                hover:bg-forest-700 transition-all duration-300">
              Offerte Aanvragen
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Quick Contact Info */}
          <div className="grid sm:grid-cols-3 gap-6 text-left bg-white rounded-2xl p-6 shadow-nature">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-green-100 rounded-xl">
                <Phone className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-forest-500">Telefoon (DEMO)</p>
                <p className="font-medium text-forest-900">{demoContact.phoneRaw}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-green-100 rounded-xl">
                <Mail className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-forest-500">Email (DEMO)</p>
                <p className="font-medium text-forest-900 text-sm">{demoContact.emailRaw}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-green-100 rounded-xl">
                <MapPin className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-forest-500">Werkgebied</p>
                <p className="font-medium text-forest-900">Amsterdam & Haarlem</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
