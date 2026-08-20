import HeroBanner from "@/components/common/heroBanner";
import RecipeCategories from "@/components/recipes/recipeCategories";
import FeaturedRecipes from "@/components/recipes/featuredRecipes";

export default function RecipesPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroBanner
        title="EDINBOROUGH RECIPES"
        text="Discover delicious recipes created with Edinborough's trusted range of products. From everyday family favourites to special occasions, bring quality and goodness to every table."
        backgroundImage="/images/recipes/hero.png"
      />

      <RecipeCategories
        eyebrow="BROWSE RECIPES BY"
        title="CATEGORIES"
        items={[
          {
            imageSrc: "/images/recipes/1.png",
            imageAlt: "Main dishes category",
            title: "Main Dishes",
            recipeCount: 125,
          },
          {
            imageSrc: "/images/recipes/2.png",
            imageAlt: "Rice and noodles category",
            title: "Rice & Noodles",
            recipeCount: 96,
          },
          {
            imageSrc: "/images/recipes/3.png",
            imageAlt: "Soups category",
            title: "Soups",
            recipeCount: 42,
          },
          {
            imageSrc: "/images/recipes/4.png",
            imageAlt: "Appetizers category",
            title: "Appetizers",
            recipeCount: 78,
          },
          {
            imageSrc: "/images/recipes/5.png",
            imageAlt: "Desserts category",
            title: "Desserts",
            recipeCount: 78,
          },
          {
            imageSrc: "/images/recipes/6.png",
            imageAlt: "Drinks category",
            title: "Drinks",
            recipeCount: 35,
          },
        ]}
      />

      <FeaturedRecipes
        title="FEATURED RECIPES"
        viewAllText="VIEW ALL"
        viewAllHref="/recipes/all"
        recipes={[
          {
            imageSrc: "/images/recipes/7.png",
            imageAlt: "Kottu with Edinborough soya sauce",
            time: "30 Min",
            title: "Kottu With Edinborough Soya Sauce",
            description:
              "A Sri Lankan street food classic made even better with our rich soya sauce.",
            detailsHref: "/recipes/kottu",
          },
          {
            imageSrc: "/images/recipes/8.png",
            imageAlt: "Creamy pasta with chilli and garlic sauce",
            time: "25 Min",
            title: "Creamy Pasta With Chilli And Garlic Sauce",
            description:
              "A creamy, spicy and flavorful pasta that's perfect for any occasion.",
            detailsHref: "/recipes/creamy-pasta",
          },
          {
            imageSrc: "/images/recipes/9.png",
            imageAlt: "Prawn curry with Edinborough chili paste",
            time: "40 Min",
            title: "Prawn Curry With Edinborough Chili Paste",
            description:
              "A spicy and aromatic prawn curry made with authentic Sri Lankan flavours.",
            detailsHref: "/recipes/prawn-curry",
          },
          {
            imageSrc: "/images/recipes/10.png",
            imageAlt: "Chocolate cake with chocolate syrup",
            time: "50 Min",
            title: "Chocolate Cake With Chocolate Syrup",
            description:
              "Rich, moist and indulgent chocolate cake topped with our delicious chocolate syrup.",
            detailsHref: "/recipes/chocolate-cake",
          },
        ]}
      />
    </main>
  );
}
