import { CarouselWithThmbs } from "@/components/SingleProduct/CarouselWithThmbs";
import product1 from "@/assets/footerImage2.png";
import product2 from "@/assets/footerImage3.png";
import product3 from "@/assets/footerImage4.png";
import product4 from "@/assets/newItem2.png";
import { cn } from "@/lib/utils";
import { poppins, serif } from "@/lib/fonts";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { createStars } from "@/lib/createStarts";
import { ReviewCard } from "@/components/SingleProduct/ReviewCard";
import { ReviewInput } from "@/components/SingleProduct/ReviewInput";
import { ForWithEmptyBlock } from "@/lib/ForWithEmptyBlock";

export default function ProductPage() {
  const isDiscount = item.discountPrice !== 0;

  return (
    <section className="grid grid-cols-2 gap-x-8 m-16 mt-8 items-start justify-center">
      <div className="w-[35vw] mx-auto">
        <CarouselWithThmbs images={Images} />
      </div>

      <div className={cn("p-4", poppins.className)}>
        <p className="text-4xl mb-2">{item.name}</p>
        <p className="">{item.description}</p>
        <div className="flex items-center justify-start gap-2 mt-2">
          <div className="flex items-center justify-start ">
            {createStars(item.rating)}
          </div>
          <p className="text-sm font-semibold">({item.rating})</p>
          <p className="text-sm">7 reviews</p>
        </div>

        <div>
          <p className="text-2xl mt-6">Product Details</p>
          <p className="mt-2 text-gray-500 text-sm">
            What it is: In the land between bare skin and makeup makeup exists
            the imperceptible wash of color that is Perfecting Skin Tint
          </p>
          <Separator className="my-4" />
          <p className="text-xl mb-2">Why it is special :</p>
          <ul className="ml-8 list-disc text-sm space-y-2">
            <li>
              Breathable, ultra-thin formula evens out skin’s appearance for a
              smooth, dewy finish
            </li>
            <li>
              Diamond Powder gives a brightening, soft-focus effect and
              minimizes the appearance of pores, while Glycerin moisturizes skin
            </li>
            <li>
              Breathable, ultra-thin formula evens out skin’s appearance for a
              smooth, dewy finish
            </li>
            <li>
              Diamond Powder gives a brightening, soft-focus effect and
              minimizes the appearance of pores, while Glycerin moisturizes skin
            </li>
          </ul>
        </div>

        {(() => {
          if (isDiscount) {
            return (
              <>
                <div className="flex items-center gap-2 justify-start mt-8 px-2">
                  <div className="flex flex-col">
                    <p className={cn("text-gray-400 line-through")}>
                      ${item.price.toFixed(1)}
                    </p>
                    <p className={cn("text-2xl")}>
                      ${item.discountPrice.toFixed(1)}
                    </p>
                  </div>
                  <Badge className="text-black bg-rose-100">
                    <p>save ${item.price - item.discountPrice}</p>
                  </Badge>
                </div>
                <Button
                  className={cn("w-full", "border-2 border-primary mt-2")}
                >
                  Add To Cart
                </Button>
              </>
            );
          } else {
            return (
              <>
                <div className="flex items-center justify-evenly mt-8 gap-4 ">
                  <p className={cn("text-2xl")}>${item.price.toFixed(1)}</p>
                  <Button className={cn("w-3/4", "border-2 border-primary")}>
                    Add To Cart
                  </Button>
                </div>
              </>
            );
          }
        })()}
      </div>
      <div className={cn("col-span-2 mt-8 mx-16", poppins.className)}>
        <p className="text-3xl mb-4">Reviews</p>
        <div className="space-y-2 mb-8">
          <ForWithEmptyBlock items={reviews} empty={<p>No reviews yet</p>}>
            {(review) => <ReviewCard key={review.name} {...review} />}
          </ForWithEmptyBlock>
        </div>
        <ReviewInput />
      </div>
    </section>
  );
}

const Images = [product1, product2, product3, product4];
const item = {
  name: "Matte Foundation",
  description: "undetectable, flexible coverage",
  price: 50,
  discountPrice: 30,
  categories: ["kids"],
  rating: 4.7,
};

const reviews = [
  {
    name: "sara ahmed",
    title: "great product",
    text: "I'm surprised I don't see this recommended for older skin all the time. I love the way this floats over my pores instead of highlighting them like foundations with more coverage. I can't believe it took me so ... ",
    rating: 4.5,
  },
  {
    name: "sara ahmed",
    title: "great product",
    text: "I'm surprised I don't see this recommended for older skin all the time. I love the way this floats over my pores instead of highlighting them like foundations with more coverage. I can't believe it took me so ... ",
    rating: 4.5,
  },
  {
    name: "sara ahmed",
    title: "great product",
    text: "I'm surprised I don't see this recommended for older skin all the time. I love the way this floats over my pores instead of highlighting them like foundations with more coverage. I can't believe it took me so ... ",
    rating: 4.5,
  },
  {
    name: "sara ahmed",
    title: "great product",
    text: "I'm surprised I don't see this recommended for older skin all the time. I love the way this floats over my pores instead of highlighting them like foundations with more coverage. I can't believe it took me so ... ",
    rating: 4.5,
  },
  {
    name: "sara ahmed",
    title: "great product",
    text: "I'm surprised I don't see this recommended for older skin all the time. I love the way this floats over my pores instead of highlighting them like foundations with more coverage. I can't believe it took me so ... ",
    rating: 4.5,
  },
];
