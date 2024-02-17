import Link from "next/link";

export const Header = () => {
 return (
  <header className="flex justify-center items-center py-6">
   <div className="flex items-center">
    {/* <Link href="/" className="text-orange-500">
     O nas
    </Link> */}
   </div>
   <Link href="/" className="text-2xl mx-10 font-bold">
    Totalne Koty 🦁
   </Link>
   <div>
    {/* <Link href="/" className="text-orange-500">
     Kontakt
    </Link> */}
   </div>
  </header>
 );
};
