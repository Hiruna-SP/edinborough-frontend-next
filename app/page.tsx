import Navbar from "@/components/common/navbar";
import CraftGallery from "@/components/home/craftGallery";
import ExploreProductSection from "@/components/home/ExploreProductSection";
import HomeHero from "@/components/home/homeHero";
import ProductDiscoverySection from "@/components/home/ProductDiscoverySection";
import SoyaSauceHero from "@/components/home/soyaSauseBanner";
import StatsBar from "@/components/common/statsBar";
import TonightRecipes from "@/components/home/tonightSection";
import MediaBanner from "@/components/common/mediaBanner";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HomeHero />
      <ExploreProductSection />
      <SoyaSauceHero />
      <CraftGallery />
      <StatsBar />
      <ProductDiscoverySection />
      <MediaBanner
        subtitle="CREAMY. CONSISTENT. TRUSTED."
        title="SRI LANKA'S LEADING MAYONNAISE BRAND"
        text="For decades, Edinborough has been the trusted choice for households, restaurants, and food service professionals across Sri Lanka."
        buttonText="Explore Products"
        buttonHref="/products"
        imageSrc="/images/home/mayonnaiseBanner.png"
        imageAlt="Edinborough Mayonnaise bottles and pouch with a burger and fresh eggs"
      />
      <TonightRecipes />
    </main>
  );
}
