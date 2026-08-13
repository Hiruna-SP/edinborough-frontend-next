import HeroBanner from "@/components/common/heroBanner";
import ServiceList from "@/components/common/serviceList";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroBanner
        title="OUR SERVICES"
        text="Delivering trusted brands, innovative solutions, and quality-driven services that support consumers, businesses, and global markets through every stage of the food value chain."
        backgroundImage="/images/service/hero.png"
      />

      <ServiceList
        items={[
          {
            label: "EDINBOROUGH",
            imageSrc: "/images/service/ed.png",
            imageAlt: "Edinborough Foods product range",
            title: "EDINBOROUGH FOODS",
            description:
              "For over five decades, Edinborough has been a trusted name in Sri Lanka's food industry, delivering products that combine quality, consistency, and innovation. Since our establishment in 1973, we have continuously expanded our portfolio to include sauces, beverages, condiments, spreads, and a wide range of everyday food essentials that cater to households, retailers, food service providers, and international markets.\n\nDriven by a passion for excellence, we combine traditional expertise with modern manufacturing technologies and rigorous quality standards to ensure every product meets the expectations of today's consumers. As consumer preferences continue to evolve, Edinborough remains committed to developing innovative food solutions while preserving the trust and heritage that have defined our brand for generations.",
            href: "/services/ebuy-online",
          },
          {
            label: "GRANDEUR",
            imageSrc: "/images/service/grandeur.png",
            imageAlt: "Grandeur Colombo storefront",
            title: "Grandeur Colombo",
            description:
              "Grandeur represents Edinborough's premium product range, created for consumers who seek exceptional quality and refined culinary experiences. Every product is developed with carefully selected ingredients, attention to detail, and uncompromising quality standards to deliver products that enhance everyday dining and special occasions alike.\n\nCombining sophisticated product development with modern manufacturing practices, Grandeur continues to introduce products that reflect changing consumer lifestyles while maintaining the excellence expected from the Edinborough family of brands. The brand embodies elegance, consistency, and innovation, making it the ideal choice for customers who value premium quality in every purchase.",
            href: "/services/grandeur",
          },
          {
            label: "EBUY ONLINE",
            imageSrc: "/images/service/ebuy.png",
            imageAlt: "eBuy Online product store logo",
            title: "eBuy Online - Product Online Store",
            description:
              "eBuy Online brings the complete Edinborough product portfolio directly to your fingertips through a convenient and secure digital shopping experience. Designed to make purchasing simple and accessible, the platform allows customers to browse, discover, and order their favourite products anytime, from anywhere.\n\nWith an easy-to-use interface, reliable payment options, and efficient delivery services, eBuy Online provides a seamless shopping journey for households, businesses, and retailers alike. As digital commerce continues to grow, we remain committed to enhancing the online customer experience by providing greater convenience, accessibility, and direct access to trusted Edinborough brands.",
            href: "/services/ebuy-online",
          },
          {
            label: "EDINBOROUGH AGRICULTURE",
            imageSrc: "/images/service/agri.png",
            imageAlt: "Edinborough Agriculture processing facility",
            title: "Edinborough Agriculture",
            description:
              "Edinborough Agriculture reflects our commitment to building a stronger and more sustainable agricultural future. By working closely with local farmers, agricultural communities, and supply chain partners, we help promote responsible farming practices while ensuring a reliable supply of high-quality raw materials for our manufacturing operations.\n\nThrough continuous collaboration, innovation, and long-term partnerships, we support agricultural development that benefits both producers and consumers. Our focus on sustainability, responsible sourcing, and quality assurance enables us to contribute to food security while creating lasting value throughout the agricultural ecosystem.",
            href: "/services/edinborough-agriculture",
          },
          {
            label: "QATAR PROJECT",
            imageSrc: "/images/service/qatar.png",
            imageAlt: "Qatar project facility",
            title: "Qatar Project",
            description:
              "The Qatar Project represents an important milestone in Edinborough's international growth strategy, strengthening our presence in global markets while sharing Sri Lankan quality with customers abroad. Through strategic partnerships and a deep understanding of regional market requirements, we continue to deliver products that meet international standards while satisfying diverse consumer preferences.\n\n  More than an export initiative, the Qatar Project demonstrates our commitment to building long-term business relationships, expanding market opportunities, and representing Sri Lankan food manufacturing on the global stage. As we continue our international journey, we remain focused on delivering trusted products, reliable service, and sustainable growth across new and emerging markets.",
            href: "/services/qatar-project",
          },
        ]}
      />
    </main>
  );
}
