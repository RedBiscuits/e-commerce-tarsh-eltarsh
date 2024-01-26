import { inter } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

type ISeasonalProductCardProps = {
  image: StaticImageData;
  title: string;
  subtitle: string;
};

export const SeasonalOfferCard = ({
  image,
  title,
  subtitle,
}: ISeasonalProductCardProps) => {
  return (
    <div
      className={cn(
        "bg-white flex flex-col justify-center items-center gap-4 pt-2 pb-6 px-4",
        inter.className
      )}
    >
      <Image src={image} alt="seasonal product image" width={320} />
      <p className="text-base font-bold ">{title}</p>
      <p className="text-xs font-light w-3/4 text-center">{subtitle}</p>
    </div>
  );
};
