import Image from "next/image";
import { superGrotesk, prompt } from "@/lib/fonts";

export interface FeatureRowItem {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

interface FeatureRowProps {
  items: FeatureRowItem[];
  titleColor?: string;
  descriptionColor?: string;
  dividerColor?: string;
}

/**
 * FeatureRow - Row of icon + title + description items separated by
 * vertical divider lines.
 *
 * Usage:
 * <FeatureRow
 *   items={[
 *     {
 *       imageSrc: "/images/icons/premium-quality.svg",
 *       imageAlt: "Ribbon badge icon representing premium quality",
 *       title: "Premium Quality",
 *       description: "Finest ingredients for the best taste",
 *     },
 *     {
 *       imageSrc: "/images/icons/trusted-since-1973.svg",
 *       imageAlt: "Handshake icon representing trust since 1973",
 *       title: "Trusted Since 1973",
 *       description: "Over 50 years of culinary excellence",
 *     },
 *     {
 *       imageSrc: "/images/icons/wide-range.svg",
 *       imageAlt: "Bottles icon representing a wide product range",
 *       title: "Wide Range",
 *       description: "Thousands of products for every need",
 *     },
 *     {
 *       imageSrc: "/images/icons/island-wide-delivery.svg",
 *       imageAlt: "Delivery truck icon representing island-wide delivery",
 *       title: "Island Wide Delivery",
 *       description: "Delivering goodness across Sri Lanka",
 *     },
 *   ]}
 * />
 *
 * Props:
 * @param {FeatureRowItem[]} items      - Items to render, left to right (wraps to 2 columns on mobile).
 * @param {string} [titleColor]         - Color for each item's title (default: "#111111").
 * @param {string} [descriptionColor]   - Color for each item's description (default: "#4B4B4B").
 * @param {string} [dividerColor]       - Color of the vertical divider between items (default: "#E2201B").
 *
 * FeatureRowItem:
 * @param {string} imageSrc  - Path or URL to the icon image.
 * @param {string} imageAlt  - Alt text for the icon image.
 * @param {string} title     - Item heading.
 * @param {string} description - Item description text.
 */
export default function FeatureRow({
  items,
  titleColor = "#000",
  descriptionColor = "#000",
  dividerColor = "#FF0000",
}: FeatureRowProps) {
  return (
    <section className="px-6 py-10 sm:px-10 lg:px-16 lg:py-14 xl:px-10">
      <div className="mx-auto max-w-[1920px]">
        <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-12 lg:flex lg:items-stretch lg:gap-0">
          {items.map((item, i) => (
            <div
              key={`${item.title}-${i}`}
              className={`flex flex-1 items-center gap-6 lg:px-6 xl:px-8 ${
                i < items.length - 1 ? "lg:border-r-2" : ""
              }`}
              style={
                i < items.length - 1
                  ? { borderRightColor: dividerColor }
                  : undefined
              }
            >
              <div className="relative h-12 w-12 shrink-0 sm:h-14 sm:w-14">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  className="object-contain"
                  sizes="56px"
                />
              </div>

              <div>
                <h3
                  className={`${superGrotesk.className} text-base font-normal uppercase leading-snug sm:text-2xl`}
                  style={{ color: titleColor }}
                >
                  {item.title}
                </h3>
                <p
                  className={`${prompt.className} max-w-[180px] mt-1 text-sm font-normal leading-relaxed`}
                  style={{ color: descriptionColor }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
