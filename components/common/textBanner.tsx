import { superGrotesk, prompt } from "@/lib/fonts";

interface SectionHeadingProps {
  title: string;
  titleColor?: string;
  text: string;
  textColor?: string;
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
 */
export default function SectionHeading({
  title,
  titleColor = "#000000",
  text,
  textColor = "#000000",
}: SectionHeadingProps) {
  return (
    <section className="px-6 pt-10 sm:px-10 lg:px-16 lg:pt-14 pb-8 xl:px-10">
      <div className="mx-auto max-w-[1920px]">
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
    </section>
  );
}
