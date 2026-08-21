"use client";

import { useState } from "react";
import TextBanner from "@/components/common/textBanner";
import ProductListingHeader from "@/components/common/productListingHeader";
import RecipeCard from "@/components/recipes/recipeCard";
import MediaBanner from "@/components/common/mediaBanner";
import FeatureRow from "@/components/common/featureRow";

const recipes = [
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

export default function OurRecipesPage() {
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  return (
    <main className="min-h-screen bg-white">
      <div className="px-6 pt-10 sm:px-10 lg:px-16 lg:pt-14 xl:px-10">
        <div className="mx-auto max-w-[1920px]">
          <ProductListingHeader
            title="OUR RECIPES"
            description="We offer a diverse portfolio of trusted brands, each crafted to deliver exceptional taste, quality and reliable across every product category."
            filters={[
              {
                label: "All Recipes",
                options: [
                  { label: "All Recipes", value: "all" },
                  { label: "Main Dishes", value: "main-dishes" },
                  { label: "Rice & Noodles", value: "rice-noodles" },
                  { label: "Soups", value: "soups" },
                  { label: "Appetizers", value: "appetizers" },
                  { label: "Desserts", value: "desserts" },
                  { label: "Drinks", value: "drinks" },
                ],
                value: category,
                onChange: setCategory,
              },
              {
                label: "Sort By",
                options: [
                  { label: "Newest", value: "newest" },
                  { label: "Most Popular", value: "popular" },
                  { label: "Quickest to Make", value: "quickest" },
                ],
                value: sortBy,
                onChange: setSortBy,
              },
            ]}
          />
        </div>
      </div>

      <TextBanner title="EDINBOROUGH RECIPES" />

      <div className="px-6 pb-10 sm:px-10 lg:px-16 lg:pb-14 xl:px-10">
        <div className="mx-auto max-w-[1920px]">
          <div className="grid grid-cols-2 gap-x-1 gap-y-12 sm:grid-cols-3 lg:grid-cols-5">
            {[...recipes, ...recipes, ...recipes].map((recipe, i) => (
              <RecipeCard key={`${recipe.title}-${i}`} {...recipe} />
            ))}
          </div>
        </div>
      </div>

      <TextBanner title="COMMUNITY RECIPES" />

      <div className="px-6 pb-10 sm:px-10 lg:px-16 lg:pb-14 xl:px-10">
        <div className="mx-auto max-w-[1920px]">
          <div className="grid grid-cols-2 gap-x-1 gap-y-12 sm:grid-cols-3 lg:grid-cols-5">
            {[...recipes, ...recipes, ...recipes].map((recipe, i) => (
              <RecipeCard key={`community-${recipe.title}-${i}`} {...recipe} />
            ))}
          </div>
        </div>
      </div>
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
