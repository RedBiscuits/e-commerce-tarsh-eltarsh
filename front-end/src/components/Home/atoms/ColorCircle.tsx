import React from "react";
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";

type IColorCircleProps = {
  className: ClassValue;
};

export const ColorCircle = ({ className }: IColorCircleProps) => {
  return <div className={cn("absolute rounded-full", className)}></div>;
};
