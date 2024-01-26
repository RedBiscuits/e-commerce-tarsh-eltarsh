import Image, { StaticImageData } from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { poppins } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

import { IProduct } from "@/models/IProduct";

type IProductCardProps = {
  product: IProduct;
};

export const ProductCard = ({ product }: IProductCardProps) => {
  const { image, name, price, description, discountPrice, categories } =
    product;

  const isDiscount = discountPrice !== 0;

  return (
    <Card
      className={cn(
        "w-11/12 flex flex-col h-[440px] border-none relative",
        poppins.className
      )}
    >
      {isDiscount && (
        <Badge className="absolute -top-4 -left-4 -rotate-12">
          Save ${price - discountPrice}
        </Badge>
      )}
      <CardHeader className=" grid place-items-center items-end rounded-md w-full p-0 h-2/3">
        <Image className="" src={image} alt={name} width={270} />
      </CardHeader>
      <CardContent className="mt-6 w-full flex flex-col items-center justify-center px-0">
        <CardTitle className="text-lg font-medium text-center">
          {name}
        </CardTitle>
        <CardDescription className="text-sm text-gray-400 ">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex gap-4 px-8">
        <Button className="text-lg w-full px-4 mt-4 hover:border-2 border-primary">
          Buy Now
        </Button>
        <div className={cn(isDiscount && "")}>
          <p className={cn(isDiscount && "line-through text-gray-400")}>
            ${price.toFixed(1)}
          </p>
          {isDiscount && <p>${discountPrice.toFixed(1)}</p>}
        </div>
      </CardFooter>
    </Card>
  );
};
