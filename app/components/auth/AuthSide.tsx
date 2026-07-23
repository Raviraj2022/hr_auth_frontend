import { CheckCircle2 } from "lucide-react";
import DashboardPreview from "./DashboardPreview";

const FEATURES = [
  "Employee Management",
  "Payroll Automation",
  "Attendance Tracking",
  "Leave Management",
];

export default function AuthSide() {
  return (
    <section
      className="
        relative
        hidden
        overflow-hidden
        bg-gradient-to-br
        from-slate-950
        via-blue-900
        to-violet-900
        lg:flex
        lg:flex-col
        lg:justify-center
        lg:px-16
      "
    >
      {/* Background Effects */}
      <div className="absolute left-16 top-16 h-64 w-64 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-violet-500/20 blur-[140px]" />

      <div className="relative z-10 max-w-xl">
        <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur">
          Enterprise HRMS
        </span>

        <h1 className="mt-8 text-5xl font-bold leading-tight text-white">
          Manage Your Workforce Smarter
        </h1>

        <p className="mt-6 text-lg leading-8 text-white/80">
          Everything you need to manage employees,
          payroll, attendance and HR operations
          from one modern platform.
        </p>

        <DashboardPreview />

        <div className="mt-10 grid gap-4">
          {FEATURES.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3 text-white/90"
            >
              <CheckCircle2 className="h-5 w-5 text-emerald-400" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}