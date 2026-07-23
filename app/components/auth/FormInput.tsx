"use client";

import {
  Control,
  Controller,
  FieldPath,
  FieldValues,
} from "react-hook-form";

import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";

interface Props<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  label: string;
  placeholder: string;
  type?: string;
}

export default function FormInput<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = "text",
}: Props<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <div className="space-y-2">
          <Label>{label}</Label>

          <Input
            {...field}
            type={type}
            placeholder={placeholder}
            className="h-12 rounded-xl"
          />

          {fieldState.error && (
            <p className="text-sm text-red-500">
              {fieldState.error.message}
            </p>
          )}
        </div>
      )}
    />
  );
}