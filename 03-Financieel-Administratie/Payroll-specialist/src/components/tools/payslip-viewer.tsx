"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { HelpCircle, FileText, Download, ChevronDown, ChevronUp } from "lucide-react";

interface PayslipItem {
  code: string;
  description: string;
  hours?: number;
  rate?: number;
  amount: number;
  type: "earning" | "deduction";
  info?: string;
}

interface PayslipData {
  period: string;
  employeeName: string;
  employeeNumber: string;
  bsn: string;
  department: string;
  items: PayslipItem[];
}

const demoPayslip: PayslipData = {
  period: "Januari 2024",
  employeeName: "Jan de Vries",
  employeeNumber: "12345",
  bsn: "1234.56.789",
  department: "Administratie",
  items: [
    {
      code: "1000",
      description: "Salaris",
      hours: 173.33,
      rate: 20.19,
      amount: 3500.0,
      type: "earning",
      info: "Uw bruto maandsalaris gebaseerd op 40 uur per week",
    },
    {
      code: "1200",
      description: "Vakantiegeld (8%)",
      amount: 280.0,
      type: "earning",
      info: "Wettelijk vakantiegeld, jaarlijks uitbetaald in mei of maandelijks",
    },
    {
      code: "1300",
      description: "Reiskostenvergoeding",
      amount: 150.0,
      type: "earning",
      info: "Vergoeding voor woon-werkverkeer",
    },
    {
      code: "2000",
      description: "Loonheffing",
      amount: 875.0,
      type: "deduction",
      info: "Ingehouden loonbelasting en premie volksverzekeringen",
    },
    {
      code: "2100",
      description: "Pensioenpremie werknemer",
      amount: 175.0,
      type: "deduction",
      info: "Uw bijdrage aan het pensioenfonds (5% van bruto salaris)",
    },
    {
      code: "2200",
      description: "Premie Zorgverzekeringswet",
      amount: 150.0,
      type: "deduction",
      info: "Bijdrage aan de Zorgverzekeringswet",
    },
    {
      code: "2300",
      description: "Werkgeversheffing ZVW",
      amount: 0,
      type: "deduction",
      info: "Bijdrage werkgever aan Zorgverzekeringswet (wordt niet van salaris ingehouden)",
    },
  ],
};

export function PayslipViewer() {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [selectedMonth, setSelectedMonth] = useState("januari-2024");

  const earnings = demoPayslip.items.filter((i) => i.type === "earning");
  const deductions = demoPayslip.items.filter((i) => i.type === "deduction" && i.amount > 0);

  const grossTotal = earnings.reduce((sum, i) => sum + i.amount, 0);
  const deductionTotal = deductions.reduce((sum, i) => sum + i.amount, 0);
  const netTotal = grossTotal - deductionTotal;

  const months = [
    { value: "januari-2024", label: "Januari 2024" },
    { value: "december-2023", label: "December 2023" },
    { value: "november-2023", label: "November 2023" },
  ];

  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-primary to-primary-700 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FileText className="w-8 h-8" />
            <div>
              <CardTitle className="text-white">Loonspecificatie</CardTitle>
              <p className="text-white/80 text-sm">{demoPayslip.period}</p>
            </div>
          </div>
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="bg-white/20 border-0 text-white text-sm rounded-lg px-3 py-2 focus:ring-2 focus:ring-white/50"
          >
            {months.map((m) => (
              <option key={m.value} value={m.value} className="text-gray-900">
                {m.label}
              </option>
            ))}
          </select>
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
          <InfoItem label="Werknemer" value={demoPayslip.employeeName} />
          <InfoItem label="Personeelsnummer" value={demoPayslip.employeeNumber} />
          <InfoItem label="BSN" value={demoPayslip.bsn} />
          <InfoItem label="Afdeling" value={demoPayslip.department} />
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            Inkomsten
          </h4>
          <div className="space-y-2">
            {earnings.map((item) => (
              <PayslipRow
                key={item.code}
                item={item}
                isExpanded={expandedItem === item.code}
                onToggle={() =>
                  setExpandedItem(expandedItem === item.code ? null : item.code)
                }
              />
            ))}
          </div>
          <div className="flex justify-between items-center mt-3 pt-3 border-t-2 border-green-100 font-semibold text-green-800">
            <span>Totaal bruto</span>
            <span>{formatCurrency(grossTotal)}</span>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-red-700 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 bg-red-500 rounded-full" />
            Afdrachten
          </h4>
          <div className="space-y-2">
            {deductions.map((item) => (
              <PayslipRow
                key={item.code}
                item={item}
                isExpanded={expandedItem === item.code}
                onToggle={() =>
                  setExpandedItem(expandedItem === item.code ? null : item.code)
                }
              />
            ))}
          </div>
          <div className="flex justify-between items-center mt-3 pt-3 border-t-2 border-red-100 font-semibold text-red-800">
            <span>Totaal inhoudingen</span>
            <span>- {formatCurrency(deductionTotal)}</span>
          </div>
        </div>

        <div className="bg-primary text-white p-6 rounded-xl">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-white/80 text-sm">Netto uit te betalen</p>
              <p className="text-3xl font-bold">{formatCurrency(netTotal)}</p>
            </div>
            <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors">
              <Download className="w-4 h-4" />
              PDF
            </button>
          </div>
        </div>

        <div className="mt-6 text-sm text-gray-500 text-center">
          <p>Dit is een voorbeeld loonspecificatie ter illustratie.</p>
          <p className="mt-1">
            Hover over een regel voor meer informatie of klik op het info-icoon.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-gray-500 uppercase tracking-wide">{label}</p>
      <p className="font-medium text-gray-900">{value}</p>
    </div>
  );
}

function PayslipRow({
  item,
  isExpanded,
  onToggle,
}: {
  item: PayslipItem;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <div
        className={`flex items-center justify-between p-3 cursor-pointer hover:bg-gray-50 transition-colors ${
          item.type === "earning" ? "bg-green-50/50" : "bg-red-50/50"
        }`}
        onClick={onToggle}
      >
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-gray-400 w-10">{item.code}</span>
          <span className="font-medium">{item.description}</span>
          {item.info && (
            <HelpCircle className="w-4 h-4 text-gray-400 hover:text-primary" />
          )}
        </div>
        <div className="flex items-center gap-3">
          <span
            className={`font-semibold ${
              item.type === "earning" ? "text-green-700" : "text-red-700"
            }`}
          >
            {item.type === "deduction" ? "- " : ""}
            {formatCurrency(item.amount)}
          </span>
          {isExpanded ? (
            <ChevronUp className="w-4 h-4 text-gray-400" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-400" />
          )}
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && item.info && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-gray-50 border-t"
          >
            <div className="p-3 text-sm text-gray-600">
              <p className="font-medium mb-1">Toelichting:</p>
              <p>{item.info}</p>
              {item.hours && item.rate && (
                <p className="mt-2 text-gray-500">
                  {item.hours.toFixed(2)} uur × €{item.rate.toFixed(2)}/uur
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
