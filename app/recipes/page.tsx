import HeroBanner from "@/components/common/heroBanner";
import RecipeCategories from "@/components/recipes/recipeCategories";
import RecipeSection from "@/components/recipes/recipeSection";
import MediaBanner from "@/components/common/mediaBanner";
import FeatureRow from "@/components/common/featureRow";

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

      <RecipeSection
        title="FEATURED RECIPES"
        viewAllText="VIEW ALL"
        viewAllHref="/recipes/all"
        featuredText="Featured"
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
      <MediaBanner
        title={"MADE FOR \n EVERY MEAL."}
        subtitle="CRAFTED WITH CARE."
        subtitleColor="#D19E40"
        text="Every recipe is brought to life with trusted ingredients, exceptional quality, and the care that families have valued for generations."
        titleColor="#FFFFFF"
        buttonText="EXPLORE RECIPES"
        buttonHref="/products"
        buttonBgColor="#FFFFFF"
        buttonTextColor="#000000"
        imageSrc="/images/recipes/11.png"
        imageAlt="Edinborough product range on a kitchen counter"
        showGradient={false}
        layout="full"
      />

      <RecipeSection
        title="QUICK & EASY RECIPES"
        viewAllText="VIEW ALL"
        viewAllHref="/recipes/all"
        perPage={5}
        recipes={[
          {
            imageSrc: "/images/recipes/7.png",
            imageAlt: "Simple fried rice",
            time: "20 Min",
            title: "Simple Fried Rice",
            detailsHref: "/recipes/simple-fried-rice",
          },
          {
            imageSrc: "/images/recipes/8.png",
            imageAlt: "Spicy chicken sandwich",
            time: "15 Min",
            title: "Spicy Chicken Sandwich",
            detailsHref: "/recipes/spicy-chicken-sandwich",
          },
          {
            imageSrc: "/images/recipes/9.png",
            imageAlt: "Vegetable noodles",
            time: "20 Min",
            title: "Vegetable Noodles",
            detailsHref: "/recipes/vegetable-noodles",
          },
          {
            imageSrc: "/images/recipes/10.png",
            imageAlt: "Chicken shawarma wraps",
            time: "10 Min",
            title: "Chicken Shawarma Wraps",
            detailsHref: "/recipes/chicken-shawarma-wraps",
          },
          {
            imageSrc: "/images/recipes/11.png",
            imageAlt: "Mango lassi",
            time: "05 Min",
            title: "Mango Lassi",
            detailsHref: "/recipes/mango-lassi",
          },
        ]}
      />
      <MediaBanner
        layout="full"
        subtitle="INSPIRE EVERY KITCHEN"
        subtitleColor="#DA281C"
        title={"SHARE YOUR RECIPE\nWITH EDINBOROUGH"}
        titleColor="#1A1A1A"
        highlightText="EDINBOROUGH"
        highlightColor="#E31E24"
        text="Have a favourite recipe made with Edinborough products? Share your culinary creations with our community and inspire home cooks across Sri Lanka."
        textColor="#5C5C5C"
        buttonText="SUBMIT YOUR RECIPE"
        buttonHref="/recipes/submit"
        buttonBgColor="#E31E24"
        buttonTextColor="#FFFFFF"
        imageSrc="/images/recipes/12.png"
        imageAlt="Share your recipe with Edinborough"
        showGradient={false}
      />
      <RecipeSection
        title="FEATURED RECIPES FROM OUR COMMUNITY"
        subtitle="Explore authentic recipes submitted by passionate home cooks and food enthusiasts using Edinborough's trusted range of products."
        viewAllText="VIEW ALL"
        viewAllHref="/recipes/all"
        recipes={[
          {
            imageSrc: "/images/recipes/7.png",
            imageAlt: "Kottu with Edinborough soya sauce",
            time: "30 Min",
            title: "Kottu With Edinborough Soya Sauce",
            authorName: "Nadeesha Perera",
            authorLocation: "Colombo, Sri Lanka",
            viewCount: "3.2K Views",
            detailsHref: "/recipes/kottu",
            badgeText: "Dinner",
          },
          {
            imageSrc: "/images/recipes/8.png",
            imageAlt: "Creamy pasta with chilli and garlic sauce",
            time: "25 Min",
            title: "Creamy Pasta With Chilli And Garlic Sauce",
            authorName: "Nadeesha Perera",
            authorLocation: "Colombo, Sri Lanka",
            viewCount: "3.2K Views",
            detailsHref: "/recipes/creamy-pasta",
            badgeText: "Lunch",
          },
          {
            imageSrc: "/images/recipes/9.png",
            imageAlt: "Prawn curry with Edinborough chili paste",
            time: "40 Min",
            title: "Prawn Curry With Edinborough Chili Paste",
            authorName: "Nadeesha Perera",
            authorLocation: "Colombo, Sri Lanka",
            viewCount: "3.2K Views",
            detailsHref: "/recipes/prawn-curry",
            badgeText: "Dinner",
          },
          {
            imageSrc: "/images/recipes/10.png",
            imageAlt: "Chocolate cake with chocolate syrup",
            time: "50 Min",
            title: "Chocolate Cake With Chocolate Syrup",
            authorName: "Nadeesha Perera",
            authorLocation: "Colombo, Sri Lanka",
            viewCount: "3.2K Views",
            detailsHref: "/recipes/chocolate-cake",
            badgeText: "Dessert",
          },
        ]}
      />

      <FeatureRow
        items={[
          {
            imageSrc: "/images/about/premium.png",
            imageAlt: "Ribbon badge icon representing premium quality",
            title: "Premium Quality",
            description: "Finest ingredients for the best taste",
          },
          {
            imageSrc: "/images/about/trust.png",
            imageAlt: "Handshake icon representing trust since 1973",
            title: "Trusted Since 1973",
            description: "Over 50 years of culinary excellence",
          },
          {
            imageSrc: "/images/about/range.png",
            imageAlt: "Bottles icon representing a wide product range",
            title: "Wide Range",
            description: "Thousands of products for every need",
          },
          {
            imageSrc: "/images/about/delivery.png",
            imageAlt: "Delivery truck icon representing island-wide delivery",
            title: "Island Wide Delivery",
            description: "Delivering goodness across Sri Lanka",
          },
        ]}
      />
    </main>
  );
}
