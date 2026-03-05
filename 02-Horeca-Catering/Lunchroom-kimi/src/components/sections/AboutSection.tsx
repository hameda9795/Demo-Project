'use client'

import Image from 'next/image'
import ScrollReveal from '../ScrollReveal'

const stats = [
  { number: '9+', label: 'Jaar ervaring' },
  { number: '50K+', label: 'Tevreden gasten' },
  { number: '15', label: 'Lokale partners' },
]

export default function AboutSection() {
  return (
    <section id="over-ons" className="section bg-cream">
      <div className="container-custom">
        <div className="grid grid-cols-2 gap-xl items-center max-lg:grid-cols-1">
          {/* Visual */}
          <div className="relative grid grid-cols-2 gap-sm max-lg:order-1">
            <ScrollReveal>
              <div className="row-span-2 overflow-hidden" style={{ clipPath: 'polygon(0 5%, 100% 0, 95% 100%, 5% 95%)' }}>
                <Image
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80"
                  alt="Chef bereidt vers broodje"
                  width={600}
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="overflow-hidden" style={{ clipPath: 'polygon(5% 0, 100% 5%, 95% 100%, 0 95%)' }}>
                <Image
                  src="https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&q=80"
                  alt="Verse ingrediënten op houten plank"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </ScrollReveal>
            
            <div className="absolute w-[150px] h-[150px] bg-accent rounded-full -bottom-[30px] right-[20%] opacity-20 -z-10" />
          </div>

          {/* Content */}
          <div className="max-lg:order-0">
            <ScrollReveal>
              <span className="section-eyebrow">Ons verhaal</span>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
              <h2 className="section-title mb-md">
                Passie voor <em>goed</em> eten
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="space-y-sm my-md text-stone leading-relaxed">
                <p>
                  De Lunchkamer begon in 2015 als een klein familiebedrijf met één droom: 
                  de beste lunch van Utrecht serveren. Wat begon als een bescheiden zaakje 
                  aan de Oudegracht, is uitgegroeid tot een geliefde plek voor zakelijke 
                  lunches, weekendbrunches en alles daartussen.
                </p>
                <p>
                  Wij geloven in eerlijk eten. Dat betekent brood van de bakker om de hoek, 
                  groenten van lokale boeren en vlees van duurzame leveranciers. Geen shortcuts, 
                  gewoon lekker.
                </p>
              </div>
            </ScrollReveal>
            
            {/* Stats */}
            <div className="flex gap-lg mt-lg pt-md border-t border-black/10 max-md:flex-col max-md:gap-md">
              {stats.map((stat, index) => (
                <ScrollReveal key={stat.label} delay={300 + index * 100}>
                  <div className="flex flex-col">
                    <span className="font-display text-2xl font-bold text-accent leading-none">{stat.number}</span>
                    <span className="text-sm text-stone mt-1">{stat.label}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
