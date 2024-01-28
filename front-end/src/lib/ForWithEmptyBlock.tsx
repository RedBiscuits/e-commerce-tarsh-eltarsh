import { ReactNode } from "react";

type IForWithEmptyBlockProps<T> = {
  items: T[];
  children: (item: T) => ReactNode;
  empty: ReactNode;
};
export const ForWithEmptyBlock = <T,>({
  items,
  children,
  empty,
}: IForWithEmptyBlockProps<T>) => {
  return items.length === 0 ? <>{empty}</> : <>{items.map(children)}</>;
};
