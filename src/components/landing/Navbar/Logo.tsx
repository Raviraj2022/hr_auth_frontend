import Link from "next/link";
import { Building2 } from "lucide-react";

export default function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg transition-transform duration-300 group-hover:scale-105">
        <Building2 className="h-5 w-5" />
      </div>

      <div className="flex flex-col">
        <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-xl font-bold text-transparent">
          HRMS
        </span>

        <span className="text-xs text-muted-foreground">
          Smart Workforce Platform
        </span>
      </div>
    </Link>
  );
}