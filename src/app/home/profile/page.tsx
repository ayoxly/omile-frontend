import type { Metadata } from "next";
import Image from "next/image";
import ReviewCard from "@/components/profile/ReviewCard";
import { PROFILE, REVIEWS } from "@/lib/profile";

export const metadata: Metadata = {
  title: "Profile — Omile",
};

export default function ProfilePage() {
  return (
    <main className="mx-auto w-full max-w-7xl flex-grow px-container-margin md:px-4">
      <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="flex flex-col gap-6 lg:col-span-4">
          <div className="glass-card relative flex flex-col items-center overflow-hidden p-6 text-center ring-2 ring-inset ring-white/5">
            <div className="relative mb-6 h-32 w-32 overflow-hidden rounded-full border-2 border-primary/20">
              <Image
                src={PROFILE.avatarUrl}
                alt={`${PROFILE.name} profile`}
                fill
                className="object-cover"
              />
            </div>
            <div className="mb-4 flex w-max items-center justify-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-primary">
              <span className="material-symbols-outlined filled text-base">verified</span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider">
                Identity Verified
              </span>
            </div>
            <h1 className="mb-1 font-headline-lg-mobile text-headline-lg-mobile text-on-surface md:font-headline-lg md:text-headline-lg">
              {PROFILE.name}
            </h1>
            <p className="mb-8 font-body-md text-body-md text-on-surface-variant">
              Member since {PROFILE.memberSince}
            </p>
            <div className="relative mb-8 flex w-full flex-col items-center justify-center overflow-hidden rounded-xl border border-white/5 bg-[#1A1F3B] p-6 shadow-inner">
              <div className="absolute inset-0 bg-gradient-to-br from-[#F59E0B]/10 to-transparent opacity-50" />
              <span className="material-symbols-outlined filled relative mb-3 text-6xl text-[#F59E0B] drop-shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                shield_person
              </span>
              <h2 className="relative mb-2 text-center font-headline-md text-headline-md text-[#F59E0B]">
                Top 5% Neighbor
              </h2>
              <p className="relative text-center font-label-sm text-label-sm uppercase tracking-widest text-[#F59E0B]/80">
                Exceptional Reliability Status
              </p>
            </div>
            <div className="mt-2 w-full border-t border-white/5 pt-6 text-left">
              <h3 className="mb-3 flex items-center gap-2 font-label-md text-label-md uppercase tracking-widest text-primary">
                <span className="material-symbols-outlined text-lg">info</span>
                About Me
              </h3>
              <p className="font-body-md text-body-md leading-relaxed text-on-surface/90">
                {PROFILE.bio}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:col-span-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="glass-card flex items-center gap-6 p-6 ring-2 ring-inset ring-white/5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary">
                <span className="material-symbols-outlined filled text-3xl">task_alt</span>
              </div>
              <div>
                <p className="mb-2 font-display-lg text-display-lg leading-none text-on-surface">
                  {PROFILE.tasksCompleted}
                </p>
                <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
                  Tasks Completed
                </p>
              </div>
            </div>
            <div className="glass-card flex items-center gap-6 p-6 ring-2 ring-inset ring-white/5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#F59E0B]/20 bg-[#F59E0B]/10 text-[#F59E0B]">
                <span className="material-symbols-outlined filled text-3xl">star</span>
              </div>
              <div>
                <p className="mb-2 font-display-lg text-display-lg leading-none text-on-surface">
                  {PROFILE.averageRating}
                </p>
                <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
                  Average Rating
                </p>
              </div>
            </div>
          </div>

          <div className="mt-2 flex items-center justify-between px-2">
            <h2 className="flex items-center gap-2 font-headline-md text-headline-md text-on-surface">
              <span className="material-symbols-outlined text-primary">forum</span>
              Community Reviews
            </h2>
            <button
              type="button"
              className="flex items-center font-label-md text-label-md text-primary hover:underline"
            >
              View All
              <span className="material-symbols-outlined ml-1 text-base">chevron_right</span>
            </button>
          </div>

          <div className="flex flex-col gap-4">
            {REVIEWS.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
