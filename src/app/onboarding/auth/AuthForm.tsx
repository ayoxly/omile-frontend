"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { type FormEvent, useState } from "react";
import OnboardingBackground from "@/components/onboarding/OnboardingBackground";
import OnboardingBrand from "@/components/onboarding/OnboardingBrand";
import OnboardingField from "@/components/onboarding/OnboardingField";

export default function AuthForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push("/onboarding/location");
  }

  return (
    <div className="relative flex min-h-dvh flex-col overflow-x-hidden text-on-background selection:bg-primary/30 selection:text-primary">
      <OnboardingBackground />

      <form
        onSubmit={handleSubmit}
        className="relative z-10 mx-auto flex min-h-dvh w-full max-w-md flex-col justify-between px-container-margin py-8 md:py-20"
      >
        <header className="mt-8 text-center">
          <OnboardingBrand icon="mail" />
          <h1 className="mb-3 font-headline-lg-mobile text-headline-lg-mobile text-on-surface md:font-headline-lg md:text-headline-lg">
            Create your account
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Sign up with your email and password to join your local community.
          </p>
        </header>

        <div className="glass-panel relative my-8 flex flex-col gap-5 overflow-hidden p-6">
          <div className="scan-pattern pointer-events-none absolute inset-0" aria-hidden />
          <div className="relative z-10 flex flex-col gap-5">
            <OnboardingField
              label="Email"
              name="email"
              type="email"
              icon="mail"
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
            <OnboardingField
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              icon="lock"
              placeholder="At least 8 characters"
              autoComplete="new-password"
              minLength={8}
              required
              trailing={
                <button
                  type="button"
                  onClick={() => setShowPassword((value) => !value)}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-on-surface-variant transition-colors hover:bg-white/5 hover:text-on-surface"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  <span className="material-symbols-outlined text-xl">
                    {showPassword ? "visibility_off" : "visibility"}
                  </span>
                </button>
              }
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 pb-6">
          <button
            type="submit"
            className="w-full rounded-xl bg-primary py-[18px] font-label-md text-label-md text-on-primary shadow-[0_4px_14px_rgba(70,241,207,0.2)] transition-colors hover:bg-primary-fixed"
          >
            Continue
          </button>
          <p className="text-center font-label-sm text-label-sm text-on-surface-variant">
            Already have an account?{" "}
            <Link
              href="/onboarding/auth"
              className="text-primary underline-offset-4 hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
