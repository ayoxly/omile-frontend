import Link from "next/link";

export default function TaskDetailHeader() {
  return (
    <header className="glass-header fixed top-0 right-0 left-0 z-50 mx-auto flex h-16 w-full max-w-7xl items-center justify-between border-b border-white/10 px-4 shadow-sm">
      <Link
        href="/home"
        className="flex items-center justify-center rounded-full p-2 text-on-surface-variant transition-opacity hover:opacity-80 active:scale-95"
        aria-label="Back to home"
      >
        <span className="material-symbols-outlined filled">arrow_back</span>
      </Link>
      <h1 className="font-headline-md text-headline-md font-bold tracking-tight text-primary">Omile</h1>
      <button
        type="button"
        className="flex items-center justify-center rounded-full p-2 text-on-surface-variant transition-opacity hover:opacity-80 active:scale-95"
        aria-label="Notifications"
      >
        <span className="material-symbols-outlined">notifications</span>
      </button>
    </header>
  );
}
