import Image from "next/image";
import ourProducts from "@/assets/ourProducts.png";
import { cn } from "@/lib/utils";
import { poppins } from "@/lib/fonts";

export const OurProducts = () => {
  return (
    <section className="flex w-full justify-end items-center pl-32 -mt-20">
      <div className="">
        <p className={cn("font-bold text-lg", poppins.className)}>
          Our Products
        </p>
        <p className={cn("mt-8 w-4/5", poppins.className)}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat.
        </p>
      </div>
      <Image src={ourProducts} alt="our products" width={360} height={420} />
    </section>
  );
};
