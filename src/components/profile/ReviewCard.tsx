import Image from "next/image";
import type { Review } from "@/lib/profile";
import StarRating from "./StarRating";

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="glass-card cursor-default p-6 transition-transform duration-300 hover:-translate-y-0.5">
      <div className="mb-4 flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 overflow-hidden rounded-full border border-white/10 bg-surface-variant">
            <Image
              src={review.avatarUrl}
              alt={review.author}
              width={48}
              height={48}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-base font-label-md text-label-md text-on-surface">{review.author}</p>
            <p className="font-label-sm text-label-sm text-on-surface-variant opacity-70">
              {review.date}
            </p>
          </div>
        </div>
        <StarRating rating={review.rating} />
      </div>
      <p className="pl-0 font-body-md text-body-md leading-relaxed text-on-surface/80 md:pl-16">
        &ldquo;{review.body}&rdquo;
      </p>
    </article>
  );
}
