"use client";
import { IProduct } from "@/models/IProduct";
import Image from "next/image";
import { Counter } from "../ui/counter";
import { useState } from "react";
import { Button } from "../ui/button";

type ICartItemProps = {
  product: IProduct;
};

export const CartItem = ({
  product: { image, name, price, quantity },
}: ICartItemProps) => {
  const [value, setValue] = useState(quantity);

  return (
    <div className="flex items-start justify-start gap-8 pr-10">
      <Image src={image} alt={name} width={170} height={170} />
      <div className="w-full pt-4 flex flex-col justify-between h-40">
        <div className="flex justify-between">
          <p className="text-xl">{name}</p>
          <p className="text-xl font-semibold pr-4">${price}</p>
        </div>
        <p className="text-gray-400 -mt-10">Shade : red</p>
        <div className="flex justify-between">
          <Counter value={value} setValue={setValue} />
          <Button variant={"ghost"} className="text-destructive">
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};
