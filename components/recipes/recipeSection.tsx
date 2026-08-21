"use client";

import { useEffect, useRef, useState } from "react";
import TextBanner from "@/components/common/textBanner";
import CarouselControls from "@/components/common/carousel";
import RecipeCard from "@/components/recipes/recipeCard";

export interface RecipeSectionItem {
  imageSrc: string;
  imageAlt: string;
  time: string;
  title: string;
  description?: string;
  authorName?: string;
  authorLocation?: string;
  viewCount?: string;
  detailsHref: string;
  badgeText?: string;
  badgeBgColor?: string;
  badgeTextColor?: string;
}

interface RecipeSectionProps {
  title: string;
  titleColor?: string;
  subtitle?: string;
  subtitleColor?: string;
  recipes: RecipeSectionItem[];
  viewAllText?: string;
  viewAllHref?: string;
  perPage?: number;
  featuredText?: string;
}

/**
 * RecipeSection - Title + "View All" link with prev/next arrows in the
 * header, followed by a row of RecipeCard tiles. At most `perPage` recipes
 * (default 4) are visible at once; if more are passed, the row becomes a
 * scrollable carousel driven by the header arrows.
 *
 * Reused across "Featured Recipes" (with descriptions, 4 per page),
 * "Quick & Easy Recipes" (no descriptions, more cards per page), and
 * "Featured Recipes From Our Community" (per-item author + view count +
 * category badge instead of description, plus a `subtitle` under the title).
 *
 * Usage:
 * <RecipeSection
 *   title="FEATURED RECIPES"
 *   viewAllText="VIEW ALL"
 *   viewAllHref="/recipes"
 *   featuredText="Featured"
 *   recipes={[
 *     {
 *       imageSrc: "/images/recipes/kottu.png",
 *       imageAlt: "Kottu with Edinborough soya sauce",
 *       time: "30 Min",
 *       title: "Kottu With Edinborough Soya Sauce",
 *       description: "A Sri Lankan street food classic made even better with our rich soya sauce.",
 *       detailsHref: "/recipes/kottu",
 *     },
 *   ]}
 * />
 */
export default function RecipeSection({
  title,
  titleColor = "#000000",
  subtitle,
  subtitleColor = "#000000",
  recipes,
  viewAllText = "View All",
  viewAllHref,
  perPage = 4,
  featuredText,
}: RecipeSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const firstItemRef = useRef<HTMLDivElement | null>(null);
  const showCarousel = recipes.length > perPage;
  const visibleCount = Math.min(recipes.length, perPage) || 1;
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
  }, [showCarousel, recipes.length, perPage]);

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
        text={subtitle}
        textColor={subtitleColor}
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
                ? "flex gap-1 overflow-x-auto scroll-smooth scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                : "flex gap-1"
            }
          >
            {recipes.map((recipe, i) => (
              <div
                key={`${recipe.title}-${i}`}
                ref={i === 0 ? (el) => { firstItemRef.current = el; } : undefined}
                style={{
                  flex: `0 0 calc((100% - ${(visibleCount - 1) * 0.75}rem) / ${visibleCount})`,
                }}
              >
                <RecipeCard
                  imageSrc={recipe.imageSrc}
                  imageAlt={recipe.imageAlt}
                  time={recipe.time}
                  title={recipe.title}
                  description={recipe.description}
                  authorName={recipe.authorName}
                  authorLocation={recipe.authorLocation}
                  viewCount={recipe.viewCount}
                  detailsHref={recipe.detailsHref}
                  featuredText={recipe.badgeText ?? featuredText}
                  featuredBgColor={recipe.badgeBgColor}
                  featuredTextColor={recipe.badgeTextColor}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
