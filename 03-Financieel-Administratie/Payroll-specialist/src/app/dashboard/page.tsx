"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/lib/auth-context";
import { PayslipViewer } from "@/components/tools/payslip-viewer";
import { LeaveCalendar } from "@/components/tools/leave-calendar";
import { formatCurrency } from "@/lib/utils";
import {
  User,
  FileText,
  Calendar,
  LogOut,
  TrendingUp,
  Download,
  Bell,
} from "lucide-react";

const ytdData = {
  grossSalary: 24500,
  netSalary: 19600,
  taxPaid: 4200,
  pensionContributed: 1225,
  holidayAllowance: 1960,
};

const recentPayslips = [
  { month: "Januari 2024", gross: 3500, net: 2800, status: "betaald" },
  { month: "Februari 2024", gross: 3500, net: 2800, status: "betaald" },
  { month: "Maart 2024", gross: 3500, net: 2800, status: "verwerkt" },
];

export default function DashboardPage() {
  const { user, isLoading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login");
    }
  }, [user, isLoading, router]);

  if (isLoading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-24 lg:pb-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Welkom terug, {user.name}
            </h1>
            <p className="text-slate-500">
              Hier is een overzicht van uw salarisgegevens
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="icon">
              <Bell className="w-4 h-4" />
            </Button>
            <Button variant="outline" onClick={handleLogout}>
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
          <StatCard title="Bruto loon (YTD)" value={formatCurrency(ytdData.grossSalary)} icon={TrendingUp} />
          <StatCard title="Netto ontvangen" value={formatCurrency(ytdData.netSalary)} icon={TrendingUp} trend="+5.2%" />
          <StatCard title="Vakantiegeld" value={formatCurrency(ytdData.holidayAllowance)} icon={TrendingUp} />
          <StatCard title="Pensioen opgebouwd" value={formatCurrency(ytdData.pensionContributed)} icon={TrendingUp} />
        </motion.div>

        <Tabs defaultValue="payslip" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-grid">
            <TabsTrigger value="payslip">
              <FileText className="w-4 h-4 mr-2 hidden sm:inline" />
              Loonspecificatie
            </TabsTrigger>
            <TabsTrigger value="history">
              <Calendar className="w-4 h-4 mr-2 hidden sm:inline" />
              Historie
            </TabsTrigger>
            <TabsTrigger value="leave">
              <Calendar className="w-4 h-4 mr-2 hidden sm:inline" />
              Verlof
            </TabsTrigger>
            <TabsTrigger value="profile">
              <User className="w-4 h-4 mr-2 hidden sm:inline" />
              Profiel
            </TabsTrigger>
          </TabsList>

          <TabsContent value="payslip" className="space-y-6">
            <div className="max-w-3xl mx-auto">
              <PayslipViewer />
            </div>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Loonspecificaties overzicht</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentPayslips.map((payslip) => (
                    <div
                      key={payslip.month}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <div>
                        <p className="font-semibold">{payslip.month}</p>
                        <p className="text-sm text-gray-500">
                          Bruto: {formatCurrency(payslip.gross)}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-primary">
                          {formatCurrency(payslip.net)}
                        </p>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            payslip.status === "betaald"
                              ? "bg-green-100 text-green-700"
                              : "bg-amber-100 text-amber-700"
                          }`}
                        >
                          {payslip.status}
                        </span>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="leave" className="space-y-6">
            <LeaveCalendar />
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Persoonlijke gegevens</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm text-gray-500">Naam</label>
                    <p className="font-semibold">{user.name}</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-500">E-mail</label>
                    <p className="font-semibold">{user.email}</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-500">Werkgever</label>
                    <p className="font-semibold">{user.company}</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-500">Personeelsnummer</label>
                    <p className="font-semibold">12345</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
  icon: Icon,
  trend,
}: {
  title: string;
  value: string;
  icon: React.ElementType;
  trend?: string;
}) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-gray-500 mb-1">{title}</p>
            <p className="text-2xl font-bold">{value}</p>
            {trend && <p className="text-sm text-green-600 mt-1">{trend}</p>}
          </div>
          <div className="p-3 bg-primary/10 rounded-lg">
            <Icon className="w-5 h-5 text-primary" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
