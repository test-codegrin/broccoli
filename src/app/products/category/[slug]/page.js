import ProductMain from "@/components/layout/main/ShopMain";
import StructuredData from "@/components/seo/StructuredData";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import {
  buildSeoMetadata,
  getBreadcrumbSchema,
  getCollectionPageSchema,
  getFAQPageSchema,
  getItemListSchema,
} from "@/libs/seo";
import {
  buildProductCategoryPath,
  getCategoryContent,
} from "@/libs/catalog";
import { getPublicProducts } from "@/libs/supabase/queries/products";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const buildCategoryFaqItems = (categoryLabel, categorySlug) => [
  {
    question: `What is ${categoryLabel.toLowerCase()} used for in food manufacturing?`,
    answer: `${categoryLabel} from Orbitto International is used in beverages, bakery, confectionery, dairy, ready meals, nutraceuticals, functional foods, and private label product development. Buyers can request application guidance for specific end-use categories.`,
  },
  {
    question: `Can Orbitto International export ${categoryLabel.toLowerCase()} in bulk quantities?`,
    answer: `Yes. Orbitto International supports bulk export of ${categoryLabel.toLowerCase()} from Gujarat, India with full documentation, coordinated logistics, and commercial packaging support for global importers and distributors.`,
  },
  {
    question: `Does Orbitto International support private label for ${categoryLabel.toLowerCase()}?`,
    answer: `Yes. Orbitto International can discuss private label manufacturing, custom packaging, branded formulations, and contract manufacturing scope for ${categoryLabel.toLowerCase()} based on buyer requirements.`,
  },
  {
    question: `Can buyers request MOQ, pricing, or samples for ${categoryLabel.toLowerCase()}?`,
    answer: `Yes. Buyers can contact Orbitto International to request product specifications, application details, MOQ information, export pricing, and sample support for ${categoryLabel.toLowerCase()}.`,
  },
  {
    question: `Is Orbitto International's ${categoryLabel.toLowerCase()} suitable for international buyers?`,
    answer: `Yes. Orbitto International's ${categoryLabel.toLowerCase()} is exported worldwide from Morbi, Gujarat, India. It is available for importers, distributors, food brands, and nutraceutical companies seeking reliable ingredient supply from India.`,
  },
  {
    question: `What quality standards apply to Orbitto International's ${categoryLabel.toLowerCase()}?`,
    answer: `Orbitto International's ${categoryLabel.toLowerCase()} is processed to export-grade quality from its Gujarat, India facility. Buyers can request batch documentation, product specifications, and quality details during the commercial enquiry process.`,
  },
];

export async function generateMetadata({ params }) {
  const category = getCategoryContent(params?.slug);

  return buildSeoMetadata({
    title: `${category.label} Exporter & Supplier from India — Orbitto International`,
    description: category.description,
    path: buildProductCategoryPath(category.slug),
    keywords: [
      ...category.keywords,
      `${category.label} exporter`,
      `${category.label} supplier India`,
      `${category.label} manufacturer India`,
      `bulk ${category.label.toLowerCase()} India`,
    ],
  });
}

const ProductCategoryPage = async ({ params }) => {
  const category = getCategoryContent(params?.slug);
  const categoryPath = buildProductCategoryPath(category.slug);
  const faqItems = buildCategoryFaqItems(category.label, category.slug);
  const { data: productList } = await getPublicProducts({
    page: 1,
    limit: 12,
    category: category.slug,
  });

  return (
    <>
      <StructuredData
        id="product-category-page-schema"
        data={getCollectionPageSchema({
          title: `${category.label} Exporter & Supplier — Orbitto International`,
          description: category.description,
          path: categoryPath,
        })}
      />
      <StructuredData
        id="product-category-faq-schema"
        data={getFAQPageSchema(faqItems)}
      />
      <StructuredData
        id="product-category-breadcrumb-schema"
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: category.label, path: categoryPath },
        ])}
      />
      <StructuredData
        id="product-category-item-list-schema"
        data={getItemListSchema({
          title: `${category.label} Products — Orbitto International`,
          path: categoryPath,
          items: (productList || []).map((product) => ({
            name: product.title || product.name,
            path: product.path || `/products/${product.slug || product.id}`,
          })),
        })}
      />
      <p className="screen-reader-text">{category.entityText}</p>
      <PageWrapper
        isNotHeaderTop={true}
        isHeaderRight={true}
        isTextWhite={true}
        isNavbarAppointmentBtn={true}
      >
        <>
          <ProductMain
            isSidebar="primary"
            categoryOverride={category.slug}
            faqSection={{
              id: "product-category-faq",
              title: `${category.label} Export FAQ`,
              intro: `Quick answers for international buyers, distributors, and brands sourcing ${category.label.toLowerCase()} from Orbitto International.`,
              items: faqItems,
            }}
          />
        </>
      </PageWrapper>
    </>
  );
};

export default ProductCategoryPage;
