"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";

interface User {
  id: string;
  username: string;
  role: "client" | "admin";
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("boekhouder_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    await new Promise(resolve => setTimeout(resolve, 500));

    if (username === "demo" && password === "demo123") {
      const user: User = {
        id: "1",
        username: "demo",
        role: "client",
        name: "Jan van der Berg",
        email: "jan@example.nl",
      };
      setUser(user);
      localStorage.setItem("boekhouder_user", JSON.stringify(user));
      setIsLoading(false);
      return true;
    }

    if (username === "admin" && password === "admin123") {
      const user: User = {
        id: "2",
        username: "admin",
        role: "admin",
        name: "Administrator",
        email: "admin@techsolutionsutrecht.nl",
      };
      setUser(user);
      localStorage.setItem("boekhouder_user", JSON.stringify(user));
      setIsLoading(false);
      return true;
    }

    setIsLoading(false);
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("boekhouder_user");
    router.push("/");
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
