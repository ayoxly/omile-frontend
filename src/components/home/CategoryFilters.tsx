"use client";

import { useState } from "react";
import { TASK_CATEGORIES } from "@/lib/tasks";

export default function CategoryFilters() {
  const [active, setActive] = useState("all");

  return (
    <div className="flex gap-2 overflow-x-auto pb-1 md:flex-col md:overflow-visible md:pb-0 hide-scrollbar md:pt-0 pt-4">
      {TASK_CATEGORIES.map(({ id, label, icon }) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            type="button"
            onClick={() => setActive(id)}
            className={`flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2 font-label-md text-label-md transition-colors ${
              isActive
                ? "bg-primary text-on-primary"
                : "border border-secondary/50 text-secondary hover:bg-secondary/10"
            }`}
          >
            <span className="material-symbols-outlined text-lg">{icon}</span>
            {label}
          </button>
        );
      })}
    </div>
  );
}
