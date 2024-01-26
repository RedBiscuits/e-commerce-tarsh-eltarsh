"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { poppins } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { usePathname, useSearchParams } from "next/navigation";

type IPaginatorProps = {
  lastPage: number;
};

export const Paginator = ({ lastPage }: IPaginatorProps) => {
  const params = useSearchParams();
  const pathname = usePathname();
  const page = Number(params.get("page")) || 1;

  const hasPrevious = page > 1;
  const hasNext = page < lastPage;

  // last page = 1 => 1
  // last page = 2 => 1, 2
  // last page = 3 => 1, 2, 3
  // last page = 4 => 1, 2, 3, ...
  // last page = 4, page = 3 => ..., 2, [3], 4
  // last page = 4, page = 4 => ..., 3, [4]

  const paginationItems = [
    page > 2 && <PaginationEllipsis />,
    ...Array.from(
      { length: Math.min(3, lastPage, lastPage - page + 2) },
      (_, i) => {
        const value = Math.max(1, i + (page - 1 || 1));
        return (
          <PaginationLink
            href={`${pathname}?page=${value}`}
            isActive={page === value}
            key={i}
          >
            {value}
          </PaginationLink>
        );
      }
    ),
    page < lastPage - 1 && lastPage > 3 && <PaginationEllipsis />,
  ];

  console.log(paginationItems);

  return (
    <Pagination className={cn(poppins.className)}>
      <PaginationContent>
        {hasPrevious && (
          <PaginationItem>
            <PaginationPrevious href={`${pathname}?page=${page - 1}`} />
          </PaginationItem>
        )}

        {paginationItems.filter(Boolean).map((item, i) => (
          <PaginationItem key={i}>{item} </PaginationItem>
        ))}

        {hasNext && (
          <PaginationItem>
            <PaginationNext href={`${pathname}?page=${page + 1}`} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};
