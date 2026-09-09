"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { superGrotesk, prompt } from "@/lib/fonts";
import type {
  ProductSizeOption,
  ProductThumbnail,
  ProductNutrition,
} from "@/components/products/productData";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface ProductDetailProps {
  name: string;
  category: string;
  shortDescription: string;
  images: string[];
  imageAlt: string;
  sizeOptions: ProductSizeOption[];
  /** Slug of the variant currently shown; matched against `sizeOptions`. */
  currentSlug: string;
  price: string;
  ingredients: string;
  storing: string;
  buyHref: string;
  allergenInfo: string;
  flavor: string;
  countryOfOrigin: string;
  availableSizes: ProductThumbnail[];
  nutrition: ProductNutrition;
  breadcrumbItems: BreadcrumbItem[];
  /** Base path for size / variant links (default: "/our-products"). */
  variantBasePath?: string;
  backHref?: string;
  shareWhatsappHref?: string;
  shareFacebookHref?: string;
  shareInstagramHref?: string;
  accentColor?: string;
}

const SECTION = "px-6 sm:px-10 lg:px-16 xl:px-10";
const INNER = "mx-auto max-w-[1920px]";

/**
 * ProductDetail - Full product detail page body for Our Products: an image
 * gallery beside the breadcrumb, title, category pill + share row, short
 * description, a "Net Weight" size selector, price, ingredients and storing
 * notes plus a "Buy Product" action; then a second block with
 * allergen information, flavour / country of origin, an "Available Sizes"
 * gallery and a per-serving / per-100g nutrition table.
 *
 * Usage:
 * <ProductDetail
 *   name="Tomato Sauce 405g"
 *   category="Red Sauces"
 *   shortDescription="Made with sun-ripened tomatoes..."
 *   images={["/images/products/14.png", "/images/products/13.png"]}
 *   imageAlt="Edinborough Tomato Sauce 405g"
 *   sizeOptions={[{ label: "405g", slug: "tomato-sauce-405g" }]}
 *   currentSlug="tomato-sauce-405g"
 *   price="LKR 420.00"
 *   ingredients="Water, sugar, concentrated Tomato Paste (16%)..."
 *   storing="Store in a cool, dry & hygienic place..."
 *   buyHref="https://store.edinborough.lk"
 *   allergenInfo="Manufactured in a facility that also processes..."
 *   flavor="Tomato"
 *   countryOfOrigin="Sri Lanka"
 *   availableSizes={[{ imageSrc: "...", imageAlt: "...", size: "405g", name: "Tomato Sauce", slug: "tomato-sauce-405g" }]}
 *   nutrition={{ servingSize: "1 Tbsp (15g)", rows: [{ label: "Energy", perServing: "20 kcal", per100g: "135 kcal" }] }}
 *   breadcrumbItems={[
 *     { label: "Home", href: "/" },
 *     { label: "Our Products", href: "/our-products" },
 *     { label: "Red Sauces", href: "/our-products?category=red-sauces" },
 *     { label: "Tomato Sauce 405g" },
 *   ]}
 * />
 *
 * Props:
 * @param {string} name                 - Product name including the pack size (rendered uppercase).
 * @param {string} category             - Category tag shown as a red pill.
 * @param {string} shortDescription     - Intro paragraph under the title.
 * @param {string[]} images             - Gallery images; the first is shown large, the rest as thumbnails.
 * @param {string} imageAlt             - Alt text for the gallery images.
 * @param {ProductSizeOption[]} sizeOptions - "Net Weight" options: { label, slug }.
 * @param {string} currentSlug          - Slug of the current variant; its size option renders active.
 * @param {string} price                - Price string shown in red (e.g. "LKR 420.00").
 * @param {string} ingredients          - Ingredients paragraph.
 * @param {string} storing              - Storing instructions paragraph.
 * @param {string} buyHref              - Link for the "Buy Product" button.
 * @param {string} allergenInfo         - Allergen information paragraph.
 * @param {string} flavor               - Flavour value.
 * @param {string} countryOfOrigin      - Country of origin value.
 * @param {ProductThumbnail[]} availableSizes - "Available Sizes" tiles: { imageSrc, imageAlt, size, name, slug? }.
 * @param {ProductNutrition} nutrition  - Serving size, { label, perServing, per100g, indented? } rows and an optional footnote.
 * @param {BreadcrumbItem[]} breadcrumbItems - Breadcrumb trail; the last item renders as plain text (current page).
 * @param {string} [variantBasePath]    - Base path for size / variant links (default: "/our-products").
 * @param {string} [backHref]           - Link for the "Back" control (default: "/our-products").
 * @param {string} [shareWhatsappHref]  - Link for the WhatsApp share icon (default: "#").
 * @param {string} [shareFacebookHref]  - Link for the Facebook share icon (default: "#").
 * @param {string} [shareInstagramHref] - Link for the Instagram share icon (default: "#").
 * @param {string} [accentColor]        - Color for links, icons and the category pill (default: "#E2201B").
 */
