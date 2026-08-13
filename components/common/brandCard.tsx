import Image from "next/image";
import { superGrotesk, prompt } from "@/lib/fonts";

interface BrandCardProps {
  name: string;
  logoSrc: string;
  logoAlt: string;
  description?: string;
  productsHref: string;
  productsText?: string;
  productsColor?: string;
  bgColor?: string;
}

/**
 * BrandCard - Single brand tile: logo on a flat background, name,
 * description, and a "View Products" link.
 *
 * Usage:
 * <BrandCard
 *   name="Mity"
 *   logoSrc="/images/brands/mity.png"
 *   logoAlt="Mity logo"
 *   description="Our signature brand of quality food products."
 *   productsHref="/brands/mity"
 * />
 *
 * Props:
 * @param {string} name            - Brand name.
 * @param {string} logoSrc         - Path/URL to the brand logo.
 * @param {string} logoAlt         - Alt text for the logo.
 * @param {string} [description]   - Short blurb under the name (default: "Our signature brand of quality food products.").
 * @param {string} productsHref    - Link for the "View Products" action.
 * @param {string} [productsText]  - Text for the products link (default: "View Products").
 * @param {string} [productsColor] - Color for the products link and its arrow (default: "#E2201B").
 * @param {string} [bgColor]       - Background color for the whole card (default: "#F3F3F3").
 */
export default function BrandCard({
  name,
  logoSrc,
  logoAlt,
  description = "Our signature brand of quality food products.",
  productsHref,
  productsText = "View Products",
  productsColor = "#E2201B",
  bgColor = "#F3F3F3",
}: BrandCardProps) {
  return (
    <div
      className="flex flex-col items-center p-4 text-center"
      style={{ backgroundColor: bgColor }}
    >
      <div className="relative aspect-4/3 w-full">
        <Image
          src={logoSrc}
          alt={logoAlt}
          fill
          className="object-contain"
          sizes="(min-width: 1024px) 20vw, 50vw"
        />
      </div>

      <h3
        className={`${superGrotesk.className} mt-2 text-sm font-semibold uppercase text-[#111111] sm:text-base`}
      >
        {name}
      </h3>
      <p className={`${prompt.className} mt-1 text-xs text-[#4B4B4B] sm:text-sm`}>
        {description}
      </p>

      <a
        href={productsHref}
        className={`${prompt.className} mt-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide sm:text-sm`}
        style={{ color: productsColor }}
      >
        {productsText}
        <span aria-hidden="true">&rarr;</span>
      </a>
    </div>
  );
}
