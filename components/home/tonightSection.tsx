import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { superGrotesk } from "@/lib/fonts";

type Recipe = {
  label: string;
  src: string;
  alt: string;
};

const recipes: Recipe[] = [
  {
    label: "White Pasta",
    src: "/images/home/pasta.png",
    alt: "Penne pasta topped with parmesan, next to a bottle of Edinborough Tomato Sauce",
  },
  {
    label: "Kottu",
    src: "/images/home/kottu.png",
    alt: "Vegetables tossed above a hot griddle for kottu",
  },
  {
    label: "Shawarma",
    src: "/images/home/shawarma.png",
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
      {direction === "left" ? (
        <ArrowLeft className="h-4 w-4" strokeWidth={2} />
      ) : (
        <ArrowRight className="h-4 w-4" strokeWidth={2} />
      )}
    </button>
  );
}

export default function TonightRecipes() {
  return (
    <section className="bg-white px-3 py-10 sm:px-4 lg:px-6">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h2
            className={`${superGrotesk.className} text-xl font-normal uppercase text-neutral-900 sm:text-2xl lg:text-[26px]`}
          >
            What Will You Make Tonight?
          </h2>

          <div className="flex items-center gap-4">
            <Link
              href="/recipes"
              className={`${superGrotesk.className} text-xs md:text-sm font-normal uppercase tracking-wider text-neutral-900 hover:text-neutral-600`}
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
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-3">
          {recipes.map((recipe) => (
            <div
              key={recipe.label}
              className="group relative aspect-5/6 overflow-hidden bg-neutral-900"
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

              <span
                className={`${superGrotesk.className} absolute bottom-5 left-5 text-lg font-normal uppercase tracking-wide text-white sm:text-xl`}
              >
                {recipe.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
