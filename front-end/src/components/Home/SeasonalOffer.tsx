import item1 from "@/assets/seasonalOfferProduct1.png";
import item2 from "@/assets/seasonalOfferProduct2.png";
import item3 from "@/assets/seasonalOfferProduct3.png";
import { SeasonalOfferCard } from "./atoms/SeasonalOfferCard";
import { cn } from "@/lib/utils";
import { inter, serif } from "@/lib/fonts";

const cards = [
  {
    title: "Rest Assured Eye Cream",
    subtitle: "Dark Circle Reducing & Depuffing Eye cream For Refreshed Eyes",
    image: item1,
  },
  {
    title: "Rest Assured Eye Cream",
    subtitle: "Dark Circle Reducing & Depuffing Eye cream For Refreshed Eyes",
    image: item2,
  },
  {
    title: "Rest Assured Eye Cream",
    subtitle: "Dark Circle Reducing & Depuffing Eye cream For Refreshed Eyes",
    image: item3,
  },
];

export const SeasonalOffer = () => {
  return (
    <section className="bg-[#FFE7CD] text-center pt-14 pb-24">
      <p className={cn("text-3xl mb-4 text-blue-900", serif.className)}>
        Fall Favorite
      </p>
      <p className={cn("text-gray-500 mb-16", inter.className)}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
      </p>
      <div className="flex justify-evenly">
        {cards.map((card, i) => (
          <SeasonalOfferCard key={i} {...card} />
        ))}
      </div>
    </section>
  );
};
