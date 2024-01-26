import { StaticImageData } from "next/image";

export type IProduct = {
  name: string;
  price: number;
  description: string;
  image: StaticImageData;
  discountPrice: number;
  categories: string[];
};
