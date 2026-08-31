// data/products.ts

export interface ProductColor {
  nameEn: string;
  nameBn: string;
  hex: string;
}

export interface Product {
  id: string;
  nameEn: string;
  nameBn: string;
  descriptionEn: string;
  descriptionBn: string;
  category: string | string[];
  priceUSD: number;
  discountPercent: number;
  images: string[];
  sizes: string[];
  colors: ProductColor[];
  rating: number;
  reviewsCount: number;
  featuresEn: string[];
  featuresBn: string[];
}

export const CURRENCIES = [
  { code: "BDT", symbol: "৳", rate: 1, label: "BDT (৳)" },
  { code: "USD", symbol: "$", rate: 1 / 120, label: "USD ($)" },
  { code: "SAR", symbol: "SR", rate: 3.75 / 120, label: "SAR (SR)" }
] as const;

export function convertPrice(priceUSD: number, currency: string) {
  const currObj = CURRENCIES.find(c => c.code === currency);
  const rate = currObj ? currObj.rate : 1;
  return (priceUSD * rate).toFixed(2);
}

export function getCurrencySymbol(currency: string) {
  const currObj = CURRENCIES.find(c => c.code === currency);
  return currObj ? currObj.symbol : "$";
}

export function getProductImageUrl(src: string) {
  if (!src) return "/images/logo.png";
  if (src.startsWith("http://") || src.startsWith("https://") || src.startsWith("data:")) {
    return src;
  }
  
  if (src.startsWith("/uploads/")) {
    const rawApiUrl = 
      process.env.NEXT_PUBLIC_API_URL || 
      (typeof window !== "undefined"
        ? (window.location.hostname.includes("fashionlegacy.live") || window.location.hostname.includes("vercel.app")
            ? "https://fashion-legacy-backend.vercel.app" 
            : `http://${window.location.hostname}:5000`)
        : "http://localhost:5000");
    const apiBaseUrl = rawApiUrl.endsWith("/") ? rawApiUrl.slice(0, -1) : rawApiUrl;
    return `${apiBaseUrl}${src}`;
  }
  
  return src;
}

