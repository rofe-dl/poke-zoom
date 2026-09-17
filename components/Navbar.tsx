"use client";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 z-50 flex w-full max-w-5xl -translate-x-1/2 items-center justify-between rounded-full bg-primary px-6 py-3 shadow-md">
      <Link href="/" className="font-bold text-primary-foreground">
        Poké-zoom
      </Link>

      <div className="flex items-center gap-6">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                render={<Link href="/?play=1" />}
                className={`${navigationMenuTriggerStyle()}`}
              >
                Play!
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                render={<Link href="/" />}
                className={`${navigationMenuTriggerStyle()}`}
              >
                Log In
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <ThemeToggle />
      </div>
    </nav>
  );
}
