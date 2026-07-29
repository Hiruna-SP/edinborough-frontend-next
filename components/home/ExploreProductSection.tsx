"use client";

import React, { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { superGrotesk, prompt } from "@/lib/fonts";
import Image from "next/image";

export interface ExploreCategory {
  id: string;
  title: string;
  dotColor: string; // Tailwind background color class or hex
  imageUrl: string;
  linkHref?: string;
}

const defaultCategories: ExploreCategory[] = [
  {
    id: "red-sauces",
    title: "RED SAUCES",
    dotColor: "bg-[#E31E24]",
    imageUrl: "/images/home/tomato.png",
    linkHref: "#red-sauces",
  },
  {
    id: "dark-sauces",
    title: "DARK SAUCES",
    dotColor: "bg-[#4A2E1C]",
    imageUrl: "/images/home/soya.png",
    linkHref: "#dark-sauces",
  },
  {
    id: "dipping-spreads",
    title: "DIPPING & SPREADS",
    dotColor: "bg-[#1E60B6]",
    imageUrl: "/images/home/mayonnaise.png",
    linkHref: "#dipping-spreads",
  },
  {
    id: "food-beverages",
    title: "FOOD & BEVERAGES",
    dotColor: "bg-[#EAB308]",
    imageUrl: "/images/home/jam.png",
    linkHref: "#food-beverages",
  },
];

export const ExploreProductSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-6">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          {/* Main Title */}
          <div>
            <h2
              className={`${superGrotesk.className} text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-slate-900 uppercase`}
            >
              EXPLORE OUR PRODUCT COLLECTION
            </h2>
          </div>

          {/* Right Controls Area: View All & Carousel Controls */}
          <div className="flex flex-col items-end gap-3 self-end sm:self-auto">
            <div className="flex items-center gap-3">
              <a
                href="#all-products"
                className={`${superGrotesk.className} text-sm font-normal uppercase tracking-wider text-slate-800 hover:text-[#E31E24] transition-colors`}
              >
                VIEW ALL
              </a>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={handleScrollLeft}
                  className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-slate-800 transition-colors focus:outline-none"
                  aria-label="Previous Slide"
                >
                  <ArrowLeft className="w-4 h-4" strokeWidth={2} />
                </button>

                <button
                  onClick={handleScrollRight}
                  className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-slate-800 transition-colors focus:outline-none"
                  aria-label="Next Slide"
                >
                  <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Cards Grid / Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 overflow-x-auto scrollbar-none pb-2"
        >
          {defaultCategories.map((cat) => (
            <a
              key={cat.id}
              href={cat.linkHref || "#"}
              className="group flex flex-col cursor-pointer"
            >
              {/* Product Image Card */}
              <div className="relative w-full aspect-[3/4] bg-slate-100 rounded-none overflow-hidden mb-3">
                <Image
                  src={cat.imageUrl}
                  alt={cat.title}
                  fill
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Title & Color Indicator Row */}
              <div className="flex items-center justify-between pt-2 px-3 ">
                <h3
                  className={`${superGrotesk.className} text-2xl  font-normal tracking-tight text-slate-900 uppercase`}
                >
                  {cat.title}
                </h3>
                <span
                  className={`w-3.5 h-3.5 -pl-3 rounded-full inline-block ${cat.dotColor}`}
                />
              </div>

              {/* Subtext */}
              <span
                className={`${prompt.className} text-xs pl-3 font-normal text-slate-500 group-hover:text-slate-900 transition-colors`}
              >
                View Category
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreProductSection;