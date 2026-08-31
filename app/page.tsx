// app/page.tsx
"use client";

export const dynamic = 'force-dynamic';

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Container from "../components/shared/Container";
import { useLanguage } from "../context/LanguageContext";
import ProductCard from "../components/home/ProductCard";
import FloatingWhatsApp from "../components/shared/FloatingWhatsApp";
import { AnimatePresence } from "framer-motion";
import { ShoppingBag } from "lucide-react";

export default function Home() {
  return (
    <Suspense fallback={
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-[#D4A017] border-t-transparent"></div>
      </div>
    }>
      <HomeContent />
    </Suspense>
  );
}

function HomeContent() {
  const { language, products, isLoadingProducts } = useLanguage();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [activeCategory, setActiveCategory] = useState<string>("cat_women");

  useEffect(() => {
    if (categoryParam) {
      setActiveCategory(categoryParam);
    } else {
      setActiveCategory("cat_women");
    }
  }, [categoryParam]);

  if (isLoadingProducts) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-[#D4A017] border-t-transparent"></div>
      </div>
    );
  }

  // Filter products by selected category tab
  const filteredProducts = products.filter((prod) => {
    if (activeCategory === "all") return true;
    return Array.isArray(prod.category) ? prod.category.includes(activeCategory) : prod.category === activeCategory;
  });

  return (
    <>
      <Container className="pt-4 md:pt-6 pb-16">
        
        {/* CLEAN 5-COLUMN PRODUCT GRID DIRECTLY BELOW HEADER */}
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          <AnimatePresence>
            {filteredProducts.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </AnimatePresence>
        </section>

        {/* Empty state fallback if no products match */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 space-y-4 bg-white rounded-3xl border border-gray-100 my-8">
            <div className="w-16 h-16 bg-amber-50 text-[#D4A017] rounded-full flex items-center justify-center mx-auto">
              <ShoppingBag size={28} />
            </div>
            <h3 className="font-bold text-gray-800">
              {language === "en" ? "No products found in this category" : "এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি"}
            </h3>
          </div>
        )}

      </Container>

      {/* FLOATING WHATSAPP BUTTON */}
      <FloatingWhatsApp />
    </>
  );
}
