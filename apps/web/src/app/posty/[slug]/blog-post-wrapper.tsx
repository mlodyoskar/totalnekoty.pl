"use client";

import { motion } from "framer-motion";

type BlogPostWrapperProps = {
 children: React.ReactNode;
};

export const BlogPostWrapper = ({ children }: BlogPostWrapperProps) => {
 return (
  <motion.article initial={{ opacity: 0.8, y: -20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mt-8 m-auto p-4 md:p-0">
   {children}
  </motion.article>
 );
};
