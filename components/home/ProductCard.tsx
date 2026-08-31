// components/home/ProductCard.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Product, convertPrice, getCurrencySymbol, getProductImageUrl } from "../../data/products";
import { useLanguage } from "../../context/LanguageContext";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
  onOpenDetails?: (product: Product) => void;
}

export default function ProductCard({ product, onOpenDetails }: ProductCardProps) {
  const { language, currency, addToCart } = useLanguage();

  const originalPrice = product.priceUSD;
  const discountedPrice = originalPrice * (1 - product.discountPercent / 100);

  const activeName = language === "en" ? product.nameEn : product.nameBn;
  const currencySymbol = getCurrencySymbol(currency);
  const displayActivePrice = convertPrice(discountedPrice, currency);

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
    <Link href={`/product/${product.id}`} className="block h-full">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="group relative bg-transparent rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer flex flex-col h-full"
      >
        {/* Product Image Section with circular '+' button at bottom right */}
        <div className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden mb-2.5 flex-shrink-0 border border-gray-100">
          <Image
            src={getProductImageUrl(product.images[0])}
            alt={activeName}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Circular Quick Add '+' Button at bottom-right corner (Exact Fordeal screenshot) */}
          <button 
            onClick={handleQuickAdd}
            className="absolute bottom-3 right-3 w-8 h-8 bg-white/95 hover:bg-white text-gray-800 rounded-full flex items-center justify-center shadow-md border border-gray-200/80 transition-transform active:scale-95 cursor-pointer z-10"
            aria-label="Add to cart"
          >
            <Plus size={18} className="stroke-[2.5]" />
          </button>
        </div>

        {/* Product Details (Title & Price matching Fordeal screenshot) */}
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
