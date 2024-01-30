"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";
import { FaStar } from "react-icons/fa6";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const ReviewInput = () => {
  const [hoverPosition, setHoverPosition] = useState(0);
  const [clickPosition, setClickPosition] = useState(0);
  return (
    <form className="space-y-4">
      <p className="text-2xl">Leave a review</p>

      {/* rating */}
      <div className="flex items-center gap-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar
            key={i}
            className={cn(
              "cursor-pointer hover:scale-125 transition-all",
              clickPosition >= i + 1 || hoverPosition >= i + 1
                ? "text-yellow-500"
                : "text-gray-300"
            )}
            size={24}
            onMouseEnter={() => setHoverPosition(i + 1)}
            onMouseLeave={() => setHoverPosition(0)}
            onClick={() => setClickPosition(i + 1)}
          />
        ))}
      </div>
      {/* end of rating */}

      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="titel">Title</Label>
        <Input
          className="border-primary"
          type="text"
          id="title"
          placeholder="title"
        />
      </div>
      <div className="grid w-full gap-1.5">
        <Label htmlFor="text">Your review</Label>
        <Textarea
          className="border-primary"
          placeholder="Type your review here."
          id="text"
        />
      </div>
      <Button
        className="border-primary text-primary hover:bg-white"
        variant={"outline"}
        type="submit"
      >
        Submit Review
      </Button>
    </form>
  );
};
