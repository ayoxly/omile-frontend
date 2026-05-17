import type { Metadata } from "next";
import AuthForm from "./AuthForm";

export const metadata: Metadata = {
  title: "Omile — Create your account",
};

export default function AuthPage() {
  return <AuthForm />;
}
