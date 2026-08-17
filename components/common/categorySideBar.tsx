"use client";

import Image from "next/image";
import { superGrotesk, prompt } from "@/lib/fonts";

export interface CategoryItem {
  name: string;
  count: number;
  iconSrc?: string;
  iconAlt?: string;
  href: string;
  active?: boolean;
}

interface CategorySidebarProps {
  categories: CategoryItem[];
  onSelect?: (category: CategoryItem) => void;
  activeBgColor?: string;
  viewAllText?: string;
  viewAllHref: string;
  promoImageSrc?: string;
  promoImageAlt?: string;
  promoHref?: string;
}

/**
 * CategorySidebar - "Browse Categories" list with an active-state highlight,
 * a "View All Products" button, and an optional promo banner underneath.
 *
 * Usage:
 * <CategorySidebar
 *   categories={[
 *     { name: "Red Sauces", count: 24, iconSrc: "/images/icons/red-sauces.svg", iconAlt: "Chili icon", href: "/products/red-sauces", active: true },
 *     { name: "Dark Sauces", count: 18, iconSrc: "/images/icons/dark-sauces.svg", iconAlt: "Bottle icon", href: "/products/dark-sauces" },
 *     { name: "Spread and Dipping", count: 21, iconSrc: "/images/icons/spread.svg", iconAlt: "Jar icon", href: "/products/spread-and-dipping" },
 *     { name: "Food & Beverages", count: 46, iconSrc: "/images/icons/food-beverages.svg", iconAlt: "Plate icon", href: "/products/food-beverages" },
 *   ]}
 *   viewAllHref="/products"
 *   promoImageSrc="/images/promo/fathers-day.jpg"
 *   promoImageAlt="Father's Day promotion — upload your favorite recipe to win an Edinborough hamper"
 *   promoHref="/promotions/fathers-day"
 * />
 *
 * Props:
 * @param {CategoryItem[]} categories - Categories to list, in order.
 * @param {(category: CategoryItem) => void} [onSelect] - Called when a category is clicked, with that category's data.
 *                                       When provided, the click is intercepted (`preventDefault`) so it updates state
 *                                       instead of navigating to `href` — use this for a single-page filtering setup.
 *                                       Omit it for normal navigation to a separate route per category.
 * @param {string} [activeBgColor]    - Background color for the active category (default: "#E2201B").
 * @param {string} [viewAllText]      - Text for the button below the list (default: "View All Products").
 * @param {string} viewAllHref        - Link for the "View All Products" button.
 * @param {string} [promoImageSrc]    - Path/URL to the promo banner image below the list. Omit (along with `promoImageAlt`) to render no promo banner.
 * @param {string} [promoImageAlt]    - Alt text for the promo banner image.
 * @param {string} [promoHref]        - Link the promo banner points to. Renders as a plain image if omitted.
 *
 * CategoryItem:
 * @param {string} name      - Category name.
 * @param {number} count     - Product count shown on the right.
 * @param {string} [iconSrc] - Path/URL to the category icon. Omit (along with `iconAlt`) to render no icon.
 * @param {string} [iconAlt] - Alt text for the icon.
 * @param {string} href      - Link for this category.
 * @param {boolean} [active] - Whether this category is the currently selected one.
 */
export default function CategorySidebar({
  categories,
  onSelect,
  activeBgColor = "#E2201B",
  viewAllText = "View All Products",
  viewAllHref,
  promoImageSrc,
  promoImageAlt,
  promoHref,
}: CategorySidebarProps) {
  return (
    <aside className="w-full max-w-xs">
      <h2
        className={`${superGrotesk.className} text-sm font-semibold uppercase tracking-wide text-[#111111]`}
      >
        Browse Categories
      </h2>

      <ul className="mt-4 flex flex-col gap-2">
        {categories.map((category) => (
          <li key={category.name}>
            <a
              href={category.href}
              onClick={(e) => {
                if (onSelect) {
                  e.preventDefault();
                  onSelect(category);
                }
              }}
              className={`${prompt.className} flex items-center justify-between gap-3 px-4 py-3 text-sm font-medium transition-colors`}
              style={
                category.active
                  ? { backgroundColor: activeBgColor, color: "#FFFFFF" }
                  : { backgroundColor: "#F5F5F5", color: "#111111" }
              }
            >
              <span className="flex items-center gap-3">
                {category.iconSrc && (
                  <span className="relative h-5 w-5 shrink-0">
                    <Image
                      src={category.iconSrc}
                      alt={category.iconAlt ?? ""}
                      fill
                      className="object-contain"
                      sizes="20px"
                    />
                  </span>
                )}
                {category.name}
              </span>
              <span>{category.count}</span>
            </a>
          </li>
        ))}
      </ul>

      <a
        href={viewAllHref}
        className={`${prompt.className} mt-4 flex items-center justify-between bg-[#111111] px-4 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#2a2a2a]`}
      >
        {viewAllText}
        <span aria-hidden="true">&rarr;</span>
      </a>

      {promoImageSrc && promoImageAlt && (
        <div className="relative mt-6 aspect-[3/4] w-full overflow-hidden">
          {promoHref ? (
            <a href={promoHref} className="block h-full w-full">
              <Image
                src={promoImageSrc}
                alt={promoImageAlt}
                fill
                className="object-cover"
                sizes="320px"
              />
            </a>
          ) : (
            <Image
              src={promoImageSrc}
              alt={promoImageAlt}
              fill
              className="object-cover"
              sizes="320px"
            />
          )}
        </div>
      )}
    </aside>
  );
}