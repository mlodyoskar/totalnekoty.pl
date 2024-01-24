import { Card, CardContent } from "./ui/card";
import Image from "next/image";
interface Props {
 title: string;
 slug: string;
 date: string;
 shortDescription: string;
 image: string;
}

export const BlogCard = ({ date, image, slug, title, shortDescription }: Props) => {
 return (
  <Card className="w-full">
   <Image
    alt="Asics Gel-Nimbus 26"
    className="w-full h-auto"
    height="200"
    src="/placeholder.svg"
    style={{
     aspectRatio: "350/200",
     objectFit: "cover",
    }}
    width="350"
   />
   <CardContent>
    <h3 className="text-lg font-bold">{title}</h3>
    <p className="text-sm text-gray-500">16 stycznia 2024 • 6 min czytania</p>
    <p className="mt-2 text-gray-700">
     Asics Gel-Nimbus 25 zrobił furorę. Czas na jego kontynuację w postaci Nimbusa numer 26. Co się zmieniło? Tym razem niewiele (czego można było się
     spodziewać), ale...
    </p>
   </CardContent>
  </Card>
 );
};
