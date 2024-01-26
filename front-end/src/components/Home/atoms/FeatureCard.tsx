import React from "react";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import { prata } from "@/lib/fonts";

type IFeatureCardProps = {
  title: string;
  subtitle: string;
  image: StaticImageData;
};

export const FeatureCard = ({ image, subtitle, title }: IFeatureCardProps) => {
  return (
    <div
      className={cn(
        "size-60 rounded-md shadow-2xl shadow-rose-200 flex flex-col items-center justify-center",
        prata.className
      )}
    >
      <Image src={image} alt="shipping" width={140} height={140} />
      <p className="text-lg font-medium">{title}</p>
      <p className="text-sm font-normal leading-none mt-2">{subtitle}</p>
    </div>
  );
};
