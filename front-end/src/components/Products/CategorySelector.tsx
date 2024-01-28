"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const categories = ["Lip Gloss", "Maskara", "Sun Screen"];
export const CategorySelector = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  function navigateToCategory(category: string) {
    const params = new URLSearchParams(searchParams);
    if (category !== "all") {
      params.set("category", category);
    } else {
      params.delete("category");
    }
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <Select onValueChange={(value) => navigateToCategory(value)}>
      <SelectTrigger className="w-52">
        <SelectValue placeholder="Select a Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={"all"}>All Products</SelectItem>
        {categories.map((category) => (
          <SelectItem key={category} value={category}>
            {category}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
