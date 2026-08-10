import Navbar from "@/components/common/navbar";
import HeroBanner from "@/components/common/heroBanner";

export default function OurProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroBanner
        title="OUR PRODUCTS"
        text="Explore our wide range of high quality food products crafted to bring taste, trust and happiness to every table."
        backgroundImage="/images/products/2.png"
      />
    </main>
  );
}
