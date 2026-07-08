import AuthLayout from "@/features/auth/components/AuthLayout";

export default function Layout({ children }) {
  return (
    <AuthLayout>
      {children}
    </AuthLayout>
  );
}