// components/home/StatementBanner.tsx
"use client";

import React, { useState } from "react";
import { X, ShieldAlert } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export default function StatementBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const { language } = useLanguage();

  if (!isVisible) return null;

  return (
    <div className="my-6 bg-[#fff7ed] border border-amber-200/70 rounded-2xl p-4 md:p-5 relative flex items-center justify-between gap-4 shadow-sm">
      <div className="flex items-center gap-3.5">
        <div className="w-9 h-9 bg-[#D4A017] text-white rounded-xl flex items-center justify-center font-black text-base flex-shrink-0 shadow-sm">
          F
        </div>
        <div>
          <h4 className="font-extrabold text-xs md:text-sm text-amber-950">
            {language === "en" ? "Statement" : "সতর্কবার্তা"}
          </h4>
          <p className="text-[11px] md:text-xs text-amber-900/80 font-medium mt-0.5 max-w-4xl leading-relaxed">
            {language === "en"
              ? "Recently, some criminals have been found impersonating Fashion Legacy to set up websites for illegal activities. We urge all users to be cautious and avoid falling victim to scams."
              : "সাম্প্রতিক সময়ে ফ্যাশন লেগাসির নাম ব্যবহার করে কিছু ভুয়া সাইট তৈরির চেষ্টা দেখা গেছে। অনুগ্রহ করে সতর্ক থাকুন এবং শুধুমাত্র আমাদের অফিশিয়াল প্ল্যাটফর্মে কেনাকাটা করুন।"}
          </p>
        </div>
      </div>

      <button
        onClick={() => setIsVisible(false)}
        className="p-1.5 text-amber-700 hover:text-amber-950 hover:bg-amber-100 rounded-full transition-colors flex-shrink-0"
        aria-label="Close Statement"
      >
        <X size={16} />
      </button>
    </div>
  );
}
