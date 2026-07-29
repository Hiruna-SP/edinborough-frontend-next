import Image from "next/image";
import { Anton } from "next/font/google";

// Heavy condensed display font used for the eyebrow, headline, and button —
// matches the bold condensed caps treatment in the reference design.
const displayFont = Anton({
  subsets: ["latin"],
  weight: "400",
});

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-[#F7F2ED]">
      <div className="relative mx-auto flex max-w-[1920px] flex-col lg:min-h-[640px] lg:flex-row">
        {/* Text content */}
        <div className="relative z-10 flex flex-col justify-center px-6 py-14 sm:px-10 lg:w-[42%] lg:px-16 lg:py-0 xl:px-20">
          <p
            className={`${displayFont.className} text-lg tracking-wide text-[#0B47BD] sm:text-xl lg:text-2xl xl:text-[28px]`}
          >
            CREAMY. CONSISTENT. TRUSTED.
          </p>

          <h1
            className={`${displayFont.className} mt-3 text-[40px] leading-[0.95] text-[#3B3B3B] sm:text-[52px] md:text-[64px] xl:text-[86px]`}
          >
            SRI LANKA&apos;S LEADING MAYONNAISE BRAND
          </h1>

          <p className="mt-6 max-w-[480px] text-base leading-relaxed text-neutral-600 lg:text-lg">
            For decades, Edinborough has been the trusted choice for
            households, restaurants, and food service professionals across
            Sri Lanka.
          </p>

          <div className="mt-8">
            <a
              href="/products"
              className={`${displayFont.className} inline-block bg-[#0B47BD] px-8 py-4 text-sm tracking-[0.15em] text-white transition-opacity hover:opacity-90`}
            >
              EXPLORE PRODUCTS
            </a>
          </div>
        </div>

        {/* Product photography */}
        <div className="relative h-[320px] sm:h-[420px] lg:h-auto lg:w-[58%]">
          <Image
            src="/images/productsbanner/hero-mayonnaise.jpg"
            alt="Edinborough Mayonnaise bottles and pouch with a burger and fresh eggs"
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