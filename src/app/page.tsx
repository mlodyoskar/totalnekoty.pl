import { BlogCard } from "@/components/blog-card";
import { getAllPosts } from "@/content/posts";

export default function HomePage() {
 const allPosts = getAllPosts();
 const featuredPost = allPosts[0];

 return (
  <div className="max-w-6xl m-auto p-6 md:p-0 grid">
   <div className="mb-16">
    <BlogCard featured {...featuredPost} />
   </div>
   <section className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-16">
    {allPosts.slice(1, 10).map((post) => (
     <BlogCard key={post.id} featured={false} {...post} />
    ))}
   </section>
  </div>
 );
}
