import HeroBanner from "@/components/common/heroBanner";
import FeatureRow from "@/components/common/featureRow";
import ContactFormSection from "@/components/contact/contactFormSection";
import LocationsSection from "@/components/contact/locationsSection";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroBanner
        title="CONNECT WITH US"
        text="From a home kitchen in 1973 to one of Sri Lanka's leading food companies, our journey has always been driven by quality, innovation, and trust."
        backgroundImage="/images/contact/hero.png"
      />
      <div className="pt-10" />
      <FeatureRow
        dividerColor="#E2201B"
        bgColor="#F3F3F3"
        items={[
          {
            imageSrc: "/images/contact/location.svg",
            imageAlt: "Location pin icon",
            title: "Our Head Office",
            description:
              "Edinborough Products (Pvt) Ltd\n12, New Kolonnawa Road,\nMoragasmulla, Rajagiriya,\nSri lanka",
          },
          {
            imageSrc: "/images/contact/phone.svg",
            imageAlt: "Phone icon",
            title: "Call Us",
            description: "Office\n+9411 732 6326\n+9477 298 4984",
          },
          {
            imageSrc: "/images/contact/email.svg",
            imageAlt: "Email icon",
            title: "Email Us",
            description: "info@edinboroughfoods.com\nexports@edinborough.lk",
          },
          {
            imageSrc: "/images/contact/clock.svg",
            imageAlt: "Clock icon",
            title: "Business Hours",
            description:
              "Monday to Friday\n08:00 AM to 05:00 PM\nSaturdays 09:00 AM to 01:00 PM\n(Closed on Public Holidays",
          },
        ]}
      />
      <ContactFormSection />
      <LocationsSection />
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
