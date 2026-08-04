import Image from "next/image";
import { superGrotesk, prompt } from "@/lib/fonts";

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
      <div className="absolute inset-y-0 left-0 top-22 z-10 flex w-full max-w-4xl flex-col justify-center gap-2 px-6">
        <h1 className={`${superGrotesk.className} font-normal leading-[1]`}>
          <span className="block text-3xl text-white sm:text-4xl lg:text-[85px]">
            Authentically Brewed.
          </span>
          <span className="block text-3xl text-[#CE9C3F] sm:text-4xl lg:text-[85px]">
            Naturally Distinct.
          </span>
        </h1>

        <div>
          <span className="mb-2 block h-px w-82 bg-[#CE9C3F]" />
          <p
            className={`${superGrotesk.className} text-sm font-normal uppercase tracking-wider text-white sm:text-[30px]`}
          >
            Edinborough Soya Sauce
          </p>
          <span className="mt-2 block h-px w-82 bg-[#CE9C3F]" />
        </div>

        <p
          className={`${prompt.className} text-white max-w-4xl text-xs font-normal leading-relaxed text-neutral-300 sm:text-[15px]`}
        >
          Traditionally brewed through natural fermentation for rich, authentic
          taste in every drop.
        </p>
      </div>
    </section>
  );
}
