import Image from "next/image";
import { superGrotesk, prompt } from "@/lib/fonts";

export interface LocationItem {
  image: string;
  imageAlt: string;
  titlePrefix: string;
  titleAccent: string;
  addressLines: string[];
  phones: string[];
  email?: string;
  hoursLines?: string[];
  mapEmbedSrc: string;
}

interface LocationsSectionProps {
  title?: string;
  accentColor?: string;
  locations?: LocationItem[];
}

const DEFAULT_LOCATIONS: LocationItem[] = [
  {
    image: "/images/contact/2.png",
    imageAlt: "Edinborough head office building in Rajagiriya",
    titlePrefix: "Head Office - ",
    titleAccent: "Rajagiriya",
    addressLines: ["12 New Kolonnawa Road,", "Moragasmulla Rd, Rajagiriya"],
    phones: ["+9411 732 6326", "+9477 298 4984"],
    email: "info@edinboroughfoods.com",
    hoursLines: ["Monday to Friday", "08:00 AM to 05:00 PM", "(Closed on Public Holidays"],
    mapEmbedSrc:
      "https://www.google.com/maps?q=12+New+Kolonnawa+Road,+Moragasmulla+Rd,+Rajagiriya&output=embed",
  },
  {
    image: "/images/contact/3.png",
    imageAlt: "Edinborough factory in Padukka",
    titlePrefix: "Factory - ",
    titleAccent: "Padukka",
    addressLines: ["Edinborough Products (Pvt) Ltd | Factory", "Edinborough, Padukka 10500"],
    phones: ["+9411 728 9700", "+9411 728 9700"],
    email: "info@edinboroughfoods.com",
    hoursLines: ["Monday to Friday", "08:00 AM to 05:00 PM", "(Closed on Public Holidays"],
    mapEmbedSrc: "https://www.google.com/maps?q=Edinborough,+Padukka+10500&output=embed",
  },
  {
    image: "/images/contact/4.png",
    imageAlt: "Edinborough Distributors storefront in Colombo",
    titlePrefix: "Trades - ",
    titleAccent: "Colombo",
    addressLines: ["Edinborough Distributors", "187 Dam St, Colombo 01200"],
    phones: ["+9411 728 9700", "+9411 728 9700"],
    email: "info@edinboroughfoods.com",
    hoursLines: ["Monday to Friday", "08:00 AM to 05:00 PM", "(Closed on Public Holidays"],
    mapEmbedSrc: "https://www.google.com/maps?q=187+Dam+St,+Colombo+01200&output=embed",
  },
  {
    image: "/images/contact/3.png",
    imageAlt: "Edinborough factory in Padukka",
    titlePrefix: "GRANDEUR - ",
    titleAccent: "SRI LANKA",
    addressLines: ["Edinborough Products (Pvt) Ltd | Factory", "Edinborough, Padukka 10500"],
    phones: ["+9411 728 9700", "+9411 728 9700"],
    email: "info@edinboroughfoods.com",
    hoursLines: ["Monday to Friday", "08:00 AM to 05:00 PM", "(Closed on Public Holidays"],
    mapEmbedSrc: "https://www.google.com/maps?q=Edinborough,+Padukka+10500&output=embed",
  },
  {
    image: "/images/contact/4.png",
    imageAlt: "Edinborough Distributors storefront in Colombo",
    titlePrefix: "BEEMAS - ",
    titleAccent: "Colombo",
    addressLines: ["Edinborough Distributors", "187 Dam St, Colombo 01200"],
    phones: ["+9411 728 9700", "+9411 728 9700"],
    email: "info@edinboroughfoods.com",
    hoursLines: ["Monday to Friday", "08:00 AM to 05:00 PM", "(Closed on Public Holidays"],
    mapEmbedSrc: "https://www.google.com/maps?q=187+Dam+St,+Colombo+01200&output=embed",
  },
];

/**
 * LocationsSection - "Our Locations" list. Each row shows a photo, address
 * details with contact icons, and an embedded map, side by side.
 */
export default function LocationsSection({
  title = "Our Locations",
  accentColor = "#E2201B",
  locations = DEFAULT_LOCATIONS,
}: LocationsSectionProps) {
  return (
    <section className="px-6 py-14 sm:px-10 lg:px-16 xl:px-10">
      <div className="mx-auto max-w-[1920px]">
        <h2
          className={`${superGrotesk.className} text-2xl font-normal uppercase leading-tight text-black sm:text-3xl`}
        >
          {title}
        </h2>

        <div className="mt-8 flex flex-col gap-12">
          {locations.map((location, i) => (
            <div
              key={`${location.titleAccent}-${i}`}
              className="grid grid-cols-1 gap-8 lg:grid-cols-[390px_1fr_1.6fr] lg:items-stretch lg:gap-10"
            >
              <div className="relative min-h-64 overflow-hidden lg:min-h-85">
                <Image
                  src={location.image}
                  alt={location.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 390px, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col justify-center gap-3">
                <h3
                  className={`${superGrotesk.className} text-lg font-normal uppercase text-black sm:text-2xl`}
                >
                  {location.titlePrefix}
                  <span style={{ color: accentColor }}>{location.titleAccent}</span>
                </h3>

                <div className={`${prompt.className} space-y-1 text-sm text-neutral-800`}>
                  {location.addressLines.map((line, j) => (
                    <p key={j}>{line}</p>
                  ))}
                </div>

                <div className="flex items-start gap-2">
                  <Image src="/images/contact/phone.svg" alt="Phone icon" width={16} height={16} className="mt-0.5 shrink-0" />
                  <p className={`${prompt.className} text-sm text-neutral-800`}>
                    {location.phones.join(" / ")}
                  </p>
                </div>

                {location.email && (
                  <div className="flex items-start gap-2">
                    <Image src="/images/contact/email.svg" alt="Email icon" width={16} height={16} className="mt-0.5 shrink-0" />
                    <p className={`${prompt.className} text-sm text-neutral-800`}>{location.email}</p>
                  </div>
                )}

                {location.hoursLines && (
                  <div className="flex items-start gap-2">
                    <Image src="/images/contact/clock.svg" alt="Clock icon" width={16} height={16} className="mt-0.5 shrink-0" />
                    <div className={`${prompt.className} space-y-0.5 text-sm text-neutral-800`}>
                      {location.hoursLines.map((line, j) => (
                        <p key={j}>{line}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="relative min-h-[240px] overflow-hidden border border-neutral-200 lg:min-h-0">
                <iframe
                  src={location.mapEmbedSrc}
                  title={`Map showing ${location.titlePrefix}${location.titleAccent}`}
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
