import TestimonialCard from "./TestimonialCard";
import { TESTIMONIALS } from "./testimonials.data";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-12"
    >
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full border px-4 py-2 text-sm font-medium">
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Trusted by HR Teams Worldwide
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            See how companies are simplifying HR operations with our
            modern HRMS platform.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}