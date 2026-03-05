'use client'

import { useState } from 'react'
import ScrollReveal from '../ScrollReveal'

const menuCategories = [
  { id: 'broodjes', label: 'Broodjes' },
  { id: 'soepen', label: 'Soepen' },
  { id: 'salades', label: 'Salades' },
  { id: 'dranken', label: 'Dranken' },
]

const menuItems: Record<string, Array<{ name: string; price: string; description: string }>> = {
  broodjes: [
    { name: 'De Utrechter', price: '€6,50', description: 'Gerookte kip, avocado, bacon, sla en huisgemaakte cocktailsaus op meergranenbrood' },
    { name: 'Italiaanse Klassieker', price: '€5,95', description: 'Mozzarella, tomaat, basilicum pesto en rucola op ciabatta' },
    { name: 'Vegetarisch Genot', price: '€5,75', description: 'Gegrilde groenten, hummus, feta en spinazie op zuurdesem' },
    { name: 'Zalm Deluxe', price: '€7,25', description: 'Gerookte zalm, roomkaas, kappertjes en rode ui op roggebrood' },
  ],
  soepen: [
    { name: 'Tomaat-Basilicum', price: '€4,50', description: 'Romige tomatensoep met verse basilicum en een dot crème fraîche' },
    { name: 'Pompoen', price: '€4,95', description: 'Seizoenspompoen met gember, kokosmelk en geroosterde pompoenpitten' },
    { name: 'Franse Uiensoep', price: '€5,25', description: 'Uiensoep met gegratineerde kaas en een plakje stokbrood' },
  ],
  salades: [
    { name: 'Caesar Salade', price: '€8,50', description: 'Klassieke caesar met gegrilde kip, parmezaan, croutons en huisgemaakte dressing' },
    { name: 'Quinoa Bowl', price: '€9,25', description: 'Quinoa, avocado, kidneybonen, mais, tomaat en limoen-cilantro dressing' },
  ],
  dranken: [
    { name: 'Huisgemaakte Limonade', price: '€3,50', description: 'Vers geperst met dagelijks wisselende smaken' },
    { name: 'Speciaalbier', price: '€4,50', description: 'Lokaal gebrouwen, wisselend aanbod' },
  ],
}

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('broodjes')

  return (
    <section id="menu" className="section overflow-hidden relative">
      {/* Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[clamp(10rem,20vw,25rem)] font-bold text-transparent pointer-events-none z-0" style={{ WebkitTextStroke: '1px rgba(0,0,0,0.05)' }}>
        MENU
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="section-header section-header-centered">
          <ScrollReveal>
            <span className="section-eyebrow">Onze specialiteiten</span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="section-title">Het Menu</h2>
          </ScrollReveal>
        </div>

        {/* Categories */}
        <ScrollReveal delay={200}>
          <div className="flex justify-center gap-sm mb-xl flex-wrap max-md:flex-col max-md:items-center">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 border rounded text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-accent border-accent text-white'
                    : 'border-stone-light text-stone hover:bg-accent hover:border-accent hover:text-white'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Menu Items */}
        <div className="relative">
          {menuCategories.map((category) => (
            <div
              key={category.id}
              className={`transition-all duration-500 ${
                activeCategory === category.id
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-5 absolute inset-0 pointer-events-none'
              }`}
            >
              <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-md max-md:grid-cols-1">
                {menuItems[category.id].map((item, index) => (
                  <ScrollReveal key={item.name} delay={index * 100}>
                    <div className="p-md border-b border-black/10 transition-all duration-300 hover:bg-cream hover:translate-x-2.5 group">
                      <div className="flex justify-between items-baseline mb-xs">
                        <h3 className="font-display text-lg font-semibold">{item.name}</h3>
                        <span className="font-display text-lg font-bold text-accent">{item.price}</span>
                      </div>
                      <p className="text-sm text-stone leading-relaxed">{item.description}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
