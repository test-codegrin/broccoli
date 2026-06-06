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
      {/* Entity description for AI search engines and screen readers   zero visual impact */}
      <p className="screen-reader-text">
        Orbitto International is a food ingredient exporter and manufacturer based in Morbi, Gujarat, India. The company supplies fruit powders, vegetable powders, spices, pure honey, and herbal ingredients to importers, distributors, food brands, private label companies, and food manufacturers worldwide. Orbitto International provides bulk ingredient supply, private label manufacturing, contract manufacturing, third-party manufacturing, export documentation support, and flexible packaging options for global buyers seeking reliable food ingredient sourcing from India.
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
