"use client";

import React, { useRef } from "react";
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
    imageUrl: "/images/explore/red_sauces.png",
    linkHref: "#red-sauces",
  },
  {
    id: "dark-sauces",
    title: "DARK SAUCES",
    dotColor: "bg-[#4A2E1C]",
    imageUrl: "/images/explore/dark_sauces.png",
    linkHref: "#dark-sauces",
  },
  {
    id: "dipping-spreads",
    title: "DIPPING & SPREADS",
    dotColor: "bg-[#1E60B6]",
    imageUrl: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
    linkHref: "#dipping-spreads",
  },
  {
    id: "food-beverages",
    title: "FOOD & BEVERAGES",
    dotColor: "bg-[#EAB308]",
    imageUrl: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
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
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          {/* Main Title */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-slate-900 uppercase font-sans">
              EXPLORE OUR PRODUCT COLLECTION
            </h2>
          </div>

          {/* Right Controls Area: Visit Store Button & View All Carousel Controls */}
          <div className="flex flex-col items-end gap-3 self-end sm:self-auto">

            {/* View All text & Navigation Arrows */}
            <div className="flex items-center gap-3">
              <a
                href="#all-products"
                className="text-xs font-bold uppercase tracking-wider text-slate-800 hover:text-[#E31E24] transition-colors"
              >
                VIEW ALL
              </a>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={handleScrollLeft}
                  className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-slate-800 transition-colors focus:outline-none"
                  aria-label="Previous Slide"
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
                  aria-label="Next Slide"
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
        </div>

        {/* 4 Cards Grid / Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 overflow-x-auto scrollbar-none pb-2"
        >
          {defaultCategories.map((cat) => (
            <a
              key={cat.id}
              href={cat.linkHref || "#"}
              className="group flex flex-col cursor-pointer"
            >
              {/* Product Image Card */}
              <div className="relative w-full aspect-[3/4] bg-slate-100 rounded-none overflow-hidden mb-3">
                <img
                  src={cat.imageUrl}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Title & Color Indicator Row */}
              <div className="flex items-center justify-between pt-1">
                <h3 className="text-base font-extrabold tracking-tight text-slate-900 uppercase">
                  {cat.title}
                </h3>
                <span
                  className={`w-3.5 h-3.5 rounded-full inline-block ${cat.dotColor}`}
                />
              </div>

              {/* Subtext */}
              <span className="text-xs text-slate-500 font-medium group-hover:text-slate-900 transition-colors">
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
