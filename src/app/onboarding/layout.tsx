import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Omile — Onboarding",
};

export default function OnboardingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