export default function ProductDetail({
  name,
  category,
  shortDescription,
  images,
  imageAlt,
  sizeOptions,
  currentSlug,
  price,
  ingredients,
  storing,
  buyHref,
  allergenInfo,
  flavor,
  countryOfOrigin,
  availableSizes,
  nutrition,
  breadcrumbItems,
  variantBasePath = "/our-products",
  backHref = "/our-products",
  shareWhatsappHref = "#",
  shareFacebookHref = "#",
  shareInstagramHref = "#",
  accentColor = "#E2201B",
}: ProductDetailProps) {
  const [activeImage, setActiveImage] = useState(0);

  const goToImage = (index: number) => {
    const count = images.length;
    setActiveImage(((index % count) + count) % count);
  };

  return (
    <article className={`${prompt.className} text-[#000000]`}>
      {/* ---- Back ---- */}
      <div className={`${SECTION} pt-8`}>
        <div className={INNER}>
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-sm text-[#000000] transition-colors hover:opacity-70"
          >
            <ArrowLeft className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden="true" />
            Back
          </Link>
        </div>
      </div>

      {/* ---- Hero: gallery + summary ---- */}
      <section className={`${SECTION} py-8`}>
        <div className={INNER}>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {/* Gallery */}
            <div className={images.length > 1 ? "mb-20" : undefined}>
              <div className="relative">
                <div className="relative aspect-4/3 w-full overflow-hidden bg-[#F0F0F0]">
                  <Image
                    src={images[activeImage] ?? images[0]}
                    alt={imageAlt}
                    fill
                    className="object-contain p-8"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    priority
                  />
                </div>

                {images.length > 1 && (
                  <div className="absolute inset-x-4 bottom-0 z-10 flex translate-y-1/2 items-center gap-3 sm:inset-x-8">
                    <button
                      type="button"
                      onClick={() => goToImage(activeImage - 1)}
                      aria-label="Previous image"
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D5D5D5] bg-white text-[#000000] transition-colors hover:bg-[#F0F0F0]"
                    >
                      <ChevronLeft className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                    </button>

                    <div className="flex flex-1 justify-center gap-3 overflow-x-auto">
                      {images.map((src, i) => (
                        <button
                          key={`${src}-${i}`}
                          type="button"
                          onClick={() => goToImage(i)}
                          aria-label={`Show image ${i + 1}`}
                          aria-current={i === activeImage}
                          className="relative aspect-square w-28 shrink-0 overflow-hidden border-2 bg-[#F0F0F0]"
                          style={{
                            borderColor: i === activeImage ? accentColor : "transparent",
                          }}
                        >
                          <Image
                            src={src}
                            alt={`${imageAlt} thumbnail ${i + 1}`}
                            fill
                            className="object-contain p-2"
                            sizes="112px"
                          />
                        </button>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => goToImage(activeImage + 1)}
                      aria-label="Next image"
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D5D5D5] bg-white text-[#000000] transition-colors hover:bg-[#F0F0F0]"
                    >
                      <ChevronRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Summary */}
            <div>
              <nav
                aria-label="Breadcrumb"
                className="flex flex-wrap items-center gap-2 text-xs"
              >
                {breadcrumbItems.map((item, i) => (
                  <span key={`${item.label}-${i}`} className="flex items-center gap-2">
                    {i > 0 && (
                      <span aria-hidden="true" style={{ color: accentColor }}>
                        &gt;
                      </span>
                    )}
                    {item.href ? (
                      <Link href={item.href} className="hover:text-[#000000]">
                        {item.label}
                      </Link>
                    ) : (
                      <span>{item.label}</span>
                    )}
                  </span>
                ))}
              </nav>

              <h1
                className={`${superGrotesk.className} mt-4 text-3xl uppercase leading-tight sm:text-4xl lg:text-5xl`}
              >
                {name}
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3">
                <span
                  className="px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white"
                  style={{ backgroundColor: accentColor }}
                >
                  {category}
                </span>
                <span className="text-sm font-semibold">Share</span>
                <a href={shareWhatsappHref} aria-label="Share on WhatsApp" style={{ color: accentColor }}>
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
                <a href={shareFacebookHref} aria-label="Share on Facebook" style={{ color: accentColor }}>
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                  </svg>
                </a>
                <a href={shareInstagramHref} aria-label="Share on Instagram" style={{ color: accentColor }}>
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </div>

              <p className="mt-4 max-w-xl text-sm leading-relaxed">{shortDescription}</p>

              {/* Net weight selector */}
              {sizeOptions.length > 0 && (
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <span className="text-xs font-semibold uppercase tracking-wide text-[#4B4B4B]">
                    Net Weight
                  </span>
                  {sizeOptions.map((option) => {
                    const isActive = option.slug === currentSlug;
                    return (
                      <Link
                        key={option.slug}
                        href={`${variantBasePath}/${option.slug}`}
                        aria-current={isActive ? "page" : undefined}
                        className="min-w-16 border px-4 py-2 text-center text-sm transition-colors"
                        style={
                          isActive
                            ? {
                                backgroundColor: accentColor,
                                borderColor: accentColor,
                                color: "#FFFFFF",
                              }
                            : { borderColor: "#D5D5D5", color: "#000000" }
                        }
                      >
                        {option.label}
                      </Link>
                    );
                  })}
                </div>
              )}

              <p
                className={`${superGrotesk.className} mt-6 text-2xl uppercase sm:text-3xl`}
                style={{ color: accentColor }}
              >
                Price: {price}
              </p>

              <dl className="mt-6 space-y-4 text-sm leading-relaxed">
                <div className="grid grid-cols-1 gap-1 sm:grid-cols-[140px_1fr]">
                  <dt className="font-semibold uppercase tracking-wide text-[#4B4B4B]">
                    Ingredients:
                  </dt>
                  <dd className="text-[#4B4B4B]">{ingredients}</dd>
                </div>
                <div className="grid grid-cols-1 gap-1 sm:grid-cols-[140px_1fr]">
                  <dt className="font-semibold uppercase tracking-wide text-[#4B4B4B]">
                    Storing:
                  </dt>
                  <dd className="text-[#4B4B4B]">{storing}</dd>
                </div>
              </dl>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href={buyHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${superGrotesk.className} inline-flex items-center justify-center gap-2 bg-[#0845BA] px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-[#093a99]`}
                >
                  Buy Product
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Allergen + Nutrition ---- */}
      <section className={`${SECTION} border-t border-[#EAEAEA] py-12`}>
        <div className={INNER}>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Allergen / flavour / sizes */}
            <div>
              <h2 className={`${superGrotesk.className} text-2xl uppercase sm:text-3xl`}>
                Allergen Information
              </h2>
              <p className="mt-6 max-w-lg text-sm leading-relaxed text-[#4B4B4B]">
                {allergenInfo}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#4B4B4B]">
                    Flavor:
                  </p>
                  <p className="mt-1 text-sm uppercase">{flavor}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#4B4B4B]">
                    Country of Origin
                  </p>
                  <p className="mt-1 text-sm">{countryOfOrigin}</p>
                </div>
              </div>

              {availableSizes.length > 0 && (
                <>
                  <h3
                    className={`${superGrotesk.className} mt-10 text-xl uppercase sm:text-2xl`}
                  >
                    Available Sizes
                  </h3>
                  <ul className="mt-6 flex flex-wrap gap-4">
                    {availableSizes.map((item, i) => {
                      const isActive = item.slug === currentSlug;
                      const tile = (
                        <>
                          <span
                            className="relative block aspect-square w-full overflow-hidden border-2 bg-[#F3F3F3]"
                            style={{
                              borderColor: isActive ? accentColor : "transparent",
                            }}
                          >
                            <Image
                              src={item.imageSrc}
                              alt={item.imageAlt}
                              fill
                              className="object-contain p-3"
                              sizes="112px"
                            />
                          </span>
                          <span className="mt-2 block text-sm font-medium">
                            {item.size}
                          </span>
                          <span className="block text-xs text-[#4B4B4B]">
                            {item.name}
                          </span>
                        </>
                      );

                      return (
                        <li key={`${item.slug ?? item.size}-${i}`} className="w-28">
                          {item.slug && !isActive ? (
                            <Link
                              href={`${variantBasePath}/${item.slug}`}
                              className="block transition-opacity hover:opacity-80"
                            >
                              {tile}
                            </Link>
                          ) : (
                            <div aria-current={isActive ? "page" : undefined}>{tile}</div>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </>
              )}
            </div>

            {/* Nutrition */}
            <div>
              <h2 className={`${superGrotesk.className} text-2xl uppercase sm:text-3xl`}>
                Nutrition Information
              </h2>

              <div className="mt-6 flex items-baseline justify-between border-b border-[#EAEAEA] pb-3 text-sm">
                <span>Serving Size</span>
                <span className="text-[#4B4B4B]">{nutrition.servingSize}</span>
              </div>

              <table className="mt-4 w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-[#EAEAEA] text-[#4B4B4B]">
                    <th className="py-2 font-semibold">Average Quantity</th>
                    <th className="py-2 font-semibold">Per Serving</th>
                    <th className="py-2 font-semibold">Per 100g</th>
                  </tr>
                </thead>
                <tbody>
                  {nutrition.rows.map((row) => (
                    <tr key={row.label} className="border-b border-[#F0F0F0]">
                      <td className={`py-2.5 ${row.indented ? "pl-4 text-[#4B4B4B]" : ""}`}>
                        {row.indented ? `- ${row.label}` : row.label}
                      </td>
                      <td className="py-2.5 text-[#4B4B4B]">{row.perServing}</td>
                      <td className="py-2.5 text-[#4B4B4B]">{row.per100g}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {nutrition.footnote && (
                <p className="mt-6 text-[11px] leading-relaxed text-[#9A9A9A]">
                  {nutrition.footnote}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
