import Link from "next/link";
import { Card, CardContent } from "./ui/card";
import { Image } from "./ui/image";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface Post {
 id: number;
 title: string;
 slug: string;
 date: string;
 shortDescription: string;
 content: string;
 image: {
  src: string;
  alt: string;
 };
 author: Author;
}

export interface Author {
 name: string;
 slug: string;
 image: {
  src: string;
 };
}

interface Props {
 title: string;
 slug: string;
 date: string;
 shortDescription: string;
 image: {
  src: string;
  alt: string;
 };
 featured: boolean;
 author: Author;
}

export const BlogCard = ({ date, image, slug, title, shortDescription, featured, author }: Props) => {
 const [width, height] = featured ? [640, 400] : [320, 200];

 const blogLink = `/posty/${slug}`;

 const avatarFallback = author.name
  .split(" ")
  .map((name) => name[0])
  .join("");

 return (
  <div className="@container">
   <div className="w-full items-center grid @sm:grid-cols-1 @lg:gap-16 @lg:grid-cols-2">
    <Link href={blogLink}>
     <Image alt={image.alt} src={image.src} width={640} height={400} />
    </Link>
    <div className="p-0">
     <p className="text-xs my-4 text-gray-600">{date}</p>
     <Link className="hover:underline underline-offset-auto" href={blogLink}>
      <h2 className=" text-2xl font-bold">{title}</h2>
     </Link>
     <p className="mt-4 text-gray-700 text-sm">{shortDescription}</p>
     <div className="flex mt-2 gap-4 items-center">
      <Avatar className="w-8 h-8">
       <AvatarImage src={author.image.src} className="object-cover" alt={author.name} />
       <AvatarFallback>{avatarFallback}</AvatarFallback>
      </Avatar>
      <p className="text-sm font-semibold">{author.name}</p>
      {/* <Link href={`/o-nas#${author.slug}`} className="text-sm font-semibold hover:underline">
       {author.name}
      </Link> */}
     </div>
     <Link href={blogLink} className="mt-4 group text-sm font-semibold text-orange-500 hover:underline flex gap-2 items-center">
      Czytaj dalej <ArrowRightIcon />
     </Link>
    </div>
   </div>
  </div>
 );
};
