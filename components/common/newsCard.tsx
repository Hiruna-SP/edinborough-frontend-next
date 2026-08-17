import Image from "next/image";
import { ArrowRight, Calendar, ShoppingCart } from "lucide-react";
import { superGrotesk, prompt } from "@/lib/fonts";

interface NewsCardProps {
  imageSrc: string;
  imageAlt: string;
  category: string;
  categoryColor?: string;
  categoryTextColor?: string;
  visitStoreText?: string;
  visitStoreHref?: string;
  title: string;
  description: string;
  date: string;
  detailsHref: string;
  detailsColor?: string;
}

/**
 * NewsCard - Single news/story tile: image with a category tag (top-left)
 * and an optional "Visit Store" pill (bottom-right), followed by title,
 * description, a date, and a circular arrow link.
 *
 * Usage:
 * <NewsCard
 *   imageSrc="/images/news/facility.png"
 *   imageAlt="Edinborough production facility exterior"
 *   category="Company News"
 *   title="Edinborough Expands Production Facility"
 *   description="A new milestone in our journey to deliver quality to more homes."
 *   date="May 20, 2024"
 *   detailsHref="/news/edinborough-expands-production-facility"
 * />
 *
 * Props:
 * @param {string} imageSrc            - Path/URL to the story image.
 * @param {string} imageAlt            - Alt text for the story image.
 * @param {string} category            - Category tag shown top-left (e.g. "Company News").
 * @param {string} [categoryColor]     - Background color for the category tag (default: "#E2201B").
 * @param {string} [categoryTextColor] - Text color for the category tag (default: "#FFFFFF").
 * @param {string} [visitStoreText]    - Text for the pill button over the image (e.g. "Visit Store"). Omit (along with `visitStoreHref`) to render no pill.
 * @param {string} [visitStoreHref]    - Link for the "Visit Store" pill.
 * @param {string} title               - Story title.
 * @param {string} description         - Short summary below the title.
 * @param {string} date                - Publish date shown with a calendar icon (e.g. "May 20, 2024").
 * @param {string} detailsHref         - Link for the story's details page.
 * @param {string} [detailsColor]      - Color for the arrow link circle (default: "#E2201B").
 */
export default function NewsCard({
  imageSrc,
  imageAlt,
  category,
  categoryColor = "#E2201B",
  categoryTextColor = "#FFFFFF",
  visitStoreText,
  visitStoreHref,
  title,
  description,
  date,
  detailsHref,
  detailsColor = "#E2201B",
}: NewsCardProps) {
  return (
    <div className="flex flex-col border border-[#E5E5E5] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)]">
      <div className="relative aspect-video w-full overflow-hidden bg-[#F0F0F0]">
        <span
          className={`${prompt.className} absolute left-0 top-4 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide`}
          style={{ backgroundColor: categoryColor, color: categoryTextColor }}
        >
          {category}
        </span>

        {visitStoreText && visitStoreHref && (
          <a
            href={visitStoreHref}
            className={`${prompt.className} absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-[#E2201B] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-white`}
          >
            <ShoppingCart className="h-3 w-3 shrink-0" strokeWidth={2} aria-hidden="true" />
            {visitStoreText}
          </a>
        )}

        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, 100vw"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3
          className={`${superGrotesk.className} text-xl font-bold uppercase leading-snug text-[#111111] sm:text-2xl`}
        >
          {title}
        </h3>
        <p className={`${prompt.className} mt-3 text-base leading-loose text-[#111]`}>
          {description}
        </p>

        <div className="mt-6 flex items-center justify-between">
          <span
            className={`${prompt.className} flex items-center gap-2 text-sm text-[#111]`}
          >
            <Calendar className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden="true" />
            {date}
          </span>

          <a
            href={detailsHref}
            aria-label={`Read more: ${title}`}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
            style={{ backgroundColor: detailsColor }}
          >
            <ArrowRight className="h-4 w-4 text-white" strokeWidth={2} aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
