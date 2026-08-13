"use client";

import { useState } from "react";
import HeroBanner from "@/components/common/heroBanner";
import SectionHeading from "@/components/common/textBanner";
import BrandCard from "@/components/common/brandCard";
import Pagination from "@/components/common/pagination";
import Button from "@/components/common/button";
import FeatureRow from "@/components/common/featureRow";
import MediaBanner from "@/components/common/mediaBanner";

const BRANDS_PER_PAGE = 15;

interface Brand {
  name: string;
  slug: string;
  logoSrc: string;
  logoAlt: string;
  group: "edinborough" | "partner";
}

const brands: Brand[] = [
  { name: "Edinborough", slug: "edinborough", logoSrc: "/images/brands/ed.png", logoAlt: "Edinborough logo", group: "edinborough" },
  { name: "Pasha", slug: "pasha", logoSrc: "/images/brands/pasha.png", logoAlt: "Pasha logo", group: "edinborough" },
  { name: "Chef Mate", slug: "chef-mate", logoSrc: "/images/brands/chef.png", logoAlt: "Chef Mate logo", group: "edinborough" },
  { name: "Pacific Choice", slug: "pacific-choice", logoSrc: "/images/brands/pc.png", logoAlt: "Pacific Choice logo", group: "edinborough" },
  { name: "Mity", slug: "mity", logoSrc: "/images/brands/mity.png", logoAlt: "Mity logo", group: "partner" },
  { name: "Muhalal", slug: "muhalal", logoSrc: "/images/brands/muhalal.png", logoAlt: "Muhalal logo", group: "edinborough" },
  { name: "Happymaid", slug: "happymaid", logoSrc: "/images/brands/happymaid.png", logoAlt: "Happymaid logo", group: "edinborough" },
  { name: "Jelo", slug: "jelo", logoSrc: "/images/brands/jelo.png", logoAlt: "Jelo logo", group: "edinborough" },
  { name: "Eaden", slug: "eaden", logoSrc: "/images/brands/eaden.png", logoAlt: "Eaden logo", group: "edinborough" },
  { name: "Curry Rasa", slug: "curry-rasa", logoSrc: "/images/brands/curry-rasa.png", logoAlt: "Curry Rasa logo", group: "edinborough" },
  { name: "Oranga", slug: "oranga", logoSrc: "/images/brands/oranga.png", logoAlt: "Oranga logo", group: "edinborough" },
  { name: "Dolphin", slug: "dolphin", logoSrc: "/images/brands/dolphin.png", logoAlt: "Dolphin logo", group: "edinborough" },
  { name: "Sunfresh", slug: "sunfresh", logoSrc: "/images/brands/sunfresh.png", logoAlt: "Sunfresh logo", group: "edinborough" },
  { name: "Chiefs", slug: "chiefs", logoSrc: "/images/brands/chiefs.png", logoAlt: "Chiefs logo", group: "edinborough" },
  { name: "R.B", slug: "rb", logoSrc: "/images/brands/rb.png", logoAlt: "R.B logo", group: "edinborough" },
];

export default function OurProductsPage() {
  const [activeGroup, setActiveGroup] = useState<"all" | "edinborough">("all");
  const [page, setPage] = useState(1);

  const filteredBrands =
    activeGroup === "all" ? brands : brands.filter((brand) => brand.group === "edinborough");
  const totalPages = Math.max(1, Math.ceil(filteredBrands.length / BRANDS_PER_PAGE));
  const pageBrands = filteredBrands.slice(
    (page - 1) * BRANDS_PER_PAGE,
    page * BRANDS_PER_PAGE,
  );

  const selectGroup = (group: "all" | "edinborough") => {
    setActiveGroup(group);
    setPage(1);
  };

  return (
    <main className="min-h-screen bg-white">
      <HeroBanner
        title="OUR BRANDS"
        text="Explore our wide range of high quality food products crafted to bring taste, trust and happiness to every table."
        backgroundImage="/images/products/2.png"
      />

      <SectionHeading
        title="Our Brands"
        text="We offer a diverse portfolio of trusted brands, each crafted to deliver exceptional taste, quality and reliable across every product category."
        action={
          <div className="flex shrink-0 items-center gap-3">
            <Button
              text="All Brands"
              iconSrc="/images/brands/1.png"
              iconAlt="All brands icon"
              onClick={() => selectGroup("all")}
              bgColor={activeGroup === "all" ? "#E2201B" : "#FFFFFF"}
              textColor={activeGroup === "all" ? "#FFFFFF" : "#111111"}
              className={`px-8 py-4 text-sm ${activeGroup === "all" ? "" : "border border-[#DBDBDB]"}`}
            />
            <Button
              text="Edinborough Brands"
              iconSrc="/images/brands/2.png"
              iconAlt="Edinborough brands icon"
              onClick={() => selectGroup("edinborough")}
              bgColor={activeGroup === "edinborough" ? "#E2201B" : "#FFFFFF"}
              textColor={activeGroup === "edinborough" ? "#FFFFFF" : "#111111"}
              className={`px-8 py-4 text-sm ${activeGroup === "edinborough" ? "" : "border border-[#DBDBDB]"}`}
            />
          </div>
        }
      />

      <section className="mx-auto max-w-[1920px] px-6 pb-10 sm:px-10 lg:px-16 lg:pb-14 xl:px-10">
        <div className="grid grid-cols-2 gap-x-3 gap-y-4 sm:grid-cols-3 lg:grid-cols-5">
          {pageBrands.map((brand) => (
            <BrandCard
              key={brand.slug}
              name={brand.name}
              logoSrc={brand.logoSrc}
              logoAlt={brand.logoAlt}
              productsHref={`/brands/${brand.slug}`}
            />
          ))}
        </div>

        <div className="mt-10">
          <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
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
