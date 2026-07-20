import StatCard from "./StatCard";
import { STATS } from "./stats.data";

export default function Stats() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6">

        <div className="mx-auto mb-16 max-w-2xl text-center">

          <span className="rounded-full border px-4 py-2 text-sm font-medium">
            Trusted Worldwide
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Powering Modern HR Teams
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">
            Thousands of companies rely on our HRMS
            to manage employees, payroll,
            attendance, and performance efficiently.
          </p>

        </div>

        <div
          className="
          grid
          gap-8
          sm:grid-cols-2
          xl:grid-cols-4
          "
        >
          {STATS.map((stat) => (
            <StatCard
              key={stat.title}
              {...stat}
            />
          ))}
        </div>

      </div>
    </section>
  );
}