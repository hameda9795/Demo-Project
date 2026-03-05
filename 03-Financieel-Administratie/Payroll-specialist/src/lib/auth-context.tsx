"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  id: string;
  email: string;
  name: string;
  role: "employee" | "admin";
  company?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem("salarispro_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    if (email === "demo" && password === "demo123") {
      const demoUser: User = {
        id: "1",
        email: "demo@salarispro.nl",
        name: "Jan de Vries",
        role: "employee",
        company: "Tech Solutions Utrecht",
      };
      setUser(demoUser);
      localStorage.setItem("salarispro_user", JSON.stringify(demoUser));
      return true;
    }
    
    if (email === "admin" && password === "admin123") {
      const adminUser: User = {
        id: "2",
        email: "admin@salarispro.nl",
        name: "Maria Jansen",
        role: "admin",
        company: "SalarisPro Nederland",
      };
      setUser(adminUser);
      localStorage.setItem("salarispro_user", JSON.stringify(adminUser));
      return true;
    }
    
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("salarispro_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
