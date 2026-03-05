"use client";

import { motion } from "framer-motion";
import { SalaryCalculator } from "@/components/tools/salary-calculator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info, Calculator, TrendingUp, AlertCircle } from "lucide-react";

const taxBrackets = [
  { bracket: "Tot € 75.518", rate: "36,97%", type: "Schijf 1 & 2" },
  { bracket: "Vanaf € 75.518", rate: "49,50%", type: "Schijf 3" },
];

const deductions = [
  {
    name: "Loonheffing",
    description: "Ingehouden loonbelasting en premies volksverzekeringen",
  },
  {
    name: "Pensioenpremie",
    description: "Uw persoonlijke bijdrage aan het pensioenfonds",
  },
  {
    name: "Werkgeversheffing ZVW",
    description: "Bijdrage zorgverzekeringswet (wordt niet van loon ingehouden)",
  },
  {
    name: "Vakantiegeld",
    description: "Minimaal 8% van uw bruto jaarsalaris",
  },
];

export default function SalaryCalculationPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <Calculator className="w-4 h-4" />
            Bruto-Netto Calculator
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Bereken uw nettoloon
          </h1>
          <p className="text-lg text-slate-600">
            Vul uw bruto maandsalaris in en zie direct hoeveel u netto overhoudt.
            Inclusief alle belangrijke inhoudingen en toeslagen.
          </p>
        </motion.div>

        {/* Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <SalaryCalculator />
        </motion.div>

        {/* Info Sections */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Tax Brackets */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Belastingschijven 2024
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  In Nederland geldt een progressief belastingstelsel. Hoe meer u
                  verdient, hoe meer belasting u betaalt over het extra deel.
                </p>
                <div className="space-y-3">
                  {taxBrackets.map((bracket) => (
                    <div
                      key={bracket.bracket}
                      className="flex justify-between items-center p-4 bg-slate-50 rounded-lg"
                    >
                      <div>
                        <p className="font-semibold">{bracket.bracket}</p>
                        <p className="text-sm text-slate-500">{bracket.type}</p>
                      </div>
                      <span className="text-2xl font-bold text-primary">
                        {bracket.rate}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Deductions Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="w-5 h-5 text-primary" />
                  Belangrijke inhoudingen
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {deductions.map((item) => (
                    <div key={item.name} className="flex gap-4">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-amber-900 mb-2">
                    Disclaimer
                  </h4>
                  <p className="text-amber-800 text-sm">
                    Deze berekening is indicatief en gebaseerd op algemene
                    uitgangspunten. De werkelijke nettoloon kan afwijken door
                    specifieke situaties zoals heffingskortingen, loonbeslagen,
                    of extra inhoudingen. Voor een exacte berekening raden wij
                    aan contact op te nemen met een van onze adviseurs.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </main>
  );
}
