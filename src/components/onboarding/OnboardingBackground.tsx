export default function OnboardingBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary-container/10 blur-[100px]" />
      <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-secondary-container/10 blur-[80px]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[32px_32px] opacity-20 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
    </div>
  );
}
