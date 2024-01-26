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
import { FaStar } from "react-icons/fa";
import { poppins } from "@/lib/fonts";
import { cn } from "@/lib/utils";

type IProductCardProps = {
  name: string;
  category: string;
  price: string;
  rating: number;
  image: StaticImageData;
};

export const ProductCard = ({
  name,
  category,
  image,
  price,
  rating,
}: IProductCardProps) => {
  return (
    <Card className={cn("w-1/4 border-none", poppins.className)}>
      <CardHeader className="bg-rose-100 grid place-items-center rounded-md">
        <Image src={image} alt={name} width={230} />
      </CardHeader>
      <CardContent className="mt-6">
        <CardTitle className="text-xl font-medium flex justify-between items-start">
          {name} <span>{`$${parseFloat(price).toFixed(1)}`}</span>
        </CardTitle>
        <CardDescription className="text-lg">{category}</CardDescription>
        <div className="flex gap-1 my-6">
          {Array(rating)
            .fill(Math.random())
            .map((_) => (
              <FaStar className="text-yellow-300 text-xl" key={_} />
            ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="text-xl w-full py-3 h-auto">Buy Now</Button>
      </CardFooter>
    </Card>
  );
};
