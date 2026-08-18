import HeroBanner from "@/components/common/heroBanner";
import StatsBar from "@/components/common/statsBar";
import AwardsShowcase from "@/components/about/awardsShowcase";
import CertificationsGrid from "@/components/common/certificationsGrid";
import MediaBanner from "@/components/common/mediaBanner";
import FeatureRow from "@/components/common/featureRow";

export default function AchievementsPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroBanner
        title="OUR ACHIEVEMENTS"
        text="For over five decades, our dedication to quality, food safety and innovation has earned recognition from leading institutions locally and internationally."
        backgroundImage="/images/achievements/hero.png"
      />
      <StatsBar bgColor="#F3F3F3" textColor="#000000" dividerColor="#FF0000" />
      <AwardsShowcase
        title="Our Awards & Recognitions"
        text="These accolades inspire us to continue raising the bar and creating products that bring pride to Sri Lanka."
        seeAllText="View All"
        seeAllHref="/awards"
        awards={[
          {
            imageSrc: "/images/about/41.png",
            imageAlt:
              "1973 - Edinborough Established in Sri Lanka - A Heritage of Flavour",
          },
          {
            imageSrc: "/images/about/42.png",
            imageAlt:
              "1975 - National Chamber Export Award - For Business Excellence",
          },
          {
            imageSrc: "/images/about/43.png",
            imageAlt: "1981 - NCE Gold Award - For Export Excellence in Asia",
          },
          {
            imageSrc: "/images/about/44.png",
            imageAlt:
              "2000 - Presidential Export Excellence Award - For Outstanding Performance",
          },
          {
            imageSrc: "/images/about/44.png",
            imageAlt:
              "2000 - Presidential Export Excellence Award - For Outstanding Performance",
          },
          {
            imageSrc: "/images/about/42.png",
            imageAlt:
              "1973 - Edinborough Established in Sri Lanka - A Heritage of Flavour",
          },
        ]}
      />
      <CertificationsGrid
        title="Our Certifications"
        text="We follow international standards to ensure the highest level of quality, food safety and environmental responsibility in everything we do."
        certifications={[
          {
            imageSrc: "/images/achievements/sgs.png",
            imageAlt: "SGS certification mark",
            title: "ISO 22000:2008",
            subtitle: "Food Safety Management System Certification",
            certificateHref: "/images/achievements/certificates/iso-22000.pdf",
          },
          {
            imageSrc: "/images/achievements/haccp.png",
            imageAlt: "HACCP certification mark",
            title: "HACCP",
            subtitle: "Food Safety Management System Certification",
            certificateHref: "/images/achievements/certificates/haccp.pdf",
          },
          {
            imageSrc: "/images/achievements/halal.png",
            imageAlt: "Halal certified mark",
            title: "Halal Certified",
            subtitle: "Food Safety Management System Certification",
            certificateHref: "/images/achievements/certificates/halal.pdf",
          },
          {
            imageSrc: "/images/achievements/iso.png",
            imageAlt: "ISO 9001:2015 certification mark",
            title: "ISO 9001:2015",
            subtitle: "Food Safety Management System Certification",
            certificateHref: "/images/achievements/certificates/iso-9001.pdf",
          },
          {
            imageSrc: "/images/achievements/iso14001.png",
            imageAlt: "ISO 14001:2015 certification mark",
            title: "ISO 14001:2015",
            subtitle: "Food Safety Management System Certification",
            certificateHref: "/images/achievements/certificates/iso-14001.pdf",
          },
          {
            imageSrc: "/images/achievements/gmp.png",
            imageAlt: "GMP certified mark",
            title: "GMP Certified",
            subtitle: "Food Safety Management System Certification",
            certificateHref: "/images/achievements/certificates/gmp.pdf",
          },
        ]}
      />

      <MediaBanner
        title={"TRUSTED QUALITY.\nPROVEN EXCELLENCE."}
        subtitle="WHAT MAKES US DIFFERENT"
        subtitleColor="#0845BA"
        text="For over 50 years, Edinborough has been delivering quality products through innovation and a commitment to excellence. From everyday essentials to family favourites, our products are crafted to meet the highest standards and enjoyed across Sri Lanka."
        buttonText="Explore Products"
        buttonHref="/products"
        imageSrc="/images/about/trustBanner.png"
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
