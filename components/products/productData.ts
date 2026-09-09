export interface ProductSizeOption {
  /** Label shown on the "Net Weight" selector button, e.g. "405g". */
  label: string;
  /** Slug of the product variant this size links to. */
  slug: string;
}

export interface ProductThumbnail {
  imageSrc: string;
  imageAlt: string;
  /** Size label shown under the thumbnail, e.g. "405g". */
  size: string;
  /** Product name shown under the size, e.g. "Tomato Sauce". */
  name: string;
  /** Slug of the variant this thumbnail links to (omit for the current one). */
  slug?: string;
}

export interface ProductNutrientRow {
  label: string;
  perServing: string;
  per100g: string;
  /** Render as an indented sub-row (e.g. "- Saturated Fat"). */
  indented?: boolean;
}

export interface ProductNutrition {
  servingSize: string;
  rows: ProductNutrientRow[];
  footnote?: string;
}

export interface ProductDetail {
  slug: string;
  /** Full product name including the pack size, e.g. "Tomato Sauce 405g". */
  name: string;
  /** Category tag shown as a red pill and in the breadcrumb, e.g. "Red Sauces". */
  category: string;
  /** Category slug used to build the breadcrumb link. */
  categorySlug: string;
  shortDescription: string;
  images: string[];
  imageAlt: string;
  /** "Net Weight" selector options; the current variant is matched by slug. */
  sizeOptions: ProductSizeOption[];
  price: string;
  ingredients: string;
  storing: string;
  buyHref: string;
  allergenInfo: string;
  flavor: string;
  countryOfOrigin: string;
  /** "Available Sizes" gallery. */
  availableSizes: ProductThumbnail[];
  nutrition: ProductNutrition;
}

const TOMATO_SAUCE_SIZE_OPTIONS: ProductSizeOption[] = [
  { label: "100g", slug: "tomato-sauce-100g" },
  { label: "200g", slug: "tomato-sauce-200g" },
  { label: "375g", slug: "tomato-sauce-375g" },
  { label: "405g", slug: "tomato-sauce-405g" },
  { label: "1kg", slug: "tomato-sauce-1kg" },
];

const TOMATO_SAUCE_AVAILABLE_SIZES: ProductThumbnail[] = [
  {
    imageSrc: "/images/products/14.png",
    imageAlt: "Edinborough Tomato Sauce 100g pouch",
    size: "100g",
    name: "Tomato Sauce",
    slug: "tomato-sauce-100g",
  },
  {
    imageSrc: "/images/products/14.png",
    imageAlt: "Edinborough Tomato Sauce 200g bottle",
    size: "200g",
    name: "Tomato Sauce",
    slug: "tomato-sauce-200g",
  },
  {
    imageSrc: "/images/products/13.png",
    imageAlt: "Edinborough Tomato Sauce 375g pouch",
    size: "375g",
    name: "Tomato Sauce",
    slug: "tomato-sauce-375g",
  },
  {
    imageSrc: "/images/products/14.png",
    imageAlt: "Edinborough Tomato Sauce 405g bottle",
    size: "405g",
    name: "Tomato Sauce",
    slug: "tomato-sauce-405g",
  },
  {
    imageSrc: "/images/products/13.png",
    imageAlt: "Edinborough Tomato Sauce 1kg bottle",
    size: "1 kg",
    name: "Tomato Sauce",
    slug: "tomato-sauce-1kg",
  },
];

const TOMATO_SAUCE_NUTRITION: ProductNutrition = {
  servingSize: "1 Tbsp (15g)",
  rows: [
    { label: "Energy", perServing: "20 kcal", per100g: "135 kcal" },
    { label: "Protein", perServing: "0.2 g", per100g: "1.2 g" },
    { label: "Total Fat", perServing: "0 g", per100g: "0.3 g" },
    { label: "Saturated Fat", perServing: "0 g", per100g: "0 g", indented: true },
    { label: "Carbohydrates", perServing: "4.6 g", per100g: "30.5 g" },
    { label: "Sugars", perServing: "3.8 g", per100g: "25.3 g", indented: true },
    { label: "Sodium", perServing: "85 mg", per100g: "570 mg" },
  ],
  footnote:
    "*Percentage Daily Intakes are based on an average adult diet of 8700kJ.",
};

const TOMATO_SAUCE_INGREDIENTS =
  "Water, sugar, concentrated Tomato Paste (16%), Iodized Table Salt, modified Maize/Tapioca Starch (Ins 1442), acetic Acid (Ins 260), chilli Powder, garlic, ginger, xanthan Stabilizer (Ins 415), potassium Sorbate (Ins 202), cinnamon, cardamom, clove.";

const TOMATO_SAUCE_STORING =
  "Store in a cool, dry & hygienic place. Keep away from direct sunlight. Refrigerate after opening.";

const TOMATO_SAUCE_ALLERGEN =
  "Manufactured in a facility that also processes products containing soy, wheat, mustard and nuts.";

const TOMATO_SAUCE_DESCRIPTION =
  "Made with sun-ripened tomatoes and premium ingredients, our red sauces deliver rich taste and perfect texture in every drop.";

function tomatoSauceVariant(
  size: string,
  slug: string,
  price: string,
  images: string[],
): ProductDetail {
  return {
    slug,
    name: `Tomato Sauce ${size}`,
    category: "Red Sauces",
    categorySlug: "red-sauces",
    shortDescription: TOMATO_SAUCE_DESCRIPTION,
    images,
    imageAlt: `Edinborough Tomato Sauce ${size}`,
    sizeOptions: TOMATO_SAUCE_SIZE_OPTIONS,
    price,
    ingredients: TOMATO_SAUCE_INGREDIENTS,
    storing: TOMATO_SAUCE_STORING,
    buyHref: "https://store.edinborough.lk",
    allergenInfo: TOMATO_SAUCE_ALLERGEN,
    flavor: "Tomato",
    countryOfOrigin: "Sri Lanka",
    availableSizes: TOMATO_SAUCE_AVAILABLE_SIZES,
    nutrition: TOMATO_SAUCE_NUTRITION,
  };
}

export const productDetails: ProductDetail[] = [
  tomatoSauceVariant("100g", "tomato-sauce-100g", "LKR 150.00", [
    "/images/products/14.png",
    "/images/products/13.png",
    "/images/products/15.png",
    "/images/products/16.png",
  ]),
  tomatoSauceVariant("200g", "tomato-sauce-200g", "LKR 240.00", [
    "/images/products/14.png",
    "/images/products/13.png",
    "/images/products/15.png",
    "/images/products/16.png",
  ]),
  tomatoSauceVariant("375g", "tomato-sauce-375g", "LKR 390.00", [
    "/images/products/13.png",
    "/images/products/14.png",
    "/images/products/15.png",
    "/images/products/16.png",
  ]),
  tomatoSauceVariant("405g", "tomato-sauce-405g", "LKR 420.00", [
    "/images/products/14.png",
    "/images/products/13.png",
    "/images/products/15.png",
    "/images/products/16.png",
  ]),
  tomatoSauceVariant("1kg", "tomato-sauce-1kg", "LKR 990.00", [
    "/images/products/13.png",
    "/images/products/14.png",
    "/images/products/15.png",
    "/images/products/16.png",
  ]),
];

export function getProductBySlug(slug: string): ProductDetail | undefined {
  return productDetails.find((product) => product.slug === slug);
}
