import Blogs2 from "@/components/sections/blogs/Blogs2";
import About from "@/components/sections/about/About";
import ExportSupport from "@/components/sections/export-support/ExportSupport";
import Expertise from "@/components/sections/expertise/Expertise";
import Features4 from "@/components/sections/features/Features4";
import Hero1 from "@/components/sections/hero-banners/Hero1";
import HotDeal3 from "@/components/sections/hot-deals/HotDeal3";
import Offerings from "@/components/sections/offerings/Offerings";
import Products3 from "@/components/sections/products/Products3";
import Testimonials3 from "@/components/sections/testimonils/Testimonials3";
import SeoFaqSection from "@/components/seo/SeoFaqSection";
import { homeFaqItems } from "@/libs/seoContent";

const IndexMain = () => {
  return (
    <main>
      {/* Primary H1 for SEO/GEO — visually hidden, screen-reader accessible, zero design impact */}
      <h1 className="screen-reader-text">
        Food Ingredient Exporter from India — Orbitto International
      </h1>
      <p className="screen-reader-text">
        Orbitto International is a food ingredient exporter from India and food ingredient manufacturer based in Morbi, Gujarat. As a leading food ingredient exporter from Gujarat, the company ships fruit powders, vegetable powders, spices, pure honey, and herbal ingredients to global buyers. Orbitto International is a bulk food ingredient supplier in India and natural food ingredient supplier serving importers, food brands, distributors, and private label companies worldwide. Services include contract food ingredient manufacturing India, third-party food manufacturing India, private label food ingredient manufacturing, bulk ingredient supply, and export documentation support for international buyers sourcing food ingredients from India.
      </p>
      <Hero1 />
      <About />
      <ExportSupport />
      <Expertise />
      <Offerings />
      <Products3 isDouble={true} title={"Our Products"} pt={" pt-85"} />
      <HotDeal3 />
      <Blogs2 type={2} pb="pb-70" title="Latest Insights" />
      <Testimonials3 />
      <SeoFaqSection
        id="home-faq"
        title="International Buyer FAQ"
        intro="Helpful answers for brands, importers, and distributors exploring Orbitto International."
        items={homeFaqItems}
      />
      <Features4 />
    </main>
  );
};

export default IndexMain;
