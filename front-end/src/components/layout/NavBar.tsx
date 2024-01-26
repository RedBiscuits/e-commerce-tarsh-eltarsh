import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
import { IoPersonCircle } from "react-icons/io5";
import React from "react";
import { cn } from "@/lib/utils";
import { poppins, serif } from "@/lib/fonts";

type INavigationItemProps = {
  children: React.ReactNode;
  href: string;
};

export const NavBar = () => {
  return (
    <NavigationMenu
      className={cn("w-full py-14 justify-between px-16", poppins.className)}
    >
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href={"/"} legacyBehavior passHref>
            <NavigationMenuLink className={cn("text-4xl", serif.className)}>
              Bliss
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuList className="gap-x-14">
        <NavigationItem href="/">Home</NavigationItem>
        <NavigationItem href="/products">Products</NavigationItem>
        <NavigationItem href="/cart">Cart</NavigationItem>
      </NavigationMenuList>
      <div className="flex gap-7">
        <FaCartShopping className="size-6" />
        <IoPersonCircle className="size-6" />
      </div>
    </NavigationMenu>
  );
};

const NavigationItem = ({ href, children }: INavigationItemProps) => {
  return (
    <NavigationMenuItem>
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink className="text-lg">{children}</NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};
