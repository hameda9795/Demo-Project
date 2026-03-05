"use client";

import { motion } from "framer-motion";

const companies = [
  { name: "TechCorp Nederland", industry: "Technologie" },
  { name: "BouwPartners BV", industry: "Bouw" },
  { name: "Retail Solutions", industry: "Retail" },
  { name: "ConsultX Group", industry: "Consultancy" },
  { name: "MediCare Plus", industry: "Zorg" },
  { name: "Logistics Pro", industry: "Logistiek" },
  { name: "Finance First", industry: "Financieel" },
  { name: "Creative Studio", industry: "Creatief" },
];

export function TrustedBy() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm uppercase tracking-wider font-medium"
        >
          Vertrouwd door toonaangevende bedrijven
        </motion.p>
      </div>

      {/* Scrolling Logos */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex overflow-hidden"
        >
          <div className="flex animate-scroll-x">
            {[...companies, ...companies].map((company, i) => (
              <div
                key={`${company.name}-${i}`}
                className="flex-shrink-0 mx-8 group"
              >
                <div className="flex items-center gap-3 px-6 py-4 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-700 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    {company.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 whitespace-nowrap">
                      {company.name}
                    </p>
                    <p className="text-xs text-gray-500">{company.industry}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "500+", label: "Bedrijven" },
            { value: "25K+", label: "Werknemers" },
            { value: "99.9%", label: "Uptime" },
            { value: "15+", label: "Jaar ervaring" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</p>
              <p className="text-gray-500 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
