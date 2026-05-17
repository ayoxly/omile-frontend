import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import StarRating from "@/components/profile/StarRating";
import { getTaskDetail, TASK_DETAILS } from "@/lib/task-details";

type PageProps = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return Object.keys(TASK_DETAILS).map((id) => ({ id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const task = getTaskDetail(id);
  return { title: task ? `${task.title} — Omile` : "Task — Omile" };
}

export default async function TaskDetailPage({ params }: PageProps) {
  const { id } = await params;
  const task = getTaskDetail(id);
  if (!task) notFound();

  const { poster } = task;

  return (
    <main className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-6 px-container-margin md:px-20 lg:grid-cols-12">
      <div className="flex flex-col gap-6 lg:col-span-8">
        <article className="glass-card flex flex-col gap-4 p-6">
          <div className="flex flex-wrap gap-2">
            {task.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-surface-variant px-3 py-1 font-label-sm text-label-sm text-on-surface-variant"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary md:font-headline-lg md:text-headline-lg">
              {task.title}
            </h2>
            <p className="mt-2 font-display-lg text-display-lg tracking-tight text-on-surface">
              {task.price}
            </p>
          </div>
          <hr className="my-2 border-t border-white/5" />
          <div className="flex flex-col gap-2">
            <h3 className="font-label-md text-label-md text-on-surface">Description</h3>
            {task.description.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="font-body-md text-body-md leading-relaxed text-on-surface-variant"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </article>

        <section className="glass-card flex flex-col gap-4 p-6">
          <div className="flex items-center justify-between">
            <h3 className="flex items-center gap-1 font-label-md text-label-md text-on-surface">
              <span className="material-symbols-outlined text-xl text-primary">map</span>
              Location
            </h3>
            <span className="rounded-full bg-surface-variant px-3 py-1 font-label-sm text-label-sm text-on-surface-variant">
              {task.locationDistance}
            </span>
          </div>
          <div className="relative h-[200px] overflow-hidden rounded-xl border border-white/5 bg-surface-container-high">
            <Image src={task.mapImage} alt="Task location map" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 to-transparent" />
            <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
              <div className="rounded-full bg-primary/20 p-1 animate-pulse">
                <div className="rounded-full bg-primary p-1 text-on-primary shadow-[0_0_15px_rgba(70,241,207,0.5)]">
                  <span className="material-symbols-outlined filled text-2xl">location_on</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center font-label-sm text-label-sm text-on-surface-variant">
            Exact address provided upon application acceptance.
          </p>
        </section>
      </div>

      <div className="flex flex-col gap-6 lg:col-span-4">
        <section className="glass-card flex flex-col items-center gap-4 p-6 text-center">
          <div className="relative mb-1 h-20 w-20 overflow-hidden rounded-full border-2 border-surface-variant shadow-lg">
            <Image src={poster.avatarUrl} alt={poster.name} fill className="object-cover" />
            <div className="absolute right-0 bottom-0 h-4 w-4 rounded-full border-2 border-background bg-primary" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <h3 className="font-headline-md text-headline-md text-on-surface">{poster.name}</h3>
            <p className="font-label-sm text-label-sm text-on-surface-variant">
              Member since {poster.memberSince}
            </p>
          </div>
          {poster.verified ? (
            <div className="mt-1 flex w-max items-center justify-center gap-1 rounded-full border border-tertiary-container/20 bg-secondary/20 px-3 py-1 text-tertiary-container">
              <span className="material-symbols-outlined filled text-base">shield_person</span>
              <span className="font-label-sm text-label-sm">Identity Verified</span>
            </div>
          ) : null}
          <hr className="my-2 w-full border-t border-white/5" />
          <div className="flex w-full justify-around">
            <div className="flex flex-col items-center gap-1">
              <span className="font-headline-md text-headline-md text-on-surface">{poster.rating}</span>
              <StarRating rating={poster.rating} size={14} />
            </div>
            <div className="h-full w-px bg-white/5" />
            <div className="flex flex-col items-center gap-1">
              <span className="font-headline-md text-headline-md text-on-surface">{poster.tasksPosted}</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">Tasks Posted</span>
            </div>
          </div>
        </section>

        <section className="glass-card sticky top-24 flex flex-col gap-4 p-6">
          <p className="text-center font-label-md text-label-md text-on-surface-variant">Ready to help?</p>
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3.5 font-label-md text-label-md text-[#000000] shadow-[0_4px_14px_rgba(70,241,207,0.3)] transition-colors hover:bg-primary-fixed active:scale-[0.98]"
          >
            Apply to Task
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </button>
          <div className="mt-2 flex items-center justify-center gap-1 rounded-xl border border-white/5 bg-surface-variant/30 py-3 text-on-surface-variant/80">
            <span className="material-symbols-outlined filled text-lg text-tertiary-container">lock</span>
            <span className="font-label-sm text-label-sm">Secured by Omile Escrow</span>
          </div>
        </section>
      </div>
    </main>
  );
}
