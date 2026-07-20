"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function PasswordInput() {
  const [show, setShow] = useState(false);

  return (
    <div className="space-y-2">
      <Label>Password</Label>

      <div className="relative">
        <Input
          type={show ? "text" : "password"}
          placeholder="Enter password"
          className="h-12 rounded-xl pr-12"
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
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