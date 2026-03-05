"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAuth } from "@/lib/auth-context";
import { formatCurrency } from "@/lib/utils";
import {
  Users,
  Euro,
  AlertCircle,
  Search,
  Upload,
  FileText,
  Calendar,
  LogOut,
  TrendingUp,
  CheckCircle,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const monthlyCosts = [
  { month: "Jan", kosten: 125000 },
  { month: "Feb", kosten: 128000 },
  { month: "Mrt", kosten: 126000 },
  { month: "Apr", kosten: 130000 },
  { month: "Mei", kosten: 129000 },
  { month: "Jun", kosten: 135000 },
];

const employees = [
  { id: 1, name: "Jan de Vries", email: "jan@company.nl", department: "Administratie", salary: 3500, status: "actief" },
  { id: 2, name: "Maria Jansen", email: "maria@company.nl", department: "HR", salary: 4200, status: "actief" },
  { id: 3, name: "Pieter Bakker", email: "pieter@company.nl", department: "IT", salary: 4800, status: "actief" },
  { id: 4, name: "Sophie van den Berg", email: "sophie@company.nl", department: "Sales", salary: 3800, status: "verlof" },
  { id: 5, name: "Ahmed Hassan", email: "ahmed@company.nl", department: "Finance", salary: 5200, status: "actief" },
];

const complianceTasks = [
  { task: "Loonaangifte Q1", deadline: "31-03-2024", status: "voltooid" },
  { task: "CBS-statistieken", deadline: "15-04-2024", status: "pending" },
  { task: "Pensioenaangifte", deadline: "30-04-2024", status: "pending" },
  { task: "Vakantiegeld uitbetaling", deadline: "25-05-2024", status: "pending" },
];

export default function AdminPage() {
  const { user, isLoading, logout } = useAuth();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (!isLoading && (!user || user.role !== "admin")) {
      router.push("/login");
    }
  }, [user, isLoading, router]);

  if (isLoading || !user || user.role !== "admin") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  const handleProcessPayroll = () => {
    setIsProcessing(true);
    setTimeout(() => setIsProcessing(false), 3000);
  };

  const filteredEmployees = employees.filter(
    (e) =>
      e.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalMonthlyCost = employees.reduce((sum, e) => sum + e.salary, 0) * 1.25;
  const totalEmployees = employees.length;
  const activeEmployees = employees.filter((e) => e.status === "actief").length;

  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-24 lg:pb-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Admin Dashboard</h1>
            <p className="text-slate-500">Beheer uw payroll en werknemers</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" onClick={() => logout()}>
              <LogOut className="w-4 h-4 mr-2" />
              Uitloggen
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          <StatCard title="Totaal Werknemers" value={totalEmployees.toString()} subValue={`${activeEmployees} actief`} icon={Users} />
          <StatCard title="Maandlasten" value={formatCurrency(totalMonthlyCost)} subValue="incl. werkgeverslasten" icon={Euro} />
          <StatCard title="Openstaande Taken" value={complianceTasks.filter((t) => t.status === "pending").length.toString()} subValue="deze maand" icon={AlertCircle} />
          <StatCard title="Vakantiegeld" value={formatCurrency(totalMonthlyCost * 0.08)} subValue="reservering mei" icon={TrendingUp} />
        </motion.div>

        <Tabs defaultValue="employees" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-grid">
            <TabsTrigger value="employees"><Users className="w-4 h-4 mr-2 hidden sm:inline" />Werknemers</TabsTrigger>
            <TabsTrigger value="payroll"><Euro className="w-4 h-4 mr-2 hidden sm:inline" />Payroll</TabsTrigger>
            <TabsTrigger value="analytics"><TrendingUp className="w-4 h-4 mr-2 hidden sm:inline" />Analyses</TabsTrigger>
            <TabsTrigger value="compliance"><CheckCircle className="w-4 h-4 mr-2 hidden sm:inline" />Compliance</TabsTrigger>
          </TabsList>

          <TabsContent value="employees" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <CardTitle>Werknemersoverzicht</CardTitle>
                <div className="flex gap-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input placeholder="Zoeken..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10 w-64" />
                  </div>
                  <Button><Users className="w-4 h-4 mr-2" />Toevoegen</Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Naam</TableHead>
                      <TableHead>Afdeling</TableHead>
                      <TableHead>Bruto salaris</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Acties</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredEmployees.map((employee) => (
                      <TableRow key={employee.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium">{employee.name}</p>
                            <p className="text-sm text-gray-500">{employee.email}</p>
                          </div>
                        </TableCell>
                        <TableCell>{employee.department}</TableCell>
                        <TableCell>{formatCurrency(employee.salary)}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs ${employee.status === "actief" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>
                            {employee.status}
                          </span>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm"><FileText className="w-4 h-4" /></Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payroll" className="space-y-6">
            <Card>
              <CardHeader><CardTitle>Payroll Verwerking</CardTitle></CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col sm:flex-row items-center justify-between p-6 bg-gray-50 rounded-xl">
                  <div>
                    <p className="font-semibold">Loonperiode Maart 2024</p>
                    <p className="text-sm text-gray-500">{totalEmployees} werknemers | Betaaldatum: 25-03-2024</p>
                  </div>
                  <Button size="lg" onClick={handleProcessPayroll} disabled={isProcessing} className="mt-4 sm:mt-0">
                    {isProcessing ? (
                      <><div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2" />Bezig met verwerken...</>
                    ) : (
                      <><Upload className="w-4 h-4 mr-2" />Verwerk Payroll</>
                    )}
                  </Button>
                </div>

                <div className="border rounded-xl overflow-hidden">
                  <div className="p-4 bg-gray-50 border-b"><p className="font-semibold">Samenvatting loonkosten</p></div>
                  <div className="p-4 space-y-3">
                    <CostRow label="Bruto lonen" value={employees.reduce((sum, e) => sum + e.salary, 0)} />
                    <CostRow label="Werkgeverslasten (circa 25%)" value={employees.reduce((sum, e) => sum + e.salary, 0) * 0.25} />
                    <CostRow label="Pensioenpremie werkgever" value={employees.reduce((sum, e) => sum + e.salary, 0) * 0.08} />
                    <div className="h-px bg-gray-200 my-2" />
                    <CostRow label="Totaal" value={totalMonthlyCost} isTotal />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader><CardTitle>Maandlasten overzicht</CardTitle></CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={monthlyCosts}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip formatter={(value) => formatCurrency(value as number)} />
                        <Bar dataKey="kosten" fill="#059669" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle>Kostenontwikkeling</CardTitle></CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={monthlyCosts}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip formatter={(value) => formatCurrency(value as number)} />
                        <Line type="monotone" dataKey="kosten" stroke="#fbbf24" strokeWidth={3} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="compliance" className="space-y-6">
            <Card>
              <CardHeader><CardTitle>Compliance Kalender</CardTitle></CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {complianceTasks.map((task) => (
                    <div key={task.task} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${task.status === "voltooid" ? "bg-green-100 text-green-600" : "bg-amber-100 text-amber-600"}`}>
                          {task.status === "voltooid" ? <CheckCircle className="w-5 h-5" /> : <Calendar className="w-5 h-5" />}
                        </div>
                        <div>
                          <p className="font-semibold">{task.task}</p>
                          <p className="text-sm text-gray-500">Deadline: {task.deadline}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${task.status === "voltooid" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>
                        {task.status === "voltooid" ? "Voltooid" : "Openstaand"}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function StatCard({ title, value, subValue, icon: Icon }: { title: string; value: string; subValue: string; icon: React.ElementType }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-gray-500 mb-1">{title}</p>
            <p className="text-2xl font-bold">{value}</p>
            <p className="text-sm text-gray-500">{subValue}</p>
          </div>
          <div className="p-3 bg-primary/10 rounded-lg"><Icon className="w-5 h-5 text-primary" /></div>
        </div>
      </CardContent>
    </Card>
  );
}

function CostRow({ label, value, isTotal }: { label: string; value: number; isTotal?: boolean }) {
  return (
    <div className={`flex justify-between ${isTotal ? "font-bold text-lg" : ""}`}>
      <span className="text-gray-600">{label}</span>
      <span>{formatCurrency(value)}</span>
    </div>
  );
}
