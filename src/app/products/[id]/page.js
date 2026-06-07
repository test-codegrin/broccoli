import ProductDetailsMain from "@/components/layout/main/ProductDetailsMain";
import StructuredData from "@/components/seo/StructuredData";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import {
  buildSeoMetadata,
  getBreadcrumbSchema,
  getFAQPageSchema,
  getProductSchema,
  truncateText,
} from "@/libs/seo";
import { buildProductCategoryPath } from "@/libs/catalog";
import { buildProductDetailFaqItems } from "@/libs/seoContent";
import { getPublicProductBySlug } from "@/libs/supabase/queries/products";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata({ params }) {
  const productIdOrSlug = params?.id;
  const { data: product } = await getPublicProductBySlug(productIdOrSlug);

  if (!product) {
    return buildSeoMetadata({
      title: "Product Not Found",
      description: "The requested Orbitto International product could not be found.",
      path: "/products",
      noIndex: true,
    });
  }

  const productTitle = product.title || product.product_name;
  const categoryName = product.type || product.category?.name || "Food Ingredient";
  const description = truncateText(
    product.shortDescription ||
      product.description ||
      `${productTitle} from Orbitto International for bulk export and global ingredient sourcing.`,
    165
  );

  return buildSeoMetadata({
    title: `${productTitle}    Exporter & Bulk Supplier from India`,
    description,
    path: product.path || `/products/${product.id || product.slug || productIdOrSlug}`,
    images: product.images?.length ? product.images : product.image,
    keywords: [
      productTitle,
      `${productTitle} exporter India`,
      `${productTitle} supplier India`,
      `${productTitle} manufacturer Gujarat`,
      `bulk ${productTitle.toLowerCase()} supplier`,
      `${productTitle} private label India`,
      categoryName,
      `${categoryName} exporter India`,
    ],
  });
}

const ProductDetails = async ({ params }) => {
  const productParam = params?.id;
  const { data: product } = await getPublicProductBySlug(productParam);
  const productTitle = product?.title || product?.product_name || "Product";
  const categoryName = product?.type || product?.category?.name || "Products";
  const productPath = product?.path || `/products/${product?.id || product?.slug || productParam}`;
  const categoryPath = buildProductCategoryPath(categoryName);
  const faqItems = buildProductDetailFaqItems(productTitle, categoryName);

  return (
    <>
      <StructuredData
        id="product-detail-schema"
        data={getProductSchema(product)}
      />
      <StructuredData
        id="product-detail-faq-schema"
        data={getFAQPageSchema(faqItems)}
      />
      <StructuredData
        id="product-detail-breadcrumb-schema"
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          ...(product?.type ? [{ name: categoryName, path: categoryPath }] : []),
          { name: productTitle, path: productPath },
        ])}
      />
      <p className="screen-reader-text">
        {`${productTitle} is an export-quality ${categoryName.toLowerCase()} ingredient supplied by Orbitto International from Morbi, Gujarat, India. Available for bulk supply, private label manufacturing, and international export to buyers, importers, distributors, and food brands worldwide.`}
      </p>
      <PageWrapper
        isNotHeaderTop={true}
        isHeaderRight={true}
        isTextWhite={true}
        isNavbarAppointmentBtn={true}
      >
        <>
          <ProductDetailsMain
            productIdOrSlug={productParam}
            title={productTitle}
            text={categoryName}
            type={1}
            breadcrumbItem={{ name: categoryName, path: categoryPath }}
            faqSection={{
              id: "product-detail-faq",
              title: `${productTitle} FAQ`,
              intro: `Buyer-focused answers for ${productTitle} from Orbitto International.`,
              items: faqItems,
            }}
          />
        </>
      </PageWrapper>
    </>
  );
};

export default ProductDetails;
