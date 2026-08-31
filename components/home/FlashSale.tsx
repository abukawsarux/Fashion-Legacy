// components/home/FlashSale.tsx
"use client";

import React, { useState, useEffect } from "react";
import { Zap, Flame } from "lucide-react";
import { Product, convertPrice, getCurrencySymbol, getProductImageUrl } from "../../data/products";
import { useLanguage } from "../../context/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface FlashSaleProps {
  products: Product[];
  activeCategory?: string;
  onOpenDetails?: (product: Product) => void;
}

export default function FlashSale({ products, activeCategory = "all", onOpenDetails }: FlashSaleProps) {
  const { language, currency } = useLanguage();
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 32, seconds: 15 });

  useEffect(() => {
    let targetTime = Date.now() + 4 * 3600 * 1000 + 32 * 60 * 1000;

    const rawUrl = 
      process.env.NEXT_PUBLIC_API_URL || 
      (typeof window !== "undefined"
        ? (window.location.hostname.includes("fashionlegacy.live") || window.location.hostname.includes("vercel.app")
            ? "https://fashion-legacy-backend.vercel.app" 
            : `http://${window.location.hostname}:5000`)
        : "http://localhost:5000");
    const apiBaseUrl = rawUrl.endsWith("/") ? rawUrl.slice(0, -1) : rawUrl;

    fetch(`${apiBaseUrl}/api/flash-sale`)
      .then(res => res.json())
      .then(data => {
        if (data.flashSaleEnd) {
          const parsed = Date.parse(data.flashSaleEnd);
          if (!isNaN(parsed) && parsed > Date.now()) {
            targetTime = parsed;
          }
        }
      })
      .catch(err => {
        console.error("Failed to load flash sale from API", err);
      });

    const updateTimer = () => {
      const diff = targetTime - Date.now();
      if (diff <= 0) {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      const seconds = Math.floor((diff / 1000) % 60);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const hours = Math.floor(diff / 1000 / 60 / 60);
      setTimeLeft({ hours, minutes, seconds });
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  const toBanglaDigits = (numStr: string) => {
    if (language === "en") return numStr;
    const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    return numStr.replace(/\d/g, (d) => banglaDigits[parseInt(d)]);
  };

  const flashSaleProducts = products.filter(prod => 
    Array.isArray(prod.category) ? prod.category.includes("cat_flash") : prod.category === "cat_flash"
  );

  const filteredProducts = activeCategory === "all"
    ? flashSaleProducts
    : flashSaleProducts.filter(prod => Array.isArray(prod.category) ? prod.category.includes(activeCategory) : prod.category === activeCategory);

  const flashSaleItems = filteredProducts.length > 0 
    ? filteredProducts.slice(0, 4) 
    : (activeCategory === "all" 
        ? products.slice(0, 4) 
        : products.filter(prod => Array.isArray(prod.category) ? prod.category.includes(activeCategory) : prod.category === activeCategory).slice(0, 4)
      );

  return (
    <section className="mb-10">
      {/* Header container with Brand Gold (#D4A017) */}
      <div className="bg-gradient-to-r from-[#D4A017] via-[#B8860B] to-amber-800 text-white rounded-3xl p-5 md:p-7 shadow-md mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-amber-300/40">
        
        <div className="flex items-center gap-3">
          <div className="bg-black/20 backdrop-blur-md p-2.5 rounded-2xl flex items-center justify-center animate-pulse text-[#D4A017]">
            <Zap size={24} className="fill-[#D4A017]" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight flex items-center gap-2">
              <span>{language === "en" ? "FLASH DEALS" : "ফ্ল্যাশ ডিল"}</span>
              <span className="text-[10px] font-black bg-black text-[#D4A017] px-2 py-0.5 rounded-full uppercase flex items-center gap-1 border border-[#D4A017]/40">
                <Flame size={10} className="fill-[#D4A017]" />
                {language === "en" ? "LIMIT TIME" : "সীমিত সময়"}
              </span>
            </h2>
            <p className="text-xs text-white/90 font-medium">
              {language === "en" ? "Top discounts up to 70% off • Stock running fast!" : "৭০% পর্যন্ত সর্বোচ্চ ছাড় • স্টক সীমিত!"}
            </p>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="flex items-center gap-2 self-start sm:self-auto bg-black/30 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20">
          <span className="text-xs text-[#D4A017] font-extrabold uppercase tracking-wider mr-1">
            {language === "en" ? "ENDS IN:" : "শেষ হবে:"}
          </span>
          <div className="flex items-center gap-1 font-mono text-sm font-black text-gray-900">
            <div className="bg-[#D4A017] text-gray-900 px-2.5 py-1 rounded-lg shadow-sm">
              {toBanglaDigits(formatNumber(timeLeft.hours))}
            </div>
            <span className="text-white font-black">:</span>
            <div className="bg-[#D4A017] text-gray-900 px-2.5 py-1 rounded-lg shadow-sm">
              {toBanglaDigits(formatNumber(timeLeft.minutes))}
            </div>
            <span className="text-white font-black">:</span>
            <div className="bg-[#D4A017] text-gray-900 px-2.5 py-1 rounded-lg shadow-sm">
              {toBanglaDigits(formatNumber(timeLeft.seconds))}
            </div>
          </div>
        </div>

      </div>

      {/* Flash Sale Grid Container */}
      <div className="bg-amber-50/40 rounded-3xl p-4 md:p-6 border border-amber-100 shadow-sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {flashSaleItems.map((item, index) => {
            const discountPrice = item.priceUSD * (1 - item.discountPercent / 100);
            const activeName = language === "en" ? item.nameEn : item.nameBn;
            const currencySymbol = getCurrencySymbol(currency);
            const claimPercent = [84, 68, 92, 53][index];

            return (
              <Link key={item.id} href={`/product/${item.id}`} className="block h-full">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all p-3 cursor-pointer flex flex-col justify-between h-full group"
                >
                  <div className="relative aspect-square bg-gray-50 rounded-xl overflow-hidden mb-3">
                    <Image
                      src={getProductImageUrl(item.images[0])}
                      alt={activeName}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    <span className="absolute top-2 left-2 bg-[#D4A017] text-white text-[10px] md:text-xs font-black px-2 py-0.5 rounded shadow-md">
                      -{item.discountPercent}%
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xs font-bold text-gray-800 line-clamp-1 group-hover:text-[#D4A017] transition-colors">
                      {activeName}
                    </h3>

                    <div className="flex items-baseline gap-1.5">
                      <span className="text-base font-extrabold text-[#D4A017]">
                        {currencySymbol}{convertPrice(discountPrice, currency)}
                      </span>
                      <span className="text-xs text-gray-400 line-through">
                        {currencySymbol}{convertPrice(item.priceUSD, currency)}
                      </span>
                    </div>

                    <div className="space-y-1 pt-1">
                      <div className="flex justify-between text-[10px] text-gray-500 font-bold">
                        <span>
                          {language === "en" 
                            ? `${claimPercent}% claimed` 
                            : `${toBanglaDigits(claimPercent.toString())}% বিক্রি হয়েছে`}
                        </span>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-[#D4A017] to-amber-600 rounded-full transition-all"
                          style={{ width: `${claimPercent}%` }}
                        />
                      </div>
                    </div>
                  </div>

                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
