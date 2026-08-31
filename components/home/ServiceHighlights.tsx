// components/home/ServiceHighlights.tsx
"use client";

import React from "react";
import { Truck, DollarSign, ShieldCheck, RefreshCw } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export default function ServiceHighlights() {
  const { language } = useLanguage();

  const services = [
    {
      icon: <Truck className="w-6 h-6 text-[#D4A017]" />,
      titleEn: "Free Shipping",
      titleBn: "ফ্রি শিপিং",
      descEn: "On orders over ৳1000",
      descBn: "১০০০ টাকার উপরে অর্ডারে"
    },
    {
      icon: <DollarSign className="w-6 h-6 text-[#D4A017]" />,
      titleEn: "Cash on Delivery",
      titleBn: "ক্যাশ অন ডেলিভারি",
      descEn: "Pay upon receiving package",
      descBn: "পণ্য হাতে পেয়ে পেমেন্ট করুন"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#D4A017]" />,
      titleEn: "100% Genuine",
      titleBn: "১০০% আসল পণ্য",
      descEn: "Guaranteed premium quality",
      descBn: "প্রিমিয়াম কোয়ালিটির নিশ্চয়তা"
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-[#D4A017]" />,
      titleEn: "15 Days Free Return",
      titleBn: "১৫ দিনের সহজ রিটার্ন",
      descEn: "No questions asked guarantee",
      descBn: "সহজ ও দ্রুত রিটার্ন পলিসি"
    }
  ];

  return (
    <section className="mb-8">
      <div className="bg-white rounded-2xl p-4 md:p-6 border border-amber-100/60 shadow-sm grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {services.map((service, index) => (
          <div key={index} className="flex items-center gap-3 p-2 rounded-xl hover:bg-amber-50/40 transition-colors">
            <div className="w-11 h-11 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0">
              {service.icon}
            </div>
            <div>
              <h4 className="text-xs md:text-sm font-bold text-gray-900 leading-tight">
                {language === "en" ? service.titleEn : service.titleBn}
              </h4>
              <p className="text-[10px] md:text-xs text-gray-500 mt-0.5 font-medium">
                {language === "en" ? service.descEn : service.descBn}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
