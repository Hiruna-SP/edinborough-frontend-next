import { ArrowLeft, Clock, MapPin, Calendar } from "lucide-react";
import { superGrotesk, prompt } from "@/lib/fonts";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface CareerDetailProps {
  title: string;
  department: string;
  employmentType: string;
  location: string;
  datePosted: string;
  experience: string;
  aboutRole: string;
  responsibilities: string[];
  requirements: string[];
  applyHref: string;
  breadcrumbItems: BreadcrumbItem[];
  backHref?: string;
  backText?: string;
  applyText?: string;
  applySubtext?: string;
  shareWhatsappHref?: string;
  shareFacebookHref?: string;
  shareInstagramHref?: string;
  responsibilitiesTitle?: string;
  requirementsTitle?: string;
  detailsTitle?: string;
  accentColor?: string;
}

/**
 * CareerDetail - Full career listing detail page body: back link, breadcrumb,
 * title/department with share icons and meta row, an "Apply Now" call to
 * action, About/Responsibilities/Requirements sections, and a right-hand
 * "Position Details" panel.
 *
 * Usage:
 * <CareerDetail
 *   title="Sales Executive"
 *   department="Sales & Marketing"
 *   employmentType="Full-Time"
 *   location="Colombo, Sri Lanka"
 *   datePosted="May 20, 2024"
 *   experience="1-3 Years"
 *   aboutRole="We are looking for a motivated and results-driven Sales Executive..."
 *   responsibilities={["Develop and maintain strong customer relationships."]}
 *   requirements={["Strong communication and interpersonal skills."]}
 *   applyHref="https://www.linkedin.com"
 *   breadcrumbItems={[
 *     { label: "Home", href: "/" },
 *     { label: "Edinborough Careers", href: "/careers" },
 *     { label: "Sales Executive" },
 *   ]}
 * />
 *
 * Props:
 * @param {string} title                 - Role title (e.g. "Sales Executive").
 * @param {string} department            - Department name shown below the title.
 * @param {string} employmentType        - Employment type shown with a clock icon (e.g. "Full-Time").
 * @param {string} location              - Location shown with a pin icon (e.g. "Colombo, Sri Lanka").
 * @param {string} datePosted            - Date the role was posted, shown with a calendar icon (e.g. "May 20, 2024").
 * @param {string} experience            - Experience level shown in the details panel (e.g. "1-3 Years").
 * @param {string} aboutRole             - Paragraph shown under "About The Role".
 * @param {string[]} responsibilities    - Bullet points shown under the responsibilities section.
 * @param {string[]} requirements        - Bullet points shown under the requirements section.
 * @param {string} applyHref             - Link the "Apply Now" buttons point to.
 * @param {BreadcrumbItem[]} breadcrumbItems - Breadcrumb trail; the last item is rendered as plain text (current page).
 * @param {string} [backHref]            - Link for the "Back" control (default: "/careers").
 * @param {string} [backText]            - Text for the "Back" control (default: "Back").
 * @param {string} [applyText]           - Text for the apply buttons (default: "Apply Now").
 * @param {string} [applySubtext]        - Subtext under the top "Apply Now" button (default: "via LinkedIn").
 * @param {string} [shareWhatsappHref]   - Link for the WhatsApp share icon (default: "#").
 * @param {string} [shareFacebookHref]   - Link for the Facebook share icon (default: "#").
 * @param {string} [shareInstagramHref]  - Link for the Instagram share icon (default: "#").
 * @param {string} [responsibilitiesTitle] - Heading for the responsibilities section (default: "Key Responsibilities").
 * @param {string} [requirementsTitle]   - Heading for the requirements section (default: "What We're Looking For").
 * @param {string} [detailsTitle]        - Heading for the sidebar panel (default: "Position Details").
 * @param {string} [accentColor]         - Color for links, icons, and the apply buttons (default: "#E2201B").
 *
 * BreadcrumbItem:
 * @param {string} label   - Breadcrumb text.
 * @param {string} [href]  - Link for the crumb. Omit to render plain text (used for the current page).
 */
