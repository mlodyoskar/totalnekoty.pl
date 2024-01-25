import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Image } from "./ui/image";

const linkedinLink = "https://www.linkedin.com/in/oskarpuchalski/";

export const Footer = () => {
 return (
  <div className="bg-white text-gray-800">
   <div className="max-w-7xl mx-auto p-8">
    <hr className="my-8" />
    <div className="text-center">
     <h3 className="text-2xl font-bold mb-4">Totalne Koty 🦁</h3>

     <div className="flex justify-center items-center">
      <div className="flex space-x-4 mb-6">
       <Link className="text-orange-500 hover:underline" href="/o-nas">
        O nas
       </Link>
       <Link className="text-orange-500 hover:underline" href="/kontakt">
        Kontakt
       </Link>
      </div>
     </div>
     <div className="flex flex-col md:flex-row items-center justify-between">
      <p className="text-sm text-gray-600">
       Realizacja projektu:{" "}
       <Link className="text-orange-500" href={linkedinLink}>
        Oskar Puchalski
       </Link>
      </p>
      <p className="text-sm text-gray-600">© 2024 totalnekoty.pl. Wszystkie prawa zastrzeżone.</p>
     </div>
    </div>
   </div>
  </div>
 );
};
