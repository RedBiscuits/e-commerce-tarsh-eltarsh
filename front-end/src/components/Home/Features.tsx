import React from "react";
import { FeatureCard } from "./atoms/FeatureCard";
import shipping from "@/assets/shipping.gif";
import sample from "@/assets/samples.gif";
import surprise from "@/assets/surprise.gif";
import { cn } from "@/lib/utils";
import { prata } from "@/lib/fonts";

const cards = [
  {
    image: shipping,
    title: "Free Shiping",
    subtitle: "(on orders over $40)",
  },
  {
    image: sample,
    title: "Free Sample",
    subtitle: "(Yes,please)",
  },
  {
    image: surprise,
    title: "Surprises",
    subtitle: "(You will love.Trust)",
  },
];

export const Features = () => {
  return (
    <section className="flex items-center justify-center relative overflow-clip py-10">
      <div className="size-40 absolute -top-20 -left-20 blur-3xl bg-rose-400 rounded-full"></div>
      <p className={cn("mr-14 text-lg font-semibold", prata.className)}>
        Only on blissworld.com
      </p>
      <div className="flex gap-6">
        {cards.map((card) => (
          <FeatureCard key={card.title} {...card} />
        ))}
      </div>
    </section>
  );
};
