import { LucideIcon, ArrowUpRight } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeaturesCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-border/60
        bg-background/70
        p-8
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-primary/40
        hover:shadow-2xl
      "
    >
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-8 w-8" />
      </div>

      <h3 className="mb-3 text-2xl font-semibold">
        {title}
      </h3>

      <p className="text-muted-foreground leading-7">
        {description}
      </p>

      <div className="mt-8 flex items-center gap-2 text-primary font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        Learn More
        <ArrowUpRight className="h-4 w-4" />
      </div>
    </div>
  );
}