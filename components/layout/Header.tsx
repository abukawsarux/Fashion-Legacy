"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";
import { useAuth } from "../../context/AuthContext";
import { 
  Search, 
  ShoppingCart, 
  Menu, 
  X, 
  ChevronDown, 
  Plus, 
  Minus, 
  Trash2, 
  Check, 
  ArrowRight,
  Flame
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { getProductImageUrl, convertPrice } from "../../data/products";

// SVG Flag Components
function BDFlag({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg className={`${className} rounded-sm object-cover`} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="60" rx="1" fill="#006a4e" />
      <circle cx="45" cy="30" r="20" fill="#f42a41" />
    </svg>
  );
}

function USFlag({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg className={`${className} rounded-sm object-cover`} viewBox="0 0 74 39" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="74" height="39" rx="1" fill="#3c3b6e" />
      <g fill="#b22234">
        <rect width="74" height="3" y="0" />
        <rect width="74" height="3" y="6" />
        <rect width="74" height="3" y="12" />
        <rect width="74" height="3" y="18" />
        <rect width="74" height="3" y="24" />
        <rect width="74" height="3" y="30" />
        <rect width="74" height="3" y="36" />
      </g>
      <g fill="#ffffff">
        <rect width="74" height="3" y="3" />
        <rect width="74" height="3" y="9" />
        <rect width="74" height="3" y="15" />
        <rect width="74" height="3" y="21" />
        <rect width="74" height="3" y="27" />
        <rect width="74" height="3" y="33" />
      </g>
      <rect width="29.6" height="21" fill="#3c3b6e" />
    </svg>
  );
}

export default function Header() {
  const { 
    language, 
    setLanguage, 
    currency, 
    t,
    cartItems,
    removeFromCart,
    updateQuantity,
    isCartOpen,
    setIsCartOpen,
  } = useLanguage();

  const { isAuthenticated } = useAuth();
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("cat_women");
  const [searchQuery, setSearchQuery] = useState("");

  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const totalCartQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartSubtotal = cartItems.reduce((acc, item) => acc + (item.priceUSD * item.quantity), 0);

  const categoryTabs = [
    { id: "cat_hot", labelEn: "Hot Sale", labelBn: "হট সেল", isHot: true },
    { id: "cat_women", labelEn: "Women", labelBn: "মহিলাদের" },
    { id: "cat_shoes", labelEn: "Shoes", labelBn: "জুতো" },
    { id: "cat_kids", labelEn: "Kids&Toys", labelBn: "কিডস ও খেলনা" },
    { id: "cat_watches", labelEn: "Watches&Accessories", labelBn: "ঘড়ি ও এক্সেসরিজ" },
    { id: "cat_home", labelEn: "Home", labelBn: "হোম" },
    { id: "cat_bags", labelEn: "Bags", labelBn: "ব্যাগ" },
    { id: "cat_electronics", labelEn: "Electronics", labelBn: "ইলেকট্রনিক্স" },
    { id: "cat_men", labelEn: "Men", labelBn: "পুরুষদের" },
    { id: "cat_stationery", labelEn: "Stationery", labelBn: "স্টেশনারি" },
    { id: "cat_automotive", labelEn: "Automotive", labelBn: "অটোমোটিভ" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-none">
      
      {/* 1. TOP HEADER BAR WITH ORIGINAL LOGO */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 py-3 flex items-center justify-between">
        
        {/* Left: Original Fashion Legacy Logo Image */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-1 text-gray-800 hover:text-black"
            aria-label="Toggle Menu"
          >
            <Menu size={24} />
          </button>

          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-32 md:w-48 h-auto flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Fashion Legacy Logo"
                width={220}
                height={65}
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-bold text-gray-800 tracking-wider">
          <Link href="/" className="hover:text-[#D4A017] transition-colors">
            {language === "en" ? "HOME" : "হোম"}
          </Link>
          <Link 
            href={isAuthenticated ? "/orders" : "/auth?redirect=/orders"}
            className="hover:text-[#D4A017] transition-colors"
          >
            {language === "en" ? "MY ORDERS" : "আমার অর্ডার"}
          </Link>
        </nav>

        {/* Right: Language, Currency, Search, Cart */}
        <div className="flex items-center gap-4 text-xs font-semibold text-gray-700">
          
          {/* Language Selector Dropdown */}
          <div className="relative hidden sm:block" ref={langRef}>
            <button 
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="flex items-center gap-1 hover:text-black cursor-pointer"
            >
              <span>{language === "en" ? "English" : "বাংলা"}</span>
              <ChevronDown size={12} className="text-gray-500" />
            </button>

            {isLangDropdownOpen && (
              <div className="absolute right-0 mt-2 w-28 bg-white border border-gray-200 rounded-lg shadow-xl py-1 z-50 text-xs font-bold">
                <button 
                  onClick={() => { setLanguage("en"); setIsLangDropdownOpen(false); }}
                  className="w-full text-left px-3 py-1.5 hover:bg-gray-50 flex items-center justify-between"
                >
                  <span>English</span>
                  {language === "en" && <Check size={12} className="text-[#D4A017]" />}
                </button>
                <button 
                  onClick={() => { setLanguage("bn"); setIsLangDropdownOpen(false); }}
                  className="w-full text-left px-3 py-1.5 hover:bg-gray-50 flex items-center justify-between"
                >
                  <span>বাংলা</span>
                  {language === "bn" && <Check size={12} className="text-[#D4A017]" />}
                </button>
              </div>
            )}
          </div>

          {/* Country & Currency */}
          <div className="relative flex items-center gap-1 cursor-pointer">
            <BDFlag />
            <span>BDT</span>
            <ChevronDown size={12} className="text-gray-500" />
          </div>

          {/* Search Icon */}
          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-1 text-gray-800 hover:text-[#D4A017] transition-colors cursor-pointer"
            aria-label="Search"
          >
            <Search size={18} />
          </button>

          {/* Cart Icon */}
          <button 
            onClick={() => setIsCartOpen(true)}
            className="p-1 text-gray-800 hover:text-[#D4A017] transition-colors relative cursor-pointer"
            aria-label="Shopping Cart"
          >
            <ShoppingCart size={18} />
            {totalCartQuantity > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-[#D4A017] text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                {totalCartQuantity}
              </span>
            )}
          </button>

        </div>

      </div>

      {/* 2. HORIZONTAL CATEGORY TABS MENU */}
      <div className="border-t border-gray-100 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12">
          <nav className="flex items-center justify-start md:justify-center gap-6 md:gap-8 overflow-x-auto scrollbar-none py-2.5 text-xs font-bold text-gray-700">
            {categoryTabs.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <Link
                  key={tab.id}
                  href={`/?category=${tab.id}`}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`flex items-center gap-1 whitespace-nowrap transition-colors relative pb-1 ${
                    isActive ? "text-gray-900 font-extrabold" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {tab.isHot && <Flame size={14} className="fill-[#FF3B30] text-[#FF3B30]" />}
                  <span>{language === "en" ? tab.labelEn : tab.labelBn}</span>
                  {isActive && (
                    <motion.div 
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-900 rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Expandable Search Input Bar */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-gray-100 bg-gray-50 py-3 px-4 md:px-12"
          >
            <div className="max-w-xl mx-auto flex items-center bg-white border border-gray-300 rounded-xl px-3 py-2 shadow-sm">
              <Search size={16} className="text-gray-400 mr-2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={language === "en" ? "Search outfits, shoes, accessories..." : "ফ্যাশন পণ্য খুঁজুন..."}
                className="w-full text-xs text-gray-800 outline-none bg-transparent"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="text-gray-400 hover:text-gray-600 p-1">
                  <X size={14} />
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SHOPPING CART DRAWER */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black z-50 pointer-events-auto"
            />
            
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl z-50 flex flex-col pointer-events-auto"
            >
              <div className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white">
                <div className="flex items-center gap-2">
                  <ShoppingCart size={20} className="text-[#D4A017]" />
                  <h3 className="font-extrabold text-base">{t("cartTitle")}</h3>
                  <span className="text-xs font-bold bg-[#D4A017] text-white px-2 py-0.5 rounded-full">
                    {totalCartQuantity} {t("items")}
                  </span>
                </div>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="p-1 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cartItems.length > 0 ? (
                  cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4 p-3 rounded-xl border border-gray-100 shadow-sm relative group bg-white">
                      <Image 
                        src={getProductImageUrl(item.image)} 
                        alt={language === "en" ? item.nameEn : item.nameBn} 
                        width={70}
                        height={70}
                        className="w-18 h-18 object-cover rounded-lg border border-gray-100 flex-shrink-0"
                      />
                      
                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                          <h4 className="text-xs font-bold text-gray-900 truncate">
                            {language === "en" ? item.nameEn : item.nameBn}
                          </h4>
                          <p className="text-[10px] text-gray-400 mt-0.5">
                            Size: {item.size} • Color: {language === "en" ? item.colorEn : item.colorBn}
                          </p>
                        </div>
                        
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-sm font-extrabold text-gray-900">
                            {convertPrice(item.priceUSD, currency)} BDT
                          </span>

                          <div className="flex items-center border border-gray-200 rounded-md bg-gray-50">
                            <button 
                              onClick={() => updateQuantity(item.id, -1)}
                              className="p-1 hover:bg-gray-200 text-gray-600"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="px-2 text-xs font-bold text-gray-800 min-w-[18px] text-center">
                              {item.quantity}
                            </span>
                            <button 
                              onClick={() => updateQuantity(item.id, 1)}
                              className="p-1 hover:bg-gray-200 text-gray-600"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                        </div>
                      </div>

                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="p-1 text-gray-300 hover:text-red-500 transition-colors self-start"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                    <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center text-[#D4A017]">
                      <ShoppingCart size={28} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{t("emptyCart")}</h4>
                      <p className="text-xs text-gray-400 mt-1 max-w-[200px]">
                        {language === "en" ? "Explore collection & add to cart!" : "পণ্য ব্রাউজ করুন ও কার্টে যোগ করুন!"}
                      </p>
                    </div>
                    <button 
                      onClick={() => setIsCartOpen(false)}
                      className="bg-[#D4A017] text-white text-xs font-extrabold px-6 py-2.5 rounded-full shadow-md transition-colors"
                    >
                      {t("startShopping")}
                    </button>
                  </div>
                )}
              </div>

              {cartItems.length > 0 && (
                <div className="p-6 border-t border-gray-100 bg-gray-50 space-y-3">
                  <div className="flex justify-between text-sm font-bold text-gray-900">
                    <span>Total Subtotal:</span>
                    <span className="text-base font-extrabold text-[#D4A017]">
                      {convertPrice(cartSubtotal, currency)} BDT
                    </span>
                  </div>

                  <Link 
                    href="/checkout" 
                    onClick={() => setIsCartOpen(false)}
                    className="w-full bg-[#D4A017] hover:bg-[#B8860B] text-white py-3 rounded-full font-extrabold flex items-center justify-center gap-2 shadow-lg transition-all"
                  >
                    <span>{t("checkout")}</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black z-50 pointer-events-auto"
            />
            
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 bottom-0 w-full max-w-[280px] bg-white shadow-2xl z-50 flex flex-col pointer-events-auto"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-gray-900 text-white">
                <Image
                  src="/images/logo.png"
                  alt="Fashion Legacy"
                  width={150}
                  height={45}
                  className="object-contain h-7 w-auto"
                />
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1 hover:bg-white/20 rounded-full"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-5 space-y-4 font-bold text-sm">
                {categoryTabs.map(tab => (
                  <Link
                    key={tab.id}
                    href={`/?category=${tab.id}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2 border-b border-gray-50 text-gray-800 hover:text-[#D4A017]"
                  >
                    {language === "en" ? tab.labelEn : tab.labelBn}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </header>
  );
}
