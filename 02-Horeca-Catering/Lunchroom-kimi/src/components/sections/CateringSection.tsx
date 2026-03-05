'use client'

import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '../ScrollReveal'

const cateringItems = [
  { icon: '✓', text: 'Vergaderlunches & bedrijfsevents' },
  { icon: '✓', text: 'Bruiloften & feesten' },
  { icon: '✓', text: 'High tea & brunch' },
  { icon: '✓', text: 'Dietary requirements altijd mogelijk' },
]

export default function CateringSection() {
  return (
    <section id="catering" className="section bg-primary text-warm-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 gap-xl items-center max-lg:grid-cols-1">
          {/* Content */}
          <div className="max-lg:order-0">
            <ScrollReveal>
              <span className="section-eyebrow text-accent-light">Zakelijk & Privé</span>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
              <h2 className="section-title mb-md">
                Catering op <em>maat</em>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="my-md">
                <p className="text-stone-light leading-relaxed mb-md">
                  Van vergaderlunch tot bruiloft: wij verzorgen het eten voor jouw evenement. 
                  Vers, lekker en precies afgestemd op jouw wensen en dieetwensen.
                </p>
                <ul className="space-y-xs my-md">
                  {cateringItems.map((item, index) => (
                    <li key={index} className="flex items-center gap-xs text-base">
                      <span className="text-accent font-bold">{item.icon}</span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={500}>
              <Link href="/#contact" className="btn btn-primary inline-block">
                Vraag offerte aan
              </Link>
            </ScrollReveal>
          </div>

          {/* Visual */}
          <div className="relative max-lg:order-1">
            <ScrollReveal>
              <div className="overflow-hidden" style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0 100%)' }}>
                <Image
                  src="https://images.unsplash.com/photo-1555244162-803834f70033?w=700&q=80"
                  alt="Catering buffet opgesteld"
                  width={700}
                  height={500}
                  className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="absolute -bottom-[50px] -left-[50px] w-[60%] overflow-hidden shadow-2xl max-lg:relative max-lg:bottom-auto max-lg:left-auto max-lg:w-full max-lg:mt-sm" style={{ clipPath: 'polygon(0 10%, 100% 0, 100% 90%, 10% 100%)' }}>
                <Image
                  src="https://images.unsplash.com/photo-1529563021893-cc83c992d75d?w=400&q=80"
                  alt="Verse sandwich catering"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <div className="absolute top-[20px] -right-[20px] bg-accent text-white px-md py-sm text-center rotate-[5deg] max-lg:relative max-lg:top-auto max-lg:right-auto max-lg:mt-sm max-lg:rotate-0">
                <span className="block text-xs font-medium tracking-wider uppercase">Ook voor</span>
                <span className="block font-display text-lg font-bold">Grote groepen</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
