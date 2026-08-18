"use client";

import { useState } from "react";
import { Clock, MapPin } from "lucide-react";
import { superGrotesk, prompt } from "@/lib/fonts";

export interface JobPosition {
  title: string;
  department: string;
  employmentType: string;
  location: string;
  href: string;
}

interface OpenPositionsGridProps {
  positions: JobPosition[];
  initialCount?: number;
  cardBgColor?: string;
  cardBorderColor?: string;
  titleColor?: string;
  departmentColor?: string;
  metaColor?: string;
  linkText?: string;
  linkColor?: string;
  loadMoreText?: string;
  loadMoreColor?: string;
}

/**
 * OpenPositionsGrid - Grid of open-role cards (title, department, employment
 * type + location, and a "View Position" link), with a centered
 * "Load All Positions" control that reveals the rest of the list.
 *
 * Usage:
 * <OpenPositionsGrid
 *   positions={[
 *     {
 *       title: "Sales Executive",
 *       department: "Sales & Marketing",
 *       employmentType: "Full-Time",
 *       location: "Colombo, Sri Lanka",
 *       href: "/careers/sales-executive",
 *     },
 *   ]}
 * />
 *
 * Props:
 * @param {JobPosition[]} positions   - Open roles to display, in order.
 * @param {number} [initialCount]     - Cards shown before "Load All Positions" is clicked (default: 6).
 * @param {string} [cardBgColor]      - Card background color (default: "#FFFBFB").
 * @param {string} [cardBorderColor]  - Card border color (default: "#F5DCDC").
 * @param {string} [titleColor]       - Color for each card's role title (default: "#111111").
 * @param {string} [departmentColor]  - Color for the department line (default: "#4B4B4B").
 * @param {string} [metaColor]        - Color for the employment type/location row (default: "#4B4B4B").
 * @param {string} [linkText]         - Text for each card's link (default: "View Position").
 * @param {string} [linkColor]        - Color for the link, arrow, and "Load All Positions" control (default: "#E2201B").
 * @param {string} [loadMoreText]     - Text for the control that reveals the rest of the list (default: "Load All Positions").
 * @param {string} [loadMoreColor]    - Color for the "Load All Positions" control (default: "#111111").
 *
 * JobPosition:
 * @param {string} title          - Role title (e.g. "Sales Executive").
 * @param {string} department     - Department name shown below the title (e.g. "Sales & Marketing").
 * @param {string} employmentType - Employment type shown with a clock icon (e.g. "Full-Time").
 * @param {string} location       - Location shown with a pin icon (e.g. "Colombo, Sri Lanka").
 * @param {string} href           - Link to the position's details page.
 */
export default function OpenPositionsGrid({
  positions,
  initialCount = 6,
  cardBgColor = "#FEFEFE",
  cardBorderColor = "#FFD6D6",
  titleColor = "#000000",
  departmentColor = "#000000",
  metaColor = "#000000",
  linkText = "View Position",
  linkColor = "#E2201B",
  loadMoreText = "Load All Positions",
  loadMoreColor = "#111111",
}: OpenPositionsGridProps) {
  const [showAll, setShowAll] = useState(false);

  const visiblePositions = showAll
    ? positions
    : positions.slice(0, initialCount);

  return (
    <section className="px-6 pb-10 sm:px-10 lg:px-16 lg:pb-14 xl:px-10">
      <div className="mx-auto max-w-[1920px]">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visiblePositions.map((position, i) => (
            <div
              key={`${position.title}-${i}`}
              className="flex flex-col border p-6 shadow-[0_2px_10px_rgba(0,0,0,0.06)]"
              style={{ backgroundColor: cardBgColor, borderColor: cardBorderColor }}
            >
              <h3
                className={`${superGrotesk.className} text-2xl font-normal uppercase leading-snug`}
                style={{ color: titleColor }}
              >
                {position.title}
              </h3>

              <p
                className={`${prompt.className} mt-1 text-sm`}
                style={{ color: departmentColor }}
              >
                {position.department}
              </p>

              <div
                className={`${prompt.className} mt-3 flex items-center gap-4 text-xs`}
                style={{ color: metaColor }}
              >
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 shrink-0" strokeWidth={2} aria-hidden="true" />
                  {position.employmentType}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 shrink-0" strokeWidth={2} aria-hidden="true" />
                  {position.location}
                </span>
              </div>

              <a
                href={position.href}
                className={`${superGrotesk.className} mt-5 inline-flex items-center gap-1.5 text-2xl uppercase tracking-normal`}
                style={{ color: linkColor }}
              >
                {linkText}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-[0.9em] w-[0.9em] shrink-0"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className={`${superGrotesk.className} text-lg uppercase tracking-wide`}
              style={{ color: loadMoreColor }}
            >
              {loadMoreText}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
