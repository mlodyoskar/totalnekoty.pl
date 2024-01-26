import { BlogCard } from "@/components/blog-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Image } from "@/components/ui/image";
import { Slug, getPost } from "@/content/posts";
import { Metadata, ResolvingMetadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
 const slug = params.slug;

 const post = getPost(slug);

 return {
  title: `${post.title} | Totalne Koty`,
  //   openGraph: {
  //    images: ["/some-specific-page-image.jpg", ...previousImages],
  //   },
 };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
 const post = getPost(params.slug);

 if (!post) {
  return null;
 }

 return (
  <article className="max-w-2xl mt-8 m-auto p-4 md:p-0 grid">
   <h1 className="text-3xl font-bold">{post.title}</h1>

   <div className="mx-auto mt-8 mb-4">
    <Image alt={post.image.alt} height="300" src={post.image.src} width="720" />
   </div>

   <div className="prose ">
    <MDXRemote source={post.content} />
   </div>
  </article>
 );
}
