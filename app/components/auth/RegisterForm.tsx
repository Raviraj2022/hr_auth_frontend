"use client";

import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import AuthCard from "./AuthCard";
import FormInput from "./FormInput";
import PasswordField from "./PasswordInput";
import SubmitButton from "./SubmitButton";
import AuthDivider from "./AuthDivider";
import SocialLogin from "./SocialLogin";
import { useRouter } from 'next/navigation';

import {
  registerSchema,
  RegisterFormValues,
} from "../../features/auth/validation/register.schema";
import { authService } from "@/app/services/auth.service";

export default function RegisterForm() {
    const router = useRouter();
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),

    defaultValues: {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "Employee",
  },
  });

  const onSubmit = async (
  values: RegisterFormValues
) => {
  try {
    await authService.register(values);

    router.push("/login");
  } catch (error) {
    console.error(error);
  }
};
  return (
    <AuthCard>
      <div className="text-center">
        <h1 className="text-3xl font-bold">
          Create Account 🚀
        </h1>

        <p className="mt-2 text-muted-foreground">
          Start managing your organization today.
        </p>
      </div>

      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-8 space-y-5"
      >
        
          <FormInput
            control={form.control}
            name="name"
            label="First Name"
            placeholder="John"
          />

          
        

        <FormInput
          control={form.control}
          name="email"
          label="Email"
          type="email"
          placeholder="john@example.com"
        />

        <PasswordField
          control={form.control}
          name="password"
          label="Password"
        />

        <PasswordField
          control={form.control}
          name="confirmPassword"
          label="Confirm Password"
        />

     <Controller
  control={form.control}
  name="role"
  render={({ field }) => (
    <Select
      value={field.value}
      onValueChange={field.onChange}
    >
      <SelectTrigger className="h-12 rounded-xl">
        <SelectValue placeholder="Select Role" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="Employee">Employee</SelectItem>
        <SelectItem value="HR">HR</SelectItem>
        <SelectItem value="Manager">Manager</SelectItem>
        <SelectItem value="Admin">Admin</SelectItem>
      </SelectContent>
    </Select>
  )}
/>

        <SubmitButton>
          Create Account
        </SubmitButton>

        <AuthDivider />

        <SocialLogin />

        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-primary hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </AuthCard>
  );
}