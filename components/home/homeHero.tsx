"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Anton } from "next/font/google";

const headlineFont = Anton({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/our-story" },
  { label: "Our Products", href: "/our-products" },
  { label: "Network", href: "/network" },
  { label: "Services", href: "/services" },
  { label: "Recipes", href: "/recipes" },
  { label: "Careers", href: "/careers" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

// Developers: add hero slides here. Each slide can be an image OR a video —
// just set `type` accordingly. Videos autoplay muted/looped like a GIF.
type Slide =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; poster?: string; alt: string };

const slides: Slide[] = [
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
  // {
  //   type: "video",
  //   src: "/videos/hero/slide-3.mp4",
  //   poster: "/images/hero/slide-3-poster.jpg",
  //   alt: "Behind the scenes at the Edinborough factory",
  // },
  {
    type: "image",
    src: "/images/home/heroimg3.png",
    alt: "A finished dish made with Edinborough products",
  },
];

const AUTOPLAY_MS = 6000;

function Logo() {
  return (
    <Link href="/" className="relative block h-16 w-40" aria-label="Edinborough home">
      {/* Drop your real logo file in /public and point this at it. */}
      <Image
        src="/images/home/logo1.png"
        alt="Edinborough"
        fill
        priority
        sizes="160px"
        className="object-contain object-left"
      />
    </Link>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth={2} />
      <path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      {open ? (
        <path
          d="M6 6l12 12M18 6L6 18"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M3 6h18M3 12h18M3 18h18"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 sm:h-5 sm:w-5">
      <path
        d={direction === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"}
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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
    <section className="relative h-[600px] w-full overflow-hidden bg-black sm:h-[720px] lg:h-[820px]">
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

      {/* Nav bar */}
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="flex items-center justify-between px-6 py-4 sm:px-10 lg:px-12">
          <Logo />

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-bold uppercase tracking-wide transition-colors ${
                  link.label === "Home"
                    ? "text-[#E2201B]"
                    : "text-white hover:text-white/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-6 text-white">
            <button type="button" aria-label="Search" className="hover:text-white/70">
              <SearchIcon />
            </button>
            <button
              type="button"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="hover:text-white/70"
            >
              <MenuIcon open={mobileMenuOpen} />
            </button>
          </div>
        </div>

        {/* Mobile nav panel */}
        {mobileMenuOpen && (
          <nav className="flex flex-col gap-1 bg-black/90 px-6 py-4 lg:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 text-sm font-bold uppercase tracking-wide ${
                  link.label === "Home" ? "text-[#E2201B]" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      {/* Hero copy */}
      <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-20 sm:px-12 sm:pb-24 lg:px-24 lg:pb-28">
        <h1
          className={`${headlineFont.className} max-w-4xl text-[40px] uppercase leading-[0.95] text-white sm:text-6xl lg:text-[72px] xl:text-[80px]`}
        >
          The Taste Behind
          <br />
          Sri Lanka&apos;s Favourite Meals
        </h1>

        <p className="mt-6 max-w-3xl text-sm text-white/90 sm:text-base lg:text-lg">
          For 52 years, Edinborough has helped families, chefs, restaurants,
          and food businesses create memorable dining experiences through
          authentic sauces, condiments, and food products.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/our-products"
            className="bg-[#0845BA] px-10 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#093a99]"
          >
            Explore Products
          </Link>
          <Link
            href="/our-story"
            className="bg-white px-10 py-4 text-sm font-bold uppercase tracking-widest text-neutral-900 transition-colors hover:bg-neutral-200"
          >
            Our Story
          </Link>
        </div>
      </div>

      {/* Carousel arrows */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={goPrev}
        className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 text-white transition-colors hover:border-white sm:left-8 sm:h-12 sm:w-12"
      >
        <ArrowIcon direction="left" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={goNext}
        className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 text-white transition-colors hover:border-white sm:right-8 sm:h-12 sm:w-12"
      >
        <ArrowIcon direction="right" />
      </button>

      {/* Dot indicators */}
      <div className="absolute inset-x-0 bottom-6 z-10 flex items-center justify-center gap-2">
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