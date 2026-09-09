export interface RecipeIngredient {
  name: string;
  amount: string;
}

export interface RecipeHighlight {
  title: string;
  description: string;
}

export interface RecipeNutrient {
  label: string;
  value: string;
}

export interface RecipeStep {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export interface RecipeProduct {
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}

export interface RecipeDetail {
  slug: string;
  title: string;
  category: string;
  time: string;
  shortDescription: string;
  heroImages: string[];
  heroImageAlt: string;
  videoUrl?: string;
  product: RecipeProduct;
  storeHref: string;
  ingredients: RecipeIngredient[];
  shopIngredientsHref: string;
  about: string;
  highlights: RecipeHighlight[];
  nutrition: {
    calories: string;
    items: RecipeNutrient[];
  };
  steps: RecipeStep[];
}

export const recipeDetails: RecipeDetail[] = [
  {
    slug: "creamy-pasta",
    title: "Creamy Pasta",
    category: "Pasta",
    time: "25 Min",
    shortDescription:
      "A rich and creamy white sauce pasta made with quality ingredients and a touch of Edinborough goodness.",
    heroImages: [
      "/images/recipes/8.png",
      "/images/recipes/9.png",
      "/images/recipes/10.png",
      "/images/recipes/11.png",
    ],
    heroImageAlt: "Creamy white sauce pasta twirled on a fork",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    product: {
      name: "Edinborough Pasta Sauce",
      description:
        "A rich and creamy white sauce pasta made with quality ingredients and a touch of Edinborough goodness.",
      imageSrc: "/images/recipes/12.png",
      imageAlt: "Can of Edinborough Pasta Sauce",
      href: "/our-products",
    },
    storeHref: "https://store.edinborough.lk",
    ingredients: [
      { name: "Penne Pasta", amount: "200g" },
      { name: "Edinborough Pasta Sauce", amount: "1 cup" },
      { name: "Milk", amount: "1 cup" },
      { name: "Butter", amount: "2 tbsp" },
      { name: "Garlic (minced)", amount: "1 tbsp" },
      { name: "Onion (chopped)", amount: "2 tbsp" },
      { name: "Mushroom (sliced)", amount: "1/2 cup" },
      { name: "Salt", amount: "to taste" },
      { name: "Black Pepper", amount: "to taste" },
      { name: "Mixed Herbs", amount: "1/2 tsp" },
      { name: "Parmesan Cheese (grated)", amount: "1/2 cup" },
      { name: "Fresh Parsley", amount: "for garnish" },
    ],
    shopIngredientsHref: "/our-products",
    about:
      "This creamy white pasta is the perfect comfort food, made with Edinborough Pasta Sauce. Rich, smooth, and irresistibly creamy, it's the perfect choice for lunch or dinner.",
    highlights: [
      {
        title: "Rich & Creamy",
        description: "Perfectly balanced pasta sauce",
      },
      {
        title: "Quick & Easy",
        description: "Ready in just 25 minutes",
      },
      {
        title: "Family Favourite",
        description: "Loved by both kids and adults",
      },
    ],
    nutrition: {
      calories: "420 kcal",
      items: [
        { label: "Carbohydrates", value: "45 g" },
        { label: "Protein", value: "12 g" },
        { label: "Fat", value: "20 g" },
        { label: "Fiber", value: "2 g" },
      ],
    },
    steps: [
      {
        title: "Cook the Pasta",
        description:
          "Boil water with a pinch of salt and cook pasta according to package instructions. Drain and set aside.",
        imageSrc: "/images/recipes/7.png",
        imageAlt: "Penne pasta cooking in a pan of water",
      },
      {
        title: "Prepare the Sauce",
        description:
          "In a pan, melt butter over medium heat. Add minced garlic and chopped onion. Sauté until fragrant and translucent.",
        imageSrc: "/images/recipes/8.png",
        imageAlt: "Butter, garlic and onion sautéing in a pan",
      },
      {
        title: "Add Vegetables",
        description:
          "Add sliced mushrooms and cook for 2-3 minutes until soft.",
        imageSrc: "/images/recipes/9.png",
        imageAlt: "Sliced mushrooms cooking in a pan",
      },
      {
        title: "Add the Sauce",
        description:
          "Pour in Edinborough Pasta Sauce and milk. Stir well and bring to a gentle simmer.",
        imageSrc: "/images/recipes/10.png",
        imageAlt: "Creamy white sauce simmering in a pan",
      },
      {
        title: "Combine",
        description:
          "Add the cooked pasta to the sauce. Mix well until pasta is coated evenly.",
        imageSrc: "/images/recipes/11.png",
        imageAlt: "Pasta being tossed through the creamy sauce",
      },
      {
        title: "Finish & Serve",
        description:
          "Season with salt, black pepper and mixed herbs. Top with grated parmesan cheese and fresh parsley. Serve hot and enjoy your meal!",
        imageSrc: "/images/recipes/12.png",
        imageAlt: "Plated creamy pasta garnished with parsley",
      },
    ],
  },
];

export function getRecipeBySlug(slug: string): RecipeDetail | undefined {
  return recipeDetails.find((recipe) => recipe.slug === slug);
}
