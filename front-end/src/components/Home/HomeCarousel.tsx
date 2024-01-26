"use client";

import item1 from "@/assets/seasonalOfferProduct1.png";
import item2 from "@/assets/seasonalOfferProduct2.png";
import item3 from "@/assets/seasonalOfferProduct3.png";
import { Dispatch, Fragment, SetStateAction, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import { poppins, serif } from "@/lib/fonts";
import { Button } from "../ui/button";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Carousel } from "../ui/FadeCarousel";

type Item = {
  name: string;
  text: string;
  price: number;
  image: StaticImageData;
};

export const HomeCarousel = () => {
  const [currentItem, setCurrentItem] = useState(0);

  return (
    <section className={cn("relative pb-32", poppins.className)}>
      <Carousel className="grid grid-cols-5 items-start justify-center px-16">
        <div className="col-span-2 relative z-10">
          <p className="text-[40px] font-bold mb-6 text-blue-900">
            {products[currentItem].name}
          </p>
          <p className="mb-6 text-base w-2/3">{products[currentItem].text}</p>
          <Button className="p-6 mb-16">
            Shop {products[currentItem].name}
          </Button>
          <Carousel.Dots />
        </div>
        <Carousel.CarouselItems className="col-span-2 col-start-3 mix-blend-multiply z-10">
          {products.map((product) => (
            <div className="flex" key={product.name}>
              <div className="mt-80">
                <p className="text-gray-400">Price</p>
                <p className="text-blue-900">${product.price}</p>
              </div>
              <Image
                width={500}
                className="mix-blend-multiply -ml-32"
                src={product.image}
                alt={product.name}
              />
            </div>
          ))}
        </Carousel.CarouselItems>

        <Carousel.CarouselData>
          {({ currentItem, count }) => {
            if (count === 0) return <></>;
            return (
              <div className="col-span-1 col-start-5 space-y-8 relative z-10">
                <CarouselThumb index={(currentItem + 1) % count} />
                <CarouselThumb index={(currentItem - 1 + count) % count} />
                <div className="flex gap-4">
                  <Carousel.PrvButton />
                  <Carousel.NextButton />
                </div>
              </div>
            );
          }}
        </Carousel.CarouselData>
      </Carousel>

      <svg
        className="absolute bottom-0"
        id="wave"
        viewBox="0 0 1440 420"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stop-color="rgba(255, 232, 206, 1)" offset="0%"></stop>
            <stop stop-color="rgba(255, 255, 255, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#sw-gradient-0)"
          d="M0,84L60,119C120,154,240,224,360,238C480,252,600,210,720,217C840,224,960,280,1080,308C1200,336,1320,336,1440,301C1560,266,1680,196,1800,175C1920,154,2040,182,2160,217C2280,252,2400,294,2520,259C2640,224,2760,112,2880,56C3000,0,3120,0,3240,0C3360,0,3480,0,3600,63C3720,126,3840,252,3960,308C4080,364,4200,350,4320,315C4440,280,4560,224,4680,175C4800,126,4920,84,5040,91C5160,98,5280,154,5400,168C5520,182,5640,154,5760,119C5880,84,6000,42,6120,77C6240,112,6360,224,6480,245C6600,266,6720,196,6840,154C6960,112,7080,98,7200,133C7320,168,7440,252,7560,252C7680,252,7800,168,7920,154C8040,140,8160,196,8280,238C8400,280,8520,308,8580,322L8640,336L8640,420L8580,420C8520,420,8400,420,8280,420C8160,420,8040,420,7920,420C7800,420,7680,420,7560,420C7440,420,7320,420,7200,420C7080,420,6960,420,6840,420C6720,420,6600,420,6480,420C6360,420,6240,420,6120,420C6000,420,5880,420,5760,420C5640,420,5520,420,5400,420C5280,420,5160,420,5040,420C4920,420,4800,420,4680,420C4560,420,4440,420,4320,420C4200,420,4080,420,3960,420C3840,420,3720,420,3600,420C3480,420,3360,420,3240,420C3120,420,3000,420,2880,420C2760,420,2640,420,2520,420C2400,420,2280,420,2160,420C2040,420,1920,420,1800,420C1680,420,1560,420,1440,420C1320,420,1200,420,1080,420C960,420,840,420,720,420C600,420,480,420,360,420C240,420,120,420,60,420L0,420Z"
        ></path>
      </svg>
      <div
        className={cn(
          "absolute select-none text-[500px] top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary opacity-10 z-0",
          serif.className
        )}
      >
        Bliss
      </div>
    </section>
  );
};

const CarouselThumb = ({ index }: { index: number }) => {
  const { image, name } = products[index];
  return (
    <div
      className={cn(
        "bg-[#FFF5E4] flex items-center justify-center py-2  rounded shadow-xl"
      )}
    >
      <Image
        className="mix-blend-multiply -ml-4"
        src={image}
        alt={name}
        width={100}
      />
      <p className="text-lg mr-4">{name}</p>
    </div>
  );
};

const CarouselDot = ({
  item,
  setItem,
}: {
  item: number;
  setItem: Dispatch<SetStateAction<number>>;
}) => (
  <div
    onClick={() => setItem(2)}
    className={cn(
      "bg-primary rounded-full",
      item === 2 ? "size-4" : "size-3 opacity-70 cursor-pointer"
    )}
  ></div>
);

const products: Item[] = [
  {
    name: "Rest Assured",
    text: "This powerhouse eye cream visibly reduces dark circles while depuffing eyes for an always-well-rested look. 93% of users saw visible improvement in dark circles in 4 weeks of less!",
    price: 19.99,
    image: item1,
  },
  {
    name: "Bright idea",
    text: "This powerhouse eye cream visibly reduces dark circles while depuffing eyes for an always-well-rested look. 93% of users saw visible improvement in dark circles in 4 weeks of less!",
    price: 19.99,
    image: item2,
  },
  {
    name: "Block star",
    text: "This powerhouse eye cream visibly reduces dark circles while depuffing eyes for an always-well-rested look. 93% of users saw visible improvement in dark circles in 4 weeks of less!",
    price: 19.99,
    image: item3,
  },
];
