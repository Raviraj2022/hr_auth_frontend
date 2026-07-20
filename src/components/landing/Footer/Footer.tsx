import Link from "next/link";
import { Building2 } from "lucide-react";

import {
  FOOTER_LINKS,
  SOCIAL_LINKS,
} from "./footer.data";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-6">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-white">
                <Building2 className="h-6 w-6" />
              </div>

              <div>
                <h2 className="text-xl font-bold">
                  HRMS
                </h2>

                <p className="text-xs text-muted-foreground">
                  Smart Workforce Platform
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm leading-7 text-muted-foreground">
              A modern HR management platform built
              to simplify employee management,
              payroll, attendance and workforce
              analytics.
            </p>

            <div className="mt-8 flex gap-3">
             {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
  <Link
    key={label}
    href={href}
    aria-label={label}
    className="flex h-11 w-11 items-center justify-center rounded-full border transition-all hover:bg-primary hover:text-primary-foreground"
  >
    <Icon className="h-5 w-5" />
  </Link>
))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-5 font-semibold">
              Product
            </h3>

            <ul className="space-y-3">
              {FOOTER_LINKS.product.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 font-semibold">
              Company
            </h3>

            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-5 font-semibold">
              Resources
            </h3>

            <ul className="space-y-3">
              {FOOTER_LINKS.resources.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t pt-8 text-sm text-muted-foreground md:flex-row">

          <p>
            © {new Date().getFullYear()} HRMS.
            All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href="#">
              Privacy
            </Link>

            <Link href="#">
              Terms
            </Link>

            <Link href="#">
              Cookies
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}