import {
  Inter,
  Prata,
  Noto_Sans_KR,
  DM_Serif_Display,
  Poppins,
} from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-sans",
});

export const prata = Prata({
  subsets: ["latin"],
  weight: "400",
});

export const noto = Noto_Sans_KR({
  subsets: ["latin"],
});

export const serif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
