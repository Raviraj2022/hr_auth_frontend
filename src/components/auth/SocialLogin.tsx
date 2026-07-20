import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";

export default function SocialLogin() {
  return (
    <Button
      variant="outline"
      className="h-12 w-full rounded-xl"
    >
      <FcGoogle className="mr-2 text-xl" />

      Continue with Google
    </Button>
  );
}