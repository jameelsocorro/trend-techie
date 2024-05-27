import { getBlogs } from "@/lib/mdxUtils";
import Link from "next/link";

export default async function BlogsPage() {
  const blogs = await getBlogs();
  return (
    <main>
      {blogs.map((blog, i) => (
        <article key={i} className="grid grid-cols-4 text-3xl">
          <h1>{blog.frontmatter.title}</h1>
          <p>{blog.frontmatter.author}</p>
          <p>{blog.frontmatter.publishDate}</p>
          <Link href={`/blog/${blog.slug}`}>Read More</Link>
        </article>
      ))}
    </main>
  );
}
