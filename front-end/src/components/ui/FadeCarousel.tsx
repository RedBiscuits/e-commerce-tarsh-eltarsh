"use client";

import { cn } from "@/lib/utils";
import {
  Dispatch,
  HTMLAttributes,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

type CarouselContextData = {
  currentItem: number;
  setCurrentItem: Dispatch<SetStateAction<number>>;
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
};

const CarouselContext = createContext<CarouselContextData | null>(null);

const useCarouselContext = () => {
  const context = useContext(CarouselContext);

  if (!context) {
    throw new Error(
      "carousel context can only be used inside a <Carousle> tag"
    );
  }
  return context;
};

export const Carousel = ({
  children,
  className,
}: {
  children: ReactNode[];
} & HTMLAttributes<HTMLDivElement>) => {
  const [currentItem, setCurrentItem] = useState(0);
  const [count, setCount] = useState(0);
  return (
    <CarouselContext.Provider
      value={{
        currentItem,
        setCurrentItem,
        count,
        setCount,
      }}
    >
      <div className={className}>{children}</div>
    </CarouselContext.Provider>
  );
};
const NextButton = () => {
  const { setCurrentItem, count } = useCarouselContext();

  return (
    <div
      onClick={() => setCurrentItem((c) => (c + 1) % count)}
      className="size-16 bg-primary grid place-items-center rounded-md cursor-pointer"
    >
      <IoIosArrowForward className="text-4xl text-white" />
    </div>
  );
};
const PrvButton = () => {
  const { setCurrentItem, count } = useCarouselContext();

  return (
    <div
      onClick={() => setCurrentItem((c) => (c - 1 + count) % count)}
      className="size-16 bg-primary grid place-items-center rounded-md cursor-pointer"
    >
      <IoIosArrowBack className="text-4xl text-white" />
    </div>
  );
};

const Dots = () => {
  const { count } = useCarouselContext();
  return (
    <div className="mb-12 flex gap-4 items-center">
      {Array(count)
        .fill("")
        .map((_, i) => (
          <Dot key={i} index={i} />
        ))}
    </div>
  );
};

const Dot = ({ index }: { index: number }) => {
  const { currentItem, setCurrentItem } = useCarouselContext();
  return (
    <div
      onClick={() => setCurrentItem(index)}
      className={cn(
        "bg-primary rounded-full transition-all duration-300",
        currentItem === index
          ? "size-4"
          : "size-3 mb-2 mt-2 opacity-70 cursor-pointer"
      )}
    ></div>
  );
};

const Items = ({
  children,
  className,
}: { children: ReactNode[] } & HTMLAttributes<HTMLDivElement>) => {
  const { setCount, currentItem } = useCarouselContext();
  useEffect(() => {
    setCount(children?.length);
  });

  return (
    <div className={cn(className, "realtive")}>
      {children.map((child, i) => (
        <div
          className={cn(
            "transition-all duration-300 absolute top-1/2 left-[55%] -translate-x-1/2 -translate-y-1/2",
            currentItem === i ? "opacity-100 z-0" : "opacity-0 -z-50"
          )}
          key={i}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

const Data = ({
  children,
}: {
  children:
    | ((context: CarouselContextData) => ReactNode)
    | ((context: CarouselContextData) => ReactNode[]);
}) => {
  const context = useCarouselContext();

  return children(context);
};

Carousel.NextButton = NextButton;
Carousel.PrvButton = PrvButton;
Carousel.Dots = Dots;
Carousel.CarouselItems = Items;
Carousel.CarouselData = Data;
