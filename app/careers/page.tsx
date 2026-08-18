import HeroBanner from "@/components/common/heroBanner";
import TextBanner from "@/components/common/textBanner";
import OpenPositionsGrid from "@/components/careers/openPositionsGrid";
import MediaBanner from "@/components/common/mediaBanner";
import FeatureRow from "@/components/common/featureRow";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroBanner
        title="EDINBOROUGH CAREERS"
        text="At Edinborough, we don't just create great products, we create opportunities, build careers, and grow together."
        backgroundImage="/images/careers/hero.png"
      />

      <TextBanner title="OPEN POSITIONS" />

      <OpenPositionsGrid
        positions={[
          {
            title: "Sales Executive",
            department: "Sales & Marketing",
            employmentType: "Full-Time",
            location: "Colombo, Sri Lanka",
            href: "/careers/sales-executive",
          },
          {
            title: "Production Executive",
            department: "Operations",
            employmentType: "Full-Time",
            location: "Colombo, Sri Lanka",
            href: "/careers/production-executive",
          },
          {
            title: "Quality Control Officer",
            department: "Quality Assurance",
            employmentType: "Full-Time",
            location: "Colombo, Sri Lanka",
            href: "/careers/quality-control-officer",
          },
          {
            title: "HR Executive",
            department: "Human Resources",
            employmentType: "Full-Time",
            location: "Colombo, Sri Lanka",
            href: "/careers/hr-executive",
          },
          {
            title: "Supply Chain Executive",
            department: "Supply Chain",
            employmentType: "Full-Time",
            location: "Colombo, Sri Lanka",
            href: "/careers/supply-chain-executive",
          },
          {
            title: "Finance Executive",
            department: "Finance & Accounts",
            employmentType: "Full-Time",
            location: "Colombo, Sri Lanka",
            href: "/careers/finance-executive",
          },
        ]}
      />

      <MediaBanner
        layout="full"
        subtitle="CAREER"
        subtitleColor="#FFFFFF"
        title={"BENEFITS THAT\nSUPPORT YOU"}
        titleColor="#FFFFFF"
        highlightText="SUPPORT YOU"
        text="At Edinborough, we believe our people are our greatest strength. That's why we provide a workplace that promotes growth, well-being, and long-term career success. Join a team where your contributions are valued and your future matters."
        imageSrc="/images/careers/banner.png"
        imageAlt="Edinborough production facility with staff at work"
        checklistItems={[
          {
            title: "Health & Welness",
            description:
              "Comprehensive health and wellness initiatives designed to help you stay healthy, happy, and productive.",
          },
          {
            title: "Learning & Development",
            description:
              "Continuous learning opportunities, professional training, and career development programs to help you grow.",
          },
          {
            title: "Paid Leaves & Holidays",
            description:
              "Enjoy annual leave, medical leave, public holidays, and other leave benefits that support a healthy work-life balance.",
          },
          {
            title: "Insurance Coverage",
            description:
              "Company-sponsored insurance benefits that provide financial protection and peace of mind for you and your family.",
          },
          {
            title: "Employee Discounts",
            description:
              "Exclusive discounts on Edinborough products and selected partner brands.",
          },
          {
            title: "Fun & Engaging Work Culture",
            description:
              "Work in a collaborative environment where innovation, teamwork, recognition, and employee engagement thrive.",
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
