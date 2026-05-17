export default function AppHeader({ location = "Lekki Phase 1" }: { location?: string }) {
  return (
    <header className="glass-header fixed top-0 z-50 mx-auto flex h-16 w-full max-w-7xl items-center justify-between border-b border-white/10 px-4 shadow-sm">
      <button
        type="button"
        className="flex items-center gap-2 transition-opacity hover:opacity-80 active:scale-95"
      >
        <span className="material-symbols-outlined text-primary">location_on</span>
        <span className="font-headline-md text-headline-md font-bold tracking-tight text-primary">
          {location}
        </span>
      </button>
      <button
        type="button"
        className="transition-opacity hover:opacity-80 active:scale-95"
        aria-label="Notifications"
      >
        <span className="material-symbols-outlined text-primary">notifications</span>
      </button>
    </header>
  );
}
