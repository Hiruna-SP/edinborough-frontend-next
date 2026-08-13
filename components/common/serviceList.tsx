import Image from "next/image";
import { superGrotesk, prompt } from "@/lib/fonts";

export interface ServiceListItem {
  label: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  href: string;
}

interface ServiceListProps {
  items: ServiceListItem[];
  labelColor?: string;
  titleColor?: string;
  descriptionColor?: string;
  linkText?: string;
  linkColor?: string;
  dividerColor?: string;
}

/**
 * ServiceList - Stacked rows of image + label + title + description + link,
 * separated by divider lines (e.g. Grandeur / eBuy Online / Edinborough
 * Agriculture on the services page).
 *
 * Usage:
 * <ServiceList
 *   items={[
 *     {
 *       label: "GRANDEUR",
 *       imageSrc: "/images/service/grandeur.png",
 *       imageAlt: "Grandeur Colombo storefront",
 *       title: "Grandeur Colombo",
 *       description: "Grandeur represents Edinborough's premium product range...\n\nCombining sophisticated product development with modern manufacturing practices...",
 *       href: "/services/grandeur",
 *     },
 *   ]}
 * />
 *
 * Props:
 * @param {ServiceListItem[]} items    - Rows to render, top to bottom.
 * @param {string} [labelColor]        - Color for each row's small eyebrow label (default: "#111111").
 * @param {string} [titleColor]        - Color for each row's title (default: "#0845BA").
 * @param {string} [descriptionColor]  - Color for the description paragraphs (default: "#4B4B4B").
 * @param {string} [linkText]          - Text for the details link (default: "View Details").
 * @param {string} [linkColor]         - Color for the details link and its arrow (default: "#E2201B").
 * @param {string} [dividerColor]      - Color of the line between rows (default: "#E5E5E5").
 *
 * ServiceListItem:
 * @param {string} label       - Small uppercase label above the row (e.g. "GRANDEUR").
 * @param {string} imageSrc    - Path or URL to the row's image.
 * @param {string} imageAlt    - Alt text for the image.
 * @param {string} title       - Row heading (e.g. "Grandeur Colombo").
 * @param {string} description - Body text. Use "\n\n" to split into separate paragraphs.
 * @param {string} href        - Link for the details action.
 */
export default function ServiceList({
  items,
  labelColor = "#111111",
  titleColor = "#0845BA",
  descriptionColor = "#4B4B4B",
  linkText = "View Details",
  linkColor = "#E2201B",
  dividerColor = "#E5E5E5",
}: ServiceListProps) {
  return (
    <section className="px-6 py-10 sm:px-10 lg:px-16 lg:py-14 xl:px-10">
      <div className="mx-auto max-w-[1920px]">
        {items.map((item, i) => (
          <div
            key={`${item.title}-${i}`}
            className={i > 0 ? "mt-10 border-t pt-10" : ""}
            style={i > 0 ? { borderColor: dividerColor } : undefined}
          >
            <h2
              className={`${superGrotesk.className} text-sm font-normal uppercase tracking-wide sm:text-3xl`}
              style={{ color: labelColor }}
            >
              {item.label}
            </h2>

            <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-10">
              <div className="relative aspect-9/5 w-full shrink-0 overflow-hidden lg:w-150">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 480px, 100vw"
                />
              </div>

              <div className="flex flex-col lg:justify-between">
                <h3
                  className={`${superGrotesk.className} text-lg font-normal uppercase sm:text-2xl`}
                  style={{ color: titleColor }}
                >
                  {item.title}
                </h3>

                <div>
                  {item.description.split("\n\n").map((paragraph, j) => (
                    <p
                      key={j}
                      className={`${prompt.className} mt-3 text-sm font-normal leading-relaxed`}
                      style={{ color: descriptionColor }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <a
                  href={item.href}
                  className={`${superGrotesk.className} mt-4 inline-flex items-center gap-1.5 text-xs font-normal uppercase tracking-normal sm:text-2xl`}
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
                    className="h-[0.7em] w-[0.7em] shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
