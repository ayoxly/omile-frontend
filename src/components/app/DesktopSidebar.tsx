"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { APP_NAV } from "@/lib/navigation";

export default function DesktopSidebar() {
  const pathname = usePathname();
  const hideOnTaskDetail = pathname.startsWith("/home/tasks/");

  if (hideOnTaskDetail) return null;

  return (
    <nav className="fixed top-16 bottom-0 left-0 z-40 hidden w-20 flex-col gap-2 border-r border-white/5 bg-surface-container-lowest/50 px-4 pt-6 md:flex lg:w-60">
      {APP_NAV.map(({ href, label, icon, match }) => {
        const active = match(pathname);
        const displayLabel = label === "Post" ? "Post a Task" : label;
        return (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-4 rounded-xl px-4 py-2 font-label-md text-label-md transition-colors ${
              active
                ? "bg-primary/10 text-primary hover:bg-primary/20"
                : "text-on-surface-variant hover:bg-surface-container-high/50 hover:text-primary"
            }`}
          >
            <span className={`material-symbols-outlined ${active ? "filled" : ""}`}>
              {icon}
            </span>
            <span className="hidden lg:inline">{displayLabel}</span>
          </Link>
        );
      })}
      <div className="mt-auto hidden pb-6 lg:block">
        <Link
          href="/home/post"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-2 font-label-md text-label-md text-on-primary transition-opacity hover:opacity-90"
        >
          <span className="material-symbols-outlined text-xl">add</span>
          Post Task
        </Link>
      </div>
    </nav>
  );
}
