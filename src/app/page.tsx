import OmileLogo from "@/components/Logo";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    icon: "shield_locked",
    title: "Trustworthy",
    description:
      "Verified identities and a reputation system so you always know who you're exchanging with.",
  },
  {
    icon: "payments",
    title: "Instant Pay",
    description:
      "Settlements happen instantly and securely when a service is completed.",
  },
  {
    icon: "diversity_3",
    title: "Community-First",
    description:
      "Built for local neighborhoods to strengthen the economy around you.",
  },
] as const;

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-surface/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#" className="flex items-center gap-2.5">
            <OmileLogo className="h-8 w-8" />
            <span className="font-headline-md text-headline-md font-semibold text-on-surface">
              Omile
            </span>
          </a>
          <Link
            href="/onboarding/auth"
            className="rounded-lg bg-primary px-5 py-2.5 font-label-md text-label-md text-on-primary transition-opacity hover:opacity-90"
          >
            Get Started
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPdBDcbrT3T6q6fyiwQbAa-9vdlteqib4Cz0Fxh0qQDO5VDcI-34JV8q3ATzNZyiQyUlk8rGBP5K8kL92VsPMUdcqXqBBODEV_zuxo-rPwPBgHGaKM8twUGIwCOAWjH5tnp2FpQwmYun0EE_DRf3G4dg5oKihwUZPX_qinYiR6Lu6BeOmOMKMmZgPIRbkm6S7S2aJRLq7dy0MiP-7XrIPCXEF5CBjowzFue0gYvj4AW0kqANX_mRF8QyYpreW77jUd0etm2x0OSA"
              alt="A vibrant neighborhood street in Lagos at dusk"
              fill
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/90 to-background" />
          </div>

          <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="font-headline-lg-mobile text-headline-lg-mobile leading-tight text-on-surface md:font-display-lg md:text-display-lg">
                Powering Neighborhood{" "}
                <span className="text-primary">Exchanges</span>
              </h1>
              <p className="mt-6 font-body-lg text-body-lg text-on-surface-variant">
                The secure service marketplace built for your community — hyper-local
                trust, instant settlements, and reliability you can count on.
              </p>
              <div
                id="get-started"
                className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
              >
                <Link
                  href="/onboarding/auth"
                  className="w-full rounded-lg bg-primary px-8 py-3.5 text-center font-label-md text-label-md text-on-primary shadow-[0_0_20px_rgba(70,241,207,0.25)] transition-opacity hover:opacity-90 sm:w-auto"
                >
                  Get Started
                </Link>
                <button
                  type="button"
                  className="w-full rounded-lg border border-secondary/60 px-8 py-3.5 font-label-md text-label-md text-secondary transition-colors hover:bg-secondary/10 sm:w-auto"
                >
                  Explore Services
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto flex max-w-6xl flex-col gap-14 px-6 py-20 md:py-24">
          <header className="flex flex-col items-center gap-4 text-center">
            <h2 className="max-w-2xl text-balance font-headline-lg text-3xl font-semibold leading-tight tracking-tight text-on-surface md:text-4xl">
              A Foundation of Reliability
            </h2>
            <p className="max-w-2xl text-pretty text-base leading-relaxed text-on-surface-variant md:text-lg">
              High-tech infrastructure with the warmth of a neighborhood market.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map(({ icon, title, description }) => (
              <article
                key={title}
                className="glass-card flex flex-col p-6 md:p-8"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-white/5 bg-surface-container">
                  <span
                    className="material-symbols-outlined text-primary text-2xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {icon}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  {title}
                </h3>
                <p className="mt-2 font-body-md text-body-md text-on-surface-variant">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 text-center">
          <div className="flex items-center gap-2 opacity-70">
            <OmileLogo className="h-6 w-6" />
            <span className="font-label-md text-label-md text-on-surface-variant">
              Omile
            </span>
          </div>
          <p className="font-label-sm text-label-sm text-on-surface-variant/50">
            © {new Date().getFullYear()} Omile Inc.
          </p>
        </div>
      </footer>
    </div>
  );
}
