import type { InputHTMLAttributes, ReactNode } from "react";

type OnboardingFieldProps = {
  label: string;
  icon?: string;
  trailing?: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

export default function OnboardingField({
  label,
  icon,
  trailing,
  className = "",
  id,
  ...inputProps
}: OnboardingFieldProps) {
  const fieldId = id ?? inputProps.name;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={fieldId} className="font-label-md text-label-md text-on-surface-variant">
        {label}
      </label>
      <div className="flex items-center rounded-lg border border-white/10 bg-[#050811] p-3 shadow-inner transition-colors focus-within:border-primary">
        {icon ? (
          <span className="material-symbols-outlined mr-2 text-primary/70">{icon}</span>
        ) : null}
        <input
          id={fieldId}
          className={`w-full border-none bg-transparent p-0 font-body-md text-body-md text-on-surface outline-none placeholder:text-on-surface-variant/40 focus:ring-0 ${className}`}
          {...inputProps}
        />
        {trailing}
      </div>
    </div>
  );
}
