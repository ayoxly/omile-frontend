"use client";

import { useRouter } from "next/navigation";
import { type FormEvent } from "react";

const inputClass =
  "w-full rounded-lg border border-white/10 bg-[#050811]/80 py-3 px-4 font-body-md text-body-md text-on-surface outline-none backdrop-blur-sm transition-all placeholder:text-on-surface-variant/50 focus:border-primary focus:ring-1 focus:ring-primary";

export default function PostTaskForm() {
  const router = useRouter();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push("/home");
  }

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-grow flex-col gap-6 px-container-margin pt-24 pb-8 md:px-20">
      <header className="flex flex-col gap-1">
        <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface md:font-headline-lg md:text-headline-lg">
          Post a Task
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Describe what you need help with and set your terms.
        </p>
      </header>

      <form
        onSubmit={handleSubmit}
        className="glass-card relative flex flex-col gap-6 overflow-hidden p-4 md:p-6"
      >
        <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/10 blur-[80px]" />

        <div className="relative z-10 flex flex-col gap-2">
          <label htmlFor="task-title" className="font-label-md text-label-md text-on-surface-variant">
            What do you need help with?
          </label>
          <input
            id="task-title"
            name="title"
            type="text"
            required
            placeholder="e.g., Fix leaky kitchen sink"
            className={inputClass}
          />
        </div>

        <div className="relative z-10 flex flex-col gap-2">
          <label htmlFor="task-desc" className="font-label-md text-label-md text-on-surface-variant">
            Description
          </label>
          <textarea
            id="task-desc"
            name="description"
            rows={4}
            required
            placeholder="Provide details about the task, requirements, and any specific tools needed..."
            className={`${inputClass} resize-none`}
          />
        </div>

        <div className="relative z-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="task-price" className="font-label-md text-label-md text-on-surface-variant">
              Price (₦)
            </label>
            <div className="relative">
              <span className="absolute top-1/2 left-4 -translate-y-1/2 font-label-md text-label-md text-on-surface-variant/70">
                ₦
              </span>
              <input
                id="task-price"
                name="price"
                type="number"
                min={0}
                required
                placeholder="0.00"
                className={`${inputClass} pl-9`}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="task-time" className="font-label-md text-label-md text-on-surface-variant">
              Time Estimate
            </label>
            <div className="relative">
              <select
                id="task-time"
                name="time"
                required
                defaultValue=""
                className={`${inputClass} appearance-none pr-10`}
              >
                <option value="" disabled>
                  Select duration
                </option>
                <option value="1">Less than 1 hour</option>
                <option value="2">1 - 3 hours</option>
                <option value="3">Half day</option>
                <option value="4">Full day</option>
                <option value="5">Multiple days</option>
              </select>
              <span className="material-symbols-outlined pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-on-surface-variant">
                keyboard_arrow_down
              </span>
            </div>
          </div>
        </div>

        <div className="relative z-10 h-px w-full bg-white/5" />

        <div className="relative z-10 flex items-start gap-3 rounded-lg border border-secondary-container/30 bg-secondary-container/20 p-3">
          <span className="material-symbols-outlined mt-0.5 text-secondary">shield_lock</span>
          <div>
            <span className="font-label-md text-label-md text-secondary">Secure Escrow</span>
            <p className="mt-1 font-label-sm text-label-sm text-on-surface-variant">
              Funds are held securely until the task is complete.
            </p>
          </div>
        </div>

        <button
          type="submit"
          className="relative z-10 mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 font-label-md text-label-md font-bold text-on-primary shadow-[0_0_20px_rgba(70,241,207,0.2)] transition-all hover:opacity-90 active:scale-[0.98]"
        >
          <span className="material-symbols-outlined filled">check_circle</span>
          Post for secure hold
        </button>
      </form>
    </main>
  );
}
