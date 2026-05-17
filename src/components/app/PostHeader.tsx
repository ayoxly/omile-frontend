"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { APP_NAV } from "@/lib/navigation";

export default function PostHeader() {
  const pathname = usePathname();

  return (
    <header className="glass-header fixed top-0 z-50 w-full border-b border-white/10 shadow-sm">
      <div className="relative mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4">
        <button
          type="button"
          className="flex items-center justify-center rounded-full p-2 text-primary transition-opacity hover:opacity-80 active:scale-95"
          aria-label="Location"
        >
          <span className="material-symbols-outlined">location_on</span>
        </button>
        <h1 className="font-headline-md text-headline-md font-bold tracking-tight text-primary md:hidden">
          Omile
        </h1>
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {APP_NAV.map(({ href, label, match }) => {
            const active = match(pathname);
            const navLabel = label === "Post" ? "Post" : label;
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-2 font-label-md text-label-md transition-colors ${
                  active
                    ? "font-bold text-primary"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {label === "Post" ? (
                  <span className="material-symbols-outlined filled text-lg">add_circle</span>
                ) : null}
                {navLabel}
              </Link>
            );
          })}
        </nav>
        <button
          type="button"
          className="flex items-center justify-center rounded-full p-2 text-primary transition-opacity hover:opacity-80 active:scale-95"
          aria-label="Notifications"
        >
          <span className="material-symbols-outlined">notifications</span>
        </button>
      </div>
    </header>
  );
}
