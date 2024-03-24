import { getAllArticles } from "@/api/articles/getAllArticles";
import { getArticleBySlug } from "../../../api/articles/getArticleBySlug";
import { Image } from "../../../components/ui/image";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import NextImage from "next/image";

export async function generateStaticParams() {
 const posts = await getAllArticles();

 return posts.map((post) => ({
  slug: post.slug,
 }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
 const slug = params.slug;

 const post = await getArticleBySlug(slug);

 if (!post) {
  return {
   title: "Totalne Koty",
   description: "3 gości zafiksowanych na punkcie rozwoju na wielu płaszczyznach dzieli się swoimi doświadczeniami i wiedzą.",
  };
 }

 return {
  title: `${post.title} | Totalne Koty`,
  description: post.shortDescription,
  openGraph: {
   images: post.thumbnail.url,
  },
 };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
 const post = await getArticleBySlug(params.slug);
 if (!post) {
  return null;
 }

 return (
  <article className="max-w-3xl mt-8 m-auto p-4 md:p-0">
   <h1 className="text-3xl font-bold">{post.title}</h1>

   <div className="mx-auto mt-8 mb-4">
    <Image priority={true} alt={post.thumbnail.alternativeText || ""} height="300" src={post.thumbnail.url} width="720" />
   </div>

   <div className="prose max-w-[720px]">
    <MDXRemote
     components={{
      //@ts-expect-error // No idea why this is not working
      img: (props) => <NextImage alt={props.alt || ""} width={720} height={400} {...props} />,
     }}
     source={post.content}
    />
   </div>
  </article>
 );
}
