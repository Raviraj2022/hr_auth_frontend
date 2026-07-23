import { ReactNode } from "react";
import AuthSide from "./AuthSide";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({
  children,
}: AuthLayoutProps) {
  return (
    <main className="min-h-screen bg-background">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left Side */}
        <AuthSide />

        {/* Right Side */}
        <section className="flex items-center justify-center p-6 lg:p-12">
          <div className="w-full max-w-md">
            {children}
          </div>
        </section>
      </div>
    </main>
  );
}