import ContactMain from "@/components/layout/main/ContactMain";
import StructuredData from "@/components/seo/StructuredData";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import {
  buildSeoMetadata,
  getBreadcrumbSchema,
  getContactPageSchema,
  getFAQPageSchema,
  getHowToSchema,
} from "@/libs/seo";
import { contactFaqItems } from "@/libs/seoContent";
import React from "react";

export const metadata = buildSeoMetadata({
  title: "Contact Orbitto International — Request MOQ, Pricing, Samples & Export Enquiry",
  description:
    "Contact Orbitto International for export enquiries, bulk ingredient supply, private label manufacturing, product MOQ, pricing, packaging, samples, and documentation support from Gujarat, India.",
  path: "/contact",
  keywords: [
    "contact Orbitto International",
    "food ingredient export enquiry India",
    "request MOQ food ingredients India",
    "bulk ingredient quote India",
    "private label food ingredient enquiry",
    "food ingredient sample request India",
    "food exporter contact Gujarat India",
    "food ingredient supplier enquiry",
    "request pricing food powder India",
  ],
});

const howToOrderSchema = getHowToSchema({
  name: "How to Request Pricing, MOQ, and Samples from Orbitto International",
  description:
    "Step-by-step guide for international buyers to request product pricing, MOQ details, specifications, and samples from Orbitto International, a food ingredient exporter from Gujarat, India.",
  steps: [
    {
      name: "Choose your product category",
      text: "Select the food ingredient category you need: fruit powder, vegetable powder, spices, honey, or herbal powder from Orbitto International's export catalog.",
    },
    {
      name: "Fill in the contact form",
      text: "Visit the Orbitto International contact page and fill in the enquiry form with your product interest, service type (bulk supply, private label, samples), quantity requirement, and destination country.",
    },
    {
      name: "Submit your enquiry",
      text: "Submit the form or contact Orbitto International directly at orbittointernational@gmail.com or +91 99047 27348 with your requirements.",
    },
    {
      name: "Receive a commercial response",
      text: "The Orbitto International team will respond within 1–2 business days with pricing, MOQ guidance, product specifications, and next steps for your order or sample request.",
    },
  ],
});

const Contact = () => {
  return (
    <>
      <StructuredData
        id="contact-page-schema"
        data={getContactPageSchema({
          title: "Contact Orbitto International — Export Enquiry & Buyer Support",
          description:
            "Reach Orbitto International for export quotes, bulk supply, MOQ, private label, samples, and product discussions from Gujarat, India.",
        })}
      />
      <StructuredData
        id="contact-faq-schema"
        data={getFAQPageSchema(contactFaqItems)}
      />
      <StructuredData
        id="contact-howto-schema"
        data={howToOrderSchema}
      />
      <StructuredData
        id="contact-breadcrumb-schema"
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageWrapper
        isNotHeaderTop={true}
        isHeaderRight={true}
        isTextWhite={true}
        isNavbarAppointmentBtn={true}
      >
        <>
          <ContactMain
            faqSection={{
              id: "contact-faq",
              title: "Quote and Export Support FAQ",
              intro:
                "Common questions from buyers contacting Orbitto International.",
              items: contactFaqItems,
            }}
          />
        </>
      </PageWrapper>
    </>
  );
};

export default Contact;
