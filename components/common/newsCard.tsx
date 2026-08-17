import Image from "next/image";
import { Calendar } from "lucide-react";
import { superGrotesk, prompt } from "@/lib/fonts";

interface NewsCardProps {
  imageSrc: string;
  imageAlt: string;
  category: string;
  categoryColor?: string;
  categoryTextColor?: string;
  title: string;
  description: string;
  date: string;
  detailsHref: string;
}

/**
 * NewsCard - Single news/story tile: image with a category tag (top-left),
 * followed by title, description, a date, and a circular arrow link.
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
 * @param {string} title               - Story title.
 * @param {string} description         - Short summary below the title.
 * @param {string} date                - Publish date shown with a calendar icon (e.g. "May 20, 2024").
 * @param {string} detailsHref         - Link for the story's details page.
 */
export default function NewsCard({
  imageSrc,
  imageAlt,
  category,
  categoryColor = "#E2201B",
  categoryTextColor = "#FFFFFF",
  title,
  description,
  date,
  detailsHref,
}: NewsCardProps) {
  return (
    <div className="flex flex-col border border-[#E5E5E5] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)]">
      <div className="relative aspect-video w-full overflow-hidden bg-[#F0F0F0]">
        <span
          className={`${prompt.className} absolute left-3 top-4 z-10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide`}
          style={{ backgroundColor: categoryColor, color: categoryTextColor }}
        >
          {category}
        </span>

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
          className={`${superGrotesk.className} text-xl  uppercase leading-snug text-[#111111] sm:text-2xl`}
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
            className="flex h-10 w-10 shrink-0 items-center justify-center"
          >
            <Image
              src="/images/news/arrow.png"
              alt=""
              width={24}
              height={24}
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
