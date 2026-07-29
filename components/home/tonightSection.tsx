import Image from "next/image";
import Link from "next/link";
import { Anton } from "next/font/google";

// Same heavy condensed display font used for headlines elsewhere on the
// site, for brand consistency.
const headlineFont = Anton({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

type Recipe = {
  label: string;
  src: string;
  alt: string;
};

const recipes: Recipe[] = [
  {
    label: "White Pasta",
    src: "/images/explore/dark_sauces.png",
    alt: "Penne pasta topped with parmesan, next to a bottle of Edinborough Tomato Sauce",
  },
  {
    label: "Kottu",
    src: "/images/explore/red_sauces.png",
    alt: "Vegetables tossed above a hot griddle for kottu",
  },
  {
    label: "Shawarma",
    src: "/images/explore/red_sauces.png",
    alt: "Sliced shawarma wraps on a wooden board, next to a bottle of Edinborough Tomato Sauce",
  },
];

function ArrowButton({ direction }: { direction: "left" | "right" }) {
  return (
    <button
      type="button"
      aria-label={direction === "left" ? "Previous recipe" : "Next recipe"}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 text-neutral-800 transition-colors hover:border-neutral-800"
    >
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        {direction === "left" ? (
          <path
            d="M15 6l-6 6 6 6"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M9 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </button>
  );
}

export default function TonightRecipes() {
  return (
    <section className="bg-white px-3 py-10 sm:px-4">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <h2
          className={`${headlineFont.className} text-xl uppercase text-neutral-900 sm:text-2xl lg:text-[26px]`}
        >
          What Will You Make Tonight?
        </h2>

        <div className="flex items-center gap-4">
          <Link
            href="/recipes"
            className="text-xs font-bold uppercase tracking-wider text-neutral-900 hover:text-neutral-600"
          >
            View All Recipes
          </Link>
          <div className="flex items-center gap-2">
            <ArrowButton direction="left" />
            <ArrowButton direction="right" />
          </div>
        </div>
      </div>

      {/* Recipe cards */}
      <div className="grid grid-cols-1 gap-0.5 sm:grid-cols-3">
        {recipes.map((recipe) => (
          <div
            key={recipe.label}
            className="group relative aspect-[4/5] overflow-hidden bg-neutral-900"
          >
            {/*
              Replace each src with your real recipe photography — these
              are placeholder paths.
            */}
            <Image
              src={recipe.src}
              alt={recipe.alt}
              fill
              sizes="(min-width: 640px) 33vw, 100vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />

            <span className="absolute bottom-5 left-5 text-lg font-bold uppercase tracking-wide text-white sm:text-xl">
              {recipe.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
