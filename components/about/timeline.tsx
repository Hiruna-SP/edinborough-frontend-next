import Image from "next/image";
import { superGrotesk, prompt } from "@/lib/fonts";

export interface TimelineItem {
  year: string;
  heading: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

interface TimelineProps {
  items: TimelineItem[];
  lineColor?: string;
  yearColor?: string;
  headingColor?: string;
  descriptionColor?: string;
}

/**
 * Timeline - Row of circular milestone images connected by a dashed line.
 *
 * Usage:
 * <Timeline
 *   items={[
 *     {
 *       year: "1973",
 *       heading: "Our Begining",
 *       description: "Mr. C.M.R.R. Pasha began producing cordials from his own home with a vision to create quality products for local families.",
 *       imageSrc: "/images/timeline/1973.jpg",
 *       imageAlt: "Mr. C.M.R.R. Pasha bottling cordials by hand in 1973",
 *     },
 *     {
 *       year: "1980s",
 *       heading: "Growing Passion",
 *       description: "With increasing demand, we expanded our production and introduced a range of delicious sauces and cordials.",
 *       imageSrc: "/images/timeline/1980s.jpg",
 *       imageAlt: "Edinborough production line in the 1980s",
 *     },
 *   ]}
 * />
 *
 * Props:
 * @param {TimelineItem[]} items       - Milestones to display, in order, left to right.
 * @param {string} [lineColor]         - Color of the dashed connector line between circles (default: "#E2201B").
 * @param {string} [yearColor]         - Color of the year/label text (default: "#111111").
 * @param {string} [headingColor]      - Color of the heading text below the year (default: "#111111").
 * @param {string} [descriptionColor]  - Color of the description text (default: "#4B4B4B").
 */
export default function Timeline({
  items,
  lineColor = "#DA281C",
  yearColor = "#111111",
  headingColor = "#111111",
  descriptionColor = "#4B4B4B",
}: TimelineProps) {
  return (
    <section className="px-6 pb-10 sm:px-10 lg:px-16 lg:pb-14 xl:px-10">
      <div className="mx-auto flex max-w-[1920px] flex-col gap-12 sm:flex-row sm:items-start sm:gap-0">
        {items.map((item, i) => (
          <div key={`${item.year}-${i}`} className="relative flex flex-1 flex-col items-center px-2">
            {i > 0 && (
              <div
                className="absolute left-[-50%] top-20 hidden h-0 w-full border-t-2 border-dashed sm:block"
                style={{ borderColor: lineColor }}
              />
            )}

            <div className="relative z-10 h-28 w-28 overflow-hidden rounded-full ring-4 ring-white sm:h-40 sm:w-40">
              <Image
                src={item.imageSrc}
                alt={item.imageAlt}
                fill
                className="object-cover"
                sizes="128px"
              />
            </div>

            <h3
              className={`${superGrotesk.className} mt-6 text-center text-xl font-normal uppercase leading-tight sm:text-2xl`}
              style={{ color: yearColor }}
            >
              {item.year}
            </h3>
            <p
              className={`${superGrotesk.className} text-center text-xl font-normal uppercase leading-tight sm:text-2xl`}
              style={{ color: headingColor }}
            >
              {item.heading}
            </p>

            <p
              className={`${prompt.className} mt-3 max-w-[220px] text-center text-sm font-normal leading-relaxed`}
              style={{ color: descriptionColor }}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}