import Image from "next/image";
import { Clock } from "lucide-react";
import { superGrotesk, prompt } from "@/lib/fonts";

interface RecipeCardProps {
  imageSrc: string;
  imageAlt: string;
  time: string;
  title: string;
  description?: string;
  authorName?: string;
  authorLocation?: string;
  viewCount?: string;
  detailsHref: string;
  detailsText?: string;
  featuredText?: string;
  featuredBgColor?: string;
  featuredTextColor?: string;
  detailsColor?: string;
  /** Tailwind aspect-ratio class for the image box (default: "aspect-square"). */
  imageAspectClassName?: string;
}

/**
 * RecipeCard - Single recipe tile: image with a "Featured" tag (top-left),
 * followed by a prep time, title, description, and a "View Recipe" link.
 *
 * Usage:
 * <RecipeCard
 *   imageSrc="/images/recipes/kottu.png"
 *   imageAlt="Kottu with Edinborough soya sauce"
 *   time="30 Min"
 *   title="Kottu With Edinborough Soya Sauce"
 *   description="A Sri Lankan street food classic made even better with our rich soya sauce."
 *   detailsHref="/recipes/kottu"
 *   featuredText="Featured"
 * />
 *
 * Props:
 * @param {string} imageSrc          - Path/URL to the recipe image.
 * @param {string} imageAlt          - Alt text for the recipe image.
 * @param {string} time              - Prep/cook time shown with a clock icon (e.g. "30 Min").
 * @param {string} title             - Recipe title.
 * @param {string} description       - Short summary below the title. Omit (along with `authorName`) to render neither.
 * @param {string} [authorName]      - Submitter's name, rendered as "Recipe by {authorName}" below the title instead of `description`.
 * @param {string} [authorLocation]  - Submitter's location, shown under `authorName` (e.g. "Colombo, Sri Lanka").
 * @param {string} [viewCount]       - View count shown bottom-right of the card (e.g. "3.2K Views"). Omit to render no view count.
 * @param {string} detailsHref       - Link for the "View Recipe" action.
 * @param {string} [detailsText]     - Text for the details link (default: "View Recipe").
 * @param {string} [featuredText]    - Text for the top-left tag (e.g. "Featured", "Dinner"). Omit to render no tag.
 * @param {string} [featuredBgColor] - Background color for the featured tag (default: "#E2201B").
 * @param {string} [featuredTextColor] - Text color for the featured tag (default: "#FFFFFF").
 * @param {string} [detailsColor]    - Color for the details link and its arrow (default: "#DA281C").
 * @param {string} [imageAspectClassName] - Tailwind aspect-ratio class for the image box (default: "aspect-square").
 */
export default function RecipeCard({
  imageSrc,
  imageAlt,
  time,
  title,
  description,
  authorName,
  authorLocation,
  viewCount,
  detailsHref,
  detailsText = "View Recipe",
  featuredText,
  featuredBgColor = "#E2201B",
  featuredTextColor = "#FFFFFF",
  detailsColor = "#DA281C",
  imageAspectClassName = "aspect-square",
}: RecipeCardProps) {
  const hasSecondaryText = !!description || !!authorName;
  return (
    <div className="flex h-full flex-col">
      <div
        className={`relative ${imageAspectClassName} w-full overflow-hidden bg-[#F0F0F0]`}
      >
        {featuredText && (
          <span
            className={`${prompt.className} absolute left-0 top-3 z-10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide`}
            style={{
              backgroundColor: featuredBgColor,
              color: featuredTextColor,
            }}
          >
            {featuredText}
          </span>
        )}

        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 25vw, 50vw"
        />
      </div>

      <div
        className={`flex flex-1 flex-col ${hasSecondaryText ? "gap-3" : "gap-1"} bg-[#F5F5F5] p-5`}
      >
        <span
          className={`${prompt.className} flex items-center gap-2 text-xs text-[#4B4B4B]`}
        >
          <Clock
            className="h-3.5 w-3.5 shrink-0"
            strokeWidth={2}
            aria-hidden="true"
          />
          {time}
        </span>

        <h3
          className={`${superGrotesk.className} ${hasSecondaryText ? "text-lg sm:text-2xl" : "text-base sm:text-xl"} font-normal uppercase leading-snug text-[#111111]`}
        >
          {title}
        </h3>

        {description && (
          <p
            className={`${prompt.className} text-sm leading-relaxed text-[#000000] sm:text-base`}
          >
            {description}
          </p>
        )}

        {authorName && (
          <div
            className={`${prompt.className} text-sm text-[#000000] sm:text-base`}
          >
            <p>Recipe by</p>
            <p className="font-semibold text-[#111111]">{authorName}</p>
            {authorLocation && <p>{authorLocation}</p>}
          </div>
        )}

        <div className="mt-auto flex items-end justify-between gap-2 pt-1">
          <a
            href={detailsHref}
            className={`${superGrotesk.className} flex items-center gap-1.5 text-2xl uppercase tracking-wide`}
            style={{ color: detailsColor }}
          >
            {detailsText}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 shrink-0"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>

          {viewCount && (
            <span
              className={`${prompt.className} shrink-0 whitespace-nowrap text-xs text-[#9A9A9A]`}
            >
              {viewCount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
