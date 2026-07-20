import { ReactNode } from "react";

interface AuthCardProps {
  children: ReactNode;
}

export default function AuthCard({
  children, 
}: AuthCardProps) {
  return (
    <div
      className="
      rounded-3xl
      border
      border-border/50
      bg-background/80
      p-8
      shadow-2xl
      backdrop-blur-xl
      "
    >
      {children}
    </div>
  );
}