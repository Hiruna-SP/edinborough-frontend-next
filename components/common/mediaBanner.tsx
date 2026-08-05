import Image from "next/image";
import { superGrotesk, prompt } from "@/lib/fonts";
import Button from "@/components/common/button";

/**
 * Splits `title` into lines and colors any line(s) matching a piece of
 * `highlightText` with `highlightColor`. `highlightText` can itself contain
 * "\n" to match a highlighted phrase that spans multiple title lines
 * (e.g. title's 2nd and 3rd lines are both meant to be red).
 */
function renderTitleLines(
  title: string,
  titleColor: string,
  highlightText?: string,
  highlightColor: string = "#E31E24",
) {
  const highlightParts = highlightText
    ? highlightText.split("\n").filter(Boolean)
    : [];

  return title.split("\n").map((line, i) => {
    const matchedPart = highlightParts.find((part) => line.includes(part));

    if (!matchedPart) {
      return (
        <span key={i} className="block" style={{ color: titleColor }}>
          {line}
        </span>
      );
    }

    const segments = line.split(matchedPart);

    return (
      <span key={i} className="block" style={{ color: titleColor }}>
        {segments.map((segment, j) => (
          <span key={j}>
            {segment}
            {j < segments.length - 1 && (
              <span style={{ color: highlightColor }}>{matchedPart}</span>
            )}
          </span>
        ))}
      </span>
    );
  });
}

interface MediaBannerProps {
  layout?: "split" | "full";
  subtitle?: string;
  title: string;
  titleColor?: string;
  highlightText?: string;
  highlightColor?: string;
  text: string;
  textColor?: string;
  buttonText?: string;
  buttonHref?: string;
  buttonTextColor?: string;
  buttonBgColor?: string;
  imageSrc: string;
  imageAlt: string;
  showGradient?: boolean;
}

/**
 *
 * Props:
 * @param {"split"|"full"} [layout]  - "split" (default): text panel + image panel side by side, image only fills its own column (e.g. mayo/hero banner).
 *                                       "full": image fills the ENTIRE section as a background, text floats on top of it (e.g. world-map banner).
 * @param {string} [subtitle]        - Small line above the title. Omit to render no subtitle.
 * @param {string} title             - Main heading. Use "\n" to force a line break (e.g. multi-line titles).
 * @param {string} [titleColor]      - Color for the title text (default: "#3B3B3B").
 * @param {string} [highlightText]   - Exact substring within `title` to render in `highlightColor` instead of `titleColor`.
 *                                       e.g. title={"A PROUD SRI LANKAN\nBRAND, TRUSTED IN\n40+ COUNTRIES"} highlightText="40+ COUNTRIES"
 *                                       colors just that phrase, wherever it falls in the title, without needing to know its line index.
 * @param {string} [highlightColor]  - Color applied to `highlightText` (default: "#E31E24").
 * @param {string} text              - Paragraph text below the title.
 * @param {string} [textColor]       - Color for the paragraph text. Omit to use the default (neutral-600 on "split", neutral-200 on "full").
 * @param {string} [buttonText]      - Text shown on the button. Omit (along with `buttonHref`) to render no button at all.
 * @param {string} [buttonHref]      - Link the button points to.
 * @param {string} [buttonTextColor] - Text color for the button. Omit to use the shared Button component's default "blue" variant styling.
 * @param {string} [buttonBgColor]   - Background color for the button. Omit to use the shared Button component's default "blue" variant styling.
 * @param {string} imageSrc          - Path or URL to the image.
 * @param {string} imageAlt          - Alt text for the image.
 * @param {boolean} [showGradient]   - split: fades the left edge of the image column into the section background (default: false).
 *                                       full: adds a dark left-to-right overlay over the image so the text stays readable (default: true).
 */
export default function MediaBanner({
  layout = "split",
  subtitle,
  title,
  titleColor = "#3B3B3B",
  highlightText,
  highlightColor = "#E31E24",
  text,
  textColor,
  buttonText,
  buttonHref,
  buttonTextColor,
  buttonBgColor,
  imageSrc,
  imageAlt,
  showGradient,
}: MediaBannerProps) {
  if (layout === "full") {
    const overlay = showGradient ?? true;

    return (
      <section className="relative h-[420px] overflow-hidden sm:h-[480px] lg:h-[500px]">
        {/* Background image fills the whole section */}
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {overlay && (
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
        )}

        {/* Text content, floating on top of the image */}
        <div className="relative z-10 mx-auto flex h-full max-w-[1920px] items-center px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="max-w-xl">
            {subtitle && (
              <p
                className={`${superGrotesk.className} text-base font-normal tracking-wide text-[#0B47BD] sm:text-lg lg:text-xl xl:text-[30px]`}
              >
                {subtitle}
              </p>
            )}

            <h1
              className={`${superGrotesk.className} ${subtitle ? "mt-3" : ""} text-[34px] font-normal leading-[0.95] sm:text-[44px] md:text-[52px] xl:text-[64px]`}
            >
              {renderTitleLines(title, titleColor, highlightText, highlightColor)}
            </h1>

            <p
              className={`${prompt.className} mt-5 max-w-4xl text-sm font-normal leading-relaxed text-neutral-200 lg:text-sm`}
              style={textColor ? { color: textColor } : undefined}
            >
              {text}
            </p>

            {buttonText && (
              <div className="mt-7">
                <Button
                  text={buttonText}
                  color="blue"
                  href={buttonHref}
                  bgColor={buttonBgColor}
                  textColor={buttonTextColor}
                />
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  const edgeFade = showGradient ?? false;

  return (
    <section className="relative overflow-hidden bg-[#F7F2ED]">
      <div className="relative mx-auto flex max-w-[1920px] flex-col lg:h-[500px] lg:flex-row">
        {/* Text content */}
        <div className="relative z-10 flex flex-col justify-center px-6 py-10 sm:px-10 lg:w-[43%] lg:px-16 lg:py-0 xl:px-10">
          {subtitle && (
            <p
              className={`${superGrotesk.className} text-base font-normal tracking-wide text-[#0B47BD] sm:text-lg lg:text-xl xl:text-[30px]`}
            >
              {subtitle}
            </p>
          )}

          <h1
            className={`${superGrotesk.className} ${subtitle ? "mt-3" : ""} text-[34px] font-normal leading-[0.95] sm:text-[44px] md:text-[52px] xl:text-[64px]`}
          >
            {renderTitleLines(title, titleColor, highlightText, highlightColor)}
          </h1>

          <p
            className={`${prompt.className} mt-5 max-w-4xl text-sm font-normal leading-relaxed text-neutral-600 lg:text-sm`}
            style={textColor ? { color: textColor } : undefined}
          >
            {text}
          </p>

          {buttonText && (
            <div className="mt-7">
              <Button
                text={buttonText}
                color="blue"
                href={buttonHref}
                bgColor={buttonBgColor}
                textColor={buttonTextColor}
              />
            </div>
          )}
        </div>

        {/* Product photography */}
        <div className="relative h-[280px] sm:h-[360px] lg:h-full lg:w-[58%]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            className="object-cover object-center"
            sizes="(min-width: 1024px) 58vw, 100vw"
          />
          {edgeFade && (
            /* Fades the left edge of the photo into the section background
               so the two halves blend the way they do in the reference. */
            <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-32 bg-gradient-to-r from-[#F7F2ED] to-transparent lg:block xl:w-48" />
          )}
        </div>
      </div>
    </section>
  );
}