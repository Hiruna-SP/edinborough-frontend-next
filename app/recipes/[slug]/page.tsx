import { notFound } from "next/navigation";
import RecipeDetail from "@/components/recipes/recipeDetail";
import YouMayAlsoLike from "@/components/recipes/youMayAlsoLike";
import FeatureRow from "@/components/common/featureRow";
import {
  recipeDetails,
  getRecipeBySlug,
} from "@/components/recipes/recipeData";
import MediaBanner from "@/components/common/mediaBanner";

export function generateStaticParams() {
  return recipeDetails.map((recipe) => ({ slug: recipe.slug }));
}

const YOU_MAY_ALSO_LIKE_FALLBACK = [
  {
    imageSrc: "/images/recipes/7.png",
    imageAlt: "Simple fried rice",
    title: "Simple Fried Rice",
    detailsHref: "/recipes/simple-fried-rice",
  },
  {
    imageSrc: "/images/recipes/8.png",
    imageAlt: "Spicy chicken sandwich",
    title: "Spicy Chicken Sandwich",
    detailsHref: "/recipes/spicy-chicken-sandwich",
  },
  {
    imageSrc: "/images/recipes/9.png",
    imageAlt: "Vegetable noodles",
    title: "Vegetable Noodles",
    detailsHref: "/recipes/vegetable-noodles",
  },
  {
    imageSrc: "/images/recipes/10.png",
    imageAlt: "Chicken shawarma wraps",
    title: "Chicken Shawarma Wraps",
    detailsHref: "/recipes/chicken-shawarma-wraps",
  },
];

export default async function RecipeDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);

  if (!recipe) {
    notFound();
  }

  const relatedFromData = recipeDetails
    .filter((item) => item.slug !== slug)
    .slice(0, 4)
    .map((item) => ({
      imageSrc: item.heroImages[0],
      imageAlt: item.heroImageAlt,
      title: item.title,
      detailsHref: `/recipes/${item.slug}`,
    }));

  const relatedRecipes =
    relatedFromData.length > 0
      ? relatedFromData
      : YOU_MAY_ALSO_LIKE_FALLBACK.filter(
          (item) => item.detailsHref !== `/recipes/${slug}`,
        ).slice(0, 4);

  return (
    <main className="min-h-screen bg-white">
      <RecipeDetail
        title={recipe.title}
        category={recipe.category}
        time={recipe.time}
        shortDescription={recipe.shortDescription}
        heroImages={recipe.heroImages}
        heroImageAlt={recipe.heroImageAlt}
        videoUrl={recipe.videoUrl}
        product={recipe.product}
        ingredients={recipe.ingredients}
        shopIngredientsHref={recipe.shopIngredientsHref}
        about={recipe.about}
        highlights={recipe.highlights}
        nutrition={recipe.nutrition}
        steps={recipe.steps}
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Edinborough Recipes", href: "/recipes" },
          { label: recipe.title },
        ]}
      />

      {relatedRecipes.length > 0 && (
        <YouMayAlsoLike
          title="YOU MAY ALSO LIKE"
          viewAllText="VIEW ALL"
          viewAllHref="/our-recipes"
          items={relatedRecipes}
        />
      )}
      <MediaBanner
        subtitle="CREAMY. CONSISTENT. TRUSTED."
        title="SRI LANKA'S LEADING MAYONNAISE BRAND"
        text="For decades, Edinborough has been the trusted choice for households, restaurants, and food service professionals across Sri Lanka."
        buttonText="Explore Products"
        buttonHref="/products"
        imageSrc="/images/home/mayonnaiseBanner.png"
        imageAlt="Edinborough Mayonnaise bottles and pouch with a burger and fresh eggs"
        layout="split"
        showGradient={true}
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
