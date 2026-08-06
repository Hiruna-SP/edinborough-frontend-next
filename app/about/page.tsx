import Timeline from "@/components/about/timeline";
import HeroBanner from "@/components/common/heroBanner";
import MediaBanner from "@/components/common/mediaBanner";
import StatsBar from "@/components/common/statsBar";
import TextBanner from "@/components/common/textBanner";
import IconTextColumns from "@/components/about/iconTextColumns";
import ChecklistGrid from "@/components/about/checkListGrid";
import FeatureRow from "@/components/about/featureRow";
import TeamSection from "@/components/about/team";

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <HeroBanner
        title="About Edinborough"
        text="From a home kitchen in 1973 to one of Sri Lanka's leading food companies, our journey has always been driven by quality, innovation, and trust."
        backgroundImage="/images/about/herobanner.png"
      />
      <TextBanner
        title="WHO WE ARE"
        text="For over five decades, Edinborough has combined Sri Lankan heritage, exceptional quality, and modern innovation to create products trusted by families and chefs."
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
      <TextBanner
        title="OUR JOURNEY"
        text="From humble beginnings in 1973 to a trusted global brand, Edinborough continues to deliver quality products for every table."
      />
      <Timeline
        items={[
          {
            year: "1973",
            heading: "Our Begining",
            description:
              "Mr. C.M.R.R. Pasha began producing cordials from his own home with a vision to create quality products for local families.",
            imageSrc: "/images/about/1.png",
            imageAlt: "Mr. C.M.R.R. Pasha bottling cordials by hand in 1973",
          },
          {
            year: "1980s",
            heading: "Growing Passion",
            description:
              "With increasing demand, we expanded our production and introduced a range of delicious sauces and cordials.",
            imageSrc: "/images/about/2.png",
            imageAlt: "Edinborough production line in the 1980s",
          },
          {
            year: "1990s",
            heading: "Expanding Horizons",
            description:
              "We moved to a larger facility and strengthened our distribution network across Sri Lanka.",
            imageSrc: "/images/about/3.png",
            imageAlt: "Edinborough factory building in the 1990s",
          },
          {
            year: "2000s",
            heading: "Reaching Beyond",
            description:
              "Our products reached international markets, sharing the taste of Sri Lanka with the world.",
            imageSrc: "/images/about/4.png",
            imageAlt: "Edinborough retail store in the 2000s",
          },
          {
            year: "Today",
            heading: "A Legacy Continues",
            description:
              "With over 50 years of trust, we continue to innovate while staying true to the quality you love.",
            imageSrc: "/images/about/5.png",
            imageAlt: "Shelves of Edinborough products today",
          },
        ]}
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
      <IconTextColumns
        items={[
          {
            label: "Our Vision",
            labelColor: "#E2201B",
            title:
              "To be the most\nversatile and leading\nfood company in Sri Lanka",
            description:
              "To delight our valued customers by consistently exceeding their expectations through trusted quality, innovation, and excellence in every product we create.",
            imageSrc: "/images/about/vision.png",
            imageAlt: "Target icon representing Edinborough's vision",
          },
          {
            label: "Our Mission",
            labelColor: "#0845BA",
            title:
              "Delivering safe,\nhigh-quality products\nat competitive prices",
            description:
              "We are committed to delivering safe, high-quality products on time while exceeding customer expectations through innovation, a skilled workforce, and adherence to local and international quality standards.",
            imageSrc: "/images/about/mission.png",
            imageAlt:
              "Mountain with flag icon representing Edinborough's mission",
          },
        ]}
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
      <ChecklistGrid
        label="What Makes Us Different"
        items={[
          {
            title: "50+ Years of Excellence",
            description: "Five decades of trusted quality and authentic taste.",
          },
          {
            title: "Trusted by Generations",
            description: "A household name loved by Sri Lankan families.",
          },
          {
            title: "World-Class Quality",
            description:
              "Manufactured under rigorous local and international standards.",
          },
          {
            title: "Wide Range of Products",
            description:
              "Sauces, spreads, beverages, and more for every kitchen.",
          },
          {
            title: "Island-Wide Distribution",
            description:
              "Bringing quality products to every corner of Sri Lanka.",
          },
          {
            title: "Serving Global Markets",
            description:
              "Bringing authentic Sri Lankan taste to customers around the world.",
          },
        ]}
      />
      <MediaBanner
        layout="full"
        title={"INNOVATION\nNEVER STOPS."}
        titleColor="#000000"
        highlightText="NEVER STOPS."
        highlightColor="#DA281C"
        subtitle="INNOVATION AT EDINBOROUGH"
        subtitleColor="#DA281C"
        text="At Edinborough, innovation drives everything we do. We continuously develop new products that meet evolving consumer needs while upholding the quality and trust we've built since 1973."
        textColor="#000"
        buttonText="Explore Innovative News"
        buttonBgColor="#FFFFFF"
        buttonTextColor="#000000"
        buttonHref="/news"
        showGradient={false}
        imageSrc="/images/about/innovation.png"
        imageAlt="A red silk cloth draped over a podium, revealing the Edinborough logo"
        sideItems={[
          {
            title: "New Ideas",
            description: "Creating tomorrow's food solutions.",
          },
          {
            title: "Research & Development",
            description: "Innovating through continuous research.",
          },
          {
            title: "Quality Testing",
            description: "Ensuring quality in every product.",
          },
          {
            title: "Consumer Insights",
            description: "Inspired by changing consumer needs.",
          },
          {
            title: "Ready for Tomorrow",
            description: "Building the future of trusted food.",
          },
        ]}
      />
      <TeamSection
        subtitle="Behind every trusted product is a passionate team dedicated to quality, innovation, and excellence."
        leadership={[
          {
            name: "Mr. C.M.M.R. Pasha",
            title: "Founder",
            phone: "-",
            imageSrc: "/images/about/sample.png",
            imageAlt: "Mr. C.M.M.R. Pasha",
          },
          {
            name: "R.P.M. Zalmy",
            title: "Managing Director",
            phone: "+9477 298 4984",
            imageSrc: "/images/about/sample.png",
            imageAlt: "R.P.M. Zalmy",
          },
          {
            name: "Mr. Mushthak Ahmed",
            title: "Director – Business Development",
            phone: "+9477 298 4984",
            imageSrc: "/images/about/sample.png",
            imageAlt: "Mr. Mushthak Ahmed",
          },
          {
            name: "Mr. Lahiru Thomas",
            title: "Head of Sales",
            phone: "+9477 298 4984",
            imageSrc: "/images/about/sample.png",
            imageAlt: "Mr. Lahiru Thomas",
          },
        ]}
        management={[
          {
            name: "Thawsief Niyas",
            title: "Head – Quality Assurance & R&D",
            phone: "+9477 298 4984",
          },
          {
            name: "Nalin Udugampola",
            title: "Factory Manager",
            phone: "+9477 298 4984",
          },
          {
            name: "Kasun Millaniya",
            title: "Engineering Manager",
            phone: "+9477 298 4984",
          },
          {
            name: "Lahiru Deminda",
            title: "Human Resources Manager",
            phone: "+9477 298 4984",
          },
          {
            name: "Lahiru Thalagalage",
            title: "Finance Manager",
            phone: "+9477 298 4984",
          },
          {
            name: "Dulith Kulatunge",
            title: "Brand Manager",
            phone: "+9477 298 4984",
          },
          {
            name: "Supun Dhananjaya",
            title: "IT Executive",
            phone: "+9477 298 4984",
          },
          {
            name: "Supun Dhananjaya",
            title: "IT Executive",
            phone: "+9477 298 4984",
          },
        ]}
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
