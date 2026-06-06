import AboutMain from "@/components/layout/main/AboutMain";
import StructuredData from "@/components/seo/StructuredData";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import {
  buildSeoMetadata,
  getBreadcrumbSchema,
  getFAQPageSchema,
  getWebPageSchema,
} from "@/libs/seo";
import { aboutFaqItems } from "@/libs/seoContent";
import React from "react";

const aboutDescription =
  "Orbitto International is a food ingredient exporter and manufacturer based in Morbi, Gujarat, India. Learn about our spray drying and dehydration process, export capabilities, private label manufacturing, and bulk ingredient supply for global buyers.";

export const metadata = buildSeoMetadata({
  title: "About Orbitto International — Food Ingredient Exporter from Gujarat, India",
  description: aboutDescription,
  path: "/about",
  keywords: [
    "about Orbitto International",
    "food ingredient manufacturer India",
    "food ingredient exporter Gujarat",
    "food powder manufacturer Morbi India",
    "spray dried ingredient manufacturer India",
    "private label food manufacturer India",
    "export food ingredient company India",
    "fruit powder manufacturer Gujarat",
    "herbal powder manufacturer India",
  ],
});

const About = () => {
  return (
    <>
      <StructuredData
        id="about-page-schema"
        data={getWebPageSchema({
          title: "About Orbitto International — Food Ingredient Exporter from Gujarat, India",
          description: aboutDescription,
          path: "/about",
          type: "AboutPage",
          speakableSelectors: [".about5-content p", ".why-orbitto-heading p"],
        })}
      />
      <StructuredData
        id="about-faq-schema"
        data={getFAQPageSchema(aboutFaqItems)}
      />
      <StructuredData
        id="about-breadcrumb-schema"
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <PageWrapper
        isNotHeaderTop={true}
        isHeaderRight={true}
        isTextWhite={true}
        isNavbarAppointmentBtn={true}
      >
        <>
          <AboutMain
            faqSection={{
              id: "about-faq",
              title: "About Orbitto FAQ",
              intro:
                "Key answers for international buyers researching the Orbitto brand.",
              items: aboutFaqItems,
            }}
          />
        </>
      </PageWrapper>
    </>
  );
};

export default About;
