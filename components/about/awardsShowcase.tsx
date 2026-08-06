"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import CarouselControls from "@/components/common/carousel";
import TextBanner from "@/components/common/textBanner";

export interface Award {
  imageSrc: string;
  imageAlt: string;
}

interface AwardsShowcaseProps {
  title: string;
  titleColor?: string;
  text?: string;
  textColor?: string;
  awards: Award[];
  seeAllText?: string;
  seeAllHref?: string;
  perPage?: number;
}

/**
 * AwardsShowcase - Title/text header row + a row of award cards, each a
 * single pre-designed image (year, title, and description are baked into
 * the artwork itself), evenly spaced across the container. At most
 * `perPage` cards (default 5) are visible at once. If more awards are
 * passed, the row becomes a scrollable carousel — the "See All" + prev/next
 * arrows appear in the header, and each click slides the row by one card.
 * With `perPage` or fewer awards, it's a single full-width row — no
 * controls needed.
 *
 * Usage:
 * <AwardsShowcase
 *   title="Our Awards & Recognitions"
 *   text="These accolades inspire us to continue raising the bar and creating products that bring pride to Sri Lanka."
 *   seeAllText="View All"
 *   seeAllHref="/awards"
 *   awards={[
 *     { imageSrc: "/images/about/award-1973.png", imageAlt: "1973 - Edinborough Established in Sri Lanka - A Heritage of Flavour" },
 *     { imageSrc: "/images/about/award-1975.png", imageAlt: "1975 - National Chamber Export Award - For Business Excellence" },
 *   ]}
 * />
 *
 * Props:
 * @param {string} title            - Section heading (e.g. "Our Awards & Recognitions").
 * @param {string} [titleColor]     - Color for the heading (default: "#000000").
 * @param {string} [text]           - Paragraph below the heading. Omit to render no text.
 * @param {string} [textColor]      - Color for the paragraph (default: "#000000").
 * @param {Award[]} awards          - Award cards to display, in order.
 * @param {string} [seeAllText]     - Label shown next to the carousel arrows (default: "View All"). Only shown when the carousel is active.
 * @param {string} [seeAllHref]     - Link for the "See All" label. Omit to render it as plain text.
 * @param {number} [perPage]        - Max cards visible at once, evenly spaced across the full width (default 5). Extra cards scroll in one at a time via the carousel.
 *
 * Award:
 * @param {string} imageSrc      - Path or URL to the award artwork (design already includes year/title/description).
 * @param {string} imageAlt      - Alt text describing the award.
 */
export default function AwardsShowcase({
  title,
  titleColor = "#000000",
  text,
  textColor = "#000000",
  awards,
  seeAllText = "View All",
  seeAllHref,
  perPage = 5,
}: AwardsShowcaseProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const firstItemRef = useRef<HTMLDivElement | null>(null);
  const showCarousel = awards.length > perPage;
  const visibleCount = Math.min(awards.length, perPage) || 1;
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
  }, [showCarousel, awards.length, perPage]);

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
                ? "flex gap-2 overflow-x-auto scroll-smooth scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                : "flex gap-2"
            }
          >
            {awards.map((award, i) => {
              const style = {
                flex: `0 0 calc((100% - ${(visibleCount - 1) * 0.6}rem) / ${visibleCount})`,
              };

              return (
                <div
                  key={`${award.imageSrc}-${i}`}
                  ref={i === 0 ? (el) => { firstItemRef.current = el; } : undefined}
                  className="relative aspect-[3/4] overflow-hidden"
                  style={style}
                >
                  <Image
                    src={award.imageSrc}
                    alt={award.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 60vw, 300px"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
