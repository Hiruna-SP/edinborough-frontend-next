"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import CarouselControls from "@/components/common/carousel";
import TextBanner from "@/components/common/textBanner";

export interface Brand {
  name: string;
  logoSrc: string;
  logoAlt: string;
  href?: string;
}

interface BrandsShowcaseProps {
  title: string;
  titleColor?: string;
  text?: string;
  textColor?: string;
  brands: Brand[];
  seeAllText?: string;
  seeAllHref?: string;
  perPage?: number;
}

/**
 * BrandsShowcase - Title/text header row + a full-width row of brand logos,
 * evenly spaced across the container (like a grid with equal columns).
 * At most `perPage` brands (default 6) are visible at once. If more brands
 * are passed, the row becomes a scrollable carousel — the "See All" +
 * prev/next arrows appear in the header, and each click slides the row by
 * one brand (the leftmost brand disappears off the left as the next hidden
 * brand slides in on the right). With `perPage` or fewer brands, it's a
 * single full-width row — no controls needed, and the logos stretch out to
 * fill the width with equal spacing between them.
 *
 * Usage:
 * <BrandsShowcase
 *   title="Our Brands"
 *   text="We offer a diverse portfolio of trusted brands, each crafted to deliver exceptional taste, quality and reliable across every product category."
 *   seeAllText="See All"
 *   seeAllHref="/brands"
 *   brands={[
 *     { name: "Happymaid", logoSrc: "/images/brands/happymaid.png", logoAlt: "Happymaid logo" },
 *     { name: "Edinborough", logoSrc: "/images/brands/edinborough.png", logoAlt: "Edinborough logo" },
 *     { name: "Pasha", logoSrc: "/images/brands/pasha.png", logoAlt: "Pasha logo" },
 *     { name: "ChefMate", logoSrc: "/images/brands/chefmate.png", logoAlt: "ChefMate logo" },
 *     { name: "Pacific Choice", logoSrc: "/images/brands/pacific-choice.png", logoAlt: "Pacific Choice logo" },
 *     { name: "Mity", logoSrc: "/images/brands/mity.png", logoAlt: "Mity logo" },
 *   ]}
 * />
 *
 * Props:
 * @param {string} title          - Section heading (e.g. "Our Brands").
 * @param {string} [titleColor]   - Color for the heading (default: "#111111").
 * @param {string} [text]         - Paragraph below the heading. Omit to render no text.
 * @param {string} [textColor]    - Color for the paragraph (default: "#4B4B4B").
 * @param {Brand[]} brands         - Brand logos to display, in order.
 * @param {string} [seeAllText]   - Label shown next to the carousel arrows (default: "See All"). Only shown when the carousel is active.
 * @param {string} [seeAllHref]   - Link for the "See All" label. Omit to render it as plain text.
 * @param {number} [perPage]      - Max brands visible at once, evenly spaced across the full width (default 6). Extra brands scroll in one at a time via the carousel.
 *
 * Brand:
 * @param {string} name      - Brand name (used for the key, not displayed).
 * @param {string} logoSrc   - Path or URL to the logo image.
 * @param {string} logoAlt   - Alt text for the logo.
 * @param {string} [href]    - Optional link the logo points to.
 */
export default function BrandsShowcase({
  title,
  titleColor = "#000",
  text,
  textColor = "#000",
  brands,
  seeAllText = "See All",
  seeAllHref,
  perPage = 6,
}: BrandsShowcaseProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const firstItemRef = useRef<HTMLElement | null>(null);
  const showCarousel = brands.length > perPage;
  const visibleCount = Math.min(brands.length, perPage) || 1;
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
  }, [showCarousel, brands.length, perPage]);

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
        text={text ?? ""}
        textColor={textColor}
        action={
          showCarousel ? (
            <CarouselControls
              label={seeAllText}
              href={seeAllHref}
              onPrev={() => scroll("left")}
              onNext={() => scroll("right")}
              prevDisabled={prevDisabled}
              nextDisabled={nextDisabled}
            />
          ) : undefined
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
            {brands.map((brand, i) => {
              const logo = (
                <div className="relative mx-auto h-14 w-32 sm:h-16 sm:w-40">
                  <Image
                    src={brand.logoSrc}
                    alt={brand.logoAlt}
                    fill
                    className="object-contain"
                    sizes="160px"
                  />
                </div>
              );

              const style = {
                flex: `0 0 calc((100% - ${(visibleCount - 1) * 1.5}rem) / ${visibleCount})`,
              };

              return brand.href ? (
                <a
                  key={`${brand.name}-${i}`}
                  ref={i === 0 ? (el) => { firstItemRef.current = el; } : undefined}
                  href={brand.href}
                  className="flex justify-center"
                  style={style}
                >
                  {logo}
                </a>
              ) : (
                <div
                  key={`${brand.name}-${i}`}
                  ref={i === 0 ? (el) => { firstItemRef.current = el; } : undefined}
                  className="flex justify-center"
                  style={style}
                >
                  {logo}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
