import { superGrotesk, prompt } from "@/lib/fonts";

export interface ChecklistItem {
  title: string;
  description: string;
}

interface ChecklistGridProps {
  label?: string;
  labelColor?: string;
  items: ChecklistItem[];
  iconColor?: string;
  titleColor?: string;
  descriptionColor?: string;
  bgColor?: string;
}

function CheckIcon({ color }: { color: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5 shrink-0 sm:h-6 sm:w-6"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="4" stroke={color} strokeWidth="2" />
      <path
        d="M7 12.5l3 3 7-7"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * ChecklistGrid - Small label heading + a grid of checkmark bullet points.
 *
 * Usage:
 * <ChecklistGrid
 *   label="What Makes Us Different"
 *   items={[
 *     { title: "50+ Years of Excellence", description: "Five decades of trusted quality and authentic taste." },
 *     { title: "Trusted by Generations", description: "A household name loved by Sri Lankan families." },
 *     { title: "World-Class Quality", description: "Manufactured under rigorous local and international standards." },
 *     { title: "Wide Range of Products", description: "Sauces, spreads, beverages, and more for every kitchen." },
 *     { title: "Island-Wide Distribution", description: "Bringing quality products to every corner of Sri Lanka." },
 *     { title: "Serving Global Markets", description: "Bringing authentic Sri Lankan taste to customers around the world." },
 *   ]}
 * />
 *
 * Props:
 * @param {string} [label]           - Small heading above the grid (e.g. "What Makes Us Different"). Omit to render no heading.
 * @param {string} [labelColor]      - Color for the label (default: "#0845BA").
 * @param {ChecklistItem[]} items    - Grid items, each with a `title` and `description`. Renders 1 col on mobile, 2 on tablet, 3 on desktop.
 * @param {string} [iconColor]       - Color of the checkbox icon (default: "#E2201B").
 * @param {string} [titleColor]      - Color for each item's title (default: "#111111").
 * @param {string} [descriptionColor] - Color for each item's description (default: "#4B4B4B").
 * @param {string} [bgColor]         - Section background color (default: "#F5F5F5").
 */
export default function ChecklistGrid({
  label,
  labelColor = "#0845BA",
  items,
  iconColor = "#E2201B",
  titleColor = "#111111",
  descriptionColor = "#000",
  bgColor = "#F5F5F5",
}: ChecklistGridProps) {
  return (
    <section
      className="px-6 pt-4 pb-10 sm:px-10 lg:px-16 lg:pb-14 xl:px-10"
      style={{ backgroundColor: bgColor }}
    >
      <div className="mx-auto max-w-[1920px]">
        {label && (
          <p
            className={`${superGrotesk.className} text-sm font-normal uppercase tracking-wide sm:text-xl`}
            style={{ color: labelColor }}
          >
            {label}
          </p>
        )}

        <div
          className={`grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 ${
            label ? "mt-6" : ""
          }`}
        >
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckIcon color={iconColor} />
              <div>
                <h3
                  className={`${superGrotesk.className} text-base font-normal uppercase leading-snug sm:text-lg`}
                  style={{ color: titleColor }}
                >
                  {item.title}
                </h3>
                <p
                  className={`${prompt.className} mt-1 text-sm font-normal leading-relaxed`}
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