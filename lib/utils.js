import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


export const navlinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Offers",
    path: "/offers",
  },
  // {
  //   name: "Blogs",
  //   path: "/blogs",
  // }
];

