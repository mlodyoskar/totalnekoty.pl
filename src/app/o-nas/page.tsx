import Image from "next/image";
import Link from "next/link";
import { JSX, SVGProps } from "react";

const AboutPage = () => {
 return (
  <section className="w-full py-12">
   <div className="container px-4 md:px-6">
    <div className="text-center space-y-3">
     <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Poznaj nas bliżej</h2>
     <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
      We are a team of dedicated professionals, ready to do what ever it takes to make your business grow.
     </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
     <div className="flex flex-col items-center space-y-4">
      <img
       alt="Team Member 1"
       className="w-48 h-48 rounded-full object-cover object-center"
       height="200"
       src="/placeholder.svg"
       style={{
        aspectRatio: "200/200",
        objectFit: "cover",
       }}
       width="200"
      />
      <h3 className="text-2xl font-bold">Oskar Puchalski</h3>
      <p className="text-center text-gray-500">Software Engineer</p>
      <p className="text-center">
       John is a computer science graduate with over 5 years of experience in the tech industry. He specializes in front-end development.
      </p>
      <div className="flex space-x-4">
       <Link href="#">
        <TwitterIcon className="h-6 w-6 text-blue-500" />
       </Link>
       <Link href="#">
        <LinkedinIcon className="h-6 w-6 text-blue-700" />
       </Link>
       <Link href="#">
        <GithubIcon className="h-6 w-6 text-gray-900 dark:text-gray-100" />
       </Link>
      </div>
     </div>
     <div className="flex flex-col items-center space-y-4">
      <img
       alt="Team Member 2"
       className="w-48 h-48 rounded-full object-cover object-center"
       height="200"
       src="/placeholder.svg"
       style={{
        aspectRatio: "200/200",
        objectFit: "cover",
       }}
       width="200"
      />
      <h3 className="text-2xl font-bold">Jakub Bryska</h3>
      <p className="text-center text-gray-500">Product Designer</p>
      <p className="text-center">Jane is a product designer with a passion for creating intuitive, dynamic user experiences.</p>
      <div className="flex space-x-4">
       <Link href="#">
        <TwitterIcon className="h-6 w-6 text-blue-500" />
       </Link>
       <Link href="#">
        <LinkedinIcon className="h-6 w-6 text-blue-700" />
       </Link>
       <Link href="#">
        <DribbbleIcon className="h-6 w-6 text-pink-500" />
       </Link>
      </div>
     </div>
     <div className="flex flex-col items-center space-y-4">
      <Image
       alt="Jakub Woźniak"
       className="w-48 h-48 rounded-full object-cover object-center"
       height="200"
       src="/images/avatars/OP.webp"
       style={{
        aspectRatio: "200/200",
        objectFit: "cover",
       }}
       width="200"
      />
      <h3 className="text-2xl font-bold">Jakub Woźniak</h3>
      <p className="text-center text-gray-500">Project Manager</p>
      <p className="text-center">
       Robert is a project manager with a knack for keeping the team on track and ensuring all projects are delivered on time.
      </p>
      <div className="flex space-x-4">
       <Link href="#">
        <TwitterIcon className="h-6 w-6 text-blue-500" />
       </Link>
       <Link href="#">
        <LinkedinIcon className="h-6 w-6 text-blue-700" />
       </Link>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
};

function DribbbleIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
 return (
  <svg
   {...props}
   xmlns="http://www.w3.org/2000/svg"
   width="24"
   height="24"
   viewBox="0 0 24 24"
   fill="none"
   stroke="currentColor"
   strokeWidth="2"
   strokeLinecap="round"
   strokeLinejoin="round"
  >
   <circle cx="12" cy="12" r="10" />
   <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
   <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
   <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
  </svg>
 );
}

function GithubIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
 return (
  <svg
   {...props}
   xmlns="http://www.w3.org/2000/svg"
   width="24"
   height="24"
   viewBox="0 0 24 24"
   fill="none"
   stroke="currentColor"
   strokeWidth="2"
   strokeLinecap="round"
   strokeLinejoin="round"
  >
   <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
   <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
 );
}

function LinkedinIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
 return (
  <svg
   {...props}
   xmlns="http://www.w3.org/2000/svg"
   width="24"
   height="24"
   viewBox="0 0 24 24"
   fill="none"
   stroke="currentColor"
   strokeWidth="2"
   strokeLinecap="round"
   strokeLinejoin="round"
  >
   <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
   <rect width="4" height="12" x="2" y="9" />
   <circle cx="4" cy="4" r="2" />
  </svg>
 );
}

function TwitterIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
 return (
  <svg
   {...props}
   xmlns="http://www.w3.org/2000/svg"
   width="24"
   height="24"
   viewBox="0 0 24 24"
   fill="none"
   stroke="currentColor"
   strokeWidth="2"
   strokeLinecap="round"
   strokeLinejoin="round"
  >
   <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
 );
}

export default AboutPage;
