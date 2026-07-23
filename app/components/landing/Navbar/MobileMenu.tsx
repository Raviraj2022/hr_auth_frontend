"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { NAV_LINKS } from "./constants/navigation";
import { ThemeToggle } from "../../common/theme-toggle";
import { Button } from "@/app/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/app/components/ui/sheet";

export default function MobileMenu() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="w-[320px] p-0"
        >
          <SheetHeader className="border-b px-6 py-5">
            <SheetTitle className="text-left text-xl font-bold">
              HRMS
            </SheetTitle>
          </SheetHeader>

          <div className="flex h-full flex-col">
            {/* Navigation */}
            <nav className="flex flex-col gap-2 px-4 py-6">
              {NAV_LINKS.map((item) => (
                <SheetClose
                  
                  key={item.label}
                >
                  <Link
                    href={item.href}
                    className="
                      rounded-lg
                      px-4
                      py-3
                      text-base
                      font-medium
                      transition-colors
                      hover:bg-accent
                      hover:text-accent-foreground
                    "
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>

            {/* Bottom Actions */}
            <div className="mt-auto border-t p-6">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Theme
                </span>

                <ThemeToggle />
              </div>

              <div className="space-y-3">
                <SheetClose>
                  <Button
                    
                    variant="outline"
                    className="w-full"
                  >
                    <Link href="/login">
                      Login
                    </Link>
                  </Button>
                </SheetClose>

                <SheetClose >
                  <Button
                   
                    className="w-full"
                  >
                    <Link href="/register">
                      Get Started
                    </Link>
                  </Button>
                </SheetClose>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}