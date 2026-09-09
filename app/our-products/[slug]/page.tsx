import { notFound } from "next/navigation";
import Navbar from "@/components/common/navbar";
import ProductDetail from "@/components/products/productDetail";
import RecipeSection from "@/components/recipes/recipeSection";
import YouMayAlsoLike from "@/components/recipes/youMayAlsoLike";
import MediaBanner from "@/components/common/mediaBanner";
import FeatureRow from "@/components/common/featureRow";
import {
  productDetails,
  getProductBySlug,
} from "@/components/products/productData";

export function generateStaticParams() {
  return productDetails.map((product) => ({ slug: product.slug }));
}

const PERFECT_WITH_RECIPES = [
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
];

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = productDetails
    .filter((item) => item.slug !== slug)
    .slice(0, 4)
    .map((item) => ({
      imageSrc: item.images[0],
      imageAlt: item.imageAlt,
      title: item.name,
      detailsHref: `/our-products/${item.slug}`,
    }));

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <ProductDetail
        name={product.name}
        category={product.category}
        shortDescription={product.shortDescription}
        images={product.images}
        imageAlt={product.imageAlt}
        sizeOptions={product.sizeOptions}
        currentSlug={product.slug}
        price={product.price}
        ingredients={product.ingredients}
        storing={product.storing}
        buyHref={product.buyHref}
        allergenInfo={product.allergenInfo}
        flavor={product.flavor}
        countryOfOrigin={product.countryOfOrigin}
        availableSizes={product.availableSizes}
        nutrition={product.nutrition}
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Our Products", href: "/our-products" },
          { label: product.category, href: "/our-products" },
          { label: product.name },
        ]}
      />

      <RecipeSection
        title="PERFECT WITH"
        perPage={5}
        showControls={false}
        imageAspectClassName="aspect-4/3"
        recipes={PERFECT_WITH_RECIPES}
      />

      {relatedProducts.length > 0 && (
        <YouMayAlsoLike
          title="YOU MAY ALSO LIKE"
          viewAllText="SHOP ALL"
          viewAllHref="/our-products"
          imageAspectClassName="aspect-[4/5]"
          showImageFrame={false}
          gapRem={0.5}
          items={relatedProducts}
        />
      )}

      <MediaBanner
        title={"MADE FOR \n EVERY MEAL."}
        subtitle="CRAFTED WITH CARE."
        text="From everyday family dinners to special occasions, discover recipes made better with the trusted taste of Edinborough."
        buttonText="EXPLORE RECIPES"
        buttonHref="/our-recipes"
        imageSrc="/images/products/3.png"
        imageAlt="Edinborough product range on a kitchen counter"
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
