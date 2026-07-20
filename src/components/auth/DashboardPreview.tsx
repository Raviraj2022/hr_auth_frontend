import MetricCard from "./MetricCard";

export default function DashboardPreview() {
  return (
    <div
      className="
        mt-12
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        backdrop-blur-xl
        shadow-2xl
      "
    >
      <div className="grid grid-cols-2 gap-4">
        <MetricCard
          title="Employees"
          value="1,248"
        />

        <MetricCard
          title="Attendance"
          value="98.2%"
          color="from-green-400 to-emerald-500"
        />

        <MetricCard
          title="Payroll"
          value="₹18.5L"
          color="from-yellow-400 to-orange-500"
        />

        <MetricCard
          title="Departments"
          value="12"
          color="from-pink-500 to-violet-500"
        />
      </div>

      <div className="mt-8">
        <p className="mb-4 text-sm text-white/70">
          Attendance Trend
        </p>

        <div className="flex h-24 items-end gap-2">
          {[35, 55, 42, 70, 60, 90, 80].map((height, index) => (
            <div
              key={index}
              className="flex-1 rounded-t-full bg-gradient-to-t from-cyan-400 to-blue-500"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}