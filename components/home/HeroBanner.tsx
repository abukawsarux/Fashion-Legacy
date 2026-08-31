// components/home/HeroBanner.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Sparkles, Zap, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

export default function HeroBanner() {
  const { language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      tagEn: "MEGA SALE - UP TO 70% OFF",
      tagBn: "মেগা সেল - ৭০% পর্যন্ত ছাড়",
      titleEn: "Fashion Legacy Exclusive Collection",
      titleBn: "ফ্যাশন লেগাসি এক্সক্লুসিভ কালেকশন",
      subtitleEn: "Discover trending outfits, footwear & luxury accessories for this season",
      subtitleBn: "এই সিজনের ট্রেন্ডি পোশাক, ফুটওয়্যার এবং ফ্যাশন আইটেম",
      bgGradient: "from-[#D4A017] via-[#B8860B] to-[#1A1A1A]",
      btnTextEn: "Shop Sale Now",
      btnTextBn: "এখনই শপ করুন",
      image: "/images/opengraph-image.png",
      href: "/?category=cat_hot"
    },
    {
      id: 2,
      tagEn: "NEW ARRIVALS 2026",
      tagBn: "নতুন কালেকশন ২০২৬",
      titleEn: "Luxury Outfits & Premium Dresses",
      titleBn: "লাক্সারি পোশাক ও প্রিমিয়াম ড্রেস",
      subtitleEn: "Designed for elegance, handcrafted with perfection",
      subtitleBn: "মার্জিত ডিজাইন ও সেরা মানের ফেব্রিক্স",
      bgGradient: "from-gray-900 via-[#D4A017] to-amber-700",
      btnTextEn: "Explore Collection",
      btnTextBn: "কালেকশন দেখুন",
      image: "/images/categories/all.png",
      href: "/?category=cat_women"
    },
    {
      id: 3,
      tagEn: "LIMITED TIME FLASH DEALS",
      tagBn: "সীমিত সময়ের ফ্ল্যাশ ডিল",
      titleEn: "Men's Luxury Watches & Shoes",
      titleBn: "পুরুষদের লাক্সারি ঘড়ি ও জুতো",
      subtitleEn: "Upgrade your style with high quality footwear & watches",
      subtitleBn: "আপনার লুককে আরও ক্যাচি ও আকর্ষণীয় করুন",
      bgGradient: "from-[#B8860B] via-amber-900 to-[#121212]",
      btnTextEn: "View Deals",
      btnTextBn: "ডিলগুলো দেখুন",
      image: "/images/categories/all.png",
      href: "/?category=cat_men"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const activeSlide = slides[currentSlide];

  return (
    <section className="mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        
        {/* Main Banner Slider */}
        <div className="lg:col-span-8 xl:col-span-9 relative h-[260px] sm:h-[320px] md:h-[380px] rounded-3xl overflow-hidden shadow-lg group">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className={`absolute inset-0 bg-gradient-to-r ${activeSlide.bgGradient} p-6 sm:p-10 flex flex-col justify-between text-white overflow-hidden`}
            >
              <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />

              <div className="relative z-10">
                <span className="inline-flex items-center gap-1.5 bg-black/30 backdrop-blur-md text-[#D4A017] font-black text-[10px] sm:text-xs px-3 py-1 rounded-full uppercase tracking-wider border border-[#D4A017]/40">
                  <Zap size={12} className="text-[#D4A017] fill-[#D4A017]" />
                  {language === "en" ? activeSlide.tagEn : activeSlide.tagBn}
                </span>
              </div>

              <div className="relative z-10 max-w-xl space-y-2 sm:space-y-3 my-auto">
                <h2 className="text-xl sm:text-3xl md:text-4xl font-black leading-tight drop-shadow-md">
                  {language === "en" ? activeSlide.titleEn : activeSlide.titleBn}
                </h2>
                <p className="text-xs sm:text-sm text-white/90 font-medium line-clamp-2">
                  {language === "en" ? activeSlide.subtitleEn : activeSlide.subtitleBn}
                </p>
                
                <div className="pt-2">
                  <Link
                    href={activeSlide.href}
                    className="inline-flex items-center gap-2 bg-[#D4A017] hover:bg-[#B8860B] text-gray-900 font-extrabold text-xs sm:text-sm px-6 py-2.5 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>{language === "en" ? activeSlide.btnTextEn : activeSlide.btnTextBn}</span>
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </div>

              <div className="relative z-10 flex items-center gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentSlide === idx ? "w-8 bg-[#D4A017]" : "w-2 bg-white/40 hover:bg-white/70"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-sm flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-sm flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
            aria-label="Next Slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Side Promotional Offer Cards */}
        <div className="hidden lg:flex lg:col-span-4 xl:col-span-3 flex-col gap-4 h-[260px] sm:h-[320px] md:h-[380px]">
          
          <Link href="/?category=cat_hot" className="flex-1 bg-gradient-to-br from-amber-50 to-amber-100/60 rounded-3xl p-5 border border-amber-200/80 flex flex-col justify-between group hover:shadow-md transition-all relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#D4A017] bg-amber-200/60 px-2.5 py-1 rounded-full">
                {language === "en" ? "HOT DEALS" : "হট ডিল"}
              </span>
              <Sparkles size={16} className="text-[#D4A017]" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm text-gray-900 group-hover:text-[#D4A017] transition-colors line-clamp-1">
                {language === "en" ? "Flash Sale up to 70% Off" : "ফ্ল্যাশ সেল ৭০% পর্যন্ত ছাড়"}
              </h3>
              <p className="text-[11px] text-gray-500 font-medium mt-1">
                {language === "en" ? "Limited time e-commerce offers" : "সীমিত সময়ের বিশেষ অফার"}
              </p>
            </div>
            <div className="text-xs font-bold text-[#D4A017] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              <span>{language === "en" ? "Shop Now" : "শপ করুন"}</span>
              <ChevronRight size={14} />
            </div>
          </Link>

          <div className="flex-1 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-3xl p-5 border border-gray-700 flex flex-col justify-between relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#D4A017] bg-[#D4A017]/20 px-2.5 py-1 rounded-full border border-[#D4A017]/40">
                {language === "en" ? "GUARANTEE" : "নিশ্চয়তা"}
              </span>
              <ShieldCheck size={16} className="text-[#D4A017]" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm text-white">
                {language === "en" ? "100% Cash on Delivery" : "১০০% ক্যাশ অন ডেলিভারি"}
              </h3>
              <p className="text-[11px] text-gray-400 font-medium mt-1">
                {language === "en" ? "Pay only after inspecting package" : "পণ্য হাতে পেয়েই মূল্য শোধ করুন"}
              </p>
            </div>
            <span className="text-xs font-bold text-[#D4A017]">
              {language === "en" ? "15-Days Easy Return" : "১৫ দিনের সহজ রিটার্ন"}
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
