import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function HeroContent() {
  return (
    <div className="max-w-4xl space-y-8">

      <span className="rounded-full border px-4 py-2 text-sm font-medium">
        🚀 Next Generation HRMS
      </span>

      <h1 className="text-5xl font-extrabold leading-tight lg:text-7xl">
        Manage Your
        <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
          {" "}Workforce
        </span>
        <br />
        Smarter.
      </h1>

      <p className="max-w-xl text-lg text-muted-foreground">
        Streamline employee management,
        payroll, attendance, leave,
        recruitment and performance
        from one modern platform.
      </p>

      <div className="flex flex-wrap gap-4">

        <Button
          size="lg"
          
        >
          <Link href="/register" className="flex">
            Get Started

            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>

        <Button
          variant="outline"
          size="lg"
        >
          Watch Demo
        </Button>

      </div>

      <div className="flex items-center gap-6 pt-6">

        <div>
          ⭐⭐⭐⭐⭐
        </div>

        <p className="text-sm text-muted-foreground">
          Trusted by 500+ companies
        </p>

      </div>

    </div>
  );
}