import {
  Users,
  Wallet,
  CalendarDays,
  TrendingUp,
} from "lucide-react";

import FloatingBadge from "./FloatingBadge";

export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-2xl">

      {/* Dashboard */}

      <div className="rounded-3xl border bg-background/70 p-8 shadow-2xl backdrop-blur-xl">

        <div className="mb-8 h-5 w-44 rounded bg-primary/20" />

        <div className="grid grid-cols-2 gap-5">

          <div className="rounded-2xl border p-6">
            Employees

            <h2 className="mt-3 text-3xl font-bold">
              1250
            </h2>
          </div>

          <div className="rounded-2xl border p-6">
            Attendance

            <h2 className="mt-3 text-3xl font-bold">
              98%
            </h2>
          </div>

          <div className="rounded-2xl border p-6">
            Payroll

            <h2 className="mt-3 text-3xl font-bold">
              ₹2.3M
            </h2>
          </div>

          <div className="rounded-2xl border p-6">
            Leaves

            <h2 className="mt-3 text-3xl font-bold">
              87
            </h2>
          </div>

        </div>

      </div>

      {/* Floating Cards */}

      <FloatingBadge
        icon={Users}
        title="Employees"
        value="+24 Joined"
        className="-left-12 top-16"
      />

      <FloatingBadge
        icon={Wallet}
        title="Payroll"
        value="Processed"
        className="-right-12 top-10"
      />

      <FloatingBadge
        icon={CalendarDays}
        title="Attendance"
        value="98.4%"
        className="-left-10 bottom-14"
      />

      <FloatingBadge
        icon={TrendingUp}
        title="Growth"
        value="+32%"
        className="-right-10 bottom-8"
      />
    </div>
  );
}