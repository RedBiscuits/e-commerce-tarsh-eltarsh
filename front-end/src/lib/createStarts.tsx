import { FaStar, FaRegStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { cn } from "./utils";

export function createStars(rating: number) {
  return [
    ...[...Array(Math.trunc(rating))].map((_, i) => (
      <FaStar key={`full${i}`} className={cn("text-yellow-500")} size={16} />
    )),

    ...(rating - Math.trunc(rating) >= 0.5
      ? [
          <FaRegStarHalfStroke
            key="half"
            className={cn("text-yellow-500")}
            size={17}
          />,
        ]
      : []),
    ...[...Array(Math.trunc(5 - Math.ceil(rating)))].map((_, i) => (
      <FaRegStar key={`empty${i}`} className={cn("text-gray-300")} size={16} />
    )),
  ];
}
