import { superGrotesk, prompt } from "@/lib/fonts";

interface SectionHeadingProps {
  title: string;
  titleColor?: string;
  text: string;
  textColor?: string;
  action?: React.ReactNode;
  layout?: "stacked" | "inline";
}

/**
 * SectionHeading - Simple title + text block, no image or button.
 *
 * Usage:
 * <SectionHeading
 *   title="Who We Are"
 *   text="For over five decades, Edinborough has combined Sri Lankan heritage, exceptional quality, and modern innovation to create products trusted by families and chefs."
 * />
 *
 * Props:
 * @param {string} title        - Heading text.
 * @param {string} [titleColor] - Color for the title (default: "#111111").
 * @param {string} text         - Paragraph text below the title.
 * @param {string} [textColor]  - Color for the paragraph text (default: "#4B4B4B").
 * @param {React.ReactNode} [action] - Optional content rendered to the right of the title/text (e.g. carousel controls).
 * @param {string} [layout] - "stacked" (default) places text below the title; "inline" places title and text side by side on the same row, vertically centered.
 */
export default function SectionHeading({
  title,
  titleColor = "#000000",
  text,
  textColor = "#000",
  action,
  layout = "stacked",
}: SectionHeadingProps) {
  if (layout === "inline") {
    return (
      <section className="px-6 pt-10 sm:px-10 lg:px-16 lg:pt-14 pb-8 xl:px-10">
        <div className="mx-auto max-w-[1920px]">
          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-24">
              <h2
                className={`${superGrotesk.className} shrink-0 text-2xl font-normal uppercase leading-none sm:text-3xl lg:text-4xl`}
                style={{ color: titleColor }}
              >
                {title}
              </h2>

              <p
                className={`${prompt.className} max-w-lg text-sm font-normal leading-relaxed sm:text-[14px]`}
                style={{ color: textColor }}
              >
                {text}
              </p>
            </div>

            {action}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="px-6 pt-10 sm:px-10 lg:px-16 lg:pt-14 pb-8 xl:px-10">
      <div className="mx-auto max-w-[1920px]">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2
              className={`${superGrotesk.className} text-2xl font-normal uppercase leading-none sm:text-3xl lg:text-4xl`}
              style={{ color: titleColor }}
            >
              {title}
            </h2>

            <p
              className={`${prompt.className} mt-4 max-w-xl text-sm font-normal leading-relaxed sm:text-[14px]`}
              style={{ color: textColor }}
            >
              {text}
            </p>
          </div>

          {action}
        </div>
      </div>
    </section>
  );
}
