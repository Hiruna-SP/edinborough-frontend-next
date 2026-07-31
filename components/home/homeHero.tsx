"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Search, Menu, X } from "lucide-react";
import { superGrotesk, prompt } from "@/lib/fonts";
import Button from "@/components/common/button";


// Developers: add hero slides here. Each slide can be an image OR a video —
// just set `type` accordingly. Videos autoplay muted/looped like a GIF.
type Slide =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; poster?: string; alt: string };

const slides: Slide[] = [{
    type: "video",
    src: "/videos/v1.mp4",
    poster: "/images/hero/slide-3-poster.jpg",
    alt: "Behind the scenes at the Edinborough factory",
  },
  {
    type: "image",
    src: "/images/home/heroimg1.png",
    alt: "Chef reaching for a bottle of Edinborough sauce in a commercial kitchen",
  },
  {
    type: "image",
    src: "/images/home/heroimg2.png",
    alt: "Edinborough products lined up on a kitchen counter",
  },
  
  {
    type: "image",
    src: "/images/home/heroimg3.png",
    alt: "A finished dish made with Edinborough products",
  },
];

const AUTOPLAY_MS = 5000;


export default function HomeHero() {
  const [current, setCurrent] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (index: number) => {
    const total = slides.length;
    setCurrent(((index % total) + total) % total);
  };
  const goPrev = () => goTo(current - 1);
  const goNext = () => goTo(current + 1);

  useEffect(() => {
    timerRef.current = setInterval(goNext, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  return (
    <section id="home-hero" className="relative h-[85vh] min-h-[480px] w-full overflow-hidden bg-black sm:min-h-[560px] lg:min-h-[600px]">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          aria-hidden={index !== current}
        >
          {slide.type === "image" ? (
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          ) : (
            <video
              className="h-full w-full object-cover"
              src={slide.src}
              poster={slide.poster}
              autoPlay
              muted
              loop
              playsInline
              aria-label={slide.alt}
            />
          )}
        </div>
      ))}

      {/* Dark scrim for legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/60" />

      {/* Hero copy */}
      <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-14 sm:px-12 sm:pb-16 lg:px-24 lg:pb-20">
        <h1
          className={`${superGrotesk.className} max-w-4xl text-[32px] uppercase leading-[1] text-white sm:text-5xl lg:text-6xl xl:text-[82px]`}
        >
          The Taste Behind
          <br />
          Sri Lanka&apos;s Favourite Meals
        </h1>

        <p className={`${prompt.className} mt-5 max-w-7xl text-[8px] text-white/90 sm:text-sm`}>
          For 52 years, Edinborough has helped families, chefs, restaurants,
          and food businesses create memorable dining experiences through
          authentic sauces, condiments, and food products.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <Button text="Explore Products" color="blue" href="/our-products" />
          <Button text="Our Story" color="white" href="/our-story" />
        </div>
      </div>

      {/* Carousel arrows */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={goPrev}
        className="absolute left-4 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 text-white transition-colors hover:border-white sm:left-8 sm:h-10 sm:w-10"
      >
        <ArrowLeft className="h-4 w-4" strokeWidth={2} />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={goNext}
        className="absolute right-4 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 text-white transition-colors hover:border-white sm:right-8 sm:h-10 sm:w-10"
      >
        <ArrowRight className="h-4 w-4" strokeWidth={2} />
      </button>

      {/* Dot indicators */}
      <div className="absolute inset-x-0 bottom-6 z-10 flex items-center justify-center gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => goTo(index)}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === current ? "bg-white" : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}