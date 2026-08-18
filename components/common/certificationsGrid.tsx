import Image from "next/image";
import { superGrotesk, prompt } from "@/lib/fonts";

export interface Certification {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  certificateHref: string;
}

interface CertificationsGridProps {
  title: string;
  titleColor?: string;
  text?: string;
  textColor?: string;
  certifications: Certification[];
  linkText?: string;
  linkColor?: string;
  frameSrc?: string;
}

/**
 * CertificationsGrid - Title/text header followed by a row of certification
 * cards, each a gold picture-frame image with the badge/logo placed inside
 * it, plus a title, a subtitle, and a "View Certificate" link.
 *
 * Usage:
 * <CertificationsGrid
 *   title="Our Certifications"
 *   text="We follow international standards to ensure the highest level of quality, food safety and environmental responsibility in everything we do."
 *   certifications={[
 *     {
 *       imageSrc: "/images/achievements/sgs.png",
 *       imageAlt: "SGS certification mark",
 *       title: "ISO 22000:2008",
 *       subtitle: "Food Safety Management System Certification",
 *       certificateHref: "/images/achievements/certificates/iso-22000.pdf",
 *     },
 *   ]}
 * />
 *
 * Props:
 * @param {string} title                 - Section heading (e.g. "Our Certifications").
 * @param {string} [titleColor]          - Color for the heading (default: "#111111").
 * @param {string} [text]                - Paragraph below the heading. Omit to render no text.
 * @param {string} [textColor]           - Color for the paragraph (default: "#4B4B4B").
 * @param {Certification[]} certifications - Certification cards to display, in order.
 * @param {string} [linkText]            - Label for each card's link (default: "View Certificate").
 * @param {string} [linkColor]           - Color for the link and its arrow (default: "#E2201B").
 * @param {string} [frameSrc]            - Path/URL to the gold frame image behind each badge (default: "/images/achievements/frame.png").
 *
 * Certification:
 * @param {string} imageSrc       - Path or URL to the badge/logo image.
 * @param {string} imageAlt       - Alt text describing the certification.
 * @param {string} title          - Certification name (e.g. "ISO 22000:2008").
 * @param {string} subtitle       - Short description below the name.
 * @param {string} certificateHref - Link to view/download the certificate.
 */
export default function CertificationsGrid({
  title,
  titleColor = "#111111",
  text,
  textColor = "#4B4B4B",
  certifications,
  linkText = "View Certificate",
  linkColor = "#E2201B",
  frameSrc = "/images/achievements/frame.png",
}: CertificationsGridProps) {
  return (
    <section className="px-6 pb-10 sm:px-10 lg:px-16 lg:pb-14 xl:px-10">
      <div className="mx-auto max-w-[1920px]">
        <h2
          className={`${superGrotesk.className} text-2xl font-normal uppercase leading-none sm:text-3xl lg:text-4xl`}
          style={{ color: titleColor }}
        >
          {title}
        </h2>

        {text && (
          <p
            className={`${prompt.className} mt-4 max-w-xl text-sm font-normal leading-relaxed sm:text-[14px]`}
            style={{ color: textColor }}
          >
            {text}
          </p>
        )}

        <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:flex lg:flex-nowrap lg:justify-center lg:gap-3">
          {certifications.map((cert, i) => (
            <div
              key={`${cert.title}-${i}`}
              className="flex w-full flex-col items-center border border-[#EFEFEF] bg-white pb-5 text-center shadow-[0_4px_20px_rgba(0,0,0,0.08)] lg:h-100 lg:w-[calc((100%-3.75rem)/6)] lg:shrink"
            >
              <div className="relative aspect-4/5 w-full lg:aspect-auto lg:h-66.25">
                <Image
                  src={frameSrc}
                  alt=""
                  fill
                  className="object-contain"
                  aria-hidden="true"
                  sizes="(min-width: 1024px) 16vw, 45vw"
                />
                <div className="absolute inset-x-[22%] top-[19%] bottom-[11%]">
                  <Image
                    src={cert.imageSrc}
                    alt={cert.imageAlt}
                    fill
                    className="object-contain"
                    sizes="(min-width: 1024px) 12vw, 35vw"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center px-5">
                <h3
                  className={`${superGrotesk.className} mt-1 text-lg font-normal uppercase text-[#111111] sm:text-xl`}
                >
                  {cert.title}
                </h3>
                <p
                  className={`${prompt.className} mt-2 text-sm leading-snug text-[#000000] sm:text-sm`}
                >
                  {cert.subtitle}
                </p>

                <a
                  href={cert.certificateHref}
                  className={`${superGrotesk.className} mt-4 inline-flex items-center gap-2 text-base font-normal uppercase tracking-normal sm:text-lg`}
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
                    className="h-[1.1em] w-[1.1em] shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
