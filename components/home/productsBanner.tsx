import Image from "next/image";
import { superGrotesk, prompt } from "@/lib/fonts";
import Button from "@/components/common/button";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-[#F7F2ED]">
      <div className="relative mx-auto flex max-w-[1920px] flex-col lg:h-[500px] lg:flex-row">
        {/* Text content */}
        <div className="relative z-10 flex flex-col justify-center px-6 py-10 sm:px-10 lg:w-[43%] lg:px-16 lg:py-0 xl:px-10">
          <p
            className={`${superGrotesk.className} text-base font-normal tracking-wide text-[#0B47BD] sm:text-lg lg:text-xl xl:text-[30px]`}
          >
            CREAMY. CONSISTENT. TRUSTED.
          </p>

          <h1
            className={`${superGrotesk.className} mt-3 text-[34px] font-normal leading-[0.95] text-[#3B3B3B] sm:text-[44px] md:text-[52px] xl:text-[64px]`}
          >
            SRI LANKA&apos;S LEADING MAYONNAISE BRAND
          </h1>

          <p
            className={`${prompt.className} mt-5 max-w-4xl text-sm font-normal leading-relaxed text-neutral-600 lg:text-sm`}
          >
            For decades, Edinborough has been the trusted choice for
            households, restaurants, and food service professionals across
            Sri Lanka.
          </p>

          <div className="mt-7">
            <Button text="Explore Products" color="blue" href="/products" />
          </div>
        </div>

        {/* Product photography */}
        <div className="relative h-[280px] sm:h-[360px] lg:h-full lg:w-[58%]">
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