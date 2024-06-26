import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

const contentDir = path.join(process.cwd(), "src/app/blog/_mdx-content");

export const getBlogBySlug = async (slug: string) => {
  const fileName = slug + ".mdx";
  const filePath = path.join(contentDir, fileName);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { frontmatter, content } = await compileMDX<{
    title: string;
    author: string;
    publishDate: string;
  }>({
    source: fileContent,
    options: { parseFrontmatter: true },
  });
  return {
    source: fileContent,
    frontmatter,
    content,
    slug: path.parse(fileName).name,
  };
};

export const getBlogs = async () => {
  const files = fs.readdirSync(contentDir);
  const blogs = await Promise.all(
    files.map(async (file) => await getBlogBySlug(path.parse(file).name))
  );
  return blogs;
};

export const getAllBlogSlug = () => {
  const files = fs.readdirSync(contentDir);
  const slugs = files.map((file) => ({ slug: path.parse(file).name }));
  return slugs;
};
