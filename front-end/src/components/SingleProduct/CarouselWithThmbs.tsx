"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";

type ICarouselWithThmbsProps = {
  images: StaticImageData[];
};

export const CarouselWithThmbs = ({ images }: ICarouselWithThmbsProps) => {
  const [api, setApi] = useState<CarouselApi>();

  return (
    <>
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem className="basis-full" key={image.src}>
              <Image
                width={200}
                height={200}
                src={image.src}
                alt={image.src}
                className="h-full w-full object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* thumbs */}
      <div className="flex gap-2 w-full mt-2 items-center overflow-x-scroll scrollbar-thin scrollbar-thumb-rounded-md scrollbar-track-rounded-md scrollbar-track-transparent scrollbar-thumb-rose-200">
        {images.map((image, i) => (
          <Image
            onClick={() => api?.scrollTo(i)}
            key={image.src}
            width={40}
            height={40}
            src={image.src}
            alt={image.src}
            className="h-full w-full object-cover"
          />
        ))}
      </div>
      {/* end of thumbs */}
    </>
  );
};
