import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  title: string;
  description: string;
}

export default function StatCard({
  icon: Icon,
  value,
  title,
  description,
}: StatCardProps) {
  return (
    <div
      className="
      group
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
      <div
        className="
        mb-6
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-2xl
        bg-gradient-to-br
        from-blue-500
        to-violet-600
        text-white
        shadow-lg
        "
      >
        <Icon className="h-7 w-7" />
      </div>

      <h2 className="text-4xl font-extrabold">
        {value}
      </h2>

      <h3 className="mt-2 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}