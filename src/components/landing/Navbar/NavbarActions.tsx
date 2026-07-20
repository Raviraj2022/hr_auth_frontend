import Link from "next/link";

import { Button } from "@/src/components/ui/button";
import { ThemeToggle } from "../../common/theme-toggle";

export default function NavbarActions() {
  return (
    <div className="hidden items-center gap-3 lg:flex">
      <ThemeToggle />

      <Button
        variant="ghost"
       
      >
        <Link href="/login">Login</Link>
      </Button>

      <Button
       
        className="rounded-full px-6"
      >
        <Link href="/register">
          Get Started
        </Link>
      </Button>
    </div>
  );
}