import HeroBanner from "@/components/common/heroBanner";
import MediaBanner from "@/components/common/mediaBanner";
import StatsBar from "@/components/common/statsBar";

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <HeroBanner
        title="About Edinborough"
        text="From a home kitchen in 1973 to one of Sri Lanka's leading food companies, our journey has always been driven by quality, innovation, and trust."
        backgroundImage="/images/about/herobanner.png"
      />
      <StatsBar bgColor="#F3F3F3" textColor="#000000" dividerColor="#FF0000" />
      <MediaBanner
        title={"TRUSTED QUALITY.\nPROVEN EXCELLENCE."}
        text="For over 50 years, Edinborough has been delivering quality products through innovation and a commitment to excellence. From everyday essentials to family favourites, our products are crafted to meet the highest standards and enjoyed across Sri Lanka."
        buttonText="Explore Products"
        buttonHref="/products"
        imageSrc="/images/about/trustBanner.png"
        imageAlt="Edinborough product range on a kitchen counter"
      />
    </main>
  );
}
