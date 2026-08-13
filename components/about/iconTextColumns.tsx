import Image from "next/image";
import { Fragment } from "react";
import { superGrotesk, prompt } from "@/lib/fonts";

export interface IconTextColumnItem {
  label: string;
  labelColor?: string;
  title: string;
  titleColor?: string;
  description: string;
  descriptionColor?: string;
  imageSrc: string;
  imageAlt: string;
}

interface IconTextColumnsProps {
  items: IconTextColumnItem[];
  dividerColor?: string;
}

/**
 * IconTextColumns - Row of icon-image + label + title + description panels,
 * separated by thin diagonal dividers. Used for things like "Our Vision" /
 * "Our Mission" style sections, but works for any number of columns.
 *
 * Usage:
 * <IconTextColumns
 *   items={[
 *     {
 *       label: "Our Vision",
 *       labelColor: "#E2201B",
 *       title: "To be the most\nversatile and leading\nfood company in Sri Lanka",
 *       description: "To delight our valued customers by consistently exceeding their expectations through trusted quality, innovation, and excellence in every product we create.",
 *       imageSrc: "/images/icons/vision-target.png",
 *       imageAlt: "Target icon representing Edinborough's vision",
 *     },
 *     {
 *       label: "Our Mission",
 *       labelColor: "#0845BA",
 *       title: "Delivering safe,\nhigh-quality products\nat competitive prices",
 *       description: "We are committed to delivering safe, high-quality products on time while exceeding customer expectations through innovation, a skilled workforce, and adherence to local and international quality standards.",
 *       imageSrc: "/images/icons/mission-mountain.png",
 *       imageAlt: "Mountain with flag icon representing Edinborough's mission",
 *     },
 *   ]}
 * />
 *
 * Props:
 * @param {IconTextColumnItem[]} items    - Columns to render, left to right.
 * @param {string} [dividerColor]         - Color of the diagonal line(s) between columns (default: "#D4D4D4").
 *
 * IconTextColumnItem:
 * @param {string} label               - Small label above the title (e.g. "Our Vision").
 * @param {string} [labelColor]        - Color for the label (default: "#111111").
 * @param {string} title               - Heading text. Use "\n" to force line breaks.
 * @param {string} [titleColor]        - Color for the title (default: "#111111").
 * @param {string} description         - Paragraph text below the title.
 * @param {string} [descriptionColor]  - Color for the description (default: "#4B4B4B").
 * @param {string} imageSrc            - Path or URL to the icon/illustration image.
 * @param {string} imageAlt            - Alt text for the icon image.
 */
export default function IconTextColumns({
  items,
  dividerColor = "#D4D4D4",
}: IconTextColumnsProps) {
  return (
    <section className="relative px-6 py-10 sm:px-10 lg:px-16 lg:py-14 xl:px-10">
      <div className="relative mx-auto max-w-[1920px]">
        <div className="flex flex-col gap-12 md:flex-row md:items-stretch md:gap-0">
          {items.map((item, i) => (
            <Fragment key={`${item.label}-${i}`}>
              <div
                className={`flex flex-1 items-center gap-6 ${
                  i > 0 ? "md:pl-6 lg:pl-10 xl:pl-14" : ""
                }`}
              >
                <div className="min-w-0 flex-1">
                  <p
                    className={`${superGrotesk.className} text-sm font-normal uppercase tracking-wide sm:text-base`}
                    style={{ color: item.labelColor ?? "#000000" }}
                  >
                    {item.label}
                  </p>

                  <h3
                    className={`${superGrotesk.className} mt-2 text-2xl font-normal uppercase leading-tight sm:text-3xl`}
                    style={{ color: item.titleColor ?? "#111111" }}
                  >
                    {item.title.split("\n").map((line, j) => (
                      <span key={j} className="block">
                        {line}
                      </span>
                    ))}
                  </h3>

                  <p
                    className={`${prompt.className} mt-4 max-w-md text-sm font-normal leading-relaxed sm:text-base`}
                    style={{ color: item.descriptionColor ?? "#000" }}
                  >
                    {item.description}
                  </p>
                </div>

                <div className="relative h-24 w-24 shrink-0 sm:h-32 sm:w-32 lg:h-36 lg:w-36">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    className="object-contain"
                    sizes="144px"
                  />
                </div>
              </div>

              {i < items.length - 1 && (
                <div className="relative hidden w-10 shrink-0 md:block lg:w-16 xl:w-20">
                  <div
                    className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 rotate-12"
                    style={{ backgroundColor: dividerColor }}
                  />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}