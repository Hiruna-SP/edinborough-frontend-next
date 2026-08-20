import Image from "next/image";
import { superGrotesk, prompt } from "@/lib/fonts";

export interface RecipeCategoryItem {
  imageSrc: string;
  imageAlt: string;
  title: string;
  recipeCount: number;
}

interface RecipeCategoriesProps {
  eyebrow: string;
  title: string;
  items: RecipeCategoryItem[];
  eyebrowColor?: string;
  titleColor?: string;
  itemTitleColor?: string;
  itemCountColor?: string;
}

/**
 * RecipeCategories - "Browse Recipes By Categories" section on the recipes
 * page: a small eyebrow + heading on the left, paired with a row of circular
 * category photos, each labelled with a title and recipe count.
 *
 * Usage:
 * <RecipeCategories
 *   eyebrow="BROWSE RECIPES BY"
 *   title="CATEGORIES"
 *   items={[
 *     {
 *       imageSrc: "/images/recipes/main-dishes.png",
 *       imageAlt: "Main dishes category",
 *       title: "Main Dishes",
 *       recipeCount: 125,
 *     },
 *   ]}
 * />
 */
export default function RecipeCategories({
  eyebrow,
  title,
  items,
  eyebrowColor = "#111111",
  titleColor = "#111111",
  itemTitleColor = "#111111",
  itemCountColor = "#4B4B4B",
}: RecipeCategoriesProps) {
  return (
    <section className="px-6 pt-10 sm:px-10 lg:px-16 lg:pt-14 xl:px-10">
      <div className="mx-auto max-w-[1920px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
          <div className="lg:max-w-xs lg:shrink-0">
            <p
              className={`${superGrotesk.className} text-xs  uppercase leading-tight sm:text-lg`}
              style={{ color: eyebrowColor }}
            >
              {eyebrow}
            </p>
            <h2
              className={`${superGrotesk.className} text-2xl font-normal uppercase leading-tight sm:text-4xl`}
              style={{ color: titleColor }}
            >
              {title}
            </h2>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-6 lg:gap-x-8">
            {items.map((item, i) => (
              <div
                key={`${item.title}-${i}`}
                className="flex flex-col items-center text-center"
              >
                <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full sm:h-36 sm:w-36 lg:h-40 lg:w-40">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                </div>
                <h3
                  className={`${superGrotesk.className} mt-3 text-sm font-normal uppercase leading-snug sm:text-lg`}
                  style={{ color: itemTitleColor }}
                >
                  {item.title}
                </h3>
                <p
                  className={`${prompt.className} mt-1 text-xs font-normal leading-relaxed sm:text-sm`}
                  style={{ color: itemCountColor }}
                >
                  {item.recipeCount} Recipes
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
