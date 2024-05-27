import { getAllBlogSlug, getBlogBySlug } from "@/lib/mdxUtil";

export async function generateStaticParams() {
  return getAllBlogSlug();
}

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await getBlogBySlug(params.slug);
  return (
    <main className="prose">
      <article>{blog.content}</article>
    </main>
  );
}
