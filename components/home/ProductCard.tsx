// components/home/ProductCard.tsx
"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Product, convertPrice, getCurrencySymbol, getProductImageUrl } from "../../data/products";
import { useLanguage } from "../../context/LanguageContext";
import { motion } from "framer-motion";

function getProductVideo(product: Product): string | null {
  if (product.video) return product.video;
  
  const nameLower = product.nameEn ? product.nameEn.toLowerCase() : "";
  if (
    product.id === "prod-women-8" ||
    product.id === "prod-hot-1" ||
    nameLower.includes("casual oversized knit cardigan") ||
    nameLower.includes("cardigan")
  ) {
    return "/videos/Casual%20Oversized%20Knit%20Cardigan.mp4";
  }

  return null;
}

export function getProductBadge(product: Product): { text: string; bgClass: string } | null {
  if (product.badge) {
    const b = product.badge.trim();
    if (b.toLowerCase().includes("top trending") || b.toLowerCase().includes("hot") || b.toLowerCase().includes("best seller")) {
      return { text: b.toUpperCase(), bgClass: "bg-gradient-to-r from-red-600 to-rose-500 text-white" };
    }
    if (b.toLowerCase().includes("just in") || b.toLowerCase().includes("new arrival") || b.toLowerCase().includes("fresh") || b.toLowerCase().includes("just launched")) {
      return { text: b.toUpperCase(), bgClass: "bg-gradient-to-r from-emerald-600 to-teal-500 text-white" };
    }
    return { text: b.toUpperCase(), bgClass: "bg-gradient-to-r from-amber-600 to-yellow-500 text-white" };
  }

  if (product.soldCount && product.soldCount >= 5) {
    return { text: "TOP TRENDING", bgClass: "bg-gradient-to-r from-red-600 to-rose-500 text-white" };
  }

  if (product.createdAt) {
    const createdTime = new Date(product.createdAt).getTime();
    const now = Date.now();
    const diffDays = (now - createdTime) / (1000 * 3600 * 24);
    if (diffDays <= 7) {
      return { text: "NEW ARRIVAL", bgClass: "bg-gradient-to-r from-emerald-600 to-teal-500 text-white" };
    }
  }

  return null;
}

interface ProductCardProps {
  product: Product;
  onOpenDetails?: (product: Product) => void;
}

export default function ProductCard({ product, onOpenDetails }: ProductCardProps) {
  const { language, currency, addToCart } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoUrl = getProductVideo(product);
  const badgeInfo = getProductBadge(product);

  const discountPercent = Math.round(Number(product.discountPercent) || 0);
  const originalPrice = product.priceUSD;
  const discountedPrice = discountPercent > 0 ? originalPrice * (1 - discountPercent / 100) : originalPrice;
  const discountTaka = discountPercent > 0 ? Math.round(originalPrice * (discountPercent / 100)) : 0;

  const activeName = language === "en" ? product.nameEn : product.nameBn;
  const currencySymbol = getCurrencySymbol(currency);
  const displayActivePrice = convertPrice(discountedPrice, currency);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoUrl && videoRef.current) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.debug("Autoplay video preview suppressed:", err);
        });
      }
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoUrl && videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    addToCart({
      id: `${product.id}-${product.sizes[0] || "one"}-${product.colors[0]?.nameEn || "default"}`,
      nameEn: product.nameEn,
      nameBn: product.nameBn,
      priceUSD: discountedPrice,
      image: getProductImageUrl(product.images[0]),
      size: product.sizes[0] || "One Size",
      colorEn: product.colors[0]?.nameEn || "Default",
      colorBn: product.colors[0]?.nameBn || "ডিফল্ট"
    });
  };

  return (
    <Link 
      href={`/product/${product.id}`} 
      className="block h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="group relative bg-transparent rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer flex flex-col h-full"
      >
        {/* Product Image & Hover Video Section */}
        <div className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden mb-2.5 flex-shrink-0 border border-gray-100">
          {/* Discount Badge (Top-Left) */}
          {discountPercent > 0 ? (
            <span className="absolute top-2 left-2 bg-[#D4A017] text-white text-[9px] font-black px-1.5 py-0.5 rounded shadow-sm z-10 pointer-events-none">
              -{discountPercent}% {language === "en" ? "OFF" : "ছাড়"}
            </span>
          ) : null}

          {/* Highlight Badge Tag (Top-Right) */}
          {badgeInfo ? (
            <span className={`absolute top-2 right-2 ${badgeInfo.bgClass} text-[8px] font-black tracking-wider uppercase px-1.5 py-0.5 rounded-full shadow-md z-10 pointer-events-none`}>
              {badgeInfo.text}
            </span>
          ) : null}

          {/* Main Product Image */}
          <Image
            src={getProductImageUrl(product.images[0])}
            alt={activeName}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
            className={`object-cover transition-transform duration-500 ${
              isHovered && videoUrl ? "scale-105 opacity-0" : "group-hover:scale-105 opacity-100"
            }`}
          />

          {/* Infinite Looping Hover Video */}
          {videoUrl && (
            <video
              ref={videoRef}
              src={videoUrl}
              loop
              muted
              playsInline
              preload="auto"
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 pointer-events-none ${
                isHovered ? "opacity-100 scale-105" : "opacity-0 scale-100"
              }`}
            />
          )}

          {/* Circular Quick Add '+' Button */}
          <button 
            onClick={handleQuickAdd}
            className="absolute bottom-3 right-3 w-8 h-8 bg-white/95 hover:bg-white text-gray-800 rounded-full flex items-center justify-center shadow-md border border-gray-200/80 transition-transform active:scale-95 cursor-pointer z-10"
            aria-label="Add to cart"
          >
            <Plus size={18} className="stroke-[2.5]" />
          </button>
        </div>

        {/* Product Details (Title & Price) */}
        <div className="space-y-1.5 flex flex-col justify-between flex-1">
          <h3 className="text-xs md:text-sm font-semibold text-gray-900 group-hover:text-black transition-colors line-clamp-2 leading-snug">
            {activeName}
          </h3>

          <div className="text-sm md:text-base font-extrabold text-gray-900">
            {currency === "BDT" || currencySymbol === "৳" 
              ? `${displayActivePrice} BDT` 
              : `${currencySymbol}${displayActivePrice}`}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
