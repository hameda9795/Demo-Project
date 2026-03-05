"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Smartphone, Tablet, Monitor } from "lucide-react";
import { PayslipViewer } from "@/components/tools/payslip-viewer";

type DeviceType = "mobile" | "tablet" | "desktop";

export function DeviceShowcase() {
  const [device, setDevice] = useState<DeviceType>("mobile");

  const deviceConfig = {
    mobile: {
      icon: Smartphone,
      label: "Mobiel",
      width: "w-[320px]",
      frame: "rounded-[3rem]",
      notch: true,
    },
    tablet: {
      icon: Tablet,
      label: "Tablet",
      width: "w-[480px]",
      frame: "rounded-[2rem]",
      notch: false,
    },
    desktop: {
      icon: Monitor,
      label: "Desktop",
      width: "w-[720px]",
      frame: "rounded-lg",
      notch: false,
    },
  };

  const currentConfig = deviceConfig[device];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 bg-white/10 text-white rounded-full text-sm font-medium mb-4"
          >
            Altijd Bereikbaar
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Uw loongegevens,{" "}
            <span className="text-accent">overal en altijd</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity:1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-300"
          >
            Bekijk uw loonspecificaties, vraag verlof aan en beheer uw
            gegevens via onze moderne webapp.
          </motion.p>
        </div>

        {/* Device Toggle */}
        <div className="flex justify-center mb-12">
          <Tabs value={device} onValueChange={(v) => setDevice(v as DeviceType)}>
            <TabsList className="bg-white/10 border border-white/20">
              {(Object.keys(deviceConfig) as DeviceType[]).map((key) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="data-[state=active]:bg-white data-[state=active]:text-slate-900 text-white"
                >
                  <currentConfig.icon className="w-4 h-4 mr-2" />
                  {deviceConfig[key].label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Device Frame */}
        <div className="flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={device}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {/* Device Bezel */}
              <div
                className={`${currentConfig.width} bg-slate-800 ${currentConfig.frame} p-3 shadow-2xl`}
              >
                {/* Notch (for mobile) */}
                {currentConfig.notch && (
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20" />
                )}

                {/* Screen */}
                <div
                  className={`bg-white ${currentConfig.frame} overflow-hidden`}
                  style={{
                    height: device === "mobile" ? "640px" : device === "tablet" ? "640px" : "480px",
                    overflowY: "auto",
                  }}
                >
                  <PayslipViewer />
                </div>
              </div>

              {/* Reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-[3rem] pointer-events-none" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Feature Points */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            {
              title: "Veilig & Betrouwbaar",
              desc: "Two-factor authenticatie en bank-grade encryptie",
            },
            {
              title: "Real-time Updates",
              desc: "Direct inzicht in wijzigingen en nieuwe loonspecificaties",
            },
            {
              title: "Exporteerbaar",
              desc: "Download PDFs of exporteer naar Excel of boekhoudsoftware",
            },
          ].map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="text-center"
            >
              <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
              <p className="text-slate-400 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
