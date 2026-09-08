import { notFound } from "next/navigation";
import CareerDetail from "@/components/careers/careerDetail";
import RelatedPositions from "@/components/careers/relatedPositions";
import MediaBanner from "@/components/common/mediaBanner";
import FeatureRow from "@/components/common/featureRow";
import {
  careerPositions,
  getCareerPositionBySlug,
} from "@/components/careers/careerData";

export async function generateStaticParams() {
  return careerPositions.map((position) => ({ slug: position.slug }));
}

export default async function CareerDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const position = getCareerPositionBySlug(slug);

  if (!position) {
    notFound();
  }

  const relatedPositions = careerPositions
    .filter((item) => item.slug !== slug)
    .slice(0, 3)
    .map((item) => ({
      title: item.title,
      department: item.department,
      employmentType: item.employmentType,
      location: item.location,
      href: `/careers/${item.slug}`,
    }));

  return (
    <main className="min-h-screen bg-white">
      <CareerDetail
        title={position.title}
        department={position.department}
        employmentType={position.employmentType}
        location={position.location}
        datePosted={position.datePosted}
        experience={position.experience}
        aboutRole={position.aboutRole}
        responsibilities={position.responsibilities}
        requirements={position.requirements}
        applyHref={position.applyHref}
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Edinborough Careers", href: "/careers" },
          { label: position.title },
        ]}
      />

      {relatedPositions.length > 0 && (
        <RelatedPositions
          title="Related Positions"
          positions={relatedPositions}
        />
      )}
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
