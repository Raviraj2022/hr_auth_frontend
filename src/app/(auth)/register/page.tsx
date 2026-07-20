import { AuthCard } from "../../../components/auth";

export default function RegisterPage() {
  return (
    <AuthCard>
      <h2 className="text-3xl font-bold">
        Create Account
      </h2>

      <p className="mt-2 text-muted-foreground">
        Create your HRMS account.
      </p>
    </AuthCard>
  );
}