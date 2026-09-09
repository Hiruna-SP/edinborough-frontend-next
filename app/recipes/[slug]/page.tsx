import { notFound } from "next/navigation";
import RecipeDetail from "@/components/recipes/recipeDetail";
import RecipeSection from "@/components/recipes/recipeSection";
import FeatureRow from "@/components/common/featureRow";
import { recipeDetails, getRecipeBySlug } from "@/components/recipes/recipeData";

export function generateStaticParams() {
  return recipeDetails.map((recipe) => ({ slug: recipe.slug }));
}

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

  const relatedRecipes = recipeDetails
    .filter((item) => item.slug !== slug)
    .slice(0, 4)
    .map((item) => ({
      imageSrc: item.heroImages[0],
      imageAlt: item.heroImageAlt,
      time: item.time,
      title: item.title,
      description: item.shortDescription,
      detailsHref: `/recipes/${item.slug}`,
    }));

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
        <RecipeSection
          title="MORE RECIPES"
          viewAllText="VIEW ALL"
          viewAllHref="/our-recipes"
          featuredText="Featured"
          recipes={relatedRecipes}
        />
      )}

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
