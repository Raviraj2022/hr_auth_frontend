import Link from "next/link";

import { Checkbox } from "@/components/ui/checkbox";

import AuthCard from "./AuthCard";
import FormInput from "./FormInput";
import PasswordInput from "./PasswordInput";
import AuthDivider from "./AuthDivider";
import SocialLogin from "./SocialLogin";
import SubmitButton from "./SubmitButton";

export default function LoginForm() {
  return (
    <AuthCard>
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="text-muted-foreground">
          Sign in to continue managing your workforce.
        </p>
      </div>

      <form className="mt-8 space-y-6">
        <FormInput
          id="email"
          label="Email"
          type="email"
          placeholder="john@example.com"
        />

        <PasswordInput />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />

            <label
              htmlFor="remember"
              className="text-sm"
            >
              Remember me
            </label>
          </div>

          <Link
            href="/forgot-password"
            className="text-sm text-primary hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <SubmitButton>
          Sign In
        </SubmitButton>

        <AuthDivider />

        <SocialLogin />

        <p className="text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-medium text-primary hover:underline"
          >
            Create one
          </Link>
        </p>
      </form>
    </AuthCard>
  );
}