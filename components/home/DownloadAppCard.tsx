// components/home/DownloadAppCard.tsx
"use client";

import React from "react";
import Image from "next/image";
import { Smartphone, ShieldCheck } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export default function DownloadAppCard() {
  const { language } = useLanguage();

  return (
    <div className="bg-[#f5f5f5] rounded-2xl p-5 md:p-6 text-center flex flex-col justify-between items-center h-full border border-gray-200/60 shadow-sm relative group overflow-hidden">
      {/* Background Graphic Preview */}
      <div className="w-full flex-1 flex flex-col items-center justify-center space-y-4 my-2">
        
        {/* Mock Phone Frame with Refund Guarantee */}
        <div className="w-36 md:w-44 bg-white rounded-2xl shadow-md border border-gray-200 p-3 space-y-3">
          <div className="w-full h-24 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl flex flex-col items-center justify-center p-2 text-center border border-amber-100">
            <ShieldCheck size={28} className="text-[#D4A017] mb-1" />
            <span className="text-[10px] font-black text-gray-900 leading-tight uppercase">
              100% Refund Guarantee
            </span>
          </div>

          <div className="space-y-1 text-[9px] font-extrabold text-gray-600">
            <div className="bg-gray-50 py-1 rounded border border-gray-100">Lost / Damaged</div>
            <div className="bg-gray-50 py-1 rounded border border-gray-100">Bad Quality / Wrong Size</div>
          </div>
        </div>

        <h3 className="font-extrabold text-base md:text-lg text-gray-900 leading-tight">
          100% Refund Guarantee
        </h3>
        <p className="text-xs text-gray-500 font-medium max-w-[180px]">
          {language === "en" ? "Lost / Damaged / Bad Quality / Wrong Size" : "হারিয়ে যাওয়া / ড্যামেজ / খারাপ কোয়ালিটি / সাইজ অমিল"}
        </p>

      </div>

      {/* Dark Action Button */}
      <button className="w-full bg-[#1e1e1e] hover:bg-black text-white font-extrabold text-xs py-3 rounded-xl transition-colors tracking-wider uppercase shadow-sm cursor-pointer mt-3">
        {language === "en" ? "DOWNLOAD APP" : "অ্যাপ ডাউনলোড করুন"}
      </button>
    </div>
  );
}
