import { Mdx } from "@/components/ui/mdx";
import { getAllBlogSlug, getBlogBySlug } from "@/lib/mdxUtils";
import { Suspense } from "react";

type BlogPageProps = {
  params: { slug: string };
};

export default async function BlogPage({ params }: BlogPageProps) {
  const blog = await getBlogBySlug(params.slug);
  return (
    <main className="prose">
      <Mdx source={blog.source} />
    </main>
  );
}
