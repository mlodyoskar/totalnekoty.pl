import { getAllArticles } from "@/api/articles/getAllArticles";
import { BlogCard } from "@/components/blog-card";

export default async function HomePage() {
 const posts = await getAllArticles();
 const sortedPosts = posts
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .map((p) => {
   return {
    ...p,
    date: new Date(p.date).toLocaleDateString("pl-PL", { year: "numeric", month: "long", day: "numeric" }),
   };
  });
 const [featuredPost, ...restPosts] = sortedPosts;

 return (
  <div className="max-w-6xl m-auto p-2 md:p-0 grid">
   <div className="mb-16">
    <BlogCard
     {...featuredPost}
     title={featuredPost.title}
     slug={featuredPost.slug}
     shortDescription={featuredPost.shortDescription}
     date={featuredPost.date}
     image={{ src: featuredPost.thumbnail.url, alt: featuredPost.thumbnail.alternativeText }}
     author={{
      name: featuredPost.author.name,
      slug: featuredPost.author.slug,
      image: { src: featuredPost.author.avatar.url },
     }}
     featured
    />
   </div>

   <section className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-16">
    {restPosts.map(({ author, id, date, thumbnail, title, shortDescription, slug }) => (
     <BlogCard
      key={id}
      author={{
       name: author.name,
       slug: slug,
       image: { src: author.avatar.url },
      }}
      featured={false}
      title={title}
      shortDescription={shortDescription}
      slug={slug}
      date={date}
      image={{ src: thumbnail.url, alt: thumbnail.alternativeText }}
     />
    ))}
   </section>
  </div>
 );
}
