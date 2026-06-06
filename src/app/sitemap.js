import {
  buildProductCategoryPath,
  indexedProductCategorySlugs,
} from "@/libs/catalog";
import { getPublicBlogsForSitemap } from "@/libs/supabase/queries/blogs";
import { getPublicCategories } from "@/libs/supabase/queries/categories";
import { getSiteUrl } from "@/libs/seo";
import { slugify } from "@/libs/supabase/queries/products";
import { supabaseAdmin } from "@/libs/supabase/admin";

const staticRoutes = [
  {
    path: "/",
    changeFrequency: "weekly",
    priority: 1,
    lastModified: new Date("2025-06-01"),
  },
  {
    path: "/about",
    changeFrequency: "monthly",
    priority: 0.8,
    lastModified: new Date("2025-05-01"),
  },
  {
    path: "/products",
    changeFrequency: "daily",
    priority: 0.9,
    lastModified: new Date("2025-06-01"),
  },
  {
    path: "/blogs",
    changeFrequency: "weekly",
    priority: 0.7,
    lastModified: new Date("2025-06-01"),
  },
  {
    path: "/application",
    changeFrequency: "monthly",
    priority: 0.7,
    lastModified: new Date("2025-05-01"),
  },
  {
    path: "/contact",
    changeFrequency: "monthly",
    priority: 0.8,
    lastModified: new Date("2025-05-01"),
  },
];

export default async function sitemap() {
  const siteUrl = getSiteUrl();

  const [productsResult, categoriesResult, blogsResult] = await Promise.all([
    supabaseAdmin
      .from("products")
      .select("products_id, product_name, updated_at, created_at")
      .order("created_at", { ascending: false }),
    getPublicCategories(),
    getPublicBlogsForSitemap(),
  ]);

  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const productEntries = (productsResult.data || []).map((product) => ({
    url: `${siteUrl}/products/${slugify(product.product_name) || product.products_id}`,
    lastModified: product.updated_at || product.created_at || new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const categorySlugs = Array.from(
    new Set([
      ...indexedProductCategorySlugs,
      ...((categoriesResult.data || []).map((category) => category.slug)),
    ])
  );

  const categoryEntries = categorySlugs.map((categorySlug) => ({
    url: `${siteUrl}${buildProductCategoryPath(categorySlug)}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const blogEntries = (blogsResult.data || []).map((blog) => ({
    url: `${siteUrl}/blogs/${blog.blog_detail_id}`,
    lastModified: blog.updated_at || blog.created_at || new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...categoryEntries, ...productEntries, ...blogEntries];
}
