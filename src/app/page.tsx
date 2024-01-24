import { BlogCard } from "@/components/blog-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const posts = [
 {
  id: 1,
  title: "Wpływ alkoholu na organizm człowieka",
  slug: "wplyw-alkoholu-na-organizm-czlowieka",
  date: "2021-04-05",
  shortDescription:
   "Alkohol jest substancją psychoaktywną, która wpływa na organizm człowieka. Wpływ alkoholu na organizm człowieka jest zależny od wielu czynników, takich jak płeć, waga, wiek, stan zdrowia, ilość wypitego alkoholu, czas trwania spożywania alkoholu, czy też spożywanie alkoholu na czczo.",
  image: "/images/alkohol.jpg",
 },
 {
  id: 2,
  title: "Post 2",
  slug: "post-2",
  date: "2021-04-06",
  shortDescription: "This is the second post.",
  image: "/images/post2.jpg",
 },
 {
  id: 3,
  title: "Post 3",
  slug: "post-3",
  date: "2021-04-07",
  shortDescription: "This is the third post.",
  image: "/images/post3.jpg",
 },
 {
  id: 4,
  title: "Post 4",
  slug: "post-4",
  date: "2021-04-08",
  shortDescription: "This is the fourth post.",
  image: "/images/post4.jpg",
 },
 {
  id: 5,
  title: "Post 5",
  slug: "post-5",
  date: "2021-04-09",
  shortDescription: "This is the fifth post.",
  image: "/images/post5.jpg",
 },
];

export default function HomePage() {
 return (
  <div className="max-w-4xl m-auto grid">
   <div className="grid grid-cols-2 gap-16 my-20 items-center">
    <Image
     alt="Featured article"
     className="w-full h-auto rounded-lg"
     height="400"
     src="/placeholder.svg"
     style={{
      aspectRatio: "357/200",
      objectFit: "cover",
     }}
     width="640"
    />
    <div>
     <p className="text-xs mt-4 text-gray-600">20 stycznia 2024 • 6 min czytania</p>

     <h2 className=" text-2xl font-bold">Najważniejsze lekcje z książki "Finansowy Ninja"</h2>
     <p className="mt-4 text-gray-700 text-sm">
      Buty do codziennego biegania z bardzo dużą amortyzacją - przegląd wiosna 2024 Uniwersalność, to słowo klucz, które najlepiej opisuje te buty. To
      najbardziej wszechstronne buty do biegania przede wszystkim po twardych, głównie miejskich nawierzchniach. Jednocześnie przyzwyczajone poradzą
      sobie też z wygodnego asfaltu zbiegiesz na szutrowe drogi. Doskonale sprawdzają się zarówno podczas codziennych, spokojnych treningów, jak i
      podczas treningów o większej intensywności.
     </p>
     <Link href="/posts/asd" className="mt-4 text-sm font-semibold text-orange-500 hover:underline flex gap-2 items-center">
      Czytaj dalej <ArrowRightIcon />
     </Link>
    </div>
   </div>
   <section className="grid grid-cols-3 gap-4">
    {posts.map((post) => (
     <BlogCard key={post.id} {...post} />
    ))}
   </section>
   <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
    {/* {posts.slice(2, 14).map((post) => (
       <PostList key={post.id} post={post} aspect="square" />
      ))} */}
   </div>
   <div className="mt-10 flex justify-center"></div>
  </div>
 );
}
