import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FloatingBadgeProps {
  icon: LucideIcon;
  title: string;
  value: string;
  className?: string;
}

export default function FloatingBadge({
  icon: Icon,
  title,
  value,
  className,
}: FloatingBadgeProps) {
  return (
    <div
      className={cn(
        "absolute rounded-2xl border border-border/50",
        "bg-background/80 backdrop-blur-xl",
        "shadow-2xl",
        "px-5 py-4",
        "min-w-[180px]",
        "transition-all duration-300",
        "hover:-translate-y-2 hover:scale-105",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            {title}
          </p>

          <h3 className="text-lg font-bold">
            {value}
          </h3>
        </div>
      </div>
    </div>
  );
}