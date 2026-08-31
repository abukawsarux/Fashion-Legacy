// components/layout/Footer.tsx
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  ShieldCheck, 
  Truck, 
  RotateCcw,
  Smartphone,
  QrCode
} from "lucide-react";
import Container from "../shared/Container";

export default function Footer() {
  const { language } = useLanguage();

  const t = {
    en: {
      aboutBrand: "Fashion Legacy is your one-stop e-commerce destination for high quality outfits, footwear, luxury watches, and accessories with 100% Cash on Delivery guarantee.",
      contactUs: "Contact Us",
      phoneLabel: "Customer Helpline",
      emailLabel: "Support Email",
      addressLabel: "Headquarter",
      addressVal: "House 12, Road 4, Sector 7, Uttara, Dhaka, Bangladesh",
      categories: "Categories",
      women: "Women's Fashion",
      men: "Men's Fashion",
      shoes: "Premium Footwear",
      watches: "Luxury Watches",
      kids: "Kids & Toys",
      customerService: "Customer Care",
      helpCenter: "Help Center",
      howToBuy: "How to Order",
      returnsRefunds: "Returns & Refunds",
      shippingInfo: "Shipping Info",
      faqs: "FAQs",
      guarantees: "Our Promises",
      secureCheckout: "100% Secure Checkout",
      cashOnDelivery: "Cash on Delivery",
      genuineGuarantee: "100% Genuine Guarantee",
      appTitle: "Download Mobile App",
      appDesc: "Scan QR code to get exclusive ৳200 discount coupon on your first order!",
      copyright: "© 2026 Fashion Legacy. All rights reserved.",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service"
    },
    bn: {
      aboutBrand: "ফ্যাশন লেগাসি হল মানসম্মত ড্রেস, প্রিমিয়াম জুতো, লাক্সারি ঘড়ি এবং ফ্যাশন আইটেম কেনার সেরা ই-কমার্স প্ল্যাটফর্ম। ক্যাশ অন ডেলিভারি ও দ্রুত হোম ডেলিভারি সুনিশ্চিত।",
      contactUs: "যোগাযোগ করুন",
      phoneLabel: "গ্রাহক সেবানম্বর",
      emailLabel: "সাপোর্ট ইমেইল",
      addressLabel: "হেড অফিস",
      addressVal: "বাসা ১২, রোড ৪, সেক্টর ৭, উত্তরা, ঢাকা, বাংলাদেশ",
      categories: "ক্যাটাগরি",
      women: "মহিলাদের ফ্যাশন",
      men: "পুরুষদের ফ্যাশন",
      shoes: "প্রিমিয়াম জুতো",
      watches: "লাক্সারি ঘড়ি",
      kids: "শিশু ও খেলনা",
      customerService: "কাস্টমার কেয়ার",
      helpCenter: "হেল্প সেন্টার",
      howToBuy: "অর্ডার করার নিয়ম",
      returnsRefunds: "রিটার্ন পলিসি",
      shippingInfo: "শিপিং চার্জ",
      faqs: "সাধারণ প্রশ্ন",
      guarantees: "আমাদের প্রতিশ্রুতি",
      secureCheckout: "১০০% নিরাপদ পেমেন্ট",
      cashOnDelivery: "ক্যাশ অন ডেলিভারি",
      genuineGuarantee: "১০০% আসল পণ্য",
      appTitle: "মোবাইল অ্যাপ ডাউনলোড করুন",
      appDesc: "প্রথম অর্ডারে ২০০ টাকা কুপন পেতে কিউআর কোড স্ক্যান করুন!",
      copyright: "© ২০২৬ ফ্যাশন লেগাসি। সর্বস্বত্ব সংরক্ষিত।",
      privacyPolicy: "গোপনীয়তা নীতি",
      termsOfService: "ব্যবহারের শর্তাবলী"
    }
  }[language];

  return (
    <footer className="bg-[#121212] text-gray-300 border-t border-gray-800 pt-12 pb-24 md:pb-8 transition-colors duration-300">
      <Container className="space-y-10">
        
        {/* UPPER FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pt-4">
          
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative w-40 md:w-52 h-auto flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Fashion Legacy Logo"
                  width={220}
                  height={65}
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-xs leading-relaxed text-gray-400">
              {t.aboutBrand}
            </p>
            
            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-center gap-2.5">
                <Phone size={14} className="text-[#D4A017]" />
                <a href="tel:01307102810" className="font-extrabold text-white hover:text-[#D4A017] transition-colors">
                  {language === "en" ? "+880 1307-102810" : "+৮৮০ ১৩০৭১-০২৮১০"}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail size={14} className="text-[#D4A017]" />
                <a href="mailto:support@fashionlegacy.com" className="font-bold text-gray-300 hover:text-white transition-colors">
                  support@fashionlegacy.com
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MapPin size={14} className="text-[#D4A017]" />
                <span className="text-gray-400">{t.addressVal}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-black uppercase text-white tracking-wider border-b border-gray-800 pb-2">
              {t.categories}
            </h3>
            <ul className="space-y-2 text-xs font-bold">
              <li>
                <Link href="/?category=cat_women" className="hover:text-[#D4A017] transition-colors">
                  {t.women}
                </Link>
              </li>
              <li>
                <Link href="/?category=cat_men" className="hover:text-[#D4A017] transition-colors">
                  {t.men}
                </Link>
              </li>
              <li>
                <Link href="/?category=cat_shoes" className="hover:text-[#D4A017] transition-colors">
                  {t.shoes}
                </Link>
              </li>
              <li>
                <Link href="/?category=cat_watches" className="hover:text-[#D4A017] transition-colors">
                  {t.watches}
                </Link>
              </li>
              <li>
                <Link href="/?category=cat_kids" className="hover:text-[#D4A017] transition-colors">
                  {t.kids}
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-black uppercase text-white tracking-wider border-b border-gray-800 pb-2">
              {t.customerService}
            </h3>
            <ul className="space-y-2 text-xs font-bold">
              <li>
                <a href="#help" className="hover:text-[#D4A017] transition-colors">
                  {t.helpCenter}
                </a>
              </li>
              <li>
                <a href="#buy" className="hover:text-[#D4A017] transition-colors">
                  {t.howToBuy}
                </a>
              </li>
              <li>
                <a href="#returns" className="hover:text-[#D4A017] transition-colors">
                  {t.returnsRefunds}
                </a>
              </li>
              <li>
                <Link href="/checkout" className="hover:text-[#D4A017] transition-colors">
                  {t.shippingInfo}
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-black uppercase text-white tracking-wider border-b border-gray-800 pb-2">
              {t.guarantees}
            </h3>
            
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-bold text-gray-300">
                <ShieldCheck size={16} className="text-green-500" />
                <span>{t.secureCheckout}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-gray-300">
                <Truck size={16} className="text-blue-400" />
                <span>{t.cashOnDelivery}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-gray-300">
                <RotateCcw size={16} className="text-[#D4A017]" />
                <span>{t.genuineGuarantee}</span>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-500">
          <div>{t.copyright}</div>

          <div className="flex items-center gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors bg-gray-800 p-2 rounded-full hover:bg-[#D4A017]">
              <Facebook size={14} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors bg-gray-800 p-2 rounded-full hover:bg-[#D4A017]">
              <Instagram size={14} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors bg-gray-800 p-2 rounded-full hover:bg-[#D4A017]">
              <Twitter size={14} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors bg-gray-800 p-2 rounded-full hover:bg-[#D4A017]">
              <Youtube size={14} />
            </a>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a href="#privacy" className="hover:text-gray-300">{t.privacyPolicy}</a>
            <a href="#terms" className="hover:text-gray-300">{t.termsOfService}</a>
          </div>
        </div>

      </Container>
    </footer>
  );
}
