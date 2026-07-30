"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { superGrotesk, prompt } from "@/lib/fonts";

export interface ProductDiscoveryItem {
  id: string;
  name: string;
  weight: string;
  imageUrl: string;
  linkHref?: string;
}

// Replace each imageUrl with the real product photography — these are
// placeholder paths, matching the pattern used elsewhere on the site.
const discoveryProducts: ProductDiscoveryItem[] = [
  {
    id: "tomato-sauce-405g",
    name: "Tomato Sauce 405g",
    weight: "405g",
    imageUrl: "/images/home/4.png",
    linkHref: "#tomato-sauce",
  },
  {
    id: "sweet-chilli-200g",
    name: "Mixed Fruit Jam 200g",
    weight: "200g",
    imageUrl: "/images/home/13.png",
    linkHref: "#sweet-chilli",
  },
  {
    id: "chilli-garlic-200g",
    name: "Oyster Sauce 200g",
    weight: "200g",
    imageUrl: "/images/home/18.png",
    linkHref: "#chilli-garlic",
  },
  {
    id: "tomato-ketchup-405g",
    name: "Tomato Ketchup 405g",
    weight: "405g",
    imageUrl: "/images/home/5.png",
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
      <div className="max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-6">
        {/* Header Row */}
        <div className="flex items-end justify-between mb-8 gap-4">
          {/* Eyebrow & Title */}
          <div>
            <span
              className={`${prompt.className} text-xs md:text-sm font-normal text-slate-500 block mb-1`}
            >
              Everyday Goodness, Made Better
            </span>
            <h2
              className={`${superGrotesk.className} text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-slate-900 uppercase`}
            >
              PRODUCT DISCOVERY
            </h2>
          </div>

          {/* Controls: SHOP ALL Link & Navigation Arrows */}
          <div className="flex items-center gap-3 pb-1">
            <a
              href="#shop-all"
              className={`${superGrotesk.className} text-xs md:text-sm font-normal uppercase tracking-wider text-slate-900 hover:text-[#E31E24] transition-colors`}
            >
              SHOP ALL
            </a>

            <div className="flex items-center gap-1.5">
              <button
                onClick={handleScrollLeft}
                className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-slate-800 transition-colors focus:outline-none"
                aria-label="Previous Products"
              >
                <ArrowLeft className="w-4 h-4" strokeWidth={2} />
              </button>

              <button
                onClick={handleScrollRight}
                className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-slate-800 transition-colors focus:outline-none"
                aria-label="Next Products"
              >
                <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div
          ref={scrollRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 overflow-x-auto scrollbar-none pb-2"
        >
          {discoveryProducts.map((prod) => (
            <a
              key={prod.id}
              href={prod.linkHref || "#"}
              className="group flex flex-col cursor-pointer"
            >
              {/* Product photo, on a light gray card */}
              <div className="relative w-full aspect-[4/5] bg-[#F2F2F2] overflow-hidden mb-4 p-8 transition-colors duration-300 group-hover:bg-[#EAEAEA]">
                <Image
                  src={prod.imageUrl}
                  alt={prod.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Product Title below card */}
              <h3
                className={`${prompt.className} text-xl font-medium pl-5 text-slate-900 tracking-tight group-hover:text-[#E31E24] transition-colors`}
              >
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