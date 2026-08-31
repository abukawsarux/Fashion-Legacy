// components/layout/MobileBottomNav.tsx
"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Home, Grid, Zap, ShoppingCart, User } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { useAuth } from "../../context/AuthContext";

export default function MobileBottomNav() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const { language, cartItems, setIsCartOpen } = useLanguage();
  const { isAuthenticated } = useAuth();

  const totalCartQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const isHomeActive = pathname === "/" && (!categoryParam || categoryParam === "all");
  const isFlashActive = pathname === "/" && categoryParam === "cat_flash";
  const isProfileActive = pathname === "/profile" || pathname === "/auth";

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-gray-200 px-2 py-1.5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="grid grid-cols-5 gap-1 items-center max-w-md mx-auto">
        
        {/* Tab 1: Home */}
        <Link
          href="/"
          className={`flex flex-col items-center justify-center py-1 transition-all ${
            isHomeActive ? "text-[#D4A017] font-black" : "text-gray-500 font-medium hover:text-gray-900"
          }`}
        >
          <Home size={20} className={isHomeActive ? "stroke-[2.5]" : "stroke-[1.8]"} />
          <span className="text-[10px] mt-1 tracking-tight">
            {language === "en" ? "Home" : "হোম"}
          </span>
        </Link>

        {/* Tab 2: Categories */}
        <a
          href="#categories"
          className="flex flex-col items-center justify-center py-1 text-gray-500 font-medium hover:text-gray-900 transition-all"
        >
          <Grid size={20} className="stroke-[1.8]" />
          <span className="text-[10px] mt-1 tracking-tight">
            {language === "en" ? "Category" : "ক্যাটাগরি"}
          </span>
        </a>

        {/* Tab 3: Flash Sale */}
        <Link
          href="/?category=cat_flash"
          className={`flex flex-col items-center justify-center py-1 transition-all relative ${
            isFlashActive ? "text-[#D4A017] font-black" : "text-gray-500 font-medium hover:text-gray-900"
          }`}
        >
          <div className="relative">
            <Zap size={20} className={isFlashActive ? "stroke-[2.5] fill-[#D4A017]" : "stroke-[1.8]"} />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#D4A017] rounded-full animate-ping" />
          </div>
          <span className="text-[10px] mt-1 tracking-tight">
            {language === "en" ? "Flash Sale" : "ফ্ল্যাশ সেল"}
          </span>
        </Link>

        {/* Tab 4: Cart */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="flex flex-col items-center justify-center py-1 text-gray-500 font-medium hover:text-gray-900 transition-all relative"
        >
          <div className="relative">
            <ShoppingCart size={20} className="stroke-[1.8]" />
            {totalCartQuantity > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-[#D4A017] text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center border border-white shadow-sm">
                {totalCartQuantity}
              </span>
            )}
          </div>
          <span className="text-[10px] mt-1 tracking-tight">
            {language === "en" ? "Cart" : "কার্ট"}
          </span>
        </button>

        {/* Tab 5: Profile */}
        <Link
          href={isAuthenticated ? "/profile" : "/auth"}
          className={`flex flex-col items-center justify-center py-1 transition-all ${
            isProfileActive ? "text-[#D4A017] font-black" : "text-gray-500 font-medium hover:text-gray-900"
          }`}
        >
          <User size={20} className={isProfileActive ? "stroke-[2.5]" : "stroke-[1.8]"} />
          <span className="text-[10px] mt-1 tracking-tight">
            {language === "en" ? "Profile" : "প্রোফাইল"}
          </span>
        </Link>

      </div>
    </div>
  );
}
