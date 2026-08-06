"use client";

import { prompt } from "@/lib/fonts";

interface CarouselControlsProps {
  label?: string;
  labelColor?: string;
  href?: string;
  onPrev: () => void;
  onNext: () => void;
  prevDisabled?: boolean;
  nextDisabled?: boolean;
}

function ArrowIcon({ color, flip }: { color: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`h-4 w-4 ${flip ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * CarouselControls - Optional "See All" label + a pair of circular prev/next
 * arrow buttons. Drop this into any section header that scrolls or paginates
 * (brand logos, product carousels, testimonial sliders, etc.) — it doesn't
 * own any slide state itself, it just calls `onPrev`/`onNext` and lets the
 * parent component decide what "previous" and "next" mean.
 *
 * Usage:
 * <CarouselControls
 *   label="See All"
 *   href="/brands"
 *   onPrev={() => scroll("left")}
 *   onNext={() => scroll("right")}
 * />
 *
 * Props:
 * @param {string} [label]           - Text shown before the arrows (e.g. "See All"). Omit to render just the arrows.
 * @param {string} [labelColor]      - Color for the label (default: "#111111").
 * @param {string} [href]            - If provided, the label renders as a link to this URL. Otherwise it's plain text.
 * @param {() => void} onPrev        - Called when the previous/left arrow is clicked.
 * @param {() => void} onNext        - Called when the next/right arrow is clicked.
 * @param {boolean} [prevDisabled]   - Disables the previous button (default: false).
 * @param {boolean} [nextDisabled]   - Disables the next button (default: false).
 */
export default function CarouselControls({
  label,
  labelColor = "#111111",
  href,
  onPrev,
  onNext,
  prevDisabled = false,
  nextDisabled = false,
}: CarouselControlsProps) {
  return (
    <div className="flex items-center gap-4">
      {label &&
        (href ? (
          <a
            href={href}
            className={`${prompt.className} text-xs font-semibold uppercase tracking-wide sm:text-sm`}
            style={{ color: labelColor }}
          >
            {label}
          </a>
        ) : (
          <span
            className={`${prompt.className} text-xs font-semibold uppercase tracking-wide sm:text-sm`}
            style={{ color: labelColor }}
          >
            {label}
          </span>
        ))}

      <button
        type="button"
        onClick={onPrev}
        disabled={prevDisabled}
        aria-label="Previous"
        className={`flex h-9 w-9 items-center justify-center rounded-full border bg-white transition-colors ${
          prevDisabled ? "border-[#d1d1d1]" : "border-black"
        }`}
      >
        <ArrowIcon color={prevDisabled ? "#d1d1d1" : "#000"} flip />
      </button>

      <button
        type="button"
        onClick={onNext}
        disabled={nextDisabled}
        aria-label="Next"
        className={`flex h-9 w-9 items-center justify-center rounded-full border bg-white transition-colors ${
          nextDisabled ? "border-[#d1d1d1]" : "border-black"
        }`}
      >
        <ArrowIcon color={nextDisabled ? "#d1d1d1" : "#000"} />
      </button>
    </div>
  );
}