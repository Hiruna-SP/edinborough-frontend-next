import Image from "next/image";
import { superGrotesk, prompt } from "@/lib/fonts";

interface ProductCardProps {
  imageSrc: string;
  imageAlt: string;
  name: string;
  size: string;
  detailsHref: string;
  detailsText?: string;
  detailsColor?: string;
  imageBgColor?: string;
  featuredText?: string;
  featuredBgColor?: string;
  featuredTextColor?: string;
}

/**
 * ProductCard - Single product tile: image on a flat background, an
 * optional "FEATURED" tag (top-left), name, size, and a "View Details" link.
 *
 * Usage:
 * <ProductCard
 *   imageSrc="/images/products/tomato-sauce.png"
 *   imageAlt="Edinborough Tomato Sauce 405g bottle"
 *   name="Tomato Sauce"
 *   size="405g"
 *   detailsHref="/products/tomato-sauce"
 *   featuredText="Featured"
 * />
 *
 * Props:
 * @param {string} imageSrc          - Path/URL to the product image.
 * @param {string} imageAlt          - Alt text for the product image.
 * @param {string} name              - Product name.
 * @param {string} size              - Product size/weight shown under the name (e.g. "405g").
 * @param {string} detailsHref       - Link for the "View Details" action.
 * @param {string} [detailsText]     - Text for the details link (default: "View Details").
 * @param {string} [detailsColor]    - Color for the details link and its arrow (default: "#E2201B").
 * @param {string} [imageBgColor]    - Background color behind the product image (default: "#F0F0F0").
 * @param {string} [featuredText]    - Text for the top-left tag (e.g. "Featured"). Omit to render no tag.
 * @param {string} [featuredBgColor] - Background color for the featured tag (default: "#E2201B").
 * @param {string} [featuredTextColor] - Text color for the featured tag (default: "#FFFFFF").
 */
export default function ProductCard({
  imageSrc,
  imageAlt,
  name,
  size,
  detailsHref,
  detailsText = "View Details",
  detailsColor = "#E2201B",
  imageBgColor = "#F0F0F0",
  featuredText,
  featuredBgColor = "#E2201B",
  featuredTextColor = "#FFFFFF",
}: ProductCardProps) {
  return (
    <div className="flex flex-col">
      <div
        className="relative aspect-square w-full"
        style={{ backgroundColor: imageBgColor }}
      >
        {featuredText && (
          <span
            className={`${prompt.className} absolute left-0 top-3 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide`}
            style={{ backgroundColor: featuredBgColor, color: featuredTextColor }}
          >
            {featuredText}
          </span>
        )}

        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-contain p-6"
          sizes="(min-width: 1024px) 25vw, 50vw"
        />
      </div>

      <h3
        className={`${superGrotesk.className} mt-4 text-sm font-normal text-[#111111] sm:text-base`}
      >
        {name}
      </h3>
      <p className={`${prompt.className} text-xs text-[#4B4B4B] sm:text-sm`}>{size}</p>

      <a
        href={detailsHref}
        className={`${prompt.className} mt-3 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide sm:text-sm`}
        style={{ color: detailsColor }}
      >
        {detailsText}
        <span aria-hidden="true">&rarr;</span>
      </a>
    </div>
  );
}