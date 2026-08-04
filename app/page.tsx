import Navbar from "@/components/common/navbar";
import CraftGallery from "@/components/home/craftGallery";
import ExploreProductSection from "@/components/home/ExploreProductSection";
import HomeHero from "@/components/home/homeHero";
import ProductDiscoverySection from "@/components/home/ProductDiscoverySection";
import ProductsBanner from "@/components/home/productsBanner";
import SoyaSauceHero from "@/components/home/soyaSauseBanner";
import StatsBar from "@/components/home/statsBar";
import TonightRecipes from "@/components/home/tonightSection";

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
      <ProductsBanner />
      <TonightRecipes />
    </main>
  );
}
