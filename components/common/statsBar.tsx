import { superGrotesk } from "@/lib/fonts";

const stats = [
  { value: "50+", label: "Years Experience" },
  { value: "150+", label: "Products Portfolio" },
  { value: "40+", label: "Export Countries" },
  { value: "700+", label: "Dedicated Employees" },
];

interface StatsBarProps {
  bgColor?: string;
  textColor?: string;
  dividerColor?: string;
}

/**
 * StatsBar - Reusable stats section
 *
 * Usage:
 * <StatsBar bgColor="#00397B" textColor="#FFFFFF" />
 * <StatsBar bgColor="#F2F2F2" textColor="#000000" dividerColor="#FF0000" />
 *
 * Props:
 * @param {string} [bgColor]       - Section background color (default: "#00397B")
 * @param {string} [textColor]     - Color for the numbers and labels (default: "#FFFFFF")
 * @param {string} [dividerColor]  - Color of the vertical dividers between stats (default: "#FF0000")
 */
export default function StatsBar({
  bgColor = "#00397B",
  textColor = "#FFFFFF",
  dividerColor = "#FF0000",
}: StatsBarProps) {
  return (
    <section
      className="px-6 py-10 sm:px-10 sm:py-12 mb-14"
      style={{ backgroundColor: bgColor }}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        {stats.map((stat, index) => (
          <div key={stat.label} className="flex items-center sm:flex-1">
            {index > 0 && (
              <span
                className="mr-4 hidden h-16 w-[2px] sm:mr-6 sm:block sm:h-20 lg:h-24"
                style={{ backgroundColor: dividerColor }}
              />
            )}
            <div className="flex flex-1 flex-col items-center text-center">
              <span
                className={`${superGrotesk.className} text-5xl leading-none sm:text-6xl lg:text-7xl`}
                style={{ color: textColor }}
              >
                {stat.value}
              </span>
              <span
                className={`${superGrotesk.className} mt-3 text-lg font-normal uppercase tracking-wide sm:text-2xl`}
                style={{ color: textColor }}
              >
                {stat.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}