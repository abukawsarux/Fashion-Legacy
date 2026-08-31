"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { PRODUCTS as STATIC_PRODUCTS, Product } from "../data/products";

export type Language = "en" | "bn";
export type Currency = "USD" | "BDT" | "SAR";

export interface CartItem {
  id: string;
  nameEn: string;
  nameBn: string;
  priceUSD: number;
  image: string;
  quantity: number;
  size: string;
  colorEn: string;
  colorBn: string;
}

export interface ShippingConfig {
  insideDhakaFee: number;
  outsideDhakaFee: number;
  freeShippingThreshold: number;
  estimatedDaysInside: string;
  estimatedDaysOutside: string;
}

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  currency: Currency;
  setCurrency: (curr: Currency) => void;
  t: (key: string) => string;
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  clearCart: () => void;
  products: Product[];
  isLoadingProducts: boolean;
  categories: Category[];
  isLoadingCategories: boolean;
  shippingConfig: ShippingConfig;
}

export interface Category {
  id: string;
  nameEn: string;
  nameBn: string;
  image: string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

// Core translation dictionary
export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    home: "Home",
    orders: "My Orders",
    searchPlaceholder: "Search for items...",
    searchButton: "Search",
    popularSearches: "Popular Searches",
    cartTitle: "Shopping Cart",
    checkout: "Checkout",
    emptyCart: "Your cart is empty",
    startShopping: "Start Shopping",
    subtotal: "Subtotal",
    items: "items",
    itemAdded: "Item added to cart",
    cartDescription: "Check your items and proceed to payment.",
    close: "Close",
    currency: "Currency",
    language: "Language",
    help: "Help & Support",
    contactUs: "Contact Us",
    faqs: "FAQs",
    welcome: "Welcome to Fashion Legacy",

