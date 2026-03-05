"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Euro } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function BTWCalculator() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState<21 | 9 | 0>(21);
  const [result, setResult] = useState<{ excl: number; btw: number; incl: number } | null>(null);

  const calculate = () => {
    const value = parseFloat(amount.replace(",", "."));
    if (isNaN(value)) return;

    const btw = (value * rate) / 100;
    const incl = value + btw;

    setResult({
      excl: value,
      btw: btw,
      incl: incl,
    });
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("nl-NL", {
      style: "currency",
      currency: "EUR",
    }).format(value);
  };

  return (
    <GlassCard className="max-w-md mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-[#d4af37]/20 flex items-center justify-center">
          <Calculator className="w-5 h-5 text-[#d4af37]" />
        </div>
        <div>
          <h3 className="font-bold text-[#1e3a5f] dark:text-white">BTW Calculator</h3>
          <p className="text-xs text-muted-foreground">Bereken BTW snel en eenvoudig</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="amount" className="text-[#1e3a5f] dark:text-white">
            Bedrag (excl. BTW)
          </Label>
          <div className="relative mt-1.5">
            <Euro className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="amount"
              type="text"
              placeholder="0,00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="pl-10"
              aria-label="Bedrag exclusief BTW"
            />
          </div>
        </div>

        <div>
          <Label className="text-[#1e3a5f] dark:text-white">BTW percentage</Label>
          <div className="flex gap-2 mt-1.5">
            {[21, 9, 0].map((r) => (
              <button
                key={r}
                onClick={() => setRate(r as 21 | 9 | 0)}
                className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                  rate === r
                    ? "bg-[#1e3a5f] text-white"
                    : "bg-[#1e3a5f]/10 text-[#1e3a5f] dark:text-white/70 hover:bg-[#1e3a5f]/20"
                }`}
                aria-pressed={rate === r}
                aria-label={`${r}% BTW`}
              >
                {r}%
              </button>
            ))}
          </div>
        </div>

        <Button
          onClick={calculate}
          className="w-full bg-[#d4af37] hover:bg-[#e5c158] text-[#1e3a5f] font-semibold"
        >
          Berekenen
        </Button>

        {result && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="pt-4 border-t border-[#1e3a5f]/10"
          >
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Excl. BTW:</span>
                <span className="font-medium text-[#1e3a5f] dark:text-white">
                  {formatCurrency(result.excl)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">BTW ({rate}%):</span>
                <span className="font-medium text-[#d4af37]">
                  {formatCurrency(result.btw)}
                </span>
              </div>
              <div className="flex justify-between pt-2 border-t border-[#1e3a5f]/10">
                <span className="font-semibold text-[#1e3a5f] dark:text-white">Incl. BTW:</span>
                <span className="font-bold text-lg text-[#1e3a5f] dark:text-white">
                  {formatCurrency(result.incl)}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </GlassCard>
  );
}
