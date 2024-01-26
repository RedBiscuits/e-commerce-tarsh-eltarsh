import React from "react";
import { NewItemCard } from "./atoms/NewItemCard";
import newItem1 from "@/assets/newItem1.png";
import newItem2 from "@/assets/newItem2.png";
import waves from "@/assets/waves.svg";
import Image from "next/image";

const card_1_Data = {
  title: "Lemon and & sage collection",
  subtitle:
    "Refresh and reenergize from head-to-toe our iconic citrus-scented faves.",
  buttonText: "Shop lemon & sage",
  buttonLink: "/",
  MoreLink: "/",
  image: newItem1,
  colors: ["bg-primary", "bg-rose-300", "bg-pink-300"],
};
const card_2_Data = {
  title: "New ! blackhead breakdown",
  subtitle:
    "Refresh and reenergize from head -to-toe our iconic citrus-scented faves.",
  buttonText: "Shop blackhead breakdown",
  buttonLink: "/",
  MoreLink: "/",
  image: newItem2,
  colors: ["bg-rose-300", "bg-pink-500", "bg-rose-100"],
};

export const NewItems = () => {
  return (
    <section className="relative overflow-clip bg-gradient-to-b from-rose-300 to-rose-100 flex flex-col gap-5 py-9 justify-center items-center">
      <NewItemCard {...card_1_Data} />
      <NewItemCard {...card_2_Data} />

      <Image
        src={waves}
        alt=""
        className="rotate-[88deg] absolute -right-1/4 scale-105 top-0"
      />
      <Image
        src={waves}
        alt=""
        className="rotate-[88deg] absolute -left-1/4 scale-105 top-0"
      />
    </section>
  );
};
