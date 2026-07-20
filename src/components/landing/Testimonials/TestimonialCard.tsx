import Image from "next/image";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  image: string;
  review: string;
  rating: number;
}

export default function TestimonialCard({
  name,
  role,
  company,
  image,
  review,
  rating,
}: TestimonialCardProps) {
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
      <div className="mb-6 flex">
        {Array.from({ length: rating }).map((_, index) => (
          <Star
            key={index}
            className="h-5 w-5 fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      <p className="leading-7 text-muted-foreground">
        {review}
      </p>

      <div className="mt-8 flex items-center gap-4">
        <Image
          src={image}
          alt={name}
          width={56}
          height={56}
          className="rounded-full object-cover"
        />

        <div>
          <h4 className="font-semibold">{name}</h4>

          <p className="text-sm text-muted-foreground">
            {role} • {company}
          </p>
        </div>
      </div>
    </div>
  );
}