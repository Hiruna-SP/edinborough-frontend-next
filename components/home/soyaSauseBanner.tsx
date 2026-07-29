import Image from "next/image";
import { Anton } from "next/font/google";

const headlineFont = Anton({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function SoyaSauceHero() {
  return (
    <section className="relative h-[320px] w-full overflow-hidden sm:h-[400px] lg:h-[476px]">
      {/*
        Background photo. Point this at the image you already have —
        drop it in /public/images and update the src below.
      */}
      <Image
        src="/images/home/soyaSauseBanner.png"
        alt="Edinborough Soya Sauce bottle on a wooden table with stir-fry and steamed dumplings"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Left-side scrim so the text stays legible regardless of the photo underneath */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent sm:from-black/75 sm:via-black/20" />

      {/* Text block */}
      <div className="absolute inset-y-0 left-0 z-10 flex w-full max-w-xl flex-col justify-center gap-4 px-6 sm:px-10 lg:px-14">
        <h1 className={`${headlineFont.className} leading-[1.05]`}>
          <span className="block text-4xl text-white sm:text-5xl lg:text-[46px]">
            Authentically Brewed.
          </span>
          <span className="block text-4xl text-[#CE9C3F] sm:text-5xl lg:text-[46px]">
            Naturally Distinct.
          </span>
        </h1>

        <div>
          <p className="text-base font-bold uppercase tracking-wider text-white sm:text-lg">
            Edinborough Soya Sauce
          </p>
          <span className="mt-2 block h-[2px] w-16 bg-[#CE9C3F]" />
        </div>

        <p className="max-w-md text-sm leading-relaxed text-neutral-300 sm:text-base">
          Traditionally brewed through natural fermentation for rich, authentic
          taste in every drop.
        </p>
      </div>
    </section>
  );
}
