import item1 from "@/assets/seasonalOfferProduct2.png";
import item2 from "@/assets/footerImage2.png";
import item3 from "@/assets/footerImage3.png";
import item4 from "@/assets/footerImage4.png";
import item5 from "@/assets/newItem1.png";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { inter, poppins, serif } from "@/lib/fonts";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const images = [item1, item2, item3, item4, item5];

export const Footer = () => {
  return (
    <footer className={cn("bg-primary text-white", poppins.className)}>
      <div className="flex">
        {images.map((item, i) => (
          <Image className="w-1/5" key={i} src={item} alt="" />
        ))}
      </div>

      <div className="text-base text-black font-semibold text-center w-1/3 mx-auto py-10 border -mt-12 z-10 relative bg-white">
        FOLLOW OUR INSTAGRAM PAGE : @BLISS_TRENDS
      </div>

      <div className="flex justify-around items-center mt-10">
        <div>
          <p className={cn("text-4xl", serif.className)}>Bliss</p>
        </div>
        <div className="flex gap-10">
          {["Men", "Women", "Kids", "Collection", "Trends"].map((text) => (
            <p key={text} className="text-lg">
              {text}
            </p>
          ))}
        </div>
        <div className="flex gap-6">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>
      <p className="text-center py-10">Made With ❤ By Eyad Alsherif</p>
    </footer>
  );
};
