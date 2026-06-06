import ProductMain from "@/components/layout/main/ShopMain";
import StructuredData from "@/components/seo/StructuredData";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import {
  buildSeoMetadata,
  getBreadcrumbSchema,
  getCollectionPageSchema,
  getFAQPageSchema,
  getItemListSchema,
  humanizeSlug,
} from "@/libs/seo";
import { buildProductCategoryPath } from "@/libs/catalog";
import { getPublicProducts } from "@/libs/supabase/queries/products";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const readSearchParam = (value) =>
  Array.isArray(value) ? value[0] : value;

const getProductsSeo = (searchParams = {}) => {
  const category = readSearchParam(searchParams?.category)?.trim();
  const search = readSearchParam(searchParams?.search)?.trim();
  const hasSecondaryFilters = ["brand", "tag", "size", "color"].some((filterKey) =>
    Boolean(readSearchParam(searchParams?.[filterKey])?.trim())
  );

  if (search) {
    return {
      title: `Search Results for ${search}`,
      description: `Search the Orbitto International product catalog for ${search} and find export-ready fruit powders, vegetable powders, spices, honey, and herbal ingredients.`,
      canonicalPath: "/products",
      schemaPath: "/products",
      noIndex: true,
      keywords: [search, `${search} supplier`],
      schemaName: "Product Search Results",
    };
  }

  if (hasSecondaryFilters) {
    return {
      title: "Filtered Product Catalog",
      description:
        "Browse Orbitto International's export-focused product catalog for food and beverage ingredients.",
      canonicalPath: "/products",
      schemaPath: "/products",
      noIndex: true,
      keywords: ["product catalog filters"],
      schemaName: "Filtered Product Catalog",
    };
  }

  if (category) {
    const categoryLabel = humanizeSlug(category);

    return {
      title: `${categoryLabel} Exporter & Supplier`,
      description: `Explore ${categoryLabel.toLowerCase()} from Orbitto International for bulk supply, private label needs, and global food ingredient sourcing.`,
      canonicalPath: buildProductCategoryPath(category),
      schemaPath: buildProductCategoryPath(category),
      noIndex: true,
      keywords: [
        categoryLabel,
        `${categoryLabel} exporter`,
        `${categoryLabel} supplier`,
      ],
      schemaName: `${categoryLabel} Product Collection`,
    };
  }

  return {
    title: "Food Ingredient Products — Fruit Powder, Vegetable Powder, Spices, Honey & Herbal",
    description:
      "Browse Orbitto International's full export ingredient catalog: fruit powders, vegetable powders, spices, honey, and herbal powders from Gujarat, India for bulk supply, private label, and global food manufacturing.",
    canonicalPath: "/products",
    schemaPath: "/products",
    noIndex: false,
    keywords: [
      "food ingredient products India",
      "fruit powder products export",
      "vegetable powder products India",
      "spice products exporter India",
      "honey products exporter India",
      "herbal powder products India",
      "bulk food ingredient catalog India",
      "food ingredient supplier product list",
      "export ingredient catalog Gujarat",
      "private label food ingredient products",
    ],
    schemaName: "Orbitto International Export Product Catalog",
  };
};

const productsFaqItems = [
  {
    question: "What food ingredient products does Orbitto International export from India?",
    answer:
      "Orbitto International exports five main ingredient categories from Gujarat, India: fruit powders, vegetable powders, pure honey, spices, and herbal powders. All categories are available for bulk supply, private label manufacturing, and contract manufacturing arrangements.",
  },
  {
    question: "Can buyers request bulk supply, private label, or contract manufacturing?",
    answer:
      "Yes. Orbitto International supports bulk ingredient supply and can discuss private label manufacturing, contract manufacturing, and third-party manufacturing requirements based on product category and buyer order scope.",
  },
  {
    question: "Can I request product specifications, MOQ, pricing, or samples?",
    answer:
      "Yes. Buyers can contact Orbitto International for product specifications, application suitability, MOQ information, export pricing discussions, and sample-related enquiries before placing an order.",
  },
  {
    question: "Are Orbitto International ingredients suitable for nutraceuticals and functional foods?",
    answer:
      "Yes. Orbitto International fruit powders, vegetable powders, and herbal powders are used in nutraceuticals, functional beverages, health supplements, and wellness product formulations by brands globally.",
  },
  {
    question: "Can international buyers from any country source ingredients from Orbitto?",
    answer:
      "Yes. Orbitto International exports food ingredients worldwide. The company provides export documentation, logistics coordination, and buyer support for importers and food brands in any country.",
  },
];

export async function generateMetadata({ searchParams }) {
  const seo = getProductsSeo(searchParams);

  return buildSeoMetadata({
    title: seo.title,
    description: seo.description,
    path: seo.canonicalPath,
    noIndex: seo.noIndex,
    keywords: seo.keywords,
  });
}

const Products = async ({ searchParams }) => {
  const seo = getProductsSeo(searchParams);
  const { data: productList } = seo.noIndex
    ? { data: [] }
    : await getPublicProducts({ page: 1, limit: 12 });

  return (
    <>
      <StructuredData
        id="products-page-schema"
        data={getCollectionPageSchema({
          title: seo.schemaName,
          description: seo.description,
          path: seo.schemaPath,
        })}
      />
      <StructuredData
        id="products-breadcrumb-schema"
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
        ])}
      />
      {!seo.noIndex ? (
        <>
          <StructuredData
            id="products-item-list-schema"
            data={getItemListSchema({
              title: "Orbitto International Export Product Catalog",
              path: "/products",
              items: (productList || []).map((product) => ({
                name: product.title || product.name,
                path: product.path || `/products/${product.slug || product.id}`,
              })),
            })}
          />
          <StructuredData
            id="products-faq-schema"
            data={getFAQPageSchema(productsFaqItems)}
          />
        </>
      ) : null}
      <PageWrapper
        isNotHeaderTop={true}
        isHeaderRight={true}
        isTextWhite={true}
        isNavbarAppointmentBtn={true}
      >
        <>
          <ProductMain
            isSidebar="primary"
            title="Export Product Catalog"
            text="Products"
            faqSection={{
              id: "products-faq",
              title: "Products FAQ",
              intro:
                "Key questions from international buyers sourcing Orbitto ingredients.",
              items: productsFaqItems,
            }}
          />
        </>
      </PageWrapper>
    </>
  );
};

export default Products;
