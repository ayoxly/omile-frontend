export default function OmileLogo({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-hidden
    >
      <path
        d="M75 90C91.5685 90 105 76.5685 105 60C105 43.4315 91.5685 30 75 30C58.4315 30 45 43.4315 45 60"
        stroke="#10B981"
        strokeWidth="16"
        strokeLinecap="round"
      />
      <path
        d="M45 30C28.4315 30 15 43.4315 15 60C15 76.5685 28.4315 90 45 90C61.5685 90 75 76.5685 75 60"
        stroke="#0F172A"
        strokeWidth="16"
        strokeLinecap="round"
      />
      <path
        d="M45 30C61.5685 30 75 43.4315 75 60"
        stroke="#0F172A"
        strokeWidth="16"
        strokeLinecap="round"
      />
    </svg>
  );
}
