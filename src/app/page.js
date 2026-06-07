import IndexMain from "@/components/layout/main/IndexMain";
import StructuredData from "@/components/seo/StructuredData";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import {
  buildSeoMetadata,
  getBreadcrumbSchema,
  getFAQPageSchema,
  getItemListSchema,
  getWebPageSchema,
} from "@/libs/seo";
import { homeFaqItems } from "@/libs/seoContent";

const homeDescription =
  "Orbitto International exports fruit powders, vegetable powders, spices, honey, and herbal ingredients from Gujarat, India. Bulk supply, private label, export documentation, and MOQ support for global buyers, importers, food brands, and distributors.";

export const metadata = buildSeoMetadata({
  title:
    "Food Ingredient Exporter India | Fruit Powder, Spices, Honey & Herbal Ingredients",
  description: homeDescription,
  path: "/",
  keywords: [
    "food ingredient exporter India",
    "food ingredient manufacturer India",
    "food ingredient exporter Gujarat",
    "food ingredient exporter Morbi Gujarat",
    "bulk food ingredient supplier India",
    "natural food ingredient supplier India",
    "fruit powder exporter India",
    "fruit powder supplier India",
    "vegetable powder exporter India",
    "herbal powder exporter India",
    "spice exporter India",
    "honey exporter India",
    "private label food ingredient manufacturer India",
    "bulk ingredient supplier for food brands",
    "contract food ingredient manufacturing India",
    "third party food manufacturing India",
    "food ingredient supplier for importers",
    "fruit powder supplier for beverage brands",
    "spray dried fruit powder exporter",
    "wholesale food ingredient supplier India",
  ],
});

export default function Home() {
  return (
    <>
      <StructuredData
        id="home-webpage-schema"
        data={getWebPageSchema({
          title:
            "Food Ingredient Exporter India    Orbitto International",
          description: homeDescription,
          path: "/",
          speakableSelectors: [
            ".home-about__content p",
            ".export-support__content p",
            ".home-expertise__heading p",
          ],
        })}
      />
      <StructuredData
        id="home-breadcrumb-schema"
        data={getBreadcrumbSchema([{ name: "Home", path: "/" }])}
      />
      <StructuredData
        id="home-product-categories-schema"
        data={getItemListSchema({
          title: "Orbitto International   Export Food Ingredient Categories",
          path: "/products",
          items: [
            {
              name: "Fruit Powder",
              path: "/products/category/fruit-powder",
            },
            {
              name: "Vegetable Powder",
              path: "/products/category/vegetable-powder",
            },
            { name: "Pure Honey", path: "/products/category/honey" },
            { name: "Spices", path: "/products/category/spices" },
            {
              name: "Herbal Powder",
              path: "/products/category/herbal-powder",
            },
          ],
        })}
      />
      <StructuredData
        id="home-faq-schema"
        data={getFAQPageSchema(homeFaqItems)}
      />
      <PageWrapper isNavbarAppointmentBtn={true}>
        <IndexMain />
      </PageWrapper>
    </>
  );
}
