import { superGrotesk } from "@/lib/fonts";
import { Anton } from "next/font/google";

const headlineFont = Anton({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const stats = [
  { value: "50+", label: "Years Experience" },
  { value: "150+", label: "Products Portfolio" },
  { value: "40+", label: "Export Countries" },
  { value: "700+", label: "Dedicated Employees" },
];

export default function StatsBar() {
  return (
    <section className="bg-[#00397B] px-6 py-10 sm:px-10 sm:py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        {stats.map((stat, index) => (
          <div key={stat.label} className="flex items-center sm:flex-1">
            {index > 0 && (
              <span className="mr-4 hidden h-16 w-[2px] bg-[#FF0000] sm:mr-6 sm:block sm:h-20 lg:h-24" />
            )}
            <div className="flex flex-1 flex-col items-center text-center">
              <span
                className={`${superGrotesk.className} text-5xl leading-none text-white sm:text-6xl lg:text-7xl`}
              >
                {stat.value}
              </span>
              <span className={`${superGrotesk.className} mt-3 text-lg font-normal uppercase tracking-wide text-white sm:text-2xl`}>
                {stat.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
