import OmileLogo from "../Logo";

export default function OnboardingBrand({ icon = "shield_lock" }: { icon?: string }) {
  return (
    <div className="mb-6 flex items-center justify-center gap-2 opacity-80">
      <OmileLogo className="h-8 w-8" />
      <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
        Omile
      </span>
    </div>
  );
}
