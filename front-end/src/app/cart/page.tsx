import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { poppins } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import product1 from "@/assets/footerImage2.png";
import product2 from "@/assets/footerImage3.png";
import product3 from "@/assets/footerImage4.png";
import product4 from "@/assets/newItem2.png";
import { IProduct } from "@/models/IProduct";
import { CartItem } from "@/components/Cart/CartItem";

export default function Cart() {
  return (
    <section
      className={cn(
        "mb-28 mt-0 mx-10 grid grid-cols-3 h-[90vh]",
        poppins.className
      )}
    >
      <div className="col-span-3 flex items-center gap-6">
        <h2 className="font-bold text-3xl">Cart</h2>
        <p className="text-gray-400">{products.length} items</p>
      </div>
      <div className="col-span-2 mr-2 overflow-y-scroll scrollbar scrollbar-track-rose-50 scrollbar-track-rounded-md scrollbar-thumb-rounded-full scrollbar-thumb-primary">
        <div className="space-y-6 mt-6">
          {products.map((product) => (
            <CartItem key={product.name} product={product} />
          ))}
        </div>
      </div>

      <Card className={cn("col-span-1 pb-10")}>
        <CardHeader>
          <CardTitle className={cn("text-xl")}>Order Summary</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-x-36 pb-0 text-sm">
          <div className="space-y-6">
            <p>Price</p>
            <p>Discount</p>
            <p>Shipping</p>
            <p>Promo Code</p>
          </div>
          <div className="space-y-6">
            <p>$100</p>
            <p>$10</p>
            <p>$10</p>
            <p>$10</p>
          </div>
        </CardContent>
        <Separator className="w-11/12 mx-auto my-10" />
        <CardFooter className="grid grid-cols-2 gap-x-36 gap-y-8 text-sm">
          <div className="space-y-6">
            <p>Total</p>
            <p>Delivered by</p>
          </div>
          <div className="space-y-6 font-semibold">
            <p>$100</p>
            <p>19 Feb, 2024</p>
          </div>
          <Input
            className="border-primary col-span-2"
            type="text"
            id="title"
            placeholder="Coupon code"
          />
          <Button className="col-span-2 border-primary border">Checkout</Button>
        </CardFooter>
      </Card>
    </section>
  );
}

const products: IProduct[] = [
  {
    name: "Matte Foundation",
    description: "undetectable, flexible coverage",
    price: 50,
    discountPrice: 0,
    image: product2,
    categories: ["kids"],
    quantity: 0,
  },
  {
    name: "Duo-tone Foundation",
    description: "sheer skin maker",
    price: 45,
    discountPrice: 30,
    image: product1,
    categories: ["skin care", "women"],
    quantity: 10,
  },
  {
    name: "Generation Z",
    description: "breakout eraser",
    price: 120,
    discountPrice: 0,
    image: product3,
    categories: ["lip gloss"],
    quantity: 10,
  },
  {
    name: "Duo-tone Foundation",
    description: "sheer skin maker",
    price: 45,
    discountPrice: 30,
    image: product1,
    categories: ["skin care", "women"],
    quantity: 0,
  },
  {
    name: "Cream blush & Highlight",
    description: "film form mascara",
    price: 60,
    discountPrice: 50,
    image: product4,
    categories: ["foundation"],
    quantity: 0,
  },
  {
    name: "Generation Z",
    description: "breakout eraser",
    price: 120,
    discountPrice: 0,
    image: product3,
    categories: ["lip gloss"],
    quantity: 40,
  },
];
