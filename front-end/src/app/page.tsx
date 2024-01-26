import { AboutUs } from "@/components/Home/AboutUs";
import { Features } from "@/components/Home/Features";
import { HomeCarousel } from "@/components/Home/HomeCarousel";
import { NewItems } from "@/components/Home/NewItems";
import { OurProducts } from "@/components/Home/OurProducts";
import { Products } from "@/components/Home/Products";
import { SeasonalOffer } from "@/components/Home/SeasonalOffer";

export default function Home() {
  return (
    <main className="w-full">
      <HomeCarousel />
      <Features />
      <NewItems />
      <AboutUs />
      <OurProducts />
      <Products />
      <SeasonalOffer />
    </main>
  );
}
