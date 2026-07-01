// context/AuthContext.tsx
"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { CartItem } from "./LanguageContext";

export interface User {
  name: string;
  email: string;
  phone: string;
  address: string;
  avatar: string; // url or keyword
}

export interface OrderHistoryItem {
  id: string;
  date: string;
  items: CartItem[];
  itemsCount: number;
  total: number;
  paymentMethod: string;
  status: "Processing" | "Shipped" | "Delivered";
}

interface AuthContextProps {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, phone: string) => Promise<boolean>;
  logout: () => void;
  updateProfile: (updatedData: Partial<User>) => void;
  orders: OrderHistoryItem[];
  addSimulatedOrder: (items: CartItem[], total: number, paymentMethod: string) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [orders, setOrders] = useState<OrderHistoryItem[]>([]);
  const [mounted, setMounted] = useState(false);

  // Sync state with localStorage on load
  useEffect(() => {
    const storedUser = localStorage.getItem("fl_user");
    const storedOrders = localStorage.getItem("fl_orders");

    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Failed to parse user", e);
      }
    }
    
    if (storedOrders) {
      try {
        setOrders(JSON.parse(storedOrders));
      } catch (e) {
        console.error("Failed to parse orders", e);
      }
    } else {
      // Mock initial order history with products for logged-in profile realism
      const initialOrders: OrderHistoryItem[] = [
        {
          id: "FL-874312-BD",
          date: "2026-06-15",
          items: [
            {
              id: "prod-hot-1",
              nameEn: "Chic Woolen Knitted Cardigan",
              nameBn: "চটকদার উলের বোনা কার্ডিগান",
              priceUSD: 69.99,
              image: "/images/women_dress_var_1.png",
              quantity: 1,
              size: "M",
              colorEn: "Creamy Beige",
              colorBn: "ক্রিম বেইজ"
            },
            {
              id: "prod-hot-2",
              nameEn: "Casual Linen Shirt",
              nameBn: "ক্যাজুয়াল লিনেন শার্ট",
              priceUSD: 39.99,
              image: "/images/men_jacket_var_1.png",
              quantity: 1,
              size: "L",
              colorEn: "Ocean Blue",
              colorBn: "সাগর নীল"
            }
          ],
          itemsCount: 2,
          total: 109.98,
          paymentMethod: "bKash",
          status: "Delivered"
        },
        {
          id: "FL-492102-EN",
          date: "2026-06-28",
          items: [
            {
              id: "prod-hot-3",
              nameEn: "Retro Leather Street Sneaker",
              nameBn: "রেট্রো লেদার স্ট্রিট স্নিকার",
              priceUSD: 89.99,
              image: "/images/shoes_sneakers_var_1.png",
              quantity: 1,
              size: "42",
              colorEn: "Retro Red",
              colorBn: "রেট্রো লাল"
            }
          ],
          itemsCount: 1,
          total: 89.99,
          paymentMethod: "Cash on Delivery",
          status: "Shipped"
        }
      ];
      setOrders(initialOrders);
      localStorage.setItem("fl_orders", JSON.stringify(initialOrders));
    }
    setMounted(true);
  }, []);

  // Save to localStorage when state changes
  useEffect(() => {
    if (mounted) {
      if (user) {
        localStorage.setItem("fl_user", JSON.stringify(user));
      } else {
        localStorage.removeItem("fl_user");
      }
    }
  }, [user, mounted]);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("fl_orders", JSON.stringify(orders));
    }
  }, [orders, mounted]);

  // Login simulated
  const login = async (email: string, password: string): Promise<boolean> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Any password works, sets mock user data
        const mockUser: User = {
          name: "Raihan Chowdhury",
          email: email.trim(),
          phone: "01712345678",
          address: "House 14, Road 5, Uttara Sector 4, Dhaka",
          avatar: "avatar_men"
        };
        setUser(mockUser);
        resolve(true);
      }, 800);
    });
  };

  // Signup simulated
  const signup = async (name: string, email: string, phone: string): Promise<boolean> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockUser: User = {
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          address: "",
          avatar: "avatar_women"
        };
        setUser(mockUser);
        resolve(true);
      }, 800);
    });
  };

  // Logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("fl_user");
  };

  // Update Profile
  const updateProfile = (updatedData: Partial<User>) => {
    setUser((prev) => {
      if (!prev) return null;
      return { ...prev, ...updatedData };
    });
  };

  // Add simulated checkout order to profile orders list
  const addSimulatedOrder = (items: CartItem[], total: number, paymentMethod: string) => {
    const newOrder: OrderHistoryItem = {
      id: `FL-${Math.floor(100000 + Math.random() * 900000)}-BD`,
      date: new Date().toISOString().split("T")[0],
      items,
      itemsCount: items.reduce((sum, it) => sum + it.quantity, 0),
      total,
      paymentMethod,
      status: "Processing"
    };
    setOrders((prev) => [newOrder, ...prev]);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        signup,
        logout,
        updateProfile,
        orders,
        addSimulatedOrder
      }}
    >
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
