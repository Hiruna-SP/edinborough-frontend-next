import HeroBanner from "@/components/common/heroBanner";
import TextBanner from "@/components/common/textBanner";
import OpenPositionsGrid from "@/components/careers/openPositionsGrid";

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
    </main>
  );
}
