import { IProduct } from "@/models/IProduct";
import product1 from "@/assets/footerImage2.png";
import product2 from "@/assets/footerImage3.png";
import product3 from "@/assets/footerImage4.png";
import product4 from "@/assets/newItem2.png";
import { ProductCard } from "@/components/Products/ProductCard";
import { Paginator } from "@/components/layout/Pagination";

const products: IProduct[] = [
  {
    name: "Matte Foundation",
    description: "undetectable, flexible coverage",
    price: 50,
    discountPrice: 0,
    image: product2,
    categories: ["kids"],
  },
  {
    name: "Duo-tone Foundation",
    description: "sheer skin maker",
    price: 45,
    discountPrice: 30,
    image: product1,
    categories: ["skin care", "women"],
  },
  {
    name: "Generation Z",
    description: "breakout eraser",
    price: 120,
    discountPrice: 0,
    image: product3,
    categories: ["lip gloss"],
  },
  {
    name: "Duo-tone Foundation",
    description: "sheer skin maker",
    price: 45,
    discountPrice: 30,
    image: product1,
    categories: ["skin care", "women"],
  },
  {
    name: "Cream blush & Highlight Duo",
    description: "film form mascara",
    price: 60,
    discountPrice: 50,
    image: product4,
    categories: ["foundation"],
  },
  {
    name: "Generation Z",
    description: "breakout eraser",
    price: 120,
    discountPrice: 0,
    image: product3,
    categories: ["lip gloss"],
  },
];

export default function Products() {
  return (
    <main className="my-16">
      <section className="grid grid-cols-4 gap-y-10 place-items-center mx-16">
        {[...products, ...products].map((prod) => (
          <ProductCard key={prod.name} product={prod} />
        ))}
      </section>
      <div className="mt-10">
        <Paginator lastPage={5} />
      </div>
    </main>
  );
}