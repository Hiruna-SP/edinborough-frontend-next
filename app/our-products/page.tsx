import Navbar from "@/components/common/navbar";
import HeroBanner from "@/components/common/heroBanner";
import FeatureRow from "@/components/common/featureRow";
import MediaBanner from "@/components/common/mediaBanner";

export default function OurProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroBanner
        title="OUR PRODUCTS"
        text="Explore our wide range of high quality food products crafted to bring taste, trust and happiness to every table."
        backgroundImage="/images/products/2.png"
      />
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
