import { Button } from "@/app/components/ui/button";

interface SubmitButtonProps {
  children: React.ReactNode;
}

export default function SubmitButton({
  children,
}: SubmitButtonProps) {
  return (
    <Button
      type="submit"
      className="h-12 w-full rounded-xl text-base"
    >
      {children}
    </Button>
  );
}