import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { ColorCircle } from "./ColorCircle";
import { cn } from "@/lib/utils";
import { noto, serif } from "@/lib/fonts";

type INewItemCardProps = {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  MoreLink: string;
  image: StaticImageData;
  colors: string[];
};

export const NewItemCard = ({
  title,
  subtitle,
  image,
  colors,
  buttonText,
  MoreLink,
  buttonLink,
}: INewItemCardProps) => {
  return (
    <div className="flex p-5 bg-white w-3/4 h-96 relative overflow-clip">
      <ColorCircle className={`size-40  -right-10 -top-4 ${colors[0]}`} />
      <ColorCircle className={`size-28 top-0 left-1/3 ${colors[1]}`} />
      <ColorCircle className={`size-16 left-0 top-2/3 z-20 ${colors[2]}`} />
      <Image
        className="z-10 relative"
        src={image}
        alt="new item image"
        width={380}
        height={380}
      />
      <div className="flex flex-col items-start justify-between pt-24 pl-8 w-1/2">
        <p
          className={cn(
            "text-[32px] text-blue-900 font-bold w-2/3",
            serif.className
          )}
        >
          {title}
        </p>
        <p className={cn("text-base font-medium", noto.className)}>
          {subtitle}
        </p>
        <div className="flex justify-between items-center w-full">
          <Button>{buttonText}</Button>
          <Link className="underline text-sm" href={MoreLink}>
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};
