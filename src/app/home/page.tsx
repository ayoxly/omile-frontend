import Link from "next/link";
import CategoryFilters from "@/components/home/CategoryFilters";
import TaskCard from "@/components/home/TaskCard";
import { TASKS } from "@/lib/tasks";

export default function HomePage() {
  return (
    <>
      <main className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-5 md:grid-cols-12 md:gap-6 md:px-20">
        <div className="md:col-span-3">
          <CategoryFilters />
        </div>

        <div className="mt-4 flex flex-col gap-6 md:col-span-9 md:mt-0">
          {TASKS.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </main>

      <Link
        href="/home/post"
        className="fixed bottom-[100px] right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-on-primary shadow-[0_4px_20px_rgba(70,241,207,0.3)] transition-transform hover:scale-105 active:scale-95 md:hidden"
        aria-label="Post a task"
      >
        <span className="material-symbols-outlined text-[28px]">add</span>
      </Link>
    </>
  );
}
