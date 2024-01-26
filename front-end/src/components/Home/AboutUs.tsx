import React from "react";
import { Button } from "../ui/button";
import About from "@/assets/aboutUs.png";
import Image from "next/image";
import { ColorCircle } from "./atoms/ColorCircle";
import { cn } from "@/lib/utils";
import { poppins } from "@/lib/fonts";

export const AboutUs = () => {
  const centerClasses = "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2";
  return (
    <section
      className={cn(
        `flex justify-evenly px-10 relative overflow-clip`,
        poppins.className
      )}
    >
      <div className="absolute -right-2 top-1/4">
        <ColorCircle
          className={`bg-primary size-[80px] opacity-70 ${centerClasses}`}
        />
        <ColorCircle
          className={`bg-primary size-[120px] opacity-35 ${centerClasses}`}
        />
        <ColorCircle
          className={`bg-primary size-[160px] opacity-20 ${centerClasses}`}
        />
        <ColorCircle
          className={`bg-primary size-[200px] opacity-10 ${centerClasses}`}
        />
      </div>
      <div className="relative py-10">
        <ColorCircle
          className={`rounded-none w-52 h-36 bg-primary top-4 -left-4`}
        />
        <Image
          className="z-10 relative"
          src={About}
          alt="about us"
          width={530}
          height={600}
        />
        <ColorCircle
          className={`rounded-none w-52 h-36 bg-rose-400 bottom-0 -right-6`}
        />
      </div>
      <div className="w-1/3 flex flex-col items-start py-10">
        <p className="text-lg font-sans font-bold mb-6 text-blue-900">
          About us
        </p>
        <p className="font-extrabold text-3xl mb-4">
          Clean, Cruelty-Free, Dermatologist-Tested
        </p>
        <p className="text-base mb-12">
          We are a clean, cruelty-free, planet-friendly skincare brand that
          delivers transformative, dermatologist-tested products for total skin
          happiness.
        </p>
        <Button>Explore more</Button>
      </div>
    </section>
  );
};
