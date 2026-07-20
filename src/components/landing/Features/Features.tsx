import { FEATURES } from "./features.data";
import FeatureCard from "./FeaturesCard";

export default function Features() {
  return (
    <section
      id="features"
      className="py-12"
    >
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full border px-4 py-2 text-sm font-medium">
            Powerful Features
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Everything You Need To Manage Your Workforce
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            A complete HR platform designed to simplify employee management,
            payroll, attendance, leave tracking and business insights.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {FEATURES.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
}