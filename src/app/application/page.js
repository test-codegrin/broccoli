import PortfolioMain from "@/components/layout/main/PortfolioMain";
import StructuredData from "@/components/seo/StructuredData";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import {
  buildSeoMetadata,
  getBreadcrumbSchema,
  getCollectionPageSchema,
  getFAQPageSchema,
} from "@/libs/seo";
import { applicationFaqItems } from "@/libs/seoContent";
import React from "react";

const applicationDescription =
  "Explore how Orbitto International fruit powders, vegetable powders, spices, honey, and herbal ingredients are used in beverages, bakery, nutraceuticals, ready meals, functional foods, and wellness product manufacturing worldwide.";

export const metadata = buildSeoMetadata({
  title: "Food Ingredient Applications    Beverages, Bakery, Nutraceuticals & More",
  description: applicationDescription,
  path: "/application",
  keywords: [
    "fruit powder applications food manufacturing",
    "vegetable powder applications",
    "herbal powder nutraceutical applications",
    "food ingredient applications India",
    "honey applications food brands",
    "spice applications food manufacturing",
    "food ingredient supplier for beverage brands",
    "food powder supplier for nutraceuticals",
    "ingredient supplier for private label wellness",
    "food ingredient for ready meals",
  ],
});

const Application = () => {
  return (
    <>
      <StructuredData
        id="applications-page-schema"
        data={getCollectionPageSchema({
          title: "Food Ingredient Applications    Orbitto International",
          description: applicationDescription,
          path: "/application",
        })}
      />
      <StructuredData
        id="application-faq-schema"
        data={getFAQPageSchema(applicationFaqItems)}
      />
      <StructuredData
        id="application-breadcrumb-schema"
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Application", path: "/application" },
        ])}
      />
      <PageWrapper
        isNotHeaderTop={true}
        isHeaderRight={true}
        isTextWhite={true}
        isNavbarAppointmentBtn={true}
      >
        <>
          <PortfolioMain
            faqSection={{
              id: "application-faq",
              title: "Application FAQ",
              intro:
                "Answers around where Orbitto ingredients fit in food, beverage, and wellness product development.",
              items: applicationFaqItems,
            }}
          />
        </>
      </PageWrapper>
    </>
  );
};

export default Application;
