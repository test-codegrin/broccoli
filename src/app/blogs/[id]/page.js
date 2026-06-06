import BlogDetailsMain from "@/components/layout/main/BlogDetailsMain";
import StructuredData from "@/components/seo/StructuredData";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import {
  buildSeoMetadata,
  getBreadcrumbSchema,
  getBlogPostingSchema,
  getWebPageSchema,
  stripHtml,
  truncateText,
} from "@/libs/seo";
import { getPublicBlogById } from "@/libs/supabase/queries/blogs";
import React from "react";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata({ params }) {
  const { data: blog } = await getPublicBlogById(params?.id);

  if (!blog) {
    return buildSeoMetadata({
      title: "Article Not Found",
      description: "The requested Orbitto International article could not be found.",
      path: "/blogs",
      noIndex: true,
      openGraphType: "article",
    });
  }

  const description = truncateText(
    blog.excerpt || stripHtml(blog.blog_description || ""),
    165
  );

  return buildSeoMetadata({
    title: `${blog.title} | Orbitto International`,
    description,
    path: `/blogs/${blog.id}`,
    images: blog.image,
    keywords: [
      blog.title,
      blog.category,
      "Orbitto International insights",
      "food ingredient article India",
      "food ingredient export blog",
      "food ingredient sourcing guide India",
    ],
    openGraphType: "article",
  });
}

const BlogDetails = async ({ params }) => {
  const { data: blog } = await getPublicBlogById(params?.id);
  const blogTitle = blog?.title || "Orbitto Article";
  const blogPath = `/blogs/${blog?.id || params?.id}`;

  const blogPosting = getBlogPostingSchema(blog);
  const blogPostingWithSpeakable = blog
    ? {
        ...blogPosting,
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [".blog-details-desc p", ".blog-details-desc h2", ".blog-details-desc h3"],
        },
      }
    : blogPosting;

  return (
    <>
      <StructuredData
        id="blog-detail-schema"
        data={blogPostingWithSpeakable}
      />
      <StructuredData
        id="blog-detail-webpage-schema"
        data={getWebPageSchema({
          title: blogTitle,
          description: truncateText(blog?.excerpt || stripHtml(blog?.blog_description || ""), 160),
          path: blogPath,
          type: "Article",
        })}
      />
      <StructuredData
        id="blog-detail-breadcrumb-schema"
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blogs", path: "/blogs" },
          { name: blogTitle, path: blogPath },
        ])}
      />
      <PageWrapper
        isNotHeaderTop={true}
        isHeaderRight={true}
        isTextWhite={true}
        isNavbarAppointmentBtn={true}
      >
        <BlogDetailsMain title={blogTitle} />
      </PageWrapper>
    </>
  );
};

export default BlogDetails;
