"use client";

import { useState } from "react";
import Navbar from "@/components/common/navbar";
import HeroBanner from "@/components/common/heroBanner";
import FeatureRow from "@/components/common/featureRow";
import MediaBanner from "@/components/common/mediaBanner";
import CategorySidebar from "@/components/common/categorySideBar";
import ProductListingHeader from "@/components/common/productListingHeader";
import ProductCard from "@/components/common/productCard";
import Pagination from "@/components/common/pagination";

const PRODUCTS_PER_PAGE = 12;

interface Product {
  name: string;
  size: string;
  imageSrc: string;
  featuredText?: string;
}

interface CategoryData {
  name: string;
  iconSrc: string;
  iconAlt: string;
  description: string;
  products: Product[];
}

const categoryData: Record<string, CategoryData> = {
  "red-sauces": {
    name: "Red Sauces",
    iconSrc: "/images/products/4.png",
    iconAlt: "Chili icon",
    description:
      "Made with sun-ripened tomatoes and premium ingredients, our red sauces deliver rich taste and perfect texture in every drop.",
    products: [
      {
        name: "Tomato Sauce",
        size: "405g",
        imageSrc: "/images/products/14.png",
        featuredText: "Featured",
      },
      {
        name: "Sweet Chilli Sauce",
        size: "200g",
        imageSrc: "/images/products/15.png",
        featuredText: "Featured",
      },
      {
        name: "Chilli & Garlic Sauce",
        size: "200g",
        imageSrc: "/images/products/16.png",
      },
      {
        name: "Tomato Ketchup",
        size: "405g",
        imageSrc: "/images/products/13.png",
      },{
        name: "Tomato Sauce",
        size: "405g",
        imageSrc: "/images/products/14.png",
        featuredText: "Featured",
      },
      {
        name: "Sweet Chilli Sauce",
        size: "200g",
        imageSrc: "/images/products/15.png",
        featuredText: "Featured",
      },
      {
        name: "Chilli & Garlic Sauce",
        size: "200g",
        imageSrc: "/images/products/16.png",
      },
      {
        name: "Tomato Ketchup",
        size: "405g",
        imageSrc: "/images/products/13.png",
      },{
        name: "Tomato Sauce",
        size: "405g",
        imageSrc: "/images/products/14.png",
        featuredText: "Featured",
      },
      {
        name: "Sweet Chilli Sauce",
        size: "200g",
        imageSrc: "/images/products/15.png",
        featuredText: "Featured",
      },
      {
        name: "Chilli & Garlic Sauce",
        size: "200g",
        imageSrc: "/images/products/16.png",
      },
      {
        name: "Tomato Ketchup",
        size: "405g",
        imageSrc: "/images/products/13.png",
      },{
        name: "Tomato Sauce",
        size: "405g",
        imageSrc: "/images/products/14.png",
        featuredText: "Featured",
      },
      {
        name: "Sweet Chilli Sauce",
        size: "200g",
        imageSrc: "/images/products/15.png",
        featuredText: "Featured",
      },
      {
        name: "Chilli & Garlic Sauce",
        size: "200g",
        imageSrc: "/images/products/16.png",
      },
      {
        name: "Tomato Ketchup",
        size: "405g",
        imageSrc: "/images/products/13.png",
      },
      // ...rest of the Red Sauces products
    ],
  },
  "dark-sauces": {
    name: "Dark Sauces",
    iconSrc: "/images/products/6.png",
    iconAlt: "Bottle icon",
    description:
      "Rich, savoury dark sauces made to deepen flavour in every dish.",
    products: [
      // ...Dark Sauces products
    ],
  },
  "spread-and-dipping": {
    name: "Spread and Dipping",
    iconSrc: "/images/products/6.png",
    iconAlt: "Jar icon",
    description: "Creamy spreads and dips for every kitchen.",
    products: [
      // ...Spread and Dipping products
    ],
  },
  "food-beverages": {
    name: "Food & Beverages",
    iconSrc: "/images/products/7.png",
    iconAlt: "Plate icon",
    description: "A wide range of food and beverage essentials.",
    products: [
      // ...Food & Beverages products
    ],
  },
};

export default function OurProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("red-sauces");
  const [page, setPage] = useState(1);
  const [brand, setBrand] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  const activeCategory = categoryData[selectedCategory];
  const totalPages = Math.max(
    1,
    Math.ceil(activeCategory.products.length / PRODUCTS_PER_PAGE),
  );
  const pageProducts = activeCategory.products.slice(
    (page - 1) * PRODUCTS_PER_PAGE,
    page * PRODUCTS_PER_PAGE,
  );

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroBanner
        title="OUR PRODUCTS"
        text="Explore our wide range of high quality food products crafted to bring taste, trust and happiness to every table."
        backgroundImage="/images/products/2.png"
      />

      {/* Product listing: category sidebar + filterable, paginated grid */}
      <section className="mx-auto flex max-w-[1920px] flex-col gap-10 px-6 py-10 sm:px-10 lg:flex-row lg:px-16 lg:py-14 xl:px-10">
        <CategorySidebar
          categories={Object.entries(categoryData).map(([slug, data]) => ({
            name: data.name,
            count: data.products.length,
            iconSrc: data.iconSrc,
            iconAlt: data.iconAlt,
            href: `/products/${slug}`,
            active: slug === selectedCategory,
          }))}
          onSelect={(category) => {
            const slug = Object.keys(categoryData).find(
              (key) => categoryData[key].name === category.name,
            );
            if (slug) {
              setSelectedCategory(slug);
              setPage(1);
            }
          }}
          viewAllHref="/products"
          promoImageSrc="/images/products/8.png"
          promoImageAlt="Father's Day promotion — upload your favorite recipe to win an Edinborough hamper"
          promoHref="/promotions/fathers-day"
        />

        <div className="flex-1">
          <ProductListingHeader
            title={activeCategory.name}
            description={activeCategory.description}
            filters={[
              {
                label: "All Brands",
                options: [
                  { label: "All Brands", value: "all" },
                  { label: "Edinborough", value: "edinborough" },
                ],
                value: brand,
                onChange: setBrand,
              },
              {
                label: "Sort By",
                options: [
                  { label: "Newest", value: "newest" },
                  { label: "Price: Low to High", value: "price-asc" },
                  { label: "Price: High to Low", value: "price-desc" },
                ],
                value: sortBy,
                onChange: setSortBy,
              },
            ]}
          />

          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
            {pageProducts.map((product, i) => (
              <ProductCard
                key={`${product.name}-${i}`}
                imageSrc={product.imageSrc}
                imageAlt={`Edinborough ${product.name} ${product.size}`}
                name={product.name}
                size={product.size}
                detailsHref={`/products/${product.name.toLowerCase().replace(/\s+/g, "-")}`}
                featuredText={product.featuredText}
              />
            ))}
          </div>

          <div className="mt-10">
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          </div>
        </div>
      </section>

        <MediaBanner
        title={"MADE FOR \n EVERY MEAL."}
        subtitle="CRAFTED WITH CARE."
        text="From everyday family dinners to special occasions, discover recipes made better with the trusted taste of Edinborough."
        buttonText="EXPLORE RECIPES"
        buttonHref="/products"
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
