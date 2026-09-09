"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { superGrotesk } from "@/lib/fonts";
import TextBanner from "@/components/common/textBanner";
import CarouselControls from "@/components/common/carousel";

export interface YouMayAlsoLikeItem {
  imageSrc: string;
  imageAlt: string;
  title: string;
  detailsHref: string;
}

interface YouMayAlsoLikeProps {
  title?: string;
  titleColor?: string;
  items: YouMayAlsoLikeItem[];
  viewAllText?: string;
  viewAllHref?: string;
  perPage?: number;
}

/**
 * YouMayAlsoLike - "YOU MAY ALSO LIKE" header (with a "View All" link plus
 * prev/next arrows) above a row of minimal recipe tiles: a framed image with
 * the recipe title below it, nothing else. At most `perPage` tiles (default 4)
 * are visible at once; extra items turn the row into a carousel driven by the
 * header arrows.
 *
 * Usage:
 * <YouMayAlsoLike
 *   viewAllHref="/our-recipes"
 *   items={[
 *     {
 *       imageSrc: "/images/recipes/8.png",
 *       imageAlt: "Simple fried rice",
 *       title: "Simple Fried Rice",
 *       detailsHref: "/recipes/simple-fried-rice",
 *     },
 *   ]}
 * />
 *
 * Props:
 * @param {string} [title]        - Header text (default: "You May Also Like").
 * @param {string} [titleColor]   - Color for the header (default: "#000000").
 * @param {YouMayAlsoLikeItem[]} items - Tiles: { imageSrc, imageAlt, title, detailsHref }.
 * @param {string} [viewAllText]  - Text for the header link (default: "View All").
 * @param {string} [viewAllHref]  - Link for the header "View All" action.
 * @param {number} [perPage]      - Tiles visible at once before the row scrolls (default: 4).
 */
export default function YouMayAlsoLike({
  title = "You May Also Like",
  titleColor = "#000000",
  items,
  viewAllText = "View All",
  viewAllHref,
  perPage = 4,
}: YouMayAlsoLikeProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const firstItemRef = useRef<HTMLDivElement | null>(null);
  const showCarousel = items.length > perPage;
  const visibleCount = Math.min(items.length, perPage) || 1;
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);

  const updateEdges = () => {
    const el = scrollRef.current;
    if (!el) return;
    setPrevDisabled(el.scrollLeft <= 0);
    setNextDisabled(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
  };

  useEffect(() => {
    if (!showCarousel) return;
    updateEdges();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateEdges);
    window.addEventListener("resize", updateEdges);
    return () => {
      el.removeEventListener("scroll", updateEdges);
      window.removeEventListener("resize", updateEdges);
    };
  }, [showCarousel, items.length, perPage]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    const item = firstItemRef.current;
    if (!el || !item) return;
    const gap = parseFloat(getComputedStyle(el).columnGap || "0") || 0;
    const amount = item.offsetWidth + gap;
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <>
      <TextBanner
        title={title}
        titleColor={titleColor}
        action={
          <CarouselControls
            label={viewAllText}
            href={viewAllHref}
            onPrev={() => scroll("left")}
            onNext={() => scroll("right")}
            prevDisabled={showCarousel ? prevDisabled : true}
            nextDisabled={showCarousel ? nextDisabled : true}
          />
        }
      />

      <div className="px-6 pb-10 sm:px-10 lg:px-16 lg:pb-14 xl:px-10">
        <div className="mx-auto max-w-[1920px]">
          <div
            ref={scrollRef}
            className={
              showCarousel
                ? "flex gap-6 overflow-x-auto scroll-smooth scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                : "flex gap-6"
            }
          >
            {items.map((item, i) => (
              <div
                key={`${item.title}-${i}`}
                ref={i === 0 ? (el) => { firstItemRef.current = el; } : undefined}
                style={{
                  flex: `0 0 calc((100% - ${(visibleCount - 1) * 1.5}rem) / ${visibleCount})`,
                }}
              >
                <Link href={item.detailsHref} className="group flex flex-col">
                  <div className="bg-[#F5F5F5] p-4">
                    <div className="relative aspect-4/3 w-full overflow-hidden bg-[#F0F0F0]">
                      <Image
                        src={item.imageSrc}
                        alt={item.imageAlt}
                        fill
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        sizes="(min-width: 1024px) 25vw, 50vw"
                      />
                    </div>
                  </div>
                  <h3
                    className={`${superGrotesk.className} mt-4 text-lg font-normal leading-snug text-[#111111] sm:text-xl`}
                  >
                    {item.title}
                  </h3>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