export default function CareerDetail({
  title,
  department,
  employmentType,
  location,
  datePosted,
  experience,
  aboutRole,
  responsibilities,
  requirements,
  applyHref,
  breadcrumbItems,
  backHref = "/careers",
  backText = "Back",
  applyText = "Apply Now",
  applySubtext = "via LinkedIn",
  shareWhatsappHref = "#",
  shareFacebookHref = "#",
  shareInstagramHref = "#",
  responsibilitiesTitle = "Key Responsibilities",
  requirementsTitle = "What We're Looking For",
  detailsTitle = "Position Details",
  accentColor = "#E2201B",
}: CareerDetailProps) {
  const detailRows = [
    { label: "Department", value: department },
    { label: "Location", value: location },
    { label: "Employment Type", value: employmentType },
    { label: "Experience", value: experience },
  ];

  return (
    <section className="px-6 py-10 sm:px-10 lg:px-16 xl:px-10">
      <div className="mx-auto max-w-[1920px]">
        <a
          href={backHref}
          className={`${prompt.className} inline-flex items-center gap-2 text-sm text-[#000000]`}
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
          {backText}
        </a>

        <nav
          aria-label="Breadcrumb"
          className={`${prompt.className} mt-5 flex flex-wrap items-center gap-2 text-xs text-[#000000]`}
        >
          {breadcrumbItems.map((item, i) => (
            <span key={`${item.label}-${i}`} className="flex items-center gap-2">
              {i > 0 && (
                <span aria-hidden="true" style={{ color: "#DA281C" }}>
                  &gt;
                </span>
              )}
              {item.href ? (
                <a href={item.href} className="hover:text-[#000000]">
                  {item.label}
                </a>
              ) : (
                <span className="text-[#000000]">{item.label}</span>
              )}
            </span>
          ))}
        </nav>

        <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px]">
          <div className="lg:border-r lg:border-[#EAEAEA] lg:pr-10">
            <div className="flex flex-col justify-between gap-6 pb-8 sm:flex-row sm:items-start">
              <div>
                <h1
                  className={`${superGrotesk.className} text-3xl uppercase leading-tight text-[#000000] sm:text-4xl lg:text-5xl`}
                >
                  {title}
                </h1>
                <p className={`${prompt.className} mt-1 text-sm text-[#000000]`}>
                  {department}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-5">
                  <span className={`${prompt.className} flex items-center gap-2 text-sm font-semibold text-[#000000]`}>
                    Share
                  </span>
                  <a href={shareWhatsappHref} aria-label="Share on WhatsApp" style={{ color: accentColor }}>
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </a>
                  <a href={shareFacebookHref} aria-label="Share on Facebook" style={{ color: accentColor }}>
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                      <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                    </svg>
                  </a>
                  <a href={shareInstagramHref} aria-label="Share on Instagram" style={{ color: accentColor }}>
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>

                  <span className={`${prompt.className} flex items-center gap-1.5 text-xs text-[#000000]`}>
                    <Clock className="h-3.5 w-3.5 shrink-0" strokeWidth={2} aria-hidden="true" />
                    {employmentType}
                  </span>
                  <span className={`${prompt.className} flex items-center gap-1.5 text-xs text-[#000000]`}>
                    <MapPin className="h-3.5 w-3.5 shrink-0" strokeWidth={2} aria-hidden="true" />
                    {location}
                  </span>
                  <span className={`${prompt.className} flex items-center gap-1.5 text-xs text-[#000000]`}>
                    <Calendar className="h-3.5 w-3.5 shrink-0" strokeWidth={2} aria-hidden="true" />
                    {datePosted}
                  </span>
                </div>
              </div>

              <div className="shrink-0 sm:text-right">
                <a
                  href={applyHref}
                  className={`${superGrotesk.className} inline-flex items-center gap-1.5 text-xl uppercase`}
                  style={{ color: accentColor }}
                >
                  {applyText}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-[0.9em] w-[0.9em] shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
                <p className={`${prompt.className} mt-1 text-[10px] uppercase tracking-wide text-[#DA281C]`}>
                  {applySubtext}
                </p>
              </div>
            </div>

            <h2 className={`${prompt.className} text-xs font-semibold uppercase tracking-wide text-[#000000]`}>
              About The Role
            </h2>
            <p className={`${prompt.className} mt-3 text-sm leading-relaxed text-[#000000] sm:text-base`}>
              {aboutRole}
            </p>

            <h2 className={`${prompt.className} mt-8 text-xs font-semibold uppercase tracking-wide text-[#000000]`}>
              {responsibilitiesTitle}
            </h2>
            <ul className="mt-3 flex flex-col gap-2">
              {responsibilities.map((item, i) => (
                <li
                  key={i}
                  className={`${prompt.className} flex gap-2 text-sm leading-relaxed text-[#000000] sm:text-base`}
                >
                  <span aria-hidden="true">&bull;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className={`${prompt.className} mt-8 text-xs font-semibold uppercase tracking-wide text-[#000000]`}>
              {requirementsTitle}
            </h2>
            <ul className="mt-3 flex flex-col gap-2">
              {requirements.map((item, i) => (
                <li
                  key={i}
                  className={`${prompt.className} flex gap-2 text-sm leading-relaxed text-[#000000] sm:text-base`}
                >
                  <span aria-hidden="true">&bull;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href={applyHref}
              className={`${superGrotesk.className} mt-10 inline-flex items-center gap-1.5 text-xl uppercase`}
              style={{ color: accentColor }}
            >
              {applyText}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[0.9em] w-[0.9em] shrink-0"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <p className={`${prompt.className} mt-1 text-[10px] uppercase tracking-wide text-[#DA281C]`}>
              {applySubtext}
            </p>
          </div>

          <aside>
            <h2 className={`${superGrotesk.className} text-xl uppercase text-[#000000]`}>
              {detailsTitle}
            </h2>
            <p className={`${prompt.className} mt-4 text-xs font-semibold uppercase tracking-wide text-[#000000]`}>
              {title}
            </p>

            <dl className="mt-4 flex flex-col">
              {detailRows.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between gap-4 border-t border-[#EAEAEA] py-3 first:border-t-0"
                >
                  <dt className={`${prompt.className} text-xs text-[#000000]`}>{row.label}:</dt>
                  <dd className={`${prompt.className} text-xs font-medium text-[#000000]`}>{row.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
