import Image from "next/image";
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
import { PiWarningCircle } from "react-icons/pi";

type IProductCardProps = {
  product: IProduct;
};

export const ProductCard = ({ product }: IProductCardProps) => {
  const { image, name, price, description, discountPrice, quantity } = product;

  const isDiscount = discountPrice !== 0;
  const inStock = quantity > 0;

  return (
    <Card
      className={cn(
        "w-11/12 flex flex-col items-center justify-end h-[440px] border-none relative cursor-pointer",
        poppins.className
      )}
    >
      <CardHeader
        className={cn(
          " h-[250px w-[250px] relative flex justify-end items-end rounded-md p-0"
        )}
      >
        <Image
          className="object-cover"
          src={image}
          alt={name}
          width={250}
          height={250}
        />
        {isDiscount && (
          <Badge className="absolute -top-4 -left-4 -rotate-12">
            Save ${price - discountPrice}
          </Badge>
        )}
      </CardHeader>
      <CardContent
        className={cn(
          "mt-2 w-full flex flex-col items-center justify-center px-0",
          inStock ? "mb-0" : "-mb-2"
        )}
      >
        <CardTitle className="text-lg font-medium text-center">
          {name}
        </CardTitle>
        <CardDescription className="text-sm text-gray-400 ">
          {description}
        </CardDescription>
        {!inStock && (
          <Badge
            variant={"default"}
            className="w-1/2 mx-auto flex gap-2 items-center bg-transparent text-destructive"
          >
            <PiWarningCircle size={18} />
            Out of stock
          </Badge>
        )}
      </CardContent>
      <CardFooter className="flex gap-4 px-8">
        <Button
          className={cn(
            "text-lg w-full px-4 border-2 border-primary",
            inStock ? "mt-4" : "mt-0"
          )}
        >
          Add To Cart
        </Button>
        <div className={cn(isDiscount && "flex flex-col items-end")}>
          <p
            className={cn(
              isDiscount && "line-through text-gray-400 text-sm",
              !isDiscount && "mt-4"
            )}
          >
            ${price.toFixed(1)}
          </p>
          {isDiscount && <p>${discountPrice.toFixed(1)}</p>}
        </div>
      </CardFooter>
    </Card>
  );
};
