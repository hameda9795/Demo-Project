'use client'

import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '../ScrollReveal'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden py-xl">
      {/* Background Shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-accent-light/50 blur-[80px] opacity-50 -top-[200px] -right-[100px] animate-float" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-cream blur-[80px] opacity-50 bottom-[10%] -left-[100px] animate-float-reverse" />
        <div className="absolute w-[300px] h-[300px] rounded-full bg-stone-light blur-[80px] opacity-50 top-[40%] right-[20%] animate-float-delayed" style={{ animationDelay: '-5s' }} />
      </div>

      <div className="grid grid-cols-2 gap-xl items-center max-w-[1400px] mx-auto px-md w-full max-lg:grid-cols-1 max-lg:text-center max-lg:gap-lg">
        {/* Text Content */}
        <div className="max-lg:order-1">
          <ScrollReveal>
            <p className="text-sm font-medium tracking-[0.15em] uppercase text-accent mb-sm">
              Horeca & Catering sinds 2015
            </p>
          </ScrollReveal>
          
          <h1 className="text-4xl leading-[0.95] mb-md max-lg:text-3xl">
            <ScrollReveal delay={100}>
              <span className="block">Verse</span>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <span className="block">Lunch</span>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <span className="block text-accent italic">& More</span>
            </ScrollReveal>
          </h1>
          
          <ScrollReveal delay={400}>
            <p className="text-lg text-stone max-w-[480px] mb-md leading-relaxed max-lg:mx-auto">
              Dagverse broodjes, huisgemaakte soepen en verrassende salades. 
              Wij verzorgen jouw lunch met passie en lokale ingrediënten.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={500}>
            <div className="flex gap-sm flex-wrap max-lg:justify-center max-sm:flex-col">
              <Link href="/#menu" className="btn btn-primary">
                Bekijk menu
              </Link>
              <Link href="/#catering" className="btn btn-secondary">
                Catering aanvragen
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Visual Content */}
        <div className="relative max-lg:order-0 max-lg:max-w-[500px] max-lg:mx-auto">
          <ScrollReveal delay={200}>
            <div className="relative">
              <div className="relative overflow-hidden" style={{ clipPath: 'polygon(0 0, 100% 5%, 100% 100%, 0 95%)' }}>
                <Image
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80"
                  alt="Gezellige lunchroom interieur met natuurlijk licht"
                  width={800}
                  height={1000}
                  className="w-full h-auto object-cover aspect-[4/5] transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>
              
              {/* Floating Tags */}
              <div className="absolute top-[10%] -left-[10%] bg-white px-md py-sm shadow-xl flex flex-col items-center -rotate-6 max-lg:hidden">
                <span className="font-display text-xl font-bold text-accent leading-none">100%</span>
                <span className="text-xs font-medium tracking-wider uppercase text-stone">Vers</span>
              </div>
              
              <div className="absolute bottom-[15%] -right-[5%] bg-white px-md py-sm shadow-xl flex flex-col items-center rotate-3 max-lg:hidden">
                <span className="font-display text-xl font-bold text-accent leading-none">Lokaal</span>
                <span className="text-xs font-medium tracking-wider uppercase text-stone">Geleverd</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-lg left-1/2 -translate-x-1/2 flex flex-col items-center gap-xs">
        <span className="text-xs font-medium tracking-[0.2em] uppercase text-stone">Scroll</span>
        <div className="w-px h-[60px] bg-gradient-to-b from-stone to-transparent animate-scroll-line" />
      </div>
    </section>
  )
}
