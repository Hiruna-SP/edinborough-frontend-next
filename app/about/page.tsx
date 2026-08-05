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
        layout="full"
        title={"ROOTED IN HERITAGE.\nCOMMITED TO\nTOMORROW."}
        titleColor="#000000"
        highlightText={"COMMITED TO\nTOMORROW."}
        highlightColor="#E2201B"
        text="Founded in 1973, Edinborough has grown from a small home-based venture into a leading food manufacturer. Guided by the vision of Mr. C.M.R.R. Pasha, we continue to blend tradition with innovation to create products that inspire confidence in every kitchen."
        textColor="#1A1A1A"
        imageSrc="/images/about/heritage.png"
        imageAlt="Founder C.M.R.R. Pasha bottling products in 1973, alongside modern Edinborough factory operations"
        showGradient={false}
      />
      <MediaBanner
        title={"TRUSTED QUALITY.\nPROVEN EXCELLENCE."}
        text="For over 50 years, Edinborough has been delivering quality products through innovation and a commitment to excellence. From everyday essentials to family favourites, our products are crafted to meet the highest standards and enjoyed across Sri Lanka."
        buttonText="Explore Products"
        buttonHref="/products"
        imageSrc="/images/about/trustBanner.png"
        imageAlt="Edinborough product range on a kitchen counter"
        showGradient={true}
      />
      <MediaBanner
        title={"A PROUD SRI LANKAN\nBRAND, TRUSTED IN\n40+ COUNTRIES"}
        titleColor="#FFFFFF"
        highlightText="40+ COUNTRIES"
        highlightColor="#E31E24"
        text="For over 52 years, Edinborough has been bringing quality food products to homes, restaurants, and food businesses around the world."
        buttonText="Explore Our Products"
        buttonHref="/products"
        imageSrc="/images/about/world.png"
        imageAlt="World map showing 40+ countries where Edinborough products are trusted"
        buttonBgColor="#FFFFFF"
        buttonTextColor="#000000"
        showGradient={false}
        layout="full"
      />
    </main>
  );
}