export const PRODUCTS: Product[] = [
  {
    "id": "prod-hot-1",
    "nameEn": "Chic Woolen Knitted Cardigan Sweater",
    "nameBn": "চটকদার উলের বোনা কার্ডিগান সোয়েটার",
    "descriptionEn": "Wrap yourself in cozy luxury. Expertly knitted from extra-fine merino wool blend, this cardigan offers unmatched warmth.",
    "descriptionBn": "আরাম ও বিলাসিতার চমৎকার সংমিশ্রণ। অতিরিক্ত মিহি মেরিনো উলের মিশ্রণে তৈরি এই কার্ডিগানটি অসাধারণ উষ্ণতা প্রদান করবে।",
    "category": "cat_hot",
    "priceUSD": 69.99,
    "discountPercent": 50,
    "images": [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&q=80"
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "colors": [
      {
        "nameEn": "Beige",
        "nameBn": "বেইজ",
        "hex": "#F5F5DC"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 110,
    "featuresEn": [
      "Merino wool blend",
      "Elegant drop-front",
      "Side pockets"
    ],
    "featuresBn": [
      "মেরিনো উলের সুতো",
      "চমৎকার ডিজাইন",
      "পকেট সুবিধা"
    ]
  },
  {
    "id": "prod-hot-2",
    "nameEn": "Casual Linen Shirt Long Sleeve",
    "nameBn": "ক্যাজুয়াল লিনেন শার্ট ফুল হাতা",
    "descriptionEn": "Stay fresh and fashionable. Premium pure linen shirt with loose casual drape and spread collar.",
    "descriptionBn": "গরমের আবহাওয়ায় থাকুন সতেজ ও স্টাইলিশ। প্রিমিয়াম পিওর লিনেন শার্ট।",
    "category": "cat_hot",
    "priceUSD": 39.99,
    "discountPercent": 45,
    "images": [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "nameEn": "Ocean Blue",
        "nameBn": "নীল",
        "hex": "#4682B4"
      }
    ],
    "rating": 4.5,
    "reviewsCount": 72,
    "featuresEn": [
      "100% pure linen",
      "Relaxed fit",
      "Spread collar"
    ],
    "featuresBn": [
      "১০০% লিনেন কাপড়",
      "আরামদায়ক ফিট",
      "স্প্রেড কলার"
    ]
  },
  {
    "id": "prod-hot-3",
    "nameEn": "Retro Leather Street Sneaker",
    "nameBn": "রেট্রো লেদার স্ট্রিট স্নিকার",
    "descriptionEn": "Classic street style meets modern leather cushioning with wear-resistant rubber sole.",
    "descriptionBn": "ক্লাসিক স্ট্রিট স্টাইল ও আধুনিক কুশনিংয়ের চমৎকার মেলবন্ধন।",
    "category": "cat_hot",
    "priceUSD": 89.99,
    "discountPercent": 30,
    "images": [
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=500&q=80"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      {
        "nameEn": "Retro Red",
        "nameBn": "লাল",
        "hex": "#8B0000"
      }
    ],
    "rating": 4.7,
    "reviewsCount": 95,
    "featuresEn": [
      "Premium leather",
      "Rubber sole",
      "Vintage look"
    ],
    "featuresBn": [
      "প্রিমিয়াম চামড়া",
      "রাবার সোল",
      "ভিন্টেজ ডিজাইন"
    ]
  },
  {
    "id": "prod-hot-4",
    "nameEn": "Minimalist Gold Edition Watch",
    "nameBn": "মিনিমালিস্ট গোল্ড এডিশন ঘড়ি",
    "descriptionEn": "Timeless simplicity meets modern gold premium look with adjustable mesh bracelet.",
    "descriptionBn": "সরলতা এবং রাজকীয় গোল্ডেন লুকের চমৎকার মেলবন্ধন।",
    "category": "cat_hot",
    "priceUSD": 119.99,
    "discountPercent": 20,
    "images": [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&q=80"
    ],
    "sizes": [
      "One Size"
    ],
    "colors": [
      {
        "nameEn": "Pure Gold",
        "nameBn": "সোনা",
        "hex": "#FFD700"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 64,
    "featuresEn": [
      "Thin dial casing",
      "Adjustable mesh strap",
      "Quartz precision"
    ],
    "featuresBn": [
      "স্লিম ডায়াল কেসিং",
      "অ্যাডজাস্টেবল বেল্ট",
      "কোয়ার্টজ মেকানিজম"
    ]
  },
  {
    "id": "prod-hot-5",
    "nameEn": "Over-Sized Vintage Denim Overcoat",
    "nameBn": "ওভার-সাইজ ভিন্টেজ ডেনিম ওভারকোট",
    "descriptionEn": "Trendy oversized denim overcoat with premium washed indigo finish and heavy brass buttons.",
    "descriptionBn": "ট্রেন্ডি ওভারসাইজড ডেনিম ওভারকোট। ওয়াশড ইনডিগো ফেব্রিক ও ব্রাস বাটন লক।",
    "category": "cat_hot",
    "priceUSD": 79.99,
    "discountPercent": 40,
    "images": [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "nameEn": "Washed Indigo",
        "nameBn": "ইনডিগো নীল",
        "hex": "#2B4C7E"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 142,
    "featuresEn": [
      "Heavyweight denim",
      "Oversized fit",
      "Brass hardware"
    ],
    "featuresBn": [
      "ভারী ডেনিম কাপড়",
      "ওভারসাইজড ফিট",
      "ব্রাস বাটন"
    ]
  },
  {
    "id": "prod-hot-6",
    "nameEn": "Luxury Rose Gold Quartz Watch",
    "nameBn": "লাক্সারি রোজ গোল্ড কোয়ার্টজ ওয়াচ",
    "descriptionEn": "Stunning rose gold tone watch with sparkling diamond crystal bezel and mesh band.",
    "descriptionBn": "আকর্ষণীয় রোজ গোল্ড ওয়াচ ডায়াল। ক্রিস্টাল স্টোন ও স্লিম বেল্ট।",
    "category": "cat_hot",
    "priceUSD": 129.99,
    "discountPercent": 35,
    "images": [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&q=80"
    ],
    "sizes": [
      "One Size"
    ],
    "colors": [
      {
        "nameEn": "Rose Gold",
        "nameBn": "রোজ গোল্ড",
        "hex": "#B76E79"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 88,
    "featuresEn": [
      "Diamond crystal bezel",
      "Rose gold coating",
      "Water resistant"
    ],
    "featuresBn": [
      "ক্রিস্টাল বেজেল",
      "রোজ গোল্ড প্লেটিং",
      "ওয়াটার রেজিস্ট্যান্ট"
    ]
  },
  {
    "id": "prod-hot-7",
    "nameEn": "Air Cushioned Athletic Running Shoes",
    "nameBn": "এয়ার কুশন অ্যাথলেটিক রানিং শু",
    "descriptionEn": "Next-gen air cushioned sole designed for high impact absorbing and smooth running performance.",
    "descriptionBn": "সর্বোচ্চ গতি ও আরামদায়ক রানিং অভিজ্ঞতার জন্য এয়ার কুশন সোল্ড অ্যাথলেটিক শু।",
    "category": "cat_hot",
    "priceUSD": 84.99,
    "discountPercent": 50,
    "images": [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      {
        "nameEn": "Neon Orange",
        "nameBn": "কমলা",
        "hex": "#FF4500"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 205,
    "featuresEn": [
      "Air cushion sole",
      "Knit mesh body",
      "Reflective stripes"
    ],
    "featuresBn": [
      "এয়ার কুশন সোল",
      "নিট বডি",
      "রিফ্লেক্টিভ স্ট্রাইপ"
    ]
  },
  {
    "id": "prod-hot-8",
    "nameEn": "Genuine Italian Leather Crossbody Bag",
    "nameBn": "জেনুইন ইতালিয়ান লেদার ক্রসবডি ব্যাগ",
    "descriptionEn": "Handcrafted soft genuine Italian leather shoulder sling handbag with solid brass zip lock.",
    "descriptionBn": "খাঁটি ইতালিয়ান লেদার দিয়ে তৈরি মহিলাদের স্টাইলিশ ক্রসবডি ব্যাগ।",
    "category": "cat_hot",
    "priceUSD": 94.99,
    "discountPercent": 45,
    "images": [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&q=80"
    ],
    "sizes": [
      "Medium"
    ],
    "colors": [
      {
        "nameEn": "Cognac Brown",
        "nameBn": "বাদামী",
        "hex": "#9A463D"
      }
    ],
    "rating": 4.7,
    "reviewsCount": 118,
    "featuresEn": [
      "Italian cowhide",
      "Multi compartments",
      "Brass zipper"
    ],
    "featuresBn": [
      "ইতালিয়ান চামড়া",
      "একাধিক চেইন পকেট",
      "ব্রাস লক"
    ]
  },
  {
    "id": "prod-hot-9",
    "nameEn": "Soft Merino Wool Crewneck Pullover",
    "nameBn": "সফট মেরিনো উল ক্রু-নেক পুলওভার",
    "descriptionEn": "Ultra soft merino wool crewneck pullover sweater designed for supreme winter comfort.",
    "descriptionBn": "উইন্টারে প্রতিদিন পরার উপযোগী অতিরিক্ত সুতি মেরিনো উলের পুলওভার।",
    "category": "cat_hot",
    "priceUSD": 59.99,
    "discountPercent": 30,
    "images": [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "nameEn": "Charcoal Navy",
        "nameBn": "নেভি ব্লু",
        "hex": "#1B263B"
      }
    ],
    "rating": 4.6,
    "reviewsCount": 65,
    "featuresEn": [
      "Fine merino wool",
      "Ribbed cuffs",
      "Lightweight warmth"
    ],
    "featuresBn": [
      "মিহি উলের বুনন",
      "রিবড কলার",
      "হালকা ও উষ্ম"
    ]
  },
  {
    "id": "prod-hot-10",
    "nameEn": "Smart Bluetooth Fitness Tracker Band",
    "nameBn": "স্মার্ট ব্লুটুথ ফিটনেস ট্র্যাকার ব্যান্ড",
    "descriptionEn": "HD AMOLED touch display, heart rate sensor, blood oxygen tracker, and 14-day battery life.",
    "descriptionBn": "এইচডি স্ক্রিন, হার্টরেট সেন্সর ও ১৪ দিনের ব্যাটারি লাইফসহ স্মার্ট ফিটনেস ব্যান্ড।",
    "category": "cat_hot",
    "priceUSD": 49.99,
    "discountPercent": 40,
    "images": [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80"
    ],
    "sizes": [
      "One Size"
    ],
    "colors": [
      {
        "nameEn": "Obsidian Black",
        "nameBn": "কালো",
        "hex": "#0F0F0F"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 175,
    "featuresEn": [
      "AMOLED display",
      "Spo2 & Heart rate",
      "Waterproof 5ATM"
    ],
    "featuresBn": [
      "অ্যামোলেড ডিসপ্লে",
      "হার্টরেট মনিটর",
      "ওয়াটারপ্রুফ"
    ]
  },
  {
    "id": "prod-hot-11",
    "nameEn": "Polarized Square Unisex Sunglasses",
    "nameBn": "পোলাইরাইজড স্কয়ার ইউনিসেক্স সানগ্লাস",
    "descriptionEn": "Modern retro square frame sunglasses with TAC UV400 polarized anti-glare protection.",
    "descriptionBn": "ইউভি৪০০ সানপ্রটেকশন ও পোলাইরাইজড লেন্সের আধুনিক রেট্রো স্কয়ার সানগ্লাস।",
    "category": "cat_hot",
    "priceUSD": 29.99,
    "discountPercent": 50,
    "images": [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80"
    ],
    "sizes": [
      "Universal"
    ],
    "colors": [
      {
        "nameEn": "Matte Black Frame",
        "nameBn": "ম্যাট ফ্রেম",
        "hex": "#1A1A1A"
      }
    ],
    "rating": 4.7,
    "reviewsCount": 130,
    "featuresEn": [
      "TAC Polarized",
      "UV400 Shield",
      "Lightweight TR90"
    ],
    "featuresBn": [
      "পোলাইরাইজড লেন্স",
      "ইউভি প্রোটেকশন",
      "টেকসই ফ্রেম"
    ]
  },
  {
    "id": "prod-hot-12",
    "nameEn": "Handcrafted Suede Ankle Chelsea Boots",
    "nameBn": "হ্যান্ডক্রাফটেড সুয়েড অ্যাঙ্কেল চেলসি বুটস",
    "descriptionEn": "Classic suede leather Chelsea boots with elastic side panels and durable Goodyear welted sole.",
    "descriptionBn": "হাতে তৈরি সুয়েড চামড়ার চেলসি বুট। ইলাস্টিক সাইড প্যানেল ও রাবার সোল।",
    "category": "cat_hot",
    "priceUSD": 109.99,
    "discountPercent": 35,
    "images": [
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=500&q=80"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      {
        "nameEn": "Tobacco Tan",
        "nameBn": "বাদামী",
        "hex": "#B8860B"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 92,
    "featuresEn": [
      "Genuine suede leather",
      "Goodyear welted",
      "Elastic pull tab"
    ],
    "featuresBn": [
      "সুয়েড লেদার",
      "মজবুত সোল",
      "সহজে পরা যায়"
    ]
  },
  {
    "id": "prod-women-1",
    "nameEn": "Vintage Floral Summer Maxi Dress",
    "nameBn": "ভিন্টেজ ফ্লোরাল সামার ম্যাক্সি ড্রেস",
    "descriptionEn": "Experience supreme comfort and breezy elegance in our floral maxi dress.",
    "descriptionBn": "আমাদের ভিন্টেজ ফ্লোরাল ম্যাক্সি ড্রেসে পাবেন অসাধারণ আরাম এবং স্নিগ্ধতা।",
    "category": "cat_women",
    "priceUSD": 49.99,
    "discountPercent": 30,
    "images": [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&q=80"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "nameEn": "Peach",
        "nameBn": "পিচ",
        "hex": "#FFDAB9"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 124,
    "featuresEn": [
      "Linen blend",
      "Floral print",
      "Flowing hem"
    ],
    "featuresBn": [
      "লিনেন কাপড়",
      "ফ্লোরাল প্রিন্ট",
      "হেম ডিজাইন"
    ]
  },
  {
    "id": "prod-women-2",
    "nameEn": "Modern Silk Evening Gown",
    "nameBn": "মডার্ন সিল্ক ইভনিং গাউন",
    "descriptionEn": "Command attention in any party. Made from luxurious pure mulberry silk.",
    "descriptionBn": "যে কোনো পার্টিতে সবার নজর কাড়ুন। প্রিমিয়াম খাঁটি তুঁত সিল্কের রেশমি গাউন।",
    "category": "cat_women",
    "priceUSD": 129.99,
    "discountPercent": 20,
    "images": [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&q=80"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colors": [
      {
        "nameEn": "Ruby Red",
        "nameBn": "লাল",
        "hex": "#E0115F"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 42,
    "featuresEn": [
      "Pure mulberry silk",
      "Pleated wrap",
      "Side zipper"
    ],
    "featuresBn": [
      "মালবেরি সিল্ক",
      "কুঁচি ড্র্যাপ",
      "জিপার লক"
    ]
  },
  {
    "id": "prod-women-3",
    "nameEn": "Casual Cotton T-Shirt Dress",
    "nameBn": "ক্যাজুয়াল কটন টি-শার্ট ড্রেস",
    "descriptionEn": "The ultimate easygoing day dress with round crew neck and relaxed straight drape.",
    "descriptionBn": "সবচেয়ে সহজ ও ক্যাজুয়াল আউটফিট। সুতি কাপড়ে তৈরি অত্যন্ত আরামদায়ক ড্রেস।",
    "category": "cat_women",
    "priceUSD": 24.99,
    "discountPercent": 10,
    "images": [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80"
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "colors": [
      {
        "nameEn": "Heather Grey",
        "nameBn": "ধূসর",
        "hex": "#808080"
      }
    ],
    "rating": 4.4,
    "reviewsCount": 88,
    "featuresEn": [
      "Combed cotton",
      "Crew neck",
      "Relaxed fit"
    ],
    "featuresBn": [
      "কম্বড কটন",
      "গোল গলা",
      "রিলাক্সড ফিট"
    ]
  },
  {
    "id": "prod-women-4",
    "nameEn": "Ma'am Alphabet Camisole Thread Vest",
    "nameBn": "ম্যাম অ্যালফাবেট ক্যামিসোল থ্রেড ভেস্ট",
    "descriptionEn": "Comfortable knitted camisole vest top with spaghetti straps and stretch ribbed knit.",
    "descriptionBn": "অত্যন্ত আরামদায়ক ইলাস্টিক থ্রেড নিট ক্যামিসোল ভেস্ট টপ।",
    "category": "cat_women",
    "priceUSD": 18.99,
    "discountPercent": 15,
    "images": [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&q=80"
    ],
    "sizes": [
      "Free Size"
    ],
    "colors": [
      {
        "nameEn": "Multi Colors",
        "nameBn": "মাল্টি কালার",
        "hex": "#E0E0E0"
      }
    ],
    "rating": 4.7,
    "reviewsCount": 145,
    "featuresEn": [
      "Soft stretch thread",
      "Breathable knit",
      "Versatile innerwear"
    ],
    "featuresBn": [
      "নরম থ্রেড ফেব্রিক",
      "বাতাস চলাচলের উপযোগী",
      "বহুমুখী ব্যবহার"
    ]
  },
  {
    "id": "prod-women-5",
    "nameEn": "Chic Pleated Satin Midi Skirt",
    "nameBn": "চটকদার প্লিটেড সাটিন মিডি স্কার্ট",
    "descriptionEn": "Elegant high-waist A-line accordion pleated midi skirt in smooth silk satin.",
    "descriptionBn": "নরম সিল্ক সাটিনের হাই-ওয়েস্ট প্লিটেড মিডি স্কার্ট। পার্টি বা ক্যাজুয়াল আউটফিট।",
    "category": "cat_women",
    "priceUSD": 39.99,
    "discountPercent": 25,
    "images": [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500&q=80"
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "colors": [
      {
        "nameEn": "Champagne Gold",
        "nameBn": "গোল্ডেন",
        "hex": "#F7E7CE"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 76,
    "featuresEn": [
      "Silk satin",
      "Accordion pleats",
      "Elastic waistband"
    ],
    "featuresBn": [
      "সিল্ক সাটিন",
      "প্লিটেড ডিজাইন",
      "ইলাস্টিক কোমর"
    ]
  },
  {
    "id": "prod-women-6",
    "nameEn": "Elegance Woolen Winter Trench Coat",
    "nameBn": "এলিগেন্স উলের উইন্টার ট্রাঞ্চ কোট",
    "descriptionEn": "Double-breasted wool blend winter coat with tie-belt waist and notch lapels.",
    "descriptionBn": "লং ডাবল ব্রেস্টেড উলের শীতকালীন কোট। বেল্টসহ রাজকীয় ডিজাইন।",
    "category": "cat_women",
    "priceUSD": 119.99,
    "discountPercent": 30,
    "images": [
      "https://images.unsplash.com/photo-1544441893-675973e31985?w=500&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "nameEn": "Beige Tan",
        "nameBn": "বেইজ",
        "hex": "#D2B48C"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 95,
    "featuresEn": [
      "Wool blend fabric",
      "Double breasted",
      "Waist tie belt"
    ],
    "featuresBn": [
      "উলেন কাপড",
      "ডাবল ব্রেস্টেড",
      "কোমরের বেল্ট"
    ]
  },
  {
    "id": "prod-women-7",
    "nameEn": "Embroidered Cotton Anarkali Suit Set",
    "nameBn": "এমব্রয়ডারি করা কটন আনারকলি স্যুট সেট",
    "descriptionEn": "Traditional flared cotton Anarkali kurta set with delicate Zari embroidery and Dupatta.",
    "descriptionBn": "নিখুঁত জরি কাজের এমব্রয়ডারি করা সুতি আনারকলি স্যুট ও ওড়না সেট।",
    "category": "cat_women",
    "priceUSD": 69.99,
    "discountPercent": 20,
    "images": [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&q=80"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "nameEn": "Royal Maroon",
        "nameBn": "মরুন",
        "hex": "#800020"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 112,
    "featuresEn": [
      "100% Pure cotton",
      "Zari handwork",
      "Matching dupatta"
    ],
    "featuresBn": [
      "সুতি ফেব্রিক",
      "জরি কাজ",
      "ম্যাচিং ওড়না"
    ]
  },
  {
    "id": "prod-women-8",
    "nameEn": "Casual Oversized Knit Cardigan",
    "nameBn": "ক্যাজুয়াল ওভারসাইজড নিট কার্ডিগান",
    "descriptionEn": "Chunky cable-knit cardigan sweater with front Tortoise buttons and deep pockets.",
    "descriptionBn": "মোটা সুতোর বোনা ও বাটন লকসহ ক্যাজুয়াল নিট কার্ডিগান।",
    "category": "cat_women",
    "priceUSD": 44.99,
    "discountPercent": 15,
    "images": [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&q=80"
    ],
    "sizes": [
      "Free Size"
    ],
    "colors": [
      {
        "nameEn": "Off White",
        "nameBn": "সাদা",
        "hex": "#FAF0E6"
      }
    ],
    "rating": 4.6,
    "reviewsCount": 84,
    "featuresEn": [
      "Cable knit",
      "Front buttons",
      "Relaxed fit"
    ],
    "featuresBn": [
      "ক্যাবল নিট",
      "সামনে বোতাম",
      "রিলাক্সড ফিট"
    ]
  },
  {
    "id": "prod-women-9",
    "nameEn": "Floral Print Chiffon Party Dress",
    "nameBn": "ফ্লোরাল প্রিন্ট শিফন পার্টি ড্রেস",
    "descriptionEn": "Lightweight layered chiffon ruffle dress featuring vibrant botanical spring prints.",
    "descriptionBn": "হালকা নরম শিফন কাপড়ের সুন্দর রানিং রফেল পার্টি ড্রেস।",
    "category": "cat_women",
    "priceUSD": 54.99,
    "discountPercent": 35,
    "images": [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80"
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "colors": [
      {
        "nameEn": "Blush Pink",
        "nameBn": "গোলাপী",
        "hex": "#FFB6C1"
      }
    ],
    "rating": 4.7,
    "reviewsCount": 68,
    "featuresEn": [
      "Soft chiffon",
      "Layered ruffles",
      "Inner lining"
    ],
    "featuresBn": [
      "শিফন কাপড়",
      "রফেল লেয়ার",
      "লাইনিং যুক্ত"
    ]
  },
  {
    "id": "prod-women-10",
    "nameEn": "High-Waisted Stretch Denim Jeans",
    "nameBn": "হাই-ওয়েস্টেড স্ট্রেচ ডেনিম জিন্স",
    "descriptionEn": "Classic 5-pocket high rise skinny denim jeans with stretch elasticity for shaping.",
    "descriptionBn": "আরামদায়ক স্ট্রেচ কটন ডেনিম হাই-রাইজ স্ক্রিনি জিন্স।",
    "category": "cat_women",
    "priceUSD": 49.99,
    "discountPercent": 20,
    "images": [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&q=80"
    ],
    "sizes": [
      "28",
      "30",
      "32",
      "34"
    ],
    "colors": [
      {
        "nameEn": "Dark Wash Blue",
        "nameBn": "ডার্ক ব্লু",
        "hex": "#1C2D42"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 156,
    "featuresEn": [
      "High rise fit",
      "Stretch cotton denim",
      "Shape retention"
    ],
    "featuresBn": [
      "হাই-রাইজ ফিট",
      "ইলাস্টিক ডেনিম",
      "শেপ ট্র্যাকিং"
    ]
  },
  {
    "id": "prod-women-11",
    "nameEn": "Bohemian Linen Button-Down Shirt",
    "nameBn": "বোহেমিয়ান লিনেন বাটন-ডাউন শার্ট",
    "descriptionEn": "Breathable pure linen long-sleeve casual shirt with loose drape and curved hem.",
    "descriptionBn": "বাতাস চলাচলের উপযোগী বিশুদ্ধ লিনেন বাটন শার্ট।",
    "category": "cat_women",
    "priceUSD": 34.99,
    "discountPercent": 15,
    "images": [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "nameEn": "Olive Green",
        "nameBn": "সবুজ",
        "hex": "#556B2F"
      }
    ],
    "rating": 4.5,
    "reviewsCount": 54,
    "featuresEn": [
      "100% Organic linen",
      "Curved hem",
      "Roll-up sleeve"
    ],
    "featuresBn": [
      "১০০% লিনেন",
      "কার্ভড হেম",
      "ফোল্ডিং হাতা"
    ]
  },
  {
    "id": "prod-women-12",
    "nameEn": "Silk Blend Traditional Party Saree",
    "nameBn": "সিল্ক ব্লেন্ড ট্র্যাডিশনাল পার্টি শাড়ি",
    "descriptionEn": "Rich Kanjivaram style woven silk blend saree with intricate golden zari border work.",
    "descriptionBn": "গোল্ডেন জরি পাড় ও আঁচল কাজের ঐতিহ্যবাহী লাক্সারি সিল্ক শাড়ি।",
    "category": "cat_women",
    "priceUSD": 89.99,
    "discountPercent": 25,
    "images": [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&q=80"
    ],
    "sizes": [
      "Free Size"
    ],
    "colors": [
      {
        "nameEn": "Deep Emerald",
        "nameBn": "সবুজ",
        "hex": "#004B23"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 138,
    "featuresEn": [
      "Woven silk blend",
      "Golden zari border",
      "Includes blouse piece"
    ],
    "featuresBn": [
      "সিল্ক ফেব্রিক",
      "জরি পাড়",
      "ব্লাউজ পিসসহ"
    ]
  },
  {
    "id": "prod-shoes-1",
    "nameEn": "Ultra-Lightweight Athletic Sneakers",
    "nameBn": "আল্ট্রা-লাইটওয়েট অ্যাথলেটিক স্নিকার্স",
    "descriptionEn": "Engineered for maximum speed and endurance with responsive foam cushion.",
    "descriptionBn": "দৌড়ানো ও হাঁটার সময় সর্বোচ্চ গতি ও স্থায়িত্বের জন্য ডিজাইনকৃত অ্যাথলেটিক স্নিকার্স।",
    "category": "cat_shoes",
    "priceUSD": 79.99,
    "discountPercent": 40,
    "images": [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80"
    ],
    "sizes": [
      "39",
      "40",
      "41",
      "42"
    ],
    "colors": [
      {
        "nameEn": "Crimson Red",
        "nameBn": "লাল",
        "hex": "#B22234"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 156,
    "featuresEn": [
      "Cushion sole",
      "Breathable mesh",
      "Rubber grip"
    ],
    "featuresBn": [
      "নরম সোল",
      "মেস ফেব্রিক",
      "রাবার গ্রিপ"
    ]
  },
  {
    "id": "prod-shoes-2",
    "nameEn": "Urban Streetwear High-Tops",
    "nameBn": "আরবান স্ট্রিটওয়্যার হাই-টপ জুতো",
    "descriptionEn": "Heavy canvas fabric build with protective round rubber toe-cap design.",
    "descriptionBn": "শক্ত ক্যানভাস কাপড় ও অ্যাঙ্কেল সাপোর্ট দিয়ে তৈরি আধুনিক হাই-টপ স্নিকার।",
    "category": "cat_shoes",
    "priceUSD": 69.99,
    "discountPercent": 30,
    "images": [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&q=80"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      {
        "nameEn": "Black",
        "nameBn": "কালো",
        "hex": "#1C1C1C"
      }
    ],
    "rating": 4.7,
    "reviewsCount": 114,
    "featuresEn": [
      "Canvas cotton",
      "High ankle support",
      "Waffle sole"
    ],
    "featuresBn": [
      "ক্যানভাস ফেব্রিক",
      "হাই অ্যাঙ্কেল",
      "অ্যান্টি-স্লিপ সোল"
    ]
  },
  {
    "id": "prod-shoes-3",
    "nameEn": "Classic Suede Leather Loafers",
    "nameBn": "ক্ল্যাসিক সুয়েড লেদার লোফার্স",
    "descriptionEn": "Hand-stitched premium suede leather loafing shoes with leather lined insoles.",
    "descriptionBn": "হাতে সেলাই করা প্রিমিয়াম চামড়ার আরামদায়ক ফরমাল ও ক্যাজুয়াল লোফার।",
    "category": "cat_shoes",
    "priceUSD": 89.99,
    "discountPercent": 20,
    "images": [
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=500&q=80"
    ],
    "sizes": [
      "39",
      "40",
      "41",
      "42"
    ],
    "colors": [
      {
        "nameEn": "Tan Brown",
        "nameBn": "বাদামী",
        "hex": "#B8860B"
      }
    ],
    "rating": 4.6,
    "reviewsCount": 73,
    "featuresEn": [
      "Italian suede",
      "Leather lining",
      "Moc-toe seam"
    ],
    "featuresBn": [
      "সুয়েড লেদার",
      "চামড়ার লাইনিং",
      "নিখুঁত সেলাই"
    ]
  },
  {
    "id": "prod-shoes-4",
    "nameEn": "Women Minimalist Running Shoes",
    "nameBn": "উইমেন মিনিমালিস্ট রানিং শু",
    "descriptionEn": "Lightweight flexible mesh body with shock-absorbing foam midsole.",
    "descriptionBn": "মহিলাদের রানিং ও ক্লাসের জন্য হালকা নমনীয় মেস কাপড়ের জুতো।",
    "category": "cat_shoes",
    "priceUSD": 54.99,
    "discountPercent": 25,
    "images": [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=500&q=80"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39"
    ],
    "colors": [
      {
        "nameEn": "Rose Pink",
        "nameBn": "গোলাপী",
        "hex": "#FFC0CB"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 91,
    "featuresEn": [
      "Ultra light",
      "Knit upper",
      "Flex outsole"
    ],
    "featuresBn": [
      "অত্যন্ত হালকা",
      "নিট বডি",
      "ফ্লেক্স সোল"
    ]
  },
  {
    "id": "prod-shoes-5",
    "nameEn": "Leather Formal Derby Oxford Shoes",
    "nameBn": "লেদার ফরমাল ডার্বি অক্সফোর্ড জুতো",
    "descriptionEn": "Hand-finished full grain leather lace-up formal Oxfords with stacked wooden heel.",
    "descriptionBn": "হাতে ফিনিশিং করা খাঁটি চামড়ার ফরমাল ডার্বি অক্সফোর্ড জুতো।",
    "category": "cat_shoes",
    "priceUSD": 99.99,
    "discountPercent": 30,
    "images": [
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=500&q=80"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      {
        "nameEn": "Mahogany Black",
        "nameBn": "কালো",
        "hex": "#151515"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 120,
    "featuresEn": [
      "Full grain leather",
      "Cushioned insole",
      "Wooden heel"
    ],
    "featuresBn": [
      "খাঁটি চামড়া",
      "নরম ইনসোল",
      "উডেন হিল"
    ]
  },
  {
    "id": "prod-shoes-6",
    "nameEn": "Breathable Slip-On Walking Loafers",
    "nameBn": "ব্রিদেবল স্লিপ-অন ওয়াকিং লোফার্স",
    "descriptionEn": "Flexible woven stretch mesh body with shock-absorbing memory foam footbed.",
    "descriptionBn": "সহজে হাঁটার জন্য অতিরিক্ত নরম ও ফ্লেক্সিবল স্লিপ-অন ড্রাইভিন লোফার।",
    "category": "cat_shoes",
    "priceUSD": 49.99,
    "discountPercent": 20,
    "images": [
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&q=80"
    ],
    "sizes": [
      "39",
      "40",
      "41",
      "42"
    ],
    "colors": [
      {
        "nameEn": "Ash Grey",
        "nameBn": "ধূসর",
        "hex": "#B0C4DE"
      }
    ],
    "rating": 4.7,
    "reviewsCount": 88,
    "featuresEn": [
      "Stretch knit mesh",
      "Memory foam bed",
      "Slip-on design"
    ],
    "featuresBn": [
      "মেস বডি",
      "মেমোরি ফোম",
      "স্লিপ-অন পরা সহজ"
    ]
  },
  {
    "id": "prod-shoes-7",
    "nameEn": "Women Block Heel Party Sandals",
    "nameBn": "উইমেন ব্লক হিল পার্টি স্যান্ডেল",
    "descriptionEn": "Elegant ankle-strap open toe sandals with stable 2.5-inch block heel and velvet cushion.",
    "descriptionBn": "পার্টি বা ওয়েডিং আউটফিটের জন্য ২.৫ ইঞ্চি আরামদায়ক ব্লক হিল স্যান্ডেল।",
    "category": "cat_shoes",
    "priceUSD": 59.99,
    "discountPercent": 25,
    "images": [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&q=80"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39"
    ],
    "colors": [
      {
        "nameEn": "Golden Nude",
        "nameBn": "গোল্ডেন",
        "hex": "#E6C280"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 104,
    "featuresEn": [
      "2.5 in block heel",
      "Ankle buckle strap",
      "Non-slip outsole"
    ],
    "featuresBn": [
      "ব্লক হিল",
      "অ্যাঙ্কেল লক",
      "অ্যান্টি-স্লিপ"
    ]
  },
  {
    "id": "prod-shoes-8",
    "nameEn": "High-Top Canvas Retro Basketball Shoes",
    "nameBn": "হাই-টপ ক্যানভাস রেট্রো বাস্কেটবল শু",
    "descriptionEn": "Classic vintage 80s court style canvas sneakers with thick vulcanized rubber sole.",
    "descriptionBn": "ক্লাসিক ভিন্টেজ ক্যানভাস হাই-টপ বাস্কেটবল স্নিকার্স।",
    "category": "cat_shoes",
    "priceUSD": 74.99,
    "discountPercent": 35,
    "images": [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&q=80"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      {
        "nameEn": "Retro Navy White",
        "nameBn": "নেভি ব্লু",
        "hex": "#000080"
      }
    ],
    "rating": 4.6,
    "reviewsCount": 79,
    "featuresEn": [
      "Vulcanized sole",
      "Canvas body",
      "Padded collar"
    ],
    "featuresBn": [
      "রাবার সোল",
      "ক্যানভাস বডি",
      "প্যাডেড কলার"
    ]
  },
  {
    "id": "prod-shoes-9",
    "nameEn": "Lightweight Trail Running Shoes",
    "nameBn": "লাইটওয়েট ট্রেইল রানিং শু",
    "descriptionEn": "Rugged all-terrain grip tread with waterproof Gore-Tex mesh membrane.",
    "descriptionBn": "পাহাড় বা অমসৃণ রাস্তায় দৌড়ানোর বিশেষ গ্রিপ সোল্ড রানিং শু।",
    "category": "cat_shoes",
    "priceUSD": 89.99,
    "discountPercent": 40,
    "images": [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      {
        "nameEn": "Forest Green",
        "nameBn": "সবুজ",
        "hex": "#228B22"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 165,
    "featuresEn": [
      "All-terrain grip",
      "Waterproof mesh",
      "Reinforced toe cap"
    ],
    "featuresBn": [
      "অল-টেরেইন গ্রিপ",
      "ওয়াটারপ্রুফ",
      "টো-ক্যাপ প্রোটেকশন"
    ]
  },
  {
    "id": "prod-shoes-10",
    "nameEn": "Handmade Genuine Leather Driving Moccasins",
    "nameBn": "হ্যান্ডমেড জেনুইন লেদার ড্রাইভিং মোকাসিন",
    "descriptionEn": "Soft pebbled leather driving loafers with rubber pebble tread sole for grip.",
    "descriptionBn": "গাড়ি চালানো বা ক্যাজুয়াল হাঁটার জন্য অতিরিক্ত নরম লেদার মোকাসিন।",
    "category": "cat_shoes",
    "priceUSD": 79.99,
    "discountPercent": 15,
    "images": [
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=500&q=80"
    ],
    "sizes": [
      "39",
      "40",
      "41",
      "42"
    ],
    "colors": [
      {
        "nameEn": "Chestnut Brown",
        "nameBn": "বাদামী",
        "hex": "#8B4513"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 94,
    "featuresEn": [
      "Pebbled leather",
      "Rubber pod sole",
      "Moc toe seam"
    ],
    "featuresBn": [
      "নরম চামড়া",
      "পড সোল",
      "নিখুঁত সেলাই"
    ]
  },
  {
    "id": "prod-shoes-11",
    "nameEn": "Comfy Memory Foam Indoor Slippers",
    "nameBn": "কমফি মেমোরি ফোম ইনডোর স্লিপার্স",
    "descriptionEn": "Plush fleece lined indoor home slippers with thick memory foam cushioning.",
    "descriptionBn": "ঘরে পরা উপযোগী অতিরিক্ত নরম ও উলের তৈরি মেমোরি ফোম ইনডোর স্লিপার।",
    "category": "cat_shoes",
    "priceUSD": 24.99,
    "discountPercent": 10,
    "images": [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=500&q=80"
    ],
    "sizes": [
      "M",
      "L"
    ],
    "colors": [
      {
        "nameEn": "Warm Grey",
        "nameBn": "ধূসর",
        "hex": "#696969"
      }
    ],
    "rating": 4.7,
    "reviewsCount": 110,
    "featuresEn": [
      "Memory foam insole",
      "Plush fleece",
      "Anti-skid sole"
    ],
    "featuresBn": [
      "মেমোরি ফোম",
      "নরম উল",
      "অ্যান্টি-স্কিড"
    ]
  },
  {
    "id": "prod-shoes-12",
    "nameEn": "Waterproof Outdoor Hiking Boots",
    "nameBn": "ওয়াটারপ্রুফ আউটডোর হাইকিং বুটস",
    "descriptionEn": "Heavy-duty ankle high leather hiking boots with Vibram rubber traction outsoles.",
    "descriptionBn": "হাইকিং বা লং ট্যুরের জন্য ওয়াটারপ্রুফ লেদার অ্যাঙ্কেল বুট।",
    "category": "cat_shoes",
    "priceUSD": 119.99,
    "discountPercent": 30,
    "images": [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&q=80"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "colors": [
      {
        "nameEn": "Desert Tan",
        "nameBn": "বাদামী",
        "hex": "#C2B280"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 145,
    "featuresEn": [
      "Waterproof membrane",
      "Vibram rubber sole",
      "Ankle support"
    ],
    "featuresBn": [
      "ওয়াটারপ্রুফ",
      "রাবার ট্র্যাকশন সোল",
      "অ্যাঙ্কেল সাপোর্ট"
    ]
  },
  {
    "id": "prod-kids-1",
    "nameEn": "Kids Playtime Cotton Set",
    "nameBn": "কিডস প্লে-টাইম কটন সেট",
    "descriptionEn": "Cute and playful clothing set for kids, made from 100% hypoallergenic organic cotton.",
    "descriptionBn": "শিশুদের জন্য সুন্দর ও আরামদায়ক সুতি কাপড়ের সেট, যা অর্গানিক কটন দিয়ে তৈরি।",
    "category": "cat_kids",
    "priceUSD": 29.99,
    "discountPercent": 30,
    "images": [
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=500&q=80"
    ],
    "sizes": [
      "2-3Y",
      "3-4Y",
      "4-5Y"
    ],
    "colors": [
      {
        "nameEn": "Yellow",
        "nameBn": "হলুদ",
        "hex": "#FFD700"
      }
    ],
    "rating": 4.7,
    "reviewsCount": 52,
    "featuresEn": [
      "Organic cotton",
      "Elastic waist",
      "Hand print"
    ],
    "featuresBn": [
      "অর্গানিক কটন",
      "ইলাস্টিক কোমর",
      "হাতে প্রিন্ট"
    ]
  },
  {
    "id": "prod-kids-2",
    "nameEn": "Toddler Fleece Hooded Romper",
    "nameBn": "টডলার ফ্লিস হুডেড রম্পার",
    "descriptionEn": "Made from ultra-soft fleece featuring cute animal ears on the hood.",
    "descriptionBn": "প্রিমিয়াম নরম ফ্লিস কাপড়, কিউট কান ডিজাইনসহ হুডির সমন্বয়ে তৈরি।",
    "category": "cat_kids",
    "priceUSD": 39.99,
    "discountPercent": 20,
    "images": [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&q=80"
    ],
    "sizes": [
      "6-12M",
      "12-18M"
    ],
    "colors": [
      {
        "nameEn": "Teddy Brown",
        "nameBn": "বাদামী",
        "hex": "#8B5A2B"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 67,
    "featuresEn": [
      "Soft fleece",
      "Animal ears hood",
      "Safe zipper"
    ],
    "featuresBn": [
      "নরম ফ্লিস",
      "কিউট হুডি",
      "সুরক্ষিত জিপার"
    ]
  },
  {
    "id": "prod-kids-3",
    "nameEn": "Educational Building Blocks Toy Set",
    "nameBn": "এডুকেশনাল বিল্ডিং ব্লকস খেলনা সেট",
    "descriptionEn": "Creative colorful building blocks to stimulate imagination and motor skills in young kids.",
    "descriptionBn": "শিশুদের বুদ্ধিমত্তা ও সৃজনশীলতা বৃদ্ধির জন্য রঙিন সেফ প্লাস্টিক বিল্ডিং ব্লক সেট।",
    "category": "cat_kids",
    "priceUSD": 24.99,
    "discountPercent": 15,
    "images": [
      "https://images.unsplash.com/photo-1587654562363-60e2d556a310?w=500&q=80"
    ],
    "sizes": [
      "One Size"
    ],
    "colors": [
      {
        "nameEn": "Multicolor",
        "nameBn": "রঙিন",
        "hex": "#FF4500"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 112,
    "featuresEn": [
      "Non-toxic plastic",
      "Creative blocks",
      "Safe rounded edges"
    ],
    "featuresBn": [
      "নিরাপদ প্লাস্টিক",
      "সৃজনশীল ব্লকস",
      "মসৃণ বর্ডার"
    ]
  },
  {
    "id": "prod-kids-4",
    "nameEn": "Cute Plush Teddy Bear Toy",
    "nameBn": "কিউট প্লাশ টেডি বিয়ার খেলনা",
    "descriptionEn": "Ultra soft huggable plush stuffed teddy bear toy for children.",
    "descriptionBn": "শিশুদের প্রিয় অত্যন্ত নরম ও কিউট টেডি বিয়ার সফট টয়।",
    "category": "cat_kids",
    "priceUSD": 19.99,
    "discountPercent": 25,
    "images": [
      "https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=500&q=80"
    ],
    "sizes": [
      "Medium"
    ],
    "colors": [
      {
        "nameEn": "Honey Brown",
        "nameBn": "হানি বাদামী",
        "hex": "#D2691E"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 88,
    "featuresEn": [
      "Plush fabric",
      "Hypoallergenic filling",
      "Washable"
    ],
    "featuresBn": [
      "প্লাশ ফেব্রিক",
      "নিরাপদ ফিলিং",
      "ধোয়া যায়"
    ]
  },
  {
    "id": "prod-kids-5",
    "nameEn": "Remote Control RC Racing Car Toy",
    "nameBn": "রিমোট কন্ট্রোল আরসি রেসিং কার খেলনা",
    "descriptionEn": "High-speed 2.4GHz wireless remote control stunt car with LED lights and rechargeable battery.",
    "descriptionBn": "এইচডি হেডলাইট ও ২.৪ গিগাহার্টজ রিমোট কন্ট্রোল রেসিং কার খেলনা।",
    "category": "cat_kids",
    "priceUSD": 34.99,
    "discountPercent": 20,
    "images": [
      "https://images.unsplash.com/photo-1587654562363-60e2d556a310?w=500&q=80"
    ],
    "sizes": [
      "One Size"
    ],
    "colors": [
      {
        "nameEn": "Racing Red",
        "nameBn": "লাল",
        "hex": "#FF0000"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 95,
    "featuresEn": [
      "2.4GHz Remote control",
      "Rechargeable battery",
      "LED Lights"
    ],
    "featuresBn": [
      "রিমোট কন্ট্রোল",
      "রিচার্জেবল ব্যাটারি",
      "এলইডি লাইট"
    ]
  },
  {
    "id": "prod-kids-6",
    "nameEn": "Cute Bunny Ear Girls Party Dress",
    "nameBn": "কিউট বানি ইয়ার গার্লস পার্টি ড্রেস",
    "descriptionEn": "Adorable princess tutu skirt dress with embroidered bunny ear details and satin ribbon bow.",
    "descriptionBn": "ছোট বালিকাদের জন্য কিউট বানি ইয়ার ডিজাইন প্রিন্সেস পার্টি ড্রেস।",
    "category": "cat_kids",
    "priceUSD": 39.99,
    "discountPercent": 25,
    "images": [
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=500&q=80"
    ],
    "sizes": [
      "2-3Y",
      "3-4Y",
      "4-5Y"
    ],
    "colors": [
      {
        "nameEn": "Candy Pink",
        "nameBn": "গোলাপী",
        "hex": "#FF69B4"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 78,
    "featuresEn": [
      "Tutu tulle skirt",
      "Bunny ears embroidery",
      "Soft lining"
    ],
    "featuresBn": [
      "টিউটু স্কার্ট",
      "বানি ইয়ার",
      "নরম সুতি ইনসাইড"
    ]
  },
  {
    "id": "prod-kids-7",
    "nameEn": "Boys Superhero Printed Pyjama Set",
    "nameBn": "বয়েজ সুপারহিরো প্রিন্টেড পায়জামা সেট",
    "descriptionEn": "100% pure combed cotton 2-piece lounge sleepwear set with fun cartoon superhero prints.",
    "descriptionBn": "শিশুদের নাইটওয়্যার ও বিশ্রামের জন্য ১০০% সুতি ২-পিস স্লিপওয়্যার সেট।",
    "category": "cat_kids",
    "priceUSD": 24.99,
    "discountPercent": 15,
    "images": [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&q=80"
    ],
    "sizes": [
      "3-4Y",
      "4-5Y",
      "5-6Y"
    ],
    "colors": [
      {
        "nameEn": "Sky Blue",
        "nameBn": "আকাশী",
        "hex": "#87CEEB"
      }
    ],
    "rating": 4.7,
    "reviewsCount": 62,
    "featuresEn": [
      "100% Combed cotton",
      "Elastic waistband",
      "Vibrant prints"
    ],
    "featuresBn": [
      "১০০% নরম সুতি",
      "ইলাস্টিক কোমর",
      "সুন্দর প্রিন্ট"
    ]
  },
  {
    "id": "prod-kids-8",
    "nameEn": "Interactive Musical Piano Keyboard Toy",
    "nameBn": "ইন্টারেক্টিভ মিউজিক্যাল পিয়ানো কিবোর্ড টয়",
    "descriptionEn": "Fun electronic mini piano with animal sound effects, rhythm lights and demo songs.",
    "descriptionBn": "শিশুদের সুর ও গান শেখার জন্য লাইটিং মিউজিক্যাল পিয়ানো খেলনা।",
    "category": "cat_kids",
    "priceUSD": 29.99,
    "discountPercent": 30,
    "images": [
      "https://images.unsplash.com/photo-1587654562363-60e2d556a310?w=500&q=80"
    ],
    "sizes": [
      "One Size"
    ],
    "colors": [
      {
        "nameEn": "Bright Yellow",
        "nameBn": "হলুদ",
        "hex": "#FFD700"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 108,
    "featuresEn": [
      "24 Key piano",
      "Animal sounds",
      "Safe rounded ABS"
    ],
    "featuresBn": [
      "২৪ কী পিয়ানো",
      "প্রাণীর ডাক সাউন্ড",
      "নিরাপদ প্লাস্টিক"
    ]
  },
  {
    "id": "prod-kids-9",
    "nameEn": "Baby Soft Cotton Bibs & Onesie Pack",
    "nameBn": "বেবি সফট কটন বিবস ও ওয়ানসি প্যাক",
    "descriptionEn": "Pack of 3 organic newborn baby bodysuit onesies with snap button crotch closure.",
    "descriptionBn": "নবজাতক শিশুদের জন্য ৩-পিস আর্গানিক কটন বডিস্যুট সেট।",
    "category": "cat_kids",
    "priceUSD": 19.99,
    "discountPercent": 10,
    "images": [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&q=80"
    ],
    "sizes": [
      "0-3M",
      "3-6M",
      "6-12M"
    ],
    "colors": [
      {
        "nameEn": "Pastel Mint",
        "nameBn": "মিন্ট সবুজ",
        "hex": "#98FF98"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 84,
    "featuresEn": [
      "Organic cotton",
      "Easy snap lock",
      "Hypoallergenic"
    ],
    "featuresBn": [
      "অর্গানিক কটন",
      "স্ন্যাপ বাটন",
      "ত্বকের জন্য নিরাপদ"
    ]
  },
  {
    "id": "prod-kids-10",
    "nameEn": "Wooden Montessori Educational Puzzle Set",
    "nameBn": "উডেন মন্টেসরি এডুকেশনাল পাজল সেট",
    "descriptionEn": "Natural wood alphabet and number sorting peg puzzle board for early toddler brain development.",
    "descriptionBn": "বাচ্চাদের অক্ষর ও সংখ্যা চেনার প্রাকৃতিক কাঠের মন্টেসরি পাজল বোর্ড।",
    "category": "cat_kids",
    "priceUSD": 22.99,
    "discountPercent": 15,
    "images": [
      "https://images.unsplash.com/photo-1587654562363-60e2d556a310?w=500&q=80"
    ],
    "sizes": [
      "One Size"
    ],
    "colors": [
      {
        "nameEn": "Natural Wood",
        "nameBn": "কাঠের শেড",
        "hex": "#DEB887"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 130,
    "featuresEn": [
      "Non-toxic paint",
      "Natural solid wood",
      "Smooth edges"
    ],
    "featuresBn": [
      "নিরাপদ রং",
      "প্রাকৃতিক কাঠ",
      "মসৃণ ধার"
    ]
  },
  {
    "id": "prod-kids-11",
    "nameEn": "Kids Waterproof Outdoor Raincoat Set",
    "nameBn": "কিডস ওয়াটারপ্রুফ আউটডোর রেইনকোট সেট",
    "descriptionEn": "Fun cartoon hooded raincoat jumpsuit with clear visor mask and school bag cover extension.",
    "descriptionBn": "স্কুল ও বাইরে চলাচলের জন্য হুডি সহ ওয়াটারপ্রুফ কিউই রেইনকোট।",
    "category": "cat_kids",
    "priceUSD": 27.99,
    "discountPercent": 20,
    "images": [
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=500&q=80"
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "colors": [
      {
        "nameEn": "Dino Green",
        "nameBn": "সবুজ",
        "hex": "#32CD32"
      }
    ],
    "rating": 4.7,
    "reviewsCount": 56,
    "featuresEn": [
      "Waterproof PVC",
      "Clear hood visor",
      "Bag space"
    ],
    "featuresBn": [
      "ওয়াটারপ্রুফ বডি",
      "স্বচ্ছ হুডি ক্যাপ",
      "ব্যাগ কভার স্থান"
    ]
  },
  {
    "id": "prod-kids-12",
    "nameEn": "Soft Stuffed Unicorn Animal Plush",
    "nameBn": "সফট স্টাফড ইউনিকর্ন অ্যানিমেল প্লাশ",
    "descriptionEn": "Super soft rainbow unicorn stuffed animal plush toy with sparkling horn and wings.",
    "descriptionBn": "শিশুদের জড়িয়ে ধরার অত্যন্ত নরম ও কিউট রেইনবো ইউনিকর্ন সফট টয়।",
    "category": "cat_kids",
    "priceUSD": 18.99,
    "discountPercent": 25,
    "images": [
      "https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=500&q=80"
    ],
    "sizes": [
      "40cm"
    ],
    "colors": [
      {
        "nameEn": "Rainbow White",
        "nameBn": "রেইনবো",
        "hex": "#FFF0F5"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 125,
    "featuresEn": [
      "Ultra plush coat",
      "Sparkle horn",
      "Machine washable"
    ],
    "featuresBn": [
      "নরম সুতা",
      "জকজকে শিং",
      "ধোয়া যায়"
    ]
  },
  {
    "id": "prod-watch-1",
    "nameEn": "Aero-Luxury Chronograph Watch",
    "nameBn": "অ্যারো-লাক্সারি ক্রোনোগ্রাফ ঘড়ি",
    "descriptionEn": "Scratch-resistant sapphire crystal glass, detailed sub-dials, automatic movement.",
    "descriptionBn": "স্ক্র্যাচ-প্রতিরোধী স্যাফায়ার ক্রিস্টাল গ্লাস এবং প্রিমিয়াম ডায়াল ডিজাইন।",
    "category": "cat_watches",
    "priceUSD": 149.99,
    "discountPercent": 35,
    "images": [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80"
    ],
    "sizes": [
      "One Size"
    ],
    "colors": [
      {
        "nameEn": "Gold",
        "nameBn": "সোনা",
        "hex": "#D4AF37"
      }
    ],
    "rating": 4.6,
    "reviewsCount": 84,
    "featuresEn": [
      "Leather strap",
      "Sub-dials",
      "Water resistant"
    ],
    "featuresBn": [
      "চামড়ার বেল্ট",
      "সাব-ডায়াল",
      "ওয়াটার রেজিস্ট্যান্ট"
    ]
  },
  {
    "id": "prod-watch-2",
    "nameEn": "Minimalist Silver Steel Watch",
    "nameBn": "মিনিমালিস্ট সিলভার স্টিল ঘড়ি",
    "descriptionEn": "Ultra-slim polished steel bezel, white analog face, and durable mesh band.",
    "descriptionBn": "আল্ট্রা-স্লিম স্টিল কেসিং এবং সুন্দর সিলভার চেইন ডায়াল ঘড়ি।",
    "category": "cat_watches",
    "priceUSD": 79.99,
    "discountPercent": 20,
    "images": [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&q=80"
    ],
    "sizes": [
      "One Size"
    ],
    "colors": [
      {
        "nameEn": "Silver",
        "nameBn": "সিলভার",
        "hex": "#C0C0C0"
      }
    ],
    "rating": 4.7,
    "reviewsCount": 92,
    "featuresEn": [
      "Stainless steel",
      "Quartz movement",
      "Mesh band"
    ],
    "featuresBn": [
      "স্টেইনলেস স্টিল",
      "কোয়ার্টজ ডায়াল",
      "সিলভার বেল্ট"
    ]
  },
  {
    "id": "prod-watch-3",
    "nameEn": "Polarized Aviator Sunglasses",
    "nameBn": "পোলাইরাইজড এভিয়েটর সানগ্লাস",
    "descriptionEn": "Classic metal frame aviator sunglasses with UV400 polarized anti-glare protection.",
    "descriptionBn": "ইউভি৪০০ সানপ্রটেকশন ও পোলাইরাইজড লেন্সের ক্লাসিক মেটাল এভিয়েটর সানগ্লাস।",
    "category": "cat_watches",
    "priceUSD": 34.99,
    "discountPercent": 25,
    "images": [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80"
    ],
    "sizes": [
      "One Size"
    ],
    "colors": [
      {
        "nameEn": "Golden Frame",
        "nameBn": "গোল্ডেন ফ্রেম",
        "hex": "#FFD700"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 130,
    "featuresEn": [
      "UV400 protection",
      "Metal frame",
      "Polarized lens"
    ],
    "featuresBn": [
      "ইউভি৪০০ প্রোটেকশন",
      "মেটাল ফ্রেম",
      "পোলাইরাইজড লেন্স"
    ]
  },
  {
    "id": "prod-watch-4",
    "nameEn": "Luxury Crystal Bracelet Bangle Set",
    "nameBn": "লাক্সারি ক্রিস্টাল ব্রেসলেট চুড়ি সেট",
    "descriptionEn": "Sparkling crystal embellished gold-plated cuff bracelet set for fashion wear.",
    "descriptionBn": "ফ্যাশনেবল পার্টির জন্য আকর্ষণীয় ক্রিস্টাল পাথর বসানো গোল্ড-প্লেটেড ব্রেসলেট সেট।",
    "category": "cat_watches",
    "priceUSD": 29.99,
    "discountPercent": 30,
    "images": [
      "https://images.unsplash.com/photo-1611591475281-8d2813298836?w=500&q=80"
    ],
    "sizes": [
      "One Size"
    ],
    "colors": [
      {
        "nameEn": "Rose Gold",
        "nameBn": "রোজ গোল্ড",
        "hex": "#B76E79"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 77,
    "featuresEn": [
      "Gold plated",
      "Cubic zirconia",
      "Adjustable cuff"
    ],
    "featuresBn": [
      "গোল্ড কোটিং",
      "ক্রিস্টাল পাথর",
      "অ্যাডজাস্টেবল"
    ]
  },
  {
    "id": "prod-watch-5",
    "nameEn": "Skeleton Automatic Mechanical Watch",
    "nameBn": "স্কেলেটন অটোমেটিক মেকানিক্যাল ওয়াচ",
    "descriptionEn": "Self-winding mechanical automatic movement with transparent gear dial view.",
    "descriptionBn": "স্বয়ংক্রিয় ব্যাটারি-বিহীন মেকানিক্যাল গিয়ার ট্রান্সপারেন্ট ডায়াল ওয়াচ।",
    "category": "cat_watches",
    "priceUSD": 189.99,
    "discountPercent": 40,
    "images": [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80"
    ],
    "sizes": [
      "One Size"
    ],
    "colors": [
      {
        "nameEn": "Gunmetal Silver",
        "nameBn": "গামমেটাল",
        "hex": "#4A4A4A"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 110,
    "featuresEn": [
      "Self-winding gear",
      "Sapphire glass",
      "Leather strap"
    ],
    "featuresBn": [
      "অটো মেকানিক্যাল",
      "স্যাফায়ার গ্লাস",
      "চামড়ার বেল্ট"
    ]
  },
  {
    "id": "prod-watch-6",
    "nameEn": "Rose Gold Diamond Quartz Ladies Watch",
    "nameBn": "রোজ গোল্ড ডায়মন্ড কোয়ার্টজ লেডিস ওয়াচ",
    "descriptionEn": "Sleek oval dial casing decorated with cubic zirconia diamonds and slim mesh band.",
    "descriptionBn": "মহিলাদের জন্য ডায়মন্ড পাথর বসানো লাক্সারি রোজ গোল্ড কোয়ার্টজ ওয়াচ।",
    "category": "cat_watches",
    "priceUSD": 99.99,
    "discountPercent": 30,
    "images": [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&q=80"
    ],
    "sizes": [
      "One Size"
    ],
    "colors": [
      {
        "nameEn": "Rose Gold",
        "nameBn": "রোজ গোল্ড",
        "hex": "#B76E79"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 86,
    "featuresEn": [
      "Diamond accents",
      "Japanese quartz",
      "Mesh bracelet"
    ],
    "featuresBn": [
      "ডায়মন্ড পাথর",
      "জাপানি মেকানিজম",
      "স্লিম বেল্ট"
    ]
  },
  {
    "id": "prod-watch-7",
    "nameEn": "Classic Polarized Wayfarer Sunglasses",
    "nameBn": "ক্লাসিক পোলাইরাইজড ওয়েফেয়ারার সানগ্লাস",
    "descriptionEn": "Iconic wayfarer shape black acetate frame sunglasses with polarized UV400 lenses.",
    "descriptionBn": "ইউভি৪০০ সানপ্রটেকশন কভারের ক্লাসিক স্টাইলিশ ওয়েফেয়ারার সানগ্লাস।",
    "category": "cat_watches",
    "priceUSD": 39.99,
    "discountPercent": 20,
    "images": [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80"
    ],
    "sizes": [
      "One Size"
    ],
    "colors": [
      {
        "nameEn": "Black Gloss",
        "nameBn": "কালো",
        "hex": "#0A0A0A"
      }
    ],
    "rating": 4.7,
    "reviewsCount": 145,
    "featuresEn": [
      "Polarized lens",
      "UV400 filter",
      "Acetate frame"
    ],
    "featuresBn": [
      "পোলাইরাইজড",
      "ইউভি৪০০ সানপ্রটেকশন",
      "টেকসই ফ্রেম"
    ]
  },
  {
    "id": "prod-watch-8",
    "nameEn": "Genuine Leather Bifold Wallet with RFID",
    "nameBn": "জেনুইন লেদার বাইফোল্ড ওয়ালেট উইথ RFID",
    "descriptionEn": "Full grain vintage leather slim wallet with RFID blocking card slot protection.",
    "descriptionBn": "কার্ড চুরি প্রতিরোধে RFID ব্লকিং টেকনোলজির খাঁটি চামড়ার বাইফোল্ড ওয়ালেট।",
    "category": "cat_watches",
    "priceUSD": 29.99,
    "discountPercent": 25,
    "images": [
      "https://images.unsplash.com/photo-1611591475281-8d2813298836?w=500&q=80"
    ],
    "sizes": [
      "One Size"
    ],
    "colors": [
      {
        "nameEn": "Vintage Tan",
        "nameBn": "বাদামী",
        "hex": "#8B4513"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 160,
    "featuresEn": [
      "Full grain leather",
      "RFID blocking",
      "8 Card slots"
    ],
    "featuresBn": [
      "খাঁটি চামড়া",
      "RFID ব্লকিং",
      "৮টি কার্ড স্লট"
    ]
  },
  {
    "id": "prod-watch-9",
    "nameEn": "Stainless Steel Cuban Link Chain Bracelet",
    "nameBn": "স্টেইনলেস স্টিল কিউবান লিঙ্ক চেইন ব্রেসলেট",
    "descriptionEn": "Heavyweight 8mm Cuban curb chain bracelet in polished stainless steel.",
    "descriptionBn": "পুরুষদের ফ্যাশনেবল ৮ মিমি ভারি স্টেইনলেস স্টিল চেইন ব্রেসলেট।",
    "category": "cat_watches",
    "priceUSD": 24.99,
    "discountPercent": 15,
    "images": [
      "https://images.unsplash.com/photo-1611591475281-8d2813298836?w=500&q=80"
    ],
    "sizes": [
      "8 inch"
    ],
    "colors": [
      {
        "nameEn": "Polished Silver",
        "nameBn": "সিলভার",
        "hex": "#C0C0C0"
      }
    ],
    "rating": 4.6,
    "reviewsCount": 72,
    "featuresEn": [
      "316L Stainless steel",
      "Lobster clasp",
      "Non-fade finish"
    ],
    "featuresBn": [
      "স্টেইনলেস স্টিল",
      "মজবুত লক",
      "রং ওঠে না"
    ]
  },
  {
    "id": "prod-watch-10",
    "nameEn": "Minimalist Leather Strap Unisex Watch",
    "nameBn": "মিনিমালিস্ট লেদার স্ট্র্যাপ ইউনিসেক্স ওয়াচ",
    "descriptionEn": "Clean white dial watch with brown genuine leather strap and slim gold bezel.",
    "descriptionBn": "সাদামাটা ও এলিগেন্ট লুকের চামড়ার স্ট্র্যাপ ইউনিসেক্স রিড ওয়াচ।",
    "category": "cat_watches",
    "priceUSD": 69.99,
    "discountPercent": 20,
    "images": [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&q=80"
    ],
    "sizes": [
      "One Size"
    ],
    "colors": [
      {
        "nameEn": "Brown Leather",
        "nameBn": "বাদামী",
        "hex": "#A0522D"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 98,
    "featuresEn": [
      "Slim bezel",
      "Genuine leather strap",
      "Quartz movement"
    ],
    "featuresBn": [
      "স্লিম বেজেল",
      "চামড়ার বেল্ট",
      "কোয়ার্টজ ডায়াল"
    ]
  },
  {
    "id": "prod-watch-11",
    "nameEn": "Luxury Sterling Silver Pendant Necklace",
    "nameBn": "লাক্সারি স্টার্লিং সিলভার পেন্ডেন্ট নেকলেস",
    "descriptionEn": "925 sterling silver chain necklace featuring sparkling solitaire crystal pendant.",
    "descriptionBn": "৯২৫ স্টার্লিং রূপার চেইন এবং ক্রিস্টাল পাথর বসানো আকর্ষণীয় পেন্ডেন্ট।",
    "category": "cat_watches",
    "priceUSD": 49.99,
    "discountPercent": 35,
    "images": [
      "https://images.unsplash.com/photo-1611591475281-8d2813298836?w=500&q=80"
    ],
    "sizes": [
      "18 inch"
    ],
    "colors": [
      {
        "nameEn": "Silver White",
        "nameBn": "সিলভার",
        "hex": "#E6E6FA"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 114,
    "featuresEn": [
      "925 Sterling silver",
      "Zirconia stone",
      "Gift box included"
    ],
    "featuresBn": [
      "৯২৫ রূপা",
      "ক্রিস্টাল পাথর",
      "গিফট বক্সসহ"
    ]
  },
  {
    "id": "prod-watch-12",
    "nameEn": "Vintage Aviator Metal Frame Glasses",
    "nameBn": "ভিন্টেজ এভিয়েটর মেটাল ফ্রেম চশমা",
    "descriptionEn": "Anti-blue light blocking glasses with vintage gold thin wire aviator frame.",
    "descriptionBn": "কম্পিউটার ও মোবাইল ব্যবহারের জন্য অ্যান্টি-ব্লু লাইট মেটাল এভিয়েটর ফ্রেম।",
    "category": "cat_watches",
    "priceUSD": 32.99,
    "discountPercent": 20,
    "images": [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80"
    ],
    "sizes": [
      "One Size"
    ],
    "colors": [
      {
        "nameEn": "Metallic Gold",
        "nameBn": "গোল্ডেন",
        "hex": "#FFD700"
      }
    ],
    "rating": 4.7,
    "reviewsCount": 88,
    "featuresEn": [
      "Blue light blocking",
      "Lightweight wire",
      "Comfort nose pads"
    ],
    "featuresBn": [
      "ব্লু লাইট ফিল্টার",
      "মেটাল বডি",
      "আরামদায়ক নোজ প্যাড"
    ]
  },
  {
    "id": "prod-home-1",
    "nameEn": "Nordic Minimalist Ceramic Vase",
    "nameBn": "নরডিক মিনিমালিস্ট সিরামিক ফ্লাওয়ার ভাস",
    "descriptionEn": "Matte textured ceramic flower vase for elegant living room home decor.",
    "descriptionBn": "ঘরের ড্রয়িং রুম বা টেবিলের সৌন্দর্য বর্ধনে আধুনিক নরডিক সিরামিক ফুলদানি।",
    "category": "cat_home",
    "priceUSD": 34.99,
    "discountPercent": 20,
    "images": [
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=500&q=80"
    ],
    "sizes": [
      "Medium"
    ],
    "colors": [
      {
        "nameEn": "Ivory White",
        "nameBn": "সাদা",
        "hex": "#F5F5F5"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 65,
    "featuresEn": [
      "Matte ceramic",
      "Nordic design",
      "Hand-crafted"
    ],
    "featuresBn": [
      "ম্যাট সিরামিক",
      "নরডিক ডিজাইন",
      "হ্যান্ড ক্রাফটেড"
    ]
  },
  {
    "id": "prod-home-2",
    "nameEn": "Soft Microfiber Bed Sheet Set",
    "nameBn": "সফট মাইক্রোফাইবার বেড শিট সেট",
    "descriptionEn": "Includes 1 king bedsheet and 2 pillow covers. Super soft wrinkle-free fabric.",
    "descriptionBn": "১টি কিং সাইজ চাদর ও ২টি বালিশের কভারসহ অতিরিক্ত নরম ও আরামদায়ক বেড শিট সেট।",
    "category": "cat_home",
    "priceUSD": 44.99,
    "discountPercent": 25,
    "images": [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&q=80"
    ],
    "sizes": [
      "King Size"
    ],
    "colors": [
      {
        "nameEn": "Slate Grey",
        "nameBn": "ধূসর",
        "hex": "#708090"
      }
    ],
    "rating": 4.7,
    "reviewsCount": 94,
    "featuresEn": [
      "Wrinkle resistant",
      "Breathable",
      "Easy machine wash"
    ],
    "featuresBn": [
      "কুঁচকানো মুক্ত",
      "বাতাস চলাচলের উপযোগী",
      "সহজে ধোয়া যায়"
    ]
  },
  {
    "id": "prod-home-3",
    "nameEn": "Aromatic Essential Oil Diffuser",
    "nameBn": "অ্যারোমেটিক এসেনশিয়াল ওয়েল ডিফিউজার",
    "descriptionEn": "Ultrasonic mist humidifier with 7 LED color lights for soothing home ambiance.",
    "descriptionBn": "ঘরের বাতাস সুবাসিত ও সতেজ রাখতে মেজাজ শান্তকারী এলইডি লাইটসহ অ্যারোমা ডিফিউজার।",
    "category": "cat_home",
    "priceUSD": 29.99,
    "discountPercent": 15,
    "images": [
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&q=80"
    ],
    "sizes": [
      "300ml"
    ],
    "colors": [
      {
        "nameEn": "Wood Grain",
        "nameBn": "কাঠের শেড",
        "hex": "#8B4513"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 140,
    "featuresEn": [
      "Ultrasonic mist",
      "LED 7 colors",
      "Auto shut-off"
    ],
    "featuresBn": [
      "আল্ট্রাসনিক স্প্রে",
      "৭ রঙের আলো",
      "স্বয়ংক্রিয় বন্ধ"
    ]
  },
  {
    "id": "prod-home-4",
    "nameEn": "Decorative Velvet Throw Pillow Covers",
    "nameBn": "ডেকোরেটিভ ভেলভেট থ্রো পিল কভার সেট",
    "descriptionEn": "Pack of 2 soft velvet cushion covers with invisible zipper for couch and sofa.",
    "descriptionBn": "সোফা বা বিছানার সৌন্দর্য বাড়াতে ২টি ভেলভেট নরম কুশন কভার সেট।",
    "category": "cat_home",
    "priceUSD": 19.99,
    "discountPercent": 30,
    "images": [
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500&q=80"
    ],
    "sizes": [
      "45x45cm"
    ],
    "colors": [
      {
        "nameEn": "Emerald Green",
        "nameBn": "গাঢ় সবুজ",
        "hex": "#50C878"
      }
    ],
    "rating": 4.6,
    "reviewsCount": 51,
    "featuresEn": [
      "Soft velvet",
      "Hidden zipper",
      "Machine washable"
    ],
    "featuresBn": [
      "নরম ভেলভেট",
      "লুকানো জিপার",
      "ওয়াশেবল"
    ]
  },
  {
    "id": "prod-home-5",
    "nameEn": "Ergonomic Memory Foam Cervical Pillow",
    "nameBn": "এরগোনোমিক মেমোরি ফোম সার্ভিক্যাল বালিশ",
    "descriptionEn": "Contoured orthopaedic neck support memory foam sleeping pillow with washable cover.",
    "descriptionBn": "ঘাড় ও মেরুদণ্ডের ব্যথামুক্ত ঘুমের জন্য এরগোনোমিক মেমোরি ফোম সাপোর্ট বালিশ।",
    "category": "cat_home",
    "priceUSD": 39.99,
    "discountPercent": 20,
    "images": [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&q=80"
    ],
    "sizes": [
      "Standard"
    ],
    "colors": [
      {
        "nameEn": "Pure White",
        "nameBn": "সাদা",
        "hex": "#FFFFFF"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 115,
    "featuresEn": [
      "Contoured shape",
      "Memory foam core",
      "Breathable cover"
    ],
    "featuresBn": [
      "বিশেষ শেপ",
      "মেমোরি ফোম",
      "ধোয়া যায় এমন কভার"
    ]
  },
  {
    "id": "prod-home-6",
    "nameEn": "Smart Sensor LED Touch Desk Lamp",
    "nameBn": "স্মার্ট সেন্সর এলইডি টাচ ডেস্ক ল্যাম্প",
    "descriptionEn": "3-level dimmable touch sensor eye-care LED reading table lamp with wireless charger base.",
    "descriptionBn": "চোখের সুরক্ষায় ৩-লেভেল ডিমার লাইট ও ফোন চার্জিং বেসযুক্ত এলইডি টেবিল ল্যাম্প।",
    "category": "cat_home",
    "priceUSD": 27.99,
    "discountPercent": 25,
    "images": [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80"
    ],
    "sizes": [
      "One Size"
    ],
    "colors": [
      {
        "nameEn": "Modern White",
        "nameBn": "সাদা",
        "hex": "#F8F8FF"
      }
    ],
    "rating": 4.7,
    "reviewsCount": 82,
    "featuresEn": [
      "Touch dimmable",
      "Eye protection LED",
      "Wireless charging pad"
    ],
    "featuresBn": [
      "টাচ ডিমার",
      "আই-কেয়ার লাইট",
      "ওয়ারলেস চার্জিং"
    ]
  },
  {
    "id": "prod-home-7",
    "nameEn": "Boho Woven Tapestry Wall Hanging Decor",
    "nameBn": "বোহো ওভেন ট্যাপেস্ট্রি ওয়াল হ্যাঙ্গিং ডেকোর",
    "descriptionEn": "Handmade macrame woven cotton yarn tapestry wall art for bedroom and living space.",
    "descriptionBn": "ঘরের দেয়াল সাজাতে হাতে বোনা কটন সুতার সুন্দর বোহো হ্যাঙ্গিং আর্ট।",
    "category": "cat_home",
    "priceUSD": 24.99,
    "discountPercent": 15,
    "images": [
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=500&q=80"
    ],
    "sizes": [
      "Large"
    ],
    "colors": [
      {
        "nameEn": "Natural Cream",
        "nameBn": "ক্রিম",
        "hex": "#FFFDD0"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 64,
    "featuresEn": [
      "100% Cotton cord",
      "Handmade macrame",
      "Wood rod included"
    ],
    "featuresBn": [
      "১০০% সুতি ডোর",
      "হাতে বোনা",
      "কাঠের ডাঁটাসহ"
    ]
  },
  {
    "id": "prod-home-8",
    "nameEn": "Stainless Steel Insulated Coffee Mug Set",
    "nameBn": "স্টেইনলেস স্টিল ইনসুলেটেড কফি মগ সেট",
    "descriptionEn": "Pack of 2 double-wall vacuum insulated travel coffee mugs with leakproof lids.",
    "descriptionBn": "চা ও কফি দীর্ঘক্ষণ গরম ও ঠান্ডা রাখতে ২টি স্টেইনলেস স্টিল ইনসুলেটেড মগ।",
    "category": "cat_home",
    "priceUSD": 21.99,
    "discountPercent": 30,
    "images": [
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&q=80"
    ],
    "sizes": [
      "350ml"
    ],
    "colors": [
      {
        "nameEn": "Matte Black",
        "nameBn": "কালো",
        "hex": "#222222"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 120,
    "featuresEn": [
      "Double-wall vacuum",
      "6hr Hot / 12hr Cold",
      "BPA Free lid"
    ],
    "featuresBn": [
      "ভ্যাকিউম ইনসুলেটেড",
      "৬ ঘণ্টা গরম ধরে",
      "লিকপ্রুফ"
    ]
  },
  {
    "id": "prod-home-9",
    "nameEn": "Super Absorbent Microfiber Bath Towel Set",
    "nameBn": "সুপার অ্যাবসর্বেন্ট মাইক্রোফাইবার বাথ টাওয়েল সেট",
    "descriptionEn": "Pack of 2 luxury quick-dry plush microfiber bath towels for bathroom and gym.",
    "descriptionBn": "দ্রুত পানি শোষণে সক্ষম ২টি নরম মাইক্রোফাইবার বাথ টাওয়েল সেট।",
    "category": "cat_home",
    "priceUSD": 29.99,
    "discountPercent": 20,
    "images": [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&q=80"
    ],
    "sizes": [
      "70x140cm"
    ],
    "colors": [
      {
        "nameEn": "Ocean Navy",
        "nameBn": "ব্লু",
        "hex": "#000080"
      }
    ],
    "rating": 4.7,
    "reviewsCount": 96,
    "featuresEn": [
      "Quick dry fabric",
      "Lint-free plush",
      "High absorbency"
    ],
    "featuresBn": [
      "দ্রুত শুকায়",
      "নরম ফাইবার",
      "পানি শোষণ ক্ষমতা"
    ]
  },
  {
    "id": "prod-home-10",
    "nameEn": "Automatic Electric Wine Opener Gift Set",
    "nameBn": "অটোমেটিক ইলেকট্রিক ওয়াইন ওপেনার গিফট সেট",
    "descriptionEn": "Rechargeable electric bottle corkscrew opener with foil cutter and vacuum stopper.",
    "descriptionBn": "সহজে বোতলের কর্ক খুলতে রিচার্জেবল অটোমেটিক ইলেকট্রিক ওপেনার।",
    "category": "cat_home",
    "priceUSD": 34.99,
    "discountPercent": 35,
    "images": [
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500&q=80"
    ],
    "sizes": [
      "Set of 4"
    ],
    "colors": [
      {
        "nameEn": "Stainless Silver",
        "nameBn": "সিলভার",
        "hex": "#DCDCDC"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 75,
    "featuresEn": [
      "One-touch opening",
      "USB Rechargeable",
      "Foil cutter base"
    ],
    "featuresBn": [
      "এক স্পর্শে ওপেন",
      "ইউএসবি রিচার্জেবল",
      "কাটারসহ"
    ]
  },
  {
    "id": "prod-home-11",
    "nameEn": "Modern Geometric Pattern Living Room Rug",
    "nameBn": "মডার্ন জিওমেট্রিক প্যাটার্ন লিভিং রুম রাগ",
    "descriptionEn": "Non-slip washable soft area rug for living room with modern minimalist abstract design.",
    "descriptionBn": "লিভিং রুম বা বেডরুমের জন্য আধুনিক ডিজাইনকৃত নন-স্লিপ নরম রাগ কভার।",
    "category": "cat_home",
    "priceUSD": 79.99,
    "discountPercent": 40,
    "images": [
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=500&q=80"
    ],
    "sizes": [
      "120x160cm"
    ],
    "colors": [
      {
        "nameEn": "Grey Geometric",
        "nameBn": "ধূসর",
        "hex": "#808080"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 135,
    "featuresEn": [
      "Soft velvet touch",
      "Non-slip backing",
      "Machine washable"
    ],
    "featuresBn": [
      "নরম ভেলভেট",
      "পিছলে না যাওয়া ব্যাক",
      "ধোয়া যায়"
    ]
  },
  {
    "id": "prod-home-12",
    "nameEn": "Handmade Scented Soy Wax Candles Pack",
    "nameBn": "হ্যান্ডমেড সেন্টেড সয় ওয়াক্স ক্যান্ডেলস প্যাক",
    "descriptionEn": "Pack of 4 natural aromatherapy lavender and vanilla scented soy candles in glass jar.",
    "descriptionBn": "ঘরের পরিবেশ সুবাসিত ও সতেজ রাখতে ৪টি অ্যারোমা সয় ওয়াক্স ক্যান্ডেল সেট।",
    "category": "cat_home",
    "priceUSD": 19.99,
    "discountPercent": 15,
    "images": [
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&q=80"
    ],
    "sizes": [
      "Pack of 4"
    ],
    "colors": [
      {
        "nameEn": "Lavender Vanilla",
        "nameBn": "ল্যাভেন্ডার",
        "hex": "#E6E6FA"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 108,
    "featuresEn": [
      "100% Natural soy wax",
      "30hr burn time",
      "Essential oils"
    ],
    "featuresBn": [
      "প্রাকৃতিক সয় ওয়াক্স",
      "৩০ ঘণ্টা জ্বলে",
      "এসেনশিয়াল ওয়েল"
    ]
  },
  {
    "id": "prod-bag-1",
    "nameEn": "Luxury Leather Women Handbag",
    "nameBn": "লাক্সারি লেদার উইমেন হ্যান্ডব্যাগ",
    "descriptionEn": "Crafted from genuine cowhide leather with spacious multi-compartment interior.",
    "descriptionBn": "খাঁটি চামড়া ও একাধিক পকেটসহ মহিলাদের লাক্সারি হ্যান্ডব্যাগ।",
    "category": "cat_bags",
    "priceUSD": 89.99,
    "discountPercent": 35,
    "images": [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&q=80"
    ],
    "sizes": [
      "Medium"
    ],
    "colors": [
      {
        "nameEn": "Classic Black",
        "nameBn": "কালো",
        "hex": "#1C1C1C"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 120,
    "featuresEn": [
      "Genuine leather",
      "Golden hardware",
      "Shoulder strap"
    ],
    "featuresBn": [
      "খাঁটি চামড়া",
      "গোল্ডেন ধাতব লক",
      "কাঁধের স্ট্র্যাপ"
    ]
  },
  {
    "id": "prod-bag-2",
    "nameEn": "Waterproof Travel Backpack with Laptop Sleeve",
    "nameBn": "ওয়াটারপ্রুফ ট্রাভেল ব্যাকপ্যাক উইথ ল্যাপটপ স্লিভ",
    "descriptionEn": "Durable Oxford cloth backpack with 15.6-inch padded laptop pocket and USB charging port.",
    "descriptionBn": "১৫.৬ ইঞ্চি ল্যাপটপ পকেট ও ইউএসবি পোর্টসহ টেকসই ওয়াটারপ্রুফ ভ্রমণ ব্যাকপ্যাক।",
    "category": "cat_bags",
    "priceUSD": 49.99,
    "discountPercent": 25,
    "images": [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80"
    ],
    "sizes": [
      "Large"
    ],
    "colors": [
      {
        "nameEn": "Charcoal Grey",
        "nameBn": "ধূসর",
        "hex": "#333333"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 175,
    "featuresEn": [
      "Waterproof Oxford",
      "15.6 in Laptop",
      "USB port"
    ],
    "featuresBn": [
      "ওয়াটারপ্রুফ বডি",
      "ল্যাপটপ চেম্বার",
      "ইউএসবি পোর্ট"
    ]
  },
  {
    "id": "prod-bag-3",
    "nameEn": "Minimalist Canvas Crossbody Shoulder Bag",
    "nameBn": "মিনিমালিস্ট ক্যানভাস ক্রসবডি শোল্ডার ব্যাগ",
    "descriptionEn": "Lightweight casual canvas messenger bag for daily college or shopping trips.",
    "descriptionBn": "দৈনন্দিন ব্যবহার বা কলেজের জন্য হালকা সুতি ক্যানভাস শোল্ডার ব্যাগ।",
    "category": "cat_bags",
    "priceUSD": 24.99,
    "discountPercent": 20,
    "images": [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&q=80"
    ],
    "sizes": [
      "One Size"
    ],
    "colors": [
      {
        "nameEn": "Cream White",
        "nameBn": "ক্রিম সাদা",
        "hex": "#FFFDD0"
      }
    ],
    "rating": 4.6,
    "reviewsCount": 68,
    "featuresEn": [
      "Cotton canvas",
      "Adjustable strap",
      "Zip closure"
    ],
    "featuresBn": [
      "ক্যানভাস সুতি",
      "অ্যাডজাস্টেবল বেল্ট",
      "জিপার আটকানো"
    ]
  },
  {
    "id": "prod-bag-4",
    "nameEn": "Vintage Leather Travel Duffel Bag",
    "nameBn": "ভিন্টেজ লেদার ট্রাভেল ডাফেল ব্যাগ",
    "descriptionEn": "Spacious weekender duffel bag made of rustic distressed leather.",
    "descriptionBn": "ভ্রমণ বা জিমের জন্য বিশাল ধারণক্ষমতাসম্পন্ন ক্লাসিক লেদার ডাফেল ব্যাগ।",
    "category": "cat_bags",
    "priceUSD": 109.99,
    "discountPercent": 30,
    "images": [
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=500&q=80"
    ],
    "sizes": [
      "Large"
    ],
    "colors": [
      {
        "nameEn": "Rustic Brown",
        "nameBn": "বাদামী",
        "hex": "#8B4513"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 82,
    "featuresEn": [
      "Full grain leather",
      "Shoe compartment",
      "Durable handles"
    ],
    "featuresBn": [
      "খাঁটি চামড়া",
      "জুতো রাখার পকেট",
      "মজবুত হ্যান্ডেল"
    ]
  },
  {
    "id": "prod-bag-5",
    "nameEn": "Leather Business Laptop Briefcase",
    "nameBn": "লেদার বিজনেস ল্যাপটপ ব্রিফকেস",
    "descriptionEn": "Professional genuine leather messenger briefcase with padded 15.6 in laptop sleeve.",
    "descriptionBn": "অফিসিয়াল কাজের জন্য ল্যাপটপ চেম্বারসহ লেদার বিজনেস ব্রিফকেস।",
    "category": "cat_bags",
    "priceUSD": 99.99,
    "discountPercent": 30,
    "images": [
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=500&q=80"
    ],
    "sizes": [
      "15.6 inch"
    ],
    "colors": [
      {
        "nameEn": "Espresso Brown",
        "nameBn": "বাদামী",
        "hex": "#4A2E2B"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 110,
    "featuresEn": [
      "Genuine cowhide",
      "15.6 in laptop sleeve",
      "Shoulder strap"
    ],
    "featuresBn": [
      "খাঁটি চামড়া",
      "ল্যাপটপ কভার",
      "শোল্ডার বেল্ট"
    ]
  },
  {
    "id": "prod-bag-6",
    "nameEn": "Women Quilted Chain Shoulder Crossbody Bag",
    "nameBn": "উইমেন কুইল্টেড চেইন শোল্ডার ক্রসবডি ব্যাগ",
    "descriptionEn": "Luxury quilted pattern faux leather handbag with golden chain strap for parties.",
    "descriptionBn": "পার্টিতে পরার জন্য কুইল্টেড চেইন শোল্ডার ক্রসবডি ব্যাগ।",
    "category": "cat_bags",
    "priceUSD": 59.99,
    "discountPercent": 25,
    "images": [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&q=80"
    ],
    "sizes": [
      "Medium"
    ],
    "colors": [
      {
        "nameEn": "Blush Nude",
        "nameBn": "পিচ",
        "hex": "#FFE4E1"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 94,
    "featuresEn": [
      "Quilted pattern",
      "Gold chain strap",
      "Twist lock"
    ],
    "featuresBn": [
      "কুইল্টেড ডিজাইন",
      "গোল্ডেন চেইন",
      "টুইস্ট লক"
    ]
  },
  {
    "id": "prod-bag-7",
    "nameEn": "Expandable Hardshell Carry-On Luggage Suitcase",
    "nameBn": "এক্সপ্যান্ডেবল হার্ডশেল ক্যারি-অন লাগেজ স্যুটকেস",
    "descriptionEn": "Durable PC+ABS hardshell spinner luggage with TSA combination lock and 360 wheels.",
    "descriptionBn": "আন্তর্জাতিক ভ্রমণের জন্য টিএসএ লকসহ টেকসই হার্ডশেল ট্রলি ব্যাগ।",
    "category": "cat_bags",
    "priceUSD": 139.99,
    "discountPercent": 35,
    "images": [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80"
    ],
    "sizes": [
      "20 inch"
    ],
    "colors": [
      {
        "nameEn": "Metallic Rose",
        "nameBn": "রোজ গোল্ড",
        "hex": "#B76E79"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 165,
    "featuresEn": [
      "TSA Combo lock",
      "360 Spinner wheels",
      "Scratch-resistant"
    ],
    "featuresBn": [
      "টিএসএ কম্বো লক",
      "৩৬০ ডিগ্রি হুইল",
      "স্ক্র্যাচপ্রুফ"
    ]
  },
  {
    "id": "prod-bag-8",
    "nameEn": "Lightweight Gym Sport Duffel Bag",
    "nameBn": "লাইটওয়েট জিম স্পোর্ট ডাফেল ব্যাগ",
    "descriptionEn": "Water-resistant nylon duffel bag with separate wet pocket and shoe compartment.",
    "descriptionBn": "জিম বা খেলার জন্য জুতো রাখার স্থানসহ ওয়াটারপ্রুফ ডাফেল ব্যাগ।",
    "category": "cat_bags",
    "priceUSD": 34.99,
    "discountPercent": 20,
    "images": [
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=500&q=80"
    ],
    "sizes": [
      "Medium"
    ],
    "colors": [
      {
        "nameEn": "Teal Blue",
        "nameBn": "ব্লু",
        "hex": "#008080"
      }
    ],
    "rating": 4.7,
    "reviewsCount": 88,
    "featuresEn": [
      "Separate shoe pocket",
      "Wet clothes pocket",
      "Water resistant"
    ],
    "featuresBn": [
      "জুতো রাখার কভার",
      "ভেজা কাপড়ের চেম্বার",
      "ওয়াটারপ্রুফ"
    ]
  },
  {
    "id": "prod-bag-9",
    "nameEn": "Canvas Vintage Anti-Theft Backpack",
    "nameBn": "ক্যানভাস ভিন্টেজ অ্যান্টি-থেফট ব্যাকপ্যাক",
    "descriptionEn": "Heavy duty canvas travel Rucksack with magnetic buckle and hidden back anti-theft zip.",
    "descriptionBn": "ভ্রমণের জন্য ভিন্টেজ ক্যানভাস রুকস্যাক অ্যান্টি-থেফট ব্যাকপ্যাক।",
    "category": "cat_bags",
    "priceUSD": 44.99,
    "discountPercent": 15,
    "images": [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80"
    ],
    "sizes": [
      "Large"
    ],
    "colors": [
      {
        "nameEn": "Khaki Tan",
        "nameBn": "খাকি",
        "hex": "#F0E68C"
      }
    ],
    "rating": 4.6,
    "reviewsCount": 72,
    "featuresEn": [
      "Anti-theft pocket",
      "Heavy canvas",
      "Laptop compartment"
    ],
    "featuresBn": [
      "লুকানো পকেট",
      "ভারী ক্যানভাস",
      "ল্যাপটপ রাখার জায়গা"
    ]
  },
  {
    "id": "prod-bag-10",
    "nameEn": "Fashion Designer Clutch Party Purse",
    "nameBn": "ফ্যাশন ডিজাইনার ক্লাচ পার্টি পার্স",
    "descriptionEn": "Sparkling crystal stone embellished evening clutch purse with detachable chain.",
    "descriptionBn": "পার্টির সাজ সজ্জায় পাথর বসানো লাক্সারি ককটেল ক্লাচ পার্স।",
    "category": "cat_bags",
    "priceUSD": 39.99,
    "discountPercent": 25,
    "images": [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&q=80"
    ],
    "sizes": [
      "Small"
    ],
    "colors": [
      {
        "nameEn": "Silver Sparkle",
        "nameBn": "সিলভার",
        "hex": "#C0C0C0"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 65,
    "featuresEn": [
      "Crystal embellishment",
      "Removable chain",
      "Satin inner"
    ],
    "featuresBn": [
      "ক্রিস্টাল পাথর",
      "খোলা যায় এমন চেইন",
      "সাটিন ইনসাইড"
    ]
  },
  {
    "id": "prod-bag-11",
    "nameEn": "Waterproof Outdoor Tactical Chest Sling Bag",
    "nameBn": "ওয়াটারপ্রুফ আউটডোর ট্যাকটিক্যাল চেস্ট স্লিং ব্যাগ",
    "descriptionEn": "Compact crossbody chest bag with USB port and MOLLE tactical webbing.",
    "descriptionBn": "বাইক চালানো বা ঘুরে বেড়ানোর জন্য ইউএসবি পোর্টযুক্ত স্লিং চেস্ট ব্যাগ।",
    "category": "cat_bags",
    "priceUSD": 29.99,
    "discountPercent": 20,
    "images": [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&q=80"
    ],
    "sizes": [
      "Compact"
    ],
    "colors": [
      {
        "nameEn": "Tactical Black",
        "nameBn": "কালো",
        "hex": "#111111"
      }
    ],
    "rating": 4.7,
    "reviewsCount": 105,
    "featuresEn": [
      "USB Charging port",
      "Waterproof Nylon",
      "Key clip"
    ],
    "featuresBn": [
      "ইউএসবি পোর্ট",
      "ওয়াটারপ্রুফ নাইলন",
      "চাবির ক্লিপ"
    ]
  },
  {
    "id": "prod-bag-12",
    "nameEn": "Eco-Friendly Foldable Shopping Tote Bag Set",
    "nameBn": "ইকো-ফ্রেন্ডলি ফোল্ডেবল শপিং টোট ব্যাগ সেট",
    "descriptionEn": "Pack of 3 heavy-duty washable organic cotton canvas shopping tote bags.",
    "descriptionBn": "দৈনন্দিন কেনাকাটার জন্য ৩টি ইকো-ফ্রেন্ডলি সুতি শপিং টোট ব্যাগ সেট।",
    "category": "cat_bags",
    "priceUSD": 18.99,
    "discountPercent": 10,
    "images": [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&q=80"
    ],
    "sizes": [
      "Pack of 3"
    ],
    "colors": [
      {
        "nameEn": "Off White Canvas",
        "nameBn": "সাদা",
        "hex": "#FAF0E6"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 140,
    "featuresEn": [
      "100% Organic cotton",
      "Foldable & Washable",
      "Heavy shoulder straps"
    ],
    "featuresBn": [
      "অর্গানিক কটন",
      "ভাজ করা যায়",
      "মজবুত বেল্ট"
    ]
  },
  {
    "id": "prod-elec-1",
    "nameEn": "Wireless ANC Bluetooth Headphones",
    "nameBn": "ওয়ারলেস অ্যাক্টিভ নয়েজ ক্যানসেলিং হেডফোন",
    "descriptionEn": "Immersive sound quality with Active Noise Cancellation and 40-hour battery life.",
    "descriptionBn": "৪০ ঘণ্টার ব্যাটারি লাইফ ও নয়েজ ক্যানসেলেশনসহ উচ্চমানের ওয়ারলেস সাউন্ড।",
    "category": "cat_electronics",
    "priceUSD": 99.99,
    "discountPercent": 30,
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80"
    ],
    "sizes": [
      "One Size"
    ],
    "colors": [
      {
        "nameEn": "Matte Black",
        "nameBn": "ম্যাট কালো",
        "hex": "#1C1C1C"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 210,
    "featuresEn": [
      "Active Noise Control",
      "40hr battery",
      "Deep bass"
    ],
    "featuresBn": [
      "নয়েজ ক্যানসেলেশন",
      "৪০ ঘণ্টা প্লে-টাইম",
      "ডিপ বেস"
    ]
  },
  {
    "id": "prod-elec-2",
    "nameEn": "TWS True Wireless Earbuds with Charging Case",
    "nameBn": "টিডব্লিউএস ট্রু ওয়ারলেস ইয়ারবাডস",
    "descriptionEn": "Crystal clear call microphone, Bluetooth 5.3 instant pairing, and compact magnetic case.",
    "descriptionBn": "স্পষ্ট এইচডি কল কোয়ালিটি ও ব্লুটুথ ৫.৩ সহ কিউট মেটালিক চার্জিং কেস।",
    "category": "cat_electronics",
    "priceUSD": 39.99,
    "discountPercent": 25,
    "images": [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80"
    ],
    "sizes": [
      "One Size"
    ],
    "colors": [
      {
        "nameEn": "Pearl White",
        "nameBn": "সাদা",
        "hex": "#FFFFFF"
      }
    ],
    "rating": 4.7,
    "reviewsCount": 165,
    "featuresEn": [
      "Bluetooth 5.3",
      "Touch controls",
      "IPX5 waterproof"
    ],
    "featuresBn": [
      "ব্লুটুথ ৫.৩",
      "টাচ কন্ট্রোল",
      "ওয়াটারপ্রুফ"
    ]
  },
  {
    "id": "prod-elec-3",
    "nameEn": "Portable Bluetooth Bass Speaker",
    "nameBn": "পোর্টেবল ব্লুটুথ বেস স্পিকার",
    "descriptionEn": "Powerful 20W stereo output with punchy bass, RGB light ring, and waterproof body.",
    "descriptionBn": "আকর্ষণীয় আরজিবি লাইট ও ২০ ওয়াট শক্তিশালী বেসসহ ওয়াটারপ্রুফ পোর্টেবল স্পিকার।",
    "category": "cat_electronics",
    "priceUSD": 49.99,
    "discountPercent": 20,
    "images": [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80"
    ],
    "sizes": [
      "Medium"
    ],
    "colors": [
      {
        "nameEn": "Midnight Navy",
        "nameBn": "ব্লু",
        "hex": "#000080"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 144,
    "featuresEn": [
      "20W Stereo Sound",
      "RGB Lighting",
      "12hr Battery"
    ],
    "featuresBn": [
      "২০ ওয়াট সাউন্ড",
      "আরজিবি লাইট",
      "১২ ঘণ্টা ব্যাটারি"
    ]
  },
  {
    "id": "prod-elec-4",
    "nameEn": "MagSafe Magnetic Fast Wireless Power Bank 10000mAh",
    "nameBn": "ম্যাগসেফ ম্যাগনেটিক ফাস্ট পাওয়ার ব্যাংক ১০০০০ এমএএইচ",
    "descriptionEn": "Slim magnetic wireless charger for smartphones with LED digital power status indicator.",
    "descriptionBn": "স্মার্টফোনের সাথে ম্যাগনেটিক সংযোগে দ্রুত চার্জিংয়ের জন্য স্লিম পাওয়ার ব্যাংক।",
    "category": "cat_electronics",
    "priceUSD": 34.99,
    "discountPercent": 15,
    "images": [
      "https://images.unsplash.com/photo-1609592424074-124b6ebec0bf?w=500&q=80"
    ],
    "sizes": [
      "10000mAh"
    ],
    "colors": [
      {
        "nameEn": "Titanium Grey",
        "nameBn": "ধূসর",
        "hex": "#555555"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 95,
    "featuresEn": [
      "15W Wireless Fast",
      "MagSafe snap",
      "LED Display"
    ],
    "featuresBn": [
      "১৫ ওয়াট ফাস্ট চার্জ",
      "ম্যাগনেটিক লক",
      "এলইডি ডিসপ্লে"
    ]
  },
  {
    "id": "prod-elec-5",
    "nameEn": "AMOLED Display SmartWatch with Calling",
    "nameBn": "AMOLED ডিসপ্লে স্মার্টওয়াচ উইথ কলিং",
    "descriptionEn": "Bluetooth calling smartwatch with 1.43 in Always-On AMOLED screen and health monitoring.",
    "descriptionBn": "ব্লুটুথ স্পিকার দিয়ে সরাসরি কথা বলার অলওয়েজ-অন অ্যামোলেড স্মার্টওয়াচ।",
    "category": "cat_electronics",
    "priceUSD": 69.99,
    "discountPercent": 30,
    "images": [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80"
    ],
    "sizes": [
      "46mm"
    ],
    "colors": [
      {
        "nameEn": "Space Grey",
        "nameBn": "ধূসর",
        "hex": "#3A3A3C"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 180,
    "featuresEn": [
      "Bluetooth Calling",
      "1.43 in AMOLED",
      "100+ Sports modes"
    ],
    "featuresBn": [
      "ব্লুটুথ কলিং",
      "অ্যামোলেড স্ক্রিন",
      "১০০+ স্পোর্টস মোড"
    ]
  },
  {
    "id": "prod-elec-6",
    "nameEn": "Wireless Ergonomic Vertical Optical Mouse",
    "nameBn": "ওয়ারলেস এরগোনোমিক ভার্টিক্যাল অপটিক্যাল মাউস",
    "descriptionEn": "Ergonomic vertical design mouse to reduce wrist strain with 2.4G wireless nano receiver.",
    "descriptionBn": "হাত ও কব্জির ব্যথা মুক্ত রেখে পিসি ব্যবহারের জন্য এরগোনোমিক ভার্টিক্যাল মাউস।",
    "category": "cat_electronics",
    "priceUSD": 24.99,
    "discountPercent": 20,
    "images": [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80"
    ],
    "sizes": [
      "Wireless"
    ],
    "colors": [
      {
        "nameEn": "Matte Black",
        "nameBn": "কালো",
        "hex": "#1B1B1B"
      }
    ],
    "rating": 4.7,
    "reviewsCount": 64,
    "featuresEn": [
      "Ergonomic vertical",
      "Silent clicks",
      "3 Adjustable DPI"
    ],
    "featuresBn": [
      "এরগোনোমিক ডিজাইন",
      "সাইলেন্ট ক্লিক",
      "ডিপিআই পরিবর্তন"
    ]
  },
  {
    "id": "prod-elec-7",
    "nameEn": "4K Ultra HD Streaming Smart TV Stick",
    "nameBn": "4K আল্ট্রা এইচডি স্ট্রিমিং স্মার্ট টিভি স্টিক",
    "descriptionEn": "Plug and play 4K Android TV stick with voice remote control and Dolby Atmos sound.",
    "descriptionBn": "যেকোনো টিভিকে স্মার্ট টিভিতে রূপান্তর করতে ৪কে আল্ট্রা এইচডি টিভি স্টিক।",
    "category": "cat_electronics",
    "priceUSD": 49.99,
    "discountPercent": 25,
    "images": [
      "https://images.unsplash.com/photo-1609592424074-124b6ebec0bf?w=500&q=80"
    ],
    "sizes": [
      "4K HDR"
    ],
    "colors": [
      {
        "nameEn": "Black",
        "nameBn": "কালো",
        "hex": "#000000"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 152,
    "featuresEn": [
      "4K Ultra HD",
      "Google Voice Remote",
      "Dual-band Wi-Fi"
    ],
    "featuresBn": [
      "৪কে রেজোলিউশন",
      "ভয়েস রিমোট",
      "ওয়াই-ফাই সাপোর্ট"
    ]
  },
  {
    "id": "prod-elec-8",
    "nameEn": "Noise-Cancelling Studio USB Microphone",
    "nameBn": "নয়েজ-ক্যানসেলিং স্টুডিও ইউএসবি মাইক্রোফোন",
    "descriptionEn": "Condenser USB microphone with desktop tripod stand and touch mute sensor for podcasting.",
    "descriptionBn": "পডকাস্ট বা ভয়েস রেকর্ড করার জন্য গেমিং অ্যান্ড স্টুডিও ইউএসবি মাইক্রোফোন।",
    "category": "cat_electronics",
    "priceUSD": 59.99,
    "discountPercent": 35,
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80"
    ],
    "sizes": [
      "Desktop"
    ],
    "colors": [
      {
        "nameEn": "Studio Black",
        "nameBn": "কালো",
        "hex": "#141414"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 98,
    "featuresEn": [
      "Cardioid pickup",
      "Touch mute button",
      "RGB Status ring"
    ],
    "featuresBn": [
      "ক্লিয়ার ভয়েস",
      "টাচ মিউট বাটন",
      "আরজিবি লাইট"
    ]
  },
  {
    "id": "prod-elec-9",
    "nameEn": "Fast Wireless Multi-Device Charging Station",
    "nameBn": "ফাস্ট ওয়ারলেস মাল্টি-ডিভাইস চার্জিং স্টেশন",
    "descriptionEn": "3-in-1 fast wireless charging stand for Smartphone, Smartwatch, and Earbuds simultaneously.",
    "descriptionBn": "একসাথে ফোন, স্মার্টওয়াচ এবং ইয়ারবাডস চার্জ দেওয়ার জন্য ৩-ইন-১ ওয়ারলেস ডক।",
    "category": "cat_electronics",
    "priceUSD": 39.99,
    "discountPercent": 20,
    "images": [
      "https://images.unsplash.com/photo-1609592424074-124b6ebec0bf?w=500&q=80"
    ],
    "sizes": [
      "3-in-1"
    ],
    "colors": [
      {
        "nameEn": "Pure White",
        "nameBn": "সাদা",
        "hex": "#FFFFFF"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 110,
    "featuresEn": [
      "15W Fast Charge",
      "3-in-1 Foldable",
      "Overcharge protection"
    ],
    "featuresBn": [
      "১৫ ওয়াট ফাস্ট চার্জ",
      "৩-ইন-১ স্ট্যান্ড",
      "নিরাপদ চার্জিং"
    ]
  },
  {
    "id": "prod-elec-10",
    "nameEn": "Portable Mini Projector for Home Cinema",
    "nameBn": "পোর্টেবল মিনি প্রজেক্টর ফর হোম সিনেমা",
    "descriptionEn": "Native 1080P supported smart mini LED projector with built-in Wi-Fi and speaker.",
    "descriptionBn": "ঘরে সিনেমা হলের অনুভূতি পেতে উইন্ডোজ ও মোবাইল কানেক্টেড মিনি প্রজেক্টর।",
    "category": "cat_electronics",
    "priceUSD": 119.99,
    "discountPercent": 40,
    "images": [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80"
    ],
    "sizes": [
      "Portable"
    ],
    "colors": [
      {
        "nameEn": "White Gold",
        "nameBn": "সাদা",
        "hex": "#FAFAFA"
      }
    ],
    "rating": 4.7,
    "reviewsCount": 84,
    "featuresEn": [
      "1080P Full HD",
      "Built-in Speaker",
      "Wi-Fi Screen Cast"
    ],
    "featuresBn": [
      "১০৮০পি এইচডি",
      "বিল্ট-ইন স্পিকার",
      "ওয়াই-ফাই কাস্ট"
    ]
  },
  {
    "id": "prod-elec-11",
    "nameEn": "RGB Mechanical Gaming Keyboard 87-Key",
    "nameBn": "RGB মেকানিক্যাল গেমিং কিবোর্ড ৮৭-কী",
    "descriptionEn": "Tactile Blue switches mechanical keyboard with customizable RGB backlit modes.",
    "descriptionBn": "টাইপিং ও গেমিংয়ের জন্য রেইনবো আরজিবি মেকানিক্যাল ক্ল্যাকি কিবোর্ড।",
    "category": "cat_electronics",
    "priceUSD": 54.99,
    "discountPercent": 30,
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80"
    ],
    "sizes": [
      "Tenkeyless"
    ],
    "colors": [
      {
        "nameEn": "Black RGB",
        "nameBn": "আরজিবি",
        "hex": "#111111"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 175,
    "featuresEn": [
      "Blue Mechanical Switches",
      "RGB Backlit",
      "Anti-ghosting keys"
    ],
    "featuresBn": [
      "মেকানিক্যাল সুইচ",
      "আরজিবি লাইটিং",
      "অ্যান্টি-গোস্টিং"
    ]
  },
  {
    "id": "prod-elec-12",
    "nameEn": "Smart Plug Wi-Fi Remote Socket Switch",
    "nameBn": "স্মার্ট প্লাগ ওয়াই-ফাই রিমোট সকেট সুইচ",
    "descriptionEn": "Control home appliances remotely via mobile app or Alexa voice control with timer preset.",
    "descriptionBn": "মোবাইল অ্যাপস দিয়ে টিভি, ফ্যান বা ফ্রিজ বন্ধ করার ওয়াই-ফাই স্মার্ট প্লাগ।",
    "category": "cat_electronics",
    "priceUSD": 17.99,
    "discountPercent": 15,
    "images": [
      "https://images.unsplash.com/photo-1609592424074-124b6ebec0bf?w=500&q=80"
    ],
    "sizes": [
      "16A"
    ],
    "colors": [
      {
        "nameEn": "White",
        "nameBn": "সাদা",
        "hex": "#FFFFFF"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 92,
    "featuresEn": [
      "App Remote Control",
      "Voice Assistant Support",
      "Energy Monitoring"
    ],
    "featuresBn": [
      "অ্যাপস কন্ট্রোল",
      "ভয়েস কমান্ড",
      "টাইমার সেটিং"
    ]
  },
  {
    "id": "prod-men-1",
    "nameEn": "Premium Urban Denim Jacket",
    "nameBn": "প্রিমিয়াম আরবান ডেনিম জ্যাকেট",
    "descriptionEn": "A timeless wardrobe staple. Crafted from premium organic cotton denim.",
    "descriptionBn": "সব ঋতুর জন্য মানানসই ও চমৎকার পোশাক। প্রিমিয়াম অর্গানিক কটন ডেনিম জ্যাকেট।",
    "category": "cat_men",
    "priceUSD": 59.99,
    "discountPercent": 25,
    "images": [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "nameEn": "Classic Blue",
        "nameBn": "নীল",
        "hex": "#3B5998"
      }
    ],
    "rating": 4.7,
    "reviewsCount": 98,
    "featuresEn": [
      "100% Cotton denim",
      "Metal buttons",
      "Chest pockets"
    ],
    "featuresBn": [
      "১০০% কটন ডেনিম",
      "ধাতব বোতাম",
      "বুকের পকেট"
    ]
  },
  {
    "id": "prod-men-2",
    "nameEn": "Classic Crewneck Fleece Sweatshirt",
    "nameBn": "ক্ল্যাসিক ক্রু-নেক সোয়েটশার্ট",
    "descriptionEn": "Mid-weight French terry fleece fabric with ribbed collar, hem and cuffs.",
    "descriptionBn": "সবচেয়ে আরামদায়ক ও ক্যাজুয়াল উইন্টার পোশাক। উন্নত মানের ফ্রেঞ্চ টেরি সোয়েটশার্ট।",
    "category": "cat_men",
    "priceUSD": 34.99,
    "discountPercent": 20,
    "images": [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&q=80"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "nameEn": "Slate Grey",
        "nameBn": "ধূসর",
        "hex": "#708090"
      }
    ],
    "rating": 4.6,
    "reviewsCount": 76,
    "featuresEn": [
      "French terry fleece",
      "Ribbed trim",
      "Pre-washed"
    ],
    "featuresBn": [
      "ফ্রেঞ্চ টেরি কাপড",
      "রিবড কলার",
      "ওয়াশড কটন"
    ]
  },
  {
    "id": "prod-men-3",
    "nameEn": "Fitted Oxford Cotton Dress Shirt",
    "nameBn": "ফিটেড অক্সফোর্ড কটন শার্ট",
    "descriptionEn": "Essential smart dress shirt. Heavy Oxford weave cotton fabric with button-down collar.",
    "descriptionBn": "অফিস বা ফর্মাল ক্যাজুয়াল পরার জন্য অপরিহার্য বাটন-ডাউন কলারের শার্ট।",
    "category": "cat_men",
    "priceUSD": 44.99,
    "discountPercent": 15,
    "images": [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "nameEn": "Sky Blue",
        "nameBn": "আকাশী নীল",
        "hex": "#87CEEB"
      }
    ],
    "rating": 4.5,
    "reviewsCount": 112,
    "featuresEn": [
      "Heavy Oxford weave",
      "Button-down collar",
      "Chest pocket"
    ],
    "featuresBn": [
      "ভারী অক্সফোর্ড বুনন",
      "বাটন-ডাউন কলার",
      "পকেট সুবিধা"
    ]
  },
  {
    "id": "prod-men-4",
    "nameEn": "Autumn Winter Casual Coat",
    "nameBn": "অটাম উইন্টার ক্যাজুয়াল কোট",
    "descriptionEn": "Smart tailored warm jacket coat with notched lapel and thermal lining.",
    "descriptionBn": "শীতকালে পরা উপযোগী স্মার্ট ক্যাজুয়াল ওয়ার্ম কোট জ্যাকেট।",
    "category": "cat_men",
    "priceUSD": 89.99,
    "discountPercent": 30,
    "images": [
      "https://images.unsplash.com/photo-1544441893-675973e31985?w=500&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "nameEn": "Camel Brown",
        "nameBn": "বাদামী",
        "hex": "#C5B358"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 89,
    "featuresEn": [
      "Warm lining",
      "Classic lapel",
      "Side pockets"
    ],
    "featuresBn": [
      "গরম লাইনিং",
      "ক্লাসিক কলার",
      "সাইড পকেট"
    ]
  },
  {
    "id": "prod-men-5",
    "nameEn": "Slim-Fit Stretch Formal Trousers",
    "nameBn": "স্লিম-ফিট স্ট্রেচ ফরমাল ট্রাউজার্স",
    "descriptionEn": "Smart tailored flat-front formal trousers crafted from wrinkle-resistant stretch viscose.",
    "descriptionBn": "অফিস বা প্রোগ্রামের জন্য তৈরি আরামদায়ক স্ট্রেচ কটন ফরমাল প্যান্ট।",
    "category": "cat_men",
    "priceUSD": 39.99,
    "discountPercent": 20,
    "images": [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&q=80"
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36"
    ],
    "colors": [
      {
        "nameEn": "Charcoal Black",
        "nameBn": "কালো",
        "hex": "#1C1C1C"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 110,
    "featuresEn": [
      "Stretch viscose blend",
      "Flat front",
      "Wrinkle resistant"
    ],
    "featuresBn": [
      "স্ট্রেচ কাপড",
      "ফ্ল্যাট ফ্রন্ট",
      "কুঁচকানো মুক্ত"
    ]
  },
  {
    "id": "prod-men-6",
    "nameEn": "Casual Linen Short-Sleeve Cuban Shirt",
    "nameBn": "ক্যাজুয়াল লিনেন শর্ট-স্লিভ কিউবান শার্ট",
    "descriptionEn": "Breezy pure linen shirt featuring notched camp collar and loose relaxed drape.",
    "descriptionBn": "গরমের উপযোগী ক্যাজুয়াল লিনেন ওপেন কলার শর্ট স্লিভ শার্ট।",
    "category": "cat_men",
    "priceUSD": 34.99,
    "discountPercent": 15,
    "images": [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "nameEn": "Sand Beige",
        "nameBn": "বেইজ",
        "hex": "#F5F5DC"
      }
    ],
    "rating": 4.6,
    "reviewsCount": 74,
    "featuresEn": [
      "100% Linen",
      "Camp collar",
      "Breathable weave"
    ],
    "featuresBn": [
      "১০০% লিনেন",
      "ক্যাম্প কলার",
      "বাতাস চলাচলের উপযোগী"
    ]
  },
  {
    "id": "prod-men-7",
    "nameEn": "Heavyweight Cotton Printed Graphic Hoodie",
    "nameBn": "হেভিওয়েট কটন প্রিন্টেড গ্রাফিক হুডি",
    "descriptionEn": "350gsm thick fleece cotton streetwear hoodie with kangaroo pocket and drawstring hood.",
    "descriptionBn": "শীতকালে পরার ভারী সুতি কটন ক্যাজুয়াল প্রিন্টেড হুডি।",
    "category": "cat_men",
    "priceUSD": 49.99,
    "discountPercent": 25,
    "images": [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "nameEn": "Oversized Grey",
        "nameBn": "ধূসর",
        "hex": "#808080"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 135,
    "featuresEn": [
      "350gsm Thick cotton",
      "Kangaroo pocket",
      "Double layer hood"
    ],
    "featuresBn": [
      "ভারী সুতি কাপড",
      "পকেট সুবিধা",
      "ডাবল হুড"
    ]
  },
  {
    "id": "prod-men-8",
    "nameEn": "Classic Tailored Two-Piece Formal Suit",
    "nameBn": "ক্লাসিক টেইলরড টু-পিস ফরমাল স্যুট",
    "descriptionEn": "Luxury Italian wool blend blazer coat and matching trousers set for corporate events.",
    "descriptionBn": "অফিসিয়াল মিটিং বা ওয়েডিংয়ের জন্য রাজকীয় টু-পিস ব্লেজার ও ট্রাউজার সেট।",
    "category": "cat_men",
    "priceUSD": 159.99,
    "discountPercent": 35,
    "images": [
      "https://images.unsplash.com/photo-1544441893-675973e31985?w=500&q=80"
    ],
    "sizes": [
      "38R",
      "40R",
      "42R"
    ],
    "colors": [
      {
        "nameEn": "Midnight Blue",
        "nameBn": "নেভি ব্লু",
        "hex": "#191970"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 88,
    "featuresEn": [
      "Wool blend fabric",
      "Notch lapel blazer",
      "Includes trousers"
    ],
    "featuresBn": [
      "উলের মিশ্রণ",
      "নোচ কলার",
      "ট্রাউজারসহ"
    ]
  },
  {
    "id": "prod-men-9",
    "nameEn": "Pique Cotton Polo T-Shirt with Pocket",
    "nameBn": "পিক কটন পোলো টি-শার্ট উইথ পকেট",
    "descriptionEn": "Classic honeycomb knit pique cotton short sleeve polo shirt with chest pocket.",
    "descriptionBn": "পিক কটন বুননের বাটন ও পকেটসহ স্মার্ট ফরমাল পোলো টি-শার্ট।",
    "category": "cat_men",
    "priceUSD": 29.99,
    "discountPercent": 15,
    "images": [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "nameEn": "Forest Green",
        "nameBn": "সবুজ",
        "hex": "#228B22"
      }
    ],
    "rating": 4.7,
    "reviewsCount": 92,
    "featuresEn": [
      "Honeycomb pique",
      "Chest pocket",
      "Ribbed collar"
    ],
    "featuresBn": [
      "পিক বুনন",
      "বুকের পকেট",
      "রিবড কলার"
    ]
  },
  {
    "id": "prod-men-10",
    "nameEn": "Cargo Jogger Pants with Tactical Pockets",
    "nameBn": "কার্গো জোগার প্যান্টস উইথ ট্যাকটিক্যাল পকেটস",
    "descriptionEn": "Durable twill cotton tactical cargo joggers with elastic drawstring waist and 6 pockets.",
    "descriptionBn": "৬টি জিপার ও পকেটসহ ক্যাজুয়াল কটন কার্গো ট্রাউজার্স।",
    "category": "cat_men",
    "priceUSD": 44.99,
    "discountPercent": 20,
    "images": [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&q=80"
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36"
    ],
    "colors": [
      {
        "nameEn": "Military Olive",
        "nameBn": "খাকি",
        "hex": "#4B5320"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 140,
    "featuresEn": [
      "6 Tactical pockets",
      "Twill cotton",
      "Elastic cuffs"
    ],
    "featuresBn": [
      "৬টি পকেট",
      "টুইল কটন",
      "ইলাস্টিক বটম"
    ]
  },
  {
    "id": "prod-men-11",
    "nameEn": "Genuine Biker Leather Jacket Heavy Build",
    "nameBn": "জেনুইন বাইকার লেদার জ্যাকেট হেভি বিল্ড",
    "descriptionEn": "Rugged lambskin genuine leather motorcycle jacket with asymmetrical zip and belt.",
    "descriptionBn": "খাঁটি চামড়ার তৈরি উইন্ডপ্রুফ ভারী বাইকার লেদার জ্যাকেট।",
    "category": "cat_men",
    "priceUSD": 149.99,
    "discountPercent": 40,
    "images": [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "nameEn": "Jet Black",
        "nameBn": "কালো",
        "hex": "#000000"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 115,
    "featuresEn": [
      "Genuine lambskin",
      "YKK Zippers",
      "Quilted lining"
    ],
    "featuresBn": [
      "খাঁটি চামড়া",
      "ওয়াইকেকে জিপার",
      "গরম ইনসাইড"
    ]
  },
  {
    "id": "prod-men-12",
    "nameEn": "Traditional Silk Panjabi Kurta Set",
    "nameBn": "ট্র্যাডিশনাল সিল্ক পাঞ্জাবি কুর্তা সেট",
    "descriptionEn": "Festive Indian style Dupion silk Panjabi kurta with embroidery collar and Pyjama.",
    "descriptionBn": "ঈদের মতো উৎসবে পরার জন্য জাঁকজমকপূর্ণ কলারের সিল্ক পাঞ্জাবি সেট।",
    "category": "cat_men",
    "priceUSD": 69.99,
    "discountPercent": 30,
    "images": [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&q=80"
    ],
    "sizes": [
      "38",
      "40",
      "42",
      "44"
    ],
    "colors": [
      {
        "nameEn": "Royal Gold",
        "nameBn": "গোল্ডেন",
        "hex": "#D4AF37"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 160,
    "featuresEn": [
      "Dupion silk blend",
      "Embroidered collar",
      "Includes pyjama"
    ],
    "featuresBn": [
      "সিল্ক ফেব্রিক",
      "এমব্রয়ডারি কলার",
      "পায়জামাসহ"
    ]
  },
  {
    "id": "prod-stat-1",
    "nameEn": "Premium Leather Hardcover Journal Notebook",
    "nameBn": "প্রিমিয়াম লেদার হার্ডকভার নোটবুক",
    "descriptionEn": "200-page thick fountain-pen friendly lined paper journal with magnetic strap lock.",
    "descriptionBn": "ডায়েরি বা নোট নেওয়ার জন্য ২০০ পাতার প্রিমিয়াম চামড়ার কভারযুক্ত নোটবুক।",
    "category": "cat_stationery",
    "priceUSD": 19.99,
    "discountPercent": 20,
    "images": [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&q=80"
    ],
    "sizes": [
      "A5"
    ],
    "colors": [
      {
        "nameEn": "Vintage Brown",
        "nameBn": "বাদামী",
        "hex": "#8B4513"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 78,
    "featuresEn": [
      "100gsm thick paper",
      "Magnetic lock",
      "Ribbon bookmark"
    ],
    "featuresBn": [
      "১০০ জিএসএম কাগজ",
      "ম্যাগনেটিক লক",
      "রিবন বুকমার্ক"
    ]
  },
  {
    "id": "prod-stat-2",
    "nameEn": "Luxury Metal Executive Rollerball Pen",
    "nameBn": "লাক্সারি মেটাল এক্সিকিউটিভ রোলারবল কলম",
    "descriptionEn": "Smooth writing liquid ink ballpoint pen in gold-accented heavy brass gift box.",
    "descriptionBn": "স্মুথ ও দ্রুত লেখার জন্য রাজকীয় গোল্ডেন টাচের ভারী মেটাল রোলারবল পেন।",
    "category": "cat_stationery",
    "priceUSD": 14.99,
    "discountPercent": 15,
    "images": [
      "https://images.unsplash.com/photo-1585336261026-8f5786372969?w=500&q=80"
    ],
    "sizes": [
      "0.5mm"
    ],
    "colors": [
      {
        "nameEn": "Gold Black",
        "nameBn": "গোল্ডেন কালো",
        "hex": "#1C1C1C"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 95,
    "featuresEn": [
      "0.5mm extra smooth",
      "Brass metal body",
      "Refillable"
    ],
    "featuresBn": [
      "০.৫ মিমি স্মুথ কালি",
      "মেটাল বডি",
      "রিফিল করা যায়"
    ]
  },
  {
    "id": "prod-stat-3",
    "nameEn": "Minimalist Wooden Desk Organizer Set",
    "nameBn": "মিনিমালিস্ট উডেন ডেস্ক অর্গানাইজার সেট",
    "descriptionEn": "Keep your workspace tidy. Solid natural walnut wood pen stand, phone dock and clip tray.",
    "descriptionBn": "অফিস টেবিল পরিপাটি রাখতে খাঁটি আখরোট কাঠের ডেস্ক অর্গানাইজার পেন স্ট্যান্ড।",
    "category": "cat_stationery",
    "priceUSD": 29.99,
    "discountPercent": 25,
    "images": [
      "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=500&q=80"
    ],
    "sizes": [
      "Set of 3"
    ],
    "colors": [
      {
        "nameEn": "Walnut Wood",
        "nameBn": "কাঠের শেড",
        "hex": "#5C4033"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 62,
    "featuresEn": [
      "Solid natural wood",
      "Phone stand slot",
      "Compact design"
    ],
    "featuresBn": [
      "নিখুঁত খাঁটি কাঠ",
      "ফোন রাখার ঘর",
      "অল্প জায়গায় ধরে"
    ]
  },
  {
    "id": "prod-stat-4",
    "nameEn": "Aesthetic pastel Highlighter Marker Set",
    "nameBn": "অ্যাস্থেটিক পাস্টেল হাইলাইটার মার্কার সেট",
    "descriptionEn": "Pack of 6 soft-tint non-bleeding pastel highlighter markers for studying.",
    "descriptionBn": "পড়াশোনা বা ডায়েরি সাজাতে ৬টি নরম পাস্টেল কালারের বিশেষ হাইলাইটার কলম।",
    "category": "cat_stationery",
    "priceUSD": 11.99,
    "discountPercent": 10,
    "images": [
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=500&q=80"
    ],
    "sizes": [
      "Pack of 6"
    ],
    "colors": [
      {
        "nameEn": "Pastel Shades",
        "nameBn": "পাস্টেল কালার",
        "hex": "#FFC0CB"
      }
    ],
    "rating": 4.7,
    "reviewsCount": 110,
    "featuresEn": [
      "Non-bleed ink",
      "Soft pastel tones",
      "Chisel tip"
    ],
    "featuresBn": [
      "কাগজে ছড়ায় না",
      "নরম কালার শেড",
      "চিজেল টিপ"
    ]
  },
  {
    "id": "prod-stat-5",
    "nameEn": "Executive Fountain Pen with Brass Nib Box",
    "nameBn": "এক্সিকিউটিভ ফাউন্টেন পেন উইথ ব্রাস নিব বক্স",
    "descriptionEn": "Classic iridium fountain pen with converter cartridge in velvet lined gift box.",
    "descriptionBn": "অভিজাত ক্যালিগ্রাফি ও স্বাক্ষর করার ফাউন্টেন ঝর্ণা কলম সেট।",
    "category": "cat_stationery",
    "priceUSD": 24.99,
    "discountPercent": 20,
    "images": [
      "https://images.unsplash.com/photo-1585336261026-8f5786372969?w=500&q=80"
    ],
    "sizes": [
      "Fine Nib"
    ],
    "colors": [
      {
        "nameEn": "Obsidian Black",
        "nameBn": "কালো",
        "hex": "#111111"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 88,
    "featuresEn": [
      "Iridium point nib",
      "Ink converter",
      "Metal gift box"
    ],
    "featuresBn": [
      "ইরিডিয়াম নিব",
      "কালি কনভার্টার",
      "মেটাল বক্সসহ"
    ]
  },
  {
    "id": "prod-stat-6",
    "nameEn": "A5 Spiral Bullet Dot Grid Journal",
    "nameBn": "A5 স্পাইরাল বুলেট ডট গ্রিড জার্নাল",
    "descriptionEn": "Hardcover spiral bound dot grid sketchbook with 160gsm bleedproof paper.",
    "descriptionBn": "ছবি আঁকা ও নোটিংয়ের জন্য ১৬০ জিএসএম পুরু কাগজের স্পাইরাল নোটবুক।",
    "category": "cat_stationery",
    "priceUSD": 14.99,
    "discountPercent": 15,
    "images": [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&q=80"
    ],
    "sizes": [
      "A5"
    ],
    "colors": [
      {
        "nameEn": "Sage Green",
        "nameBn": "সবুজ",
        "hex": "#9CAF88"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 94,
    "featuresEn": [
      "160gsm Bleedproof",
      "Dot grid format",
      "Elastic band"
    ],
    "featuresBn": [
      "১৬০ জিএসএম কাগজ",
      "ডট গ্রিড",
      "ইলাস্টিক ব্যান্ড"
    ]
  },
  {
    "id": "prod-stat-7",
    "nameEn": "Ergonomic Footrest Cushion for Office Desk",
    "nameBn": "এরগোনোমিক ফুটরেস্ট কুশন ফর অফিস ডেস্ক",
    "descriptionEn": "High density memory foam under-desk footrest pillow for posture support.",
    "descriptionBn": "অফিসে দীর্ঘক্ষণ বসে কাজ করার সময় পা উঁচুতে রাখার আরামদায়ক কুশন।",
    "category": "cat_stationery",
    "priceUSD": 29.99,
    "discountPercent": 25,
    "images": [
      "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=500&q=80"
    ],
    "sizes": [
      "One Size"
    ],
    "colors": [
      {
        "nameEn": "Black Velvet",
        "nameBn": "কালো",
        "hex": "#1C1C1C"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 115,
    "featuresEn": [
      "Memory foam core",
      "Non-slip bottom",
      "Machine washable"
    ],
    "featuresBn": [
      "মেমোরি ফোম",
      "পিছলে না যাওয়া তলা",
      "ধোয়া যায়"
    ]
  },
  {
    "id": "prod-stat-8",
    "nameEn": "Adjustable Aluminum Laptop Stand Holder",
    "nameBn": "অ্যাডজাস্টেবল অ্যালুমিনিয়াম ল্যাপটপ স্ট্যান্ড হোল্ডার",
    "descriptionEn": "Foldable ergonomic aluminum alloy desktop laptop riser for improved airflow.",
    "descriptionBn": "ল্যাপটপ উঁচু করে কাজ করার জন্য ভাঁজ করা যায় এমন অ্যালুমিনিয়াম স্ট্যান্ড।",
    "category": "cat_stationery",
    "priceUSD": 34.99,
    "discountPercent": 30,
    "images": [
      "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=500&q=80"
    ],
    "sizes": [
      "Universal"
    ],
    "colors": [
      {
        "nameEn": "Space Silver",
        "nameBn": "সিলভার",
        "hex": "#C0C0C0"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 140,
    "featuresEn": [
      "Aluminum alloy",
      "6 Angle height",
      "Foldable portable"
    ],
    "featuresBn": [
      "অ্যালুমিনিয়াম বডি",
      "৬টি অ্যাডজাস্টমেন্ট",
      "পোর্টেবল"
    ]
  },
  {
    "id": "prod-stat-9",
    "nameEn": "Dual-Sided PU Leather Large Desk Pad Mat",
    "nameBn": "ডুয়াল-সাইডেড পিইউ লেদার লার্জ ডেস্ক প্যাড ম্যাট",
    "descriptionEn": "Waterproof extended gaming mouse pad and blotter mat for office desktop.",
    "descriptionBn": "টেবিল ও কম্পিউটার সুন্দর রাখতে ওয়াটারপ্রুফ চামড়ার বড় সাইজ ডেস্ক ম্যাট।",
    "category": "cat_stationery",
    "priceUSD": 19.99,
    "discountPercent": 20,
    "images": [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&q=80"
    ],
    "sizes": [
      "80x40cm"
    ],
    "colors": [
      {
        "nameEn": "Dark Blue / Yellow",
        "nameBn": "ব্লু",
        "hex": "#000080"
      }
    ],
    "rating": 4.7,
    "reviewsCount": 82,
    "featuresEn": [
      "Dual-sided color",
      "Waterproof PU",
      "Easy wipe clean"
    ],
    "featuresBn": [
      "দুই পাশে ব্যবহার্য",
      "ওয়াটারপ্রুফ",
      "সহজে মোছা যায়"
    ]
  },
  {
    "id": "prod-stat-10",
    "nameEn": "12-Piece Fine Line Drawing Marker Pen Set",
    "nameBn": "১২-পিস ফাইন লাইন ড্রয়িং মার্কার পেন সেট",
    "descriptionEn": "0.4mm micro fine tip archivel ink fineliner pens for sketching and journaling.",
    "descriptionBn": "ড্রয়িং ও ক্যালিগ্রাফির জন্য ১২টি ভিন্ন রঙের ০.৪ মিমি ফাইন মার্কার সেট।",
    "category": "cat_stationery",
    "priceUSD": 16.99,
    "discountPercent": 15,
    "images": [
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=500&q=80"
    ],
    "sizes": [
      "0.4mm"
    ],
    "colors": [
      {
        "nameEn": "Assorted Colors",
        "nameBn": "রঙিন",
        "hex": "#FF0000"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 105,
    "featuresEn": [
      "0.4mm Metal tip",
      "Smudge-free ink",
      "12 Colors"
    ],
    "featuresBn": [
      "০.৪ মিমি নিব",
      "কালি ছড়ায় না",
      "১২টি সুন্দর রং"
    ]
  },
  {
    "id": "prod-stat-11",
    "nameEn": "Electric Pencil Sharpener Heavy Duty",
    "nameBn": "ইলেকট্রিক পেন্সিল শার্পনার হেভি ডিউটি",
    "descriptionEn": "Automatic helical steel blade battery operated pencil sharpener for kids and artists.",
    "descriptionBn": "পেন্সিল নিমেষে চোখালো করার জন্য পাওয়ারফুল ইলেকট্রিক শার্পনার।",
    "category": "cat_stationery",
    "priceUSD": 21.99,
    "discountPercent": 25,
    "images": [
      "https://images.unsplash.com/photo-1585336261026-8f5786372969?w=500&q=80"
    ],
    "sizes": [
      "One Size"
    ],
    "colors": [
      {
        "nameEn": "Sky Blue",
        "nameBn": "আকাশী",
        "hex": "#87CEEB"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 68,
    "featuresEn": [
      "Helical blade",
      "Auto stop feature",
      "USB or Battery"
    ],
    "featuresBn": [
      "স্টিল ব্লেড",
      "অটো স্টপ",
      "ইউএসবি রিচার্জ"
    ]
  },
  {
    "id": "prod-stat-12",
    "nameEn": "Magnetic Whiteboard Desktop Memo Board",
    "nameBn": "ম্যাগনেটিক হোয়াইটবোর্ড ডেসটপ মেমো বোর্ড",
    "descriptionEn": "Double-sided dry erase mini desktop whiteboard with marker and eraser set.",
    "descriptionBn": "টেবিলে নোট রাখা ও লেখার জন্য স্ট্যান্ডসহ মিনি ড্রাই-ইরেজ হোয়াইটবোর্ড।",
    "category": "cat_stationery",
    "priceUSD": 22.99,
    "discountPercent": 20,
    "images": [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&q=80"
    ],
    "sizes": [
      "A4"
    ],
    "colors": [
      {
        "nameEn": "White Aluminum",
        "nameBn": "সাদা",
        "hex": "#FFFFFF"
      }
    ],
    "rating": 4.7,
    "reviewsCount": 79,
    "featuresEn": [
      "Double sided",
      "Includes 3 markers",
      "Adjustable stand"
    ],
    "featuresBn": [
      "দুই পাশ ব্যবহার্য",
      "৩টি মার্কারসহ",
      "অ্যাডজাস্টেবল"
    ]
  },
  {
    "id": "prod-auto-1",
    "nameEn": "High-Power Car Vacuum Cleaner Portable",
    "nameBn": "হাই-পাওয়ার কার ভ্যাকিউম ক্লিনার পোর্টেবল",
    "descriptionEn": "Handheld 120W strong suction cordless car vacuum cleaner with washable HEPA filter.",
    "descriptionBn": "গাড়ির ভেতরের ধুলোবালি নিমেষে পরিষ্কার করতে অত্যন্ত শক্তিশালী পোর্টেবল ভ্যাকিউম।",
    "category": "cat_automotive",
    "priceUSD": 39.99,
    "discountPercent": 25,
    "images": [
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=500&q=80"
    ],
    "sizes": [
      "Portable"
    ],
    "colors": [
      {
        "nameEn": "Jet Black",
        "nameBn": "কালো",
        "hex": "#1C1C1C"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 135,
    "featuresEn": [
      "120W 8000Pa suction",
      "HEPA Washable filter",
      "USB Rechargeable"
    ],
    "featuresBn": [
      "১২০ ওয়াট শক্তিশালী সাকশন",
      "ধোয়া যায় এমন ফিল্টার",
      "রিচার্জেবল"
    ]
  },
  {
    "id": "prod-auto-2",
    "nameEn": "Magnetic Car Phone Mount Holder",
    "nameBn": "ম্যাগনেটিক কার ফোন মাউন্ট হোল্ডার",
    "descriptionEn": "360-degree rotation dashboard and air vent magnetic phone holder for safe driving.",
    "descriptionBn": "গাড়ির ড্যাশবোর্ডে নিরাপদে ফোন রেখে জিপিএস দেখার জন্য শক্তিশালী ম্যাগনেটিক হোল্ডার।",
    "category": "cat_automotive",
    "priceUSD": 14.99,
    "discountPercent": 20,
    "images": [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80"
    ],
    "sizes": [
      "Universal"
    ],
    "colors": [
      {
        "nameEn": "Metallic Silver",
        "nameBn": "সিলভার",
        "hex": "#C0C0C0"
      }
    ],
    "rating": 4.7,
    "reviewsCount": 180,
    "featuresEn": [
      "Strong N52 Magnets",
      "360 Deg Swivel",
      "Anti-shake pad"
    ],
    "featuresBn": [
      "শক্তিশালী চুম্বক",
      "৩৬০ ডিগ্রি ঘোরানো যায়",
      "ঝুঁকি মুক্ত লকিং"
    ]
  },
  {
    "id": "prod-auto-3",
    "nameEn": "Waterproof Memory Foam Car Seat Cushion",
    "nameBn": "ওয়াটারপ্রুফ মেমোরি ফোম কার সিট কুশন",
    "descriptionEn": "Ergonomic lumbar support memory foam seat pad for long driving comfort.",
    "descriptionBn": "দীর্ঘক্ষণ গাড়ি চালানোর সময় কোমর ও পিঠের ব্যথা মুক্ত রাখতে নরম সিট কুশন।",
    "category": "cat_automotive",
    "priceUSD": 29.99,
    "discountPercent": 15,
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&q=80"
    ],
    "sizes": [
      "Universal Fit"
    ],
    "colors": [
      {
        "nameEn": "Black Leather",
        "nameBn": "কালো চামড়া",
        "hex": "#111111"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 92,
    "featuresEn": [
      "High-density memory foam",
      "Non-slip bottom",
      "Breathable leather"
    ],
    "featuresBn": [
      "মেমোরি ফোম ইনসোল",
      "পিছলে যাওয়া প্রতিরোধী",
      "চামড়ার কভার"
    ]
  },
  {
    "id": "prod-auto-4",
    "nameEn": "Digital Tire Pressure Gauge & Air Pump",
    "nameBn": "ডিজিটাল টায়ার প্রেসার গেজ ও এয়ার পাম্প",
    "descriptionEn": "Portable digital electric tire inflator pump with LCD display and emergency LED light.",
    "descriptionBn": "গাড়ির চাকার হাওয়া মাপা এবং দ্রুত পাম্প করার ডিজিটাল রিচার্জেবল ড্যাশবোর্ড পাম্প।",
    "category": "cat_automotive",
    "priceUSD": 49.99,
    "discountPercent": 30,
    "images": [
      "https://images.unsplash.com/photo-1563720223185-11003d516935?w=500&q=80"
    ],
    "sizes": [
      "150 PSI"
    ],
    "colors": [
      {
        "nameEn": "Dark Carbon",
        "nameBn": "ধূসর",
        "hex": "#2B2B2B"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 74,
    "featuresEn": [
      "Auto shut-off preset",
      "LCD Screen",
      "Built-in LED Torch"
    ],
    "featuresBn": [
      "অটো অফ প্রেসেট",
      "এলসিডি স্ক্রিন",
      "ইমার্জেন্সি লাইট"
    ]
  },
  {
    "id": "prod-auto-5",
    "nameEn": "1080P Dash Cam Car Camera Video Recorder",
    "nameBn": "1080P ড্যাশ ক্যাম কার ক্যামেরা ভিডিও রেকর্ডার",
    "descriptionEn": "Full HD 1080P dashboard camera with night vision, loop recording, and G-sensor collision lock.",
    "descriptionBn": "দুর্ঘটনার রিয়েল-টাইম ভিডিও রেকর্ড করার নাইট ভিশন ড্যাশ ক্যামেরা।",
    "category": "cat_automotive",
    "priceUSD": 59.99,
    "discountPercent": 30,
    "images": [
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=500&q=80"
    ],
    "sizes": [
      "3 inch Screen"
    ],
    "colors": [
      {
        "nameEn": "Matte Black",
        "nameBn": "কালো",
        "hex": "#0F0F0F"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 140,
    "featuresEn": [
      "1080P Full HD",
      "G-Sensor collision lock",
      "Night vision IR"
    ],
    "featuresBn": [
      "১০৮০পি ফুল এইচডি",
      "জি-সেন্সর লক",
      "নাইট ভিশন"
    ]
  },
  {
    "id": "prod-auto-6",
    "nameEn": "High-Glow Car LED Headlight Bulb Set",
    "nameBn": "হাই-গ্লো কার এলইডি হেডলাইট বাল্ব সেট",
    "descriptionEn": "Super bright 16000LM 6500K cool white LED headlight conversion kit 2-pack.",
    "descriptionBn": "রাতে গাড়ির আলো বহুগুণ বাড়াতে ২০০০০ লুমেন এলইডি হেডলাইট সেট।",
    "category": "cat_automotive",
    "priceUSD": 44.99,
    "discountPercent": 25,
    "images": [
      "https://images.unsplash.com/photo-1563720223185-11003d516935?w=500&q=80"
    ],
    "sizes": [
      "H7 / H11 / 9005"
    ],
    "colors": [
      {
        "nameEn": "6500K Cool White",
        "nameBn": "সাদা আলো",
        "hex": "#FFFFFF"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 112,
    "featuresEn": [
      "16000 Lumens",
      "IP68 Waterproof",
      "Built-in cooling fan"
    ],
    "featuresBn": [
      "১৬০০০ লুমেন",
      "ওয়াটারপ্রুফ",
      "কুলিং ফ্যানসহ"
    ]
  },
  {
    "id": "prod-auto-7",
    "nameEn": "Multi-Function Car Seat Organizer Back Pocket",
    "nameBn": "মাল্টি-ফাংশন কার সিট অর্গানাইজার ব্যাক পকেট",
    "descriptionEn": "PU leather car backseat organizer with foldable dining table tray and tablet holder.",
    "descriptionBn": "গাড়ির সিটের পেছনে পানি, ফোন ও ট্যাবলেট রাখার সুদৃশ্য চামড়ার অর্গানাইজার।",
    "category": "cat_automotive",
    "priceUSD": 21.99,
    "discountPercent": 15,
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&q=80"
    ],
    "sizes": [
      "Universal"
    ],
    "colors": [
      {
        "nameEn": "Luxury Black",
        "nameBn": "কালো",
        "hex": "#111111"
      }
    ],
    "rating": 4.7,
    "reviewsCount": 95,
    "featuresEn": [
      "Foldable tray table",
      "PU Leather",
      "Tablet holder pocket"
    ],
    "featuresBn": [
      "টেবিল ট্রে",
      "চামড়ার কভার",
      "ট্যাবলেট রাখার স্থান"
    ]
  },
  {
    "id": "prod-auto-8",
    "nameEn": "Microfiber Auto Detailing Washing Towels 4-Pack",
    "nameBn": "মাইক্রোফাইবার অটো ডিটেইলিং ওয়াশিং টাওয়েল ৪-প্যাক",
    "descriptionEn": "Pack of 4 plush 800gsm lint-free car cleaning and polishing drying cloths.",
    "descriptionBn": "গাড়ি মোছা ও স্ক্র্যাচ মুক্ত পালিশ করার জন্য ৮০০ জিএসএম ৪-প্যাক মাইক্রোফাইবার কাপড়।",
    "category": "cat_automotive",
    "priceUSD": 18.99,
    "discountPercent": 20,
    "images": [
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=500&q=80"
    ],
    "sizes": [
      "40x40cm"
    ],
    "colors": [
      {
        "nameEn": "Yellow Grey",
        "nameBn": "হলুদ",
        "hex": "#FFD700"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 165,
    "featuresEn": [
      "800gsm Super plush",
      "Lint & Scratch free",
      "Absorbs 10x water"
    ],
    "featuresBn": [
      "৮০০ জিএসএম",
      "স্ক্র্যাচ মুক্ত",
      "পানি শোষণে পারদর্শী"
    ]
  },
  {
    "id": "prod-auto-9",
    "nameEn": "Bluetooth FM Transmitter Car Wireless Adapter",
    "nameBn": "ব্লুটুথ এফএম ট্রান্সমিটার কার ওয়ারলেস অ্যাডাপ্টার",
    "descriptionEn": "Bluetooth 5.0 wireless audio receiver with Type-C QC3.0 fast car charger adapter.",
    "descriptionBn": "গাড়ির মিউজিক সিস্টেমে ফোন কানেক্ট করার জন্য টাইপ-সি ফাস্ট চার্জার এফএম প্লেয়ার।",
    "category": "cat_automotive",
    "priceUSD": 19.99,
    "discountPercent": 25,
    "images": [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80"
    ],
    "sizes": [
      "12V-24V"
    ],
    "colors": [
      {
        "nameEn": "Glossy Black",
        "nameBn": "কালো",
        "hex": "#151515"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 130,
    "featuresEn": [
      "QC3.0 Fast charging",
      "Hands-free mic",
      "LED Voltage display"
    ],
    "featuresBn": [
      "ফাস্ট চার্জিং",
      "হ্যান্ডস-ফ্রি কল",
      "ভোল্টেজ ডিসপ্লে"
    ]
  },
  {
    "id": "prod-auto-10",
    "nameEn": "Heavy-Duty All-Weather Rubber Car Floor Mats",
    "nameBn": "হেভি-ডিউটি অল-ওয়েদার রাবার কার ফ্লোর ম্যাটস",
    "descriptionEn": "Universal trim-to-fit thick rubber floor mats for car front and rear protection.",
    "descriptionBn": "গাড়ির মেঝে ধুলোবালি ও পানি থেকে সুরক্ষায় কাট-টু-ফিট রাবার ফ্লোর ম্যাট।",
    "category": "cat_automotive",
    "priceUSD": 49.99,
    "discountPercent": 20,
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&q=80"
    ],
    "sizes": [
      "4-Piece Set"
    ],
    "colors": [
      {
        "nameEn": "Deep Black",
        "nameBn": "কালো",
        "hex": "#000000"
      }
    ],
    "rating": 4.7,
    "reviewsCount": 88,
    "featuresEn": [
      "Heavy-duty rubber",
      "Non-skid nibs",
      "Easy hose washable"
    ],
    "featuresBn": [
      "মজবুত রাবার",
      "গ্রিপ বাটন",
      "সহজে ধোয়া যায়"
    ]
  },
  {
    "id": "prod-auto-11",
    "nameEn": "Solar Powered Car Air Freshener Purifier",
    "nameBn": "সোলার পাওয়ার্ড কার এয়ার ফ্রেশনার পিউরিফায়ার",
    "descriptionEn": "Double ring rotating solar powered essential oil aroma diffuser for car interior.",
    "descriptionBn": "সূর্যের আলোতে স্বয়ংক্রিয়ভাবে ঘোরা এবং সুবাস ছড়ানো সোলার কার এয়ার ফ্রেশনার।",
    "category": "cat_automotive",
    "priceUSD": 24.99,
    "discountPercent": 30,
    "images": [
      "https://images.unsplash.com/photo-1563720223185-11003d516935?w=500&q=80"
    ],
    "sizes": [
      "Dashboard"
    ],
    "colors": [
      {
        "nameEn": "Metallic Red",
        "nameBn": "লাল",
        "hex": "#DC143C"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 104,
    "featuresEn": [
      "Solar panel motor",
      "Essential oil ring",
      "Zinc alloy body"
    ],
    "featuresBn": [
      "সোলার মোটর",
      "এসেনশিয়াল ওয়েল",
      "মেটাল বডি"
    ]
  },
  {
    "id": "prod-auto-12",
    "nameEn": "Emergency Car Battery Jump Starter Power Bank",
    "nameBn": "ইমার্জেন্সি কার ব্যাটারি জাম্প স্টার্টার পাওয়ার ব্যাংক",
    "descriptionEn": "1200A peak current 12V portable car battery jump starter with USB fast power bank and LED light.",
    "descriptionBn": "গাড়ির ব্যাটারি ডাউন হলে তাৎক্ষণিক স্টার্ট নেওয়ার জন্য ইমার্জেন্সি জাম্প স্টার্টার।",
    "category": "cat_automotive",
    "priceUSD": 89.99,
    "discountPercent": 35,
    "images": [
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=500&q=80"
    ],
    "sizes": [
      "12000mAh"
    ],
    "colors": [
      {
        "nameEn": "Red Black",
        "nameBn": "লাল কালো",
        "hex": "#B22234"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 150,
    "featuresEn": [
      "1200A Peak Current",
      "Smart Jumper Clamps",
      "Emergency LED Strobe"
    ],
    "featuresBn": [
      "১২০০এ কারেন্ট",
      "স্মার্ট ক্ল্যাম্পস",
      "ইমার্জেন্সি লাইটিং"
    ]
  }
];