    // Categories
    cat_hot: "Hot Sale",
    cat_women: "Women",
    cat_men: "Men",
    cat_shoes: "Shoes",
    cat_kids: "Kids & Toys",
    cat_watches: "Watches & Acc.",
    cat_home: "Home & Living",
    cat_electronics: "Electronics",
    cat_stationery: "Stationery",
    cat_automotive: "Automotive",
  },
  bn: {
    // Navigation
    home: "হোম",
    orders: "আমার অর্ডার",
    searchPlaceholder: "পণ্য অনুসন্ধান করুন...",
    searchButton: "খুঁজুন",
    popularSearches: "জনপ্রিয় অনুসন্ধান",
    cartTitle: "শপিং কার্ট",
    checkout: "চেকআউট করুন",
    emptyCart: "আপনার কার্ট খালি আছে",
    startShopping: "কেনাকাটা শুরু করুন",
    subtotal: "মোট মূল্য",
    items: "টি পণ্য",
    itemAdded: "পণ্যটি কার্টে যোগ করা হয়েছে",
    cartDescription: "আপনার পণ্যগুলো দেখুন এবং পেমেন্ট করুন।",
    close: "বন্ধ করুন",
    currency: "মুদ্রা",
    language: "ভাষা",
    help: "হেল্প এবং সাপোর্ট",
    contactUs: "যোগাযোগ করুন",
    faqs: "সাধারণ জিজ্ঞাসা",
    welcome: "ফ্যাশন লেগাসি-তে আপনাকে স্বাগতম",

    // Categories
    cat_hot: "হট সেল",
    cat_women: "মহিলাদের ফ্যাশন",
    cat_men: "পুরুষদের ফ্যাশন",
    cat_shoes: "জুতো",
    cat_kids: "শিশু এবং খেলনা",
    cat_watches: "ঘড়ি ও এক্সেসরিজ",
    cat_home: "হোম ও লিভিং",
    cat_electronics: "ইলেকট্রনিক্স",
    cat_stationery: "স্টেশনারি",
    cat_automotive: "অটোমোটিভ",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [currency, setCurrencyState] = useState<Currency>("BDT");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  const [products, setProducts] = useState<Product[]>(STATIC_PRODUCTS);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);
  const [categories, setCategories] = useState<Category[]>([
    { id: "cat_hot",         nameEn: "Hot Sale",                 nameBn: "হট সেল",                     image: "/images/categories/hot.png" },
    { id: "cat_women",       nameEn: "Women's Fashion",          nameBn: "মহিলাদের ফ্যাশন",            image: "/images/categories/women.png" },
    { id: "cat_shoes",       nameEn: "Shoes",                    nameBn: "জুতো",                       image: "/images/categories/shoes.png" },
    { id: "cat_kids",        nameEn: "Kids & Toys",              nameBn: "বাচ্চাদের খেলনা ও পোশাক",   image: "/images/categories/kids.png" },
    { id: "cat_watches",     nameEn: "Watches & Acc.",           nameBn: "ঘড়ি ও অ্যাক্সেসরিজ",       image: "/images/categories/watches.png" },
    { id: "cat_home",        nameEn: "Home & Living",            nameBn: "হোম ও লিভিং",               image: "/images/categories/home.png" },
    { id: "cat_bags",        nameEn: "Bags & Luggage",           nameBn: "ব্যাগ ও লাগেজের কালেকশন",    image: "/images/categories/bags.png" },
    { id: "cat_electronics", nameEn: "Electronics & Gadgets",    nameBn: "ইলেকট্রনিক্স ও গ্যাজেটস",    image: "/images/categories/electronics.png" },
    { id: "cat_men",         nameEn: "Men's Fashion",            nameBn: "পুরুষদের ফ্যাশন",            image: "/images/categories/men.png" },
    { id: "cat_stationery",  nameEn: "Stationery & Office",      nameBn: "স্টেশনারি ও অফিস",          image: "/images/categories/stationery.png" },
    { id: "cat_automotive",  nameEn: "Automotive & Accessories", nameBn: "অটোমোটিভ ও এক্সেসরিজ",        image: "/images/categories/automotive.png" }
  ]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);
  const [shippingConfig, setShippingConfig] = useState<ShippingConfig>({
    insideDhakaFee: 60,
    outsideDhakaFee: 120,
    freeShippingThreshold: 0,
    estimatedDaysInside: "1-2 Days",
    estimatedDaysOutside: "3-5 Days"
  });

  // Fetch products and categories from backend API with non-blocking fallback
  useEffect(() => {
    const rawApiUrl = 
      process.env.NEXT_PUBLIC_API_URL || 
      (typeof window !== "undefined"
        ? (window.location.hostname.includes("fashionlegacy.live") || window.location.hostname.includes("vercel.app")
            ? "https://fashion-legacy-backend.vercel.app" 
            : `http://${window.location.hostname}:5000`)
        : "http://localhost:5000");
    const apiBaseUrl = rawApiUrl.endsWith("/") ? rawApiUrl.slice(0, -1) : rawApiUrl;

    const loadData = () => {
      fetch(`${apiBaseUrl}/api/products`, { cache: "no-store" })
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data) && data.length > 0) {
            setProducts(data);
          }
          setIsLoadingProducts(false);
        })
        .catch((err) => {
          setIsLoadingProducts(false);
        });

      fetch(`${apiBaseUrl}/api/categories`, { cache: "no-store" })
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data) && data.length > 0) {
            setCategories(data);
          }
          setIsLoadingCategories(false);
        })
        .catch((err) => {
          setIsLoadingCategories(false);
        });

      fetch(`${apiBaseUrl}/api/settings/shipping`, { cache: "no-store" })
        .then((res) => res.json())
        .then((data) => {
          if (data && data.insideDhakaFee !== undefined) {
            setShippingConfig(data);
          }
        })
        .catch(() => {});
    };

    loadData();
    const interval = setInterval(loadData, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Sync with localStorage on client mount to avoid hydration mismatch
    const storedLang = localStorage.getItem("fl_language") as Language;
    const storedCurr = localStorage.getItem("fl_currency") as Currency;
    const storedCart = localStorage.getItem("fl_cart");

    if (storedLang === "en" || storedLang === "bn") {
      setLanguageState(storedLang);
    }
    if (storedCurr === "USD" || storedCurr === "BDT" || storedCurr === "SAR") {
      setCurrencyState(storedCurr);
    }
    if (storedCart) {
      try {
        setCartItems(JSON.parse(storedCart));
      } catch (e) {
        console.error("Failed to parse cart", e);
      }
    }
    setMounted(true);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("fl_cart", JSON.stringify(cartItems));
    }
  }, [cartItems, mounted]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("fl_language", lang);
    document.documentElement.lang = lang;
  };

  const setCurrency = (curr: Currency) => {
    setCurrencyState(curr);
    localStorage.setItem("fl_currency", curr);
  };

  // Add to cart action
  const addToCart = (newItem: Omit<CartItem, "quantity">) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === newItem.id && item.size === newItem.size);
      if (existing) {
        return prev.map((item) =>
          item.id === newItem.id && item.size === newItem.size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...newItem, quantity: 1 }];
    });
    // Automatically slide cart drawer open (Disabled)
    // setIsCartOpen(true);
  };

  // Remove from cart action
  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Update quantity action
  const updateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      })
    );
  };

  // Translation helper function
  const t = (key: string): string => {
    const dict = translations[language];
    return dict[key] || key;
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        currency,
        setCurrency,
        t,
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        isCartOpen,
        setIsCartOpen,
        clearCart,
        products,
        isLoadingProducts,
        categories,
        isLoadingCategories,
        shippingConfig,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

