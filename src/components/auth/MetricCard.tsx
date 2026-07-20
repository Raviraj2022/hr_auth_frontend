interface MetricCardProps {
  title: string;
  value: string;
  color?: string;
}

export default function MetricCard({
  title,
  value,
  color = "from-blue-500 to-cyan-500",
}: MetricCardProps) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-white/10
        bg-white/10
        p-5
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-white/15
      "
    >
      <p className="text-sm text-white/70">
        {title}
      </p>

      <h3
        className={`mt-2 bg-gradient-to-r ${color} bg-clip-text text-3xl font-bold text-transparent`}
      >
        {value}
      </h3>
    </div>
  );
}