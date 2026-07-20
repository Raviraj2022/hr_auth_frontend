import { AuthCard } from "../../../components/auth";

export default function LoginPage() {
  return (
    <AuthCard>
      <h2 className="text-3xl font-bold">
        Welcome Back 👋
      </h2>

      <p className="mt-2 text-muted-foreground">
        Sign in to continue.
      </p>
    </AuthCard>
  );
}