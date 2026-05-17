import Image from "next/image";
import Link from "next/link";
import type { Task, TaskBadge } from "@/lib/tasks";

function BadgeIcon({ badge }: { badge: TaskBadge }) {
  const iconClass =
    badge.tone === "urgent"
      ? "text-error"
      : badge.tone === "secondary"
        ? "text-secondary"
        : "text-tertiary-container";

  const labelClass = badge.tone === "urgent" ? "text-error" : "text-on-surface";

  return (
    <div className="flex items-center gap-1.5 rounded-lg border border-white/5 bg-surface-container-low px-3 py-1.5">
      <span className={`material-symbols-outlined text-base ${iconClass}`}>{badge.icon}</span>
      <span className={`font-label-md text-label-md ${labelClass}`}>{badge.label}</span>
    </div>
  );
}

export default function TaskCard({ task }: { task: Task }) {
  return (
    <Link href={`/home/tasks/${task.id}`} className="block">
    <article className="glass-card group cursor-pointer p-4 transition-colors hover:bg-surface-container-high/40">
      <div className="mb-3 flex items-start justify-between">
        <div className="flex items-center gap-3">
          {task.avatarUrl ? (
            <Image
              src={task.avatarUrl}
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 rounded-full border border-white/10 object-cover"
            />
          ) : (
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-surface-container-highest font-headline-md text-lg text-on-surface-variant">
              {task.avatarInitial}
            </div>
          )}
          <div>
            <h3 className="text-xl font-semibold leading-7 text-on-surface transition-colors group-hover:text-primary">
              {task.title}
            </h3>
            <p className="mt-0.5 flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant">
              <span className="material-symbols-outlined text-sm">person</span>
              {task.author}
              {task.verified ? (
                <span className="ml-2 inline-flex items-center rounded bg-secondary-container/30 px-2 py-0.5 text-[10px] uppercase tracking-wider text-secondary">
                  Verified
                </span>
              ) : null}
            </p>
          </div>
        </div>
        <div className="text-right">
          <span className="text-xl font-bold text-primary">{task.price}</span>
        </div>
      </div>

      {task.description ? (
        <p className="mt-2 line-clamp-2 font-body-md text-body-md text-on-surface-variant">
          {task.description}
        </p>
      ) : null}

      <div className="mt-4 flex flex-wrap gap-2 border-t border-white/5 pt-3">
        {task.badges.map((badge) => (
          <BadgeIcon key={badge.label} badge={badge} />
        ))}
      </div>
    </article>
    </Link>
  );
}
