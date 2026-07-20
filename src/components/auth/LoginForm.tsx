"use client";

import Link from "next/link";



import { Checkbox } from "@/src/components/ui/checkbox";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  loginSchema,
  LoginFormValues,
} from "../../features/auth/validation/login.schema";

import AuthCard from "./AuthCard";
import FormInput from "./FormInput";
import PasswordInput from "./PasswordInput";
import AuthDivider from "./AuthDivider";
import SocialLogin from "./SocialLogin";
import SubmitButton from "./SubmitButton";

export default function LoginForm() {
    const form = useForm<LoginFormValues>({
  resolver: zodResolver(loginSchema),

  defaultValues: {
    email: "",
    password: "",
  },
});

const onSubmit = (values: LoginFormValues) => {
  console.log(values);
};
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

      <form className="mt-8 space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        <FormInput
    control={form.control}
    name="email"
    label="Email"
    placeholder="john@example.com"
/>

       <PasswordInput
    control={form.control}
    name="password"
/>

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