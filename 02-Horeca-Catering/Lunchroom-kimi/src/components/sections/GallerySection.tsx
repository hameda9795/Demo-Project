'use client'

import Image from 'next/image'
import ScrollReveal from '../ScrollReveal'

const galleryItems = [
  { src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80', alt: 'Restaurant interieur', label: 'Onze zaak', large: true },
  { src: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600&q=80', alt: 'Vers broodje', label: 'Broodjes' },
  { src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80', alt: 'Gezonde salade', label: 'Salades' },
  { src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80', alt: 'Cocktail drankjes', label: 'Dranken', tall: true },
  { src: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&q=80', alt: 'Dessert', label: 'Toetjes' },
]

export default function GallerySection() {
  return (
    <section id="galerij" className="section bg-warm-white">
      <div className="container-custom">
        {/* Header */}
        <div className="section-header section-header-centered">
          <ScrollReveal>
            <span className="section-eyebrow">Impressie</span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="section-title">Galerij</h2>
          </ScrollReveal>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-4 auto-rows-[300px] gap-sm max-lg:grid-cols-2 max-lg:auto-rows-[200px] max-md:grid-cols-1 max-md:auto-rows-[250px]">
          {galleryItems.map((item, index) => (
            <ScrollReveal 
              key={item.alt} 
              delay={index * 100}
              className={`
                relative overflow-hidden group
                ${item.large ? 'col-span-2 row-span-2 max-lg:col-span-2 max-lg:row-span-1 max-md:col-span-1 max-md:row-span-1' : ''}
                ${item.tall ? 'row-span-2 max-lg:row-span-1 max-md:row-span-1' : ''}
              `}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-display text-xl font-semibold">{item.label}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
