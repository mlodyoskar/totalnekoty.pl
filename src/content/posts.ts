import { first, second, third } from "./articles";

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

export const posts = [
 {
  id: 0,
  title: "2023 - Best Year of My Life",
  slug: "podsumowanie-roku-2023",
  date: "7 stycznia 2024",
  content: third,
  shortDescription: "Jak zacząłem biegać?",
  image: {
   src: "/images/podsumowanie.png",
   alt: "Placeholder",
  },
  author: {
   name: "Oskar Puchalski",
   slug: "oskar-puchalski",
   image: {
    src: "/images/avatars/OP.webp",
   },
  },
 },
 {
  id: 1,
  title: "Dlaczego zacząłem biegać?",
  slug: "dlaczego-zaczalem-biegac",
  date: "19 stycznia 2024",
  content: first,
  shortDescription: "Jak zacząłem biegać?",
  image: {
   src: "/images/bieganie.png",
   alt: "Placeholder",
  },
  author: {
   name: "Jakub Bryska",
   slug: "jakub-bryska",
   image: {
    src: "/images/avatars/JB.webp",
   },
  },
 },
 {
  id: 2,
  title: "Jak zaplanować nowy rok i wyznaczać cele?",
  slug: "jak-zaplanowalem-nowy-rok",
  date: "25 stycznia 2024",
  shortDescription:
   "Nowy rok to idealny moment na postawienie sobie celów, do których będziemy dążyć. Sam od paru lat ustalam sobie cele, z większą lub mniejszą skutecznością. Na przestrzeni ostatnich lat wielokrotnie zmieniałem sposób w jaki podchodziłem do wyznaczania celów i myślę że każdy kolejny rok pozwalał mi realizować coraz więcej. ",
  content: second,
  image: {
   src: "/images/gora.jpeg",
   alt: "Placeholder",
  },
  author: {
   name: "Oskar Puchalski",
   slug: "oskar-puchalski",
   image: {
    src: "/images/avatars/OP.webp",
   },
  },
 },
] as const;

export type Slug = (typeof posts)[number]["slug"];

export const getAllPosts = () => {
 return [...posts].sort((a, b) => {
  return b.id - a.id;
 });
};

export const getPost = (slug: string) => {
 return posts.find((post) => post.slug === slug);
};
