"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const MAP_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCz7kuKX5QYjYyrFB202f8aooQmNJBreJi6mWke8uoUMeR6UUok0AftxPDy0cOJhUDynbVRO0uAJvh8Z_k456l9fcNityA4-9hObQlW1ByF8c94eMxdBiZVcSxQ-QpgAApWLJSFwD42qkhvuJR4pSLJOJftCZ0RsYUUuhj42ImE0kfJuACG2S7w8crBsgGvXSPe8jY7hOXzMf-H_cC72ex7mkPuk92ZpJkdFktdM7XygQVUJIEvUmIicw1sHzxFX72XCDjaO4m2ZQ";

const NEARBY_ZONES = ["Lekki Phase 1", "Ikoyi", "Gbagada"] as const;

export default function LocationSetup() {
  const router = useRouter();
  const [query, setQuery] = useState("Victoria Island");

  return (
    <div className="relative h-dvh w-full overflow-hidden bg-background font-body-md text-on-surface selection:bg-primary/30 selection:text-primary">
      <div className="absolute inset-0 z-0">
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-background/60 via-background/20 to-background/90" />
        <Image
          src={MAP_IMAGE}
          alt="Map view centered on Victoria Island, Lagos"
          fill
          className="object-cover opacity-60 mix-blend-luminosity brightness-75 contrast-125"
          priority
        />
        <div className="pointer-events-none absolute top-1/3 left-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
          <div className="flex h-16 w-16 animate-pulse items-center justify-center rounded-full bg-primary/10">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/30 backdrop-blur-sm">
              <div className="h-3 w-3 rounded-full bg-primary shadow-[0_0_12px_rgba(70,241,207,0.8)]" />
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[85%] drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
            <span
              className="material-symbols-outlined text-[48px] text-primary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              location_on
            </span>
          </div>
        </div>
      </div>

      <header className="absolute top-0 left-0 z-30 flex w-full items-center justify-between px-container-margin py-4">
        <Link
          href="/onboarding/auth"
          className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-surface-container/40 text-on-surface shadow-sm backdrop-blur-xl transition-all hover:bg-surface-container/60 hover:text-primary"
          aria-label="Go back"
        >
          <span className="material-symbols-outlined transition-transform group-active:scale-90">
            arrow_back
          </span>
        </Link>
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-surface-container/40 px-3 py-1.5 backdrop-blur-xl">
          <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_rgba(70,241,207,0.6)]" />
          <span className="font-label-sm text-label-sm text-on-surface">GPS Active</span>
        </div>
      </header>

      <main className="absolute bottom-0 left-0 z-20 w-full px-container-margin pb-container-margin md:top-1/2 md:bottom-auto md:left-20 md:w-[480px] md:-translate-y-1/2">
        <div className="glass-panel relative flex flex-col gap-6 overflow-hidden p-6">
          <div className="pointer-events-none absolute inset-0 rounded-[24px] border-2 border-white/5" />

          <div className="relative z-10 flex flex-col gap-1">
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile tracking-tight text-on-surface md:font-headline-lg md:text-headline-lg">
              Set Location
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Center the map on your primary neighborhood.
            </p>
          </div>

          <div className="relative z-10 flex flex-col gap-2">
            <label htmlFor="location-search" className="font-label-md text-label-md text-on-surface-variant">
              Search
            </label>
            <div className="flex items-center rounded-lg border border-white/10 bg-[#050811] p-3 shadow-inner transition-colors focus-within:border-primary">
              <span className="material-symbols-outlined mr-2 text-primary/70">search</span>
              <input
                id="location-search"
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Find your community"
                className="w-full border-none bg-transparent p-0 font-body-md text-body-md text-on-surface outline-none placeholder:text-on-surface-variant/40 focus:ring-0"
              />
              {query ? (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="flex h-8 w-8 items-center justify-center rounded-md transition-colors hover:bg-white/5"
                  aria-label="Clear search"
                >
                  <span className="material-symbols-outlined text-xl text-on-surface-variant hover:text-on-surface">
                    close
                  </span>
                </button>
              ) : null}
            </div>
          </div>

          <div className="relative z-10 flex flex-col">
            <h2 className="mb-3 px-1 font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant/70">
              Nearby Zones
            </h2>
            <ul className="flex flex-col">
              {NEARBY_ZONES.map((zone, index) => (
                <li key={zone}>
                  {index > 0 ? (
                    <div className="mx-auto my-1 h-px w-[calc(100%-32px)] bg-white/5" />
                  ) : null}
                  <button
                    type="button"
                    onClick={() => setQuery(zone)}
                    className="group flex w-full items-center justify-between rounded-lg p-3 transition-colors hover:bg-white/5 active:bg-white/10"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/10">
                        <span className="material-symbols-outlined text-lg text-secondary">location_on</span>
                      </div>
                      <span className="font-body-md text-body-md text-on-surface transition-colors group-hover:text-secondary">
                        {zone}
                      </span>
                    </div>
                    <span className="material-symbols-outlined -translate-x-2 text-secondary opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                      chevron_right
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative z-10 pt-2">
            <button
              type="button"
              onClick={() => router.push("/home")}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-4 font-label-md text-label-md text-on-primary shadow-[0_4px_16px_rgba(70,241,207,0.2)] transition-colors hover:bg-primary/90 active:scale-[0.98]"
            >
              <span>Confirm Location</span>
              <span className="material-symbols-outlined text-lg">check</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
