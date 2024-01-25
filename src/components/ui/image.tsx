import clsx from "clsx";
import NextImage from "next/image";
import { ImageProps } from "next/image";

export const Image = ({ className, ...props }: ImageProps) => {
 return <NextImage className={clsx("aspect-[357/200] rounded-lg object-cover", className)} {...props} />;
};
