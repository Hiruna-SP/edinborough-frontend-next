import HeroBanner from "@/components/common/heroBanner";
import StatsBar from "@/components/home/statsBar";

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <HeroBanner 
        title="About Edinborough"
        text="From a home kitchen in 1973 to one of Sri Lanka's leading food companies, our journey has always been driven by quality, innovation, and trust."
        backgroundImage="/images/about/herobanner.png"
      />
      <StatsBar
        bgColor="#F3F3F3"
        textColor="#000000"
        dividerColor="#FF0000"
      />
    </main>
  );
}
