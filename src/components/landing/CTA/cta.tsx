import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";

import { Button } from "@/src/components/ui/button";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-12">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[140px]" />
      </div>

      <div className="container mx-auto px-6">
        <div
          className="
            relative
            overflow-hidden
            rounded-[2rem]
            border
            border-border/50
            bg-background/70
            px-8
            py-14
            backdrop-blur-xl
            shadow-2xl
            lg:px-16
          "
        >
          {/* Decorative Gradient */}
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="relative flex flex-col items-center text-center">
            <span className="rounded-full border px-4 py-2 text-sm font-medium">
              🚀 Get Started Today
            </span>

            <h2 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight lg:text-6xl">
              Transform Your HR Operations
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                {" "}With One Platform
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Automate attendance, payroll, employee management,
              leave requests, and analytics from a single modern
              HRMS built for growing organizations.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                
                className="rounded-full px-8"
              >
                <Link href="/register" className="flex">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8"
                
              >
                <Link href="/demo" className="flex">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Book Demo
                </Link>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
              <span>✓ Free 14-Day Trial</span>
              <span>✓ No Credit Card Required</span>
              <span>✓ Cancel Anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}