import Image from "next/image";
import { superGrotesk, prompt } from "@/lib/fonts";

export interface TeamMember {
  name: string;
  title: string;
  phone?: string;
  imageSrc?: string;
  imageAlt?: string;
}

interface TeamSectionProps {
  heading?: string;
  headingColor?: string;
  subtitle?: string;
  subtitleColor?: string;
  leadership: TeamMember[];
  managementHeading?: string;
  managementHeadingColor?: string;
  management: TeamMember[];
  bgColor?: string;
  dividerColor?: string;
}

function PlaceholderAvatar() {
  return (
    <svg viewBox="0 0 200 200" className="h-full w-full" aria-hidden="true">
      <rect width="200" height="200" fill="#A9B4CC" />
      <circle cx="100" cy="80" r="42" fill="#FFFFFF" />
      <path d="M20 200c0-55 36-90 80-90s80 35 80 90z" fill="#FFFFFF" />
    </svg>
  );
}

/**
 * TeamSection - "Meet the Team" style section: a photo grid for leadership,
 * plus a text-only grid for the wider management team below it.
 *
 * Usage:
 * <TeamSection
 *   heading="Meet the Edinborough Team"
 *   subtitle="Behind every trusted product is a passionate team dedicated to quality, innovation, and excellence."
 *   leadership={[
 *     { name: "Mr. C.M.M.R. Pasha", title: "Founder", phone: "-", imageSrc: "/images/team/pasha.jpg", imageAlt: "Mr. C.M.M.R. Pasha" },
 *     { name: "R.P.M. Zalmy", title: "Managing Director", phone: "+9477 298 4984", imageSrc: "/images/team/zalmy.jpg", imageAlt: "R.P.M. Zalmy" },
 *   ]}
 *   managementHeading="Management Team"
 *   management={[
 *     { name: "Thawsief Niyas", title: "Head – Quality Assurance & R&D", phone: "+9477 298 4984" },
 *     { name: "Nalin Udugampola", title: "Factory Manager", phone: "+9477 298 4984" },
 *   ]}
 * />
 *
 * Props:
 * @param {string} [heading]              - Top heading (default: "Meet the Edinborough Team").
 * @param {string} [headingColor]         - Color for the top heading (default: "#E2201B").
 * @param {string} [subtitle]             - Line below the heading. Omit to render no subtitle.
 * @param {string} [subtitleColor]        - Color for the subtitle (default: "#4B4B4B").
 * @param {TeamMember[]} leadership       - Leadership members shown with photos.
 * @param {string} [managementHeading]    - Heading above the management grid (default: "Management Team"). Omit to render no heading.
 * @param {string} [managementHeadingColor] - Color for the management heading (default: "#111111").
 * @param {TeamMember[]} management       - Management members shown as text only (no photo).
 * @param {string} [bgColor]              - Section background color (default: "#F5F5F5").
 * @param {string} [dividerColor]         - Color of the horizontal divider lines (default: "#D9D9D9").
 *
 * TeamMember:
 * @param {string} name           - Person's name.
 * @param {string} title          - Person's role/title.
 * @param {string} [phone]        - Contact number, shown below the title.
 * @param {string} [imageSrc]     - Photo path/URL (leadership only). Omit to show a placeholder silhouette.
 * @param {string} [imageAlt]     - Alt text for the photo (leadership only).
 */
export default function TeamSection({
  heading = "Meet the Edinborough Team",
  headingColor = "#DA281C",
  subtitle,
  subtitleColor = "#000000",
  leadership,
  managementHeading = "Management Team",
  managementHeadingColor = "#000000",
  management,
  bgColor = "#F3F3F3",
  dividerColor = "#C5C5C5",
}: TeamSectionProps) {
  return (
    <section
      className="px-6 py-10 sm:px-10 lg:px-16 lg:py-14 xl:px-10"
      style={{ backgroundColor: bgColor }}
    >
      <div className="mx-auto max-w-[1920px]">
        {/* Top heading */}
        <div className="text-center">
          <h2
            className={`${superGrotesk.className} text-xl font-normal uppercase sm:text-2xl lg:text-4xl`}
            style={{ color: headingColor }}
          >
            {heading}
          </h2>
          {subtitle && (
            <p
              className={`${prompt.className} mx-auto mt-2 max-w-4xl text-sm font-normal leading-relaxed sm:text-base`}
              style={{ color: subtitleColor }}
            >
              {subtitle}
            </p>
          )}
        </div>

        <div
          className="mt-8 h-px w-full"
          style={{ backgroundColor: dividerColor }}
        />

        {/* Leadership grid */}
        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-8 md:grid-cols-4">
          {leadership.map((member, i) => (
            <div
              key={`${member.name}-${i}`}
              className="flex flex-col items-center text-center"
            >
              <div className="relative aspect-square w-full max-w-[220px] bg-white p-2 shadow-sm">
                <div className="relative h-full w-full overflow-hidden">
                  {member.imageSrc ? (
                    <Image
                      src={member.imageSrc}
                      alt={member.imageAlt ?? member.name}
                      fill
                      className="object-cover"
                      sizes="220px"
                    />
                  ) : (
                    <PlaceholderAvatar />
                  )}
                </div>
              </div>

              <h3
                className={`${superGrotesk.className} mt-4 text-base font-normal uppercase leading-snug sm:text-xl`}
                style={{ color: "#111111" }}
              >
                {member.name}
              </h3>
              <p
                className={`${prompt.className} mt-1 text-md`}
                style={{ color: "#4B4B4B" }}
              >
                {member.title}
              </p>
              {member.phone && (
                <p
                  className={`${prompt.className} mt-1 text-md`}
                  style={{ color: "#4B4B4B" }}
                >
                  {member.phone}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Management team */}
        {managementHeading && (
          <>
            <h2
              className={`${superGrotesk.className} mt-16 text-center text-xl font-normal uppercase sm:text-2xl lg:text-4xl`}
              style={{ color: managementHeadingColor }}
            >
              {managementHeading}
            </h2>
            <div
              className="mt-6 h-px w-full "
              style={{ backgroundColor: dividerColor }}
            />
          </>
        )}

        <div className="mt-14 flex flex-wrap justify-center gap-x-6 gap-y-8">
          {management.map((member, i) => (
            <div
              key={`${member.name}-${i}`}
              className="w-[calc((100%-1.5rem)/2)] text-center sm:w-[calc((100%-3rem)/3)] lg:w-[calc((100%-6rem)/5)]"
            >
              <h3
                className={`${superGrotesk.className} text-base font-normal sm:text-lg`}
                style={{ color: "#000" }}
              >
                {member.name}
              </h3>
              <p
                className={`${prompt.className} mt-1 text-sm`}
                style={{ color: "#000" }}
              >
                {member.title}
              </p>
              {member.phone && (
                <p
                  className={`${prompt.className} mt-1 text-sm`}
                  style={{ color: "#000" }}
                >
                  {member.phone}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
