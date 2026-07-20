"use client";

import Link from "next/link";
import { NAV_LINKS } from "./constants/navigation";

export default function NavBarLink() {
  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {NAV_LINKS.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="relative text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}