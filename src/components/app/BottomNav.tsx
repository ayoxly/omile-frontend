"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { APP_NAV } from "@/lib/navigation";

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="glass-bottom-nav fixed bottom-0 z-50 flex h-20 w-full items-center justify-around rounded-t-xl px-4 pb-safe md:hidden">
      {APP_NAV.map(({ href, label, icon, match }) => {
        const active = match(pathname);
        return (
          <Link
            key={href}
            href={href}
            className={`flex w-16 flex-col items-center justify-center transition-all duration-200 active:scale-90 ${
              active
                ? "font-bold text-primary"
                : "text-on-surface-variant/60 hover:text-primary/80"
            }`}
          >
            <span
              className={`material-symbols-outlined mb-1 text-2xl ${active ? "filled" : ""}`}
            >
              {icon}
            </span>
            <span className="font-label-sm text-label-sm">{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
