"use client";

import { useState } from "react";
import HeroBanner from "@/components/common/heroBanner";
import FeatureRow from "@/components/common/featureRow";
import CategorySidebar from "@/components/common/categorySideBar";
import NewsCard from "@/components/common/newsCard";
import Pagination from "@/components/common/pagination";
import { superGrotesk } from "@/lib/fonts";

const STORIES_PER_PAGE = 6;

type CategorySlug =
  | "company-news"
  | "food-trends"
  | "tips-knowledge"
  | "events"
  | "csr-projects"
  | "sustainability";

interface Story {
  slug: string;
  category: CategorySlug;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  date: string;
}

const categoryNames: Record<CategorySlug, string> = {
  "company-news": "Company News",
  "food-trends": "Food Trends",
  "tips-knowledge": "Tips & Knowledge",
  events: "Events",
  "csr-projects": "CSR Projects",
  sustainability: "Sustainability",
};

const stories: Story[] = [
  {
    slug: "gourmet-outlet-colombo",
    category: "company-news",
    imageSrc: "/images/service/grandeur.png",
    imageAlt: "Grandeur gourmet storefront in Colombo",
    title: "Edinborough Opens New Gourmet Outlet in Colombo",
    description: "Fresh, imported and local favourites now under one roof.",
    date: "May 20, 2024",
  },
  {
    slug: "expands-production-facility",
    category: "company-news",
    imageSrc: "/images/about/heroBanner.png",
    imageAlt: "Edinborough production facility with staff on the bottling line",
    title: "Edinborough Expands Production Facility",
    description: "A new milestone in our journey to deliver quality to more homes.",
    date: "May 12, 2024",
  },
  {
    slug: "beemas-joins-retail-family",
    category: "company-news",
    imageSrc: "/images/service/beemas.png",
    imageAlt: "BEEMAS store interior stocked with Edinborough products",
    title: "BEEMAS Joins the Edinborough Retail Family",
    description: "Expanding our retail footprint with a trusted community store.",
    date: "April 28, 2024",
  },
  {
    slug: "look-inside-head-office",
    category: "company-news",
    imageSrc: "/images/about/heritage.png",
    imageAlt: "Edinborough's heritage, from its founding to its modern facility",
    title: "A Look Inside Our Head Office",
    description: "Where five decades of heritage meet modern operations.",
    date: "April 10, 2024",
  },
  {
    slug: "comeback-classic-condiments",
    category: "food-trends",
    imageSrc: "/images/home/pasta.png",
    imageAlt: "Pasta plated beside a bottle of Edinborough Tomato Sauce",
    title: "The Comeback of Classic Sri Lankan Condiments",
    description: "Why home cooks are returning to time-tested flavours.",
    date: "May 15, 2024",
  },
  {
    slug: "elevate-weeknight-dinners",
    category: "food-trends",
    imageSrc: "/images/home/shawarma.png",
    imageAlt: "Shawarma wraps made with Edinborough Tomato Sauce",
    title: "Five Ways to Elevate Weeknight Dinners",
    description: "Simple swaps that turn everyday meals into something special.",
    date: "May 2, 2024",
  },
  {
    slug: "whats-trending-tables",
    category: "food-trends",
    imageSrc: "/images/home/mayonnaiseBanner.png",
    imageAlt: "Edinborough mayonnaise range in bottle, pouch and squeeze formats",
    title: "What's Trending on Sri Lankan Tables This Season",
    description: "A look at the flavours shaping menus across the island.",
    date: "April 20, 2024",
  },
  {
    slug: "reading-nutrition-labels",
    category: "tips-knowledge",
    imageSrc: "/images/home/jam.png",
    imageAlt: "Jar of Edinborough Mixed Fruit Jam with its nutrition label visible",
    title: "Reading Nutrition Labels the Right Way",
    description: "A quick guide to making sense of what's on the pack.",
    date: "May 8, 2024",
  },
  {
    slug: "storing-sauces-freshness",
    category: "tips-knowledge",
    imageSrc: "/images/home/soyaSauseBanner.png",
    imageAlt: "Bottle of Edinborough Soya Sauce on a kitchen counter",
    title: "Storing Sauces and Condiments for Maximum Freshness",
    description: "Small habits that keep every bottle tasting its best.",
    date: "April 25, 2024",
  },
  {
    slug: "pantry-staples-guide",
    category: "tips-knowledge",
    imageSrc: "/images/products/3.png",
    imageAlt: "Edinborough product range with fresh ingredients",
    title: "A Home Cook's Guide to Pantry Staples",
    description: "The essentials every Sri Lankan kitchen should have on hand.",
    date: "April 5, 2024",
  },
  {
    slug: "behind-the-scenes-bottling",
    category: "events",
    imageSrc: "/images/about/2.png",
    imageAlt: "Workers on the Edinborough bottling line",
    title: "Behind the Scenes on Our Bottling Line",
    description: "A glimpse into the process behind every bottle we produce.",
    date: "May 18, 2024",
  },
  {
    slug: "colombo-food-fair",
    category: "events",
    imageSrc: "/images/service/agri.png",
    imageAlt: "Edinborough team at an outdoor community event",
    title: "Edinborough at the Colombo Food Fair",
    description: "Meeting the families and chefs who trust our products every day.",
    date: "March 30, 2024",
  },
  {
    slug: "supporting-local-farming",
    category: "csr-projects",
    imageSrc: "/images/service/agri.png",
    imageAlt: "Workers tending to agricultural tanks at an Edinborough facility",
    title: "Supporting Local Farming Communities",
    description: "Partnering with growers to build a more resilient supply chain.",
    date: "May 5, 2024",
  },
  {
    slug: "clean-water-initiative",
    category: "csr-projects",
    imageSrc: "/images/service/agri.png",
    imageAlt: "Edinborough facility workers as part of a community initiative",
    title: "Clean Water Initiative Reaches Ten Villages",
    description: "An update on our ongoing commitment to community wellbeing.",
    date: "April 15, 2024",
  },
  {
    slug: "sustainable-packaging",
    category: "sustainability",
    imageSrc: "/images/about/5.png",
    imageAlt: "Edinborough bottles displayed on a shelf",
    title: "Our Commitment to Sustainable Packaging",
    description: "Reducing our footprint, one bottle and one carton at a time.",
    date: "May 1, 2024",
  },
];

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategorySlug | "all">("all");
  const [page, setPage] = useState(1);

  const filteredStories =
    selectedCategory === "all"
      ? stories
      : stories.filter((story) => story.category === selectedCategory);

  const totalPages = Math.max(1, Math.ceil(filteredStories.length / STORIES_PER_PAGE));
  const pageStories = filteredStories.slice(
    (page - 1) * STORIES_PER_PAGE,
    page * STORIES_PER_PAGE,
  );

  const categories = (Object.keys(categoryNames) as CategorySlug[]).map((slug) => ({
    slug,
    name: categoryNames[slug],
    count: stories.filter((story) => story.category === slug).length,
  }));

  const selectCategory = (slug: CategorySlug | "all") => {
    setSelectedCategory(slug);
    setPage(1);
  };

  return (
    <main className="min-h-screen bg-white">
      <HeroBanner
        title="NEWS & STORIES"
        text="Discover the latest from Edinborough, from exciting product innovations and delicious recipes to company milestones, events and stories from our journey."
        backgroundImage="/images/news/hero.png"
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

      {/* Story listing: category sidebar + filterable, paginated grid */}
      <section className="mx-auto flex max-w-[1920px] flex-col gap-10 px-6 py-10 sm:px-10 lg:flex-row lg:px-16 lg:py-14 xl:px-10">
        <CategorySidebar
          categories={[
            {
              name: "All",
              count: stories.length,
              href: "/news",
              active: selectedCategory === "all",
            },
            ...categories.map((category) => ({
              name: category.name,
              count: category.count,
              href: `/news/${category.slug}`,
              active: selectedCategory === category.slug,
            })),
          ]}
          onSelect={(category) => {
            if (category.name === "All") {
              selectCategory("all");
              return;
            }
            const slug = categories.find((c) => c.name === category.name)?.slug;
            if (slug) selectCategory(slug);
          }}
          viewAllHref="/news"
          viewAllText="View All Stories"
        />

        <div className="flex-1">
          <h1
            className={`${superGrotesk.className} text-2xl font-normal uppercase leading-none text-[#111111] sm:text-3xl`}
          >
            Latest Stories
          </h1>

          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {pageStories.map((story) => (
              <NewsCard
                key={story.slug}
                imageSrc={story.imageSrc}
                imageAlt={story.imageAlt}
                category={categoryNames[story.category]}
                title={story.title}
                description={story.description}
                date={story.date}
                detailsHref={`/news/${story.category}/${story.slug}`}
              />
            ))}
          </div>

          <div className="mt-10">
            <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
          </div>
        </div>
      </section>
    </main>
  );
}
