import { cn } from "@/lib/utils";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import Image from "next/image";

const components = {};

export const Mdx = (props: MDXRemoteProps) => {
  return (
    <MDXRemote
      {...props}
      options={{ parseFrontmatter: true }}
      components={components}
    />
  );
};
