import Image from "next/image";
import { Anton } from "next/font/google";

// Same heavy condensed display font used for the hero headline, for
// brand consistency across sections.
const headlineFont = Anton({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

type Cell = {
  src: string;
  alt: string;
};

type Card = {
  label: string;
  cells: Cell[]; // 1 cell = single full-bleed photo, 4 cells = 2x2 collage
};

const cards: Card[] = [
  {
    label: "The Spices",
    cells: [
      { src: "/images/explore/dark_sauces.png", alt: "Whole spices in a mortar" },
      
    ],
  },
  {
    label: "Tradition",
    cells: [
      { src: "/images/explore/red_sauces.png", alt: "Oil being poured over a spiced dish" },
    ],
  },
  {
    label: "Innovation",
    cells: [
      { src: "/images/explore/dark_sauces.png", alt: "Whole spices in a mortar" },
    ],
  },
  {
    label: "Taste",
    cells: [
      { src: "/images/explore/red_sauces.png", alt: "Oil being poured over a spiced dish" },
    ],
  },
];

function GalleryCard({ label, cells }: Card) {
  const isCollage = cells.length > 1;

  return (
    <div className="group relative aspect-[3/4] overflow-hidden bg-neutral-900 sm:aspect-[4/5] lg:aspect-[463/610]">
      <div
        className={
          isCollage
            ? "grid h-full w-full grid-cols-2 grid-rows-2"
            : "h-full w-full"
        }
      >
        {cells.map((cell) => (
          <div key={cell.src} className="relative h-full w-full">
            {/*
              Replace each src with the real photography — these are
              placeholder paths since I can't reproduce the actual photos.
            */}
            <Image
              src={cell.src}
              alt={cell.alt}
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover grayscale transition-all duration-500 ease-out group-hover:scale-105 group-hover:grayscale-0"
            />
          </div>
        ))}
      </div>

      {/* Bottom gradient so the label stays legible over any photo */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />

      <span className="absolute bottom-4 left-4 text-lg font-bold uppercase tracking-wide text-white sm:bottom-5 sm:left-5 sm:text-xl">
        {label}
      </span>
    </div>
  );
}

export default function CraftGallery() {
  return (
    <section className="bg-white px-6 py-10 sm:px-10 lg:px-16">
      <p className="text-sm text-neutral-600">The Taste of Tradition</p>
      <h2
        className={`${headlineFont.className} mt-1 text-3xl uppercase text-neutral-950 sm:text-4xl lg:text-[42px]`}
      >
        Engineering Excellence Since 1973
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-1.5 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <GalleryCard key={card.label} {...card} />
        ))}
      </div>
    </section>
  );
}