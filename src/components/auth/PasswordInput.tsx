"use client";

import {
  Control,
  FieldPath,
  FieldValues,
  Controller, // 1. Need to import this
} from "react-hook-form";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";

interface Props<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  label?: string; // Optional custom label
}

// 2. Accept your generic props here
export default function PasswordInput<T extends FieldValues>({
  control,
  name,
  label = "Password",
}: Props<T>) {
  const [show, setShow] = useState(false);

  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}</Label>

      <div className="relative">
        {/* 3. Wrap your input with Controller */}
        <Controller
          control={control}
          name={name}
          render={({ field, fieldState: { error } }) => (
            <>
              <Input
                {...field} // 4. Spread operator mirrors value, onChange, onBlur, etc.
                id={name}
                type={show ? "text" : "password"}
                placeholder="Enter password"
                className="h-12 rounded-xl pr-12"
              />
              
              {/* Optional: Render an error message if validation fails */}
              {error && (
                <p className="text-sm text-destructive mt-1">{error.message}</p>
              )}
            </>
          )}
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
          // Note: Adjusted positioning slightly from top-1/2 depending on parent layout
        >
          {show ? (
            <EyeOff className="h-5 w-5" />
          ) : (
            <Eye className="h-5 w-5" />
          )}
        </button>
      </div>
    </div>
  );
}