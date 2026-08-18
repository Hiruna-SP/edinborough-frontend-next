import Image from "next/image";
import { superGrotesk, prompt } from "@/lib/fonts";

export interface WhyBuildCareerItem {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

interface WhyBuildCareerProps {
  title: string;
  text: string;
  linkText: string;
  linkHref: string;
  items: WhyBuildCareerItem[];
  titleColor?: string;
  textColor?: string;
  linkColor?: string;
  itemTitleColor?: string;
  itemDescriptionColor?: string;
}

/**
 * WhyBuildCareer - Left column of title + description + link, paired with a
 * row of icon + title + description items on the right (e.g. "Why Build
 * Your Career With Us?" on the careers page).
 *
 * Usage:
 * <WhyBuildCareer
 *   title="WHY BUILD YOUR CAREER WITH US?"
 *   text="We believe our people are the secret behind our success..."
 *   linkText="DISCOVER OUR CULTURE"
 *   linkHref="/about"
 *   items={[
 *     {
 *       imageSrc: "/images/careers/growth.svg",
 *       imageAlt: "Arrow icon representing growth",
 *       title: "Growth",
 *       description: "Continuous learning and career advancement opportunities.",
 *     },
 *   ]}
 * />
 */
export default function WhyBuildCareer({
  title,
  text,
  linkText,
  linkHref,
  items,
  titleColor = "#111111",
  textColor = "#111",
  linkColor = "#E2201B",
  itemTitleColor = "#111111",
  itemDescriptionColor = "#111",
}: WhyBuildCareerProps) {
  return (
    <section className="px-6 pt-10 sm:px-10 lg:px-16 lg:pt-14 xl:px-10">
      <div className="mx-auto max-w-[1920px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-12">
          <div className="lg:max-w-xs lg:shrink-0">
            <h2
              className={`${superGrotesk.className} text-2xl font-normal uppercase leading-tight sm:text-4xl`}
              style={{ color: titleColor }}
            >
              {title}
            </h2>
            <p
              className={`${prompt.className} mt-4 text-sm font-normal leading-relaxed`}
              style={{ color: textColor }}
            >
              {text}
            </p>
            <a
              href={linkHref}
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
                className="h-[0.8em] w-[0.8em] shrink-0"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-5 lg:gap-x-8">
            {items.map((item, i) => (
              <div
                key={`${item.title}-${i}`}
                className="flex flex-col items-center text-center"
              >
                <div className="relative h-14 w-14 shrink-0 sm:h-16 sm:w-16">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    className="object-contain"
                    sizes="64px"
                  />
                </div>
                <h3
                  className={`${superGrotesk.className} mt-3 text-sm font-normal uppercase leading-snug sm:text-lg`}
                  style={{ color: itemTitleColor }}
                >
                  {item.title}
                </h3>
                <p
                  className={`${prompt.className} mt-1 text-xs font-normal leading-relaxed sm:text-sm`}
                  style={{ color: itemDescriptionColor }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
