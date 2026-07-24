"use client";

import React, { useRef } from "react";

export interface ProductDiscoveryItem {
  id: string;
  name: string;
  weight: string;
  imageUrl?: string;
  bgGradient?: string;
  capColor?: string;
  labelBg?: string;
  labelText?: string;
  linkHref?: string;
}

const discoveryProducts: ProductDiscoveryItem[] = [
  {
    id: "tomato-sauce-405g",
    name: "Tomato Sauce 405g",
    weight: "405g",
    capColor: "bg-[#E31E24]",
    labelBg: "bg-[#E31E24]",
    labelText: "Tomato Sauce",
    linkHref: "#tomato-sauce",
  },
  {
    id: "sweet-chilli-200g",
    name: "Sweet Chilli Sauce 200g",
    weight: "200g",
    capColor: "bg-slate-900",
    labelBg: "bg-amber-600",
    labelText: "Mixed Fruit Jam",
    linkHref: "#sweet-chilli",
  },
  {
    id: "chilli-garlic-200g",
    name: "Chilli & Garlic Sauce 200g",
    weight: "200g",
    capColor: "bg-[#E31E24]",
    labelBg: "bg-slate-900",
    labelText: "OYSTER SAUCE",
    linkHref: "#chilli-garlic",
  },
  {
    id: "tomato-ketchup-405g",
    name: "Tomato Ketchup 405g",
    weight: "405g",
    capColor: "bg-[#15803D]",
    labelBg: "bg-[#E31E24]",
    labelText: "Tomato Ketchup",
    linkHref: "#tomato-ketchup",
  },
];

export const ProductDiscoverySection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 md:py-16 bg-white border-t border-slate-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row */}
        <div className="flex items-end justify-between mb-8 gap-4">
          {/* Eyebrow & Title */}
          <div>
            <span className="text-xs md:text-sm font-medium text-slate-500 block mb-1">
              Everyday Goodness, Made Better
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-slate-900 uppercase font-sans">
              PRODUCT DISCOVERY
            </h2>
          </div>

          {/* Controls: SHOP ALL Link & Navigation Arrows */}
          <div className="flex items-center gap-3 pb-1">
            <a
              href="#shop-all"
              className="text-xs md:text-sm font-bold uppercase tracking-wider text-slate-900 hover:text-[#E31E24] transition-colors"
            >
              SHOP ALL
            </a>

            <div className="flex items-center gap-1.5">
              <button
                onClick={handleScrollLeft}
                className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-slate-800 transition-colors focus:outline-none"
                aria-label="Previous Products"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={handleScrollRight}
                className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-slate-800 transition-colors focus:outline-none"
                aria-label="Next Products"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div
          ref={scrollRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 overflow-x-auto scrollbar-none pb-2"
        >
          {discoveryProducts.map((prod) => (
            <a
              key={prod.id}
              href={prod.linkHref || "#"}
              className="group flex flex-col cursor-pointer"
            >
              {/* Product Background Card Box */}
              <div className="relative w-full aspect-[4/5] bg-[#F2F2F2] rounded-none overflow-hidden mb-4 flex items-center justify-center p-8 transition-colors duration-300 group-hover:bg-[#EAEAEA]">
                {/* Clean Product Bottle Representation */}
                <div className="relative w-28 h-56 flex flex-col items-center justify-between py-2 transition-transform duration-300 group-hover:scale-105">
                  {/* Cap */}
                  <div
                    className={`w-7 h-8 ${prod.capColor} rounded-t-lg shadow-sm border-b border-black/20 z-10`}
                  />

                  {/* Bottle Body */}
                  <div className="relative w-full flex-1 bg-white/40 backdrop-blur-xs rounded-3xl border border-white/60 shadow-md flex flex-col items-center justify-center p-2 my-0.5 overflow-hidden">
                    {/* Bottle Neck Ring */}
                    <div className="w-14 h-6 bg-[#15803D] rounded-full mb-2 flex items-center justify-center shadow-inner">
                      <span className="text-[7px] font-black text-amber-300 tracking-tighter">
                        EDINBOROUGH
                      </span>
                    </div>

                    {/* Main Bottle Label */}
                    <div
                      className={`w-full ${prod.labelBg} text-white rounded-xl p-2 text-center shadow-sm`}
                    >
                      <span className="text-[8px] font-extrabold uppercase tracking-widest text-amber-300 block">
                        Edinborough
                      </span>
                      <span className="text-[10px] font-black uppercase tracking-tight leading-none block my-0.5">
                        {prod.labelText}
                      </span>
                      <div className="mt-1 flex items-center justify-center gap-0.5 text-[6px] text-white/90">
                        <span className="bg-white/20 px-1 py-0.2 rounded">
                          QUALITY
                        </span>
                        <span className="bg-white/20 px-1 py-0.2 rounded">
                          PURE
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bottle Base */}
                  <div className="w-20 h-4 bg-slate-300/60 rounded-b-lg border-t border-slate-400/30" />
                </div>
              </div>

              {/* Product Title below card */}
              <h3 className="text-base font-bold text-slate-900 tracking-tight group-hover:text-[#E31E24] transition-colors">
                {prod.name}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDiscoverySection;
