import Image from "next/image";
import { superGrotesk, prompt } from "@/lib/fonts";
import Button from "@/components/common/button";

interface MediaBannerProps {
  subtitle?: string;
  title: string;
  text: string;
  buttonText: string;
  buttonHref: string;
  imageSrc: string;
  imageAlt: string;
}

/**
 *
 * Props:
 * @param {string} [subtitle]    - Small line above the title. Omit to render no subtitle.
 * @param {string} title         - Main heading. Use "\n" to force a line break (e.g. two-line titles).
 * @param {string} text          - Paragraph text below the title.
 * @param {string} buttonText    - Text shown on the button.
 * @param {string} buttonHref    - Link the button points to.
 * @param {string} imageSrc      - Path or URL to the right-side image.
 * @param {string} imageAlt      - Alt text for the image.
 */
export default function MediaBanner({
  subtitle,
  title,
  text,
  buttonText,
  buttonHref,
  imageSrc,
  imageAlt,
}: MediaBannerProps) {
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
            className={`${superGrotesk.className} ${subtitle ? "mt-3" : ""} text-[34px] font-normal leading-[0.95] text-[#3B3B3B] sm:text-[44px] md:text-[52px] xl:text-[64px]`}
          >
            {title.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p
            className={`${prompt.className} mt-5 max-w-4xl text-sm font-normal leading-relaxed text-neutral-600 lg:text-sm`}
          >
            {text}
          </p>

          <div className="mt-7">
            <Button text={buttonText} color="blue" href={buttonHref} />
          </div>
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
          {/* Fades the left edge of the photo into the cream background
             so the two halves blend the way they do in the reference. */}
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-32 bg-gradient-to-r from-[#F7F2ED] to-transparent lg:block xl:w-48" />
        </div>
      </div>
    </section>
  );
}
