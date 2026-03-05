"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { Calculator, RotateCcw } from "lucide-react";

interface CalculationResult {
  grossSalary: number;
  pensionPremium: number;
  wageTax: number;
  socialSecurity: number;
  healthcare: number;
  netSalary: number;
  holidayAllowance: number;
  totalEmployerCost: number;
}

export function SalaryCalculator() {
  const [grossSalary, setGrossSalary] = useState<number>(3500);
  const [pensionPercentage, setPensionPercentage] = useState<number>(5);
  const [hasHolidayAllowance, setHasHolidayAllowance] = useState<boolean>(true);
  const [result, setResult] = useState<CalculationResult | null>(null);

  const calculateSalary = useCallback(() => {
    const holidayAllowance = hasHolidayAllowance ? grossSalary * 0.08 : 0;
    const taxableIncome = grossSalary + holidayAllowance / 12;
    
    let wageTax = 0;
    if (taxableIncome <= 2500) {
      wageTax = taxableIncome * 0.0932;
    } else if (taxableIncome <= 3500) {
      wageTax = 2500 * 0.0932 + (taxableIncome - 2500) * 0.3697;
    } else {
      wageTax = 2500 * 0.0932 + 1000 * 0.3697 + (taxableIncome - 3500) * 0.4950;
    }

    const pensionPremium = grossSalary * (pensionPercentage / 100);
    const socialSecurity = grossSalary * 0.2765;
    const healthcare = 150;

    const netSalary = grossSalary + (holidayAllowance / 12) - wageTax - pensionPremium - socialSecurity - healthcare;
    const totalEmployerCost = grossSalary * 1.25 + holidayAllowance / 12;

    setResult({
      grossSalary,
      pensionPremium,
      wageTax,
      socialSecurity,
      healthcare,
      netSalary,
      holidayAllowance,
      totalEmployerCost,
    });
  }, [grossSalary, pensionPercentage, hasHolidayAllowance]);

  useEffect(() => {
    calculateSalary();
  }, [calculateSalary]);

  const chartData = result
    ? [
        { name: "Netto loon", value: Math.max(0, result.netSalary), color: "#059669" },
        { name: "Loonheffing", value: result.wageTax, color: "#ef4444" },
        { name: "Pensioen", value: result.pensionPremium, color: "#3b82f6" },
        { name: "Sociale verzekeringen", value: result.socialSecurity, color: "#f59e0b" },
        { name: "Zorgverzekering", value: result.healthcare, color: "#8b5cf6" },
      ]
    : [];

  const resetCalculator = () => {
    setGrossSalary(3500);
    setPensionPercentage(5);
    setHasHolidayAllowance(true);
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <Card className="glass border-white/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-primary" />
            Bruto-Netto Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="gross-salary">Bruto maandsalaris</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">€</span>
              <Input
                id="gross-salary"
                type="number"
                value={grossSalary}
                onChange={(e) => setGrossSalary(Number(e.target.value))}
                className="pl-8"
                min={0}
                step={100}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="pension">Pensioenpremie (%)</Label>
            <Input
              id="pension"
              type="number"
              value={pensionPercentage}
              onChange={(e) => setPensionPercentage(Number(e.target.value))}
              min={0}
              max={50}
              step={0.5}
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="holiday"
              checked={hasHolidayAllowance}
              onChange={(e) => setHasHolidayAllowance(e.target.checked)}
              className="w-4 h-4 rounded border-gray-300"
            />
            <Label htmlFor="holiday" className="mb-0">
              Inclusief vakantiegeld (8%)
            </Label>
          </div>

          <div className="flex gap-3">
            <Button onClick={calculateSalary} className="flex-1">
              Berekenen
            </Button>
            <Button variant="outline" onClick={resetCalculator}>
              <RotateCcw className="w-4 h-4" />
            </Button>
          </div>

          <div className="pt-4 border-t">
            <p className="text-sm text-muted-foreground mb-3">Snelle selectie:</p>
            <div className="flex flex-wrap gap-2">
              {[2500, 3000, 3500, 4000, 4500, 5000].map((amount) => (
                <Button
                  key={amount}
                  variant="outline"
                  size="sm"
                  onClick={() => setGrossSalary(amount)}
                >
                  €{amount}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        {result && (
          <>
            <Card className="glass border-white/20">
              <CardContent className="pt-6">
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                        animationBegin={0}
                        animationDuration={800}
                      >
                        {chartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value) => formatCurrency(value as number)}
                        contentStyle={{
                          backgroundColor: "rgba(255, 255, 255, 0.95)",
                          borderRadius: "8px",
                          border: "none",
                          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-4">
                  {chartData.map((item) => (
                    <div key={item.name} className="flex items-center gap-2 text-sm">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-muted-foreground">{item.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-3"
            >
              <ResultRow label="Bruto maandsalaris" value={result.grossSalary} isPositive />
              <ResultRow label="Vakantiegeld (per jaar)" value={result.holidayAllowance} highlight />
              <div className="h-px bg-gray-200 my-2" />
              <ResultRow label="Loonheffing" value={-result.wageTax} />
              <ResultRow label="Pensioenpremie" value={-result.pensionPremium} />
              <ResultRow label="Sociale verzekeringen" value={-result.socialSecurity} />
              <ResultRow label="Zorgverzekeringswet" value={-result.healthcare} />
              <div className="h-px bg-gray-200 my-2" />
              <ResultRow label="Netto maandsalaris" value={result.netSalary} isTotal highlight />
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}

function ResultRow({
  label,
  value,
  isPositive,
  isTotal,
  highlight,
}: {
  label: string;
  value: number;
  isPositive?: boolean;
  isTotal?: boolean;
  highlight?: boolean;
}) {
  return (
    <div
      className={`flex justify-between items-center py-2 px-4 rounded-lg ${
        isTotal
          ? "bg-primary text-white font-bold text-lg"
          : highlight
          ? "bg-primary/10 font-semibold"
          : "bg-gray-50"
      }`}
    >
      <span className={isTotal ? "" : "text-gray-600"}>{label}</span>
      <span className={isPositive ? "text-green-600" : ""}>
        {formatCurrency(Math.abs(value))}
      </span>
    </div>
  );
}
